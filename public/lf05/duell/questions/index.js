'use strict';

const quizQuestions = require('./quiz');
const debuggingQuestions = require('./debugging');
const datentypQuestions = require('./datentyp');
const codeBuilderQuestions = require('./codebuilder');

const DUEL_QUESTIONS = [
  ...quizQuestions,
  ...debuggingQuestions,
  ...datentypQuestions,
  ...codeBuilderQuestions
];

if (DUEL_QUESTIONS.length !== 100) {
  throw new Error(`Expected 100 duel questions, got ${DUEL_QUESTIONS.length}`);
}

module.exports = DUEL_QUESTIONS;
