window.CODE_BUILDER_QUESTIONS = [
  {
    "id": "CB-001",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Zwei Zahlen addieren",
    "scenario": "Lies zwei ganze Zahlen ein, addiere beide Werte und gib die Summe aus.",
    "pseudocode": [
      "ERSTE ZAHL einlesen",
      "ZWEITE ZAHL einlesen",
      "SUMME = ERSTE ZAHL + ZWEITE ZAHL",
      "SUMME ausgeben"
    ],
    "requirements": [
      "Addition vorhanden",
      "Ergebnisvariable vorhanden",
      "Zwei Eingaben vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Addition vorhanden",
        "patterns": [
          "+"
        ],
        "points": 11
      },
      {
        "label": "Ergebnisvariable vorhanden",
        "patterns": [
          "summe"
        ],
        "points": 11
      },
      {
        "label": "Zwei Eingaben vorhanden",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Du benötigst zwei Eingaben.",
      "input() liefert Text; wandle beide Werte mit int() um.",
      "Berechne summe = zahl1 + zahl2 und gib summe aus."
    ],
    "solution": "zahl1 = int(input(\"Erste Zahl: \"))\nzahl2 = int(input(\"Zweite Zahl: \"))\nsumme = zahl1 + zahl2\nprint(summe)",
    "explanation": "Beide Eingaben werden vor der Addition in ganze Zahlen umgewandelt. Erst danach ist eine arithmetische Addition möglich."
  },
  {
    "id": "CB-002",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Rechteckfläche berechnen",
    "scenario": "Lies Länge und Breite als Kommazahlen ein. Berechne die Fläche und gib sie aus.",
    "pseudocode": [
      "LÄNGE einlesen",
      "BREITE einlesen",
      "FLÄCHE = LÄNGE * BREITE",
      "FLÄCHE ausgeben"
    ],
    "requirements": [
      "Multiplikation vorhanden",
      "Flächenvariable vorhanden",
      "Zwei Eingaben vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Multiplikation vorhanden",
        "patterns": [
          "*"
        ],
        "points": 11
      },
      {
        "label": "Flächenvariable vorhanden",
        "patterns": [
          "flaeche"
        ],
        "points": 11
      },
      {
        "label": "Zwei Eingaben vorhanden",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Länge und Breite können Nachkommastellen besitzen.",
      "Verwende float(input(...)).",
      "Multipliziere Länge und Breite."
    ],
    "solution": "laenge = float(input(\"Länge: \"))\nbreite = float(input(\"Breite: \"))\nflaeche = laenge * breite\nprint(flaeche)",
    "explanation": "float ist für Werte mit Nachkommastellen geeignet. Die Fläche ergibt sich aus Länge mal Breite."
  },
  {
    "id": "CB-003",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Sekunden in Minuten umrechnen",
    "scenario": "Lies eine Anzahl Sekunden ein. Gib volle Minuten und verbleibende Sekunden aus.",
    "pseudocode": [
      "SEKUNDEN einlesen",
      "MINUTEN = SEKUNDEN ganzzahlig durch 60",
      "REST = SEKUNDEN modulo 60",
      "MINUTEN und REST ausgeben"
    ],
    "requirements": [
      "Ganzzahldivision vorhanden",
      "Modulo vorhanden",
      "Restvariable vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Ganzzahldivision vorhanden",
        "patterns": [
          "//"
        ],
        "points": 11
      },
      {
        "label": "Modulo vorhanden",
        "patterns": [
          "%"
        ],
        "points": 11
      },
      {
        "label": "Restvariable vorhanden",
        "patterns": [
          "rest"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Du brauchst Quotient und Rest.",
      "// liefert volle Minuten; % liefert den Rest.",
      "minuten = sekunden // 60 und rest = sekunden % 60."
    ],
    "solution": "sekunden = int(input(\"Sekunden: \"))\nminuten = sekunden // 60\nrest = sekunden % 60\nprint(minuten, \"Minuten\", rest, \"Sekunden\")",
    "explanation": "Ganzzahldivision bestimmt die vollständigen Minuten. Der Modulo-Operator liefert die verbleibenden Sekunden."
  },
  {
    "id": "CB-004",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Bruttopreis berechnen",
    "scenario": "Lies einen Nettopreis ein. Berechne mit 19 Prozent Mehrwertsteuer den Bruttopreis und gib ihn mit zwei Nachkommastellen aus.",
    "pseudocode": [
      "NETTO einlesen",
      "BRUTTO = NETTO * 1.19",
      "BRUTTO formatiert ausgeben"
    ],
    "requirements": [
      "Faktor 1.19 verwendet",
      "f-String oder formatierte Ausgabe",
      "Zwei Nachkommastellen"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Faktor 1.19 verwendet",
        "patterns": [
          "1.19"
        ],
        "points": 11
      },
      {
        "label": "f-String oder formatierte Ausgabe",
        "patterns": [
          "f\"",
          "f'",
          "format"
        ],
        "points": 11
      },
      {
        "label": "Zwei Nachkommastellen",
        "patterns": [
          ".2f"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Der Bruttopreis enthält 119 Prozent des Nettopreises.",
      "Multipliziere mit 1.19.",
      "Nutze in einem f-String {brutto:.2f}."
    ],
    "solution": "netto = float(input(\"Nettopreis: \"))\nbrutto = netto * 1.19\nprint(f\"Bruttopreis: {brutto:.2f} EUR\")",
    "explanation": "Der Faktor 1.19 enthält den Nettopreis und 19 Prozent Mehrwertsteuer. .2f formatiert auf zwei Nachkommastellen."
  },
  {
    "id": "CB-005",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Temperatur umrechnen",
    "scenario": "Lies eine Temperatur in Grad Celsius ein und rechne sie in Fahrenheit um: F = C * 1.8 + 32.",
    "pseudocode": [
      "CELSIUS einlesen",
      "FAHRENHEIT = CELSIUS * 1.8 + 32",
      "FAHRENHEIT ausgeben"
    ],
    "requirements": [
      "Faktor 1.8 verwendet",
      "32 addiert",
      "Ergebnisvariable vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Faktor 1.8 verwendet",
        "patterns": [
          "1.8"
        ],
        "points": 11
      },
      {
        "label": "32 addiert",
        "patterns": [
          "+ 32",
          "+32"
        ],
        "points": 11
      },
      {
        "label": "Ergebnisvariable vorhanden",
        "patterns": [
          "fahrenheit"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Verwende die angegebene Formel.",
      "Die Reihenfolge lautet Multiplikation, danach Addition.",
      "fahrenheit = celsius * 1.8 + 32."
    ],
    "solution": "celsius = float(input(\"Celsius: \"))\nfahrenheit = celsius * 1.8 + 32\nprint(fahrenheit)",
    "explanation": "Die Eingabe wird als Kommazahl verarbeitet. Python beachtet Punkt-vor-Strich, daher wird zuerst multipliziert."
  },
  {
    "id": "CB-006",
    "category": "Grundlagen",
    "difficulty": "leicht",
    "title": "Name formatiert ausgeben",
    "scenario": "Lies Vorname und Nachname ein. Entferne äußere Leerzeichen und gib beide Namen in einer Zeile aus.",
    "pseudocode": [
      "VORNAME einlesen und bereinigen",
      "NACHNAME einlesen und bereinigen",
      "BEIDE NAMEN ausgeben"
    ],
    "requirements": [
      "Zwei Eingaben vorhanden",
      "strip auf Eingaben",
      "Beide Variablen ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Zwei Eingaben vorhanden",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "strip auf Eingaben",
        "patterns": [
          "strip"
        ],
        "points": 11
      },
      {
        "label": "Beide Variablen ausgegeben",
        "patterns": [
          "vorname",
          "nachname"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Äußere Leerzeichen sollen entfernt werden.",
      "Verwende .strip() direkt nach input().",
      "Gib vorname und nachname gemeinsam aus."
    ],
    "solution": "vorname = input(\"Vorname: \").strip()\nnachname = input(\"Nachname: \").strip()\nprint(vorname, nachname)",
    "explanation": "strip() entfernt Leerraum am Anfang und Ende. Die beiden bereinigten Variablen werden gemeinsam ausgegeben."
  },
  {
    "id": "CB-007",
    "category": "Grundlagen",
    "difficulty": "mittel",
    "title": "Durchschnitt von drei Messwerten",
    "scenario": "Lies drei Messwerte ein, berechne ihren arithmetischen Mittelwert und gib ihn aus.",
    "pseudocode": [
      "DREI WERTE einlesen",
      "SUMME bilden",
      "DURCHSCHNITT = SUMME / 3",
      "DURCHSCHNITT ausgeben"
    ],
    "requirements": [
      "Drei Eingaben vorhanden",
      "Division durch 3",
      "Klammern oder Summe vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Drei Eingaben vorhanden",
        "patterns": [
          "input",
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "Division durch 3",
        "patterns": [
          "/ 3",
          "/3"
        ],
        "points": 11
      },
      {
        "label": "Klammern oder Summe vorhanden",
        "patterns": [
          "a + b + c",
          "summe"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Du brauchst drei numerische Eingaben.",
      "Addiere zuerst alle Messwerte.",
      "Teile die Summe durch 3."
    ],
    "solution": "a = float(input(\"Messwert 1: \"))\nb = float(input(\"Messwert 2: \"))\nc = float(input(\"Messwert 3: \"))\ndurchschnitt = (a + b + c) / 3\nprint(durchschnitt)",
    "explanation": "Der Durchschnitt ist Summe geteilt durch Anzahl. Klammern machen die Berechnungsreihenfolge eindeutig."
  },
  {
    "id": "CB-008",
    "category": "Grundlagen",
    "difficulty": "mittel",
    "title": "Ziffernanzahl einer Eingabe",
    "scenario": "Lies eine beliebige Eingabe als Text ein und gib die Anzahl ihrer Zeichen aus.",
    "pseudocode": [
      "TEXT einlesen",
      "LÄNGE des Textes bestimmen",
      "LÄNGE ausgeben"
    ],
    "requirements": [
      "Textvariable vorhanden",
      "Länge ermittelt",
      "Länge ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Textvariable vorhanden",
        "patterns": [
          "text"
        ],
        "points": 11
      },
      {
        "label": "Länge ermittelt",
        "patterns": [
          "len"
        ],
        "points": 11
      },
      {
        "label": "Länge ausgegeben",
        "patterns": [
          "laenge",
          "len"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Die Eingabe soll Text bleiben.",
      "len() bestimmt die Zeichenanzahl.",
      "Speichere len(text) oder gib es direkt aus."
    ],
    "solution": "text = input(\"Eingabe: \")\nlaenge = len(text)\nprint(laenge)",
    "explanation": "input() liefert bereits einen String. len() zählt alle enthaltenen Zeichen, einschließlich Leerzeichen."
  },
  {
    "id": "CB-009",
    "category": "Grundlagen",
    "difficulty": "mittel",
    "title": "Tausch zweier Werte",
    "scenario": "Lies zwei Werte ein, vertausche ihre Inhalte und gib beide danach aus.",
    "pseudocode": [
      "A und B einlesen",
      "A und B vertauschen",
      "A und B ausgeben"
    ],
    "requirements": [
      "Zwei Eingaben vorhanden",
      "Tauschzuweisung vorhanden",
      "Beide Werte ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 12,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 12,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Zwei Eingaben vorhanden",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "Tauschzuweisung vorhanden",
        "patterns": [
          "a, b = b, a",
          "a,b=b,a"
        ],
        "points": 11
      },
      {
        "label": "Beide Werte ausgegeben",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Python kann zwei Variablen in einer Zeile tauschen.",
      "Links und rechts stehen jeweils zwei Variablen.",
      "a, b = b, a."
    ],
    "solution": "a = input(\"A: \")\nb = input(\"B: \")\na, b = b, a\nprint(a, b)",
    "explanation": "Die Mehrfachzuweisung wertet die rechte Seite zuerst aus und weist die Werte anschließend vertauscht zu."
  },
  {
    "id": "CB-010",
    "category": "Grundlagen",
    "difficulty": "mittel",
    "title": "Kilobyte in Byte",
    "scenario": "Lies eine Anzahl Kilobyte ein. Berechne mit 1 KB = 1024 Byte die Byte-Anzahl und gib sie aus.",
    "pseudocode": [
      "KILOBYTE einlesen",
      "BYTE = KILOBYTE * 1024",
      "BYTE ausgeben"
    ],
    "requirements": [
      "Faktor 1024 verwendet",
      "Multiplikation vorhanden",
      "Ergebnis ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Faktor 1024 verwendet",
        "patterns": [
          "1024"
        ],
        "points": 11
      },
      {
        "label": "Multiplikation vorhanden",
        "patterns": [
          "*"
        ],
        "points": 11
      },
      {
        "label": "Ergebnis ausgegeben",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Nutze den vorgegebenen Umrechnungsfaktor.",
      "Kilobyte wird mit 1024 multipliziert.",
      "byte = kilobyte * 1024."
    ],
    "solution": "kilobyte = float(input(\"Kilobyte: \"))\nbyte = kilobyte * 1024\nprint(byte)",
    "explanation": "Die Umrechnung ist eine direkte Multiplikation. float erlaubt auch Eingaben mit Nachkommastellen."
  },
  {
    "id": "CB-011",
    "category": "Bedingungen",
    "difficulty": "leicht",
    "title": "Volljährigkeit prüfen",
    "scenario": "Lies ein Alter ein. Gib „volljährig“ ab 18 aus, sonst „minderjährig“.",
    "pseudocode": [
      "ALTER einlesen",
      "WENN ALTER >= 18",
      "  volljährig ausgeben",
      "SONST",
      "  minderjährig ausgeben"
    ],
    "requirements": [
      "Grenzwert 18 eingeschlossen",
      "Beide Ausgaben vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Grenzwert 18 eingeschlossen",
        "patterns": [
          ">= 18",
          ">=18"
        ],
        "points": 17
      },
      {
        "label": "Beide Ausgaben vorhanden",
        "patterns": [
          "volljährig",
          "minderjährig"
        ],
        "points": 17
      }
    ],
    "hints": [
      "„Ab 18“ schließt 18 ein.",
      "Verwende if und else.",
      "Bedingung: alter >= 18."
    ],
    "solution": "alter = int(input(\"Alter: \"))\nif alter >= 18:\n    print(\"volljährig\")\nelse:\n    print(\"minderjährig\")",
    "explanation": "Der Vergleich >= berücksichtigt den Grenzwert 18. else behandelt alle kleineren Werte."
  },
  {
    "id": "CB-012",
    "category": "Bedingungen",
    "difficulty": "leicht",
    "title": "Gerade oder ungerade",
    "scenario": "Lies eine ganze Zahl ein und gib aus, ob sie gerade oder ungerade ist.",
    "pseudocode": [
      "ZAHL einlesen",
      "WENN ZAHL modulo 2 = 0",
      "  gerade ausgeben",
      "SONST",
      "  ungerade ausgeben"
    ],
    "requirements": [
      "Modulo 2 vorhanden",
      "Vergleich mit 0",
      "Beide Fälle vorhanden"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Modulo 2 vorhanden",
        "patterns": [
          "% 2",
          "%2"
        ],
        "points": 11
      },
      {
        "label": "Vergleich mit 0",
        "patterns": [
          "== 0",
          "==0"
        ],
        "points": 11
      },
      {
        "label": "Beide Fälle vorhanden",
        "patterns": [
          "gerade",
          "ungerade"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Gerade Zahlen haben bei Division durch 2 keinen Rest.",
      "Verwende den Modulo-Operator %.",
      "Prüfe zahl % 2 == 0."
    ],
    "solution": "zahl = int(input(\"Zahl: \"))\nif zahl % 2 == 0:\n    print(\"gerade\")\nelse:\n    print(\"ungerade\")",
    "explanation": "Modulo liefert den Divisionsrest. Bei einer geraden Zahl ist dieser Rest 0."
  },
  {
    "id": "CB-013",
    "category": "Bedingungen",
    "difficulty": "mittel",
    "title": "Ampelfarbe auswerten",
    "scenario": "Lies eine Ampelfarbe ein. Gib für rot „stehen“, für gelb „warten“, für grün „fahren“, sonst „ungültig“ aus.",
    "pseudocode": [
      "FARBE einlesen und klein schreiben",
      "WENN FARBE = rot",
      "SONST WENN FARBE = gelb",
      "SONST WENN FARBE = grün",
      "SONST ungültig ausgeben"
    ],
    "requirements": [
      "Vier Fälle vorhanden",
      "Normalisierung vorhanden",
      "elif verwendet"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "elif verwendet",
        "patterns": [
          "elif"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Vier Fälle vorhanden",
        "patterns": [
          "rot",
          "gelb",
          "grün",
          "ungültig"
        ],
        "points": 11
      },
      {
        "label": "Normalisierung vorhanden",
        "patterns": [
          "lower"
        ],
        "points": 11
      },
      {
        "label": "elif verwendet",
        "patterns": [
          "elif"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Normalisiere die Eingabe.",
      "Mehrere exklusive Fälle werden mit elif geprüft.",
      "Füge einen else-Fall für ungültige Eingaben hinzu."
    ],
    "solution": "farbe = input(\"Ampelfarbe: \").strip().lower()\nif farbe == \"rot\":\n    print(\"stehen\")\nelif farbe == \"gelb\":\n    print(\"warten\")\nelif farbe == \"grün\":\n    print(\"fahren\")\nelse:\n    print(\"ungültig\")",
    "explanation": "lower() verhindert Probleme durch Großschreibung. elif bildet die drei gültigen Farben ab, else behandelt alle übrigen Eingaben."
  },
  {
    "id": "CB-014",
    "category": "Bedingungen",
    "difficulty": "mittel",
    "title": "Rabattstaffel",
    "scenario": "Lies einen Preis ein. Ab 250 Euro gelten 20 Prozent Rabatt, ab 100 Euro 10 Prozent, sonst kein Rabatt. Gib den Endpreis aus.",
    "pseudocode": [
      "PREIS einlesen",
      "WENN PREIS >= 250: 20 Prozent",
      "SONST WENN PREIS >= 100: 10 Prozent",
      "SONST: kein Rabatt",
      "ENDPREIS ausgeben"
    ],
    "requirements": [
      "Höchster Grenzwert zuerst",
      "Grenzwert 100 vorhanden",
      "Endpreis berechnet"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "elif verwendet",
        "patterns": [
          "elif"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Höchster Grenzwert zuerst",
        "patterns": [
          ">= 250",
          ">=250"
        ],
        "points": 11
      },
      {
        "label": "Grenzwert 100 vorhanden",
        "patterns": [
          ">= 100",
          ">=100"
        ],
        "points": 11
      },
      {
        "label": "Endpreis berechnet",
        "patterns": [
          "1 - rabatt",
          "1-rabatt"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Prüfe den höchsten Rabatt zuerst.",
      "Speichere einen Rabattsatz.",
      "Endpreis = preis * (1 - rabatt)."
    ],
    "solution": "preis = float(input(\"Preis: \"))\nif preis >= 250:\n    rabatt = 0.20\nelif preis >= 100:\n    rabatt = 0.10\nelse:\n    rabatt = 0\nendpreis = preis * (1 - rabatt)\nprint(endpreis)",
    "explanation": "Die Reihenfolge ist entscheidend: Würde >= 100 zuerst geprüft, wäre der 20-Prozent-Fall nicht erreichbar."
  },
  {
    "id": "CB-015",
    "category": "Bedingungen",
    "difficulty": "mittel",
    "title": "Login prüfen",
    "scenario": "Lies Benutzername und Passwort ein. Erlaube den Zugriff nur für admin und geheim.",
    "pseudocode": [
      "BENUTZER einlesen",
      "PASSWORT einlesen",
      "WENN BENUTZER = admin UND PASSWORT = geheim",
      "  Zugriff erlaubt",
      "SONST Zugriff verweigert"
    ],
    "requirements": [
      "Beide Vergleiche vorhanden",
      "and verwendet",
      "Normalisierung Benutzer"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Beide Vergleiche vorhanden",
        "patterns": [
          "admin",
          "geheim"
        ],
        "points": 11
      },
      {
        "label": "and verwendet",
        "patterns": [
          " and "
        ],
        "points": 11
      },
      {
        "label": "Normalisierung Benutzer",
        "patterns": [
          "lower"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Beide Angaben müssen stimmen.",
      "Verknüpfe die Vergleiche mit and.",
      "Normalisiere den Benutzernamen mit lower()."
    ],
    "solution": "benutzer = input(\"Benutzer: \").strip().lower()\npasswort = input(\"Passwort: \")\nif benutzer == \"admin\" and passwort == \"geheim\":\n    print(\"Zugriff erlaubt\")\nelse:\n    print(\"Zugriff verweigert\")",
    "explanation": "and verlangt, dass beide Teilbedingungen True sind. Das Passwort wird nicht kleingeschrieben, weil Groß-/Kleinschreibung relevant sein kann."
  },
  {
    "id": "CB-016",
    "category": "Bedingungen",
    "difficulty": "mittel",
    "title": "Zahl im gültigen Bereich",
    "scenario": "Lies eine Zahl ein. Gib „gültig“ aus, wenn sie einschließlich zwischen 10 und 20 liegt, sonst „ungültig“.",
    "pseudocode": [
      "ZAHL einlesen",
      "WENN 10 <= ZAHL <= 20",
      "  gültig",
      "SONST ungültig"
    ],
    "requirements": [
      "Untere Grenze enthalten",
      "Obere Grenze enthalten"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Untere Grenze enthalten",
        "patterns": [
          "10 <=",
          "10<="
        ],
        "points": 17
      },
      {
        "label": "Obere Grenze enthalten",
        "patterns": [
          "<= 20",
          "<=20"
        ],
        "points": 17
      }
    ],
    "hints": [
      "Beide Grenzwerte sind eingeschlossen.",
      "Python erlaubt verkettete Vergleiche.",
      "10 <= zahl <= 20."
    ],
    "solution": "zahl = int(input(\"Zahl: \"))\nif 10 <= zahl <= 20:\n    print(\"gültig\")\nelse:\n    print(\"ungültig\")",
    "explanation": "Der verkettete Vergleich prüft Unter- und Obergrenze in einer lesbaren Bedingung."
  },
  {
    "id": "CB-017",
    "category": "Bedingungen",
    "difficulty": "mittel",
    "title": "Dateiendung prüfen",
    "scenario": "Lies einen Dateinamen ein und prüfe unabhängig von Großschreibung, ob er auf .pdf endet.",
    "pseudocode": [
      "DATEINAME einlesen",
      "DATEINAME normalisieren",
      "WENN DATEINAME auf .pdf endet",
      "  PDF ausgeben",
      "SONST andere Datei"
    ],
    "requirements": [
      "Endung .pdf geprüft",
      "endswith verwendet",
      "Schreibweise normalisiert"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "endswith verwendet",
        "patterns": [
          "endswith"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Endung .pdf geprüft",
        "patterns": [
          ".pdf"
        ],
        "points": 11
      },
      {
        "label": "endswith verwendet",
        "patterns": [
          "endswith"
        ],
        "points": 11
      },
      {
        "label": "Schreibweise normalisiert",
        "patterns": [
          "lower"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Bereinige und normalisiere den Dateinamen.",
      "endswith() prüft das Ende eines Strings.",
      "datei.lower().endswith(\".pdf\")."
    ],
    "solution": "datei = input(\"Dateiname: \").strip().lower()\nif datei.endswith(\".pdf\"):\n    print(\"PDF\")\nelse:\n    print(\"andere Datei\")",
    "explanation": "Die Normalisierung erkennt auch .PDF. endswith() prüft gezielt die Endung, ohne den gesamten Dateinamen zu kennen."
  },
  {
    "id": "CB-018",
    "category": "Bedingungen",
    "difficulty": "schwer",
    "title": "Schaltjahr prüfen",
    "scenario": "Lies ein Jahr ein. Es ist ein Schaltjahr, wenn es durch 400 teilbar ist oder durch 4, aber nicht durch 100.",
    "pseudocode": [
      "JAHR einlesen",
      "WENN JAHR durch 400 teilbar ODER",
      "  JAHR durch 4 teilbar UND nicht durch 100",
      "  Schaltjahr",
      "SONST kein Schaltjahr"
    ],
    "requirements": [
      "Modulo 400",
      "Modulo 4",
      "Ausschluss 100"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "or verwendet",
        "patterns": [
          "or"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Modulo 400",
        "patterns": [
          "% 400"
        ],
        "points": 11
      },
      {
        "label": "Modulo 4",
        "patterns": [
          "% 4"
        ],
        "points": 11
      },
      {
        "label": "Ausschluss 100",
        "patterns": [
          "% 100",
          "!= 0"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Es gibt einen Sonderfall für durch 400 teilbare Jahre.",
      "Kombiniere or und and.",
      "Nutze Klammern für den zweiten Teil."
    ],
    "solution": "jahr = int(input(\"Jahr: \"))\nif jahr % 400 == 0 or (jahr % 4 == 0 and jahr % 100 != 0):\n    print(\"Schaltjahr\")\nelse:\n    print(\"kein Schaltjahr\")",
    "explanation": "Die Klammern machen deutlich, dass Teilbarkeit durch 4 und Nichtteilbarkeit durch 100 gemeinsam gelten müssen."
  },
  {
    "id": "CB-019",
    "category": "Bedingungen",
    "difficulty": "schwer",
    "title": "Dreiecksprüfung",
    "scenario": "Lies drei Seitenlängen ein. Ein Dreieck ist möglich, wenn jede Seite kleiner als die Summe der beiden anderen Seiten ist.",
    "pseudocode": [
      "A, B, C einlesen",
      "WENN A < B+C UND B < A+C UND C < A+B",
      "  Dreieck möglich",
      "SONST nicht möglich"
    ],
    "requirements": [
      "Drei Eingaben",
      "Drei Ungleichungen",
      "and-Verknüpfung"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Drei Eingaben",
        "patterns": [
          "input",
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "Drei Ungleichungen",
        "patterns": [
          "a < b + c",
          "b < a + c",
          "c < a + b"
        ],
        "points": 11
      },
      {
        "label": "and-Verknüpfung",
        "patterns": [
          " and "
        ],
        "points": 11
      }
    ],
    "hints": [
      "Alle drei Seitenbedingungen sind erforderlich.",
      "Verknüpfe die Vergleiche mit and.",
      "Jede Seite muss kleiner als die Summe der anderen sein."
    ],
    "solution": "a = float(input(\"Seite a: \"))\nb = float(input(\"Seite b: \"))\nc = float(input(\"Seite c: \"))\nif a < b + c and b < a + c and c < a + b:\n    print(\"Dreieck möglich\")\nelse:\n    print(\"nicht möglich\")",
    "explanation": "Nur wenn alle drei Dreiecksungleichungen erfüllt sind, kann ein Dreieck entstehen."
  },
  {
    "id": "CB-020",
    "category": "Bedingungen",
    "difficulty": "schwer",
    "title": "Passwortanforderungen",
    "scenario": "Lies ein Passwort ein. Es ist gültig, wenn es mindestens 8 Zeichen hat und mindestens eine Ziffer enthält.",
    "pseudocode": [
      "PASSWORT einlesen",
      "HAT_ZIFFER = mindestens ein Zeichen ist Ziffer",
      "WENN Länge >= 8 UND HAT_ZIFFER",
      "  gültig",
      "SONST ungültig"
    ],
    "requirements": [
      "Länge mindestens 8",
      "Ziffernprüfung",
      "any oder Schleifenprüfung"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isdigit verwendet",
        "patterns": [
          "isdigit"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Länge mindestens 8",
        "patterns": [
          ">= 8",
          ">=8"
        ],
        "points": 11
      },
      {
        "label": "Ziffernprüfung",
        "patterns": [
          "isdigit"
        ],
        "points": 11
      },
      {
        "label": "any oder Schleifenprüfung",
        "patterns": [
          "any",
          "for"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Prüfe Länge und Inhalt getrennt.",
      "isdigit() erkennt Ziffern.",
      "any(...) prüft, ob mindestens eine Ziffer vorhanden ist."
    ],
    "solution": "passwort = input(\"Passwort: \")\nhat_ziffer = any(zeichen.isdigit() for zeichen in passwort)\nif len(passwort) >= 8 and hat_ziffer:\n    print(\"gültig\")\nelse:\n    print(\"ungültig\")",
    "explanation": "Die Lösung erzeugt zunächst einen Wahrheitswert für die Ziffernprüfung und verbindet ihn anschließend mit der Längenbedingung."
  },
  {
    "id": "CB-021",
    "category": "Schleifen",
    "difficulty": "leicht",
    "title": "Bei 1 verdoppeln bis 100",
    "scenario": "Beginne bei 1 und verdopple den Wert so lange, bis er mindestens 100 beträgt. Gib den Endwert aus.",
    "pseudocode": [
      "WERT = 1",
      "SOLANGE WERT < 100",
      "  WERT = WERT * 2",
      "WERT ausgeben"
    ],
    "requirements": [
      "Startwert 1",
      "Verdopplung",
      "Grenze 100"
    ],
    "conceptChecks": [
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 12,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 12,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Startwert 1",
        "patterns": [
          "wert = 1",
          "wert=1"
        ],
        "points": 11
      },
      {
        "label": "Verdopplung",
        "patterns": [
          "*= 2",
          "* 2"
        ],
        "points": 11
      },
      {
        "label": "Grenze 100",
        "patterns": [
          "< 100",
          "<100"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Die Anzahl der Verdopplungen ist nicht vorgegeben.",
      "Verwende while wert < 100.",
      "Ändere wert innerhalb der Schleife mit *= 2."
    ],
    "solution": "wert = 1\nwhile wert < 100:\n    wert *= 2\nprint(wert)",
    "explanation": "Die while-Schleife läuft mit 1, 2, 4, 8, 16, 32 und 64. Nach der Verdopplung auf 128 endet sie."
  },
  {
    "id": "CB-022",
    "category": "Schleifen",
    "difficulty": "leicht",
    "title": "Nichtnegative Zahl erzwingen",
    "scenario": "Lies so lange eine Zahl ein, bis eine nichtnegative Zahl eingegeben wurde. Gib diese aus.",
    "pseudocode": [
      "ZAHL einlesen",
      "SOLANGE ZAHL < 0",
      "  ZAHL erneut einlesen",
      "ZAHL ausgeben"
    ],
    "requirements": [
      "Negativprüfung",
      "Wiederholte Eingabe",
      "Ausgabe nach Schleife"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Negativprüfung",
        "patterns": [
          "< 0",
          "<0"
        ],
        "points": 11
      },
      {
        "label": "Wiederholte Eingabe",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "Ausgabe nach Schleife",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Die Anzahl der Eingaben ist unbekannt.",
      "Wiederhole nur bei negativen Werten.",
      "Lies innerhalb der while-Schleife erneut ein."
    ],
    "solution": "zahl = int(input(\"Zahl: \"))\nwhile zahl < 0:\n    zahl = int(input(\"Noch einmal: \"))\nprint(zahl)",
    "explanation": "Die erste Eingabe erfolgt vor der Schleife. Negative Werte führen zu einer neuen Eingabe; 0 und positive Werte beenden die Schleife."
  },
  {
    "id": "CB-023",
    "category": "Schleifen",
    "difficulty": "leicht",
    "title": "Zahlen von 1 bis 20",
    "scenario": "Gib die ganzen Zahlen von 1 bis einschließlich 20 aus.",
    "pseudocode": [
      "FÜR ZAHL von 1 bis 20",
      "  ZAHL ausgeben"
    ],
    "requirements": [
      "Startwert 1",
      "Endwert 21",
      "Ausgabe in Schleife"
    ],
    "conceptChecks": [
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 8,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 8,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Startwert 1",
        "patterns": [
          "range(1"
        ],
        "points": 11
      },
      {
        "label": "Endwert 21",
        "patterns": [
          "21"
        ],
        "points": 11
      },
      {
        "label": "Ausgabe in Schleife",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Der Endwert von range() ist ausgeschlossen.",
      "Für einschließlich 20 muss stop 21 sein.",
      "range(1, 21)."
    ],
    "solution": "for zahl in range(1, 21):\n    print(zahl)",
    "explanation": "range(1, 21) erzeugt die Werte 1 bis 20, weil 21 nicht mehr enthalten ist."
  },
  {
    "id": "CB-024",
    "category": "Schleifen",
    "difficulty": "mittel",
    "title": "Summe von 1 bis n",
    "scenario": "Lies eine positive ganze Zahl n ein. Berechne die Summe aller Zahlen von 1 bis n und gib sie aus.",
    "pseudocode": [
      "N einlesen",
      "SUMME = 0",
      "FÜR ZAHL von 1 bis N",
      "  SUMME erhöhen",
      "SUMME ausgeben"
    ],
    "requirements": [
      "Summe initialisiert",
      "n eingeschlossen",
      "Akkumulation"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Summe initialisiert",
        "patterns": [
          "summe = 0",
          "summe=0"
        ],
        "points": 11
      },
      {
        "label": "n eingeschlossen",
        "patterns": [
          "n + 1",
          "n+1"
        ],
        "points": 11
      },
      {
        "label": "Akkumulation",
        "patterns": [
          "+= zahl",
          "= summe + zahl"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Du benötigst eine Akkumulatorvariable.",
      "Initialisiere summe mit 0.",
      "Durchlaufe range(1, n + 1)."
    ],
    "solution": "n = int(input(\"n: \"))\nsumme = 0\nfor zahl in range(1, n + 1):\n    summe += zahl\nprint(summe)",
    "explanation": "Der Akkumulator wird in jedem Durchlauf um die aktuelle Zahl erhöht. n + 1 schließt n ein."
  },
  {
    "id": "CB-025",
    "category": "Schleifen",
    "difficulty": "mittel",
    "title": "Fünf Zahlen mitteln",
    "scenario": "Lies fünf Zahlen ein und berechne ihren Durchschnitt.",
    "pseudocode": [
      "SUMME = 0",
      "FÜNF MAL",
      "  ZAHL einlesen",
      "  SUMME erhöhen",
      "DURCHSCHNITT = SUMME / 5",
      "DURCHSCHNITT ausgeben"
    ],
    "requirements": [
      "Fünf Wiederholungen",
      "Summe initialisiert",
      "Division durch 5"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Fünf Wiederholungen",
        "patterns": [
          "range(5)"
        ],
        "points": 11
      },
      {
        "label": "Summe initialisiert",
        "patterns": [
          "summe = 0",
          "summe=0"
        ],
        "points": 11
      },
      {
        "label": "Division durch 5",
        "patterns": [
          "/ 5",
          "/5"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Die Wiederholungszahl ist bekannt.",
      "Nutze for mit range(5).",
      "Addiere jede Eingabe und teile danach durch 5."
    ],
    "solution": "summe = 0\nfor _ in range(5):\n    zahl = float(input(\"Zahl: \"))\n    summe += zahl\ndurchschnitt = summe / 5\nprint(durchschnitt)",
    "explanation": "Alle Werte werden im Akkumulator gesammelt. Die Division erfolgt erst nach Abschluss der Schleife."
  },
  {
    "id": "CB-026",
    "category": "Schleifen",
    "difficulty": "mittel",
    "title": "Drei Loginversuche",
    "scenario": "Ein Benutzer hat maximal drei Loginversuche. Bei korrektem Passwort soll die Schleife sofort enden.",
    "pseudocode": [
      "VERSUCHE = 0",
      "SOLANGE VERSUCHE < 3",
      "  PASSWORT einlesen",
      "  WENN korrekt: Erfolg und ABBRUCH",
      "  VERSUCHE erhöhen"
    ],
    "requirements": [
      "Versuchszähler",
      "Grenze 3",
      "Abbruch bei Erfolg",
      "Zähler erhöht"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "break verwendet",
        "patterns": [
          "break"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Versuchszähler",
        "patterns": [
          "versuche"
        ],
        "points": 8
      },
      {
        "label": "Grenze 3",
        "patterns": [
          "< 3",
          "<3"
        ],
        "points": 8
      },
      {
        "label": "Abbruch bei Erfolg",
        "patterns": [
          "break"
        ],
        "points": 8
      },
      {
        "label": "Zähler erhöht",
        "patterns": [
          "+= 1",
          "+ 1"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Verwende einen Versuchszähler.",
      "Beende bei korrektem Passwort mit break.",
      "Erhöhe den Zähler nur nach einem Fehlversuch."
    ],
    "solution": "versuche = 0\nwhile versuche < 3:\n    passwort = input(\"Passwort: \")\n    if passwort == \"geheim\":\n        print(\"Zugriff erlaubt\")\n        break\n    versuche += 1\nelse:\n    print(\"Zugriff gesperrt\")",
    "explanation": "Die Schleife endet entweder durch break bei Erfolg oder nach drei Fehlversuchen. Der while-else-Block läuft nur ohne break."
  },
  {
    "id": "CB-027",
    "category": "Schleifen",
    "difficulty": "mittel",
    "title": "Vielfache von 7",
    "scenario": "Gib alle Vielfachen von 7 zwischen 1 und 100 aus.",
    "pseudocode": [
      "FÜR ZAHL 1 bis 100",
      "  WENN ZAHL modulo 7 = 0",
      "    ZAHL ausgeben"
    ],
    "requirements": [
      "Modulo 7",
      "Bereich bis 100",
      "Ausgabe nur im if-Block"
    ],
    "conceptChecks": [
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Modulo 7",
        "patterns": [
          "% 7",
          "%7"
        ],
        "points": 11
      },
      {
        "label": "Bereich bis 100",
        "patterns": [
          "101"
        ],
        "points": 11
      },
      {
        "label": "Ausgabe nur im if-Block",
        "patterns": [
          "if",
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Durchlaufe 1 bis einschließlich 100.",
      "Modulo 7 muss 0 ergeben.",
      "range(1, 101) und if zahl % 7 == 0."
    ],
    "solution": "for zahl in range(1, 101):\n    if zahl % 7 == 0:\n        print(zahl)",
    "explanation": "Die Schleife erzeugt alle Kandidaten. Die if-Bedingung filtert nur die ohne Divisionsrest durch 7."
  },
  {
    "id": "CB-028",
    "category": "Schleifen",
    "difficulty": "mittel",
    "title": "Zahlen bis 0 summieren",
    "scenario": "Lies Zahlen ein, bis 0 eingegeben wird. Berechne die Summe aller zuvor eingegebenen Zahlen.",
    "pseudocode": [
      "SUMME = 0",
      "WIEDERHOLE",
      "  ZAHL einlesen",
      "  WENN ZAHL = 0: ABBRUCH",
      "  SUMME erhöhen",
      "SUMME ausgeben"
    ],
    "requirements": [
      "Endlosschleife mit kontrolliertem Abbruch",
      "Abbruch bei 0",
      "Summe erhöht"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "break verwendet",
        "patterns": [
          "break"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Endlosschleife mit kontrolliertem Abbruch",
        "patterns": [
          "while True"
        ],
        "points": 11
      },
      {
        "label": "Abbruch bei 0",
        "patterns": [
          "== 0",
          "==0",
          "break"
        ],
        "points": 11
      },
      {
        "label": "Summe erhöht",
        "patterns": [
          "+= zahl",
          "= summe + zahl"
        ],
        "points": 11
      }
    ],
    "hints": [
      "0 ist das Stoppsignal und darf nicht addiert werden.",
      "Prüfe 0 vor der Addition.",
      "Nutze while True und break."
    ],
    "solution": "summe = 0\nwhile True:\n    zahl = float(input(\"Zahl, 0 beendet: \"))\n    if zahl == 0:\n        break\n    summe += zahl\nprint(summe)",
    "explanation": "Die Schleife ist bewusst offen, besitzt aber einen erreichbaren Abbruch. Die 0 wird vor der Akkumulation erkannt."
  },
  {
    "id": "CB-029",
    "category": "Schleifen",
    "difficulty": "schwer",
    "title": "Fakultät berechnen",
    "scenario": "Lies eine nichtnegative ganze Zahl n ein und berechne n! als Produkt von 1 bis n.",
    "pseudocode": [
      "N einlesen",
      "ERGEBNIS = 1",
      "FÜR ZAHL 1 bis N",
      "  ERGEBNIS multiplizieren",
      "ERGEBNIS ausgeben"
    ],
    "requirements": [
      "Produkt mit 1 initialisiert",
      "n eingeschlossen",
      "Multiplikative Akkumulation"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Produkt mit 1 initialisiert",
        "patterns": [
          "ergebnis = 1",
          "ergebnis=1"
        ],
        "points": 11
      },
      {
        "label": "n eingeschlossen",
        "patterns": [
          "n + 1",
          "n+1"
        ],
        "points": 11
      },
      {
        "label": "Multiplikative Akkumulation",
        "patterns": [
          "*= zahl",
          "= ergebnis * zahl"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Ein Produkt beginnt mit 1, nicht mit 0.",
      "Durchlaufe 1 bis n einschließlich.",
      "ergebnis *= zahl."
    ],
    "solution": "n = int(input(\"n: \"))\nergebnis = 1\nfor zahl in range(1, n + 1):\n    ergebnis *= zahl\nprint(ergebnis)",
    "explanation": "Eine Initialisierung mit 0 würde jedes Produkt zu 0 machen. Für n = 0 bleibt das Ergebnis korrekt bei 1."
  },
  {
    "id": "CB-030",
    "category": "Schleifen",
    "difficulty": "schwer",
    "title": "Primzahl prüfen",
    "scenario": "Lies eine ganze Zahl größer als 1 ein. Prüfe, ob sie eine Primzahl ist, und gib das Ergebnis aus.",
    "pseudocode": [
      "N einlesen",
      "IST_PRIM = WAHR",
      "FÜR TEILER von 2 bis N-1",
      "  WENN N modulo TEILER = 0",
      "    IST_PRIM = FALSCH und ABBRUCH",
      "Ergebnis ausgeben"
    ],
    "requirements": [
      "Teilbarkeit geprüft",
      "Statusvariable",
      "Abbruch beim Teiler",
      "Zahlen <=1 ausgeschlossen"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "break verwendet",
        "patterns": [
          "break"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Teilbarkeit geprüft",
        "patterns": [
          "% teiler",
          "%teiler"
        ],
        "points": 8
      },
      {
        "label": "Statusvariable",
        "patterns": [
          "ist_prim"
        ],
        "points": 8
      },
      {
        "label": "Abbruch beim Teiler",
        "patterns": [
          "break"
        ],
        "points": 8
      },
      {
        "label": "Zahlen <=1 ausgeschlossen",
        "patterns": [
          "n > 1",
          "n>1"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Eine Primzahl hat keinen Teiler zwischen 2 und n-1.",
      "Nutze eine Statusvariable.",
      "Brich beim ersten gefundenen Teiler ab."
    ],
    "solution": "n = int(input(\"Zahl > 1: \"))\nist_prim = n > 1\nfor teiler in range(2, n):\n    if n % teiler == 0:\n        ist_prim = False\n        break\nif ist_prim:\n    print(\"Primzahl\")\nelse:\n    print(\"keine Primzahl\")",
    "explanation": "Die Schleife sucht nach einem echten Teiler. Ein gefundener Teiler reicht aus, um die Zahl als nicht prim zu kennzeichnen."
  },
  {
    "id": "CB-031",
    "category": "Strings",
    "difficulty": "leicht",
    "title": "Text rückwärts ausgeben",
    "scenario": "Lies einen Text ein und gib ihn rückwärts aus.",
    "pseudocode": [
      "TEXT einlesen",
      "TEXT mit Schritt -1 schneiden",
      "ERGEBNIS ausgeben"
    ],
    "requirements": [
      "Rückwärtsslicing",
      "Ergebnis ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 12,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 12,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Rückwärtsslicing",
        "patterns": [
          "[::-1]"
        ],
        "points": 17
      },
      {
        "label": "Ergebnis ausgegeben",
        "patterns": [
          "print"
        ],
        "points": 17
      }
    ],
    "hints": [
      "Slicing kann eine negative Schrittweite verwenden.",
      "Der gesamte String wird mit Schritt -1 gelesen.",
      "text[::-1]."
    ],
    "solution": "text = input(\"Text: \")\nrueckwaerts = text[::-1]\nprint(rueckwaerts)",
    "explanation": "Das Slicing beginnt implizit am Ende und läuft mit Schritt -1 bis zum Anfang."
  },
  {
    "id": "CB-032",
    "category": "Strings",
    "difficulty": "leicht",
    "title": "Vokale zählen",
    "scenario": "Lies einen Text ein und zähle die Vokale a, e, i, o und u unabhängig von Großschreibung.",
    "pseudocode": [
      "TEXT einlesen und klein schreiben",
      "ZÄHLER = 0",
      "FÜR jedes ZEICHEN",
      "  WENN ZEICHEN ein Vokal",
      "    ZÄHLER erhöhen",
      "ZÄHLER ausgeben"
    ],
    "requirements": [
      "Vokalmenge vorhanden",
      "Zähler initialisiert",
      "Zähler erhöht"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Vokalmenge vorhanden",
        "patterns": [
          "aeiou"
        ],
        "points": 11
      },
      {
        "label": "Zähler initialisiert",
        "patterns": [
          "anzahl = 0",
          "anzahl=0"
        ],
        "points": 11
      },
      {
        "label": "Zähler erhöht",
        "patterns": [
          "+= 1",
          "+ 1"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Normalisiere Groß-/Kleinschreibung.",
      "Prüfe jedes Zeichen mit in \"aeiou\".",
      "Erhöhe einen Zähler bei jedem Treffer."
    ],
    "solution": "text = input(\"Text: \").lower()\nanzahl = 0\nfor zeichen in text:\n    if zeichen in \"aeiou\":\n        anzahl += 1\nprint(anzahl)",
    "explanation": "lower() ermöglicht eine einheitliche Prüfung. Die for-Schleife untersucht jedes Zeichen einzeln."
  },
  {
    "id": "CB-033",
    "category": "Strings",
    "difficulty": "mittel",
    "title": "Ziffernsumme einer Eingabe",
    "scenario": "Lies eine beliebige Eingabe ein. Berechne die Summe der Zahlenwerte aller darin enthaltenen Ziffern und gib sie aus.",
    "pseudocode": [
      "TEXT einlesen",
      "SUMME = 0",
      "FÜR jedes ZEICHEN",
      "  WENN ZEICHEN eine Ziffer",
      "    SUMME += Zahlenwert des Zeichens",
      "SUMME ausgeben"
    ],
    "requirements": [
      "Summe initialisiert",
      "Ziffernprüfung",
      "Zeichen konvertiert",
      "Akkumulation"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "isdigit verwendet",
        "patterns": [
          "isdigit"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Summe initialisiert",
        "patterns": [
          "summe = 0",
          "summe=0"
        ],
        "points": 8
      },
      {
        "label": "Ziffernprüfung",
        "patterns": [
          "isdigit"
        ],
        "points": 8
      },
      {
        "label": "Zeichen konvertiert",
        "patterns": [
          "int(zeichen)"
        ],
        "points": 8
      },
      {
        "label": "Akkumulation",
        "patterns": [
          "+= int",
          "= summe +"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Untersuche jedes Zeichen einzeln.",
      "isdigit() erkennt Ziffern.",
      "Wandle nur erkannte Ziffern mit int() um."
    ],
    "solution": "text = input(\"Eingabe: \")\nsumme = 0\nfor zeichen in text:\n    if zeichen.isdigit():\n        summe += int(zeichen)\nprint(summe)",
    "explanation": "Die Typprüfung muss vor int() erfolgen, weil Buchstaben sonst einen ValueError erzeugen würden."
  },
  {
    "id": "CB-034",
    "category": "Strings",
    "difficulty": "mittel",
    "title": "Buchstabe e zählen",
    "scenario": "Lies einen Text ein und zähle unabhängig von Großschreibung, wie oft der Buchstabe e vorkommt.",
    "pseudocode": [
      "TEXT einlesen und klein schreiben",
      "ANZAHL von e bestimmen",
      "ANZAHL ausgeben"
    ],
    "requirements": [
      "Kleinschreibung",
      "count verwendet",
      "e gesucht"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "count verwendet",
        "patterns": [
          "count"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Kleinschreibung",
        "patterns": [
          "lower"
        ],
        "points": 11
      },
      {
        "label": "count verwendet",
        "patterns": [
          "count"
        ],
        "points": 11
      },
      {
        "label": "e gesucht",
        "patterns": [
          "\"e\"",
          "'e'"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Normalisiere den Text.",
      "count() zählt nicht überlappende Vorkommen.",
      "text.lower().count(\"e\")."
    ],
    "solution": "text = input(\"Text: \").lower()\nanzahl = text.count(\"e\")\nprint(anzahl)",
    "explanation": "lower() fasst E und e zusammen. count(\"e\") liefert direkt die Anzahl der Vorkommen."
  },
  {
    "id": "CB-035",
    "category": "Strings",
    "difficulty": "mittel",
    "title": "Nur enthaltene Ziffern ausgeben",
    "scenario": "Lies einen Text ein und gib nur die darin enthaltenen Ziffern in ursprünglicher Reihenfolge aus.",
    "pseudocode": [
      "TEXT einlesen",
      "ERGEBNIS = leerer String",
      "FÜR jedes ZEICHEN",
      "  WENN Ziffer: an ERGEBNIS anhängen",
      "ERGEBNIS ausgeben"
    ],
    "requirements": [
      "Leerer Ergebnisstring",
      "Ziffernprüfung",
      "Zeichen angehängt"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "isdigit verwendet",
        "patterns": [
          "isdigit"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Leerer Ergebnisstring",
        "patterns": [
          "ergebnis = \"\"",
          "ergebnis = ''"
        ],
        "points": 11
      },
      {
        "label": "Ziffernprüfung",
        "patterns": [
          "isdigit"
        ],
        "points": 11
      },
      {
        "label": "Zeichen angehängt",
        "patterns": [
          "+= zeichen",
          "= ergebnis + zeichen"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Das Ergebnis soll Text bleiben.",
      "Füge nur Ziffernzeichen an einen Ergebnisstring an.",
      "ergebnis += zeichen."
    ],
    "solution": "text = input(\"Text: \")\nergebnis = \"\"\nfor zeichen in text:\n    if zeichen.isdigit():\n        ergebnis += zeichen\nprint(ergebnis)",
    "explanation": "Da die ursprüngliche Reihenfolge erhalten bleiben soll, werden gültige Zeichen nacheinander an einen String angehängt."
  },
  {
    "id": "CB-036",
    "category": "Strings",
    "difficulty": "mittel",
    "title": "Palindrom prüfen",
    "scenario": "Lies einen Text ein, entferne äußere Leerzeichen, normalisiere die Schreibweise und prüfe, ob er vorwärts und rückwärts gleich ist.",
    "pseudocode": [
      "TEXT einlesen, bereinigen und klein schreiben",
      "RÜCKWÄRTS = TEXT rückwärts",
      "WENN TEXT = RÜCKWÄRTS",
      "  Palindrom",
      "SONST kein Palindrom"
    ],
    "requirements": [
      "Rückwärtsslicing",
      "Vergleich vorhanden",
      "Normalisierung"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Rückwärtsslicing",
        "patterns": [
          "[::-1]"
        ],
        "points": 11
      },
      {
        "label": "Vergleich vorhanden",
        "patterns": [
          "=="
        ],
        "points": 11
      },
      {
        "label": "Normalisierung",
        "patterns": [
          "strip",
          "lower"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Normalisiere vor dem Vergleich.",
      "Vergleiche den Text mit seiner Umkehrung.",
      "text == text[::-1]."
    ],
    "solution": "text = input(\"Text: \").strip().lower()\nif text == text[::-1]:\n    print(\"Palindrom\")\nelse:\n    print(\"kein Palindrom\")",
    "explanation": "Nach strip() und lower() werden äußere Leerzeichen und Schreibweise vereinheitlicht. Der direkte Vergleich entscheidet."
  },
  {
    "id": "CB-037",
    "category": "Strings",
    "difficulty": "mittel",
    "title": "Wörter zählen",
    "scenario": "Lies einen Satz ein und gib die Anzahl der enthaltenen Wörter aus. Mehrere Leerzeichen dürfen vorkommen.",
    "pseudocode": [
      "SATZ einlesen",
      "WÖRTER = SATZ aufteilen",
      "ANZAHL der WÖRTER ausgeben"
    ],
    "requirements": [
      "split ohne festen Trenner",
      "Länge bestimmt",
      "Ergebnis ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "split verwendet",
        "patterns": [
          "split"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "split ohne festen Trenner",
        "patterns": [
          "split()"
        ],
        "points": 11
      },
      {
        "label": "Länge bestimmt",
        "patterns": [
          "len"
        ],
        "points": 11
      },
      {
        "label": "Ergebnis ausgegeben",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "split() ohne Argument behandelt mehrere Leerzeichen.",
      "Erzeuge eine Wortliste.",
      "len(satz.split())."
    ],
    "solution": "satz = input(\"Satz: \")\nwoerter = satz.split()\nprint(len(woerter))",
    "explanation": "split() ohne Parameter fasst beliebig viele Leerraumzeichen als Trennung auf."
  },
  {
    "id": "CB-038",
    "category": "Strings",
    "difficulty": "schwer",
    "title": "Benutzernamen validieren",
    "scenario": "Lies einen Benutzernamen ein. Er ist gültig, wenn er 4 bis 12 Zeichen lang ist und nur Buchstaben oder Ziffern enthält.",
    "pseudocode": [
      "NAME einlesen",
      "LÄNGE zwischen 4 und 12",
      "UND NAME alphanumerisch",
      "gültig oder ungültig ausgeben"
    ],
    "requirements": [
      "Längenbereich",
      "Alphanumerisch geprüft",
      "and verwendet"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isalnum verwendet",
        "patterns": [
          "isalnum"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Längenbereich",
        "patterns": [
          "4 <= len",
          "<= 12"
        ],
        "points": 11
      },
      {
        "label": "Alphanumerisch geprüft",
        "patterns": [
          "isalnum"
        ],
        "points": 11
      },
      {
        "label": "and verwendet",
        "patterns": [
          " and "
        ],
        "points": 11
      }
    ],
    "hints": [
      "Prüfe Länge und erlaubte Zeichen.",
      "isalnum() erlaubt Buchstaben und Ziffern.",
      "4 <= len(name) <= 12 and name.isalnum()."
    ],
    "solution": "name = input(\"Benutzername: \").strip()\nif 4 <= len(name) <= 12 and name.isalnum():\n    print(\"gültig\")\nelse:\n    print(\"ungültig\")",
    "explanation": "Beide Anforderungen müssen gleichzeitig erfüllt sein, daher wird and verwendet."
  },
  {
    "id": "CB-039",
    "category": "Strings",
    "difficulty": "schwer",
    "title": "Wörter ersetzen und zählen",
    "scenario": "Lies einen Text ein. Zähle das Wort „Fehler“ und ersetze anschließend jedes Vorkommen durch „Störung“. Gib Anzahl und neuen Text aus.",
    "pseudocode": [
      "TEXT einlesen",
      "ANZAHL von Fehler bestimmen",
      "NEUER_TEXT = Fehler durch Störung ersetzen",
      "ANZAHL und NEUER_TEXT ausgeben"
    ],
    "requirements": [
      "Fehler gezählt",
      "Ersetzung vorhanden",
      "Störung verwendet"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "count verwendet",
        "patterns": [
          "count"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "replace verwendet",
        "patterns": [
          "replace"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Fehler gezählt",
        "patterns": [
          "count(\"Fehler\")",
          "count('Fehler')"
        ],
        "points": 11
      },
      {
        "label": "Ersetzung vorhanden",
        "patterns": [
          "replace"
        ],
        "points": 11
      },
      {
        "label": "Störung verwendet",
        "patterns": [
          "Störung"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Zähle vor oder unabhängig von der Ersetzung.",
      "replace() liefert einen neuen String.",
      "Speichere das Ergebnis von replace()."
    ],
    "solution": "text = input(\"Text: \")\nanzahl = text.count(\"Fehler\")\nneuer_text = text.replace(\"Fehler\", \"Störung\")\nprint(anzahl)\nprint(neuer_text)",
    "explanation": "Strings sind unveränderbar. replace() verändert text nicht direkt, sondern liefert einen neuen String."
  },
  {
    "id": "CB-040",
    "category": "Strings",
    "difficulty": "schwer",
    "title": "Dateinamen aus Pfad lesen",
    "scenario": "Lies einen Pfad mit Schrägstrichen ein und gib nur den letzten Bestandteil als Dateinamen aus.",
    "pseudocode": [
      "PFAD einlesen",
      "TEILE = PFAD an / aufteilen",
      "LETZTES Element ausgeben"
    ],
    "requirements": [
      "Trennung am Schrägstrich",
      "Letztes Element",
      "Ausgabe"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "split verwendet",
        "patterns": [
          "split"
        ],
        "points": 6,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 6,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Trennung am Schrägstrich",
        "patterns": [
          "split(\"/\")",
          "split('/')"
        ],
        "points": 11
      },
      {
        "label": "Letztes Element",
        "patterns": [
          "[-1]"
        ],
        "points": 11
      },
      {
        "label": "Ausgabe",
        "patterns": [
          "print"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Teile den Pfad an /.",
      "Der Dateiname steht am Ende der Liste.",
      "Verwende teile[-1]."
    ],
    "solution": "pfad = input(\"Pfad: \").strip()\nteile = pfad.split(\"/\")\nprint(teile[-1])",
    "explanation": "split(\"/\") erzeugt eine Liste der Pfadbestandteile. Der Index -1 bezeichnet das letzte Element."
  },
  {
    "id": "CB-041",
    "category": "IHK-Transfer",
    "difficulty": "mittel",
    "title": "Ticketpriorität validieren",
    "scenario": "Ein Support-Tool akzeptiert nur Prioritäten von 1 bis 5. Frage so lange erneut, bis ein gültiger Wert eingegeben wurde. Gib ihn danach aus.",
    "pseudocode": [
      "PRIORITÄT einlesen",
      "SOLANGE PRIORITÄT nicht zwischen 1 und 5",
      "  erneut einlesen",
      "PRIORITÄT ausgeben"
    ],
    "requirements": [
      "Bereich 1 bis 5",
      "Wiederholte Eingabe",
      "Negation oder ungültiger Bereich"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "not verwendet",
        "patterns": [
          "not"
        ],
        "points": 5,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 5,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Bereich 1 bis 5",
        "patterns": [
          "1 <= prioritaet <= 5"
        ],
        "points": 11
      },
      {
        "label": "Wiederholte Eingabe",
        "patterns": [
          "input",
          "input"
        ],
        "points": 11
      },
      {
        "label": "Negation oder ungültiger Bereich",
        "patterns": [
          "not",
          "< 1",
          "> 5"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Die Anzahl ungültiger Versuche ist unbekannt.",
      "Wiederhole, solange der Wert nicht im Bereich liegt.",
      "while not 1 <= prioritaet <= 5."
    ],
    "solution": "prioritaet = int(input(\"Priorität 1-5: \"))\nwhile not 1 <= prioritaet <= 5:\n    prioritaet = int(input(\"Ungültig, erneut: \"))\nprint(prioritaet)",
    "explanation": "Die while-Bedingung beschreibt den ungültigen Zustand. Erst ein gültiger Wert beendet die Schleife."
  },
  {
    "id": "CB-042",
    "category": "IHK-Transfer",
    "difficulty": "mittel",
    "title": "Gerätebestand auswerten",
    "scenario": "Lies Bestandszahlen ein, bis -1 eingegeben wird. Zähle, wie viele gültige Bestände 0 sind, und gib die Anzahl aus.",
    "pseudocode": [
      "ZÄHLER = 0",
      "WIEDERHOLE Eingabe",
      "WENN -1: ABBRUCH",
      "WENN 0: ZÄHLER erhöhen",
      "ZÄHLER ausgeben"
    ],
    "requirements": [
      "Abbruchwert -1",
      "Nullbestände gezählt",
      "Zähler initialisiert"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "break verwendet",
        "patterns": [
          "break"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Abbruchwert -1",
        "patterns": [
          "== -1",
          "==-1"
        ],
        "points": 11
      },
      {
        "label": "Nullbestände gezählt",
        "patterns": [
          "== 0",
          "==0",
          "+= 1"
        ],
        "points": 11
      },
      {
        "label": "Zähler initialisiert",
        "patterns": [
          "leer = 0",
          "leer=0"
        ],
        "points": 11
      }
    ],
    "hints": [
      "-1 ist Steuerwert und kein Bestand.",
      "Prüfe den Abbruch vor der Zählung.",
      "Erhöhe den Zähler nur bei bestand == 0."
    ],
    "solution": "leer = 0\nwhile True:\n    bestand = int(input(\"Bestand (-1 beendet): \"))\n    if bestand == -1:\n        break\n    if bestand == 0:\n        leer += 1\nprint(leer)",
    "explanation": "Die Reihenfolge verhindert, dass -1 fachlich verarbeitet wird. Ein separater Zähler erfasst nur leere Bestände."
  },
  {
    "id": "CB-043",
    "category": "IHK-Transfer",
    "difficulty": "mittel",
    "title": "IP-Adressbestandteile zählen",
    "scenario": "Lies eine IPv4-Adresse als Text ein. Prüfe zunächst, ob sie genau drei Punkte enthält, und gib eine passende Meldung aus.",
    "pseudocode": [
      "ADRESSE einlesen",
      "WENN Anzahl Punkte = 3",
      "  Format möglicherweise gültig",
      "SONST Format ungültig"
    ],
    "requirements": [
      "Punkte gezählt",
      "Vergleich mit 3",
      "Beide Meldungen"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "count verwendet",
        "patterns": [
          "count"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Punkte gezählt",
        "patterns": [
          "count(\".\")",
          "count('.')"
        ],
        "points": 11
      },
      {
        "label": "Vergleich mit 3",
        "patterns": [
          "== 3",
          "==3"
        ],
        "points": 11
      },
      {
        "label": "Beide Meldungen",
        "patterns": [
          "gültig",
          "ungültig"
        ],
        "points": 11
      }
    ],
    "hints": [
      "Hier ist nur eine erste Formatprüfung gefordert.",
      "Eine IPv4-Adresse enthält drei Punkte.",
      "adresse.count(\".\") == 3."
    ],
    "solution": "adresse = input(\"IPv4-Adresse: \").strip()\nif adresse.count(\".\") == 3:\n    print(\"Format möglicherweise gültig\")\nelse:\n    print(\"Format ungültig\")",
    "explanation": "Drei Punkte garantieren noch keine vollständig gültige IP-Adresse. Die Meldung „möglicherweise gültig“ berücksichtigt diese Einschränkung."
  },
  {
    "id": "CB-044",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Logzeilen auswerten",
    "scenario": "Lies fünf Logzeilen ein. Zähle unabhängig von Großschreibung, wie viele das Wort ERROR enthalten.",
    "pseudocode": [
      "ZÄHLER = 0",
      "FÜNF MAL",
      "  LOGZEILE einlesen und groß schreiben",
      "  WENN ERROR enthalten: ZÄHLER erhöhen",
      "ZÄHLER ausgeben"
    ],
    "requirements": [
      "Fünf Durchläufe",
      "Normalisierung",
      "ERROR-Prüfung",
      "Zähler erhöht"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "upper verwendet",
        "patterns": [
          "upper"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Fünf Durchläufe",
        "patterns": [
          "range(5)"
        ],
        "points": 8
      },
      {
        "label": "Normalisierung",
        "patterns": [
          "upper"
        ],
        "points": 8
      },
      {
        "label": "ERROR-Prüfung",
        "patterns": [
          "\"ERROR\" in",
          "'ERROR' in"
        ],
        "points": 8
      },
      {
        "label": "Zähler erhöht",
        "patterns": [
          "+= 1"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Die Anzahl der Zeilen ist bekannt.",
      "Normalisiere jede Zeile vor der Suche.",
      "Prüfe \"ERROR\" in zeile."
    ],
    "solution": "fehler = 0\nfor _ in range(5):\n    zeile = input(\"Logzeile: \").upper()\n    if \"ERROR\" in zeile:\n        fehler += 1\nprint(fehler)",
    "explanation": "Die for-Schleife liest exakt fünf Zeilen. upper() ermöglicht eine einheitliche Suche nach ERROR."
  },
  {
    "id": "CB-045",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Portnummer validieren",
    "scenario": "Lies eine Eingabe als Text. Akzeptiere sie nur, wenn sie ausschließlich aus Ziffern besteht und der Zahlenwert zwischen 1 und 65535 liegt.",
    "pseudocode": [
      "EINGABE als Text lesen",
      "WENN EINGABE nur Ziffern",
      "  PORT in Zahl umwandeln",
      "  WENN 1 bis 65535: gültig",
      "SONST ungültig"
    ],
    "requirements": [
      "isdigit vor int",
      "Portbereich",
      "Konvertierung nach Prüfung",
      "Verschachtelte Bedingung"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isdigit verwendet",
        "patterns": [
          "isdigit"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "int verwendet",
        "patterns": [
          "int"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "isdigit vor int",
        "patterns": [
          "isdigit"
        ],
        "points": 8
      },
      {
        "label": "Portbereich",
        "patterns": [
          "1 <= port <= 65535"
        ],
        "points": 8
      },
      {
        "label": "Konvertierung nach Prüfung",
        "patterns": [
          "int(eingabe)"
        ],
        "points": 8
      },
      {
        "label": "Verschachtelte Bedingung",
        "patterns": [
          "if",
          "if"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Vermeide int() vor der Zeichenprüfung.",
      "Prüfe zuerst isdigit().",
      "Prüfe danach den numerischen Bereich."
    ],
    "solution": "eingabe = input(\"Port: \").strip()\nif eingabe.isdigit():\n    port = int(eingabe)\n    if 1 <= port <= 65535:\n        print(\"gültig\")\n    else:\n        print(\"ungültig\")\nelse:\n    print(\"ungültig\")",
    "explanation": "Die Reihenfolge verhindert ValueError bei Texteingaben. Erst ein reiner Ziffernstring wird konvertiert und auf den Portbereich geprüft."
  },
  {
    "id": "CB-046",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Backupgrößen summieren",
    "scenario": "Lies Backupgrößen ein, bis 0 eingegeben wird. Negative Werte sollen ignoriert werden. Gib die Summe positiver Größen aus.",
    "pseudocode": [
      "SUMME = 0",
      "WIEDERHOLE Eingabe",
      "WENN 0: ABBRUCH",
      "WENN negativ: NÄCHSTER DURCHLAUF",
      "SUMME erhöhen",
      "SUMME ausgeben"
    ],
    "requirements": [
      "Abbruch bei 0",
      "Negative ignoriert",
      "Positive summiert"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "while verwendet",
        "patterns": [
          "while"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "break verwendet",
        "patterns": [
          "break"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "continue verwendet",
        "patterns": [
          "continue"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Abbruch bei 0",
        "patterns": [
          "== 0",
          "break"
        ],
        "points": 11
      },
      {
        "label": "Negative ignoriert",
        "patterns": [
          "< 0",
          "continue"
        ],
        "points": 11
      },
      {
        "label": "Positive summiert",
        "patterns": [
          "+= groesse",
          "= summe + groesse"
        ],
        "points": 11
      }
    ],
    "hints": [
      "0 beendet, negative Werte werden nur übersprungen.",
      "Prüfe break vor continue.",
      "Addiere erst nach beiden Prüfungen."
    ],
    "solution": "summe = 0\nwhile True:\n    groesse = float(input(\"Größe, 0 beendet: \"))\n    if groesse == 0:\n        break\n    if groesse < 0:\n        continue\n    summe += groesse\nprint(summe)",
    "explanation": "Die Reihenfolge trennt Abbruchwert, ungültige Werte und gültige Werte klar voneinander."
  },
  {
    "id": "CB-047",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Benutzernamenliste prüfen",
    "scenario": "Lies fünf Benutzernamen ein. Zähle Namen, die mindestens vier Zeichen lang und alphanumerisch sind.",
    "pseudocode": [
      "ZÄHLER = 0",
      "FÜNF MAL",
      "  NAME einlesen und bereinigen",
      "  WENN Länge >= 4 UND alphanumerisch",
      "    ZÄHLER erhöhen",
      "ZÄHLER ausgeben"
    ],
    "requirements": [
      "Fünf Namen",
      "Länge mindestens 4",
      "Alphanumerisch",
      "and-Verknüpfung"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isalnum verwendet",
        "patterns": [
          "isalnum"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Fünf Namen",
        "patterns": [
          "range(5)"
        ],
        "points": 8
      },
      {
        "label": "Länge mindestens 4",
        "patterns": [
          ">= 4",
          ">=4"
        ],
        "points": 8
      },
      {
        "label": "Alphanumerisch",
        "patterns": [
          "isalnum"
        ],
        "points": 8
      },
      {
        "label": "and-Verknüpfung",
        "patterns": [
          " and "
        ],
        "points": 8
      }
    ],
    "hints": [
      "Beide Gültigkeitsregeln müssen erfüllt sein.",
      "Verknüpfe Länge und isalnum() mit and.",
      "Zähle nur vollständig gültige Namen."
    ],
    "solution": "gueltig = 0\nfor _ in range(5):\n    name = input(\"Benutzername: \").strip()\n    if len(name) >= 4 and name.isalnum():\n        gueltig += 1\nprint(gueltig)",
    "explanation": "and stellt sicher, dass sowohl Mindestlänge als auch erlaubte Zeichen gelten."
  },
  {
    "id": "CB-048",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Kostenstelle gruppieren",
    "scenario": "Lies einen Code im Format AB-1234 ein. Prüfe, ob die Länge 7 beträgt, an Position 2 ein Bindestrich steht, die ersten zwei Zeichen Buchstaben und die letzten vier Ziffern sind.",
    "pseudocode": [
      "CODE einlesen und bereinigen",
      "WENN Länge = 7 UND Index 2 = -",
      "UND erste zwei alphabetisch",
      "UND letzte vier Ziffern",
      "gültig oder ungültig"
    ],
    "requirements": [
      "Länge 7",
      "Bindestrich Index 2",
      "Präfix geprüft",
      "Suffix geprüft"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "strip verwendet",
        "patterns": [
          "strip"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "len verwendet",
        "patterns": [
          "len"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "and verwendet",
        "patterns": [
          "and"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isalpha verwendet",
        "patterns": [
          "isalpha"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "isdigit verwendet",
        "patterns": [
          "isdigit"
        ],
        "points": 3,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 3,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Länge 7",
        "patterns": [
          "len(code) == 7"
        ],
        "points": 8
      },
      {
        "label": "Bindestrich Index 2",
        "patterns": [
          "code[2]"
        ],
        "points": 8
      },
      {
        "label": "Präfix geprüft",
        "patterns": [
          "code[:2]",
          "isalpha"
        ],
        "points": 8
      },
      {
        "label": "Suffix geprüft",
        "patterns": [
          "code[3:]",
          "isdigit"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Zerlege die Formatregeln in Teilbedingungen.",
      "Nutze Index und Slicing.",
      "Verknüpfe alle Prüfungen mit and."
    ],
    "solution": "code = input(\"Kostenstelle: \").strip()\nif len(code) == 7 and code[2] == \"-\" and code[:2].isalpha() and code[3:].isdigit():\n    print(\"gültig\")\nelse:\n    print(\"ungültig\")",
    "explanation": "Jede Formatregel wird separat geprüft. Nur wenn alle Teilbedingungen erfüllt sind, ist der Code gültig."
  },
  {
    "id": "CB-049",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Messwerte mit Grenzwert",
    "scenario": "Lies zehn Temperaturwerte ein. Gib jeden Wert über 70 aus und zähle die Überschreitungen.",
    "pseudocode": [
      "ZÄHLER = 0",
      "ZEHN MAL",
      "  TEMPERATUR einlesen",
      "  WENN TEMPERATUR > 70",
      "    Wert ausgeben und ZÄHLER erhöhen",
      "ZÄHLER ausgeben"
    ],
    "requirements": [
      "Zehn Durchläufe",
      "Grenzwert >70",
      "Zähler erhöht",
      "Wert im if ausgegeben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "float verwendet",
        "patterns": [
          "float"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "for verwendet",
        "patterns": [
          "for"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "range verwendet",
        "patterns": [
          "range"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Zehn Durchläufe",
        "patterns": [
          "range(10)"
        ],
        "points": 8
      },
      {
        "label": "Grenzwert >70",
        "patterns": [
          "> 70",
          ">70"
        ],
        "points": 8
      },
      {
        "label": "Zähler erhöht",
        "patterns": [
          "+= 1"
        ],
        "points": 8
      },
      {
        "label": "Wert im if ausgegeben",
        "patterns": [
          "print(temperatur)"
        ],
        "points": 8
      }
    ],
    "hints": [
      "„über 70“ schließt 70 nicht ein.",
      "Zählen und Ausgeben erfolgen nur im if-Block.",
      "Nutze temperatur > 70."
    ],
    "solution": "ueberschreitungen = 0\nfor _ in range(10):\n    temperatur = float(input(\"Temperatur: \"))\n    if temperatur > 70:\n        print(temperatur)\n        ueberschreitungen += 1\nprint(\"Anzahl:\", ueberschreitungen)",
    "explanation": "Der Vergleich > entspricht der Formulierung „über“. Der Zähler erfasst exakt die ausgegebenen Überschreitungen."
  },
  {
    "id": "CB-050",
    "category": "IHK-Transfer",
    "difficulty": "schwer",
    "title": "Passwortanalyse ohne Großschreibung",
    "scenario": "Lies einen Text ein. Prüfe ohne Beachtung der Groß-/Kleinschreibung, ob das Wort python vorkommt. Gib außerdem die Position des ersten Vorkommens aus, falls es vorhanden ist.",
    "pseudocode": [
      "TEXT einlesen",
      "NORMALISIERT = Text klein",
      "WENN python enthalten",
      "  POSITION bestimmen und ausgeben",
      "SONST nicht gefunden"
    ],
    "requirements": [
      "Normalisierung",
      "Enthaltenprüfung",
      "Position bestimmt",
      "Beide Ausgaben"
    ],
    "conceptChecks": [
      {
        "label": "input verwendet",
        "patterns": [
          "input"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "lower verwendet",
        "patterns": [
          "lower"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "if verwendet",
        "patterns": [
          "if"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "else verwendet",
        "patterns": [
          "else"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "find verwendet",
        "patterns": [
          "find"
        ],
        "points": 4,
        "type": "concept"
      },
      {
        "label": "print verwendet",
        "patterns": [
          "print"
        ],
        "points": 4,
        "type": "concept"
      }
    ],
    "logicChecks": [
      {
        "label": "Normalisierung",
        "patterns": [
          "lower"
        ],
        "points": 8
      },
      {
        "label": "Enthaltenprüfung",
        "patterns": [
          "\"python\" in",
          "'python' in"
        ],
        "points": 8
      },
      {
        "label": "Position bestimmt",
        "patterns": [
          "find"
        ],
        "points": 8
      },
      {
        "label": "Beide Ausgaben",
        "patterns": [
          "gefunden",
          "nicht gefunden"
        ],
        "points": 8
      }
    ],
    "hints": [
      "Normalisiere den Text, nicht nur den Suchbegriff.",
      "Prüfe zuerst, ob das Wort enthalten ist.",
      "Bestimme danach mit find() die Position."
    ],
    "solution": "text = input(\"Text: \")\nnormalisiert = text.lower()\nif \"python\" in normalisiert:\n    position = normalisiert.find(\"python\")\n    print(\"gefunden an Position\", position)\nelse:\n    print(\"nicht gefunden\")",
    "explanation": "lower() macht die Suche unabhängig von der Schreibweise. find() liefert den Startindex des ersten Vorkommens."
  }
];
