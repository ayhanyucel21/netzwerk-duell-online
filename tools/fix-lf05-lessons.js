'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'public', 'lf05', 'lernen', 'index.html');
const DATA = path.join(ROOT, 'data');
const LESSONS = path.join(DATA, 'lessons.json');
const TAGS = path.join(DATA, 'tags.json');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

function decodeHtml(s = '') {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(s = '') {
  return decodeHtml(s)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstMatch(html, re) {
  const m = html.match(re);
  return m ? stripHtml(m[1]) : '';
}

function extractTerms(html) {
  const out = [];
  const re = /<div\s+class=["'][^"']*\bterm\b[^"']*["'][^>]*>[\s\S]*?<b[^>]*>([\s\S]*?)<\/b>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/div>/gi;
  for (const m of html.matchAll(re)) {
    const term = stripHtml(m[1]);
    const definition = stripHtml(m[2]);
    if (term && definition) out.push({ term, definition });
  }
  return out;
}

function extractSection(source, n) {
  const startMarker = new RegExp(`<article\\s+class=["'][^"']*\\bday\\b[^"']*["'][^>]*\\bid=["']tag${n}["'][^>]*>`, 'i');
  const start = startMarker.exec(source);
  if (!start) return null;

  const from = start.index;
  const nextMarker = new RegExp(`<article\\s+class=["'][^"']*\\bday\\b[^"']*["'][^>]*\\bid=["']tag${n + 1}["'][^>]*>`, 'i');
  const rest = source.slice(from + start[0].length);
  const next = nextMarker.exec(rest);
  const end = next ? from + start[0].length + next.index : source.indexOf('</section>', from);
  if (end < 0) return null;
  return source.slice(from, end).trim();
}

if (!fs.existsSync(SOURCE)) fail('public/lf05/lernen/index.html bulunamadi.');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });

const source = fs.readFileSync(SOURCE, 'utf8');
const backupDir = path.join(ROOT, 'backups', `lf05-lessons-fix-${stamp}`);
fs.mkdirSync(backupDir, { recursive: true });
for (const file of [LESSONS, TAGS]) {
  if (fs.existsSync(file)) fs.copyFileSync(file, path.join(backupDir, path.basename(file)));
}

const lessons = [];
const tags = [];

for (let n = 1; n <= 6; n++) {
  const html = extractSection(source, n);
  if (!html) fail(`Tag ${n} HTML bolumu bulunamadi. Hicbir yeni lessons.json yazilmadi.`);

  const heading = firstMatch(html, /<h2[^>]*>([\s\S]*?)<\/h2>/i) || `Tag ${n}`;
  const summary = firstMatch(html, /<div\s+class=["'][^"']*\bsummary\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)
    .replace(/^Zusammenfassung:\s*/i, '');
  const terms = extractTerms(html);
  const example = firstMatch(html, /<div\s+class=["'][^"']*\bexample\b[^"']*["'][^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  const tip = firstMatch(html, /<div\s+class=["'][^"']*\bnote\s+tip\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i).replace(/^💡\s*Merksatz\s*/i, '');
  const examTip = firstMatch(html, /<div\s+class=["'][^"']*\bnote\s+exam\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i).replace(/^🎯\s*LZK-\/IHK-Tipp\s*/i, '');

  lessons.push({
    id: `lf05-lesson-tag${n}`,
    courseId: 'lf05',
    tagId: `lf05-tag${n}`,
    title: heading,
    summary,
    content: terms,
    example,
    tip,
    examTip,
    contentHtml: html,
    contentText: stripHtml(html),
    source: 'public/lf05/lernen/index.html',
    status: 'published',
    order: n,
    updatedAt: new Date().toISOString()
  });

  tags.push({
    id: `lf05-tag${n}`,
    courseId: 'lf05',
    number: n,
    title: heading,
    status: 'published',
    order: n,
    updatedAt: new Date().toISOString()
  });
}

fs.writeFileSync(LESSONS, JSON.stringify(lessons, null, 2) + '\n', 'utf8');

let existingTags = [];
try { existingTags = fs.existsSync(TAGS) ? JSON.parse(fs.readFileSync(TAGS, 'utf8')) : []; } catch (_) {}
const otherTags = Array.isArray(existingTags) ? existingTags.filter(t => t.courseId !== 'lf05') : [];
fs.writeFileSync(TAGS, JSON.stringify([...otherTags, ...tags], null, 2) + '\n', 'utf8');

console.log('SUCCESS: LF05 lessons temizlendi.');
console.log(`Lessons: ${lessons.length}`);
console.log(`Tags: ${tags.length}`);
lessons.forEach(x => console.log(`- ${x.id}: ${x.title} (${x.content.length} terim)`));
console.log(`Backup: ${backupDir}`);
