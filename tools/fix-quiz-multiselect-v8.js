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
let count = 0;

// 1. Eski tek-secim kayitlarini kesin olarak devre disi birak.
const keyRegex = /const KEY='lf05_quiz_progress_v\d+';/;
if (!keyRegex.test(html)) {
  console.error('HATA: Quiz progress KEY bulunamadi.');
  process.exit(1);
}
html = html.replace(keyRegex, "const KEY='lf05_quiz_progress_v8';");
count++;

// 2. Normalizer: birden fazla correct indeksi varsa soru kesin multiple-select olsun.
const oldNormalize = "function normalizeQuestion(raw){const options=Array.isArray(raw.options)?raw.options.map(String):[];const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';return{id:raw.id||'',type:raw.type||'multiple-choice',question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer:Array.isArray(raw.correct)?raw.correct.map(Number):(Array.isArray(raw.correctAnswers)?raw.correctAnswers.map(Number):resolveAnswer(raw,options)),exp:String(raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''}}";
const newNormalize = "function normalizeQuestion(raw){const options=Array.isArray(raw.options)?raw.options.map(String):[];const question=[raw.question,raw.q,raw.prompt,raw.text].find(v=>typeof v==='string'&&v.trim())||'Frage konnte nicht geladen werden.';let answer;if(Array.isArray(raw.correct)&&raw.correct.length)answer=raw.correct.map(Number);else if(Array.isArray(raw.correctAnswers)&&raw.correctAnswers.length)answer=raw.correctAnswers.map(Number);else answer=resolveAnswer(raw,options);const type=Array.isArray(answer)&&answer.length>1?'multiple-select':(raw.type||'multiple-choice');return{id:raw.id||'',type,question,scenario:String(raw.scenario??''),visual:raw.visual&&typeof raw.visual==='object'?raw.visual:null,code:String(raw.code??raw.snippet??''),options,answer,exp:String(raw.explanationDetailed??raw.explanation??raw.exp??raw.feedback??''),difficulty:raw.difficulty||'medium',exam:raw.exam||'',tagId:raw.tagId||'',quizId:raw.quizId||''}}";
if (!html.includes(oldNormalize)) {
  console.error('HATA: Mevcut normalizeQuestion blogu bulunamadi. Dosya degistirilmedi.');
  console.error('Yedek:', backup);
  process.exit(1);
}
html = html.replace(oldNormalize, newNormalize);
count++;

// 3. renderQuestion baslangicinda eski formattaki kayit multiple-select soruyu kilitlemesin.
const oldRenderStart = "function renderQuestion(){const s=state(active.id),item=active.questions[index],saved=s.answers[index];";
const newRenderStart = "function renderQuestion(){const s=state(active.id),item=active.questions[index];let saved=s.answers[index];const isMultiQuestion=item.type==='multiple-select'||Array.isArray(item.answer);if(isMultiQuestion&&saved&&!Array.isArray(saved.indexes)){delete s.answers[index];saved=null;save()}";
if (!html.includes(oldRenderStart)) {
  console.error('HATA: renderQuestion baslangici bulunamadi. Dosya degistirilmedi.');
  process.exit(1);
}
html = html.replace(oldRenderStart, newRenderStart);
count++;

// 4. Coklu soru oldugunu belirgin goster.
html = html.replace(
  '<button id="checkMultiple" class="action" type="button">Antwort prüfen</button><span>Mehrere Antworten können richtig sein.</span>',
  '<span>☑ Mehrfachauswahl: Wähle alle richtigen Antworten.</span><button id="checkMultiple" class="action" type="button">Antwort prüfen</button>'
);
count++;

// 5. Bos secimle kontrol engellensin; secim yapildikca buton aktif/pasif olsun.
const oldCheck = "$('checkMultiple').onclick=()=>answerMultiple([...chosen])";
const newCheck = "$('checkMultiple').disabled=chosen.size===0;$('checkMultiple').onclick=()=>answerMultiple([...chosen]);document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>{$('checkMultiple').disabled=chosen.size===0}))";
if (html.includes(oldCheck)) {
  html = html.replace(oldCheck, newCheck);
  count++;
}

fs.writeFileSync(file, html, 'utf8');
console.log('BASARILI: Multiple-select V8 uygulandi.');
console.log('Degisiklik sayisi:', count);
console.log('Yeni progress anahtari: lf05_quiz_progress_v8');
console.log('Yedek:', backup);
console.log('Tarayicida yalnızca Ctrl + Shift + R yap.');
