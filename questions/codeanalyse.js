const TABLE10_QUESTIONS = [
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "A und D",
      "B und D",
      "A",
      "A, B und D"
    ],
    "answer": "A und D",
    "exp": "In der if/elif/else-Kette wird nur der erste passende Zweig A ausgeführt. Das zweite if ist unabhängig und liefert D.",
    "code": "x = 11\n\nif x > 7:\n    print(\"A\")\nelif x > 9:\n    print(\"B\")\nelse:\n    print(\"C\")\n\nif x > 10:\n    print(\"D\")"
  },
  {
    "q": "Wie viele Sternchen werden insgesamt ausgegeben?",
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answer": "4",
    "exp": "Für i = 2, 3, 4 erscheinen drei Sterne. break bei 5 verhindert das Schleifen-else; danach folgt ein weiterer Stern.",
    "code": "for i in range(2, 8):\n    if i == 5:\n        break\n    print(\"*\")\nelse:\n    print(\"*\")\n\nprint(\"*\")"
  },
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "5 Sterne und danach Ende",
      "6 Sterne und danach Ende",
      "5 Sterne ohne Ende",
      "4 Sterne und danach Ende"
    ],
    "answer": "5 Sterne und danach Ende",
    "exp": "Bei i = 4 überspringt continue genau eine Ausgabe. Ohne break läuft der else-Block.",
    "code": "for i in range(1, 7):\n    if i == 4:\n        continue\n    print(\"*\")\nelse:\n    print(\"Ende\")"
  },
  {
    "q": "Was wird ausgegeben?",
    "options": [
      "Keine Ausgabe",
      "2, 4, 6, 8",
      "2",
      "2, 0, -2"
    ],
    "answer": "Keine Ausgabe",
    "exp": "Start 2 liegt unter Stop 10, die Schrittweite ist negativ. Der range-Bereich ist leer.",
    "code": "for i in range(2, 10, -2):\n    print(i)"
  },
  {
    "q": "Welcher Endwert wird ausgegeben?",
    "options": [
      "8",
      "4",
      "16",
      "7"
    ],
    "answer": "8",
    "exp": "Die Werte sind 1, 2, 4 und 8. Danach ist x < 8 falsch.",
    "code": "x = 1\nwhile x < 8:\n    x *= 2\nprint(x)"
  },
  {
    "q": "Welcher Wert wird ausgegeben?",
    "options": [
      "10",
      "15",
      "6",
      "5"
    ],
    "answer": "10",
    "exp": "range(5) liefert 0 bis 4. Die Summe beträgt 10.",
    "code": "summe = 0\nfor i in range(5):\n    summe += i\nprint(summe)"
  },
  {
    "q": "Warum wird range(i + 1) verwendet?",
    "options": [
      "Damit i enthalten ist",
      "Damit bei 1 begonnen wird",
      "Damit nur gerade Zahlen entstehen",
      "Damit i übersprungen wird"
    ],
    "answer": "Damit i enthalten ist",
    "exp": "Der Stop-Wert ist ausgeschlossen; i + 1 schließt i ein.",
    "code": "i = 5\nsumme = 0\nfor j in range(i + 1):\n    summe += j\nprint(summe)"
  },
  {
    "q": "Wann wird „nicht gefunden“ ausgegeben?",
    "options": [
      "Wenn kein Treffer gefunden und kein break ausgeführt wird",
      "Nach jedem Durchlauf",
      "Nur bei einer leeren Liste",
      "Immer nach einem Treffer"
    ],
    "answer": "Wenn kein Treffer gefunden und kein break ausgeführt wird",
    "exp": "for-else läuft bei regulärem Schleifenende; break verhindert den else-Block.",
    "code": "for wert in werte:\n    if wert == ziel:\n        print(\"gefunden\")\n        break\nelse:\n    print(\"nicht gefunden\")"
  },
  {
    "q": "Welche Folge hat der Code?",
    "options": [
      "Endlosschleife mit wiederholter Ausgabe 1",
      "Ausgabe 1 bis 4",
      "SyntaxError",
      "Genau eine Ausgabe"
    ],
    "answer": "Endlosschleife mit wiederholter Ausgabe 1",
    "exp": "x wird nicht verändert und bleibt 1; x < 5 bleibt wahr.",
    "code": "x = 1\nwhile x < 5:\n    print(x)"
  },
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "Pto",
      "Pyth",
      "yhn",
      "Pton"
    ],
    "answer": "Pto",
    "exp": "Die Zeichen y, h und n werden durch continue übersprungen.",
    "code": "text = \"Python\"\nfor zeichen in text:\n    if zeichen in \"yhn\":\n        continue\n    print(zeichen, end=\"\")"
  },
  {
    "q": "Welche Zahlen werden ausgegeben?",
    "options": [
      "1, 3, 5",
      "2, 4",
      "1, 2, 3, 4, 5",
      "Keine"
    ],
    "answer": "1, 3, 5",
    "exp": "Gerade Zahlen führen zu continue; ausgegeben werden nur ungerade Zahlen.",
    "code": "for i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i)"
  },
  {
    "q": "Welcher Wert wird ausgegeben?",
    "options": [
      "6",
      "5",
      "7",
      "0"
    ],
    "answer": "6",
    "exp": "Die Schleife erhöht x von 0 auf 2, 4 und 6. Dann ist x < 5 falsch.",
    "code": "x = 0\nwhile x < 5:\n    x += 2\nprint(x)"
  },
  {
    "q": "Wie oft wird „X“ ausgegeben?",
    "options": [
      "6",
      "5",
      "3",
      "9"
    ],
    "answer": "6",
    "exp": "Die äußere Schleife läuft zweimal, die innere dreimal: 2 × 3 = 6.",
    "code": "for a in range(2):\n    for b in range(3):\n        print(\"X\")"
  },
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "0 1 Ende",
      "0 1",
      "0 1 2 Ende",
      "Ende"
    ],
    "answer": "0 1 Ende",
    "exp": "Bei i = 2 beendet break die while-Schleife. Ein while-else würde dann nicht laufen; das print nach der Schleife läuft.",
    "code": "i = 0\nwhile i < 4:\n    if i == 2:\n        break\n    print(i, end=\" \")\n    i += 1\nprint(\"Ende\")"
  },
  {
    "q": "Was wird ausgegeben?",
    "options": [
      "ABC",
      "AB",
      "AC",
      "BC"
    ],
    "answer": "ABC",
    "exp": "Drei unabhängige if-Anweisungen werden separat geprüft; alle Bedingungen sind wahr.",
    "code": "x = 5\nif x > 0:\n    print(\"A\", end=\"\")\nif x < 10:\n    print(\"B\", end=\"\")\nif x == 5:\n    print(\"C\", end=\"\")"
  },
  {
    "q": "Was wird ausgegeben?",
    "options": [
      "A",
      "B",
      "C",
      "A und B"
    ],
    "answer": "A",
    "exp": "In einer if/elif/else-Kette wird nur der erste wahre Zweig ausgeführt.",
    "code": "x = 12\nif x > 5:\n    print(\"A\")\nelif x > 10:\n    print(\"B\")\nelse:\n    print(\"C\")"
  },
  {
    "q": "Welcher Wert wird ausgegeben?",
    "options": [
      "24",
      "10",
      "4",
      "120"
    ],
    "answer": "24",
    "exp": "Die Schleife multipliziert 1 × 1 × 2 × 3 × 4 = 24.",
    "code": "produkt = 1\nfor i in range(1, 5):\n    produkt *= i\nprint(produkt)"
  },
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "0 1 3 4 Ende",
      "0 1 2 3 4 Ende",
      "0 1 3 4",
      "Ende"
    ],
    "answer": "0 1 3 4 Ende",
    "exp": "continue überspringt nur die Ausgabe für 2. Da kein break erfolgt, wird else ausgeführt.",
    "code": "for i in range(5):\n    if i == 2:\n        continue\n    print(i, end=\" \")\nelse:\n    print(\"Ende\")"
  },
  {
    "q": "Was ist das Ergebnis?",
    "options": [
      "15",
      "10",
      "21",
      "5"
    ],
    "answer": "15",
    "exp": "range(1, 6) enthält 1 bis 5; deren Summe ist 15.",
    "code": "summe = 0\nfor i in range(1, 6):\n    summe += i\nprint(summe)"
  },
  {
    "q": "Welche Ausgabe entsteht?",
    "options": [
      "3 2 1",
      "3 2 1 0",
      "2 1 0",
      "Endlosschleife"
    ],
    "answer": "3 2 1",
    "exp": "Die Bedingung ist x > 0. Nach der Ausgabe wird x jeweils um 1 verringert; 0 wird nicht mehr ausgegeben.",
    "code": "x = 3\nwhile x > 0:\n    print(x, end=\" \")\n    x -= 1"
  }
];

if (typeof window !== "undefined") window.TABLE10_QUESTIONS = TABLE10_QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = TABLE10_QUESTIONS;
