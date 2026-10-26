const TABLE9_QUESTIONS = [
  {
    "q": "Wie wird eine Schleife im PAP dargestellt?",
    "options": [
      "Durch Entscheidung, Bedingung und Rückverweis",
      "Durch ein zwingendes eigenes Schleifensymbol",
      "Nur durch ein Rechteck",
      "Durch eine Swimlane"
    ],
    "answer": "Durch Entscheidung, Bedingung und Rückverweis",
    "exp": "Im PAP entsteht die Wiederholung aus Verzweigung, Schleifenweg, Rückkante und Ausstieg."
  },
  {
    "q": "Wie wird eine Schleife im Struktogramm dargestellt?",
    "options": [
      "Durch einen eigenen Schleifenblock mit eingerücktem Rumpf",
      "Nur durch Pfeile",
      "Durch einen Fork",
      "Durch einen Startknoten"
    ],
    "answer": "Durch einen eigenen Schleifenblock mit eingerücktem Rumpf",
    "exp": "Das Struktogramm besitzt ein strukturiertes Wiederholungselement."
  },
  {
    "q": "Was benötigt eine Schleife im Aktivitätsdiagramm zusätzlich zum Rückverweis?",
    "options": [
      "Einen erreichbaren Ausstiegspfad",
      "Einen zweiten Startknoten",
      "Immer einen Fork",
      "Eine neue Swimlane"
    ],
    "answer": "Einen erreichbaren Ausstiegspfad",
    "exp": "Ohne erreichbaren Ausstieg würde ein endloser Ablauf modelliert."
  },
  {
    "q": "Eine Datenprüfung wird wiederholt, solange Fehler vorliegen. Welcher Guard führt zurück?",
    "options": [
      "[Fehler vorhanden]",
      "[Daten gültig]",
      "[Ende]",
      "[immer korrekt]"
    ],
    "answer": "[Fehler vorhanden]",
    "exp": "Der Fehlerpfad wiederholt Eingabe oder Korrektur; der gültige Pfad verlässt die Schleife."
  },
  {
    "q": "Welcher Guard verlässt die Schleife der Datenprüfung?",
    "options": [
      "[Daten gültig]",
      "[Fehler vorhanden]",
      "[zurück]",
      "[wiederholen]"
    ],
    "answer": "[Daten gültig]",
    "exp": "Der Gegenfall zur Wiederholungsbedingung führt den Prozess weiter."
  },
  {
    "q": "Welche Aussage zur kopfgesteuerten Schleife ist richtig?",
    "options": [
      "Der Rumpf kann nullmal ausgeführt werden",
      "Der Rumpf läuft immer mindestens einmal",
      "Es gibt keine Bedingung",
      "Ein break ist immer nötig"
    ],
    "answer": "Der Rumpf kann nullmal ausgeführt werden",
    "exp": "Die Bedingung wird vor dem ersten Durchlauf geprüft."
  },
  {
    "q": "Welche Aussage zur fußgesteuerten Schleife ist richtig?",
    "options": [
      "Der Rumpf wird mindestens einmal ausgeführt",
      "Der Rumpf wird nie ausgeführt",
      "Es existiert kein Ausstieg",
      "Die Schleife ist immer parallel"
    ],
    "answer": "Der Rumpf wird mindestens einmal ausgeführt",
    "exp": "Die Prüfung erfolgt nach dem ersten Durchlauf."
  },
  {
    "q": "Ein PAP-Pfeil führt ohne Bedingung direkt zur gleichen Aktivität zurück. Was fehlt?",
    "options": [
      "Eine kontrollierte Abbruchbedingung",
      "Eine weitere identische Aktivität",
      "Ein Join",
      "Eine Swimlane"
    ],
    "answer": "Eine kontrollierte Abbruchbedingung",
    "exp": "Ohne Bedingung und Ausstieg ist die Wiederholung fachlich nicht kontrolliert."
  },
  {
    "q": "Eine Login-Schleife endet bei Erfolg oder nach drei Fehlversuchen. Was muss dargestellt sein?",
    "options": [
      "Beide Ausstiegsbedingungen",
      "Nur der Rückverweis",
      "Nur der Erfolgsweg",
      "Nur der Zähler"
    ],
    "answer": "Beide Ausstiegsbedingungen",
    "exp": "Ein vollständiges Modell zeigt sowohl den Erfolgs- als auch den Grenzwertausstieg."
  },
  {
    "q": "Wohin sollte der Rückfluss bei fehlerhaften Vertragsdaten führen?",
    "options": [
      "Zur Aktivität „Vertragsdaten eingeben“",
      "Zum Endknoten",
      "Zum Fork",
      "Zum Startknoten des gesamten Systems"
    ],
    "answer": "Zur Aktivität „Vertragsdaten eingeben“",
    "exp": "Die Wiederholung beginnt am fachlich zuständigen Korrekturschritt."
  },
  {
    "q": "Was ist der Schleifenrumpf?",
    "options": [
      "Die Aktivitäten, die in jedem Durchlauf wiederholt werden",
      "Nur die Abbruchbedingung",
      "Der Endknoten",
      "Die Swimlane-Bezeichnung"
    ],
    "answer": "Die Aktivitäten, die in jedem Durchlauf wiederholt werden",
    "exp": "Der Rumpf enthält die wiederholt auszuführenden Arbeitsschritte."
  },
  {
    "q": "Was ist eine Endlosschleife im Modell?",
    "options": [
      "Eine Wiederholung ohne erreichbare Abbruchbedingung",
      "Eine Schleife mit genau einem Durchlauf",
      "Ein Fork mit Join",
      "Eine reduzierte Entscheidungstabelle"
    ],
    "answer": "Eine Wiederholung ohne erreichbare Abbruchbedingung",
    "exp": "Fehlt ein erreichbarer Ausstieg, kann der Ablauf nicht regulär enden."
  },
  {
    "q": "Welche Aussage zu Parallelität und Schleife ist richtig?",
    "options": [
      "Fork/Join modelliert Parallelität; Entscheidung und Rückfluss modellieren Wiederholung",
      "Ein Fork ersetzt jede Schleifenbedingung",
      "Ein Rückfluss ersetzt jeden Join",
      "Beide Konzepte sind identisch"
    ],
    "answer": "Fork/Join modelliert Parallelität; Entscheidung und Rückfluss modellieren Wiederholung",
    "exp": "Die Konzepte haben unterschiedliche fachliche Bedeutungen und Symbole."
  },
  {
    "q": "Wie wird im Struktogramm die Zugehörigkeit zum Schleifenrumpf sichtbar?",
    "options": [
      "Durch die Position innerhalb des Schleifenblocks",
      "Durch Pfeilfarben",
      "Durch eine zweite Seite",
      "Durch einen Bindestrich"
    ],
    "answer": "Durch die Position innerhalb des Schleifenblocks",
    "exp": "Die Blockstruktur zeigt die Zugehörigkeit ohne Rücksprungpfeile."
  },
  {
    "q": "Eine Schleife erhöht einen Versuchszähler nicht. Welches Risiko besteht?",
    "options": [
      "Die Abbruchbedingung wird möglicherweise nie erreicht",
      "Die Schleife endet immer sofort",
      "Ein Join wird automatisch erzeugt",
      "Die Schleife wird zur Entscheidungstabelle"
    ],
    "answer": "Die Abbruchbedingung wird möglicherweise nie erreicht",
    "exp": "Wenn der kontrollierende Zustand unverändert bleibt, kann eine Endlosschleife entstehen."
  },
  {
    "q": "Welche Information gehört an den Entscheidungsweg einer Schleife?",
    "options": [
      "Eine eindeutige Bedingung wie [weitere Daten vorhanden]",
      "Nur der Name des Autors",
      "Die Dateigröße",
      "Eine beliebige Zahl ohne Bedeutung"
    ],
    "answer": "Eine eindeutige Bedingung wie [weitere Daten vorhanden]",
    "exp": "Guards müssen fachlich verständlich und gegenseitig passend formuliert sein."
  },
  {
    "q": "Eine Schleife verarbeitet jedes Element einer bekannten Liste. Welche Denkstruktur passt?",
    "options": [
      "Zähler- oder mengengesteuerte Wiederholung",
      "Unbedingte Endlosschleife",
      "Paralleler Fork ohne Join",
      "Nur eine Auswahl"
    ],
    "answer": "Zähler- oder mengengesteuerte Wiederholung",
    "exp": "Die Wiederholungsmenge ist bekannt und kann strukturiert durchlaufen werden."
  },
  {
    "q": "Eine Eingabe wird wiederholt, bis sie gültig ist. Welche Denkstruktur passt?",
    "options": [
      "Bedingungsgesteuerte Wiederholung",
      "Nur Sequenz",
      "Parallele Ausführung",
      "Ist-egal-Regel"
    ],
    "answer": "Bedingungsgesteuerte Wiederholung",
    "exp": "Die Anzahl der Versuche ist unbekannt; das Ende hängt von der Gültigkeit ab."
  },
  {
    "q": "Wozu dient eine Zusammenführung vor dem Rückverweis?",
    "options": [
      "Alternative Fehlerpfade können zu einem gemeinsamen Wiederholungspunkt führen",
      "Sie startet parallele Pfade",
      "Sie beendet das gesamte Diagramm",
      "Sie ersetzt die Bedingungstabelle"
    ],
    "answer": "Alternative Fehlerpfade können zu einem gemeinsamen Wiederholungspunkt führen",
    "exp": "Mehrere alternative Korrekturpfade können vor dem erneuten Prüfpunkt zusammengeführt werden."
  },
  {
    "q": "Welche Qualitätsprüfung ist bei einem Schleifenmodell besonders wichtig?",
    "options": [
      "Ist der Ausstieg unter mindestens einer realistischen Bedingung erreichbar?",
      "Hat jede Aktivität eine andere Farbe?",
      "Gibt es mindestens zwei Startknoten?",
      "Ist jede Schleife parallel?"
    ],
    "answer": "Ist der Ausstieg unter mindestens einer realistischen Bedingung erreichbar?",
    "exp": "Damit wird geprüft, ob die Wiederholung fachlich terminieren kann."
  }
];

if (typeof window !== "undefined") window.TABLE9_QUESTIONS = TABLE9_QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = TABLE9_QUESTIONS;
