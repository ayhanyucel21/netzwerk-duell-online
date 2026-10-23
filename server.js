'use strict';

const path = require('path');
const crypto = require('crypto');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  transports: ['websocket', 'polling']
});

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const ROOM_TTL_MS = 6 * 60 * 60 * 1000;
const DISCONNECT_GRACE_MS = 90 * 1000;
const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const ALLOWED_AVATARS = new Set([
  'python-bot',
  'code-fox',
  'linux-penguin',
  'logic-lion',
  'debug-owl',
  'bug-hunter'
]);

const DUEL_QUESTIONS = [
  { mode:'Quiz', scenario:'Eine Supportanwendung verarbeitet eine Portnummer.', question:'Welcher Datentyp passt für den Wert 443?', code:'', options:['int','float','str','bool'], answer:'int', explanation:'443 ist eine ganze Zahl.' },
  { mode:'Debugging', scenario:'Ein Textwert wird mit einer Zahl addiert.', question:'Welcher Fehler tritt auf?', code:'zahl = "5"\nprint(zahl + 2)', options:['TypeError','ValueError','NameError','Kein Fehler'], answer:'TypeError', explanation:'str und int können nicht direkt addiert werden.' },
  { mode:'Datentyp Match', scenario:'Eine Benutzereingabe wird ausgewertet.', question:'Welchen Rückgabetyp besitzt input() standardmäßig?', code:'name = input("Name: ")', options:['str','int','float','bool'], answer:'str', explanation:'input() liefert immer eine Zeichenkette.' },
  { mode:'Code Builder', scenario:'Eine Eingabe soll in eine Ganzzahl umgewandelt werden.', question:'Welche Zeile ist korrekt?', code:'', options:['zahl = int(input("Zahl: "))','zahl = input(int)','int = zahl(input())','zahl = str(input())'], answer:'zahl = int(input("Zahl: "))', explanation:'Die Texteingabe wird mit int() konvertiert.' },
  { mode:'Quiz', scenario:'Eine Schleife soll fünfmal laufen.', question:'Welcher Ausdruck passt?', code:'', options:['range(5)','range(1)','while False','break(5)'], answer:'range(5)', explanation:'range(5) erzeugt 0 bis 4.' },
  { mode:'Codeanalyse', scenario:'Der Code erhöht x dreimal.', question:'Welche Ausgabe erscheint?', code:'x = 5\nfor i in range(3):\n    x += 1\nprint(x)', options:['8','7','5','9'], answer:'8', explanation:'x wird dreimal um 1 erhöht.' },
  { mode:'Debugging', scenario:'Eine if-Anweisung ist unvollständig.', question:'Welcher Fehler liegt vor?', code:'if alter >= 18\n    print("OK")', options:['SyntaxError','TypeError','ValueError','NameError'], answer:'SyntaxError', explanation:'Der Doppelpunkt fehlt.' },
  { mode:'Quiz', scenario:'Eine Datei soll auf .csv geprüft werden.', question:'Welcher Ausdruck berücksichtigt Großschreibung?', code:'', options:['datei.lower().endswith(".csv")','datei == ".csv"','int(datei)','datei.strip("csv")'], answer:'datei.lower().endswith(".csv")', explanation:'lower() normalisiert die Schreibweise.' },
  { mode:'Datentyp Match', scenario:'Ein Vergleich wird ausgeführt.', question:'Welchen Datentyp liefert 5 > 3?', code:'', options:['bool','int','float','str'], answer:'bool', explanation:'Vergleiche liefern True oder False.' },
  { mode:'Codeanalyse', scenario:'continue überspringt einen Durchlauf.', question:'Welche Ausgabe erscheint?', code:'for i in range(4):\n    if i == 2:\n        continue\n    print(i, end=" ")', options:['0 1 3','0 1 2 3','1 3','0 1'], answer:'0 1 3', explanation:'Bei i=2 wird die Ausgabe übersprungen.' },
  { mode:'Quiz', scenario:'Ein Passwort muss mindestens acht Zeichen haben.', question:'Welche Bedingung passt?', code:'', options:['len(pw) >= 8','len(pw) > 8','pw == 8','len(pw) <= 8'], answer:'len(pw) >= 8', explanation:'Der Grenzwert 8 muss eingeschlossen werden.' },
  { mode:'Debugging', scenario:'Eine unbekannte Variable wird ausgegeben.', question:'Welcher Fehler tritt auf?', code:'print(kundenname)', options:['NameError','IndexError','ValueError','TypeError'], answer:'NameError', explanation:'kundenname wurde nicht definiert.' },
  { mode:'Code Builder', scenario:'Ein Benutzername soll normalisiert werden.', question:'Welche Zeile entfernt Leerzeichen und wandelt in Kleinbuchstaben um?', code:'', options:['user = input().strip().lower()','user = int(input())','user.lower = input','strip(user).int()'], answer:'user = input().strip().lower()', explanation:'Methoden können verkettet werden.' },
  { mode:'Codeanalyse', scenario:'Ein String wird ausgeschnitten.', question:'Welche Ausgabe erscheint?', code:'text = "Python"\nprint(text[1:4])', options:['yth','Pyt','ytho','tho'], answer:'yth', explanation:'Endindex 4 ist ausgeschlossen.' },
  { mode:'Quiz', scenario:'Eine Suche soll beim Treffer enden.', question:'Welche Anweisung passt?', code:'', options:['break','continue','pass','elif'], answer:'break', explanation:'break beendet die Schleife.' },
  { mode:'Debugging', scenario:'Ein ungültiger Text wird konvertiert.', question:'Welcher Fehler tritt auf?', code:'anzahl = int("zwölf")', options:['ValueError','TypeError','NameError','Kein Fehler'], answer:'ValueError', explanation:'Der Text ist keine gültige Ganzzahl.' },
  { mode:'Datentyp Match', scenario:'Ein Wert wird umgewandelt.', question:'Welchen Typ hat str(42)?', code:'', options:['str','int','float','bool'], answer:'str', explanation:'str() erzeugt Text.' },
  { mode:'Codeanalyse', scenario:'Eine while-Schleife verdoppelt x.', question:'Welche Ausgabe erscheint?', code:'x = 1\nwhile x < 8:\n    x *= 2\nprint(x)', options:['8','4','16','7'], answer:'8', explanation:'1, 2, 4, 8; danach endet die Schleife.' },
  { mode:'Quiz', scenario:'Mehrere bekannte Server sollen geprüft werden.', question:'Welche Schleife passt am besten?', code:'', options:['for','if','elif','else'], answer:'for', explanation:'for durchläuft eine bekannte Folge.' },
  { mode:'Debugging', scenario:'Der Schleifenzähler wird nie verändert.', question:'Was ist die Folge?', code:'x = 1\nwhile x < 5:\n    print(x)', options:['Endlosschleife','ValueError','SyntaxError','IndexError'], answer:'Endlosschleife', explanation:'Die Bedingung bleibt dauerhaft wahr.' }
];

