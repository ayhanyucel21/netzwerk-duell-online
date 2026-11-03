'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA_FILE = path.join(ROOT, 'data', 'questions-lf05.json');
const SOURCE_DIRS = [
  path.join(ROOT, 'questions'),
  path.join(ROOT, 'public', 'questions')
];

function slug(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function sourceArray(moduleValue) {
  if (Array.isArray(moduleValue)) return moduleValue;
  if (Array.isArray(moduleValue?.questions)) return moduleValue.questions;
  if (Array.isArray(moduleValue?.default)) return moduleValue.default;
  return null;
}

if (!fs.existsSync(DATA_FILE)) {
  console.error('HATA: data/questions-lf05.json bulunamadi.');
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const sourceById = new Map();

for (const dir of SOURCE_DIRS) {
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.js'))) {
    const fullPath = path.join(dir, file);
    let loaded;

    try {
      delete require.cache[require.resolve(fullPath)];
      loaded = sourceArray(require(fullPath));
    } catch (error) {
      console.warn(`WARN: ${file} okunamadi: ${error.message}`);
      continue;
    }

    if (!loaded) continue;

    const base = slug(path.basename(file, '.js'));

    loaded.forEach((raw, index) => {
      const generatedId = raw.id || `lf05-${base}-${String(index + 1).padStart(3, '0')}`;
      sourceById.set(generatedId, raw);
    });
  }
}

const beforeMissing = questions.filter(item => !String(item.question || '').trim()).length;
const repairedIds = [];

for (const item of questions) {
  if (String(item.question || '').trim()) continue;

  const raw = sourceById.get(item.id);
  if (!raw) continue;

  const title = raw.question || raw.q || raw.frage || raw.text || raw.prompt || '';
  if (!String(title).trim()) continue;

  item.question = String(title).trim();
  item.scenario = item.scenario || raw.scenario || '';
  item.explanation = item.explanation || raw.explanation || raw.exp || raw.erklaerung || raw.feedback || '';
  item.code = item.code || raw.code || raw.snippet || null;

  if ((!Array.isArray(item.options) || !item.options.length) && Array.isArray(raw.options)) {
    item.options = raw.options;
  }

  if ((item.correct === undefined || item.correct === null || item.correct === '') && raw.answer !== undefined) {
    item.correct = raw.answer;
  }

  repairedIds.push(item.id);
}

const afterMissing = questions.filter(item => !String(item.question || '').trim()).length;
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDir = path.join(ROOT, 'backups', `question-title-repair-${timestamp}`);
fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(DATA_FILE, path.join(backupDir, 'questions-lf05.json'));
fs.writeFileSync(DATA_FILE, JSON.stringify(questions, null, 2) + '\n', 'utf8');

console.log('BASARILI: Eksik soru basliklari kaynak JS dosyalarindan onarildi.');
console.log(`Oncesinde bos question: ${beforeMissing}`);
console.log(`Onarilan question: ${repairedIds.length}`);
console.log(`Sonrasinda bos question: ${afterMissing}`);
console.log(`Yedek: ${backupDir}`);

if (afterMissing) {
  console.log('Basligi hala bos kalan ilk kayitlar:');
  questions
    .filter(item => !String(item.question || '').trim())
    .slice(0, 10)
    .forEach(item => console.log(`- ${item.id} (${item.quizId})`));
}
