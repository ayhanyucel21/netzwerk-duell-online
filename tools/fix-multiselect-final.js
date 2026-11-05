'use strict';
const fs=require('fs'),path=require('path');
const file=path.join(process.cwd(),'public','lf05','quiz','index.html');
if(!fs.existsSync(file)){console.error('HATA: public/lf05/quiz/index.html bulunamadi.');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,backup);
let changes=0;

// 1) Force a fresh progress store, so old single-choice answers cannot lock multi-select questions.
if(s.includes("const KEY='lf05_quiz_progress_v3';")){s=s.replace("const KEY='lf05_quiz_progress_v3';","const KEY='lf05_quiz_progress_v4';");changes++}

// 2) Preserve answer arrays during normalization.
const answerPatterns=[
  "answer:resolveAnswer(raw,options)",
  "answer:Array.isArray(raw.correct)?raw.correct.map(Number):resolveAnswer(raw,options)"
];
const answerReplacement="answer:Array.isArray(raw.correct)?raw.correct.map(Number):(Array.isArray(raw.correctAnswers)?raw.correctAnswers.map(Number):resolveAnswer(raw,options))";
for(const p of answerPatterns){if(s.includes(p)){s=s.replace(p,answerReplacement);changes++;break}}

// 3) Do not shuffle multiple-select questions. Original indices then remain exact.
const oldShuffle="function shuffledOptions(item){const k=active.id+'_'+index;if(!ORDER[k]){const a=[...item.options];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
const newShuffle="function shuffledOptions(item){const isMulti=item.type==='multiple-select'||Array.isArray(item.answer);if(isMulti)return [...item.options];const k=active.id+'_'+index;if(!ORDER[k]){const a=[...item.options];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
if(s.includes(oldShuffle)){s=s.replace(oldShuffle,newShuffle);changes++}

// 4) In multi-select mode use the displayed index directly. No text-based findIndex guesswork.
const oldOriginal="const value=opts[Number(b.dataset.index)];const original=item.options.findIndex((x,idx)=>x===value&&!Array.from(document.querySelectorAll('.option')).slice(0,Number(b.dataset.index)).some(prev=>item.options[Number(prev.dataset.original)]===value));b.dataset.original=original;";
const newOriginal="const original=Number(b.dataset.index);b.dataset.original=original;";
if(s.includes(oldOriginal)){s=s.replace(oldOriginal,newOriginal);changes++}

// 5) Always hide the multi action box in Code Builder and result views.
if(s.includes("if(isCodeBuilder()){$('options').innerHTML='';")){
  s=s.replace("if(isCodeBuilder()){$('options').innerHTML='';","if(isCodeBuilder()){$('multiActions').classList.remove('active');$('options').innerHTML='';");changes++
}
if(s.includes("$('codeAnswer').classList.remove('active');$('options').innerHTML='';")){
  s=s.replace("$('codeAnswer').classList.remove('active');$('options').innerHTML='';","$('codeAnswer').classList.remove('active');$('multiActions').classList.remove('active');$('options').innerHTML='';");changes++
}

fs.writeFileSync(file,s,'utf8');
console.log('SUCCESS: Multi-select final fix applied.');
console.log('Changes:',changes);
console.log('Progress key: lf05_quiz_progress_v4');
console.log('Backup:',backup);
if(changes<3){console.log('WARN: Beklenenden az degisiklik yapildi. index.html daha once kismen guncellenmis olabilir.');}
