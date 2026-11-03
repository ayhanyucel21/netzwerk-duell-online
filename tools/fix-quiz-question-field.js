'use strict';
const fs=require('fs'),path=require('path');
const file=path.join(process.cwd(),'public','lf05','quiz','index.html');
if(!fs.existsSync(file)){console.error('HATA: public/lf05/quiz/index.html bulunamadi.');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,backup);

const oldNorm="function normalizeQuestion(q){const options=Array.isArray(q.options)?q.options.map(String):[];return{id:q.id||'',type:q.type||'multiple-choice',q:String(q.question??q.q??q.prompt??q.text??'Frage konnte nicht geladen werden.'),scenario:String(q.scenario??''),visual:q.visual&&typeof q.visual==='object'?q.visual:null,code:String(q.code??q.snippet??''),options,answer:resolveAnswer(q,options),exp:String(q.explanation??q.exp??q.feedback??''),difficulty:q.difficulty||'medium',exam:q.exam||'',tagId:q.tagId||'',quizId:q.quizId||''}}";
const newNorm="function normalizeQuestion(raw){const options=Array.isArray(raw.options)?raw.options.map(String):[];const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';return{id:raw.id||'',type:raw.type||'multiple-choice',question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer:resolveAnswer(raw,options),exp:String(raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''}}";
if(!s.includes(oldNorm)){console.error('HATA: Beklenen normalizeQuestion surumu bulunamadi. Dosya degistirilmedi.');console.error('Yedek:',backup);process.exit(1)}
s=s.replace(oldNorm,newNorm);
s=s.replace("$('question').textContent=item.q||'Frage konnte nicht geladen werden.';","$('question').textContent=item.question;");

// Add current question ID to console for easy diagnosis without affecting UI.
s=s.replace("$('question').textContent=item.question;","$('question').textContent=item.question;console.debug('Quiz question',item.id,item.question);");
fs.writeFileSync(file,s,'utf8');
console.log('BASARILI: Quiz renderer artik raw question alanini dogrudan item.question olarak kullaniyor.');
console.log('Yedek:',backup);
