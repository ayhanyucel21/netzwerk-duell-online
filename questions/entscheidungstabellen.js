const TABLE7_QUESTIONS = [
  {
    "q": "Was beschreibt eine Regel in einer Entscheidungstabelle?",
    "options": [
      "Eine Kombination aus Bedingungswerten und zugehörigen Aktionen",
      "Nur eine einzelne Bedingung",
      "Eine Verbindung zwischen UML-Aktivitäten",
      "Eine Python-Variable"
    ],
    "answer": "Eine Kombination aus Bedingungswerten und zugehörigen Aktionen",
    "exp": "Eine Regel bildet genau eine relevante Kombination von Bedingungszuständen ab und legt fest, welche Aktionen daraus folgen."
  },
  {
    "q": "Was bedeutet ein Bindestrich bei einer Bedingung in einer reduzierten Entscheidungstabelle?",
    "options": [
      "Der Zustand ist für diese Regel unerheblich",
      "Die Regel ist fehlerhaft",
      "Die Aktion wird abgebrochen",
      "Die Tabelle endet"
    ],
    "answer": "Der Zustand ist für diese Regel unerheblich",
    "exp": "Der Bindestrich kennzeichnet einen Ist-egal-Zustand. Ja und Nein führen in dieser Regel zu denselben Aktionen."
  },
  {
    "q": "Wie viele Kombinationen entstehen bei zwei unabhängigen Ja/Nein-Bedingungen?",
    "options": [
      "4",
      "2",
      "6",
      "8"
    ],
    "answer": "4",
    "exp": "Zwei binäre Bedingungen ergeben 2², also vier Kombinationen."
  },
  {
    "q": "Wie viele Kombinationen entstehen bei drei unabhängigen Ja/Nein-Bedingungen?",
    "options": [
      "8",
      "6",
      "9",
      "12"
    ],
    "answer": "8",
    "exp": "Drei binäre Bedingungen ergeben 2³, also acht Kombinationen."
  },
  {
    "q": "Warum muss eine Entscheidungstabelle vollständig sein?",
    "options": [
      "Jede fachlich mögliche Kombination benötigt eine definierte Reaktion",
      "Alle Aktionen müssen gleichzeitig ausgeführt werden",
      "Bedingungen werden dadurch überflüssig",
      "Die Tabelle benötigt möglichst viele Spalten"
    ],
    "answer": "Jede fachlich mögliche Kombination benötigt eine definierte Reaktion",
    "exp": "Vollständigkeit verhindert unbehandelte Fälle und macht das Systemverhalten nachvollziehbar."
  },
  {
    "q": "Zwei Regeln unterscheiden sich nur in einer Bedingung, führen aber zu denselben Aktionen. Was ist sinnvoll?",
    "options": [
      "Die Regeln mit einem Ist-egal-Zustand zusammenfassen",
      "Eine Regel ohne Prüfung löschen",
      "Alle Bedingungen zu Aktionen machen",
      "Eine dritte identische Regel ergänzen"
    ],
    "answer": "Die Regeln mit einem Ist-egal-Zustand zusammenfassen",
    "exp": "Bei identischen Aktionen können beide Zustände der abweichenden Bedingung durch einen Bindestrich zusammengefasst werden."
  },
  {
    "q": "Welche Formulierung ist eine Bedingung?",
    "options": [
      "Zahlung eingegangen?",
      "Ware versenden",
      "Kunden informieren",
      "Bestellung stornieren"
    ],
    "answer": "Zahlung eingegangen?",
    "exp": "Eine Bedingung ist eine prüfbare Aussage. Die übrigen Antworten sind Aktionen."
  },
  {
    "q": "Welche Formulierung ist eine Aktion?",
    "options": [
      "Zugriff gewähren",
      "Passwort korrekt?",
      "Nutzername korrekt?",
      "Versuche größer als 3?"
    ],
    "answer": "Zugriff gewähren",
    "exp": "Eine Aktion beschreibt eine auszuführende Reaktion; die übrigen Formulierungen sind Bedingungen."
  },
  {
    "q": "Was ist ein Vorteil einer reduzierten Entscheidungstabelle?",
    "options": [
      "Weniger redundante Regeln bei gleicher fachlicher Aussage",
      "Bedingungen müssen nicht mehr dokumentiert werden",
      "Alle Aktionen werden entfernt",
      "Die Tabelle wird automatisch zum Aktivitätsdiagramm"
    ],
    "answer": "Weniger redundante Regeln bei gleicher fachlicher Aussage",
    "exp": "Reduktion verbessert Übersichtlichkeit, ohne fachliche Fälle zu verlieren."
  },
  {
    "q": "Zwei Regeln haben dieselbe Bedingungskombination, aber widersprüchliche Aktionen. Welches Problem liegt vor?",
    "options": [
      "Die Entscheidung ist nicht eindeutig",
      "Die Tabelle ist automatisch vollständig",
      "Ein Join fehlt",
      "Der Bindestrich wurde korrekt verwendet"
    ],
    "answer": "Die Entscheidung ist nicht eindeutig",
    "exp": "Dieselbe Situation darf nicht zu widersprüchlichen Reaktionen führen."
  },
  {
    "q": "Welche Reihenfolge ist beim Erstellen einer Entscheidungstabelle sinnvoll?",
    "options": [
      "Bedingungen sammeln, Kombinationen bilden, Aktionen zuordnen, prüfen",
      "Aktionen löschen, Diagramm zeichnen, Bedingungen raten",
      "Nur den häufigsten Fall dokumentieren",
      "Zuerst Code schreiben und die Tabelle danach ableiten"
    ],
    "answer": "Bedingungen sammeln, Kombinationen bilden, Aktionen zuordnen, prüfen",
    "exp": "Ein systematisches Vorgehen sichert Vollständigkeit und Widerspruchsfreiheit."
  },
  {
    "q": "Eine Rabattregel hängt von Stammkunde und Bestellwert ab. Was gehört in den Bedingungsbereich?",
    "options": [
      "Stammkunde? und Bestellwert mindestens 100 Euro?",
      "Rabatt gewähren und Rechnung senden",
      "Preis reduzieren und Kunden informieren",
      "Bestellung abschließen"
    ],
    "answer": "Stammkunde? und Bestellwert mindestens 100 Euro?",
    "exp": "Der Bedingungsbereich enthält prüfbare Aussagen; aus ihnen werden Aktionen abgeleitet."
  },
  {
    "q": "Was bedeutet Redundanz in einer Entscheidungstabelle?",
    "options": [
      "Mehrere Regeln beschreiben unnötig dieselbe fachliche Reaktion",
      "Eine Bedingung besitzt zwei mögliche Werte",
      "Eine Aktion wird genau einmal ausgeführt",
      "Die Tabelle enthält einen Titel"
    ],
    "answer": "Mehrere Regeln beschreiben unnötig dieselbe fachliche Reaktion",
    "exp": "Redundante Regeln können häufig mit einem Ist-egal-Zustand zusammengeführt werden."
  },
  {
    "q": "Welche Aussage zu Aktionen ist richtig?",
    "options": [
      "In einer Regel können mehrere Aktionen gleichzeitig markiert sein",
      "Jede Regel darf nur eine Bedingung besitzen",
      "Aktionen stehen immer oberhalb der Bedingungen",
      "Aktionen ersetzen die Regeln"
    ],
    "answer": "In einer Regel können mehrere Aktionen gleichzeitig markiert sein",
    "exp": "Eine Regel kann mehrere erforderliche Reaktionen auslösen, etwa Fehlermeldung anzeigen und Versuchszähler erhöhen."
  },
  {
    "q": "Ein Login ist korrekt, sobald Nutzername und Passwort stimmen. Welche dritte Bedingung kann dann „egal“ sein?",
    "options": [
      "Die bisherige Anzahl der Fehlversuche, sofern keine Sperrregel entgegensteht",
      "Ob das Passwort korrekt ist",
      "Ob der Nutzername korrekt ist",
      "Ob Zugriff gewährt wird"
    ],
    "answer": "Die bisherige Anzahl der Fehlversuche, sofern keine Sperrregel entgegensteht",
    "exp": "Wenn korrekte Zugangsdaten unabhängig von der Versuchszahl zum Zugriff führen, ist diese Bedingung in der Regel irrelevant."
  },
  {
    "q": "Welche Prüfung erkennt eine unvollständige Entscheidungstabelle am besten?",
    "options": [
      "Alle möglichen Bedingungskombinationen mit den vorhandenen Regeln vergleichen",
      "Nur die erste Regel lesen",
      "Nur die Aktionen zählen",
      "Die Farbe der Tabelle kontrollieren"
    ],
    "answer": "Alle möglichen Bedingungskombinationen mit den vorhandenen Regeln vergleichen",
    "exp": "Fehlende Kombinationen zeigen unmittelbar, dass ein fachlicher Fall nicht abgedeckt ist."
  },
  {
    "q": "Was ist bei vier unabhängigen binären Bedingungen die maximale Zahl vollständiger Kombinationen?",
    "options": [
      "16",
      "8",
      "12",
      "20"
    ],
    "answer": "16",
    "exp": "Vier Ja/Nein-Bedingungen ergeben 2⁴ = 16 Kombinationen."
  },
  {
    "q": "Eine Regel enthält „Zahlung erfolgreich = Nein“ und „Ware versenden = Ja“. Was sollte geprüft werden?",
    "options": [
      "Ob die Aktion fachlich widersprüchlich zur Bedingung ist",
      "Ob ein Startknoten fehlt",
      "Ob range() den Endwert enthält",
      "Ob eine Swimlane vorhanden ist"
    ],
    "answer": "Ob die Aktion fachlich widersprüchlich zur Bedingung ist",
    "exp": "Entscheidungstabellen müssen nicht nur vollständig, sondern auch fachlich konsistent sein."
  },
  {
    "q": "Wann ist ein Ist-egal-Zustand ungeeignet?",
    "options": [
      "Wenn die beiden Zustände zu unterschiedlichen Aktionen führen",
      "Wenn beide Zustände dieselben Aktionen auslösen",
      "Wenn eine Tabelle reduziert werden soll",
      "Wenn eine Bedingung in einer Regel wirklich irrelevant ist"
    ],
    "answer": "Wenn die beiden Zustände zu unterschiedlichen Aktionen führen",
    "exp": "Ein Bindestrich darf nur verwendet werden, wenn beide Zustände fachlich dieselbe Reaktion besitzen."
  },
  {
    "q": "Welche Aussage beschreibt den Nutzen für Tests?",
    "options": [
      "Jede Regel kann als Grundlage für mindestens einen Testfall dienen",
      "Nur die erste Regel wird getestet",
      "Aktionen können nicht getestet werden",
      "Entscheidungstabellen ersetzen sämtliche Tests"
    ],
    "answer": "Jede Regel kann als Grundlage für mindestens einen Testfall dienen",
    "exp": "Die Regeln liefern konkrete Kombinationen von Eingaben und erwarteten Aktionen für systematische Testfälle."
  }
];

if (typeof window !== "undefined") window.TABLE7_QUESTIONS = TABLE7_QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = TABLE7_QUESTIONS;
