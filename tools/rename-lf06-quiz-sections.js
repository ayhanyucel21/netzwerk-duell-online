'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),D=path.join(R,'data');
const f=path.join(D,'quizzes.json');
if(!fs.existsSync(f)){console.error('FEHLER: data/quizzes.json fehlt.');process.exit(1)}
const backup=path.join(R,'backups',`lf06-quiz-titles-${new Date().toISOString().replace(/[:.]/g,'-')}`);fs.mkdirSync(backup,{recursive:true});fs.copyFileSync(f,path.join(backup,'quizzes.json'));
let q=JSON.parse(fs.readFileSync(f,'utf8'));
const changes={
 'lf06-tag2':{
   title:'Servicefälle, Kennzahlen & Verbesserungsmethoden',
   description:'Incident- und Problem-Management, Supportprozesse, KPI, MTTR, MTBF, Verfügbarkeit, SMART, DMAIC sowie AVV, UC und OLA.',
   icon:'📊'
 },
 'lf06-gluecksrad-tag2':{
   title:'Glücksrad',
   description:'Täglicher Fragenpool aus den aktuellen LF06-Unterrichtsthemen. Neue Glücksrad-Fragen werden fortlaufend ergänzt.',
   icon:'🎡'
 }
};
let changed=0;
q=q.map(x=>{if(!changes[x.id])return x;changed++;return {...x,...changes[x.id]}});
fs.writeFileSync(f,JSON.stringify(q,null,2)+'\n');
console.log('ERFOLG: LF06 Quiz-Titel aktualisiert.');
console.log('Geänderte Einträge:',changed);
console.log('Lernkontrolle 2: Servicefälle, Kennzahlen & Verbesserungsmethoden');
console.log('Lernkontrolle 3: Glücksrad');
console.log('Sicherung:',backup);
