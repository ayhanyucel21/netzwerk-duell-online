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
  }
];

module.exports = quizQuestions;
