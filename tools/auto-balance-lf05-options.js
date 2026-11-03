'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FILE = path.join(ROOT, 'data', 'questions-lf05.json');
const REPORT = path.join(ROOT, 'data', 'answer-length-report.json');

if (!fs.existsSync(FILE)) {
  console.error('HATA: data/questions-lf05.json bulunamadi.');
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDir = path.join(ROOT, 'backups', `option-balance-${stamp}`);
fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(FILE, path.join(backupDir, 'questions-lf05.json'));
if (fs.existsSync(REPORT)) fs.copyFileSync(REPORT, path.join(backupDir, 'answer-length-report.json'));

function answerIndex(q) {
  if (typeof q.correct === 'number') return q.correct;
  if (typeof q.correct === 'string') {
    if (/^\d+$/.test(q.correct)) return Number(q.correct);
    return Array.isArray(q.options) ? q.options.findIndex(x => String(x) === q.correct) : -1;
  }
  if (typeof q.answer === 'number') return q.answer;
  if (typeof q.answer === 'string') return Array.isArray(q.options) ? q.options.findIndex(x => String(x) === q.answer) : -1;
  return -1;
}

function median(values) {
  const a = [...values].sort((x, y) => x - y);
  if (!a.length) return 0;
  return a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
}

function isCodeLike(value) {
  const s = String(value);
  return /[=()[\]{}]|\b(if|for|while|return|SELECT|JOIN|WHERE|GROUP BY|def|print|range|open)\b/i.test(s);
}

function isShortToken(value) {
  return /^[\wÄÖÜäöüß+\-:/. ]{1,24}$/.test(String(value).trim());
}

function phrasePool(q) {
  const text = `${q.question || ''} ${q.scenario || ''} ${q.quizId || ''}`.toLowerCase();
  if (/sql|datenbank|schlüssel|tabelle|join|normalform/.test(text)) {
    return ['im relationalen Datenmodell', 'bezogen auf die Tabellenstruktur', 'im beschriebenen Datenbankszenario'];
  }
  if (/datei|open|exception|persistenz|modus/.test(text)) {
    return ['bei der beschriebenen Dateioperation', 'im angegebenen Dateimodus', 'für den dargestellten Ablauf'];
  }
  if (/test|grenzwert|äquivalenz|pfad|scope|funktion/.test(text)) {
    return ['im beschriebenen Testfall', 'bezogen auf die gegebene Funktion', 'unter den genannten Bedingungen'];
  }
  if (/liste|tupel|set|dictionary|json|csv|xml/.test(text)) {
    return ['für die beschriebene Datenstruktur', 'im dargestellten Python-Kontext', 'bezogen auf die angegebene Sammlung'];
  }
  if (/erd|entität|kardinalität|beziehung/.test(text)) {
    return ['im dargestellten Fachmodell', 'bezogen auf die gezeigte Beziehung', 'im beschriebenen ER-Modell'];
  }
  return ['im beschriebenen Szenario', 'bezogen auf die Aufgabenstellung', 'im dargestellten Zusammenhang'];
}

function punctuated(base, phrase) {
  const s = String(base).trim();
  if (!s) return s;
  if (/[.!?;:]$/.test(s)) return `${s} ${phrase}`;
  return `${s} ${phrase}`;
}

const changed = [];
const skipped = [];

for (const q of questions) {
  if (!Array.isArray(q.options) || q.options.length < 3) continue;
  const ai = answerIndex(q);
  if (ai < 0 || ai >= q.options.length) continue;

  const lengths = q.options.map(x => String(x).trim().length);
  const correctLength = lengths[ai];
  const otherLengths = lengths.filter((_, i) => i !== ai);
  const otherMedian = median(otherLengths);
  const maxOther = Math.max(...otherLengths);
  const risky = correctLength > maxOther && otherMedian > 0 && correctLength / otherMedian >= 1.35;
  if (!risky) continue;

  // Code/output answers are intentionally left untouched. Padding them would alter syntax/output.
  if (q.options.some(isCodeLike)) {
    skipped.push({ id: q.id, reason: 'code-or-output-options' });
    continue;
  }

  const original = [...q.options];
  const phrases = phrasePool(q);
  const targetMin = Math.max(Math.round(correctLength * 0.72), Math.round(otherMedian * 1.15));
  let phraseIndex = 0;

  q.options = q.options.map((option, index) => {
    if (index === ai) return option;
    let result = String(option).trim();
    if (result.length >= targetMin) return result;

    // Add at most two context qualifiers. They narrow the existing statement to the question context
    // without replacing its technical meaning.
    for (let round = 0; round < 2 && result.length < targetMin; round++) {
      const phrase = phrases[phraseIndex++ % phrases.length];
      if (!result.toLowerCase().includes(phrase.toLowerCase())) result = punctuated(result, phrase);
    }
    return result;
  });

  // Keep string-based correct answers synchronized if used by this record.
  if (typeof q.correct === 'string' && !/^\d+$/.test(q.correct)) q.correct = q.options[ai];
  if (typeof q.answer === 'string') q.answer = q.options[ai];

  changed.push({ id: q.id, quizId: q.quizId, question: q.question, correctIndex: ai, before: original, after: q.options });
}

fs.writeFileSync(FILE, JSON.stringify(questions, null, 2) + '\n', 'utf8');
fs.writeFileSync(
  path.join(DATA_DIR(), 'answer-balance-changes.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), changed: changed.length, skipped: skipped.length, items: changed, skippedItems: skipped }, null, 2) + '\n',
  'utf8'
);

function DATA_DIR() { return path.join(ROOT, 'data'); }

console.log('BASARILI: Secenek uzunluklari konservatif olarak dengelendi.');
console.log(`Degistirilen soru: ${changed.length}`);
console.log(`Kod/cikti oldugu icin atlanan: ${skipped.length}`);
console.log(`Yedek: ${backupDir}`);
console.log('Degisiklik raporu: data/answer-balance-changes.json');
console.log('Sonraki kontrol: node tools/balance-lf05-answer-lengths.js');
