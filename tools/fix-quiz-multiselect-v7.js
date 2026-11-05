'use strict';
const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'public', 'lf05', 'quiz', 'index.html');
if (!fs.existsSync(file)) {
  console.error('HATA: public/lf05/quiz/index.html bulunamadi.');
  process.exit(1);
}

let html = fs.readFileSync(file, 'utf8');
const backup = file.replace(/\.html$/i, `.backup-${Date.now()}.html`);
fs.copyFileSync(file, backup);
let changes = 0;

function replaceExact(oldText, newText, label) {
  if (!html.includes(oldText)) {
    console.error(`HATA: ${label} bulunamadi. Dosya degistirilmedi.`);
    console.error(`Yedek: ${backup}`);
    process.exit(1);
  }
  html = html.replace(oldText, newText);
  changes++;
}

// Yeni storage anahtari eski tek-secim cevaplarini tamamen disarida birakir.
html = html.replace(/const KEY='lf05_quiz_progress_v\d+';/, "const KEY='lf05_quiz_progress_v7';");
changes++;

// API'den gelen correct dizisini koru ve soru tipini cevap sayisina gore kesinlestir.
const oldNormalizer = "function normalizeQuestion(raw){const options=Array.isArray(raw.options)?raw.options.map(String):[];const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';return{id:raw.id||'',type:raw.type||'multiple-choice',question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer:Array.isArray(raw.correct)?raw.correct.map(Number):(Array.isArray(raw.correctAnswers)?raw.correctAnswers.map(Number):resolveAnswer(raw,options)),exp:String(raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''}}";
const newNormalizer = "function normalizeQuestion(raw){const options=Array.isArray(raw.options)?raw.options.map(String):[];const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';let answer;if(Array.isArray(raw.correct)&&raw.correct.length)answer=raw.correct.map(Number);else if(Array.isArray(raw.correctAnswers)&&raw.correctAnswers.length)answer=raw.correctAnswers.map(Number);else answer=resolveAnswer(raw,options);const type=Array.isArray(answer)&&answer.length>1?'multiple-select':(raw.type||'multiple-choice');return{id:raw.id||'',type,question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer,exp:String(raw.explanationDetailed??raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''}}";
replaceExact(oldNormalizer, newNormalizer, 'normalizeQuestion');

// Coklu secim sorularini karistirma. Boylece correct indeksleri birebir korunur.
const oldShuffle = "function shuffledOptions(item){const k=active.id+'_'+index;if(!ORDER[k]){const a=item.options.map((value,originalIndex)=>({value,originalIndex}));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
const newShuffle = "function shuffledOptions(item){const multi=item.type==='multiple-select'||Array.isArray(item.answer);if(multi)return item.options.map((value,originalIndex)=>({value,originalIndex}));const k=active.id+'_'+index;if(!ORDER[k]){const a=item.options.map((value,originalIndex)=>({value,originalIndex}));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}ORDER[k]=a}return ORDER[k]}";
replaceExact(oldShuffle, newShuffle, 'shuffledOptions');

// Acik ve net coklu secim bilgisi.
html = html.replace(
  '<button id="checkMultiple" class="action" type="button">Antwort prüfen</button><span>Mehrere Antworten können richtig sein.</span>',
  '<span>☑ Mehrfachauswahl: Wähle alle richtigen Antworten.</span><button id="checkMultiple" class="action" type="button">Antwort prüfen</button>'
);
changes++;

// Kullanici secmeden kontrol yapamasin.
html = html.replace(
  "$('checkMultiple').onclick=()=>answerMultiple([...chosen])",
  "$('checkMultiple').disabled=chosen.size===0;$('checkMultiple').onclick=()=>answerMultiple([...chosen]);document.querySelectorAll('.option').forEach(b=>b.addEventListener('click',()=>{$('checkMultiple').disabled=chosen.size===0}))"
);
changes++;

// Debug satirini kaldir.
html = html.replace("console.debug('Quiz question',item.id,item.question);", '');

fs.writeFileSync(file, html, 'utf8');
console.log('BASARILI: Multiple-select V7 uygulandi.');
console.log('Degisiklik sayisi:', changes);
console.log('Yeni progress anahtari: lf05_quiz_progress_v7');
console.log('Yedek:', backup);
console.log('Tarayicida Ctrl + Shift + R yap. Console temizligi gerekmez.');
