const datentypQuestions = [
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt 42?",
    "code": "42",
    "options": [
      "int",
      "float",
      "bool",
      "str"
    ],
    "answer": "int",
    "explanation": "42 ist eine ganze Zahl.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen float, bool, str passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-001",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt 3.14?",
    "code": "3.14",
    "options": [
      "float",
      "int",
      "bool",
      "str"
    ],
    "answer": "float",
    "explanation": "3.14 enthält Nachkommastellen.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, bool, str passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-002",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt True?",
    "code": "True",
    "options": [
      "bool",
      "int",
      "float",
      "str"
    ],
    "answer": "bool",
    "explanation": "True ist ein Wahrheitswert.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, str passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-003",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt False?",
    "code": "False",
    "options": [
      "bool",
      "str",
      "int",
      "float"
    ],
    "answer": "bool",
    "explanation": "False gehört zum Datentyp bool.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen str, int, float passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-004",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt \"Python\"?",
    "code": "\"Python\"",
    "options": [
      "str",
      "int",
      "float",
      "bool"
    ],
    "answer": "str",
    "explanation": "Text in Anführungszeichen ist ein String.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-005",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Ordne den richtigen Datentyp zu.",
    "question": "Welchen Datentyp besitzt \"123\"?",
    "code": "\"123\"",
    "options": [
      "str",
      "int",
      "float",
      "bool"
    ],
    "answer": "str",
    "explanation": "Anführungszeichen bedeuten Text.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-006",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Datentyp bestimmen.",
    "question": "Welchen Datentyp besitzt [1,2,3]?",
    "code": "[1,2,3]",
    "options": [
      "list",
      "tuple",
      "str",
      "int"
    ],
    "answer": "list",
    "explanation": "Eckige Klammern erzeugen eine Liste.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen tuple, str, int passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-007",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Datentyp bestimmen.",
    "question": "Welchen Datentyp besitzt []?",
    "code": "[]",
    "options": [
      "list",
      "str",
      "dict",
      "tuple"
    ],
    "answer": "list",
    "explanation": "Leere Liste.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen str, dict, tuple passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-008",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Datentyp bestimmen.",
    "question": "Welchen Datentyp besitzt (1,2,3)?",
    "code": "(1,2,3)",
    "options": [
      "tuple",
      "list",
      "dict",
      "set"
    ],
    "answer": "tuple",
    "explanation": "Runde Klammern erzeugen ein Tupel.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen list, dict, set passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-009",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Datentyp bestimmen.",
    "question": "Welchen Datentyp besitzt {'a':1}?",
    "code": "{'a':1}",
    "options": [
      "dict",
      "set",
      "list",
      "tuple"
    ],
    "answer": "dict",
    "explanation": "Schlüssel-Wert-Paare bilden ein Dictionary.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen set, list, tuple passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-010",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Datentyp bestimmen.",
    "question": "Welchen Datentyp besitzt {1,2,3}?",
    "code": "{1,2,3}",
    "options": [
      "set",
      "dict",
      "list",
      "tuple"
    ],
    "answer": "set",
    "explanation": "Menge ohne Schlüssel = Set.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen dict, list, tuple passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-011",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Rückgabetyp bestimmen.",
    "question": "Welchen Typ liefert input()?",
    "code": "input()",
    "options": [
      "str",
      "int",
      "float",
      "bool"
    ],
    "answer": "str",
    "explanation": "input() liefert standardmäßig Text.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-012",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Rückgabetyp bestimmen.",
    "question": "Welchen Typ liefert int('5')?",
    "code": "int('5')",
    "options": [
      "int",
      "str",
      "float",
      "bool"
    ],
    "answer": "int",
    "explanation": "int() erzeugt einen Integer.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen str, float, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-013",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Rückgabetyp bestimmen.",
    "question": "Welchen Typ liefert float('5')?",
    "code": "float('5')",
    "options": [
      "float",
      "int",
      "str",
      "bool"
    ],
    "answer": "float",
    "explanation": "float() erzeugt eine Kommazahl.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, str, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-014",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Rückgabetyp bestimmen.",
    "question": "Welchen Typ liefert str(5)?",
    "code": "str(5)",
    "options": [
      "str",
      "int",
      "float",
      "bool"
    ],
    "answer": "str",
    "explanation": "str() wandelt in Text um.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-015",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Rückgabetyp bestimmen.",
    "question": "Welchen Typ liefert bool(1)?",
    "code": "bool(1)",
    "options": [
      "bool",
      "int",
      "float",
      "str"
    ],
    "answer": "bool",
    "explanation": "bool() liefert Wahrheitswerte.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, str passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-016",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Vergleich analysieren.",
    "question": "Welchen Typ liefert 5 > 3?",
    "code": "5 > 3",
    "options": [
      "bool",
      "int",
      "float",
      "str"
    ],
    "answer": "bool",
    "explanation": "Vergleiche liefern True oder False.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, str passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-017",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Stringoperation analysieren.",
    "question": "Welchen Typ liefert 'A' * 3?",
    "code": "'A' * 3",
    "options": [
      "str",
      "int",
      "float",
      "list"
    ],
    "answer": "str",
    "explanation": "Das Ergebnis ist 'AAA'.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, float, list passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-018",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Längenbestimmung analysieren.",
    "question": "Welchen Typ liefert len('Python')?",
    "code": "len('Python')",
    "options": [
      "int",
      "float",
      "str",
      "bool"
    ],
    "answer": "int",
    "explanation": "len() liefert eine ganze Zahl.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen float, str, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-019",
    "exam": "LZK-Szenario",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Listenzugriff analysieren.",
    "question": "Welchen Typ liefert [1,2,3][0]?",
    "code": "[1,2,3][0]",
    "options": [
      "int",
      "list",
      "tuple",
      "bool"
    ],
    "answer": "int",
    "explanation": "Das erste Element ist die Zahl 1.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen list, tuple, bool passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-020",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Liste analysieren.",
    "question": "Welchen Typ besitzt ['A','B']?",
    "code": "['A','B']",
    "options": [
      "list",
      "tuple",
      "set",
      "dict"
    ],
    "answer": "list",
    "explanation": "Eckige Klammern bedeuten Liste.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen tuple, set, dict passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-021",
    "exam": "IHK-Transfer",
    "difficulty": 3
  },
  {
    "mode": "Datentyp Match",
    "scenario": "String analysieren.",
    "question": "Welchen Typ liefert 'Python'.lower()?",
    "code": "'Python'.lower()",
    "options": [
      "str",
      "list",
      "bool",
      "int"
    ],
    "answer": "str",
    "explanation": "lower() gibt einen String zurück.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen list, bool, int passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-022",
    "exam": "LZK-Szenario",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Boolean analysieren.",
    "question": "Welchen Typ liefert True and False?",
    "code": "True and False",
    "options": [
      "bool",
      "int",
      "str",
      "float"
    ],
    "answer": "bool",
    "explanation": "Das Ergebnis eines logischen Vergleichs ist bool.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen int, str, float passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-023",
    "exam": "LZK",
    "difficulty": 1
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Range analysieren.",
    "question": "Welchen Typ liefert range(5)?",
    "code": "range(5)",
    "options": [
      "range",
      "list",
      "int",
      "tuple"
    ],
    "answer": "range",
    "explanation": "range() erzeugt ein Range-Objekt.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen list, int, tuple passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-024",
    "exam": "LZK",
    "difficulty": 2
  },
  {
    "mode": "Datentyp Match",
    "scenario": "Typbestimmung.",
    "question": "Welchen Typ besitzt None?",
    "code": "None",
    "options": [
      "NoneType",
      "bool",
      "str",
      "int"
    ],
    "answer": "NoneType",
    "explanation": "None besitzt den speziellen Typ NoneType.  Entscheidend ist der tatsächlich erzeugte Rückgabewert. Die Alternativen bool, str, int passen nicht zum ausgewerteten Ausdruck. Prüfungsstrategie: Anführungszeichen, Konvertierungsfunktionen, Operatoren und Rückgabetypen von Funktionen oder Methoden einzeln prüfen.",
    "id": "DATENTYP-025",
    "exam": "LZK-Szenario",
    "difficulty": 1
  }
];

module.exports = datentypQuestions;
