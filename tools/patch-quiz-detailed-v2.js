'use strict';const fs=require('fs'),path=require('path');const R=process.cwd(),f=path.join(R,'public','lf05','quiz','index.html');if(!fs.existsSync(f)){console.error('HATA quiz index yok');process.exit(1)}let s=fs.readFileSync(f,'utf8');const b=f.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(f,b);
s=s.replace(/exp:String\(q\.explanation\?\?q\.exp\?\?q\.feedback\?\?' '\)/g,"exp:String(q.explanationDetailed??q.explanation??q.exp??q.feedback??'')");
s=s.replace("exp:String(q.explanation??q.exp??q.feedback??'')","exp:String(q.explanationDetailed??q.explanation??q.exp??q.feedback??'')");
s=s.replace("$('explain').innerHTML=saved?`<b>Erklärung:</b> ${escapeHtml(item.exp||'Keine zusätzliche Erklärung vorhanden.')}`:'';","$('explain').innerHTML=saved?(item.exp||'<b>Erklärung:</b> Keine zusätzliche Erklärung vorhanden.'):'';");
fs.writeFileSync(f,s,'utf8');console.log('SUCCESS quiz detailed v2');console.log('Backup:',b);
