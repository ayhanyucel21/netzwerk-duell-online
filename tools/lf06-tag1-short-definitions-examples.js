'use strict';
const fs=require('fs'),path=require('path');
const R=process.cwd(),D=path.join(R,'data'),F=path.join(D,'lessons.json'),PAGE=path.join(R,'public','lf06','lernen','index.html');
if(!fs.existsSync(F)){console.error('FEHLER: data/lessons.json wurde nicht gefunden.');process.exit(1)}
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),B=path.join(R,'backups',`lf06-tag1-shortdefs-${stamp}`);fs.mkdirSync(B,{recursive:true});fs.copyFileSync(F,path.join(B,'lessons.json'));if(fs.existsSync(PAGE))fs.copyFileSync(PAGE,path.join(B,'lernen-index.html'));
const lessons=JSON.parse(fs.readFileSync(F,'utf8'));let n=0;
const fallbacks={
'ITSM':'Ein IT-Systemhaus bearbeitet Störungen und Serviceanfragen über feste Prozesse statt über Zuruf.',
'Incident':'Der zentrale Mailserver fällt unerwartet aus. Das Incident Management stellt den Service so schnell wie möglich wieder her.',
'Service Request':'Eine neue Person benötigt zum Eintrittstermin ein Benutzerkonto und Standardsoftware.',
'Request for Change':'Eine Servermigration wird mit Risikoanalyse, Test, Freigabe und Rollback geplant.',
'SLA':'Für P1-Störungen sind 15 Minuten Reaktionszeit und maximal 2 Stunden Wiederherstellungszeit vereinbart.',
'IMAC/RD':'Ein Notebook wird installiert, umgezogen, erweitert, geändert, außer Betrieb genommen und sicher entsorgt.',
'RACI':'Beim Sicherheitsupdate installiert der Administrator (R), der Service Owner verantwortet (A), Security berät (C), der Fachbereich wird informiert (I).',
'CMDB':'Die CMDB zeigt, dass der ausgefallene Server einen Fachservice für 50 Arbeitsplätze bereitstellt.',
'Framework':'ITIL liefert anpassbare Best Practices; ISO/IEC 20000 formuliert dagegen prüfbare ITSM-Anforderungen.',
'Impact':'Ein Serverausfall für 50 Personen hat einen höheren Impact als eine defekte Maus an einem Arbeitsplatz.',
'Workaround':'Ein Ersatzserver ermöglicht vorübergehend den Betrieb; die spätere Reparatur beseitigt die Ursache dauerhaft.',
'Eskalation':'Fehlen Storage-Adminrechte, eskaliert der First Level funktional an das Storage-Team. Bei drohendem SLA-Bruch wird zusätzlich hierarchisch eskaliert.',
'Problem Management':'Ein wiederkehrender Firmwarefehler wird nach der akuten Incident-Lösung als Problem auf Root Cause untersucht.',
'CAB':'Das CAB bewertet vor einer Cloud-Migration Risiko, Termin, Test und Rollback.',
'KPI':'Von 200 Tickets werden 150 beim ersten Kontakt gelöst. Die First Contact Resolution Rate beträgt 75 %.',
'Governance':'Die IT-Leitung schreibt verbindlich vor, dass produktive Changes nur nach Risikoanalyse und Freigabe umgesetzt werden.',
'Compliance':'Ein Datenträger wird gemäß Datenschutz- und Sicherheitsrichtlinie nachweisbar gelöscht und dokumentiert entsorgt.',
'Risiko':'Vor einer Cloud-Migration werden Ausfallwahrscheinlichkeit und mögliche Auswirkungen bewertet und mit einem Rollback abgesichert.'};
function pick(term){const key=Object.keys(fallbacks).find(k=>term.includes(k));return key?fallbacks[key]:'Der Begriff wird in einer konkreten Service-Desk-Situation angewendet und anhand eines nachvollziehbaren Falls bewertet.'}
for(const l of lessons){if(l.id!=='lf06-lesson-tag1')continue;l.content=(l.content||[]).map(x=>({...x,example:x.example&&String(x.example).trim()?x.example:pick(String(x.term||''))}));n=l.content.length}
fs.writeFileSync(F,JSON.stringify(lessons,null,2)+'\n');
if(fs.existsSync(PAGE)){let h=fs.readFileSync(PAGE,'utf8');
// Remove bottom duplicate KPI card added by previous patch.
h=h.replace(/<div class="term"><b>KPI \(Key Performance Indicator\)<\/b><p>Eine KPI ist eine messbare Kennzahl zur Bewertung von Service- oder Prozessleistung\.<\/p><p><b>Beispiel:<\/b>150 von 200 Tickets werden beim ersten Kontakt gelöst\. First Contact Resolution Rate = 75 %\. Liegt das Ziel bei 80 %, besteht Verbesserungsbedarf\.<\/p><\/div>/g,'');
h=h.replace(/<div class="term"><b>KPI \(Key Performance Indicator\)<\/b>[\s\S]*?<\/div>(?=<\/section>)/g,'');
// Render examples under API-provided short definitions.
const old="${definitions.map(x=>`<div class=\"term\"><b>${escapeHtml(x.term)}</b><p>${escapeHtml(x.definition)}</p></div>`).join('')}";
const neu="${definitions.map(x=>`<div class=\"term\"><b>${escapeHtml(x.term)}</b><p>${escapeHtml(x.definition)}</p>${x.example?`<p><b>Beispiel:</b> ${escapeHtml(x.example)}</p>`:''}</div>`).join('')}";
if(h.includes(old))h=h.replace(old,neu);
else{
 h=h.replace(/<div class="term"><b>\$\{escapeHtml\(x\.term\)\}<\/b><p>\$\{escapeHtml\(x\.definition\)\}<\/p><\/div>/g,'<div class="term"><b>${escapeHtml(x.term)}</b><p>${escapeHtml(x.definition)}</p>${x.example?`<p><b>Beispiel:</b> ${escapeHtml(x.example)}</p>`:``}</div>');
}
fs.writeFileSync(PAGE,h,'utf8')}
console.log('ERFOLG: Beispiele unter kurzen Begriffsdefinitionen ergänzt und doppelter KPI-Block unten entfernt.');console.log('Begriffe mit Beispiel:',n);console.log('Sicherung:',B);
