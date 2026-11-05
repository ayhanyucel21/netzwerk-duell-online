'use strict';
const fs=require('fs'),path=require('path');
const file=path.join(process.cwd(),'public','lf05','ihk','index.html');
if(!fs.existsSync(file)){console.error('HATA: public/lf05/ihk/index.html bulunamadi');process.exit(1)}
let s=fs.readFileSync(file,'utf8');
const backup=file.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(file,backup);
const old="document.querySelectorAll('.option').forEach(b=>{b.disabled=true;const v=b.dataset.value;b.classList.toggle('correct',expected.includes(v));b.classList.toggle('wrong',got.includes(v)&&!expected.includes(v))});";
const neu="document.querySelectorAll('.option').forEach(b=>{b.disabled=true;const v=b.dataset.value;const isCorrect=expected.includes(v);const wasSelected=got.includes(v);b.classList.remove('selected','correct','wrong');if(isCorrect){b.classList.add('correct')}else if(wasSelected){b.classList.add('wrong')}});";
if(!s.includes(old)){console.error('HATA: chooseMultiple renk blogu bulunamadi. Dosya degistirilmedi.');process.exit(1)}
s=s.replace(old,neu);
// stronger visible colors
s=s.replace('.option.correct{border-color:var(--green);background:#134a38}', '.option.correct{border-color:var(--green)!important;background:#134a38!important;box-shadow:0 0 0 2px #45dc9633 inset}');
s=s.replace('.option.wrong{border-color:var(--red);background:#54223a}', '.option.wrong{border-color:var(--red)!important;background:#54223a!important;box-shadow:0 0 0 2px #ff6e8233 inset}');
fs.writeFileSync(file,s,'utf8');
console.log('BASARILI: IHK coklu cevap renkleri duzeltildi.');
console.log('Yedek:',backup);
