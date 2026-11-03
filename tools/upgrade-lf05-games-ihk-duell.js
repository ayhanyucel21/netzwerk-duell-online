'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(), DATA=path.join(R,'data'), PUB=path.join(R,'public','lf05');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const BACK=path.join(R,'backups',`games-ihk-duell-${stamp}`);fs.mkdirSync(BACK,{recursive:true});
const copy=f=>{if(fs.existsSync(f)){const rel=path.relative(R,f),to=path.join(BACK,rel);fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(f,to)}};
const read=f=>JSON.parse(fs.readFileSync(f,'utf8')), write=(f,v)=>{fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,JSON.stringify(v,null,2)+'\n')};
const merge=(arr,items)=>{const m=new Map(arr.map(x=>[x.id,x]));items.forEach(x=>m.set(x.id,{...(m.get(x.id)||{}),...x}));return [...m.values()]};

// 1) Compact every LF05 game page and remove floating Tag 7-11 enhancer.
const gamesRoot=path.join(PUB,'games');
const compactCss=`\n/* LF05 compact game layout */\nhtml{font-size:16px!important}body{min-height:100vh!important}main,.shell,.wrap,.container{width:min(980px,calc(100% - 18px))!important;padding-top:10px!important;padding-bottom:18px!important}.hero{padding:18px 20px!important;border-radius:18px!important}.hero h1,h1{margin:8px 0 5px!important;font-size:clamp(1.8rem,4vw,3rem)!important}.hero p{margin:0!important;line-height:1.45!important}.stats{margin:10px 0 16px!important;gap:8px!important}.stat{padding:10px!important}.game,.arena,.quiz,.panel,.card{border-radius:16px!important}.game,.arena,.quiz,.panel{padding:16px!important}.grid{gap:10px!important}.question,h2{margin-top:8px!important;margin-bottom:10px!important}.options,.opts{gap:8px!important}.option,.opts button,.action,.next{padding:11px 12px!important}.bar{margin:10px 0 15px!important}.feedback,.explain{margin:10px 0!important;padding:10px!important}footer{padding:14px!important}@media(max-width:600px){html{font-size:15px!important}.hero{padding:15px!important}.game,.arena,.quiz,.panel{padding:13px!important}}\n`;
if(fs.existsSync(gamesRoot)){
 for(const dir of fs.readdirSync(gamesRoot,{withFileTypes:true}).filter(d=>d.isDirectory())){
  const f=path.join(gamesRoot,dir.name,'index.html'); if(!fs.existsSync(f))continue; copy(f); let h=fs.readFileSync(f,'utf8');
  h=h.replace(/<script\s+src=["']\/lf05\/games\/tag7-11-challenges\.js["']><\/script>/gi,'');
  h=h.replace(/<script\s+src=["']\/lf05\/games\/tag7-11-enhancer\.js["']><\/script>/gi,'');
  h=h.replace(/<button[^>]*class=["'][^"']*new-topic-launch[^"']*["'][\s\S]*?<\/button>/gi,'');
  if(!h.includes('LF05 compact game layout'))h=h.replace('</style>',compactCss+'</style>');
  fs.writeFileSync(f,h,'utf8');
 }
}
// enhancer no longer used; preserve files but disable accidental execution.
const enhancer=path.join(gamesRoot,'tag7-11-enhancer.js');if(fs.existsSync(enhancer)){copy(enhancer);fs.writeFileSync(enhancer,"/* Disabled: Tag 7-11 content is integrated into the games directly. */\n");}

// Shared 25-question professional pool for IHK and duel.
const raw=[
['Ein Inventarsystem benötigt eindeutige Gerätenummern ohne feste Reihenfolge. Welche Struktur passt?',['Liste','Set','Tupel','String'],1,'Ein Set verhindert doppelte Einträge.'],
['Welche Aussage zu einem Tupel ist richtig?',['Es ist geordnet und unveränderbar.','Es speichert nur Zahlen.','Es besitzt keine Indizes.','Es entfernt Duplikate automatisch.'],0,'Tupel sind geordnet und immutable.'],
['Ein Dictionary soll einen fehlenden Schlüssel ohne Exception lesen. Welche Methode passt?',['pop()','get()','append()','sort()'],1,'get() kann einen Defaultwert zurückgeben.'],
['Welche Datenrepräsentation passt zu verschachtelten API-Daten?',['CSV','JSON','Bitmap','Plaintext ohne Struktur'],1,'JSON unterstützt Objekte und Arrays.'],
['Eine Funktion soll gut testbar sein. Welche Gestaltung ist vorzuziehen?',['Globale Werte verändern','Parameter verwenden und einen Wert zurückgeben','Nur print() verwenden','Alle Exceptions ignorieren'],1,'Klare Ein- und Ausgaben vereinfachen Tests.'],
['Welche Werte prüfen eine Grenze bei 18 besonders sinnvoll?',['1, 2, 3','17, 18, 19','18, 28, 38','0, 50, 100'],1,'Direkte Nachbarn decken Grenzfehler auf.'],
['Welches Verfahren gehört eher zum Whitebox-Test?',['Äquivalenzklassenbildung','Grenzwertanalyse','Pfadabdeckung','Anforderungsinterview'],2,'Pfadabdeckung basiert auf der internen Struktur.'],
['Was bewirkt return in einer Python-Funktion?',['Es beendet die Funktion und kann einen Wert liefern.','Es schreibt immer auf die Konsole.','Es macht Variablen global.','Es startet die Funktion neu.'],0,'return beendet den aktuellen Funktionsaufruf.'],
['Welcher Dateimodus hängt Inhalte an eine vorhandene Datei an?',['r','w','a','x'],2,'a schreibt am Dateiende.'],
['Warum ist with open(...) empfehlenswert?',['Die Datei wird zuverlässig geschlossen.','Jede Datei wird verschlüsselt.','Exceptions sind ausgeschlossen.','JSON wird automatisch erkannt.'],0,'Der Kontextmanager schließt die Ressource.'],
['Welche Exception entsteht typischerweise bei int("abc")?',['TypeError','ValueError','KeyError','PermissionError'],1,'Der konkrete Text ist kein gültiger Integerwert.'],
['Wozu dient finally?',['Nur erfolgreiche Verarbeitung','Ausführung unabhängig vom Fehlerpfad','Nur Ausgabe von Exceptions','Ersetzen von raise'],1,'finally wird unabhängig vom Ausgang ausgeführt.'],
['Was beschreibt ein DBMS?',['Gespeicherte Datensätze','Software zur Verwaltung einer Datenbank','Ein einzelnes ER-Diagramm','Nur einen SQL-Client'],1,'Ein DBMS verwaltet Daten und Strukturen.'],
['Ein Kunde kann mehrere Bestellungen besitzen. Welche Kardinalität passt?',['1:1','1:n','n:m','0:0'],1,'Eine Kundeninstanz steht zu mehreren Bestellungen.'],
['Produkt und Bestellung stehen fachlich n:m zueinander. Welche Zwischentabelle passt?',['Adresse','Bestellposition','Kunde','Datenbank'],1,'Bestellposition löst die n:m-Beziehung auf.'],
['Welche Eigenschaft besitzt ein Primärschlüssel?',['Er darf mehrfach NULL sein.','Er identifiziert Datensätze eindeutig.','Er ist immer Text.','Er verweist zwingend auf eine andere Tabelle.'],1,'Der Primärschlüssel ist eindeutig und nicht NULL.'],
['Welche Aufgabe hat ein Fremdschlüssel?',['Er sortiert Ergebnisse.','Er bildet Beziehungen zwischen Tabellen ab.','Er ersetzt jede Validierung.','Er löscht Duplikate.'],1,'Ein FK verweist auf einen Schlüssel einer anderen Tabelle.'],
['Welche Forderung gehört zur ersten Normalform?',['Atomare Werte in jeder Zelle','Keine Fremdschlüssel','Nur eine Tabelle','Alle Felder sind Primärschlüssel'],0,'1NF verlangt atomare Werte.'],
['Eine Adresse wird redundant in mehreren Zeilen geführt und nur teilweise geändert. Welche Anomalie liegt vor?',['Einfüge-Anomalie','Änderungs-Anomalie','Lösch-Anomalie','JOIN-Anomalie'],1,'Redundanz kann inkonsistente Änderungen verursachen.'],
['Welcher SQL-Befehl liest Datensätze?',['ALTER','SELECT','DROP','COMMIT'],1,'SELECT dient zum Lesen.'],
['Welche Klausel filtert Zeilen vor der Gruppierung?',['WHERE','HAVING','ORDER BY','ROLLBACK'],0,'WHERE filtert einzelne Zeilen.'],
['Welche Klausel filtert das Ergebnis von COUNT(*) nach GROUP BY?',['WHERE','HAVING','JOIN','VALUES'],1,'HAVING filtert Gruppen.'],
['Welcher JOIN liefert nur passende Zeilen beider Tabellen?',['LEFT JOIN','INNER JOIN','CROSS JOIN','Kein JOIN'],1,'INNER JOIN liefert die Schnittmenge.'],
['Eine Überweisung ist vollständig erfolgreich. Welcher Befehl bestätigt die Transaktion?',['ROLLBACK','COMMIT','SELECT','GRANT'],1,'COMMIT bestätigt die Änderungen.'],
['Die Belastung erfolgte, die Gutschrift scheiterte. Welche Aktion schützt die Konsistenz?',['COMMIT','ROLLBACK','ORDER BY','CREATE TABLE'],1,'ROLLBACK verwirft die unvollständige Transaktion.']
];
const ihk=raw.map((x,i)=>({id:`lf05-ihk-t7-11-${String(i+1).padStart(2,'0')}`,courseId:'lf05',quizId:'lf05-ihk',tagId:`lf05-tag${i<4?7:i<8?8:i<12?9:i<15?10:11}`,type:'multiple-choice',question:x[0],options:x[1],correct:x[2],explanation:x[3],difficulty:'ihk',exam:'IHK Fachinformatiker',status:'published'}));
const duel=raw.map((x,i)=>({id:`duel-t7-11-${String(i+1).padStart(2,'0')}`,question:x[0],options:x[1],correctIndex:x[2],answer:x[1][x[2]],explanation:x[3],category:i<4?'Datenstrukturen':i<8?'Funktionen & Tests':i<12?'Dateien & Exceptions':i<15?'Datenbank & ERD':'SQL & Normalisierung',difficulty:i%3===0?'hard':'medium',tags:['lf05',`tag${i<4?7:i<8?8:i<12?9:i<15?10:11}`]}));
const qf=path.join(DATA,'questions-lf05.json');copy(qf);write(qf,merge(read(qf),ihk));
write(path.join(DATA,'questions-ihk-tag7-11.json'),ihk);write(path.join(DATA,'questions-duell-tag7-11.json'),duel);

// Try to merge into known duel JSON arrays. Always leave the standalone file as a reliable source.
const candidates=[];
function walk(dir,depth=0){if(depth>5||!fs.existsSync(dir))return;for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f,depth+1);else if(e.name.endsWith('.json')&&/(duel|question|frage)/i.test(e.name))candidates.push(f)}}
walk(path.join(R,'data'));walk(path.join(PUB,'duell'));walk(path.join(R,'questions'));
let mergedDuel=[];
for(const f of [...new Set(candidates)]){if(f===qf||f.endsWith('questions-duell-tag7-11.json'))continue;try{const v=read(f);if(Array.isArray(v)&&v.length&&v.some(x=>x.question||x.q)){copy(f);write(f,merge(v,duel));mergedDuel.push(path.relative(R,f))}}catch{}}

// Add attractive IHK CTA to quiz page.
const quiz=path.join(PUB,'quiz','index.html');if(fs.existsSync(quiz)){copy(quiz);let h=fs.readFileSync(quiz,'utf8');const css='.ihk-cta{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:16px 0 24px;padding:18px 20px;border:1px solid #ffd16666;border-radius:19px;color:#fff;text-decoration:none;background:radial-gradient(circle at 90% 20%,#ffd16638,transparent 28%),linear-gradient(135deg,#553210,#402255 58%,#11213d);box-shadow:0 15px 38px #0005;transition:.2s}.ihk-cta:hover{transform:translateY(-4px);border-color:#ffd166}.ihk-cta strong{display:block;font-size:1.15rem}.ihk-cta span{color:#e8dabb}.ihk-cta b{font-size:2rem}';if(!h.includes('.ihk-cta{'))h=h.replace('</style>',css+'</style>');if(!h.includes('href="/lf05/ihk/"'))h=h.replace('<section id="menu">','<a class="ihk-cta" href="/lf05/ihk/"><div><strong>🏆 IHK Fachinformatiker Prüfungstraining</strong><span>25 neue prüfungsnahe Aufgaben zu Datenstrukturen, Tests, Datei-I/O, Datenbanken und SQL.</span></div><b>→</b></a><section id="menu">');fs.writeFileSync(quiz,h,'utf8')}

console.log('SUCCESS: compact games, removed floating Tag 7-11 button, added 25 IHK + 25 duel questions, added IHK CTA.');
console.log('Duel pools merged:',mergedDuel.length?mergedDuel:'Standalone: data/questions-duell-tag7-11.json');
console.log('Backup:',BACK);
