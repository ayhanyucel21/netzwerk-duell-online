'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),F=path.join(R,'data','questions-lf05.json');
if(!fs.existsSync(F)){console.error('HATA: questions-lf05.json bulunamadi');process.exit(1)}
let qs=JSON.parse(fs.readFileSync(F,'utf8'));
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`multiple-select-${stamp}`);fs.mkdirSync(B,{recursive:true});fs.copyFileSync(F,path.join(B,'questions-lf05.json'));
let changed=0;const found=[];
for(const q of qs){let arr=[];if(Array.isArray(q.correct))arr=q.correct.map(Number);else if(Array.isArray(q.correctAnswers))arr=q.correctAnswers.map(Number);if(arr.length>1){q.type='multiple-select';q.correct=arr;q.correctAnswers=arr;found.push({id:q.id,question:q.question,correct:arr});changed++}}
fs.writeFileSync(F,JSON.stringify(qs,null,2)+'\n');fs.writeFileSync(path.join(R,'data','multiple-select-report.json'),JSON.stringify({changed,items:found},null,2)+'\n');console.log('SUCCESS multiple-select normalized:',changed);console.log('Backup:',B);
