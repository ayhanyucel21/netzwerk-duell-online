'use strict';
const fs=require('fs'),path=require('path');
const ROOT=process.cwd();
const find=(arr)=>arr.find(fs.existsSync);
const adminJs=find([path.join(ROOT,'public/admin/admin.js'),path.join(ROOT,'public/admin/js/admin.js')]);
const adminCss=find([path.join(ROOT,'public/admin/admin.css'),path.join(ROOT,'public/admin/css/admin.css'),path.join(ROOT,'public/admin/style.css')]);
const loader=path.join(ROOT,'public/js/loader.js');
if(!adminJs||!fs.existsSync(loader)){console.error('HATA: admin.js veya public/js/loader.js bulunamadi.');process.exit(1)}
const stamp=Date.now();
for(const f of [adminJs,adminCss,loader].filter(Boolean))fs.copyFileSync(f,`${f}.backup-${stamp}`);

let a=fs.readFileSync(adminJs,'utf8');
// Upgrade lessons definition, supporting both original and already-upgraded variants.
const lessonRe=/lessons:\{label:"Lerninhalte"[\s\S]*?\}\s*,\s*questions:/;
const lessonDef=`lessons:{label:"Lerninhalte",icon:"📖",subtitle:"Inhalte, Begriffe, Beispiele und Darstellung bearbeiten",fields:[course(),f("tagId","Tag-ID","text",true),f("topicId","Thema-ID","text"),f("title","Titel","text",true),f("summary","Zusammenfassung","textarea"),f("content","Begriffe und Definitionen (JSON)","json-terms",true),f("example","Beispiel / Code","textarea"),f("tip","Merksatz / Lerntipp","textarea"),f("examTip","LZK- / IHK-Tipp","textarea"),sel("fontSize","Textgröße",["small","normal","large","x-large"]),sel("fontWeight","Schriftstärke",["normal","semibold","bold"]),sel("textAlign","Textausrichtung",["left","center","right"]),f("textColor","Textfarbe","color"),f("accentColor","Akzentfarbe","color"),status()]},
 questions:`;
if(!lessonRe.test(a)){console.error('HATA: lessons definition bulunamadi.');process.exit(1)}
a=a.replace(lessonRe,lessonDef);
// Ensure json-terms handling exists.
if(!a.includes('field.type==="json-terms"&&Array.isArray(value)'))a=a.replace('if(field.name==="blocks"&&typeof value!=="string"&&value)value=JSON.stringify(value,null,2);','if(field.name==="blocks"&&typeof value!=="string"&&value)value=JSON.stringify(value,null,2);if(field.type==="json-terms"&&Array.isArray(value))value=JSON.stringify(value,null,2);');
a=a.replace('const full=["textarea"].includes(x.type)?" full":""','const full=["textarea","json-terms"].includes(x.type)?" full":""');
if(!a.includes('if(x.type==="json-terms")'))a=a.replace('if(x.type==="textarea")return`<label class="field${full}"><span>${x.label}</span><textarea name="${x.name}"${req}></textarea></label>`;','if(x.type==="textarea")return`<label class="field${full}"><span>${x.label}</span><textarea name="${x.name}"${req}></textarea></label>`;if(x.type==="json-terms")return`<label class="field${full}"><span>${x.label}</span><small class="field-help">Format: [{ "term": "Begriff", "definition": "Erklärung" }]</small><textarea class="json-editor" name="${x.name}" rows="15" spellcheck="false"${req}></textarea></label>`;');
if(!a.includes('field.type==="json-terms"')){a=a.replace('if(field.name==="blocks"&&v){try{v=JSON.parse(v)}catch{return toast("Blöcke enthalten kein gültiges JSON.",true)}}data[field.name]=v','if(field.name==="blocks"&&v){try{v=JSON.parse(v)}catch{return toast("Blöcke enthalten kein gültiges JSON.",true)}}if(field.type==="json-terms"){try{v=JSON.parse(v||"[]");if(!Array.isArray(v)||v.some(x=>!x||typeof x!=="object"||!("term" in x)||!("definition" in x)))throw new Error()}catch{return toast("Begriffe benötigen gültiges JSON mit term und definition.",true)}}data[field.name]=v');}
fs.writeFileSync(adminJs,a,'utf8');

