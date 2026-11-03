'use strict';
const fs=require('fs'),path=require('path');
const f=path.join(process.cwd(),'public','lf05','ihk','index.html');
if(!fs.existsSync(f)){console.error('HATA: IHK index bulunamadi');process.exit(1)}
let s=fs.readFileSync(f,'utf8');const b=f.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(f,b);
// Remove previously added standalone training section and overlay script/style if present.
s=s.replace(/<section><h2>Trainingsmodus<\/h2><button class="mode-card new-topics"[\s\S]*?<\/section>/,'');
s=s.replace(/<script>\(function\(\)\{const btn=document\.querySelector\('\[data-ihk-new-topics\]'\)[\s\S]*?<\/script>/,'');
s=s.replace(/\.mode-card\.new-topics\{[\s\S]*?\.ihk25-next\{[^}]*\}/,'');
// Add option to existing category select.
if(!s.includes('<option>Datenbank & SQL</option>'))s=s.replace('<option>Pseudocode</option>','<option>Pseudocode</option><option>Datenbank & SQL</option>');
// Fix mega option value and labels.
s=s.replace('<option value="100">125 Aufgaben · Mega-Prüfung</option>','<option value="125">125 Aufgaben · Mega-Prüfung</option>');
s=s.replace(/Mega-Prüfung\s*100/g,'Mega-Prüfung 125').replace(/100 Aufgaben · Mega-Prüfung/g,'125 Aufgaben · Mega-Prüfung');
// The embedded QUESTIONS array contains the original 100. Load new 25 into same runtime pool before handlers execute.
const marker='let exam=[],idx=0,points=0,right=0,answers=[],started=0,timerId=null,locked=false;';
if(!s.includes(marker)){console.error('HATA: IHK runtime marker bulunamadi');process.exit(1)}
const inject=`const NEW_IHK_QUESTIONS=[];let NEW_IHK_READY=false;async function loadNewIhkQuestions(){if(NEW_IHK_READY)return;const r=await fetch('/api/content/questions?courseId=lf05',{cache:'no-store'}),d=await r.json();const raw=(d.items||[]).filter(x=>x.quizId==='lf05-ihk'&&/^lf05-ihk-t7-11-/.test(x.id)).slice(0,25);raw.forEach(x=>NEW_IHK_QUESTIONS.push({cat:'Datenbank & SQL',diff:'ihk',scenario:x.scenario||'IHK-nahe Aufgabe aus Tag 7–11',question:x.question,code:x.code||'',options:x.options||[],answer:typeof x.correct==='number'?(x.options||[])[x.correct]:x.correct,explanation:x.explanation||''}));QUESTIONS.push(...NEW_IHK_QUESTIONS);NEW_IHK_READY=true}`;
s=s.replace(marker,inject+marker);
// Make both existing start buttons await the new pool.
s=s.replace("$('startTopic').onclick=()=>begin(QUESTIONS.filter(q=>q.cat===$('category').value));$('startExam').onclick=()=>begin(shuffle(QUESTIONS).slice(0,Number($('examLength').value)));", "$('startTopic').onclick=async()=>{await loadNewIhkQuestions();begin(QUESTIONS.filter(q=>q.cat===$('category').value))};$('startExam').onclick=async()=>{await loadNewIhkQuestions();begin(shuffle(QUESTIONS).slice(0,Number($('examLength').value)))};");
fs.writeFileSync(f,s,'utf8');console.log('SUCCESS: Existing Trainingsmodus now includes Datenbank & SQL (25); Mega-Prüfung value is 125; extra training card removed.');console.log('Backup:',b);
