'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(), I=path.join(R,'public','lf05','ihk','index.html');
if(!fs.existsSync(I)){console.error('HATA: public/lf05/ihk/index.html bulunamadi.');process.exit(1)}
let h=fs.readFileSync(I,'utf8');
const b=I.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(I,b);
// Text/count updates.
h=h.replace(/100\s*Fragen/g,'125 Fragen').replace(/100\s*Aufgaben/g,'125 Aufgaben').replace(/Mega\s*Prüfung\s*100/gi,'Mega Prüfung 125').replace(/Mega-Prüfung\s*100/gi,'Mega-Prüfung 125');
// Common hard-coded mega count patterns.
h=h.replace(/(mega[^\n]{0,80}(?:count|questions|limit)\s*[:=]\s*)100/gi,'$1125');
h=h.replace(/(questionCount\s*:\s*)100/g,'$1125');
h=h.replace(/(slice\(0,\s*)100(\))/g,'$1125$2');
// Add new training mode card if not present.
const card=`<button class="mode-card new-topics" type="button" data-ihk-new-topics><span class="mode-icon">🚀</span><small>TRAININGSMODUS · 25 FRAGEN</small><h3>Tag 7–11 · Neue IHK-Themen</h3><p>Datenstrukturen, Funktionen & Tests, Datei-I/O, Datenbanken, Normalisierung und SQL.</p><span class="mode-start">25 neue Aufgaben starten →</span></button>`;
if(!h.includes('data-ihk-new-topics')){
  const targets=['<div id="trainingGrid"','<div class="training-grid"','<div class="modes"','<div class="grid"'];
  let inserted=false;
  for(const t of targets){const p=h.indexOf(t);if(p>=0){const end=h.indexOf('>',p);h=h.slice(0,end+1)+card+h.slice(end+1);inserted=true;break}}
  if(!inserted)h=h.replace('</main>',`<section><h2>Trainingsmodus</h2>${card}</section></main>`);
}
// Styling and direct API-powered mode, independent of existing IHK internals.
const css='.mode-card.new-topics{--accent:#62e3ff;position:relative;overflow:hidden;border:2px solid #62e3ff66!important;background:radial-gradient(circle at 88% 18%,#62e3ff2b,transparent 28%),linear-gradient(145deg,#0d466c,#20204d)!important}.mode-card.new-topics:hover{transform:translateY(-4px);border-color:#62e3ff!important}.ihk25-overlay{position:fixed;inset:0;z-index:9999;display:none;place-items:center;padding:15px;background:#020617e8}.ihk25-overlay.open{display:grid}.ihk25-card{width:min(780px,100%);max-height:94vh;overflow:auto;padding:20px;border:1px solid #ffffff24;border-radius:20px;color:#f2f8ff;background:#0b1930;box-shadow:0 25px 70px #000}.ihk25-close{float:right}.ihk25-opt{display:block;width:100%;margin:7px 0;padding:12px;border:1px solid #ffffff20;border-radius:11px;color:#fff;background:#123252;text-align:left;cursor:pointer}.ihk25-opt.ok{background:#164b39}.ihk25-opt.bad{background:#57243a}.ihk25-fb{min-height:55px;margin:12px 0;padding:10px;border-radius:10px;background:#071426}.ihk25-next{padding:10px 14px;border:0;border-radius:10px;color:white;background:#5267ff;cursor:pointer;font-weight:900}';
if(!h.includes('.ihk25-overlay{'))h=h.replace('</style>',css+'</style>');
const js=`<script>(function(){const btn=document.querySelector('[data-ihk-new-topics]');if(!btn)return;const modal=document.createElement('div');modal.className='ihk25-overlay';modal.innerHTML='<div class="ihk25-card"><button class="ihk25-close">✕</button><div id="ihk25body"></div></div>';document.body.appendChild(modal);let qs=[],i=0,score=0,locked=false;const body=modal.querySelector('#ihk25body');function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}function show(){const q=qs[i];locked=false;const answer=typeof q.correct==='number'?q.options[q.correct]:q.correct;body.innerHTML='<small>🚀 TAG 7–11 · IHK FACHINFORMATIKER</small><h2>'+esc(q.question)+'</h2><p>Frage '+(i+1)+'/25 · '+score+' Punkte</p><div>'+q.options.map((o,n)=>'<button class="ihk25-opt" data-v="'+esc(o)+'">'+String.fromCharCode(65+n)+') '+esc(o)+'</button>').join('')+'</div><div class="ihk25-fb"></div><button class="ihk25-next">Weiter →</button>';body.querySelectorAll('.ihk25-opt').forEach(b=>b.onclick=()=>{if(locked)return;locked=true;const ok=b.dataset.v===String(answer);if(ok){score+=10;b.classList.add('ok')}else{b.classList.add('bad');[...body.querySelectorAll('.ihk25-opt')].find(x=>x.dataset.v===String(answer))?.classList.add('ok')}body.querySelector('.ihk25-fb').innerHTML='<b>'+(ok?'Richtig!':'Nicht ganz.')+'</b><br>'+esc(q.explanation||'')});body.querySelector('.ihk25-next').onclick=()=>{if(i<24){i++;show()}else body.innerHTML='<h2>Training abgeschlossen</h2><p><b>'+score+'/250 Punkte</b></p><p>Die 25 neuen Tag-7–11-Aufgaben wurden bearbeitet.</p>'}}btn.onclick=async()=>{try{const r=await fetch('/api/content/questions?courseId=lf05',{cache:'no-store'}),d=await r.json();qs=(d.items||[]).filter(x=>x.quizId==='lf05-ihk'&&/^lf05-ihk-t7-11-/.test(x.id)).slice(0,25);if(qs.length!==25)throw new Error('25 neue IHK-Fragen nicht gefunden');i=0;score=0;modal.classList.add('open');show()}catch(e){alert(e.message)}};modal.querySelector('.ihk25-close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')}})();</script>`;
if(!h.includes('TAG 7–11 · IHK FACHINFORMATIKER'))h=h.replace('</body>',js+'</body>');
fs.writeFileSync(I,h,'utf8');
console.log('SUCCESS: IHK page updated to 125 questions, new 25-question training mode added, Mega Prüfung references updated to 125 where detected.');
console.log('Backup:',b);
