'use strict';const fs=require('fs'),path=require('path');const f=path.join(process.cwd(),'public','lf05','ihk','index.html');if(!fs.existsSync(f)){console.error('HATA IHK index yok');process.exit(1)}let s=fs.readFileSync(f,'utf8');const b=f.replace(/\.html$/,`.backup-${Date.now()}.html`);fs.copyFileSync(f,b);
const old="$('explain').style.display='block';$('explain').innerHTML=q.explanationDetailed||q.explanation||'';$('next').disabled=false;";
const neu="$('explain').style.display='block';$('explain').innerHTML=`<b>${ok?'Richtig':'Nicht richtig'}.</b><br><b>Richtige Antwort${expected.length>1?'en':''}:</b> ${expected.map(esc).join(', ')}<br><br>${q.explanationDetailed||q.explanation||''}`;$('next').disabled=false;";
if(!s.includes(old)){console.error('HATA multi explanation marker yok');process.exit(1)}s=s.replace(old,neu);
fs.writeFileSync(f,s,'utf8');console.log('SUCCESS: IHK correct answers now shown explicitly.');console.log('Backup:',b);
