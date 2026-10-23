'use strict';
const questions = require('../questions');
const modes = ['Quiz','Debugging','Datentyp Match','Code Builder'];
for (const mode of modes) {
  const list = questions.filter(q => q.mode === mode);
  if (list.length !== 25) throw new Error(`${mode}: expected 25, got ${list.length}`);
}
for (const [index, q] of questions.entries()) {
  if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Question ${index}: invalid options`);
  if (!q.options.includes(q.answer)) throw new Error(`Question ${index}: answer not in options`);
}
console.log('Validated 100 questions in 4 categories.');
