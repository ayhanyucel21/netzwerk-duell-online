'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),F=path.join(R,'data','questions-lf05.json');
if(!fs.existsSync(F)){console.error('HATA: questions-lf05.json bulunamadi');process.exit(1)}
let qs=JSON.parse(fs.readFileSync(F,'utf8'));const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`answer-audit-v3-${stamp}`);fs.mkdirSync(B,{recursive:true});fs.copyFileSync(F,path.join(B,'questions-lf05.json'));
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function cis(q){if(Array.isArray(q.correct))return q.correct.map(Number);if(Array.isArray(q.correctAnswers))return q.correctAnswers.map(Number);if(typeof q.correct==='number')return[q.correct];if(typeof q.correct==='string'){if(/^\d+$/.test(q.correct))return[Number(q.correct)];const i=q.options?.findIndex(x=>String(x)===q.correct);return i>=0?[i]:[]}if(typeof q.answer==='number')return[q.answer];if(typeof q.answer==='string'){const i=q.options?.findIndex(x=>String(x)===q.answer);return i>=0?[i]:[]}return[]}
function explainOption(o,isCorrect,q){const s=String(o),t=(q.question+' '+(q.scenario||'')).toLowerCase();let r='';
 if(s==='=')r='= ist der Zuweisungsoperator und kein Vergleichsoperator.';
 else if(['==','!=','>=','<=','>','<'].includes(s))r=`${s} ist ein gültiger Python-Vergleichsoperator.`;
 else if(/^if$/i.test(s))r='if eröffnet die erste bedingte Verzweigung.';
 else if(/^elif$/i.test(s))r='elif ergänzt eine weitere Bedingung innerhalb einer Verzweigung.';
 else if(/^else$/i.test(s))r='else behandelt den Auffangfall ohne weitere Bedingung.';
 else if(/^switch$/i.test(s))r='switch ist kein klassisches Python-Schlüsselwort für if-Verzweigungen.';
 else if(/where/i.test(s))r='WHERE filtert einzelne Zeilen vor Gruppierung und Aggregation.';
 else if(/having/i.test(s))r='HAVING filtert bereits gebildete Gruppen oder Aggregatergebnisse.';
 else if(/order by/i.test(s))r='ORDER BY sortiert Ergebnisse, filtert sie aber nicht.';
 else if(/group by/i.test(s))r='GROUP BY fasst gleiche Werte für gruppierte Auswertungen zusammen.';
 else if(/break/i.test(s))r='break beendet die aktuelle Schleife vollständig.';
 else if(/continue/i.test(s))r='continue überspringt nur den Rest des aktuellen Schleifendurchlaufs.';
 else if(/while/i.test(s))r='while wiederholt einen Block, solange seine Bedingung True ist.';
 else if(/\bfor\b/i.test(s))r='for iteriert über eine Folge oder einen Iterator.';
 else if(/liste|list/i.test(s))r='Eine Liste ist geordnet und veränderbar und erlaubt doppelte Werte.';
 else if(/tupel/i.test(s))r='Ein Tupel ist geordnet, aber unveränderbar.';
 else if(/\bset\b/i.test(s))r='Ein Set speichert eindeutige Elemente.';
 else if(/dictionary/i.test(s))r='Ein Dictionary ordnet Schlüsseln Werte zu.';
 else if(/sql|select|join|datenbank/.test(t))r='Diese Option erfüllt in der beschriebenen SQL-/Datenbankaufgabe eine andere Funktion als verlangt.';
 else if(/schleif|while|for|range/.test(t))r='Diese Option erzeugt ein anderes Kontrollfluss- oder Schleifenverhalten als verlangt.';
 else r=isCorrect?'Diese Option erfüllt die fachliche oder syntaktische Anforderung der Aufgabe.':'Diese Option erfüllt die konkrete Anforderung der Aufgabe nicht.';
 return r}
let fixed=0,valid=0,invalid=[];
for(const q of qs){if(!Array.isArray(q.options)||q.options.length<2){invalid.push({id:q.id,reason:'no-options'});continue}let ci=cis(q).filter(i=>Number.isInteger(i)&&i>=0&&i<q.options.length);if(!ci.length){invalid.push({id:q.id,reason:'no-valid-answer'});continue}ci=[...new Set(ci)];q.type=ci.length>1?'multiple-select':(q.type==='multiple-select'?'multiple-choice':q.type||'multiple-choice');q.correct=ci.length>1?ci:ci[0];q.correctAnswers=ci.length>1?ci:undefined;
 const correctTexts=ci.map(i=>q.options[i]);let html=`<b>${ci.length>1?'Richtige Antworten':'Richtige Antwort'}:</b> ${correctTexts.map(esc).join(', ')}`;html+=`<br><br><b>Warum ${ci.length>1?'sind diese Antworten':'ist diese Antwort'} richtig?</b><br>${esc(q.explanation||'Die richtige Antwort erfüllt die in der Aufgabe verlangte fachliche oder syntaktische Bedingung.')}`;html+='<br><br><b>Bewertung aller Optionen:</b>';q.options.forEach((o,i)=>{const ok=ci.includes(i);html+=`<br>${ok?'✅':'❌'} <b>${esc(o)}</b>: ${esc(explainOption(o,ok,q))}`});q.explanationDetailed=html;fixed++;valid++}
fs.writeFileSync(F,JSON.stringify(qs,null,2)+'\n');fs.writeFileSync(path.join(R,'data','answer-audit-v3-report.json'),JSON.stringify({valid,fixed,invalidCount:invalid.length,invalid},null,2)+'\n');console.log('SUCCESS answer audit v3');console.log({valid,fixed,invalid:invalid.length,backup:B});
