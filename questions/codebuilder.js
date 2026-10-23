const codeBuilderQuestions = [
  {
    "mode": "Code Builder",
    "scenario": "Eine Zahl soll eingelesen werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "zahl = int(input())",
      "input = zahl()",
      "zahl = str(int)",
      "print(input)"
    ],
    "answer": "zahl = int(input())",
    "explanation": "Die Eingabe wird eingelesen und konvertiert.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen input = zahl(), zahl = str(int), print(input) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-001",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Name soll eingelesen werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "name = input()",
      "input(name)",
      "name = print()",
      "str = name"
    ],
    "answer": "name = input()",
    "explanation": "input() liest Texteingaben ein.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen input(name), name = print(), str = name sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-002",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Ausgabe soll erfolgen.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "print(name)",
      "output(name)",
      "echo(name)",
      "show(name)"
    ],
    "answer": "print(name)",
    "explanation": "print() erzeugt Konsolenausgaben.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen output(name), echo(name), show(name) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-003",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Bedingung soll geprüft werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "if alter >= 18:",
      "if alter >= 18",
      "if (alter >= 18)",
      "if alter => 18:"
    ],
    "answer": "if alter >= 18:",
    "explanation": "Nach einer if-Bedingung wird ein Doppelpunkt benötigt.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen if alter >= 18, if (alter >= 18), if alter => 18: sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-004",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Alternative soll definiert werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "else:",
      "else",
      "otherwise:",
      "alternative:"
    ],
    "answer": "else:",
    "explanation": "else endet mit einem Doppelpunkt.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen else, otherwise:, alternative: sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-005",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Mehrere Bedingungen sollen geprüft werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "elif note == 2:",
      "elseif note == 2:",
      "else if note == 2:",
      "elif(note==2)"
    ],
    "answer": "elif note == 2:",
    "explanation": "elif erweitert eine Verzweigung.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen elseif note == 2:, else if note == 2:, elif(note==2) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-006",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Schleife soll fünfmal laufen.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "for i in range(5):",
      "for(5):",
      "loop range(5):",
      "while range(5):"
    ],
    "answer": "for i in range(5):",
    "explanation": "So wird eine klassische for-Schleife geschrieben.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen for(5):, loop range(5):, while range(5): sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-007",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Bedingung soll dauerhaft geprüft werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "while True:",
      "while(true)",
      "loop True:",
      "while = True"
    ],
    "answer": "while True:",
    "explanation": "True ist ein boolescher Wert.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen while(true), loop True:, while = True sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-008",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein String soll in Kleinbuchstaben umgewandelt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "text = text.lower()",
      "text.lower",
      "lower(text)",
      "text.small()"
    ],
    "answer": "text = text.lower()",
    "explanation": "lower() liefert einen neuen String.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen text.lower, lower(text), text.small() sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-009",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Leerzeichen sollen entfernt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "text = text.strip()",
      "text.removeSpace()",
      "text.trimspace()",
      "strip(text())"
    ],
    "answer": "text = text.strip()",
    "explanation": "strip() entfernt führende und nachlaufende Leerzeichen.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen text.removeSpace(), text.trimspace(), strip(text()) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-010",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Zahl soll erhöht werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "zahl += 1",
      "zahl =+ 1",
      "++zahl",
      "zahl+"
    ],
    "answer": "zahl += 1",
    "explanation": "+= erhöht eine Variable.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen zahl =+ 1, ++zahl, zahl+ sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-011",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Liste soll erstellt werden.",
    "question": "Welche Schreibweise ist korrekt?",
    "code": "",
    "options": [
      "server = []",
      "server = ()",
      "server = {}",
      "server = <>"
    ],
    "answer": "server = []",
    "explanation": "Listen werden mit [] angelegt.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen server = (), server = {}, server = <> sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-012",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Element soll an eine Liste angehängt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "server.append('DC01')",
      "server.add('DC01')",
      "server.push('DC01')",
      "server.insert()"
    ],
    "answer": "server.append('DC01')",
    "explanation": "append() fügt Elemente an Listen an.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen server.add('DC01'), server.push('DC01'), server.insert() sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-013",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Die Länge einer Liste soll bestimmt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "len(server)",
      "size(server)",
      "length(server)",
      "count(server)"
    ],
    "answer": "len(server)",
    "explanation": "len() liefert die Anzahl der Elemente.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen size(server), length(server), count(server) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-014",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Zahl soll in Text umgewandelt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "str(zahl)",
      "text(zahl)",
      "convert(zahl)",
      "string(zahl)"
    ],
    "answer": "str(zahl)",
    "explanation": "str() konvertiert in einen String.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen text(zahl), convert(zahl), string(zahl) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-015",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Text soll in einen Integer umgewandelt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "int(text)",
      "integer(text)",
      "parse(text)",
      "number(text)"
    ],
    "answer": "int(text)",
    "explanation": "int() erzeugt eine Ganzzahl.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen integer(text), parse(text), number(text) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-016",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Text soll auf 'admin' geprüft werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "if name == 'admin':",
      "if name = 'admin':",
      "if name === 'admin':",
      "if(admin)"
    ],
    "answer": "if name == 'admin':",
    "explanation": "Vergleiche verwenden ==.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen if name = 'admin':, if name === 'admin':, if(admin) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-017",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Schleife soll beendet werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "break",
      "stop",
      "exitloop",
      "cancel"
    ],
    "answer": "break",
    "explanation": "break beendet die Schleife.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen stop, exitloop, cancel sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-018",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Schleifendurchlauf soll übersprungen werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "continue",
      "skip",
      "next",
      "jump"
    ],
    "answer": "continue",
    "explanation": "continue überspringt den aktuellen Durchlauf.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen skip, next, jump sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-019",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Wahrheitswert soll gespeichert werden.",
    "question": "Welche Zuweisung ist korrekt?",
    "code": "",
    "options": [
      "aktiv = True",
      "aktiv = true",
      "aktiv = YES",
      "aktiv = 1"
    ],
    "answer": "aktiv = True",
    "explanation": "Python verwendet True mit großem T.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen aktiv = true, aktiv = YES, aktiv = 1 sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-020",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Dictionary soll erstellt werden.",
    "question": "Welche Schreibweise ist korrekt?",
    "code": "",
    "options": [
      "daten = {}",
      "daten = []",
      "daten = ()",
      "daten = <>"
    ],
    "answer": "daten = {}",
    "explanation": "Dictionarys werden mit {} erstellt.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen daten = [], daten = (), daten = <> sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-021",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Schlüssel soll gelesen werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "daten['name']",
      "daten(name)",
      "daten.name()",
      "daten->name"
    ],
    "answer": "daten['name']",
    "explanation": "So greift man auf einen Dictionary-Schlüssel zu.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen daten(name), daten.name(), daten->name sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-022",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Eine Kommazahl soll gespeichert werden.",
    "question": "Welche Zuweisung ist korrekt?",
    "code": "",
    "options": [
      "preis = 19.99",
      "preis = '19.99'",
      "preis = True",
      "preis = [19.99]"
    ],
    "answer": "preis = 19.99",
    "explanation": "19.99 ist ein float.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen preis = '19.99', preis = True, preis = [19.99] sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-023",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Bereich von 0 bis 9 soll erzeugt werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "range(10)",
      "range(9)",
      "for(10)",
      "loop(10)"
    ],
    "answer": "range(10)",
    "explanation": "range(10) erzeugt die Werte 0 bis 9.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen range(9), for(10), loop(10) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-024",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Code Builder",
    "scenario": "Ein Name soll ausgegeben werden.",
    "question": "Welche Zeile ist korrekt?",
    "code": "",
    "options": [
      "print(f'Hallo {name}')",
      "echo(name)",
      "show(name)",
      "write(name)"
    ],
    "answer": "print(f'Hallo {name}')",
    "explanation": "f-Strings ermöglichen Variablenausgaben im Text.  Die richtige Lösung erfüllt sowohl die Python-Syntax als auch die fachliche Anforderung. Die Alternativen echo(name), show(name), write(name) sind syntaktisch ungültig oder bilden Eingabe, Verarbeitung beziehungsweise Ausgabe nicht korrekt ab. Prüfungsstrategie: Die Lösung nach EVA ordnen und anschließend Doppelpunkt, Einrückung, Operator und Datentyp prüfen.",
    "id": "CODEBUILDER-025",
    "exam": "LZK-Szenario",
    "difficulty": 1
  }
];

module.exports = codeBuilderQuestions;
