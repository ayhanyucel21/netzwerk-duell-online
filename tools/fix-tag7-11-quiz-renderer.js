'use strict';
const fs=require('fs'),path=require('path');
const ROOT=process.cwd();
const file=path.join(ROOT,'public','lf05','quiz','index.html');
if(!fs.existsSync(file)){console.error('HATA: quiz/index.html bulunamadi');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,backup);

// The previous Code Builder patch accidentally supplied a generic fallback title
// to every normalized API question. Only Code Builder may use this fallback.
const patterns=[
  /q:q\.question\|\|q\.q\|\|'Schreibe den passenden Python-Code\.'/g,
  /q:q\.question\|\|q\.q\|\|"Schreibe den passenden Python-Code\."/g
];
let changed=0;
for(const re of patterns){s=s.replace(re,()=>{changed++;return "q:q.question||q.q||''"})}

// Remove any generic assignment that overwrites normal questions.
s=s.replace(/if\s*\(.*codebuilder.*\)\s*[^;]*question[^;]*Schreibe den passenden Python-Code[^;]*;/gi,m=>m.includes('lf05-codebuilder')?m:'');

fs.writeFileSync(file,s,'utf8');
console.log('BASARILI: Genel Code-Builder baslik fallbacki kaldirildi.');
console.log('Degisen normalize noktasi:',changed);
console.log('Yedek:',backup);
