const quizQuestions = require("./quiz");
const debuggingQuestions = require("./debugging");
const datentypQuestions = require("./datentyp");
const codeBuilderQuestions = require("./codebuilder");

const DUEL_QUESTIONS = [
  ...quizQuestions,
  ...debuggingQuestions,
  ...datentypQuestions,
  ...codeBuilderQuestions
];

module.exports = DUEL_QUESTIONS;