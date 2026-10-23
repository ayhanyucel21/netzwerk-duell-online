'use strict';
const fs=require('fs'),path=require('path');
const questions=require('../questions');
for(const mode of ['Quiz','Debugging','Datentyp Match','Code Builder']){
 const n=questions.filter(q=>q.mode===mode).length;if(n!==25)throw new Error(`${mode}: ${n}`);
}
for(const [i,q] of questions.entries()){
 if(!Array.isArray(q.options)||q.options.length!==4||!q.options.includes(q.answer))throw new Error(`invalid question ${i}`);
 if(!q.explanation.includes('Prüfungsstrategie:'))throw new Error(`short explanation ${i}`);
}
const server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8');
const duel=fs.readFileSync(path.join(__dirname,'..','public','lf05','duell','duel.html'),'utf8');
for(const banned of ['ROUND_DURATION_MS','Antwortzeit abgelaufen','game.deadline'])if(server.includes(banned))throw new Error(`timer remains: ${banned}`);
for(const token of ['python-next-question','python-next-progress','correctRank'])if(!server.includes(token)||!duel.includes(token))throw new Error(`missing ${token}`);
console.log('OK: 100 questions, no timer, manual next, detailed explanations.');