function shuffledQuestionIndexes() {
  const indexes = DUEL_QUESTIONS.map((_, index) => index);
  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(i + 1);
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes.slice(0, 15);
}

function publicQuestion(room) {
  const game = room.game;
  if (!game || game.round >= game.totalRounds) return null;
  const source = DUEL_QUESTIONS[game.questionIndexes[game.round]];
  return {
    round: game.round,
    totalRounds: game.totalRounds,
    mode: source.mode,
    scenario: source.scenario,
    question: source.question,
    code: source.code,
    options: source.options,
    deadline: game.deadline,
    answeredPlayerIds: [...game.answers.keys()]
  };
}

function clearRoundTimer(room) {
  if (room.game?.timer) clearTimeout(room.game.timer);
  if (room.game) room.game.timer = null;
}

function emitRound(room) {
  const question = publicQuestion(room);
  if (question) io.to(room.code).emit('python-round', question);
}

function startRound(room) {
  if (!room.game || room.status !== 'playing') return;
  if (room.game.round >= room.game.totalRounds) return finishServerGame(room);
  room.game.answers = new Map();
  room.game.deadline = Date.now() + 20000;
  clearRoundTimer(room);
  room.game.timer = setTimeout(() => closeRound(room), 20250);
  emitRound(room);
}

function closeRound(room) {
  if (!room.game || room.game.roundClosing || room.status !== 'playing') return;
  room.game.roundClosing = true;
  clearRoundTimer(room);
  const source = DUEL_QUESTIONS[room.game.questionIndexes[room.game.round]];
  io.to(room.code).emit('python-round-result', {
    round: room.game.round,
    correctAnswer: source.answer,
    explanation: source.explanation,
    players: room.players.map(publicPlayer)
  });
  setTimeout(() => {
    if (!rooms.has(room.code) || room.status !== 'playing') return;
    room.game.round += 1;
    room.game.roundClosing = false;
    startRound(room);
  }, 2600);
}

