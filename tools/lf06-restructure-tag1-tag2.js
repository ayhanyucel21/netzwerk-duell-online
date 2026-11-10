'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),F=path.join(R,'public','lf06','lernen','index.html');
if(!fs.existsSync(F)){console.error('FEHLER: public/lf06/lernen/index.html nicht gefunden.');process.exit(1)}
let s=fs.readFileSync(F,'utf8');const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`lf06-lernen-restructure-${stamp}`);fs.mkdirSync(B,{recursive:true});fs.copyFileSync(F,path.join(B,'index.html'));
// Tag1 visual overview: remove standalone instance and inject before closing tag1 content/article.
let vis='';const vm=s.match(/<section class="tag1-infographic">[\s\S]*?<\/section>/);if(vm){vis=vm[0];s=s.replace(vm[0],'')}
if(vis&&!s.includes('class="tag1-inline-visual"')){vis=vis.replace('class="tag1-infographic"','class="tag1-infographic tag1-inline-visual"');const tag1=s.indexOf('id="tag1"');if(tag1>=0){const articleEnd=s.indexOf('</article>',tag1);if(articleEnd>=0)s=s.slice(0,articleEnd)+vis+s.slice(articleEnd)}}
// Remove old duplicate/static Tag2 block and keep just one canonical content area.
s=s.replace(/<section class="tag2-study" id="tag2">[\s\S]*?<\/section>/g,'');
// Build canonical Tag2 from central lesson JSON.
const lessons=JSON.parse(fs.readFileSync(path.join(R,'data','lessons.json'),'utf8'));const l=lessons.find(x=>x.id==='lf06-lesson-tag2');if(!l){console.error('FEHLER: lf06-lesson-tag2 fehlt in lessons.json');process.exit(1)}
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const content=(l.content||[]).map(x=>`<div class="term"><b>${esc(x.term)}</b><p>${esc(x.definition)}</p>${x.example?`<p><b>Beispiel:</b> ${esc(x.example)}</p>`:''}</div>`).join('');
const visual=`<div class="tag2-visual-overview"><h3>Visuelle Übersicht · Kennzahlen, DMAIC und SMART</h3><p>Die Grafik verbindet die Zeitbegriffe eines System Incidents mit MTTR, MTBF und Verfügbarkeit sowie dem DMAIC-Zyklus und SMART formulierten Servicezielen.</p><img src="/lf06/assets/tag2/tag2-uebersicht.png" alt="LF06 Tag 2 Übersicht zu System Incident, Kennzahlen, DMAIC und SMART"></div>`;
const tag2=`<article class="day collapsed" id="tag2"><button class="head" type="button" aria-expanded="false"><span>🧠</span><span><small>TAG 2</small><h2>Servicefälle, Kennzahlen & Verbesserungsmethoden</h2></span><span class="chev">⌄</span></button><div class="content"><div class="summary"><b>Zusammenfassung:</b> ${esc(l.summary)}</div><section class="section"><h3>Kurze Begriffsdefinitionen mit Beispielen</h3><div class="terms">${content}</div></section>${visual}<div class="note tip"><b>💡 Merksatz</b><br>${esc(l.tip||'')}</div><div class="note exam"><b>🎯 IHK/LZK-Tipp</b><br>${esc(l.examTip||'')}</div></div></article>`;
// Insert Tag2 after Tag1 article.
const tag1=s.indexOf('id="tag1"'),tag1End=tag1>=0?s.indexOf('</article>',tag1):-1;if(tag1End>=0)s=s.slice(0,tag1End+10)+tag2+s.slice(tag1End+10);else s=s.replace('<footer>',tag2+'<footer>');
// Ensure nav link and accordion CSS/JS.
if(!s.includes('href="#tag2"'))s=s.replace('</nav>','<a href="#tag2">Tag 2</a></nav>');
if(!s.includes('.day.collapsed .content'))s=s.replace('</style>','.day .head{cursor:pointer}.day .chev{margin-left:auto;font-size:1.2rem}.day.collapsed .content{display:none}.day:not(.collapsed) .chev{transform:rotate(180deg)}.tag1-inline-visual{margin:14px 0}</style>');
if(!s.includes('data-lf06-accordion'))s=s.replace('</body>',`<script data-lf06-accordion>document.querySelectorAll('.day>.head').forEach(btn=>btn.addEventListener('click',()=>{const day=btn.closest('.day');const collapsed=day.classList.toggle('collapsed');btn.setAttribute('aria-expanded',String(!collapsed))}));document.querySelectorAll('.nav a[href^="#tag"]').forEach(a=>a.addEventListener('click',()=>{const day=document.querySelector(a.getAttribute('href'));if(day){day.classList.remove('collapsed');day.querySelector('.head')?.setAttribute('aria-expanded','true')}}));</script></body>`);
// Start Tag1 open, Tag2 collapsed.
s=s.replace(/<article class="day collapsed" id="tag1">/,'<article class="day" id="tag1">');
fs.writeFileSync(F,s,'utf8');console.log('ERFOLG: Tag1/Tag2 als aufklappbare Bereiche strukturiert.');console.log('Tag1-Visualisierung liegt jetzt innerhalb von Tag1.');console.log('Tag2 verwendet nur noch den zentralen Inhalt "Servicefälle, Kennzahlen & Verbesserungsmethoden".');console.log('Sicherung:',B);
