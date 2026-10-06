const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: false } });
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req, res) => res.json({ ok: true }));

const rounds = [
  { title:'OSI-Turm', type:'order', labels:['Schicht 1','Schicht 2','Schicht 3','Schicht 4','Schicht 5','Schicht 6','Schicht 7'], answers:['Bitübertragung','Sicherung','Vermittlung','Transport','Sitzung','Darstellung','Anwendung'] },
  { title:'DHCP-DORA', type:'order', labels:['1. Schritt','2. Schritt','3. Schritt','4. Schritt'], answers:['Discover','Offer','Request','Acknowledge'] },
  { title:'TCP/IP', type:'category', categories:['Anwendung','Transport','Internet','Netzzugang'], pairs:[['HTTP','Anwendung'],['DNS','Anwendung'],['TCP','Transport'],['UDP','Transport'],['IP','Internet'],['ICMP','Internet'],['Ethernet','Netzzugang'],['WLAN','Netzzugang']] },
  { title:'Netzwerkgeräte', type:'category', categories:['Client','Switch','Router','Firewall'], pairs:[['APIPA','Client'],['ipconfig','Client'],['MAC-Tabelle','Switch'],['VLAN','Switch'],['NAT','Router'],['Standardgateway','Router'],['Stateful','Firewall'],['Portfilter','Firewall']] },
  { title:'Fehlerjäger', type:'category', categories:['DHCP','DNS','Gateway','Switch/Firewall'], pairs:[['169.254.x.x','DHCP'],['Name nicht erreichbar','DNS'],['Lokal ja, Internet nein','Gateway'],['Broadcast-Sturm','Switch/Firewall'],['Port 443 gesperrt','Switch/Firewall']] }
];
const rooms = new Map();
const code = () => Math.random().toString(36).slice(2, 7).toUpperCase();
const cleanName = n => String(n || 'Spieler').trim().slice(0, 20);
const makeGame = host => ({
  players:[{ id:host.id, name:cleanName(host.name), score:0, right:0, wrong:0, connected:true }],
  round:0, turn:0, filled:{}, status:'lobby', winner:null
});
function deck(round) { return round.type === 'order' ? round.answers : round.pairs.map(p => p[0]); }
function publicState(roomCode, game) {
  const r = rounds[game.round] || rounds[0];
  return { roomCode, players:game.players.map(p=>({name:p.name,score:p.score,right:p.right,wrong:p.wrong,connected:p.connected})), round:game.round, totalRounds:rounds.length, turn:game.turn, filled:game.filled, status:game.status, winner:game.winner, challenge:{ title:r.title,type:r.type,labels:r.labels||[],categories:r.categories||[],cards:deck(r).filter(x=>!Object.values(game.filled).some(v=>v.value===x)) } };
}
function emitState(roomCode) { const g=rooms.get(roomCode); if(g) io.to(roomCode).emit('state', publicState(roomCode,g)); }
function roundSize(r){return r.type==='order'?r.answers.length:r.pairs.length;}
function validateMove(r, target, value, filled){
  if(r.type==='order'){
    const index=Number(target); const next=Object.keys(filled).length;
    return Number.isInteger(index) && index===next && r.answers[index]===value ? String(index) : null;
  }
  return r.pairs.some(p=>p[0]===value&&p[1]===target) ? value : null;
}
function findRoom(socket){ return [...socket.rooms].find(r=>r!==socket.id); }

io.on('connection', socket => {
  socket.on('create-room', ({name}={}, ack=()=>{}) => {
    let roomCode; do roomCode=code(); while(rooms.has(roomCode));
    const g=makeGame({id:socket.id,name}); rooms.set(roomCode,g); socket.join(roomCode); socket.data.roomCode=roomCode; ack({ok:true,roomCode,playerIndex:0}); emitState(roomCode);
  });
  socket.on('join-room', ({roomCode,name}={}, ack=()=>{}) => {
    roomCode=String(roomCode||'').trim().toUpperCase(); const g=rooms.get(roomCode);
    if(!g) return ack({ok:false,message:'Raum nicht gefunden.'});
    if(g.players.length>=2) return ack({ok:false,message:'Der Raum ist voll.'});
    g.players.push({id:socket.id,name:cleanName(name),score:0,right:0,wrong:0,connected:true}); g.status='playing'; socket.join(roomCode); socket.data.roomCode=roomCode; ack({ok:true,roomCode,playerIndex:1}); emitState(roomCode);
  });
  socket.on('move', ({target,value}={}, ack=()=>{}) => {
    const roomCode=findRoom(socket), g=rooms.get(roomCode); if(!g||g.status!=='playing') return ack({ok:false,message:'Spiel ist nicht aktiv.'});
    const idx=g.players.findIndex(p=>p.id===socket.id); if(idx!==g.turn) return ack({ok:false,message:'Du bist nicht am Zug.'});
    const r=rounds[g.round], key=validateMove(r,target,value,g.filled);
    if(key!==null){g.filled[key]={value,player:idx,target};g.players[idx].score+=10;g.players[idx].right++;}
    else {g.players[idx].score=Math.max(0,g.players[idx].score-5);g.players[idx].wrong++;}
    g.turn=1-g.turn;
    if(Object.keys(g.filled).length===roundSize(r)){
      g.round++; g.filled={};
      if(g.round>=rounds.length){g.status='finished'; const [a,b]=g.players; g.winner=a.score===b.score?(a.wrong===b.wrong?-1:(a.wrong<b.wrong?0:1)):(a.score>b.score?0:1);}
    }
    ack({ok:true,correct:key!==null}); emitState(roomCode);
  });
  socket.on('restart', () => { const c=findRoom(socket),g=rooms.get(c);if(!g||g.players[0]?.id!==socket.id)return;g.players.forEach(p=>Object.assign(p,{score:0,right:0,wrong:0}));g.round=0;g.turn=0;g.filled={};g.status=g.players.length===2?'playing':'lobby';g.winner=null;emitState(c); });
  socket.on('disconnect',()=>{const c=socket.data.roomCode,g=rooms.get(c);if(!g)return;const p=g.players.find(p=>p.id===socket.id);if(p)p.connected=false;io.to(c).emit('peer-left',{message:'Der andere Spieler hat die Verbindung getrennt.'});setTimeout(()=>{const x=rooms.get(c);if(x&&!x.players.some(p=>p.connected))rooms.delete(c)},300000);emitState(c);});
});
const PORT=process.env.PORT||3000; server.listen(PORT,()=>console.log(`Netzwerk-Duell läuft auf Port ${PORT}`));
