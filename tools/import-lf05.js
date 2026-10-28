'use strict';

/**
 * LF05 one-time migration/import tool.
 * Run from the repository root: node tools/import-lf05.js
 * It preserves existing records by ID, creates backups, imports question modules,
 * registers games/pages, and stores the existing Lernen HTML as a legacy source.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA = path.join(ROOT, 'data');
const PUBLIC = path.join(ROOT, 'public', 'lf05');
const QUESTIONS_DIRS = [path.join(ROOT, 'questions'), path.join(ROOT, 'public', 'questions')];
const NOW = new Date().toISOString();

const FILES = {
  courses: 'courses.json', tags: 'tags.json', topics: 'topics.json', lessons: 'lessons.json',
  quizzes: 'quizzes.json', questions: 'questions-lf05.json', games: 'games.json',
  pages: 'pages.json', settings: 'settings.json'
};

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function slug(v) { return String(v || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'item'; }
function readJson(name, fallback = []) {
  const file = path.join(DATA, name);
  if (!fs.existsSync(file)) return fallback;
  try { const value = JSON.parse(fs.readFileSync(file, 'utf8')); return Array.isArray(value) ? value : fallback; }
  catch (e) { throw new Error(`${name} ist kein gueltiges JSON: ${e.message}`); }
}
function writeJson(name, value) { fs.writeFileSync(path.join(DATA, name), JSON.stringify(value, null, 2) + '\n', 'utf8'); }
function mergeById(current, incoming) {
  const map = new Map(current.map(x => [x.id, x]));
  for (const item of incoming) map.set(item.id, { ...(map.get(item.id) || {}), ...item });
  return [...map.values()];
}
function backup() {
  if (!fs.existsSync(DATA)) return null;
  const dir = path.join(ROOT, 'backups', `lf05-import-${NOW.replace(/[:.]/g, '-')}`);
  ensureDir(dir);
  for (const name of Object.values(FILES)) {
    const src = path.join(DATA, name);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dir, name));
  }
  return dir;
}
function findFirst(paths) { return paths.find(fs.existsSync) || null; }
function stripHtml(v) { return String(v || '').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim(); }
function extractTagSections(html) {
  const headingRe = /<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...html.matchAll(headingRe)].filter(m => /tag\s*\d+/i.test(stripHtml(m[2])));
  return matches.map((m, i) => {
    const title = stripHtml(m[2]);
    const number = Number((title.match(/tag\s*(\d+)/i) || [])[1] || i + 1);
    const start = m.index + m[0].length;
    const end = matches[i + 1]?.index ?? html.length;
    return { number, title, html: html.slice(start, end).trim(), text: stripHtml(html.slice(start, end)) };
  });
}
function loadQuestionModules() {
  const modules = [];
  for (const dir of QUESTIONS_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.js') && !['index.js','loader.js'].includes(f))) {
      const full = path.join(dir, file);
      try {
        delete require.cache[require.resolve(full)];
        const loaded = require(full);
        const arr = Array.isArray(loaded) ? loaded : Array.isArray(loaded?.questions) ? loaded.questions : Array.isArray(loaded?.default) ? loaded.default : null;
        if (arr) modules.push({ file, items: arr });
        else console.warn(`WARN ${file}: export edilen bir soru dizisi bulunamadi.`);
      } catch (e) { console.warn(`WARN ${file}: okunamadi (${e.message})`); }
    }
  }
  return modules;
}
function normalizeQuestion(raw, file, index, quizId) {
  const options = raw.options || raw.answers || raw.choices || raw.antworten || [];
  let correct = raw.correctIndex ?? raw.correct ?? raw.answer ?? raw.correctAnswer ?? raw.richtig;
  if (typeof correct === 'string' && options.length) {
    const found = options.findIndex(x => String(x) === correct);
    if (found >= 0) correct = found;
    else if (/^[a-d]$/i.test(correct)) correct = correct.toLowerCase().charCodeAt(0) - 97;
  }
  return {
    id: raw.id || `lf05-${slug(path.basename(file,'.js'))}-${String(index + 1).padStart(3,'0')}`,
    courseId: 'lf05', quizId,
    tagId: raw.tagId || null,
    type: raw.type || 'multiple-choice',
    question: raw.question || raw.frage || raw.text || raw.prompt || '',
    code: raw.code || raw.snippet || null,
    options,
    correct,
    explanation: raw.explanation || raw.erklaerung || raw.feedback || '',
    difficulty: raw.difficulty || raw.schwierigkeit || 'medium',
    sourceFile: file,
    status: raw.status || 'published'
  };
}

ensureDir(DATA);
const backupDir = backup();

const course = { id:'lf05', code:'LF05', title:'Software zur Verwaltung von Daten anpassen', description:'Python, Algorithmen, Modellierung, Datenverarbeitung und Debugging', status:'published', order:5, updatedAt:NOW };
let courses = mergeById(readJson(FILES.courses), [course]);

const lernenFile = findFirst([path.join(PUBLIC,'lernen','index.html'), path.join(PUBLIC,'lernen.html')]);
let importedTags = [], importedLessons = [], importedTopics = [];
if (lernenFile) {
  const html = fs.readFileSync(lernenFile, 'utf8');
  const sections = extractTagSections(html);
  if (sections.length) {
    for (const section of sections) {
      const tagId = `lf05-tag${section.number}`;
      importedTags.push({ id:tagId, courseId:'lf05', number:section.number, title:section.title.replace(/^tag\s*\d+\s*[-:–]?\s*/i,'') || `Tag ${section.number}`, status:'published', order:section.number, updatedAt:NOW });
      importedLessons.push({ id:`lf05-lesson-tag${section.number}`, courseId:'lf05', tagId, title:section.title, contentHtml:section.html, contentText:section.text, source:'public/lf05/lernen/index.html', status:'published', order:section.number, updatedAt:NOW });
      const h = [...section.html.matchAll(/<h([2-6])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(x => stripHtml(x[2])).filter(Boolean);
      h.forEach((title, i) => importedTopics.push({ id:`${tagId}-${slug(title)}-${i+1}`, courseId:'lf05', tagId, title, status:'published', order:i+1, updatedAt:NOW }));
    }
  } else {
    importedLessons.push({ id:'lf05-legacy-lernen', courseId:'lf05', tagId:null, title:'LF05 Lernen (bestehender Inhalt)', contentHtml:html, contentText:stripHtml(html), source:'public/lf05/lernen/index.html', status:'published', order:1, updatedAt:NOW });
    console.warn('WARN Lernen: Tag-Ueberschriften nicht automatisch erkannt; gesamter Inhalt wurde verlustfrei gespeichert.');
  }
} else console.warn('WARN Lernen: public/lf05/lernen/index.html wurde nicht gefunden.');

