'use strict';
const fs=require('fs'), path=require('path');
const root=process.cwd(), data=path.join(root,'data');
const names=['courses','tags','topics','lessons','quizzes','questions-lf05','games','pages','settings'];
let failed=false;
for(const name of names){
  const file=path.join(data,`${name}.json`);
  try{const value=JSON.parse(fs.readFileSync(file,'utf8')); if(!Array.isArray(value)) throw new Error('Kok deger dizi olmali'); console.log(`OK ${name}.json: ${value.length}`);}
  catch(e){failed=true; console.error(`HATA ${name}.json: ${e.message}`);}
}
process.exitCode=failed?1:0;
