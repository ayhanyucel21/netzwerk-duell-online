'use strict';

const path = require('path');
const crypto = require('crypto');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const DUEL_QUESTIONS = require('./questions');

// FISI Lernen CMS
const createAdminApi = require('./admin-api');
const createContentApi = require('./content-api');

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

const TOTAL_ROUNDS = 15;

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function selectBalancedQuestionIndexes() {
  const plan = {
    Quiz: 4,
    Debugging: 4,
    'Datentyp Match': 4,
    'Code Builder': 3
  };
  const indexes = [];
  for (const [mode, count] of Object.entries(plan)) {
    const candidates = DUEL_QUESTIONS
      .map((question, index) => ({ question, index }))
      .filter(item => item.question.mode === mode)
      .map(item => item.index);
    if (candidates.length < count) {
      throw new Error(`Not enough questions for mode ${mode}`);
    }
    indexes.push(...shuffle(candidates).slice(0, count));
  }
  return shuffle(indexes);
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
    options: shuffle(source.options),
    answeredPlayerIds: [...game.answers.keys()],
    answered: game.answers.size,
    expected: room.players.filter(item => item.connected).length,
    resultShown: game.resultShown,
    nextReadyPlayerIds: [...game.nextReady]
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
  room.game.nextReady = new Set();
  room.game.resultShown = false;
  room.game.roundClosing = false;
  room.game.correctAnswerCount = 0;
  clearRoundTimer(room);
  emitRound(room);
}

function closeRound(room) {
  if (!room.game || room.game.roundClosing || room.status !== 'playing') return;
  room.game.roundClosing = true;
  room.game.resultShown = true;
  clearRoundTimer(room);
  const source = DUEL_QUESTIONS[room.game.questionIndexes[room.game.round]];
  io.to(room.code).emit('python-round-result', {
    round: room.game.round,
    correctAnswer: source.answer,
    explanation: source.explanation,
    players: room.players.map(publicPlayer),
    nextReady: 0,
    expected: room.players.filter(item => item.connected).length
  });
}

function finishServerGame(room) {
  clearRoundTimer(room);
  room.status = 'finished';
  room.started = false;
  room.finishedAt = Date.now();
  const ranking = [...room.players]
    .sort((a, b) => b.score - a.score || b.right - a.right || a.wrong - b.wrong)
    .map(publicPlayer);
  emitRoom(room);
  io.to(room.code).emit('python-game-finished', { ranking, roomCode: room.code });
}

app.disable('x-powered-by');

app.use(express.json({ limit: '64kb' }));

// =====================================================
// FISI LERNEN ADMIN API
// Yazma / düzenleme / silme işlemleri
// ADMIN_TOKEN gerektirir
// =====================================================

app.use(
  '/api/admin',
  createAdminApi({
    dataDir: path.join(__dirname, 'data'),
    adminToken: process.env.ADMIN_TOKEN
  })
);


// =====================================================
// FISI LERNEN PUBLIC CONTENT API
// Lernen, Quiz, Spiele vb. buradan içerik okuyacak
// =====================================================

app.use(
  '/api/content',
  createContentApi({
    dataDir: path.join(__dirname, 'data')
  })
);


// =====================================================
// STATIC FILES
// =====================================================

// public klasörü
app.use(express.static(PUBLIC_DIR));

// questions klasörünü browser erişimine aç
app.use(
  '/questions',
  express.static(path.join(__dirname, 'questions'))
);


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
      totalRounds: TOTAL_ROUNDS,
      questionIndexes: selectBalancedQuestionIndexes(),
      answers: new Map(),
      correctAnswerCount: 0,
      nextReady: new Set(),
      resultShown: false,
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
    if (game.roundClosing) return callback({ ok: false, message: 'Diese Runde wird bereits ausgewertet.' });
    if (Number(data.round) !== game.round) return callback({ ok: false, message: 'Diese Runde ist nicht mehr aktuell.' });
    if (game.answers.has(player.playerId)) return callback({ ok: false, message: 'Antwort wurde bereits abgegeben.' });

    const question = DUEL_QUESTIONS[game.questionIndexes[game.round]];
    const value = String(data.value ?? '');
    const correct = value === question.answer;
    let correctRank = null;
    let speedBonus = 0;
    if (correct) {
      game.correctAnswerCount += 1;
      correctRank = game.correctAnswerCount;
      speedBonus = [50, 35, 20, 10][correctRank - 1] || 5;
    }
    const points = correct ? 100 + speedBonus : 0;

    game.answers.set(player.playerId, { value, correct, points, correctRank, at: Date.now() });
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
    callback({ ok: true, correct, points, speedBonus, correctRank });

    const connectedIds = room.players.filter(item => item.connected).map(item => item.playerId);
    if (connectedIds.length > 0 && connectedIds.every(id => game.answers.has(id))) closeRound(room);
  });

  socket.on('python-next-question', (data = {}, callback = () => {}) => {
    const result = resolveRoomAndPlayer(socket, data.roomCode);
    if (result.error) return callback({ ok: false, message: result.error });
    const { room, player } = result;
    const game = room.game;
    if (!game || room.status !== 'playing') return callback({ ok: false, message: 'Kein aktives Spiel.' });
    if (!game.resultShown) return callback({ ok: false, message: 'Die aktuelle Runde ist noch nicht ausgewertet.' });
    if (Number(data.round) !== game.round) return callback({ ok: false, message: 'Diese Runde ist nicht mehr aktuell.' });

    game.nextReady.add(player.playerId);
    const connectedIds = room.players.filter(item => item.connected).map(item => item.playerId);
    const ready = connectedIds.filter(id => game.nextReady.has(id)).length;
    io.to(room.code).emit('python-next-progress', { round: game.round, ready, expected: connectedIds.length });
    callback({ ok: true, ready, expected: connectedIds.length });

    if (connectedIds.length > 0 && connectedIds.every(id => game.nextReady.has(id))) {
      game.round += 1;
      startRound(room);
    }
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
