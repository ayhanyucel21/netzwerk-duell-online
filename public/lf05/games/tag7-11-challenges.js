window.LF05_GAME_PACKS={
  "datentyp-match": [
    {
      "q": "Welche Datenstruktur passt?",
      "scenario": "Eindeutige Benutzerrollen ohne Duplikate",
      "options": [
        "Liste",
        "Tupel",
        "Set",
        "Dictionary"
      ],
      "answer": "Set",
      "exp": "Sets speichern eindeutige Elemente."
    },
    {
      "q": "Welches Format passt?",
      "scenario": "Hierarchische API-Daten mit Arrays und Schlüssel-Wert-Paaren",
      "options": [
        "CSV",
        "JSON",
        "PNG",
        "TXT"
      ],
      "answer": "JSON",
      "exp": "JSON bildet verschachtelte Objekte und Arrays ab."
    },
    {
      "q": "Welche Datenstruktur passt?",
      "scenario": "Artikelnummer soll direkt auf Bestand verweisen",
      "options": [
        "Dictionary",
        "Set",
        "Tupel",
        "String"
      ],
      "answer": "Dictionary",
      "exp": "Dictionaries bilden Schlüssel auf Werte ab."
    },
    {
      "q": "Welche Struktur ist unveränderbar?",
      "scenario": "Feste Koordinaten sollen gespeichert werden",
      "options": [
        "Liste",
        "Set",
        "Tupel",
        "Dictionary"
      ],
      "answer": "Tupel",
      "exp": "Tupel sind geordnet und immutable."
    },
    {
      "q": "Welche Struktur passt?",
      "scenario": "Geordnete Werte, die später ergänzt werden",
      "options": [
        "Liste",
        "Tupel",
        "Set",
        "Dictionary"
      ],
      "answer": "Liste",
      "exp": "Listen sind geordnet und mutable."
    },
    {
      "q": "Welches Format passt?",
      "scenario": "Einfache tabellarische Exportdaten",
      "options": [
        "CSV",
        "JSON",
        "XML",
        "Set"
      ],
      "answer": "CSV",
      "exp": "CSV eignet sich für flache Tabellen."
    },
    {
      "q": "Welche Struktur passt?",
      "scenario": "Feste RGB-Koordinaten sollen unverändert bleiben",
      "options": [
        "Tupel",
        "Liste",
        "Dictionary",
        "Set"
      ],
      "answer": "Tupel",
      "exp": "Tupel sind immutable."
    },
    {
      "q": "Welche Struktur passt?",
      "scenario": "Geordnete Werte, die später ergänzt werden",
      "options": [
        "Liste",
        "Tupel",
        "Set",
        "Dictionary"
      ],
      "answer": "Liste",
      "exp": "Listen sind geordnet und mutable."
    },
    {
      "q": "Welches Format passt?",
      "scenario": "Einfache tabellarische Exportdaten",
      "options": [
        "CSV",
        "JSON",
        "XML",
        "Set"
      ],
      "answer": "CSV",
      "exp": "CSV eignet sich für flache Tabellen."
    },
    {
      "q": "Welche Struktur passt?",
      "scenario": "Feste RGB-Koordinaten sollen unverändert bleiben",
      "options": [
        "Tupel",
        "Liste",
        "Dictionary",
        "Set"
      ],
      "answer": "Tupel",
      "exp": "Tupel sind immutable."
    }
  ],
  "string-builder": [
    {
      "q": "Baue den Dateipfad korrekt.",
      "scenario": "Logdatei im Unterordner logs öffnen",
      "options": [
        "\"logs/server.log\"",
        "\"logs\" + \"server.log\"",
        "logs/server.log",
        "\"logs\\nserver.log\""
      ],
      "answer": "\"logs/server.log\"",
      "exp": "Ein relativer Pfad kann mit Schrägstrich angegeben werden."
    },
    {
      "q": "Welche Zeichenkette ist gültiges JSON?",
      "scenario": "Ein Serverstatus soll übertragen werden",
      "options": [
        "{\"status\":\"online\"}",
        "{status=online}",
        "[status:online]",
        "status -> online"
      ],
      "answer": "{\"status\":\"online\"}",
      "exp": "JSON-Schlüssel und Stringwerte stehen in doppelten Anführungszeichen."
    },
    {
      "q": "Welche SQL-Bedingung ist korrekt?",
      "scenario": "Nur offene Tickets auswählen",
      "options": [
        "WHERE Status = 'offen'",
        "IF Status == offen",
        "FILTER Status offen",
        "HAVING Status := offen"
      ],
      "answer": "WHERE Status = 'offen'",
      "exp": "WHERE filtert Zeilen vor Gruppierungen."
    }
  ],
  "debugging-challenge": [
    {
      "q": "Welcher Fehler ist zu erwarten?",
      "scenario": "int(\"abc\") wird ausgeführt.",
      "options": [
        "ValueError",
        "TypeError",
        "KeyError",
        "FileNotFoundError"
      ],
      "answer": "ValueError",
      "exp": "Der Text kann nicht als Ganzzahl interpretiert werden."
    },
    {
      "q": "Warum schlägt der Zugriff fehl?",
      "scenario": "open(\"missing.txt\", \"r\") bei fehlender Datei",
      "options": [
        "FileNotFoundError",
        "IndexError",
        "ZeroDivisionError",
        "NameError"
      ],
      "answer": "FileNotFoundError",
      "exp": "Der Lesemodus setzt eine vorhandene Datei voraus."
    },
    {
      "q": "Was ist der Modellierungsfehler?",
      "scenario": "Kunde.Telefone enthält mehrere Nummern in einer Zelle.",
      "options": [
        "1NF verletzt",
        "Primärschlüssel fehlt zwingend",
        "JOIN ist falsch",
        "Transaktion fehlt"
      ],
      "answer": "1NF verletzt",
      "exp": "Die erste Normalform verlangt atomare Werte."
    },
    {
      "q": "Was ist am SQL falsch?",
      "scenario": "SELECT * Kunde WHERE Status = \"aktiv\"",
      "options": [
        "FROM fehlt",
        "WHERE fehlt",
        "SELECT fehlt",
        "ORDER BY ist zwingend"
      ],
      "answer": "FROM fehlt",
      "exp": "Die Tabelle wird mit FROM angegeben."
    },
    {
      "q": "Warum ist die Ausgabe falsch?",
      "scenario": "while-Schleife verändert den Kontrollwert nicht.",
      "options": [
        "Endlosschleife",
        "ValueError",
        "FileNotFoundError",
        "JOIN-Fehler"
      ],
      "answer": "Endlosschleife",
      "exp": "Die Abbruchbedingung wird nie erreicht."
    },
    {
      "q": "Welche Exception?",
      "scenario": "daten[\"x\"] bei fehlendem Dictionary-Schlüssel",
      "options": [
        "KeyError",
        "ValueError",
        "TypeError",
        "PermissionError"
      ],
      "answer": "KeyError",
      "exp": "Direkter Zugriff auf einen fehlenden Schlüssel löst KeyError aus."
    },
    {
      "q": "Welche SQL-Klausel ist falsch eingesetzt?",
      "scenario": "WHERE COUNT(*) > 2 nach GROUP BY",
      "options": [
        "WHERE muss HAVING sein",
        "GROUP BY muss DROP sein",
        "COUNT ist verboten",
        "SELECT fehlt immer"
      ],
      "answer": "WHERE muss HAVING sein",
      "exp": "Aggregierte Gruppen werden mit HAVING gefiltert."
    },
    {
      "q": "Warum ist die Ausgabe falsch?",
      "scenario": "while-Schleife verändert den Kontrollwert nicht.",
      "options": [
        "Endlosschleife",
        "ValueError",
        "FileNotFoundError",
        "JOIN-Fehler"
      ],
      "answer": "Endlosschleife",
      "exp": "Die Abbruchbedingung wird nie erreicht."
    },
    {
      "q": "Welche Exception?",
      "scenario": "daten[\"x\"] bei fehlendem Dictionary-Schlüssel",
      "options": [
        "KeyError",
        "ValueError",
        "TypeError",
        "PermissionError"
      ],
      "answer": "KeyError",
      "exp": "Direkter Zugriff auf einen fehlenden Schlüssel löst KeyError aus."
    },
    {
      "q": "Welche SQL-Klausel ist falsch eingesetzt?",
      "scenario": "WHERE COUNT(*) > 2 nach GROUP BY",
      "options": [
        "WHERE muss HAVING sein",
        "GROUP BY muss DROP sein",
        "COUNT ist verboten",
        "SELECT fehlt immer"
      ],
      "answer": "WHERE muss HAVING sein",
      "exp": "Aggregierte Gruppen werden mit HAVING gefiltert."
    }
  ],
  "schleifen-sortieren": [
    {
      "q": "Sortiere den robusten Dateiablauf.",
      "steps": [
        "Datei mit with open öffnen",
        "Inhalt lesen",
        "Daten validieren",
        "Daten verarbeiten",
        "Ergebnis speichern"
      ],
      "exp": "Ressource öffnen, lesen, prüfen, verarbeiten und speichern."
    },
    {
      "q": "Sortiere den Funktionstest.",
      "steps": [
        "Anforderung bestimmen",
        "Äquivalenzklassen bilden",
        "Grenzwerte wählen",
        "Testfälle ausführen",
        "Ist/Soll vergleichen"
      ],
      "exp": "Testfälle werden aus Anforderungen abgeleitet."
    },
    {
      "q": "Sortiere eine SQL-Abfrage logisch.",
      "steps": [
        "FROM / JOIN",
        "WHERE",
        "GROUP BY",
        "HAVING",
        "ORDER BY"
      ],
      "exp": "Diese Reihenfolge unterstützt das Verständnis der Verarbeitung."
    },
    {
      "q": "Sortiere try/except-Ablauf.",
      "steps": [
        "try starten",
        "Datei öffnen",
        "Daten lesen",
        "except bei Fehler",
        "finally für Abschluss"
      ],
      "exp": "Fehlerbehandlung trennt Normal- und Fehlerpfad."
    },
    {
      "q": "Sortiere Datenbankentwicklung.",
      "steps": [
        "Anforderungen",
        "ER-Modell",
        "Relationales Schema",
        "Normalisierung",
        "SQL-Umsetzung"
      ],
      "exp": "Vom fachlichen Modell geht es zur technischen Umsetzung."
    },
    {
      "q": "Sortiere try/except-Ablauf.",
      "steps": [
        "try starten",
        "Datei öffnen",
        "Daten lesen",
        "except bei Fehler",
        "finally für Abschluss"
      ],
      "exp": "Fehlerbehandlung trennt Normal- und Fehlerpfad."
    },
    {
      "q": "Sortiere Datenbankentwicklung.",
      "steps": [
        "Anforderungen",
        "ER-Modell",
        "Relationales Schema",
        "Normalisierung",
        "SQL-Umsetzung"
      ],
      "exp": "Vom fachlichen Modell geht es zur technischen Umsetzung."
    }
  ],
  "algorithmus-puzzle": [
    {
      "q": "JSON-Datei sicher laden",
      "steps": [
        "try starten",
        "Datei mit with open öffnen",
        "json.load ausführen",
        "FileNotFoundError behandeln",
        "Defaultwert setzen"
      ],
      "exp": "Fehlerpfade werden kontrolliert behandelt."
    },
    {
      "q": "ER-Modell entwickeln",
      "steps": [
        "Anforderungen lesen",
        "Entitäten bestimmen",
        "Attribute zuordnen",
        "Beziehungen bestimmen",
        "Kardinalitäten prüfen"
      ],
      "exp": "Erst fachlich modellieren, dann technisch umsetzen."
    },
    {
      "q": "Transaktion durchführen",
      "steps": [
        "Transaktion starten",
        "Belastung ausführen",
        "Gutschrift ausführen",
        "Ergebnis prüfen",
        "COMMIT oder ROLLBACK"
      ],
      "exp": "Zusammengehörige Änderungen werden atomar behandelt."
    },
    {
      "q": "Normalisierung vorbereiten",
      "steps": [
        "Redundanzen erkennen",
        "Schlüssel bestimmen",
        "1NF prüfen",
        "2NF prüfen",
        "3NF prüfen"
      ],
      "exp": "Normalformen werden schrittweise geprüft."
    },
    {
      "q": "Dateiverarbeitung testen",
      "steps": [
        "Testdaten festlegen",
        "Datei laden",
        "Inhalt validieren",
        "Ergebnis vergleichen",
        "Fehlerfall dokumentieren"
      ],
      "exp": "Auch Datei-I/O benötigt reproduzierbare Testfälle."
    },
    {
      "q": "Normalisierung vorbereiten",
      "steps": [
        "Redundanzen erkennen",
        "Schlüssel bestimmen",
        "1NF prüfen",
        "2NF prüfen",
        "3NF prüfen"
      ],
      "exp": "Normalformen werden schrittweise geprüft."
    },
    {
      "q": "Dateiverarbeitung testen",
      "steps": [
        "Testdaten festlegen",
        "Datei laden",
        "Inhalt validieren",
        "Ergebnis vergleichen",
        "Fehlerfall dokumentieren"
      ],
      "exp": "Auch Datei-I/O benötigt reproduzierbare Testfälle."
    }
  ],
  "code-builder": [
    {
      "q": "Schreibe eine Funktion mit Defaultwert.",
      "scenario": "Preis inklusive Mehrwertsteuer berechnen.",
      "answer": "def brutto(preis, satz=0.19):\n    return preis * (1 + satz)",
      "exp": "Parameter und return schaffen eine testbare Schnittstelle."
    },
    {
      "q": "Lies eine Textdatei sicher.",
      "scenario": "UTF-8-Datei vollständig lesen.",
      "answer": "with open(\"daten.txt\", \"r\", encoding=\"utf-8\") as f:\n    inhalt = f.read()",
      "exp": "Der Kontextmanager schließt die Datei zuverlässig."
    },
    {
      "q": "Fange eine fehlende Datei ab.",
      "scenario": "Bei fehlender Datei soll eine leere Liste entstehen.",
      "answer": "try:\n    with open(\"daten.txt\", \"r\") as f:\n        daten = f.readlines()\nexcept FileNotFoundError:\n    daten = []",
      "exp": "Die erwartete Exception wird spezifisch behandelt."
    },
    {
      "q": "Schreibe eine JOIN-Abfrage.",
      "scenario": "Kundennamen und Bestellstatus verbinden.",
      "answer": "SELECT k.Name, b.Status\nFROM Kunde k\nJOIN Bestellung b ON b.KundeID = k.KundeID;",
      "exp": "JOIN verbindet die Tabellen über den Fremdschlüssel."
    },
    {
      "q": "Filtere offene Bestellungen.",
      "scenario": "SQL-Abfrage mit WHERE.",
      "answer": "SELECT * FROM Bestellung\nWHERE Status = 'offen';",
      "exp": "WHERE filtert Zeilen."
    },
    {
      "q": "Gruppiere Bestellungen pro Kunde.",
      "scenario": "Anzahl je Kunde bestimmen.",
      "answer": "SELECT KundeID, COUNT(*)\nFROM Bestellung\nGROUP BY KundeID;",
      "exp": "GROUP BY bildet Kundengruppen."
    },
    {
      "q": "Behandle ValueError.",
      "scenario": "Eine Nutzereingabe soll in int konvertiert werden.",
      "answer": "try:\n    zahl = int(input())\nexcept ValueError:\n    print(\"Ungültige Zahl\")",
      "exp": "ValueError behandelt ungültige numerische Texteingaben."
    },
    {
      "q": "Filtere offene Bestellungen.",
      "scenario": "SQL-Abfrage mit WHERE.",
      "answer": "SELECT * FROM Bestellung\nWHERE Status = 'offen';",
      "exp": "WHERE filtert Zeilen."
    },
    {
      "q": "Gruppiere Bestellungen pro Kunde.",
      "scenario": "Anzahl je Kunde bestimmen.",
      "answer": "SELECT KundeID, COUNT(*)\nFROM Bestellung\nGROUP BY KundeID;",
      "exp": "GROUP BY bildet Kundengruppen."
    },
    {
      "q": "Behandle ValueError.",
      "scenario": "Eine Nutzereingabe soll in int konvertiert werden.",
      "answer": "try:\n    zahl = int(input())\nexcept ValueError:\n    print(\"Ungültige Zahl\")",
      "exp": "ValueError behandelt ungültige numerische Texteingaben."
    }
  ]
};
