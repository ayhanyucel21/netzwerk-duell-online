'use strict';
const fs=require('fs'),path=require('path');
const file=path.join(process.cwd(),'public','lf05','quiz','index.html');
if(!fs.existsSync(file)){console.error('HATA: quiz index bulunamadi');process.exit(1)}
let s=fs.readFileSync(file,'utf8');const b=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,b);
let n=0;
// Current normalizer must preserve arrays from correct/correctAnswers.
const patterns=[
"answer:resolveAnswer(raw,options)",
"answer:Array.isArray(raw.correct)?raw.correct.map(Number):resolveAnswer(raw,options)"
];
const repl="answer:Array.isArray(raw.correct)?raw.correct.map(Number):(Array.isArray(raw.correctAnswers)?raw.correctAnswers.map(Number):resolveAnswer(raw,options))";
for(const p of patterns){if(s.includes(p)){s=s.replace(p,repl);n++;break}}
// Fresh client state.
if(s.includes("const KEY='lf05_quiz_progress_v4';")){s=s.replace("const KEY='lf05_quiz_progress_v4';","const KEY='lf05_quiz_progress_v5';");n++}
// Disable shuffle specifically for multi-select, preserving answer indexes.
const sh="function shuffledOptions(item){const k=active.id+'_'+index;if(!ORDER[k]){const a=[...item.options];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
const sh2="function shuffledOptions(item){const multi=item.type==='multiple-select'||Array.isArray(item.answer);if(multi)return [...item.options];const k=active.id+'_'+index;if(!ORDER[k]){const a=[...item.options];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
if(s.includes(sh)){s=s.replace(sh,sh2);n++}
// With no shuffle for multi questions, displayed index = original index.
const fragile="const value=opts[Number(b.dataset.index)];const original=item.options.findIndex((x,idx)=>x===value&&!Array.from(document.querySelectorAll('.option')).slice(0,Number(b.dataset.index)).some(prev=>item.options[Number(prev.dataset.original)]===value));b.dataset.original=original;";
if(s.includes(fragile)){s=s.replace(fragile,"const original=Number(b.dataset.index);b.dataset.original=original;");n++}
fs.writeFileSync(file,s,'utf8');
console.log('SUCCESS v5');console.log('Applied changes:',n);console.log('Progress key: lf05_quiz_progress_v5');console.log('Backup:',b);
