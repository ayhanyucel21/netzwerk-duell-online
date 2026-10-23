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
    "explanation": "String und Zahl können nicht direkt addiert werden."
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
    "explanation": "Die Variable wurde nicht definiert."
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
    "explanation": "Der Text kann nicht als Zahl interpretiert werden."
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
    "explanation": "Index 5 existiert nicht."
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
    "explanation": "Der Doppelpunkt fehlt."
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
    "explanation": "Die Funktion heißt len()."
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
    "explanation": "Integer sind nicht indexierbar."
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
    "explanation": "Der Schlüssel existiert nicht."
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
    "explanation": "Eine Division durch Null ist nicht erlaubt."
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
    "explanation": "Das Modul existiert nicht."
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
    "explanation": "Ohne break entsteht eine Endlosschleife."
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
    "explanation": "Nach dem Doppelpunkt muss eingerückt werden."
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
    "explanation": "Vergleich benötigt ==."
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
    "explanation": "Strings können wiederholt werden."
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
    "explanation": "Der String muss in int umgewandelt werden."
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
    "explanation": "Vergleiche liefern Wahrheitswerte."
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
    "explanation": "lower() wandelt in Kleinbuchstaben um."
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
    "explanation": "Listen werden mit eckigen Klammern erstellt."
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
    "explanation": "Beide Werte müssten True sein."
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
    "explanation": "range(3) erzeugt 0,1,2."
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
    "explanation": "Strings werden zusammengefügt."
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
    "explanation": "Der letzte Index ist Länge minus 1."
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
    "explanation": "Reservierte Funktionsnamen sollten vermieden werden."
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
    "explanation": "Sonst entsteht eine Endlosschleife."
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
    "explanation": "strip() entfernt Leerzeichen am Anfang und Ende."
  }
];

module.exports = debuggingQuestions;
