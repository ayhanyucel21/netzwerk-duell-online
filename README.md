# Netzwerk-Duell Online

## Lokal starten

1. Node.js 18 oder neuer installieren.
2. Im Projektordner ausführen:

```bash
npm install
npm start
```

3. Im Browser `http://localhost:3000` öffnen.
4. Spieler 1 erstellt einen Raum und sendet den fünfstelligen Raumcode an Spieler 2.
5. Für einen Test im selben Rechner zwei Browserfenster öffnen.

## Online bereitstellen

Die Anwendung benötigt einen Hostingdienst, der Node.js und WebSocket-Verbindungen unterstützt. Als Startbefehl wird `npm start` verwendet. Der Server liest den Port aus `process.env.PORT`.

## Architektur

- `server.js`: serverseitige Raum-, Zug-, Punkte- und Antwortlogik
- `public/index.html`: Spieloberfläche
- `public/app.js`: Socket.IO-Client und Darstellung
- `public/style.css`: responsives Design

## Hinweise

- Räume werden im Arbeitsspeicher gehalten.
- Bei einem Serverneustart gehen laufende Räume verloren.
- Für mehrere Serverinstanzen ist ein gemeinsamer Socket.IO-Adapter und ein persistenter Datenspeicher erforderlich.
