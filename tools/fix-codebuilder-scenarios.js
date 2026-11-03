'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'questions', 'codebuilder.js');
const DATA = path.join(ROOT, 'data', 'questions-lf05.json');
const QUIZ = path.join(ROOT, 'public', 'lf05', 'quiz', 'index.html');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

function fail(message) {
  console.error(`HATA: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(SOURCE)) fail('questions/codebuilder.js bulunamadi.');
if (!fs.existsSync(DATA)) fail('data/questions-lf05.json bulunamadi.');
if (!fs.existsSync(QUIZ)) fail('public/lf05/quiz/index.html bulunamadi.');

const sourceQuestions = require(SOURCE);
if (!Array.isArray(sourceQuestions)) fail('codebuilder.js bir soru dizisi export etmiyor.');

let questions;
try {
  questions = JSON.parse(fs.readFileSync(DATA, 'utf8'));
} catch (error) {
  fail(`questions-lf05.json okunamadi: ${error.message}`);
}
if (!Array.isArray(questions)) fail('questions-lf05.json kok degeri dizi olmali.');

const backupDir = path.join(ROOT, 'backups', `codebuilder-scenarios-${stamp}`);
fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(DATA, path.join(backupDir, 'questions-lf05.json'));
fs.copyFileSync(QUIZ, path.join(backupDir, 'quiz-index.html'));

const byId = new Map(sourceQuestions.map(item => [item.id, item]));
let updated = 0;
questions = questions.map(item => {
  if (item.quizId !== 'lf05-codebuilder') return item;
  const source = byId.get(item.id) || sourceQuestions.find(q => q.answer === item.options?.[item.correct]);
  if (!source) return item;
  updated++;
  return {
    ...item,
    mode: 'code-builder',
    scenario: source.scenario || '',
    question: source.question || 'Schreibe den passenden Python-Code.',
    expectedCode: source.answer || '',
    explanation: source.explanation || item.explanation || '',
    exam: source.exam || '',
    difficulty: source.difficulty || item.difficulty || 1,
    options: source.options || item.options || [],
    correct: source.answer || item.correct,
    status: 'published'
  };
});
fs.writeFileSync(DATA, JSON.stringify(questions, null, 2) + '\n', 'utf8');

let html = fs.readFileSync(QUIZ, 'utf8');

if (!html.includes('.scenario-box{')) {
  html = html.replace(
    '.question{font-size:1.32rem;line-height:1.5;margin:0 0 17px}',
    '.scenario-box{display:none;margin:0 0 14px;padding:15px;border-left:4px solid var(--orange);border-radius:12px;background:#31243a;line-height:1.55}.scenario-box.active{display:block}.scenario-box small{display:block;margin-bottom:5px;color:var(--orange);font-weight:900;letter-spacing:.08em}.question{font-size:1.32rem;line-height:1.5;margin:0 0 17px}'
  );
}

if (!html.includes('id="scenarioBox"')) {
  html = html.replace(
    '<h2 id="question" class="question"></h2>',
    '<div id="scenarioBox" class="scenario-box"><small>SZENARIO</small><span id="scenarioText"></span></div><h2 id="question" class="question"></h2>'
  );
}

html = html.replace(
  "function normalizeQuestion(q){return{id:q.id,q:q.question||q.q||'',code:q.code||'',options:Array.isArray(q.options)?q.options:[],answer:correctText(q),exp:q.explanation||q.exp||''}}",
  "function normalizeQuestion(q){return{id:q.id,q:q.question||q.q||'Schreibe den passenden Python-Code.',scenario:q.scenario||'',code:q.code||'',options:Array.isArray(q.options)?q.options:[],answer:q.expectedCode||correctText(q),exp:q.explanation||q.exp||'',exam:q.exam||'',difficulty:q.difficulty||1}}"
);

const renderNeedle = "$('question').textContent=item.q;$('codebox').textContent=item.code||'';";
if (html.includes(renderNeedle)) {
  html = html.replace(
    renderNeedle,
    "$('scenarioText').textContent=item.scenario||'';$('scenarioBox').classList.toggle('active',!!item.scenario);$('question').textContent=item.q;$('codebox').textContent=item.code||'';"
  );
} else if (!html.includes("$('scenarioText').textContent")) {
  fail('Quiz renderQuestion bolumu otomatik bulunamadi. Veri guncellendi, HTML yedekten geri alinabilir.');
}

// Make feedback show explanation and answer for both correct and wrong attempts.
const oldCorrect = "? '<b>✅ Richtig!</b><br>Dein Python-Code entspricht der erwarteten Lösung.'";
if (html.includes(oldCorrect)) {
  html = html.replace(
    oldCorrect,
    "? '<b>✅ Richtig!</b><br>Dein Python-Code erfüllt die Aufgabe.<br><br><b>Erklärung:</b> '+escapeHtml(item.exp||'')"
  );
}

fs.writeFileSync(QUIZ, html, 'utf8');

console.log('BASARILI: Code Builder senaryolari ve beklenen kodlar baglandi.');
console.log(`Guncellenen Code Builder sorusu: ${updated}`);
console.log(`Yedek: ${backupDir}`);
console.log('Test: http://localhost:3000/lf05/quiz/');
