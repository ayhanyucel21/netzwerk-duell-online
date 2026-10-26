const debuggingQuestions = [
  {
    "mode": "Debugging",
    "scenario": "Ein String wird mit einer Zahl addiert.",
    "question": "Welcher Fehler tritt auf?",
    "code": "zahl = \"5\"\nprint(zahl + 2)",
    "options": [
      "TypeError",
      "ValueError",
      "NameError",
      "Kein Fehler"
    ],
    "answer": "TypeError",
    "explanation": "String und Zahl können nicht direkt addiert werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ValueError, NameError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-001",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Debugging",
    "scenario": "Eine unbekannte Variable wird verwendet.",
    "question": "Welcher Fehler tritt auf?",
    "code": "print(kunde)",
    "options": [
      "NameError",
      "ValueError",
      "TypeError",
      "IndexError"
    ],
    "answer": "NameError",
    "explanation": "Die Variable wurde nicht definiert.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ValueError, TypeError, IndexError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-002",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Text wird in int umgewandelt.",
    "question": "Welcher Fehler tritt auf?",
    "code": "alter = int(\"abc\")",
    "options": [
      "ValueError",
      "TypeError",
      "IndexError",
      "Kein Fehler"
    ],
    "answer": "ValueError",
    "explanation": "Der Text kann nicht als Zahl interpretiert werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen TypeError, IndexError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-003",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Liste enthält drei Elemente.",
    "question": "Welcher Fehler tritt auf?",
    "code": "werte = [1,2,3]\nprint(werte[5])",
    "options": [
      "IndexError",
      "NameError",
      "ValueError",
      "TypeError"
    ],
    "answer": "IndexError",
    "explanation": "Index 5 existiert nicht.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen NameError, ValueError, TypeError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-004",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Eine if-Anweisung wurde geschrieben.",
    "question": "Welcher Fehler liegt vor?",
    "code": "if x > 5\n    print(x)",
    "options": [
      "SyntaxError",
      "TypeError",
      "NameError",
      "IndexError"
    ],
    "answer": "SyntaxError",
    "explanation": "Der Doppelpunkt fehlt.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen TypeError, NameError, IndexError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-005",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Funktion wird falsch geschrieben.",
    "question": "Welcher Fehler tritt auf?",
    "code": "leng(\"Python\")",
    "options": [
      "NameError",
      "ValueError",
      "TypeError",
      "Kein Fehler"
    ],
    "answer": "NameError",
    "explanation": "Die Funktion heißt len().  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ValueError, TypeError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-006",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Zahl wird wie ein String verwendet.",
    "question": "Welcher Fehler tritt auf?",
    "code": "zahl = 42\nprint(zahl[0])",
    "options": [
      "TypeError",
      "ValueError",
      "IndexError",
      "Kein Fehler"
    ],
    "answer": "TypeError",
    "explanation": "Integer sind nicht indexierbar.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ValueError, IndexError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-007",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Dictionary wird gelesen.",
    "question": "Welcher Fehler tritt auf?",
    "code": "daten = {}\nprint(daten[\"name\"])",
    "options": [
      "KeyError",
      "IndexError",
      "TypeError",
      "NameError"
    ],
    "answer": "KeyError",
    "explanation": "Der Schlüssel existiert nicht.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen IndexError, TypeError, NameError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-008",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Programm dividiert durch Null.",
    "question": "Welcher Fehler tritt auf?",
    "code": "print(5 / 0)",
    "options": [
      "ZeroDivisionError",
      "ValueError",
      "TypeError",
      "SyntaxError"
    ],
    "answer": "ZeroDivisionError",
    "explanation": "Eine Division durch Null ist nicht erlaubt.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ValueError, TypeError, SyntaxError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-009",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Import wird verwendet.",
    "question": "Welcher Fehler tritt auf?",
    "code": "import nichtvorhanden",
    "options": [
      "ModuleNotFoundError",
      "ImportError",
      "TypeError",
      "Kein Fehler"
    ],
    "answer": "ModuleNotFoundError",
    "explanation": "Das Modul existiert nicht.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen ImportError, TypeError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-010",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Schleife soll beendet werden.",
    "question": "Welche Anweisung fehlt?",
    "code": "while True:\n    print(\"Hallo\")",
    "options": [
      "break",
      "pass",
      "return",
      "elif"
    ],
    "answer": "break",
    "explanation": "Ohne break entsteht eine Endlosschleife.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen pass, return, elif erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-011",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Debugging",
    "scenario": "Die Einrückung stimmt nicht.",
    "question": "Welcher Fehler tritt auf?",
    "code": "if True:\nprint(\"Hallo\")",
    "options": [
      "IndentationError",
      "NameError",
      "IndexError",
      "Kein Fehler"
    ],
    "answer": "IndentationError",
    "explanation": "Nach dem Doppelpunkt muss eingerückt werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen NameError, IndexError, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-012",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Benutzername wird geprüft.",
    "question": "Wo liegt der Fehler?",
    "code": "if name = \"admin\":",
    "options": [
      "= statt ==",
      "fehlendes if",
      "falscher Datentyp",
      "Kein Fehler"
    ],
    "answer": "= statt ==",
    "explanation": "Vergleich benötigt ==.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen fehlendes if, falscher Datentyp, Kein Fehler erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-013",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Ein String wird multipliziert.",
    "question": "Welches Ergebnis ist korrekt?",
    "code": "\"A\" * 3",
    "options": [
      "AAA",
      "TypeError",
      "ValueError",
      "SyntaxError"
    ],
    "answer": "AAA",
    "explanation": "Strings können wiederholt werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen TypeError, ValueError, SyntaxError erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-014",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Benutzer gibt eine Zahl ein.",
    "question": "Welche Zeile fehlt?",
    "code": "zahl = input()\n# ???",
    "options": [
      "zahl = int(zahl)",
      "zahl = bool()",
      "zahl = print()",
      "zahl = range()"
    ],
    "answer": "zahl = int(zahl)",
    "explanation": "Der String muss in int umgewandelt werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen zahl = bool(), zahl = print(), zahl = range() erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-015",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Vergleich wird durchgeführt.",
    "question": "Welcher Datentyp entsteht?",
    "code": "5 > 2",
    "options": [
      "bool",
      "int",
      "float",
      "str"
    ],
    "answer": "bool",
    "explanation": "Vergleiche liefern Wahrheitswerte.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen int, float, str erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-016",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Debugging",
    "scenario": "Ein String wird gelesen.",
    "question": "Welche Methode existiert?",
    "code": "\"Python\".???",
    "options": [
      "lower()",
      "small()",
      "tiny()",
      "min()"
    ],
    "answer": "lower()",
    "explanation": "lower() wandelt in Kleinbuchstaben um.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen small(), tiny(), min() erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-017",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Liste wird erstellt.",
    "question": "Welche Schreibweise ist korrekt?",
    "code": "",
    "options": [
      "[1,2,3]",
      "(1,2,3",
      "{1;2;3}",
      "[1|2|3]"
    ],
    "answer": "[1,2,3]",
    "explanation": "Listen werden mit eckigen Klammern erstellt.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen (1,2,3, {1;2;3}, [1|2|3] erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-018",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Boolean wird geprüft.",
    "question": "Welche Ausgabe entsteht?",
    "code": "print(True and False)",
    "options": [
      "False",
      "True",
      "0",
      "1"
    ],
    "answer": "False",
    "explanation": "Beide Werte müssten True sein.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen True, 0, 1 erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-019",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Schleife läuft über range(3).",
    "question": "Welcher Wert erscheint zuletzt?",
    "code": "for i in range(3):\n    print(i)",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": "2",
    "explanation": "range(3) erzeugt 0,1,2.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen 3, 1, 0 erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-020",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein String wird verkettet.",
    "question": "Welche Ausgabe erscheint?",
    "code": "print(\"Netz\" + \"werk\")",
    "options": [
      "Netzwerk",
      "Netz werk",
      "Fehler",
      "network"
    ],
    "answer": "Netzwerk",
    "explanation": "Strings werden zusammengefügt.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen Netz werk, Fehler, network erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-021",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Liste enthält drei Elemente.",
    "question": "Welcher Index greift auf das letzte Element zu?",
    "code": "",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": "2",
    "explanation": "Der letzte Index ist Länge minus 1.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen 3, 1, 0 erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-022",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Eine Variable wird überschrieben.",
    "question": "Was ist problematisch?",
    "code": "list = [1,2,3]",
    "options": [
      "Die eingebaute Funktion list() wird überschrieben",
      "SyntaxError",
      "ValueError",
      "Kein Problem"
    ],
    "answer": "Die eingebaute Funktion list() wird überschrieben",
    "explanation": "Reservierte Funktionsnamen sollten vermieden werden.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen SyntaxError, ValueError, Kein Problem erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-023",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Debugging",
    "scenario": "Eine while-Schleife zählt herunter.",
    "question": "Welche Zeile fehlt?",
    "code": "x = 10\nwhile x > 0:\n    print(x)\n    ???",
    "options": [
      "x -= 1",
      "x += 1",
      "break",
      "continue"
    ],
    "answer": "x -= 1",
    "explanation": "Sonst entsteht eine Endlosschleife.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen x += 1, break, continue erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-024",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Debugging",
    "scenario": "Ein Benutzer gibt Leerzeichen ein.",
    "question": "Welche Methode entfernt sie?",
    "code": "",
    "options": [
      "strip()",
      "clean()",
      "delete()",
      "remove()"
    ],
    "answer": "strip()",
    "explanation": "strip() entfernt Leerzeichen am Anfang und Ende.  Fehlerart und Fehlerursache müssen getrennt betrachtet werden. Die Alternativen clean(), delete(), remove() erklären die gezeigte Programmsituation nicht passend. Prüfungsstrategie: Zuerst die betroffene Zeile bestimmen, anschließend Datentypen, Werte, Syntax, Einrückung und Kontrollfluss prüfen. Danach die kleinste fachlich korrekte Änderung ableiten.",
    "id": "DEBUGGING-025",
    "exam": "LZK-Szenario",
    "difficulty": 1
  }
];

module.exports = debuggingQuestions;
