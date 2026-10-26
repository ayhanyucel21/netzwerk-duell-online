const quizQuestions = [
  {
    "mode": "Quiz",
    "scenario": "Ein Unternehmen speichert Kundennummern.",
    "question": "Welcher Datentyp eignet sich am besten?",
    "code": "",
    "options": [
      "int",
      "float",
      "str",
      "bool"
    ],
    "answer": "int",
    "explanation": "Kundennummern werden als ganze Zahlen gespeichert.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen float, str, bool verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-001",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Benutzer gibt seinen Namen ein.",
    "question": "Welchen Datentyp liefert input() zurück?",
    "code": "",
    "options": [
      "str",
      "int",
      "float",
      "bool"
    ],
    "answer": "str",
    "explanation": "input() liefert immer einen String.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen int, float, bool verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-002",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Wahrheitswert soll gespeichert werden.",
    "question": "Welcher Datentyp wird verwendet?",
    "code": "",
    "options": [
      "bool",
      "str",
      "int",
      "float"
    ],
    "answer": "bool",
    "explanation": "True und False gehören zum Typ bool.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen str, int, float verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-003",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Preis soll mit Nachkommastellen gespeichert werden.",
    "question": "Welcher Datentyp ist geeignet?",
    "code": "",
    "options": [
      "float",
      "int",
      "bool",
      "str"
    ],
    "answer": "float",
    "explanation": "float speichert Kommazahlen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen int, bool, str verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-004",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Mehrere Servernamen sollen gemeinsam gespeichert werden.",
    "question": "Welche Datenstruktur eignet sich?",
    "code": "",
    "options": [
      "list",
      "bool",
      "float",
      "int"
    ],
    "answer": "list",
    "explanation": "Listen speichern mehrere Werte.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen bool, float, int verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-005",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Bedingung soll auf Gleichheit prüfen.",
    "question": "Welcher Operator wird verwendet?",
    "code": "",
    "options": [
      "==",
      "=",
      "+",
      "%"
    ],
    "answer": "==",
    "explanation": "== vergleicht zwei Werte.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen =, +, % verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-006",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Passwort muss mindestens acht Zeichen enthalten.",
    "question": "Welche Bedingung ist korrekt?",
    "code": "",
    "options": [
      "len(passwort) >= 8",
      "len(passwort) <= 8",
      "passwort == 8",
      "len(passwort) > 80"
    ],
    "answer": "len(passwort) >= 8",
    "explanation": "Der Grenzwert 8 wird eingeschlossen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen len(passwort) <= 8, passwort == 8, len(passwort) > 80 verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-007",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Schleife soll alle Elemente durchlaufen.",
    "question": "Welche Schleife wird typischerweise verwendet?",
    "code": "",
    "options": [
      "for",
      "if",
      "else",
      "break"
    ],
    "answer": "for",
    "explanation": "for wird für bekannte Mengen eingesetzt.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen if, else, break verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-008",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Schleife soll sofort beendet werden.",
    "question": "Welche Anweisung wird verwendet?",
    "code": "",
    "options": [
      "break",
      "continue",
      "pass",
      "elif"
    ],
    "answer": "break",
    "explanation": "break beendet die Schleife sofort.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen continue, pass, elif verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-009",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Die Länge eines Strings soll bestimmt werden.",
    "question": "Welche Funktion wird verwendet?",
    "code": "",
    "options": [
      "len()",
      "size()",
      "count()",
      "text()"
    ],
    "answer": "len()",
    "explanation": "len() liefert die Anzahl der Zeichen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen size(), count(), text() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-010",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Text soll in Kleinbuchstaben umgewandelt werden.",
    "question": "Welche Methode wird verwendet?",
    "code": "",
    "options": [
      "lower()",
      "small()",
      "down()",
      "tiny()"
    ],
    "answer": "lower()",
    "explanation": "lower() wandelt Text in Kleinbuchstaben um.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen small(), down(), tiny() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-011",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "scenario": "Leerzeichen am Anfang und Ende sollen entfernt werden.",
    "question": "Welche Methode ist geeignet?",
    "code": "",
    "options": [
      "strip()",
      "clean()",
      "remove()",
      "trimspace()"
    ],
    "answer": "strip()",
    "explanation": "strip() entfernt führende und nachfolgende Leerzeichen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen clean(), remove(), trimspace() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-012",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Benutzername soll ausgegeben werden.",
    "question": "Welche Funktion erzeugt eine Ausgabe?",
    "code": "",
    "options": [
      "print()",
      "input()",
      "len()",
      "int()"
    ],
    "answer": "print()",
    "explanation": "print() schreibt Daten in die Konsole.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen input(), len(), int() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-013",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Eingabe soll in eine Ganzzahl umgewandelt werden.",
    "question": "Welche Funktion wird verwendet?",
    "code": "",
    "options": [
      "int()",
      "float()",
      "str()",
      "bool()"
    ],
    "answer": "int()",
    "explanation": "int() erzeugt eine Ganzzahl.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen float(), str(), bool() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-014",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Text soll in eine Zahl mit Nachkommastellen umgewandelt werden.",
    "question": "Welche Funktion wird verwendet?",
    "code": "",
    "options": [
      "float()",
      "int()",
      "str()",
      "bool()"
    ],
    "answer": "float()",
    "explanation": "float() erzeugt eine Kommazahl.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen int(), str(), bool() verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-015",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Liste enthält 4 Elemente.",
    "question": "Welchen Index besitzt das erste Element?",
    "code": "",
    "options": [
      "0",
      "1",
      "-1",
      "4"
    ],
    "answer": "0",
    "explanation": "Python beginnt die Zählung bei 0.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen 1, -1, 4 verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-016",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Liste enthält 4 Elemente.",
    "question": "Welchen Index besitzt das letzte Element?",
    "code": "",
    "options": [
      "3",
      "4",
      "1",
      "0"
    ],
    "answer": "3",
    "explanation": "Der letzte Index ist Länge minus 1.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen 4, 1, 0 verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-017",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Programm prüft Bedingungen.",
    "question": "Welches Schlüsselwort startet eine Verzweigung?",
    "code": "",
    "options": [
      "if",
      "for",
      "while",
      "break"
    ],
    "answer": "if",
    "explanation": "if startet eine Bedingung.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen for, while, break verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-018",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Alternative soll ausgeführt werden.",
    "question": "Welches Schlüsselwort wird verwendet?",
    "code": "",
    "options": [
      "else",
      "for",
      "while",
      "pass"
    ],
    "answer": "else",
    "explanation": "else wird bei falscher Bedingung ausgeführt.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen for, while, pass verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-019",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Mehrere Bedingungen sollen geprüft werden.",
    "question": "Welches Schlüsselwort ergänzt eine Verzweigung?",
    "code": "",
    "options": [
      "elif",
      "loop",
      "break",
      "range"
    ],
    "answer": "elif",
    "explanation": "elif ergänzt weitere Bedingungen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen loop, break, range verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-020",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Schleife soll laufen, solange eine Bedingung wahr ist.",
    "question": "Welche Schleife wird verwendet?",
    "code": "",
    "options": [
      "while",
      "for",
      "if",
      "elif"
    ],
    "answer": "while",
    "explanation": "while arbeitet bedingungsgesteuert.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen for, if, elif verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-021",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Schleife soll 10-mal laufen.",
    "question": "Welcher Ausdruck ist geeignet?",
    "code": "",
    "options": [
      "range(10)",
      "range(11,20)",
      "while(10)",
      "loop(10)"
    ],
    "answer": "range(10)",
    "explanation": "range(10) erzeugt die Werte 0 bis 9.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen range(11,20), while(10), loop(10) verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-022",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Ein Programm verarbeitet Eingaben.",
    "question": "Wofür steht EVA?",
    "code": "",
    "options": [
      "Eingabe-Verarbeitung-Ausgabe",
      "Einsatz-Verbindung-Anzeige",
      "Ergebnis-Verarbeitung-Aktion",
      "Energie-Verarbeitung-Ausgabe"
    ],
    "answer": "Eingabe-Verarbeitung-Ausgabe",
    "explanation": "EVA beschreibt den Grundablauf von Programmen.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen Einsatz-Verbindung-Anzeige, Ergebnis-Verarbeitung-Aktion, Energie-Verarbeitung-Ausgabe verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-023",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "scenario": "Eine Software wird speziell für ein Unternehmen entwickelt.",
    "question": "Wie nennt man diese Software?",
    "code": "",
    "options": [
      "Individualsoftware",
      "Standardsoftware",
      "Systemsoftware",
      "Firmware"
    ],
    "answer": "Individualsoftware",
    "explanation": "Sie wird für einen bestimmten Kunden entwickelt.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen Standardsoftware, Systemsoftware, Firmware verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-024",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "scenario": "Microsoft Word wird von vielen Unternehmen verwendet.",
    "question": "Welche Softwareart ist das?",
    "code": "",
    "options": [
      "Standardsoftware",
      "Individualsoftware",
      "Firmware",
      "Treiber"
    ],
    "answer": "Standardsoftware",
    "explanation": "Standardsoftware wird für viele Nutzer entwickelt.  Die Lösung folgt aus der beschriebenen Anforderung und den behandelten Grundlagen. Die Alternativen Individualsoftware, Firmware, Treiber verwechseln Datentyp, Operator, Funktion oder Kontrollstruktur. Prüfungsstrategie: Fachliche Anforderung markieren, passende Python-Struktur bestimmen und Grenzwerte sowie Rückgabewerte kontrollieren.",
    "id": "QUIZ-025",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Ein Login-System prüft Nutzername, Passwort und Fehlversuche.",
    "question": "Was beschreibt eine Regel in einer Entscheidungstabelle?",
    "code": "",
    "options": [
      "Eine Kombination von Bedingungswerten mit den zugehörigen Aktionen",
      "Nur eine einzelne Aktion",
      "Eine grafische Verbindung zwischen Aktivitäten",
      "Eine Variable im Quellcode"
    ],
    "answer": "Eine Kombination von Bedingungswerten mit den zugehörigen Aktionen",
    "explanation": "Eine Regel ist eine Spalte mit einer konkreten Kombination von Bedingungszuständen. Dazu wird festgelegt, welche Aktionen ausgeführt werden. Prüfungsstrategie: Bedingungen, Kombination und Aktionen getrennt lesen.",
    "id": "QUIZ-026",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "In einer reduzierten Tabelle ist eine Bedingung für eine Regel ohne Bedeutung.",
    "question": "Was bedeutet ein Bindestrich bei einer Bedingung?",
    "code": "",
    "options": [
      "Der Zustand der Bedingung ist für diese Regel egal",
      "Die Regel enthält einen Fehler",
      "Die Aktion wird immer abgebrochen",
      "Die Tabelle endet an dieser Stelle"
    ],
    "answer": "Der Zustand der Bedingung ist für diese Regel egal",
    "explanation": "Der Bindestrich steht für einen Ist-egal-Zustand. Ja und Nein führen in dieser Regel zu denselben Aktionen und können zusammengefasst werden.",
    "id": "QUIZ-027",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Zwei unabhängige Bedingungen können jeweils Ja oder Nein sein.",
    "question": "Wie viele vollständige Kombinationen entstehen zunächst?",
    "code": "",
    "options": [
      "4",
      "2",
      "6",
      "8"
    ],
    "answer": "4",
    "explanation": "Bei zwei binären Bedingungen entstehen 2² = 4 Kombinationen: Ja/Ja, Ja/Nein, Nein/Ja und Nein/Nein.",
    "id": "QUIZ-028",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Drei unabhängige Bedingungen besitzen jeweils die Werte Ja oder Nein.",
    "question": "Wie viele vollständige Regeln sind vor einer Reduktion möglich?",
    "code": "",
    "options": [
      "8",
      "6",
      "9",
      "12"
    ],
    "answer": "8",
    "explanation": "Für n binäre Bedingungen entstehen 2ⁿ Kombinationen. Bei drei Bedingungen sind das 2³ = 8 Regeln.",
    "id": "QUIZ-029",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Eine Ticketplattform prüft Registrierung, Verfügbarkeit und Zahlung.",
    "question": "Warum muss die Entscheidungstabelle vollständig sein?",
    "code": "",
    "options": [
      "Damit jede fachlich mögliche Kombination eine definierte Reaktion besitzt",
      "Damit jede Aktion gleichzeitig ausgeführt wird",
      "Damit keine Bedingung benötigt wird",
      "Damit die Tabelle möglichst viele Spalten hat"
    ],
    "answer": "Damit jede fachlich mögliche Kombination eine definierte Reaktion besitzt",
    "explanation": "Vollständigkeit verhindert unbehandelte Fälle. Für jede relevante Kombination muss eine eindeutige Aktion oder Fehlerbehandlung festgelegt sein.",
    "id": "QUIZ-030",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Zwei Regeln unterscheiden sich nur in einer Bedingung, führen aber zu denselben Aktionen.",
    "question": "Wie kann die Tabelle sinnvoll reduziert werden?",
    "code": "",
    "options": [
      "Die beiden Regeln mit einem Ist-egal-Zustand zusammenfassen",
      "Eine der Regeln ersatzlos löschen",
      "Alle Bedingungen zu Aktionen machen",
      "Eine weitere identische Regel ergänzen"
    ],
    "answer": "Die beiden Regeln mit einem Ist-egal-Zustand zusammenfassen",
    "explanation": "Wenn beide Zustände einer Bedingung dieselbe Aktion auslösen, kann die Bedingung in der zusammengefassten Regel mit einem Bindestrich als irrelevant markiert werden.",
    "id": "QUIZ-031",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Bei korrektem Nutzername und korrektem Passwort soll der Zugriff erlaubt werden.",
    "question": "Welche Tabellenzeile gehört in den Aktionsbereich?",
    "code": "",
    "options": [
      "Zugriff gewähren",
      "Passwort korrekt?",
      "Nutzername korrekt?",
      "Anzahl Versuche größer 3?"
    ],
    "answer": "Zugriff gewähren",
    "explanation": "„Zugriff gewähren“ ist eine auszuführende Reaktion und damit eine Aktion. Die anderen Antworten sind prüfbare Bedingungen.",
    "id": "QUIZ-032",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Eine Versandentscheidung hängt von Lagerbestand und Zahlungseingang ab.",
    "question": "Welche Formulierung ist eine Bedingung?",
    "code": "",
    "options": [
      "Zahlung eingegangen?",
      "Ware versenden",
      "Kunden informieren",
      "Bestellung stornieren"
    ],
    "answer": "Zahlung eingegangen?",
    "explanation": "Eine Bedingung ist eine prüfbare Aussage. Versenden, informieren und stornieren sind mögliche Aktionen.",
    "id": "QUIZ-033",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Mehrere Regeln führen bei fehlerhaften Zugangsdaten zur gleichen Fehlermeldung.",
    "question": "Was ist der wichtigste Vorteil einer reduzierten Entscheidungstabelle?",
    "code": "",
    "options": [
      "Weniger redundante Regeln bei gleicher fachlicher Aussage",
      "Alle Bedingungen werden entfernt",
      "Die Tabelle wird zu einem Aktivitätsdiagramm",
      "Die Aktionen müssen nicht mehr dokumentiert werden"
    ],
    "answer": "Weniger redundante Regeln bei gleicher fachlicher Aussage",
    "explanation": "Reduktion fasst Regeln mit identischen Aktionen zusammen. Die fachliche Vollständigkeit muss dabei erhalten bleiben.",
    "id": "QUIZ-034",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Entscheidungstabellen",
    "scenario": "Eine Entscheidungstabelle enthält zwei Regeln mit gleicher Bedingungskombination, aber widersprüchlichen Aktionen.",
    "question": "Welches Qualitätsproblem liegt vor?",
    "code": "",
    "options": [
      "Die Regeln sind nicht eindeutig beziehungsweise widersprüchlich",
      "Die Tabelle ist automatisch vollständig",
      "Ein Bindestrich fehlt zwingend",
      "Es wird ein Fork benötigt"
    ],
    "answer": "Die Regeln sind nicht eindeutig beziehungsweise widersprüchlich",
    "explanation": "Für dieselbe Bedingungskombination dürfen nicht widersprüchliche Aktionen gelten. Andernfalls ist die Entscheidung nicht eindeutig.",
    "id": "QUIZ-035",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Ein Geschäftsprozess wird als UML-Aktivitätsdiagramm modelliert.",
    "question": "Welches Element kennzeichnet den Beginn?",
    "code": "",
    "options": [
      "Startknoten",
      "Entscheidungsknoten",
      "Swimlane",
      "Join"
    ],
    "answer": "Startknoten",
    "explanation": "Der Startknoten markiert den eindeutigen Beginn des Kontrollflusses. Er ist nicht mit einer Aktivität oder Entscheidung zu verwechseln.",
    "id": "QUIZ-036",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Nach der Ticketprüfung hängt der Ablauf von der Ticketgültigkeit ab.",
    "question": "Welches Element modelliert die Aufteilung?",
    "code": "",
    "options": [
      "Entscheidungsknoten",
      "Fork",
      "Join",
      "Endknoten"
    ],
    "answer": "Entscheidungsknoten",
    "explanation": "Ein Entscheidungsknoten verzweigt einen Ablauf anhand von Guards wie [gültig] und [ungültig].",
    "id": "QUIZ-037",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Alternative Abläufe sollen nach einer Entscheidung wieder zu einem gemeinsamen Weg führen.",
    "question": "Welches Element wird benötigt?",
    "code": "",
    "options": [
      "Zusammenführung",
      "Startknoten",
      "Fork",
      "Swimlane"
    ],
    "answer": "Zusammenführung",
    "explanation": "Eine Zusammenführung führt alternative Pfade wieder zusammen. Sie synchronisiert keine parallelen Pfade; dafür wird ein Join verwendet.",
    "id": "QUIZ-038",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Ein Mietprozess enthält Aktivitäten des Kunden und des Buchungssystems.",
    "question": "Wozu dienen Swimlanes?",
    "code": "",
    "options": [
      "Zur Zuordnung der Aktivitäten zu Verantwortlichen",
      "Zur Kennzeichnung von Schleifenvariablen",
      "Zum Speichern von Bedingungen",
      "Zum Ersetzen des Endknotens"
    ],
    "answer": "Zur Zuordnung der Aktivitäten zu Verantwortlichen",
    "explanation": "Swimlanes zeigen, welcher Akteur oder welches System für eine Aktivität verantwortlich ist.",
    "id": "QUIZ-039",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Nach einer Buchung sollen Bestätigung und Fahrzeugvorbereitung parallel beginnen.",
    "question": "Welches Element teilt den Kontrollfluss?",
    "code": "",
    "options": [
      "Fork",
      "Join",
      "Entscheidungsknoten",
      "Aktionsknoten"
    ],
    "answer": "Fork",
    "explanation": "Ein Fork teilt einen Kontrollfluss in parallele Pfade. Die parallelen Pfade können später mit einem Join synchronisiert werden.",
    "id": "QUIZ-040",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Zwei parallele Aktivitäten müssen abgeschlossen sein, bevor der nächste Schritt startet.",
    "question": "Welches Element synchronisiert die Pfade?",
    "code": "",
    "options": [
      "Join",
      "Fork",
      "Startknoten",
      "Guard"
    ],
    "answer": "Join",
    "explanation": "Ein Join wartet auf die erforderlichen eingehenden parallelen Pfade und führt sie zu einem gemeinsamen Kontrollfluss zusammen.",
    "id": "QUIZ-041",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Eine Kante verlässt einen Entscheidungsknoten mit der Beschriftung [Daten gültig].",
    "question": "Was beschreibt diese Beschriftung?",
    "code": "",
    "options": [
      "Eine Guard-Bedingung für die Auswahl des Pfades",
      "Den Namen einer Swimlane",
      "Eine auszuführende Aktivität",
      "Einen Endknoten"
    ],
    "answer": "Eine Guard-Bedingung für die Auswahl des Pfades",
    "explanation": "Ein Guard legt fest, unter welcher Bedingung ein ausgehender Pfad gewählt wird.",
    "id": "QUIZ-042",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Am Flughafenschalter wird ein ungültiges Ticket erkannt.",
    "question": "Welcher Ablauf entspricht dem Szenario?",
    "code": "",
    "options": [
      "Kundendienst konsultieren und Flugteilnahme beenden",
      "Gepäck abgeben und Bordkarte ausstellen",
      "Immer Zusatzkosten bezahlen",
      "Ohne Entscheidung zum Start zurückkehren"
    ],
    "answer": "Kundendienst konsultieren und Flugteilnahme beenden",
    "explanation": "Bei einem fehlerhaften Ticket wird der Kundendienst konsultiert; der Fluggast kann in diesem Ablauf nicht mitfliegen.",
    "id": "QUIZ-043",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Beim Mietprozess stellt das System Fehler in den Vertragsdaten fest.",
    "question": "Wie wird der Ablauf fortgesetzt?",
    "code": "",
    "options": [
      "Zur erneuten Eingabe der Vertragsdaten zurückführen",
      "Trotzdem Bestätigung und Zugangscode senden",
      "Den Prozess ohne Endzustand verlassen",
      "Eine zweite Fahrzeugklasse automatisch wählen"
    ],
    "answer": "Zur erneuten Eingabe der Vertragsdaten zurückführen",
    "explanation": "Fehlerhafte Daten erzeugen eine Wiederholung. Der Fehlerpfad führt zur erneuten Dateneingabe zurück.",
    "id": "QUIZ-044",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "UML-Aktivitätsdiagramme",
    "scenario": "Ein Aktivitätsdiagramm besitzt einen Fork, aber keinen späteren Join, obwohl ein gemeinsamer Folgeschritt beide Ergebnisse benötigt.",
    "question": "Welches Problem besteht?",
    "code": "",
    "options": [
      "Die parallelen Pfade werden vor dem gemeinsamen Folgeschritt nicht synchronisiert",
      "Die Swimlanes sind automatisch falsch",
      "Der Startknoten ist überflüssig",
      "Es fehlt eine Entscheidungstabelle"
    ],
    "answer": "Die parallelen Pfade werden vor dem gemeinsamen Folgeschritt nicht synchronisiert",
    "explanation": "Wenn ein Folgeschritt beide parallelen Ergebnisse benötigt, muss ein Join die Pfade synchronisieren.",
    "id": "QUIZ-045",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine Wiederholung soll in einem Programmablaufplan dargestellt werden.",
    "question": "Welche Aussage ist korrekt?",
    "code": "",
    "options": [
      "Entscheidung und Rückverweis bilden die Schleife",
      "Jede Schleife besitzt im PAP ein eigenes Schleifensymbol",
      "Nur ein Rechteck reicht aus",
      "Eine Schleife benötigt keinen Ausgang"
    ],
    "answer": "Entscheidung und Rückverweis bilden die Schleife",
    "explanation": "Im PAP gibt es kein eigenes Schleifensymbol. Bedingung, Schleifenweg, Rückverweis und Ausstieg bilden die Wiederholung.",
    "id": "QUIZ-046",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine Wiederholung wird in einem Struktogramm modelliert.",
    "question": "Wie sind die enthaltenen Schritte erkennbar?",
    "code": "",
    "options": [
      "Sie stehen eingerückt innerhalb des Schleifenblocks",
      "Sie stehen in einer separaten Swimlane",
      "Sie werden nur durch Pfeile verbunden",
      "Sie stehen außerhalb des Diagramms"
    ],
    "answer": "Sie stehen eingerückt innerhalb des Schleifenblocks",
    "explanation": "Struktogramme besitzen eigene Wiederholungselemente. Die zum Schleifenrumpf gehörenden Anweisungen stehen innerhalb des Blocks.",
    "id": "QUIZ-047",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Vertragsdaten werden wiederholt angefordert, solange Fehler vorhanden sind.",
    "question": "Was benötigt die Schleife zusätzlich zum Rückverweis?",
    "code": "",
    "options": [
      "Einen erreichbaren Ausstieg bei gültigen Daten",
      "Einen zweiten Startknoten",
      "Immer einen Fork",
      "Eine weitere Swimlane"
    ],
    "answer": "Einen erreichbaren Ausstieg bei gültigen Daten",
    "explanation": "Eine Schleife muss unter einer fachlich definierten Bedingung verlassen werden können. Sonst modelliert sie einen endlosen Ablauf.",
    "id": "QUIZ-048",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Ein Aktivitätsdiagramm führt den Pfad [Fehler] zurück zur Eingabe.",
    "question": "Welche Bedingung sollte den Schleifenpfad verlassen?",
    "code": "",
    "options": [
      "[Daten gültig]",
      "[Fehler]",
      "[immer]",
      "[zurück]"
    ],
    "answer": "[Daten gültig]",
    "explanation": "Der Fehlerpfad wiederholt die Eingabe; der Gegenfall [Daten gültig] führt zum weiteren Prozess.",
    "id": "QUIZ-049",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine kopfgesteuerte Schleife prüft eine Bedingung vor dem Schleifenrumpf.",
    "question": "Welche Folge ist möglich?",
    "code": "",
    "options": [
      "Der Schleifenrumpf wird kein einziges Mal ausgeführt",
      "Der Schleifenrumpf läuft immer mindestens einmal",
      "Die Schleife benötigt keinen Kontrollwert",
      "Ein break ist zwingend vorgeschrieben"
    ],
    "answer": "Der Schleifenrumpf wird kein einziges Mal ausgeführt",
    "explanation": "Ist die Bedingung bereits bei der ersten Prüfung False, wird der Schleifenrumpf übersprungen.",
    "id": "QUIZ-050",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine fußgesteuerte Wiederholung prüft erst nach dem Schleifenrumpf.",
    "question": "Welche Aussage ist richtig?",
    "code": "",
    "options": [
      "Der Schleifenrumpf wird mindestens einmal ausgeführt",
      "Der Schleifenrumpf kann grundsätzlich nie ausgeführt werden",
      "Die Schleife besitzt keinen Ausstieg",
      "Die Schleife ist immer parallel"
    ],
    "answer": "Der Schleifenrumpf wird mindestens einmal ausgeführt",
    "explanation": "Weil die Bedingung erst nach dem Rumpf geprüft wird, findet mindestens ein Durchlauf statt.",
    "id": "QUIZ-051",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "In einem PAP zeigt ein Pfeil aus einer Aktivität ohne Entscheidung direkt auf dieselbe Aktivität zurück.",
    "question": "Was fehlt für eine fachlich kontrollierte Schleife?",
    "code": "",
    "options": [
      "Eine prüfbare Abbruchbedingung",
      "Eine zweite identische Aktivität",
      "Ein Join",
      "Eine Entscheidungstabelle"
    ],
    "answer": "Eine prüfbare Abbruchbedingung",
    "explanation": "Ohne Bedingung und Ausstieg ist nicht erkennbar, wann die Wiederholung endet. Das Risiko einer Endlosschleife besteht.",
    "id": "QUIZ-052",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Kunde und System sind durch Swimlanes getrennt. Eine fehlerhafte Eingabe soll wiederholt werden.",
    "question": "Wohin sollte der Rückfluss führen?",
    "code": "",
    "options": [
      "Zur zuständigen Aktivität „Vertragsdaten eingeben“ in der Kunden-Swimlane",
      "Zum Endknoten",
      "Zum Fork für parallele Pfade",
      "Zu einer beliebigen Aktivität in der System-Swimlane"
    ],
    "answer": "Zur zuständigen Aktivität „Vertragsdaten eingeben“ in der Kunden-Swimlane",
    "explanation": "Der Rückfluss muss zum fachlich zuständigen Eingabeschritt führen. Die Swimlane macht die Verantwortung sichtbar.",
    "id": "QUIZ-053",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine Schleife zählt Versuche und endet bei Erfolg oder nach drei Fehlversuchen.",
    "question": "Welche Modellinformation ist notwendig?",
    "code": "",
    "options": [
      "Sowohl der Erfolgs- als auch der Grenzwertausstieg",
      "Nur der Rückverweis",
      "Nur ein Startknoten",
      "Ausschließlich eine Aktion „Versuche erhöhen“"
    ],
    "answer": "Sowohl der Erfolgs- als auch der Grenzwertausstieg",
    "explanation": "Für einen vollständigen Ablauf müssen beide Endbedingungen dargestellt werden: Erfolg oder Erreichen der maximalen Versuche.",
    "id": "QUIZ-054",
    "exam": "IHK-Transfer",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Schleifenmodellierung",
    "scenario": "Eine Aktivität wird parallel ausgeführt und enthält zusätzlich eine Wiederholung.",
    "question": "Welche Aussage ist fachlich richtig?",
    "code": "",
    "options": [
      "Parallelität und Wiederholung müssen mit ihren jeweiligen Knoten eindeutig modelliert werden",
      "Ein Fork ersetzt jede Schleifenbedingung",
      "Ein Rückverweis ersetzt jeden Join",
      "Swimlanes machen Bedingungen überflüssig"
    ],
    "answer": "Parallelität und Wiederholung müssen mit ihren jeweiligen Knoten eindeutig modelliert werden",
    "explanation": "Fork/Join beschreiben Parallelität; Entscheidung, Guard und Rückverweis beschreiben Wiederholung. Die Konzepte dürfen nicht verwechselt werden.",
    "id": "QUIZ-055",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Führe die beiden Bedingungsblöcke gedanklich aus.",
    "question": "Welche Ausgabe entsteht?",
    "code": "x = 11\n\nif x > 7:\n    print(\"A\")\nelif x > 9:\n    print(\"B\")\nelse:\n    print(\"C\")\n\nif x > 10:\n    print(\"D\")",
    "options": [
      "A und D",
      "B und D",
      "A",
      "A, B und D"
    ],
    "answer": "A und D",
    "explanation": "In der if/elif/else-Kette wird nur der erste passende Zweig A ausgeführt. Das zweite if ist unabhängig und liefert zusätzlich D.",
    "id": "QUIZ-056",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Analysiere break und den Schleifen-else-Block.",
    "question": "Wie viele Sternchen werden insgesamt ausgegeben?",
    "code": "for i in range(2, 8):\n    if i == 5:\n        break\n    print(\"*\")\nelse:\n    print(\"*\")\n\nprint(\"*\")",
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answer": "4",
    "explanation": "Für i = 2, 3 und 4 werden drei Sterne ausgegeben. Bei i = 5 beendet break die Schleife und verhindert den else-Block. Danach folgt ein weiterer Stern.",
    "id": "QUIZ-057",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Analysiere continue und den else-Block der for-Schleife.",
    "question": "Welche Ausgabe entsteht?",
    "code": "for i in range(1, 7):\n    if i == 4:\n        continue\n    print(\"*\")\nelse:\n    print(\"Ende\")",
    "options": [
      "5 Sterne und danach Ende",
      "6 Sterne und danach Ende",
      "5 Sterne ohne Ende",
      "4 Sterne und danach Ende"
    ],
    "answer": "5 Sterne und danach Ende",
    "explanation": "range(1, 7) liefert sechs Werte. Bei i = 4 wird ein Stern übersprungen. Da kein break ausgeführt wird, läuft der else-Block.",
    "id": "QUIZ-058",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Beachte Startwert, Endwert und negative Schrittweite.",
    "question": "Was wird ausgegeben?",
    "code": "for i in range(2, 10, -2):\n    print(i)",
    "options": [
      "Keine Ausgabe",
      "2, 4, 6, 8",
      "2",
      "2, 0, -2"
    ],
    "answer": "Keine Ausgabe",
    "explanation": "Der Startwert 2 liegt unter 10, die Schrittweite ist aber negativ. Der Bereich kann sich nicht zum Endwert entwickeln und ist leer.",
    "id": "QUIZ-059",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Die while-Schleife verdoppelt den Wert.",
    "question": "Welcher Endwert wird ausgegeben?",
    "code": "x = 1\nwhile x < 8:\n    x *= 2\nprint(x)",
    "options": [
      "8",
      "4",
      "16",
      "7"
    ],
    "answer": "8",
    "explanation": "Die Werte entwickeln sich von 1 über 2 und 4 zu 8. Bei 8 ist die Bedingung x < 8 False.",
    "id": "QUIZ-060",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Der Endwert von range() ist ausgeschlossen.",
    "question": "Welcher Wert wird für summe ausgegeben?",
    "code": "summe = 0\nfor i in range(5):\n    summe += i\nprint(summe)",
    "options": [
      "10",
      "15",
      "6",
      "5"
    ],
    "answer": "10",
    "explanation": "range(5) liefert 0, 1, 2, 3 und 4. Deren Summe ist 10.",
    "id": "QUIZ-061",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Die Schleife soll die Zahlen bis einschließlich i summieren.",
    "question": "Warum wird range(i + 1) verwendet?",
    "code": "i = int(input(\"Zahl: \"))\nsumme = 0\nfor j in range(i + 1):\n    summe += j\nprint(summe)",
    "options": [
      "Damit i als letzter Wert enthalten ist",
      "Damit die Schleife bei 1 beginnt",
      "Damit nur gerade Zahlen erzeugt werden",
      "Damit i übersprungen wird"
    ],
    "answer": "Damit i als letzter Wert enthalten ist",
    "explanation": "Der Stop-Wert von range() ist ausgeschlossen. Durch i + 1 wird i noch erzeugt.",
    "id": "QUIZ-062",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Eine Schleife durchsucht eine Liste und verwendet else.",
    "question": "Wann wird „nicht gefunden“ ausgegeben?",
    "code": "for wert in werte:\n    if wert == ziel:\n        print(\"gefunden\")\n        break\nelse:\n    print(\"nicht gefunden\")",
    "options": [
      "Wenn kein Element dem Ziel entspricht und kein break ausgeführt wird",
      "Nach jedem Schleifendurchlauf",
      "Nur wenn die Liste mindestens ein Element enthält",
      "Immer nach einem Treffer"
    ],
    "answer": "Wenn kein Element dem Ziel entspricht und kein break ausgeführt wird",
    "explanation": "Der else-Block einer for-Schleife läuft bei regulärem Ende. Ein Treffer führt zu break und verhindert den else-Block.",
    "id": "QUIZ-063",
    "exam": "LZK",
    "difficulty": 3
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Der Schleifenzähler wird im Rumpf nicht verändert.",
    "question": "Welche Folge hat der Code?",
    "code": "x = 1\nwhile x < 5:\n    print(x)",
    "options": [
      "Endlosschleife mit wiederholter Ausgabe 1",
      "Ausgabe 1 bis 4",
      "SyntaxError",
      "Die Schleife läuft genau einmal"
    ],
    "answer": "Endlosschleife mit wiederholter Ausgabe 1",
    "explanation": "x bleibt dauerhaft 1. Daher bleibt x < 5 immer True und die Schleife endet nicht.",
    "id": "QUIZ-064",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Quiz",
    "category": "Codeanalyse",
    "scenario": "Ein String wird Zeichen für Zeichen untersucht.",
    "question": "Welche Ausgabe entsteht?",
    "code": "text = \"Python\"\nfor zeichen in text:\n    if zeichen in \"yhn\":\n        continue\n    print(zeichen, end=\"\")",
    "options": [
      "Pto",
      "Pyth",
      "yhn",
      "Pto n"
    ],
    "answer": "Pto",
    "explanation": "continue überspringt bei y, h und n die Ausgabe. Ausgegeben werden P, t und o.",
    "id": "QUIZ-065",
    "exam": "LZK",
    "difficulty": 3
  }
];

module.exports = quizQuestions;
