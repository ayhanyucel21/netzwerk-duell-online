'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd();
const game=path.join(R,'public','lf05','games','datenbank-sql-challenge','index.html');
if(!fs.existsSync(game)){console.error('HATA: Datenbank SQL Challenge bulunamadi.');process.exit(1)}
let h=fs.readFileSync(game,'utf8');
const backup=game.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(game,backup);
const style='.reveal-wrap{margin:18px 0;padding:14px;border:1px solid #ffffff1d;border-radius:18px;background:#071426}.reveal-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:10px}.reveal{position:relative;aspect-ratio:16/8;overflow:hidden;border-radius:15px;background:linear-gradient(135deg,#101b38,#0a4160)}.secret-art{position:absolute;inset:0;display:grid;place-items:center;background:radial-gradient(circle at 50% 45%,#61e6ff55,transparent 30%),linear-gradient(135deg,#11234d,#271957);font-size:clamp(3rem,11vw,7rem)}.secret-art:before{content:"🗄️  SQL  🏆";filter:drop-shadow(0 0 18px #61e6ff88)}.tiles{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,1fr);gap:2px}.tile{background:linear-gradient(145deg,#152d54,#0b1b34);border:1px solid #ffffff0b;transition:transform .55s ease,opacity .55s ease}.tile.open{opacity:0;transform:scale(.65) rotate(8deg);pointer-events:none}.reveal-note{color:#9fb6c9;font-size:.78rem}.unlock{color:#45dc96;font-weight:900}';
h=h.replace('</style>',style+'</style>');
h=h.replace('<section class="arena">','<section class="reveal-wrap"><div class="reveal-head"><b>🕵️ Geheimbild entschlüsseln</b><span id="unlock" class="unlock">0/20 Teile</span></div><div class="reveal"><div class="secret-art"></div><div id="tiles" class="tiles"></div></div><div class="reveal-note">Jede richtige Antwort entfernt genau ein Datenfragment. Schaffst du alle 20 Missionen, wird das Geheimnis vollständig sichtbar.</div></section><section class="arena">');
h=h.replace("const Q=", "const Q=");
h=h.replace("let i=0,xp=0,lives=3,combo=0,locked=false;", "let i=0,xp=0,lives=3,combo=0,locked=false,unlocked=0;");
h=h.replace("const $=x=>document.getElementById(x);", "const $=x=>document.getElementById(x);const tiles=$('tiles');tiles.innerHTML=Array.from({length:20},(_,n)=>'<span class=\"tile\" data-tile=\"'+n+'\"></span>').join('');function revealOne(){if(unlocked>=20)return;const closed=[...document.querySelectorAll('.tile:not(.open)')];const t=closed[Math.floor(Math.random()*closed.length)];if(t){t.classList.add('open');unlocked++;$('unlock').textContent=unlocked+'/20 Teile'}}");
h=h.replace("if(ok){combo++;xp+=10+Math.min(combo*2,10);b.classList.add('ok')}", "if(ok){combo++;xp+=10+Math.min(combo*2,10);b.classList.add('ok');revealOne()}");
h=h.replace("$('fb').textContent=xp>=220?'SQL Architect! Sehr starke Leistung.':xp>=140?'Database Builder! Gute Grundlage.':'Data Rookie: Wiederhole Lernen Tag 10–11 und starte erneut.';", "$('fb').textContent=unlocked===20?'🏆 Geheimnis komplett aufgedeckt! SQL Architect!':xp>=140?'Database Builder! Gute Grundlage. Entschlüssle beim nächsten Lauf noch mehr Teile.':'Data Rookie: Wiederhole Lernen Tag 10–11 und decke danach mehr vom Geheimnis auf.';");
fs.writeFileSync(game,h,'utf8');
console.log('SUCCESS: Hidden-image reveal mechanic added to Datenbank & SQL Challenge.');
console.log('Backup:',backup);
