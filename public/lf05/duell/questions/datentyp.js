const datentypQuestions = [
  {
    mode: "Datentyp Match",
    scenario: "Ordne den richtigen Datentyp zu.",
    question: "Welchen Datentyp besitzt 42?",
    code: "42",
    options: [
      "int",
      "float",
      "bool",
      "str"
    ],
    answer: "int",
    explanation: "42 ist eine ganze Zahl."
  },

  {
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt 42?",
  code: "42",
  options: ["int","float","bool","str"],
  answer: "int",
  explanation: "42 ist eine ganze Zahl."
},

{
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt 3.14?",
  code: "3.14",
  options: ["float","int","bool","str"],
  answer: "float",
  explanation: "3.14 enthält Nachkommastellen."
},

{
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt True?",
  code: "True",
  options: ["bool","int","float","str"],
  answer: "bool",
  explanation: "True ist ein Wahrheitswert."
},

{
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt False?",
  code: "False",
  options: ["bool","str","int","float"],
  answer: "bool",
  explanation: "False gehört zum Datentyp bool."
},

{
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt \"Python\"?",
  code: "\"Python\"",
  options: ["str","int","float","bool"],
  answer: "str",
  explanation: "Text in Anführungszeichen ist ein String."
},

{
  mode: "Datentyp Match",
  scenario: "Ordne den richtigen Datentyp zu.",
  question: "Welchen Datentyp besitzt \"123\"?",
  code: "\"123\"",
  options: ["str","int","float","bool"],
  answer: "str",
  explanation: "Anführungszeichen bedeuten Text."
},

{
  mode: "Datentyp Match",
  scenario: "Datentyp bestimmen.",
  question: "Welchen Datentyp besitzt [1,2,3]?",
  code: "[1,2,3]",
  options: ["list","tuple","str","int"],
  answer: "list",
  explanation: "Eckige Klammern erzeugen eine Liste."
},

{
  mode: "Datentyp Match",
  scenario: "Datentyp bestimmen.",
  question: "Welchen Datentyp besitzt []?",
  code: "[]",
  options: ["list","str","dict","tuple"],
  answer: "list",
  explanation: "Leere Liste."
},

{
  mode: "Datentyp Match",
  scenario: "Datentyp bestimmen.",
  question: "Welchen Datentyp besitzt (1,2,3)?",
  code: "(1,2,3)",
  options: ["tuple","list","dict","set"],
  answer: "tuple",
  explanation: "Runde Klammern erzeugen ein Tupel."
},

{
  mode: "Datentyp Match",
  scenario: "Datentyp bestimmen.",
  question: "Welchen Datentyp besitzt {'a':1}?",
  code: "{'a':1}",
  options: ["dict","set","list","tuple"],
  answer: "dict",
  explanation: "Schlüssel-Wert-Paare bilden ein Dictionary."
},

{
  mode: "Datentyp Match",
  scenario: "Datentyp bestimmen.",
  question: "Welchen Datentyp besitzt {1,2,3}?",
  code: "{1,2,3}",
  options: ["set","dict","list","tuple"],
  answer: "set",
  explanation: "Menge ohne Schlüssel = Set."
},

{
  mode: "Datentyp Match",
  scenario: "Rückgabetyp bestimmen.",
  question: "Welchen Typ liefert input()?",
  code: "input()",
  options: ["str","int","float","bool"],
  answer: "str",
  explanation: "input() liefert standardmäßig Text."
},

{
  mode: "Datentyp Match",
  scenario: "Rückgabetyp bestimmen.",
  question: "Welchen Typ liefert int('5')?",
  code: "int('5')",
  options: ["int","str","float","bool"],
  answer: "int",
  explanation: "int() erzeugt einen Integer."
},

{
  mode: "Datentyp Match",
  scenario: "Rückgabetyp bestimmen.",
  question: "Welchen Typ liefert float('5')?",
  code: "float('5')",
  options: ["float","int","str","bool"],
  answer: "float",
  explanation: "float() erzeugt eine Kommazahl."
},

{
  mode: "Datentyp Match",
  scenario: "Rückgabetyp bestimmen.",
  question: "Welchen Typ liefert str(5)?",
  code: "str(5)",
  options: ["str","int","float","bool"],
  answer: "str",
  explanation: "str() wandelt in Text um."
},

{
  mode: "Datentyp Match",
  scenario: "Rückgabetyp bestimmen.",
  question: "Welchen Typ liefert bool(1)?",
  code: "bool(1)",
  options: ["bool","int","float","str"],
  answer: "bool",
  explanation: "bool() liefert Wahrheitswerte."
},

{
  mode: "Datentyp Match",
  scenario: "Vergleich analysieren.",
  question: "Welchen Typ liefert 5 > 3?",
  code: "5 > 3",
  options: ["bool","int","float","str"],
  answer: "bool",
  explanation: "Vergleiche liefern True oder False."
},

{
  mode: "Datentyp Match",
  scenario: "Stringoperation analysieren.",
  question: "Welchen Typ liefert 'A' * 3?",
  code: "'A' * 3",
  options: ["str","int","float","list"],
  answer: "str",
  explanation: "Das Ergebnis ist 'AAA'."
},

{
  mode: "Datentyp Match",
  scenario: "Längenbestimmung analysieren.",
  question: "Welchen Typ liefert len('Python')?",
  code: "len('Python')",
  options: ["int","float","str","bool"],
  answer: "int",
  explanation: "len() liefert eine ganze Zahl."
},

{
  mode: "Datentyp Match",
  scenario: "Listenzugriff analysieren.",
  question: "Welchen Typ liefert [1,2,3][0]?",
  code: "[1,2,3][0]",
  options: ["int","list","tuple","bool"],
  answer: "int",
  explanation: "Das erste Element ist die Zahl 1."
},

{
  mode: "Datentyp Match",
  scenario: "Liste analysieren.",
  question: "Welchen Typ besitzt ['A','B']?",
  code: "['A','B']",
  options: ["list","tuple","set","dict"],
  answer: "list",
  explanation: "Eckige Klammern bedeuten Liste."
},

{
  mode: "Datentyp Match",
  scenario: "String analysieren.",
  question: "Welchen Typ liefert 'Python'.lower()?",
  code: "'Python'.lower()",
  options: ["str","list","bool","int"],
  answer: "str",
  explanation: "lower() gibt einen String zurück."
},

{
  mode: "Datentyp Match",
  scenario: "Boolean analysieren.",
  question: "Welchen Typ liefert True and False?",
  code: "True and False",
  options: ["bool","int","str","float"],
  answer: "bool",
  explanation: "Das Ergebnis eines logischen Vergleichs ist bool."
},

{
  mode: "Datentyp Match",
  scenario: "Range analysieren.",
  question: "Welchen Typ liefert range(5)?",
  code: "range(5)",
  options: ["range","list","int","tuple"],
  answer: "range",
  explanation: "range() erzeugt ein Range-Objekt."
},

{
  mode: "Datentyp Match",
  scenario: "Typbestimmung.",
  question: "Welchen Typ besitzt None?",
  code: "None",
  options: ["NoneType","bool","str","int"],
  answer: "NoneType",
  explanation: "None besitzt den speziellen Typ NoneType."
}
];

module.exports = datentypQuestions;