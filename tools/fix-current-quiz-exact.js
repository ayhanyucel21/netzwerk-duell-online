'use strict';
const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'public', 'lf05', 'quiz', 'index.html');
if (!fs.existsSync(file)) { console.error('HATA: quiz index bulunamadi'); process.exit(1); }
let s = fs.readFileSync(file, 'utf8');
const backup = file.replace(/\.html$/, `.backup-${Date.now()}.html`);
fs.copyFileSync(file, backup);
let n = 0;
function rep(a,b,label){if(!s.includes(a)){console.error('HATA:',label,'bulunamadi');process.exit(1)}s=s.replace(a,b);n++;}
rep("const KEY='lf05_quiz_progress_v5';", "const KEY='lf05_quiz_progress_v9';", 'KEY');
rep("exp:String(raw.explanation??raw.exp??raw.feedback??'')", "exp:String(raw.explanationDetailed??raw.explanation??raw.exp??raw.feedback??'')", 'detailed explanation');
rep(
"function shuffledOptions(item){const k=active.id+'_'+index;if(!ORDER[k]){const a=item.options.map((value,originalIndex)=>({value,originalIndex}));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}",
"function shuffledOptions(item){const multi=item.type==='multiple-select'||Array.isArray(item.answer);if(multi)return item.options.map((value,originalIndex)=>({value,originalIndex}));const k=active.id+'_'+index;if(!ORDER[k]){const a=item.options.map((value,originalIndex)=>({value,originalIndex}));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}",
'shuffledOptions');
rep(
"function renderQuestion(){const s=state(active.id),item=active.questions[index],saved=s.answers[index];",
"function renderQuestion(){const s=state(active.id),item=active.questions[index];let saved=s.answers[index];const isMulti=item.type==='multiple-select'||Array.isArray(item.answer);if(isMulti&&saved&&!Array.isArray(saved.indexes)){delete s.answers[index];saved=null;}",
'renderQuestion start');
rep(
'<button id="checkMultiple" class="action" type="button">Antwort prüfen</button><span>Mehrere Antworten können richtig sein.</span>',
'<span>☑ Mehrfachauswahl: Wähle alle richtigen Antworten.</span><button id="checkMultiple" class="action" type="button">Antwort prüfen</button>',
'multi action markup');
s=s.replace("console.debug('Quiz question',item.id,item.question);", '');
fs.writeFileSync(file,s,'utf8');
console.log('BASARILI: Mevcut quiz index V9 olarak duzeltildi.');
console.log('Degisiklik:',n);console.log('Yedek:',backup);
