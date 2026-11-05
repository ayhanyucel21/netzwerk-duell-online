'use strict';
const fs=require('fs'),path=require('path');
const file=path.join(process.cwd(),'public','lf05','quiz','index.html');
if(!fs.existsSync(file)){console.error('HATA: quiz index bulunamadi');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,backup);
let changes=0;

// Fresh state.
s=s.replace(/const KEY='lf05_quiz_progress_v\d+';/,"const KEY='lf05_quiz_progress_v6';");

// Replace normalizer completely. This is the root fix: arrays must survive API -> renderer.
const nr=/function normalizeQuestion\([^)]*\)\{[\s\S]*?\}\nfunction titleFromId/;
if(!nr.test(s)){console.error('HATA: normalizeQuestion fonksiyonu bulunamadi');process.exit(1)}
const normalizer=`function normalizeQuestion(raw){
  const options=Array.isArray(raw.options)?raw.options.map(String):[];
  const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';
  let answer;
  if(Array.isArray(raw.correct)) answer=raw.correct.map(Number);
  else if(Array.isArray(raw.correctAnswers)) answer=raw.correctAnswers.map(Number);
  else answer=resolveAnswer(raw,options);
  const type=(Array.isArray(answer)&&answer.length>1)?'multiple-select':(raw.type||'multiple-choice');
  return {id:raw.id||'',type,question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer,exp:String(raw.explanationDetailed??raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''};
}
function titleFromId`;
s=s.replace(nr,normalizer);changes++;

// Multi-select questions are NOT shuffled. This keeps correct index mapping exact.
const sr=/function shuffledOptions\(item\)\{[\s\S]*?\}\nfunction renderQuestion/;
if(!sr.test(s)){console.error('HATA: shuffledOptions fonksiyonu bulunamadi');process.exit(1)}
const shuffle=`function shuffledOptions(item){
  const multi=item.type==='multiple-select'||Array.isArray(item.answer);
  if(multi) return [...item.options];
  const k=active.id+'_'+index;
  if(!ORDER[k]){
    const a=[...item.options];
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
    ORDER[k]=a;
  }
  return ORDER[k];
}
function renderQuestion`;
s=s.replace(sr,shuffle);changes++;

// In the existing multiselect branch, displayed index equals original index now.
s=s.replace(/const value=opts\[Number\(b\.dataset\.index\)\];const original=item\.options\.findIndex\([\s\S]*?b\.dataset\.original=original;/,"const original=Number(b.dataset.index);b.dataset.original=original;");
changes++;

// Add visible hint style if missing.
if(!s.includes('☑ Mehrfachauswahl')){
  s=s.replace('<button id="checkMultiple" class="action" type="button">Antwort prüfen</button><span>Mehrere Antworten können richtig sein.</span>','<span>☑ Mehrfachauswahl: Wähle alle richtigen Antworten.</span><button id="checkMultiple" class="action" type="button">Antwort prüfen</button>');
}

fs.writeFileSync(file,s,'utf8');
console.log('SUCCESS: Multi-select root fix v6 applied.');
console.log('Changes:',changes);
console.log('Progress key: lf05_quiz_progress_v6');
console.log('Backup:',backup);
