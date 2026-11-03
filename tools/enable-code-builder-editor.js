"use strict";

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const file = path.join(root, "public", "lf05", "quiz", "index.html");

if (!fs.existsSync(file)) {
  console.error("HATA: public/lf05/quiz/index.html bulunamadi.");
  process.exit(1);
}

let html = fs.readFileSync(file, "utf8");
const backup = file.replace(/\.html$/i, `.backup-${Date.now()}.html`);
fs.copyFileSync(file, backup);

function replaceOnce(search, replacement, label) {
  if (!html.includes(search)) {
    console.error(`HATA: ${label} bolumu bulunamadi. Dosya degistirilmedi.`);
    console.error(`Yedek: ${backup}`);
    process.exit(1);
  }
  html = html.replace(search, replacement);
}

// 1. Code Builder editor styles
replaceOnce(
  ".options{display:grid;gap:11px}",
  `.options{display:grid;gap:11px}.code-answer{display:none;margin-top:12px}.code-answer.active{display:block}.code-input{width:100%;min-height:150px;padding:15px;border:1px solid #46d8ff55;border-radius:13px;background:#041020;color:#d7f5ff;font:14px/1.55 Consolas,monospace;resize:vertical;tab-size:4}.code-input:focus{outline:2px solid #46d8ff66;border-color:var(--cyan)}.code-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}.code-hint{margin-top:9px;color:var(--muted);font-size:.82rem;line-height:1.45}.code-feedback{display:none;margin-top:12px;padding:12px;border-radius:11px;line-height:1.5}.code-feedback.correct{display:block;border:1px solid #42db9666;background:#134a39}.code-feedback.wrong{display:block;border:1px solid #ff6f8366;background:#54223a}`,
  "CSS .options"
);

// 2. Editor markup
replaceOnce(
  '<div id="options" class="options"></div><div id="explain" class="explain"></div>',
  `<div id="options" class="options"></div>
<div id="codeAnswer" class="code-answer">
  <textarea id="codeInput" class="code-input" spellcheck="false" placeholder="Python-Code hier eingeben..."></textarea>
  <div class="code-actions">
    <button id="checkCode" class="action" type="button">Code prüfen</button>
  </div>
  <div class="code-hint">Schreibe die geforderte Python-Zeile selbst. Leerzeichen am Anfang und Ende werden beim Prüfen ignoriert.</div>
  <div id="codeFeedback" class="code-feedback"></div>
</div>
<div id="explain" class="explain"></div>`,
  "Quiz HTML"
);

// 3. Helpers before shuffledOptions
replaceOnce(
  "function shuffledOptions(item){",
  `function isCodeBuilder(){return active&&active.id==='lf05-codebuilder'}
function decodeEntities(value=''){const area=document.createElement('textarea');area.innerHTML=String(value);return area.value}
function normalizeCode(value=''){return decodeEntities(value).replace(/\\r/g,'').trim().replace(/[ \\t]+$/gm,'')}
function shuffledOptions(item){`,
  "shuffledOptions"
);

// 4. Replace option rendering inside renderQuestion
const oldRender = `$('options').innerHTML=shuffledOptions(item).map((o,i)=>\`<button class="option" type="button" data-index="${"${i}"}">${"${String.fromCharCode(65+i)}"}) ${"${escapeHtml(o)}"}</button>\`).join('');$('explain').style.display=saved?'block':'none';`;
const newRender = `if(isCodeBuilder()){
  $('options').innerHTML='';
  $('codeAnswer').classList.add('active');
  $('codeInput').value=saved?saved.value:'';
  $('codeInput').disabled=!!saved;
  $('checkCode').disabled=!!saved;
  $('codeFeedback').className='code-feedback';
  $('codeFeedback').innerHTML='';
  $('checkCode').onclick=answerCode;
  if(saved){showCodeFeedback(saved,item)}
}else{
  $('codeAnswer').classList.remove('active');
  $('codeInput').value='';
  $('codeInput').disabled=false;
  $('checkCode').disabled=false;
  $('codeFeedback').className='code-feedback';
  $('codeFeedback').innerHTML='';
  $('options').innerHTML=shuffledOptions(item).map((o,i)=>\`<button class="option" type="button" data-index="${"${i}"}">${"${String.fromCharCode(65+i)}"}) ${"${escapeHtml(o)}"}</button>\`).join('');
}
$('explain').style.display=saved?'block':'none';`;
replaceOnce(oldRender, newRender, "renderQuestion options");

// 5. Skip MC handlers for Code Builder
replaceOnce(
  "document.querySelectorAll('.option').forEach(b=>{",
  "if(!isCodeBuilder())document.querySelectorAll('.option').forEach(b=>{",
  "option handlers"
);

// 6. Add code answer functions before normal answer()
replaceOnce(
  "function answer(value){",
  `function showCodeFeedback(saved,item){
  const feedback=$('codeFeedback');
  feedback.className='code-feedback '+(saved.ok?'correct':'wrong');
  feedback.innerHTML=saved.ok
    ? '<b>✅ Richtig!</b><br>Dein Python-Code entspricht der erwarteten Lösung.'
    : '<b>❌ Noch nicht richtig.</b><br><br><b>Deine Lösung:</b><pre>'+escapeHtml(saved.value||'(leer)')+'</pre><b>Korrekte Lösung:</b><pre>'+escapeHtml(item.answer)+'</pre>';
}
function answerCode(){
  const s=state(active.id),item=active.questions[index];
  if(s.answers[index])return;
  const value=$('codeInput').value;
  if(!normalizeCode(value)){
    const feedback=$('codeFeedback');
    feedback.className='code-feedback wrong';
    feedback.innerHTML='<b>Bitte zuerst Python-Code eingeben.</b>';
    return;
  }
  const ok=normalizeCode(value)===normalizeCode(item.answer);
  s.answers[index]={value,ok};
  if(ok)s.score+=10;
  save();
  renderQuestion();
}
function answer(value){`,
  "answer function"
);

// 7. Hide editor on result screen
replaceOnce(
  "$('codebox').style.display='none';$('options').innerHTML='';",
  "$('codebox').style.display='none';$('codeAnswer').classList.remove('active');$('options').innerHTML='';",
  "showResult"
);

fs.writeFileSync(file, html, "utf8");
console.log("BASARILI: Code Builder kod editoru eklendi.");
console.log(`Guncellendi: ${file}`);
console.log(`Yedek: ${backup}`);
console.log("Sonraki test: node server.js ve http://localhost:3000/lf05/quiz/");
