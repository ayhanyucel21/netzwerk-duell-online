const codeBuilderQuestions = [
  {
    mode: "Code Builder",
    scenario: "Eine Zahl soll eingelesen werden.",
    question: "Welche Zeile ist korrekt?",
    code: "",
    options: [
      "zahl = int(input())",
      "input = zahl()",
      "zahl = str(int)",
      "print(input)"
    ],
    answer: "zahl = int(input())",
    explanation: "Die Eingabe wird eingelesen und konvertiert."
  },

  {
  mode: "Code Builder",
  scenario: "Eine Zahl soll eingelesen werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "zahl = int(input())",
    "input = zahl()",
    "zahl = str(int)",
    "print(input)"
  ],
  answer: "zahl = int(input())",
  explanation: "Die Eingabe wird gelesen und in einen Integer umgewandelt."
},
{
  mode: "Code Builder",
  scenario: "Ein Name soll eingelesen werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "name = input()",
    "input(name)",
    "name = print()",
    "str = name"
  ],
  answer: "name = input()",
  explanation: "input() liest Texteingaben ein."
},
{
  mode: "Code Builder",
  scenario: "Eine Ausgabe soll erfolgen.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "print(name)",
    "output(name)",
    "echo(name)",
    "show(name)"
  ],
  answer: "print(name)",
  explanation: "print() erzeugt Konsolenausgaben."
},
{
  mode: "Code Builder",
  scenario: "Eine Bedingung soll geprüft werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "if alter >= 18:",
    "if alter >= 18",
    "if (alter >= 18)",
    "if alter => 18:"
  ],
  answer: "if alter >= 18:",
  explanation: "Nach einer if-Bedingung wird ein Doppelpunkt benötigt."
},
{
  mode: "Code Builder",
  scenario: "Eine Alternative soll definiert werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "else:",
    "else",
    "otherwise:",
    "alternative:"
  ],
  answer: "else:",
  explanation: "else endet mit einem Doppelpunkt."
},
{
  mode: "Code Builder",
  scenario: "Mehrere Bedingungen sollen geprüft werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "elif note == 2:",
    "elseif note == 2:",
    "else if note == 2:",
    "elif(note==2)"
  ],
  answer: "elif note == 2:",
  explanation: "elif erweitert eine Verzweigung."
},
{
  mode: "Code Builder",
  scenario: "Eine Schleife soll fünfmal laufen.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "for i in range(5):",
    "for(5):",
    "loop range(5):",
    "while range(5):"
  ],
  answer: "for i in range(5):",
  explanation: "So wird eine klassische for-Schleife geschrieben."
},
{
  mode: "Code Builder",
  scenario: "Eine Bedingung soll dauerhaft geprüft werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "while True:",
    "while(true)",
    "loop True:",
    "while = True"
  ],
  answer: "while True:",
  explanation: "True ist ein boolescher Wert."
},
{
  mode: "Code Builder",
  scenario: "Ein String soll in Kleinbuchstaben umgewandelt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "text = text.lower()",
    "text.lower",
    "lower(text)",
    "text.small()"
  ],
  answer: "text = text.lower()",
  explanation: "lower() liefert einen neuen String."
},
{
  mode: "Code Builder",
  scenario: "Leerzeichen sollen entfernt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "text = text.strip()",
    "text.removeSpace()",
    "text.trimspace()",
    "strip(text())"
  ],
  answer: "text = text.strip()",
  explanation: "strip() entfernt führende und nachlaufende Leerzeichen."
},
{
  mode: "Code Builder",
  scenario: "Eine Zahl soll erhöht werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "zahl += 1",
    "zahl =+ 1",
    "++zahl",
    "zahl+"
  ],
  answer: "zahl += 1",
  explanation: "+= erhöht eine Variable."
},
{
  mode: "Code Builder",
  scenario: "Eine Liste soll erstellt werden.",
  question: "Welche Schreibweise ist korrekt?",
  code: "",
  options: [
    "server = []",
    "server = ()",
    "server = {}",
    "server = <>"
  ],
  answer: "server = []",
  explanation: "Listen werden mit [] angelegt."
},
{
  mode: "Code Builder",
  scenario: "Ein Element soll an eine Liste angehängt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "server.append('DC01')",
    "server.add('DC01')",
    "server.push('DC01')",
    "server.insert()"
  ],
  answer: "server.append('DC01')",
  explanation: "append() fügt Elemente an Listen an."
},
{
  mode: "Code Builder",
  scenario: "Die Länge einer Liste soll bestimmt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "len(server)",
    "size(server)",
    "length(server)",
    "count(server)"
  ],
  answer: "len(server)",
  explanation: "len() liefert die Anzahl der Elemente."
},
{
  mode: "Code Builder",
  scenario: "Eine Zahl soll in Text umgewandelt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "str(zahl)",
    "text(zahl)",
    "convert(zahl)",
    "string(zahl)"
  ],
  answer: "str(zahl)",
  explanation: "str() konvertiert in einen String."
},
{
  mode: "Code Builder",
  scenario: "Ein Text soll in einen Integer umgewandelt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "int(text)",
    "integer(text)",
    "parse(text)",
    "number(text)"
  ],
  answer: "int(text)",
  explanation: "int() erzeugt eine Ganzzahl."
},
{
  mode: "Code Builder",
  scenario: "Ein Text soll auf 'admin' geprüft werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "if name == 'admin':",
    "if name = 'admin':",
    "if name === 'admin':",
    "if(admin)"
  ],
  answer: "if name == 'admin':",
  explanation: "Vergleiche verwenden ==."
},
{
  mode: "Code Builder",
  scenario: "Eine Schleife soll beendet werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "break",
    "stop",
    "exitloop",
    "cancel"
  ],
  answer: "break",
  explanation: "break beendet die Schleife."
},
{
  mode: "Code Builder",
  scenario: "Ein Schleifendurchlauf soll übersprungen werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "continue",
    "skip",
    "next",
    "jump"
  ],
  answer: "continue",
  explanation: "continue überspringt den aktuellen Durchlauf."
},
{
  mode: "Code Builder",
  scenario: "Ein Wahrheitswert soll gespeichert werden.",
  question: "Welche Zuweisung ist korrekt?",
  code: "",
  options: [
    "aktiv = True",
    "aktiv = true",
    "aktiv = YES",
    "aktiv = 1"
  ],
  answer: "aktiv = True",
  explanation: "Python verwendet True mit großem T."
},
{
  mode: "Code Builder",
  scenario: "Ein Dictionary soll erstellt werden.",
  question: "Welche Schreibweise ist korrekt?",
  code: "",
  options: [
    "daten = {}",
    "daten = []",
    "daten = ()",
    "daten = <>"
  ],
  answer: "daten = {}",
  explanation: "Dictionarys werden mit {} erstellt."
},
{
  mode: "Code Builder",
  scenario: "Ein Schlüssel soll gelesen werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "daten['name']",
    "daten(name)",
    "daten.name()",
    "daten->name"
  ],
  answer: "daten['name']",
  explanation: "So greift man auf einen Dictionary-Schlüssel zu."
},
{
  mode: "Code Builder",
  scenario: "Eine Kommazahl soll gespeichert werden.",
  question: "Welche Zuweisung ist korrekt?",
  code: "",
  options: [
    "preis = 19.99",
    "preis = '19.99'",
    "preis = True",
    "preis = [19.99]"
  ],
  answer: "preis = 19.99",
  explanation: "19.99 ist ein float."
},
{
  mode: "Code Builder",
  scenario: "Ein Bereich von 0 bis 9 soll erzeugt werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "range(10)",
    "range(9)",
    "for(10)",
    "loop(10)"
  ],
  answer: "range(10)",
  explanation: "range(10) erzeugt die Werte 0 bis 9."
},
{
  mode: "Code Builder",
  scenario: "Ein Name soll ausgegeben werden.",
  question: "Welche Zeile ist korrekt?",
  code: "",
  options: [
    "print(f'Hallo {name}')",
    "echo(name)",
    "show(name)",
    "write(name)"
  ],
  answer: "print(f'Hallo {name}')",
  explanation: "f-Strings ermöglichen Variablenausgaben im Text."
}
];

module.exports = codeBuilderQuestions;