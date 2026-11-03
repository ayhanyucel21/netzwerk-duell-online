'use strict';
const fs=require('fs'), path=require('path');
const ROOT=process.cwd();
const FILE=path.join(ROOT,'data','questions-lf05.json');
if(!fs.existsSync(FILE)){console.error('HATA: data/questions-lf05.json bulunamadi.');process.exit(1)}
const data=JSON.parse(fs.readFileSync(FILE,'utf8'));
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const backup=path.join(ROOT,'backups',`answer-length-balance-${stamp}`);fs.mkdirSync(backup,{recursive:true});fs.copyFileSync(FILE,path.join(backup,'questions-lf05.json'));
function answerIndex(q){if(typeof q.correct==='number')return q.correct;if(typeof q.correct==='string'){if(/^\d+$/.test(q.correct))return Number(q.correct);return q.options?.findIndex(x=>String(x)===q.correct)??-1}if(typeof q.answer==='number')return q.answer;if(typeof q.answer==='string')return q.options?.findIndex(x=>String(x)===q.answer)??-1;return -1}
function median(a){const x=[...a].sort((m,n)=>m-n),n=x.length;if(!n)return 0;return n%2?x[(n-1)/2]:(x[n/2-1]+x[n/2])/2}
const report=[];
for(const q of data){if(!Array.isArray(q.options)||q.options.length<3)continue;const ai=answerIndex(q);if(ai<0||ai>=q.options.length)continue;const lens=q.options.map(x=>String(x).trim().length), correct=lens[ai], others=lens.filter((_,i)=>i!==ai), med=median(others), maxOther=Math.max(...others), minOther=Math.min(...others);
 const longest=correct>maxOther; const ratio=med?correct/med:1;
 if(longest&&ratio>=1.35) report.push({id:q.id,quizId:q.quizId,question:q.question,correctIndex:ai,correctLength:correct,otherMedian:med,ratio:Number(ratio.toFixed(2)),options:q.options});
}
const OUT=path.join(ROOT,'data','answer-length-report.json');fs.writeFileSync(OUT,JSON.stringify({generatedAt:new Date().toISOString(),rule:'correct answer is longest and >=35% longer than median distractor',flagged:report.length,items:report},null,2)+'\n');
console.log('ANALIZ TAMAMLANDI');console.log('Toplam soru:',data.length);console.log('Uzun dogru cevap riski:',report.length);console.log('Rapor: data/answer-length-report.json');console.log('Not: Sorular otomatik degistirilmedi; anlami bozmamak icin yalnizca riskli kayitlar isaretlendi.');console.log('Yedek:',backup);
