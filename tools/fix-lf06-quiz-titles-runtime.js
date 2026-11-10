'use strict';
const fs=require('fs'),path=require('path');
const F=path.join(process.cwd(),'public','lf06','quiz','index.html');
if(!fs.existsSync(F)){console.error('FEHLER: public/lf06/quiz/index.html fehlt.');process.exit(1)}
let s=fs.readFileSync(F,'utf8');const b=F.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(F,b);
// Runtime META is the source of the visible titles in this LF05-derived renderer.
const marker='const META=';
const i=s.indexOf(marker);if(i<0){console.error('FEHLER: META wurde nicht gefunden.');process.exit(1)}
// Insert explicit LF06 entries immediately after opening brace, supporting object-based and array-based renderer variants.
if(!s.includes("'lf06-tag2'")){
  const brace=s.indexOf('{',i);s=s.slice(0,brace+1)+"\n'lf06-tag2':{title:'Servicefälle, Kennzahlen & Verbesserungsmethoden',icon:'📊',desc:'Incident- und Problem-Management, Supportprozesse, KPI, MTTR, MTBF, Verfügbarkeit, SMART, DMAIC sowie AVV, UC und OLA.'},\n'lf06-gluecksrad-tag2':{title:'Glücksrad',icon:'🎡',desc:'Täglicher Fragenpool aus den aktuellen LF06-Unterrichtsthemen. Neue Glücksrad-Fragen werden fortlaufend ergänzt.'},"+s.slice(brace+1);
} else {
  s=s.replace(/'lf06-tag2'\s*:\s*\{[^}]*\}/,"'lf06-tag2':{title:'Servicefälle, Kennzahlen & Verbesserungsmethoden',icon:'📊',desc:'Incident- und Problem-Management, Supportprozesse, KPI, MTTR, MTBF, Verfügbarkeit, SMART, DMAIC sowie AVV, UC und OLA.'}");
  s=s.replace(/'lf06-gluecksrad-tag2'\s*:\s*\{[^}]*\}/,"'lf06-gluecksrad-tag2':{title:'Glücksrad',icon:'🎡',desc:'Täglicher Fragenpool aus den aktuellen LF06-Unterrichtsthemen. Neue Glücksrad-Fragen werden fortlaufend ergänzt.'}");
}
// Some LF06 copies use [title,icon] metadata instead. Convert injected object entries after detection.
if(/const META=\{[^;]*\['/.test(s) || s.includes("'lf06-tag1':['")){
 s=s.replace("'lf06-tag2':{title:'Servicefälle, Kennzahlen & Verbesserungsmethoden',icon:'📊',desc:'Incident- und Problem-Management, Supportprozesse, KPI, MTTR, MTBF, Verfügbarkeit, SMART, DMAIC sowie AVV, UC und OLA.'}","'lf06-tag2':['Servicefälle, Kennzahlen & Verbesserungsmethoden','📊']");
 s=s.replace("'lf06-gluecksrad-tag2':{title:'Glücksrad',icon:'🎡',desc:'Täglicher Fragenpool aus den aktuellen LF06-Unterrichtsthemen. Neue Glücksrad-Fragen werden fortlaufend ergänzt.'}","'lf06-gluecksrad-tag2':['Glücksrad','🎡']");
}
fs.writeFileSync(F,s,'utf8');console.log('ERFOLG: Sichtbare LF06 Quiz-Titel im Runtime-META korrigiert.');console.log('Lernkontrolle 2 = Servicefälle, Kennzahlen & Verbesserungsmethoden');console.log('Lernkontrolle 3 = Glücksrad');console.log('Sicherung:',b);