const darkCss=`
/* Admin V2 dark modern theme */
:root{--admin-bg:#070b14;--admin-panel:#0f172a;--admin-panel2:#111c33;--admin-line:#263552;--admin-text:#eef6ff;--admin-muted:#93a7bd;--primary:#5b6cff;--secondary:#9b6dff;--radius:16px}
html,body{background:radial-gradient(circle at 10% 5%,#5632a62b,transparent 27%),radial-gradient(circle at 90% 8%,#157ca72b,transparent 25%),var(--admin-bg)!important;color:var(--admin-text)!important}
.sidebar,.topbar,.panel,.stat,.manager-card,.dialog-card,dialog>form{background:linear-gradient(145deg,var(--admin-panel2),var(--admin-panel))!important;border-color:var(--admin-line)!important;color:var(--admin-text)!important;box-shadow:0 18px 45px #0005}
input,textarea,select{background:#091221!important;color:var(--admin-text)!important;border:1px solid var(--admin-line)!important;border-radius:12px!important}input:focus,textarea:focus,select:focus{outline:2px solid #5b6cff66!important;border-color:#7180ff!important}
table,thead,tbody,tr,td,th{border-color:var(--admin-line)!important}th{color:#bcd0e5!important}.row-sub,.field-help,.subtitle,small{color:var(--admin-muted)!important}
button,.button{border-radius:12px!important}.button.primary,#addBtn{background:linear-gradient(135deg,#5267ff,#955cff)!important;color:white!important}.json-editor{font:13px/1.5 Consolas,monospace!important;min-height:280px}.field-help{display:block;margin:0 0 7px}.badge.published{background:#123f33!important;color:#75efb7!important}.badge.draft{background:#463919!important;color:#ffe08a!important}dialog::backdrop{background:#020617cc;backdrop-filter:blur(4px)}
`;
if(adminCss){let c=fs.readFileSync(adminCss,'utf8');if(!c.includes('Admin V2 dark modern theme'))c+=darkCss;fs.writeFileSync(adminCss,c,'utf8')}else{const idx=path.join(ROOT,'public/admin/index.html');if(fs.existsSync(idx)){let h=fs.readFileSync(idx,'utf8');h=h.replace('</head>',`<style>${darkCss}</style></head>`);fs.writeFileSync(idx,h,'utf8')}}

let l=fs.readFileSync(loader,'utf8');
// Stop preferring legacy contentHtml. Always use structured JSON renderer.
l=l.replace(/function renderLesson\(lesson, index\) \{[\s\S]*?return renderFallbackLesson\(lesson, index\);\n  \}/,`function renderLesson(lesson,index){return renderFallbackLesson(lesson,index)}`);
// Add style helpers and style application to fallback article.
if(!l.includes('function lessonStyle'))l=l.replace('function renderFallbackLesson(lesson, index) {', "function lessonStyle(lesson){const sizes={small:'0.9rem',normal:'1rem',large:'1.12rem','x-large':'1.25rem'};const weights={normal:'400',semibold:'600',bold:'700'};const color=lesson.textColor||'';const accent=lesson.accentColor||'';const align=['left','center','right'].includes(lesson.textAlign)?lesson.textAlign:'left';let css='font-size:'+(sizes[lesson.fontSize]||sizes.normal)+';font-weight:'+(weights[lesson.fontWeight]||weights.normal)+';text-align:'+align+';';if(color)css+='color:'+color+';';if(accent)css+='--accent:'+accent+';';return {css}}\n\n  function renderFallbackLesson(lesson, index) {");
l=l.replace('data-day="${index + 1}"\n      >','data-day="${index + 1}" style="${lessonStyle(lesson).css}"\n      >');
fs.writeFileSync(loader,l,'utf8');
console.log('BASARILI: Admin V2 ve dinamik Lernen renderer etkinlestirildi.');
console.log('Admin JS:',adminJs);console.log('Admin CSS:',adminCss||'index.html inline style');console.log('Loader:',loader);console.log('Yedek zaman damgasi:',stamp);
