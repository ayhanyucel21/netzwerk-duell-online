'use strict';

const quizQuestions = require('./quiz');
const debuggingQuestions = require('./debugging');
const datentypQuestions = require('./datentyp');
const codeBuilderQuestions = require('./codebuilder');

const entscheidungstabellenQuestions =
    require('./entscheidungstabellen');

const aktivitaetsdiagrammeQuestions =
    require('./aktivitaetsdiagramme');

const schleifenmodellierungQuestions =
    require('./schleifenmodellierung');

const codeanalyseQuestions =
    require('./codeanalyse');

const DUEL_QUESTIONS = [

    ...quizQuestions,
    ...debuggingQuestions,
    ...datentypQuestions,
    ...codeBuilderQuestions,

    ...entscheidungstabellenQuestions,
    ...aktivitaetsdiagrammeQuestions,
    ...schleifenmodellierungQuestions,
    ...codeanalyseQuestions

];

/*
 * Mindestens 100 Fragen sollen vorhanden sein.
 * Mehr Fragen sind ausdrücklich erlaubt.
 */
if (DUEL_QUESTIONS.length < 100) {

    throw new Error(
        `At least 100 duel questions required, got ${DUEL_QUESTIONS.length}`
    );

}

console.log(
    `✅ Loaded ${DUEL_QUESTIONS.length} duel questions`
);

module.exports = DUEL_QUESTIONS;