function finishServerGame(room) {
  clearRoundTimer(room);
  room.status = 'finished';
  room.started = false;
  room.finishedAt = Date.now();
  const ranking = [...room.players].sort((a,b) =>
    b.score - a.score || b.right - a.right || a.wrong - b.wrong
  ).map(publicPlayer);
  emitRoom(room);
  io.to(room.code).emit('python-game-finished', { ranking, roomCode: room.code });
}

app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));
app.use(express.static(PUBLIC_DIR));

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'LF05 Python-Duell',
    version: '1.0.0',
    rooms: rooms.size,
    connectedSockets: io.engine.clientsCount
  });
});

const rooms = new Map();
const disconnectTimers = new Map();

function cleanName(value) {
  const name = String(value || '').trim().replace(/\s+/g, ' ').slice(0, 20);
  return name || 'Spieler';
}

function cleanAvatar(value) {
  const avatar = String(value || '');
  return ALLOWED_AVATARS.has(avatar) ? avatar : 'python-bot';
}

function cleanRoomCode(value) {
  return String(value || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}

function cleanMaxPlayers(value) {
  const number = Number(value);
  return [2, 3, 4].includes(number) ? number : 2;
}

function createPlayerId() {
  return crypto.randomUUID();
}

function generateRoomCode() {
  let code;
  do {
    code = 'PY';
    for (let i = 0; i < 4; i += 1) {
      code += ROOM_CODE_CHARS[Math.floor(Math.random() * ROOM_CODE_CHARS.length)];
    }
  } while (rooms.has(code));
  return code;
}

function publicPlayer(player) {
  return {
    id: player.socketId,
    playerId: player.playerId,
    name: player.name,
    avatar: player.avatar,
    score: player.score,
    right: player.right,
    wrong: player.wrong,
    ready: player.ready,
    host: player.host,
    connected: player.connected
  };
}

function publicRoom(room) {
  return {
    code: room.code,
    roomCode: room.code,
    maxPlayers: room.maxPlayers,
    hostId: room.hostSocketId,
    hostPlayerId: room.hostPlayerId,
    started: room.started,
    status: room.status,
    players: room.players.map(publicPlayer)
  };
}

function emitRoom(room) {
  room.updatedAt = Date.now();
  io.to(room.code).emit('room-updated', publicRoom(room));
}

function findPlayerBySocket(room, socketId) {
  return room.players.find(player => player.socketId === socketId);
}

function findPlayerById(room, playerId) {
  return room.players.find(player => player.playerId === playerId);
}

function findRoomOfSocket(socketId) {
  for (const room of rooms.values()) {
    const player = findPlayerBySocket(room, socketId);
    if (player) return { room, player };
  }
  return null;
}

function clearDisconnectTimer(playerId) {
  const timer = disconnectTimers.get(playerId);
  if (timer) clearTimeout(timer);
  disconnectTimers.delete(playerId);
}

function assignNewHost(room) {
  room.players.forEach(player => { player.host = false; });
  const nextHost = room.players.find(player => player.connected) || room.players[0];
  if (!nextHost) {
    room.hostPlayerId = null;
    room.hostSocketId = null;
    return;
  }
  nextHost.host = true;
  room.hostPlayerId = nextHost.playerId;
  room.hostSocketId = nextHost.socketId;
}

function removePlayer(room, playerId, reason = 'left') {
  clearDisconnectTimer(playerId);
  const leaving = findPlayerById(room, playerId);
  if (!leaving) return;

  room.players = room.players.filter(player => player.playerId !== playerId);

  if (room.players.length === 0) {
    rooms.delete(room.code);
    return;
  }

  if (room.hostPlayerId === playerId) assignNewHost(room);
  emitRoom(room);
  io.to(room.code).emit('player-left', {
    playerId,
    name: leaving.name,
    reason
  });
}

function resolveRoomAndPlayer(socket, roomCode) {
  const code = cleanRoomCode(roomCode);
  const room = rooms.get(code);
  if (!room) return { error: 'Raum nicht gefunden.' };
  const player = findPlayerBySocket(room, socket.id);
  if (!player) return { error: 'Spieler ist diesem Raum nicht zugeordnet.' };
  return { room, player };
}

io.on('connection', socket => {
  socket.on('python-create-room', (data = {}, callback = () => {}) => {
    try {
      const roomCode = generateRoomCode();
      const playerId = createPlayerId();
      const player = {
        playerId,
        socketId: socket.id,
        name: cleanName(data.name),
        avatar: cleanAvatar(data.avatar),
        score: 0,
        right: 0,
        wrong: 0,
        ready: false,
        host: true,
        connected: true
      };

      const room = {
        code: roomCode,
        maxPlayers: cleanMaxPlayers(data.maxPlayers),
        hostPlayerId: playerId,
        hostSocketId: socket.id,
        started: false,
        status: 'lobby',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        players: [player]
      };

      rooms.set(roomCode, room);
      socket.join(roomCode);
      socket.data.pythonRoomCode = roomCode;
      socket.data.pythonPlayerId = playerId;

      callback({
        ok: true,
        roomCode,
        playerIndex: 0,
        playerId,
        host: true
      });
      emitRoom(room);
    } catch (error) {
      console.error('python-create-room:', error);
      callback({ ok: false, message: 'Raum konnte nicht erstellt werden.' });
    }
  });

  socket.on('python-join-room', (data = {}, callback = () => {}) => {
    try {
      const roomCode = cleanRoomCode(data.roomCode);
      const room = rooms.get(roomCode);
      if (!room) return callback({ ok: false, message: 'Raum nicht gefunden.' });
      if (room.started) return callback({ ok: false, message: 'Das Spiel läuft bereits.' });
      if (room.players.length >= room.maxPlayers) return callback({ ok: false, message: 'Der Raum ist voll.' });

      const playerId = createPlayerId();
      const player = {
        playerId,
        socketId: socket.id,
        name: cleanName(data.name),
        avatar: cleanAvatar(data.avatar),
        score: 0,
        right: 0,
        wrong: 0,
        ready: false,
        host: false,
        connected: true
      };

      room.players.push(player);
      socket.join(roomCode);
      socket.data.pythonRoomCode = roomCode;
      socket.data.pythonPlayerId = playerId;

      callback({
        ok: true,
        roomCode,
        playerIndex: room.players.length - 1,
        playerId,
        host: false
      });
      emitRoom(room);
    } catch (error) {
      console.error('python-join-room:', error);
      callback({ ok: false, message: 'Beitritt nicht möglich.' });
    }
  });

  socket.on('python-rejoin-room', (data = {}, callback = () => {}) => {
    try {
      const roomCode = cleanRoomCode(data.roomCode);
      const room = rooms.get(roomCode);
      if (!room) return callback({ ok: false, message: 'Raum existiert nicht mehr.' });

      let player = data.playerId ? findPlayerById(room, String(data.playerId)) : null;

      // Compatibility fallback for sessions created before playerId was stored.
      if (!player && data.name) {
        player = room.players.find(item => !item.connected && item.name === cleanName(data.name));
      }

      if (!player) return callback({ ok: false, message: 'Spieler konnte nicht wiederhergestellt werden.' });

      clearDisconnectTimer(player.playerId);
      player.socketId = socket.id;
      player.connected = true;
      room.updatedAt = Date.now();

      if (room.hostPlayerId === player.playerId) room.hostSocketId = socket.id;

      socket.join(roomCode);
      socket.data.pythonRoomCode = roomCode;
      socket.data.pythonPlayerId = player.playerId;

      const playerIndex = room.players.findIndex(item => item.playerId === player.playerId);
      callback({
        ok: true,
        roomCode,
        playerIndex,
        playerId: player.playerId,
        host: room.hostPlayerId === player.playerId,
        started: room.started
      });
      emitRoom(room);

      if (room.started) {
        socket.emit('game-started', publicRoom(room));
        const question = publicQuestion(room);
        if (question) socket.emit('python-round', question);
      }
    } catch (error) {
      console.error('python-rejoin-room:', error);
      callback({ ok: false, message: 'Wiederverbindung fehlgeschlagen.' });
    }
  });

  socket.on('python-player-ready', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    if (result.room.started) return callback({ ok: false, message: 'Das Spiel wurde bereits gestartet.' });

    result.player.ready = Boolean(data.ready);
    emitRoom(result.room);
    callback({ ok: true, ready: result.player.ready });
  });

  socket.on('python-start-game', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    const { room, player } = result;

    if (room.hostPlayerId !== player.playerId) {
      return callback({ ok: false, message: 'Nur der Host kann das Spiel starten.' });
    }
    if (room.players.length < 2) {
      return callback({ ok: false, message: 'Mindestens zwei Spieler werden benötigt.' });
    }
    if (!room.players.every(item => item.connected && item.ready)) {
      return callback({ ok: false, message: 'Alle Spieler müssen verbunden und bereit sein.' });
    }

    room.started = true;
    room.status = 'playing';
    room.startedAt = Date.now();
    room.players.forEach(item => {
      item.score = 0;
      item.right = 0;
      item.wrong = 0;
    });
    room.game = {
      round: 0,
      totalRounds: 15,
      questionIndexes: shuffledQuestionIndexes(),
      answers: new Map(),
      deadline: 0,
      roundClosing: false,
      timer: null
    };

    callback({ ok: true });
    io.to(room.code).emit('game-started', publicRoom(room));
    setTimeout(() => startRound(room), 850);
  });

  socket.on('python-leave-room', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });

    socket.leave(result.room.code);
    removePlayer(result.room, result.player.playerId, 'left');
    socket.data.pythonRoomCode = null;
    socket.data.pythonPlayerId = null;
    callback({ ok: true });
  });

  socket.on('python-get-room', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    callback({ ok: true, room: publicRoom(result.room) });
  });

  socket.on('python-get-game-state', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    callback({
      ok: true,
      status: result.room.status,
      room: publicRoom(result.room),
      question: publicQuestion(result.room)
    });
  });

  socket.on('python-submit-answer', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    const { room, player } = result;
    const game = room.game;
    if (!game || room.status !== 'playing') return callback({ ok: false, message: 'Kein aktives Spiel.' });
    if (game.roundClosing || Date.now() > game.deadline) return callback({ ok: false, message: 'Antwortzeit abgelaufen.' });
    if (Number(data.round) !== game.round) return callback({ ok: false, message: 'Diese Runde ist nicht mehr aktuell.' });
    if (game.answers.has(player.playerId)) return callback({ ok: false, message: 'Antwort wurde bereits abgegeben.' });

    const source = DUEL_QUESTIONS[game.questionIndexes[game.round]];
    const value = String(data.value ?? '');
    const correct = value === source.answer;
    const remainingMs = Math.max(0, game.deadline - Date.now());
    const speedBonus = correct ? Math.min(50, Math.floor(remainingMs / 400)) : 0;
    const points = correct ? 100 + speedBonus : 0;

    game.answers.set(player.playerId, { value, correct, points, at: Date.now() });
    player.score += points;
    if (correct) player.right += 1;
    else player.wrong += 1;

    emitRoom(room);
    io.to(room.code).emit('scoreboard-update', room.players.map(publicPlayer));
    io.to(room.code).emit('python-answer-progress', {
      round: game.round,
      answered: game.answers.size,
      expected: room.players.filter(item => item.connected).length
    });
    callback({ ok: true, correct, points, speedBonus });

    const connectedIds = room.players.filter(item => item.connected).map(item => item.playerId);
    if (connectedIds.length > 0 && connectedIds.every(id => game.answers.has(id))) closeRound(room);
  });

  // Used later by duel.html for the live scoreboard.
  socket.on('python-update-score', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    if (!result.room.started) return callback({ ok: false, message: 'Das Spiel wurde noch nicht gestartet.' });

    const add = Number(data.add);
    if (!Number.isFinite(add) || add < -100 || add > 500) {
      return callback({ ok: false, message: 'Ungültige Punkteänderung.' });
    }

    result.player.score += Math.trunc(add);
    if (data.correct === true) result.player.right += 1;
    if (data.correct === false) result.player.wrong += 1;

    emitRoom(result.room);
    io.to(result.room.code).emit('scoreboard-update', result.room.players.map(publicPlayer));
    callback({ ok: true, score: result.player.score });
  });

  socket.on('disconnect', () => {
    const match = findRoomOfSocket(socket.id);
    if (!match) return;

    const { room, player } = match;
    player.connected = false;
    player.ready = false;
    player.socketId = null;
    if (room.hostPlayerId === player.playerId) room.hostSocketId = null;
    emitRoom(room);

    clearDisconnectTimer(player.playerId);
    const timer = setTimeout(() => {
      const currentRoom = rooms.get(room.code);
      if (!currentRoom) return;
      const currentPlayer = findPlayerById(currentRoom, player.playerId);
      if (currentPlayer && !currentPlayer.connected) {
        removePlayer(currentRoom, player.playerId, 'disconnect-timeout');
      }
    }, DISCONNECT_GRACE_MS);
    disconnectTimers.set(player.playerId, timer);
  });
});

setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    if (now - room.updatedAt > ROOM_TTL_MS) {
      io.to(room.code).emit('room-closed', { message: 'Der inaktive Raum wurde geschlossen.' });
      room.players.forEach(player => clearDisconnectTimer(player.playerId));
      rooms.delete(room.code);
    }
  }
}, 15 * 60 * 1000).unref();

server.listen(PORT, '0.0.0.0', () => {
  console.log(`LF05 Python-Duell läuft auf Port ${PORT}`);
});
