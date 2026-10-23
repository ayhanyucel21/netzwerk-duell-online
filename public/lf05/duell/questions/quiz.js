const quizQuestions = [
  {
    mode: "Quiz",
    scenario: "Ein Unternehmen speichert Kundennummern.",
    question: "Welcher Datentyp eignet sich am besten?",
    code: "",
    options: ["int","float","str","bool"],
    answer: "int",
    explanation: "Kundennummern werden als ganze Zahlen gespeichert."
  },

  {
  mode: "Quiz",
  scenario: "Ein Unternehmen speichert Kundennummern.",
  question: "Welcher Datentyp eignet sich am besten?",
  code: "",
  options: ["int","float","str","bool"],
  answer: "int",
  explanation: "Kundennummern werden üblicherweise als ganze Zahlen gespeichert."
},

{
  mode: "Quiz",
  scenario: "Ein Benutzer gibt seinen Namen ein.",
  question: "Welchen Datentyp liefert input() zurück?",
  code: "",
  options: ["str","int","float","bool"],
  answer: "str",
  explanation: "input() liefert immer einen String."
},

{
  mode: "Quiz",
  scenario: "Ein Wahrheitswert soll gespeichert werden.",
  question: "Welcher Datentyp wird verwendet?",
  code: "",
  options: ["bool","str","int","float"],
  answer: "bool",
  explanation: "True und False gehören zum Typ bool."
},

{
  mode: "Quiz",
  scenario: "Ein Preis soll mit Nachkommastellen gespeichert werden.",
  question: "Welcher Datentyp ist geeignet?",
  code: "",
  options: ["float","int","bool","str"],
  answer: "float",
  explanation: "float speichert Kommazahlen."
},

{
  mode: "Quiz",
  scenario: "Mehrere Servernamen sollen gemeinsam gespeichert werden.",
  question: "Welche Datenstruktur eignet sich?",
  code: "",
  options: ["list","bool","float","int"],
  answer: "list",
  explanation: "Listen speichern mehrere Werte."
},

{
  mode: "Quiz",
  scenario: "Eine Bedingung soll auf Gleichheit prüfen.",
  question: "Welcher Operator wird verwendet?",
  code: "",
  options: ["==","=","+","%"],
  answer: "==",
  explanation: "== vergleicht zwei Werte."
},

{
  mode: "Quiz",
  scenario: "Ein Passwort muss mindestens acht Zeichen enthalten.",
  question: "Welche Bedingung ist korrekt?",
  code: "",
  options: [
    "len(passwort) >= 8",
    "len(passwort) <= 8",
    "passwort == 8",
    "len(passwort) > 80"
  ],
  answer: "len(passwort) >= 8",
  explanation: "Der Grenzwert 8 wird eingeschlossen."
},

{
  mode: "Quiz",
  scenario: "Eine Schleife soll alle Elemente durchlaufen.",
  question: "Welche Schleife wird typischerweise verwendet?",
  code: "",
  options: ["for","if","else","break"],
  answer: "for",
  explanation: "for wird für bekannte Mengen eingesetzt."
},

{
  mode: "Quiz",
  scenario: "Eine Schleife soll sofort beendet werden.",
  question: "Welche Anweisung wird verwendet?",
  code: "",
  options: ["break","continue","pass","elif"],
  answer: "break",
  explanation: "break beendet die Schleife sofort."
},

{
  mode: "Quiz",
  scenario: "Die Länge eines Strings soll bestimmt werden.",
  question: "Welche Funktion wird verwendet?",
  code: "",
  options: ["len()","size()","count()","text()"],
  answer: "len()",
  explanation: "len() liefert die Anzahl der Zeichen."
},

{
  mode: "Quiz",
  scenario: "Ein Text soll in Kleinbuchstaben umgewandelt werden.",
  question: "Welche Methode wird verwendet?",
  code: "",
  options: ["lower()","small()","down()","tiny()"],
  answer: "lower()",
  explanation: "lower() wandelt Text in Kleinbuchstaben um."
},

{
  mode: "Quiz",
  scenario: "Leerzeichen am Anfang und Ende sollen entfernt werden.",
  question: "Welche Methode ist geeignet?",
  code: "",
  options: [
    "strip()",
    "clean()",
    "remove()",
    "trimspace()"
  ],
  answer: "strip()",
  explanation: "strip() entfernt führende und nachfolgende Leerzeichen."
},

{
  mode: "Quiz",
  scenario: "Ein Benutzername soll ausgegeben werden.",
  question: "Welche Funktion erzeugt eine Ausgabe?",
  code: "",
  options: ["print()","input()","len()","int()"],
  answer: "print()",
  explanation: "print() schreibt Daten in die Konsole."
},

{
  mode: "Quiz",
  scenario: "Eine Eingabe soll in eine Ganzzahl umgewandelt werden.",
  question: "Welche Funktion wird verwendet?",
  code: "",
  options: ["int()","float()","str()","bool()"],
  answer: "int()",
  explanation: "int() erzeugt eine Ganzzahl."
},

{
  mode: "Quiz",
  scenario: "Ein Text soll in eine Zahl mit Nachkommastellen umgewandelt werden.",
  question: "Welche Funktion wird verwendet?",
  code: "",
  options: ["float()","int()","str()","bool()"],
  answer: "float()",
  explanation: "float() erzeugt eine Kommazahl."
},

{
  mode: "Quiz",
  scenario: "Eine Liste enthält 4 Elemente.",
  question: "Welchen Index besitzt das erste Element?",
  code: "",
  options: ["0","1","-1","4"],
  answer: "0",
  explanation: "Python beginnt die Zählung bei 0."
},

{
  mode: "Quiz",
  scenario: "Eine Liste enthält 4 Elemente.",
  question: "Welchen Index besitzt das letzte Element?",
  code: "",
  options: ["3","4","1","0"],
  answer: "3",
  explanation: "Der letzte Index ist Länge minus 1."
},

{
  mode: "Quiz",
  scenario: "Ein Programm prüft Bedingungen.",
  question: "Welches Schlüsselwort startet eine Verzweigung?",
  code: "",
  options: ["if","for","while","break"],
  answer: "if",
  explanation: "if startet eine Bedingung."
},

{
  mode: "Quiz",
  scenario: "Eine Alternative soll ausgeführt werden.",
  question: "Welches Schlüsselwort wird verwendet?",
  code: "",
  options: ["else","for","while","pass"],
  answer: "else",
  explanation: "else wird bei falscher Bedingung ausgeführt."
},

{
  mode: "Quiz",
  scenario: "Mehrere Bedingungen sollen geprüft werden.",
  question: "Welches Schlüsselwort ergänzt eine Verzweigung?",
  code: "",
  options: ["elif","loop","break","range"],
  answer: "elif",
  explanation: "elif ergänzt weitere Bedingungen."
},

{
  mode: "Quiz",
  scenario: "Eine Schleife soll laufen, solange eine Bedingung wahr ist.",
  question: "Welche Schleife wird verwendet?",
  code: "",
  options: ["while","for","if","elif"],
  answer: "while",
  explanation: "while arbeitet bedingungsgesteuert."
},

{
  mode: "Quiz",
  scenario: "Eine Schleife soll 10-mal laufen.",
  question: "Welcher Ausdruck ist geeignet?",
  code: "",
  options: ["range(10)","range(11,20)","while(10)","loop(10)"],
  answer: "range(10)",
  explanation: "range(10) erzeugt die Werte 0 bis 9."
},

{
  mode: "Quiz",
  scenario: "Ein Programm verarbeitet Eingaben.",
  question: "Wofür steht EVA?",
  code: "",
  options: [
    "Eingabe-Verarbeitung-Ausgabe",
    "Einsatz-Verbindung-Anzeige",
    "Ergebnis-Verarbeitung-Aktion",
    "Energie-Verarbeitung-Ausgabe"
  ],
  answer: "Eingabe-Verarbeitung-Ausgabe",
  explanation: "EVA beschreibt den Grundablauf von Programmen."
},

{
  mode: "Quiz",
  scenario: "Eine Software wird speziell für ein Unternehmen entwickelt.",
  question: "Wie nennt man diese Software?",
  code: "",
  options: [
    "Individualsoftware",
    "Standardsoftware",
    "Systemsoftware",
    "Firmware"
  ],
  answer: "Individualsoftware",
  explanation: "Sie wird für einen bestimmten Kunden entwickelt."
},

{
  mode: "Quiz",
  scenario: "Microsoft Word wird von vielen Unternehmen verwendet.",
  question: "Welche Softwareart ist das?",
  code: "",
  options: [
    "Standardsoftware",
    "Individualsoftware",
    "Firmware",
    "Treiber"
  ],
  answer: "Standardsoftware",
  explanation: "Standardsoftware wird für viele Nutzer entwickelt."
}
];

module.exports = quizQuestions;