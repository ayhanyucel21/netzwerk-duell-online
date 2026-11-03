'use strict';

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const candidates = [
  path.join(root, 'public', 'admin', 'admin.js'),
  path.join(root, 'public', 'admin', 'js', 'admin.js')
];
const file = candidates.find(fs.existsSync);

if (!file) {
  console.error('HATA: public/admin/admin.js bulunamadi.');
  process.exit(1);
}

let code = fs.readFileSync(file, 'utf8');
const backup = file.replace(/\.js$/i, `.backup-${Date.now()}.js`);
fs.copyFileSync(file, backup);

function replaceRequired(search, replacement, label) {
  if (!code.includes(search)) {
    console.error(`HATA: ${label} bulunamadi. Dosya degistirilmedi.`);
    console.error(`Yedek: ${backup}`);
    process.exit(1);
  }
  code = code.replace(search, replacement);
}

const oldLessons = `lessons:{label:"Lerninhalte",icon:"📖",subtitle:"Definitionen, Beispiele und IHK-Tipps bearbeiten",fields:[course(),f("tagId","Tag-ID","text"),f("topicId","Thema-ID","text"),f("title","Titel","text",true),f("content","Inhalt (Markdown/HTML)","textarea",true),f("example","Beispiel / Code","textarea"),f("ihkTip","IHK-Tipp","textarea"),status()]}`;

const newLessons = `lessons:{label:"Lerninhalte",icon:"📖",subtitle:"Zusammenfassungen, Begriffe, Beispiele und Prüfungstipps bearbeiten",fields:[course(),f("tagId","Tag-ID","text",true),f("topicId","Thema-ID","text"),f("title","Titel","text",true),f("summary","Zusammenfassung","textarea"),f("content","Begriffe und Definitionen (JSON)","json-terms",true),f("example","Beispiel / Code","textarea"),f("tip","Merksatz / Lerntipp","textarea"),f("examTip","LZK- / IHK-Tipp","textarea"),status()]}`;

replaceRequired(oldLessons, newLessons, 'Lessons-Definition');

const oldOpen = `if(field.name==="options"&&Array.isArray(value))value=value.join("\\n");if(field.name==="blocks"&&typeof value!=="string"&&value)value=JSON.stringify(value,null,2);if(field.type==="checkbox")el.checked=Boolean(value);else if(value!==undefined&&value!==null)el.value=value`;
const newOpen = `if(field.name==="options"&&Array.isArray(value))value=value.join("\\n");if(field.name==="blocks"&&typeof value!=="string"&&value)value=JSON.stringify(value,null,2);if(field.type==="json-terms"&&Array.isArray(value))value=JSON.stringify(value,null,2);if(field.type==="checkbox")el.checked=Boolean(value);else if(value!==undefined&&value!==null)el.value=value`;
replaceRequired(oldOpen, newOpen, 'Editor veri doldurma kodu');

const oldFieldStart = `function fieldHtml(x){const full=["textarea"].includes(x.type)?" full":"";`;
const newFieldStart = `function fieldHtml(x){const full=["textarea","json-terms"].includes(x.type)?" full":"";`;
replaceRequired(oldFieldStart, newFieldStart, 'fieldHtml full-width kodu');

const oldTextarea = `if(x.type==="textarea")return\`<label class="field\${full}"><span>\${x.label}</span><textarea name="\${x.name}"\${req}></textarea></label>\`;`;
const newTextarea = `if(x.type==="textarea")return\`<label class="field\${full}"><span>\${x.label}</span><textarea name="\${x.name}"\${req}></textarea></label>\`;if(x.type==="json-terms")return\`<label class="field\${full}"><span>\${x.label}</span><small style="display:block;margin:0 0 8px;color:#64748b">Format: [{ "term": "Begriff", "definition": "Erklärung" }]</small><textarea name="\${x.name}" rows="14" spellcheck="false"\${req}></textarea></label>\`;`;
replaceRequired(oldTextarea, newTextarea, 'Textarea renderer');

const oldSave = `if(field.name==="options")v=v.split("\\n").map(x=>x.trim()).filter(Boolean);if(field.name==="topics")v=v.split(",").map(x=>x.trim()).filter(Boolean);if(field.name==="blocks"&&v){try{v=JSON.parse(v)}catch{return toast("Blöcke enthalten kein gültiges JSON.",true)}}data[field.name]=v`;
const newSave = `if(field.name==="options")v=v.split("\\n").map(x=>x.trim()).filter(Boolean);if(field.name==="topics")v=v.split(",").map(x=>x.trim()).filter(Boolean);if(field.name==="blocks"&&v){try{v=JSON.parse(v)}catch{return toast("Blöcke enthalten kein gültiges JSON.",true)}}if(field.type==="json-terms"){try{v=JSON.parse(v||"[]");if(!Array.isArray(v)||v.some(x=>!x||typeof x!=="object"||!("term" in x)||!("definition" in x)))throw new Error()}catch{return toast("Begriffe müssen gültiges JSON mit term und definition sein.",true)}}data[field.name]=v`;
replaceRequired(oldSave, newSave, 'Save parser');

// Improve array display in the manager table.
const oldDisplay = `function display(v){if(Array.isArray(v))return v.join(", ");`;
const newDisplay = `function display(v){if(Array.isArray(v))return v.map(x=>x&&typeof x==="object"?(x.term||x.title||x.id||"Objekt"):x).join(", ");`;
replaceRequired(oldDisplay, newDisplay, 'Array display');

fs.writeFileSync(file, code, 'utf8');
console.log('BASARILI: Admin Lesson editoru yeni LF05 veri modeline uyarlandi.');
console.log(`Guncellendi: ${file}`);
console.log(`Yedek: ${backup}`);
console.log('Not: contentHtml alani korunur; form kaydederken silinmezse server birlestirme yapmalidir.');
