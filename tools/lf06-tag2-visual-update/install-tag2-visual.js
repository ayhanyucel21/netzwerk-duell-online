'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),LF=path.join(R,'public','lf06'),PAGE=path.join(LF,'lernen','index.html'),SRC=path.join(__dirname,'assets','tag2-uebersicht.png'),DST=path.join(LF,'assets','tag2','tag2-uebersicht.png');
if(!fs.existsSync(PAGE)){console.error('FEHLER: public/lf06/lernen/index.html wurde nicht gefunden.');process.exit(1)}
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`lf06-tag2-visual-${stamp}`);fs.mkdirSync(B,{recursive:true});fs.copyFileSync(PAGE,path.join(B,'lernen-index.html'));fs.mkdirSync(path.dirname(DST),{recursive:true});fs.copyFileSync(SRC,DST);
let h=fs.readFileSync(PAGE,'utf8');
// Alte Tag-2-Bildgalerie vollständig entfernen.
h=h.replace(/<div class="tag2-images">[\s\S]*?<\/div>(?=<\/section>)/g,'');
// Auch frühere einzelne Tag-2-Bilder entfernen, falls sie separat eingebaut wurden.
const oldNames=['service-management.jpg','system-incident-rechenwege.jpg','system-incident-schaubild.jpg','dmaic-methoden.jpg','dmaic-zyklus.jpg','smart-ziele.jpg'];
for(const n of oldNames){const re=new RegExp(`<img[^>]+${n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}[^>]*>`,'gi');h=h.replace(re,'')}
// Neue Einzelübersicht direkt innerhalb Tag 2, vor dem Ende der Tag-2-Sektion.
const block=`<div class="tag2-visual-overview"><h3>Visuelle Übersicht · Kennzahlen, DMAIC und SMART</h3><p>Die Grafik fasst die wichtigsten Zusammenhänge aus Tag 2 zusammen: Zeitbegriffe eines System Incidents, MTTR/MTBF/Verfügbarkeit, den DMAIC-Verbesserungszyklus und die SMART-Formulierung von Servicezielen.</p><img src="/lf06/assets/tag2/tag2-uebersicht.png" alt="LF06 Tag 2 Übersicht zu System Incident, MTTR, MTBF, Verfügbarkeit, DMAIC und SMART"></div>`;
if(!h.includes('class="tag2-visual-overview"')){
 const start=h.indexOf('<section class="tag2-study"');
 if(start>=0){const end=h.indexOf('</section>',start);if(end>=0)h=h.slice(0,end)+block+h.slice(end)}else h=h.replace('<footer>',block+'<footer>');
}
if(!h.includes('.tag2-visual-overview{'))h=h.replace('</style>','.tag2-visual-overview{margin-top:15px;padding:14px;border:1px solid #4bdbff44;border-radius:15px;background:#091d35}.tag2-visual-overview h3{margin:0 0 7px;color:#7cecff}.tag2-visual-overview p{color:var(--muted);line-height:1.55}.tag2-visual-overview img{display:block;width:100%;margin-top:10px;border-radius:12px;background:#fff;box-shadow:0 12px 30px #0005}</style>');
fs.writeFileSync(PAGE,h,'utf8');
// Alte Bilddateien aus public LF06 Tag2 löschen. Neue Übersicht bleibt erhalten.
for(const n of oldNames){const f=path.join(LF,'assets','tag2',n);if(fs.existsSync(f)){fs.copyFileSync(f,path.join(B,n));fs.unlinkSync(f)}}
console.log('ERFOLG: Alte Tag-2-Grafiken entfernt und neue Gesamtübersicht eingesetzt.');console.log('Neue Grafik:',path.relative(R,DST));console.log('Sicherung:',B);
