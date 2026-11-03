'use strict';
const fs=require('fs'),path=require('path');
const ROOT=process.cwd();
const file=[path.join(ROOT,'public/admin/admin.js'),path.join(ROOT,'public/admin/js/admin.js')].find(fs.existsSync);
if(!file){console.error('HATA: admin.js bulunamadi.');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.js$/,`.backup-${Date.now()}.js`);fs.copyFileSync(file,backup);

// Change lesson content field from JSON textarea to visual term editor.
s=s.replace('f("content","Begriffe und Definitionen (JSON)","json-terms",true)','f("content","Begriffe und Definitionen","terms-editor",true)');

// Fill visual editor when opening a lesson.
const fillNeedle='if(field.type==="json-terms"&&Array.isArray(value))value=JSON.stringify(value,null,2);';
if(s.includes(fillNeedle))s=s.replace(fillNeedle,fillNeedle+'if(field.type==="terms-editor"){renderTermsEditor(el,Array.isArray(value)?value:[]);continue;}');
else {
  const marker='if(field.type==="checkbox")el.checked=Boolean(value);';
  if(!s.includes(marker)){console.error('HATA: openEditor doldurma noktasi bulunamadi.');process.exit(1)}
  s=s.replace(marker,'if(field.type==="terms-editor"){renderTermsEditor(el,Array.isArray(value)?value:[]);continue;}'+marker);
}

// Full-width type.
s=s.replace('["textarea","json-terms"].includes(x.type)','["textarea","json-terms","terms-editor"].includes(x.type)');
s=s.replace('["textarea"].includes(x.type)','["textarea","terms-editor"].includes(x.type)');

// Visual field renderer.
const textareaMarker='if(x.type==="textarea")return`<label class="field${full}"><span>${x.label}</span><textarea name="${x.name}"${req}></textarea></label>`;';
if(!s.includes('x.type==="terms-editor"')){
  if(!s.includes(textareaMarker)){console.error('HATA: fieldHtml textarea noktasi bulunamadi.');process.exit(1)}
  s=s.replace(textareaMarker,textareaMarker+'if(x.type==="terms-editor")return`<div class="field full"><span>${x.label}</span><div class="terms-editor" data-terms-editor="${x.name}"></div><button type="button" class="button secondary term-add">＋ Begriff hinzufügen</button><input type="hidden" name="${x.name}"></div>`;');
}

// Save visual rows as objects.
const saveMarker='let v=field.type==="checkbox"?el.checked:el.value.trim();';
if(!s.includes(saveMarker)){console.error('HATA: save noktasi bulunamadi.');process.exit(1)}
s=s.replace(saveMarker,'let v=field.type==="checkbox"?el.checked:el.value.trim();if(field.type==="terms-editor"){v=readTermsEditor(el);data[field.name]=v;continue;}');

// Add editor functions before save().
const funcMarker='async function save(e){';
if(!s.includes('function renderTermsEditor(')){
  const funcs=`function termRow(item={}){return \`<div class="term-editor-row"><span class="term-drag" title="Reihenfolge">↕</span><input class="term-name" placeholder="Begriff, z. B. Systemsoftware" value="\${esc(item.term||'')}"><textarea class="term-definition" placeholder="Definition / Erklärung">\${esc(item.definition||'')}</textarea><div class="term-actions"><button type="button" class="term-up" title="Nach oben">↑</button><button type="button" class="term-down" title="Nach unten">↓</button><button type="button" class="term-delete" title="Löschen">🗑</button></div></div>\`}
function bindTermEditor(box){const add=box.parentElement.querySelector('.term-add');if(add&&!add.dataset.bound){add.dataset.bound='1';add.onclick=()=>{box.insertAdjacentHTML('beforeend',termRow());bindTermEditor(box)}}box.querySelectorAll('.term-delete').forEach(b=>b.onclick=()=>b.closest('.term-editor-row').remove());box.querySelectorAll('.term-up').forEach(b=>b.onclick=()=>{const r=b.closest('.term-editor-row'),p=r.previousElementSibling;if(p)box.insertBefore(r,p)});box.querySelectorAll('.term-down').forEach(b=>b.onclick=()=>{const r=b.closest('.term-editor-row'),n=r.nextElementSibling;if(n)box.insertBefore(n,r)})}
function renderTermsEditor(hidden,items=[]){const box=hidden.parentElement.querySelector('[data-terms-editor="'+hidden.name+'"]');if(!box)return;box.innerHTML=(items.length?items:[{}]).map(termRow).join('');bindTermEditor(box)}
function readTermsEditor(hidden){const box=hidden.parentElement.querySelector('[data-terms-editor="'+hidden.name+'"]');if(!box)return[];return[...box.querySelectorAll('.term-editor-row')].map(r=>({term:r.querySelector('.term-name').value.trim(),definition:r.querySelector('.term-definition').value.trim()})).filter(x=>x.term||x.definition)}
`;
  s=s.replace(funcMarker,funcs+funcMarker);
}
fs.writeFileSync(file,s,'utf8');

// Add CSS into admin css if available, otherwise index inline.
const css=`\n/* Visual Begriff Editor */\n.terms-editor{display:grid;gap:10px;margin:8px 0 10px}.term-editor-row{display:grid;grid-template-columns:32px minmax(160px,.7fr) minmax(260px,1.5fr) auto;gap:9px;align-items:stretch;padding:10px;border:1px solid #263552;border-radius:14px;background:#091221}.term-editor-row .term-name,.term-editor-row .term-definition{width:100%;margin:0}.term-editor-row .term-definition{min-height:72px;resize:vertical}.term-drag{display:grid;place-items:center;color:#7f96b2;font-size:1.2rem}.term-actions{display:flex;flex-direction:column;gap:5px}.term-actions button{min-width:38px;min-height:32px;border:1px solid #314465;border-radius:9px;color:#eaf3ff;background:#13213a;cursor:pointer}.term-actions button:hover{border-color:#687cff;background:#1b2d50}.term-delete:hover{border-color:#ff6e82!important;color:#ff9bab!important}.term-add{margin-top:4px}@media(max-width:760px){.term-editor-row{grid-template-columns:28px 1fr}.term-definition{grid-column:2}.term-actions{grid-column:2;flex-direction:row}}\n`;
const cssFile=[path.join(ROOT,'public/admin/admin.css'),path.join(ROOT,'public/admin/css/admin.css'),path.join(ROOT,'public/admin/style.css')].find(fs.existsSync);
if(cssFile){let c=fs.readFileSync(cssFile,'utf8');if(!c.includes('Visual Begriff Editor'))fs.appendFileSync(cssFile,css)}else{const idx=path.join(ROOT,'public/admin/index.html');if(fs.existsSync(idx)){let h=fs.readFileSync(idx,'utf8');h=h.replace('</head>',`<style>${css}</style></head>`);fs.writeFileSync(idx,h,'utf8')}}
console.log('BASARILI: Gorsel Begriff-Editor etkinlestirildi.');
console.log('Guncellendi:',file);console.log('Yedek:',backup);
