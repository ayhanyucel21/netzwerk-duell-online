const TABLE8_QUESTIONS = [
  {
    "q": "Welches Element markiert den Beginn eines UML-Aktivitätsdiagramms?",
    "options": [
      "Startknoten",
      "Entscheidungsknoten",
      "Swimlane",
      "Join"
    ],
    "answer": "Startknoten",
    "exp": "Der Startknoten kennzeichnet den eindeutigen Beginn des Kontrollflusses."
  },
  {
    "q": "Welches Element markiert das Ende des gesamten Ablaufs?",
    "options": [
      "Aktivitätsendknoten",
      "Fork",
      "Guard",
      "Swimlane"
    ],
    "answer": "Aktivitätsendknoten",
    "exp": "Der Aktivitätsendknoten beendet den gesamten dargestellten Ablauf."
  },
  {
    "q": "Welches Element modelliert eine bedingungsabhängige Aufteilung?",
    "options": [
      "Entscheidungsknoten",
      "Fork",
      "Join",
      "Startknoten"
    ],
    "answer": "Entscheidungsknoten",
    "exp": "Ein Entscheidungsknoten verzweigt anhand von Guard-Bedingungen in alternative Pfade."
  },
  {
    "q": "Wozu dient eine Zusammenführung?",
    "options": [
      "Alternative Pfade wieder zu einem Kontrollfluss zusammenführen",
      "Parallele Pfade starten",
      "Zuständigkeiten trennen",
      "Den Prozess beenden"
    ],
    "answer": "Alternative Pfade wieder zu einem Kontrollfluss zusammenführen",
    "exp": "Eine Zusammenführung verbindet alternative, nicht parallele Pfade."
  },
  {
    "q": "Wozu dienen Swimlanes?",
    "options": [
      "Aktivitäten Verantwortlichen oder Systemen zuordnen",
      "Datentypen speichern",
      "Schleifen automatisch beenden",
      "Entscheidungstabellen reduzieren"
    ],
    "answer": "Aktivitäten Verantwortlichen oder Systemen zuordnen",
    "exp": "Swimlanes zeigen sichtbar, wer eine Aktivität ausführt."
  },
  {
    "q": "Welches Element teilt einen Kontrollfluss in parallele Pfade?",
    "options": [
      "Fork",
      "Join",
      "Entscheidungsknoten",
      "Endknoten"
    ],
    "answer": "Fork",
    "exp": "Ein Fork startet mehrere parallele Kontrollflüsse."
  },
  {
    "q": "Welches Element synchronisiert parallele Pfade vor einem gemeinsamen Folgeschritt?",
    "options": [
      "Join",
      "Fork",
      "Zusammenführung",
      "Startknoten"
    ],
    "answer": "Join",
    "exp": "Ein Join wartet auf die erforderlichen parallelen Pfade und führt sie zusammen."
  },
  {
    "q": "Was ist eine Guard-Bedingung?",
    "options": [
      "Eine Bedingung an einer Kante, die die Pfadauswahl steuert",
      "Der Name einer Swimlane",
      "Eine auszuführende Aktivität",
      "Ein Endknoten"
    ],
    "answer": "Eine Bedingung an einer Kante, die die Pfadauswahl steuert",
    "exp": "Guards wie [gültig] oder [ungültig] bestimmen, welcher Pfad gewählt wird."
  },
  {
    "q": "Was stellt ein abgerundetes Rechteck typischerweise dar?",
    "options": [
      "Eine Aktivität oder Aktion",
      "Einen Startknoten",
      "Einen Fork",
      "Eine Swimlane"
    ],
    "answer": "Eine Aktivität oder Aktion",
    "exp": "Aktivitäten beschreiben auszuführende Arbeitsschritte."
  },
  {
    "q": "Am Flughafenschalter ist das Ticket ungültig. Welcher Ablauf passt?",
    "options": [
      "Kundendienst konsultieren und Flugteilnahme beenden",
      "Gepäck aufgeben und Bordkarte drucken",
      "Immer Zusatzkosten bezahlen",
      "Ohne Prüfung zum Gate gehen"
    ],
    "answer": "Kundendienst konsultieren und Flugteilnahme beenden",
    "exp": "Das Übungsszenario führt bei ungültigem Ticket zum Kundendienst und beendet die Flugteilnahme."
  },
  {
    "q": "Das Ticket ist gültig und das Gepäck hat Übergewicht. Was folgt?",
    "options": [
      "Zusätzliche Kosten übernehmen",
      "Ticket automatisch ungültig machen",
      "Den Startknoten löschen",
      "Ohne weitere Aktion beenden"
    ],
    "answer": "Zusätzliche Kosten übernehmen",
    "exp": "Der Übergewichtsfall führt vor der Bordkarte zur Bearbeitung der Zusatzkosten."
  },
  {
    "q": "Bei der Fahrzeugbuchung sind Vertragsdaten fehlerhaft. Was ist fachlich korrekt?",
    "options": [
      "Zur erneuten Eingabe der Vertragsdaten zurückführen",
      "Trotzdem Zugangscode senden",
      "Fahrzeug ohne Vertrag freigeben",
      "Den Prozess ohne Ende verlassen"
    ],
    "answer": "Zur erneuten Eingabe der Vertragsdaten zurückführen",
    "exp": "Der Fehlerpfad bildet eine Wiederholung zur Korrektur der Eingabe."
  },
  {
    "q": "In welcher Swimlane liegt „Vertragsdaten eingeben“?",
    "options": [
      "In der Swimlane des Kunden",
      "In der Swimlane des Druckers",
      "In keiner Swimlane",
      "Zwingend in der Datenbank-Swimlane"
    ],
    "answer": "In der Swimlane des Kunden",
    "exp": "Die Aktivität wird von der verantwortlichen externen Rolle ausgeführt."
  },
  {
    "q": "In welcher Swimlane liegt „Vertragsdaten verifizieren“?",
    "options": [
      "In der Swimlane des Buchungssystems",
      "In der Kunden-Swimlane",
      "Im Endknoten",
      "Im Fork"
    ],
    "answer": "In der Swimlane des Buchungssystems",
    "exp": "Die Prüfung ist eine Systemaktivität und gehört daher in dessen Swimlane."
  },
  {
    "q": "Ein gemeinsamer Schritt benötigt Ergebnisse zweier paralleler Aktivitäten. Was fehlt ohne Join?",
    "options": [
      "Die Synchronisation der parallelen Pfade",
      "Die Entscheidung über alternative Pfade",
      "Der Start des Prozesses",
      "Die Zuordnung zu einem Akteur"
    ],
    "answer": "Die Synchronisation der parallelen Pfade",
    "exp": "Ohne Join könnte der gemeinsame Schritt beginnen, bevor beide parallelen Aktivitäten abgeschlossen sind."
  },
  {
    "q": "Welche Aussage zu Fork und Entscheidung ist richtig?",
    "options": [
      "Fork erzeugt parallele Pfade, eine Entscheidung alternative Pfade",
      "Beide Elemente bedeuten immer dasselbe",
      "Eine Entscheidung synchronisiert parallele Pfade",
      "Ein Fork benötigt Ja/Nein-Guards"
    ],
    "answer": "Fork erzeugt parallele Pfade, eine Entscheidung alternative Pfade",
    "exp": "Parallelität und bedingte Alternativen sind unterschiedliche Modellierungskonzepte."
  },
  {
    "q": "Was zeigt ein Kontrollfluss?",
    "options": [
      "Reihenfolge und Richtung zwischen Aktivitäten",
      "Die Größe einer Variablen",
      "Die Anzahl aller Regeln",
      "Nur die Systemgrenze"
    ],
    "answer": "Reihenfolge und Richtung zwischen Aktivitäten",
    "exp": "Gerichtete Kanten verbinden die Elemente zu einem Ablauf."
  },
  {
    "q": "Welche Modellierung ist bei zwei sich ausschließenden Ergebnissen passend?",
    "options": [
      "Entscheidungsknoten mit eindeutig beschrifteten Guards",
      "Fork ohne Guards",
      "Zwei Startknoten",
      "Join vor der Entscheidung"
    ],
    "answer": "Entscheidungsknoten mit eindeutig beschrifteten Guards",
    "exp": "Alternative Ergebnisse werden durch eine Entscheidung mit klaren Bedingungen modelliert."
  },
  {
    "q": "Was ist ein typischer Modellierungsfehler?",
    "options": [
      "Eine Entscheidung ohne eindeutige Guards",
      "Ein Startknoten am Anfang",
      "Eine Aktivität in einer Swimlane",
      "Ein Join nach parallelen Pfaden"
    ],
    "answer": "Eine Entscheidung ohne eindeutige Guards",
    "exp": "Ohne eindeutige Bedingungen ist nicht klar, welcher Pfad gewählt wird."
  },
  {
    "q": "Welche Aussage zum Detailgrad ist sinnvoll?",
    "options": [
      "Alle Aktivitäten sollten auf einem vergleichbaren Abstraktionsniveau liegen",
      "Jeder Mausklick muss immer dargestellt werden",
      "Nur der Startknoten reicht aus",
      "Swimlanes ersetzen alle Aktivitäten"
    ],
    "answer": "Alle Aktivitäten sollten auf einem vergleichbaren Abstraktionsniveau liegen",
    "exp": "Ein konsistenter Detailgrad verbessert Lesbarkeit und fachliche Vergleichbarkeit."
  }
];

if (typeof window !== "undefined") window.TABLE8_QUESTIONS = TABLE8_QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = TABLE8_QUESTIONS;
