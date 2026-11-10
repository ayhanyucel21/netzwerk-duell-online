'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),ROOT=path.join(R,'public','lf06','games');
if(!fs.existsSync(ROOT)){console.error('FEHLER: public/lf06/games fehlt.');process.exit(1)}
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`lf06-games-v3-${stamp}`);fs.mkdirSync(B,{recursive:true});
let files=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory())walk(f);else if(e.name==='index.html')files.push(f)}}walk(ROOT);
let changed=0;
for(const f of files){const rel=path.relative(R,f);const b=path.join(B,rel);fs.mkdirSync(path.dirname(b),{recursive:true});fs.copyFileSync(f,b);let s=fs.readFileSync(f,'utf8');
// 1) Global modern visual layer.
if(!s.includes('LF06-GAMES-V3'))s=s.replace('</style>',`/* LF06-GAMES-V3 */
body{background:radial-gradient(circle at 10% 5%,#5ce1e622,transparent 24%),radial-gradient(circle at 90% 8%,#a282ff35,transparent 26%),linear-gradient(155deg,#050a15,#07172a 55%,#070d1b)!important;background-attachment:fixed}.hero,.game{backdrop-filter:blur(10px);box-shadow:0 18px 45px #0006,inset 0 1px #ffffff10}.hero{position:relative;overflow:hidden}.hero:after{content:'';position:absolute;width:140px;height:140px;border-radius:50%;right:-45px;top:-55px;background:#4bdbff18;animation:floatGlow 4s ease-in-out infinite alternate}.btn,.opt,.card,.zone{transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.btn:hover,.opt:hover:not(:disabled),.card:hover:not(:disabled),.zone:hover{transform:translateY(-2px);border-color:#4bdbff88;box-shadow:0 9px 22px #0004}.ok{animation:correctPop .45s ease}.bad{animation:wrongShake .35s ease}.goal{box-shadow:inset 0 0 25px #ffd1660d}.celebrate{position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#020712dc;animation:fadeIn .25s ease}.celebrate-card{width:min(560px,calc(100% - 24px));padding:30px;border:1px solid #ffd16666;border-radius:25px;text-align:center;background:radial-gradient(circle at 50% 0,#ffd16633,transparent 35%),linear-gradient(145deg,#132c4d,#251b46);box-shadow:0 25px 80px #0009;animation:finalPop .6s cubic-bezier(.17,.84,.44,1)}.celebrate-card .trophy{font-size:5rem;animation:trophyBounce 1s ease infinite alternate}.confetti{position:fixed;inset:0;pointer-events:none;overflow:hidden}.confetti i{position:absolute;top:-20px;width:9px;height:17px;background:var(--c);animation:fall 2.2s linear forwards}@keyframes correctPop{50%{transform:scale(1.035);box-shadow:0 0 28px #45dc9655}}@keyframes wrongShake{25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-3px)}}@keyframes floatGlow{to{transform:translate(-22px,18px) scale(1.15)}}@keyframes finalPop{0%{transform:scale(.72);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes trophyBounce{to{transform:translateY(-10px) rotate(4deg)}}@keyframes fadeIn{from{opacity:0}}@keyframes fall{to{transform:translateY(110vh) rotate(680deg)}}
</style>`);
// 2) Shared helpers inserted at script start. shuffleAnswerOptions handles array-style Q records.
if(!s.includes('function lf06ShuffleOptions'))s=s.replace('<script>',`<script>
function lf06Shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function lf06ShuffleOptions(options,correctIndex){const data=lf06Shuffle(options.map((text,i)=>({text,correct:i===correctIndex})));return{options:data.map(x=>x.text),correct:data.findIndex(x=>x.correct)}}
function lf06Final(title,text,emoji='🏆'){const wrap=document.createElement('div');wrap.className='celebrate';wrap.innerHTML='<div class="confetti"></div><div class="celebrate-card"><div class="trophy">'+emoji+'</div><h1>'+title+'</h1><p>'+text+'</p><button class="btn" onclick="location.reload()">Nochmal spielen</button><br><br><a style="color:#7fe7ff" href="/lf06/games/">← Zu den Lernspielen</a></div>';document.body.appendChild(wrap);const box=wrap.querySelector('.confetti'),colors=['#48d9ff','#a282ff','#45dc96','#ffd166','#ff6e82','#ff9858'];for(let i=0;i<45;i++){const x=document.createElement('i');x.style.left=Math.random()*100+'%';x.style.setProperty('--c',colors[i%colors.length]);x.style.animationDelay=Math.random()*.8+'s';box.appendChild(x)}}
`);
// 3) Randomize common Q=[ question,[options],correct ] structures at definition time.
s=s.replace(/const Q=\[(.*?)\];let /s,(m,body)=>`let Q=[${body}].map(row=>{if(Array.isArray(row[1])&&typeof row[2]==='number'){const z=lf06ShuffleOptions(row[1],row[2]);row[1]=z.options;row[2]=z.correct}return row});Q=lf06Shuffle(Q);let `);
// 4) Randomize known direct array variable S in lifecycle puzzle without biased .sort random.
s=s.replace(/const S=\[\.\.\.correct\]\.sort\(\(\)=>Math\.random\(\)-\.5\)/g,'const S=lf06Shuffle(correct)');
s=s.replace(/const a=\[\.\.\.correct\]\.sort\(\(\)=>Math\.random\(\)-\.5\)/g,'const a=lf06Shuffle(correct)');
// 5) Replace simple end messages with animated finals for known new games.
s=s.replace("$('cards').innerHTML='<h2>Geschafft · '+xp+' XP</h2>'","lf06Final('Mission geschafft!',xp+' XP gesammelt. Du hast die Ticket-Mission abgeschlossen.','🚦')");
s=s.replace("$('cards').innerHTML='<h2>RACI-Matrix vollständig · '+xp+' XP</h2>'","lf06Final('RACI-Matrix gemeistert!',xp+' XP gesammelt. Verantwortlichkeiten sicher zugeordnet.','👥')");
s=s.replace("$('opts').innerHTML='<h2>Challenge beendet · '+xp+' XP</h2>'","lf06Final('ITSM Challenge beendet!',xp+' XP · '+l+' Leben übrig.','⚡')");
s=s.replace("$('opts').innerHTML='<h2>DMAIC-Zyklus entschlüsselt</h2>'","lf06Final('DMAIC entschlüsselt!','Alle fünf Phasen wurden bearbeitet und das Bild freigelegt.','📈')");
s=s.replace("$('q').textContent=r===5?'Bild vollständig geöffnet!':'Mission beendet: '+r+'/5'","lf06Final(r===5?'Bild vollständig geöffnet!':'Mission beendet',r+'/5 Aufgaben richtig gelöst.','🖼️')");
s=s.replace("$('q').textContent=h===8?'Gipfel erreicht! 🏆':'Höhe erreicht: '+h+'/8'","lf06Final(h===8?'Gipfel erreicht!':'Aufstieg beendet',h+'/8 Höhenstufen erreicht.','🏔️')");
s=s.replace("$('word').textContent='Endstand: '+s+'/5'","lf06Final('Begriff-Retter beendet',s+'/5 Fachbegriffe gerettet.','🔤')");
fs.writeFileSync(f,s,'utf8');changed++}
console.log('ERFOLG: LF06 Games V3 modernisiert.');console.log('Bearbeitete Spielseiten:',changed);console.log('Antwortoptionen werden in unterstützten Quiz-Spielen zufällig gemischt.');console.log('Animationen und Finale wurden ergänzt.');console.log('Sicherung:',B);