let tags = mergeById(readJson(FILES.tags), importedTags);
let topics = mergeById(readJson(FILES.topics), importedTopics);
let lessons = mergeById(readJson(FILES.lessons), importedLessons);

const modules = loadQuestionModules();
const quizDefs = [];
const normalizedQuestions = [];
for (const mod of modules) {
  const base = slug(path.basename(mod.file, '.js'));
  const quizId = `lf05-${base}`;
  quizDefs.push({ id:quizId, courseId:'lf05', title:path.basename(mod.file,'.js').replace(/[-_]/g,' '), source:`questions/${mod.file}`, questionCount:mod.items.length, status:'published', order:quizDefs.length+1, updatedAt:NOW });
  mod.items.forEach((q,i) => normalizedQuestions.push(normalizeQuestion(q, mod.file, i, quizId)));
}
let quizzes = mergeById(readJson(FILES.quizzes), quizDefs);
let questions = mergeById(readJson(FILES.questions), normalizedQuestions);

const gameRoot = path.join(PUBLIC, 'games');
const preferredGames = {
  'code-builder':'Code Builder','datentyp-match':'Datentyp Match','string-builder':'String Builder',
  'schleifen-sortieren':'Schleifen Sortieren','debugging-challenge':'Debugging Challenge','algorithmus-puzzle':'Algorithmus Puzzle'
};
const gameDirs = fs.existsSync(gameRoot) ? fs.readdirSync(gameRoot,{withFileTypes:true}).filter(x=>x.isDirectory() && fs.existsSync(path.join(gameRoot,x.name,'index.html'))) : [];
const importedGames = gameDirs.map((x,i)=>({ id:x.name, courseId:'lf05', title:preferredGames[x.name] || x.name.replace(/[-_]/g,' '), path:`/lf05/games/${x.name}/`, source:`public/lf05/games/${x.name}/index.html`, status:'published', order:i+1, updatedAt:NOW }));
if (fs.existsSync(path.join(PUBLIC,'duell','index.html')) || fs.existsSync(path.join(PUBLIC,'duell.html'))) importedGames.push({ id:'python-duell', courseId:'lf05', title:'Python-Duell', path:'/lf05/duell/', status:'published', order:importedGames.length+1, updatedAt:NOW });
let games = mergeById(readJson(FILES.games), importedGames);

const pageCandidates = [
  ['lf05-home','LF05','/lf05/','home',path.join(PUBLIC,'index.html')],
  ['lf05-lernen','Lernen','/lf05/lernen/','learning',path.join(PUBLIC,'lernen','index.html')],
  ['lf05-quiz','Lernkontrollen','/lf05/quiz/','quiz',path.join(PUBLIC,'quiz','index.html')],
  ['lf05-games','Lernspiele','/lf05/games/','games',path.join(PUBLIC,'games','index.html')],
  ['lf05-duell','Python-Duell','/lf05/duell/','multiplayer',path.join(PUBLIC,'duell','index.html')]
];
const importedPages = pageCandidates.filter(x=>fs.existsSync(x[4])).map((x,i)=>({id:x[0],courseId:'lf05',title:x[1],path:x[2],type:x[3],status:'published',order:i+1,updatedAt:NOW}));
let pages = mergeById(readJson(FILES.pages), importedPages);
let settings = readJson(FILES.settings);
if (!settings.length) settings = [{ id:'global-design', siteTitle:'FISI Lernen', primaryColor:'#2563eb', secondaryColor:'#7c3aed', fontFamily:'Inter', radius:16, status:'published' }];

writeJson(FILES.courses,courses); writeJson(FILES.tags,tags); writeJson(FILES.topics,topics); writeJson(FILES.lessons,lessons);
writeJson(FILES.quizzes,quizzes); writeJson(FILES.questions,questions); writeJson(FILES.games,games); writeJson(FILES.pages,pages); writeJson(FILES.settings,settings);

const report = { success:true, importedAt:NOW, backupDir, lernenFile:lernenFile ? path.relative(ROOT,lernenFile) : null, counts:{ courses:courses.length,tags:tags.length,topics:topics.length,lessons:lessons.length,quizzes:quizzes.length,questions:questions.length,games:games.length,pages:pages.length }, questionModules:modules.map(x=>({file:x.file,count:x.items.length})) };
writeJson('import-report.json',[report]);
console.log(JSON.stringify(report,null,2));
