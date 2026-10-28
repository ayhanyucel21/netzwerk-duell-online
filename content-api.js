'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');

const PUBLIC_COLLECTIONS = [
  'courses',
  'tags',
  'topics',
  'lessons',
  'questions',
  'games',
  'quizzes',
  'pages',
  'settings'
];

module.exports = function createContentApi({
  dataDir = path.join(__dirname, 'data')
} = {}) {

  const router = express.Router();

  function getFile(collection) {
    return path.join(dataDir, `${collection}.json`);
  }

  function readCollection(collection) {
    const file = getFile(collection);

    if (!fs.existsSync(file)) {
      return [];
    }

    try {
      const content = fs.readFileSync(file, 'utf8');

      if (!content.trim()) {
        return [];
      }

      return JSON.parse(content);
    } catch (error) {
      console.error(`Fehler beim Lesen von ${collection}:`, error);
      return [];
    }
  }

  function isAllowed(collection) {
    return PUBLIC_COLLECTIONS.includes(collection);
  }

  router.get('/courses', (req, res) => {
    const courses = readCollection('courses')
      .filter(item => item.status !== 'inactive');

    res.json({
      success: true,
      items: courses
    });
  });

  router.get('/tags', (req, res) => {
    let tags = readCollection('tags')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      tags = tags.filter(item => item.courseId === req.query.courseId);
    }

    tags.sort((a, b) => Number(a.order || a.number || 0) - Number(b.order || b.number || 0));

    res.json({
      success: true,
      items: tags
    });
  });

  router.get('/topics', (req, res) => {
    let topics = readCollection('topics')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      topics = topics.filter(item => item.courseId === req.query.courseId);
    }

    if (req.query.tagId) {
      topics = topics.filter(item => item.tagId === req.query.tagId);
    }

    topics.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

    res.json({
      success: true,
      items: topics
    });
  });

  router.get('/lessons', (req, res) => {
    let lessons = readCollection('lessons')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      lessons = lessons.filter(item => item.courseId === req.query.courseId);
    }

    if (req.query.tagId) {
      lessons = lessons.filter(item => item.tagId === req.query.tagId);
    }

    if (req.query.topicId) {
      lessons = lessons.filter(item => item.topicId === req.query.topicId);
    }

    lessons.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

    res.json({
      success: true,
      items: lessons
    });
  });

  router.get('/questions', (req, res) => {
    let questions = readCollection('questions')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      questions = questions.filter(item => item.courseId === req.query.courseId);
    }

    if (req.query.tagId) {
      questions = questions.filter(item => item.tagId === req.query.tagId);
    }

    if (req.query.topicId) {
      questions = questions.filter(item => item.topicId === req.query.topicId);
    }

    res.json({
      success: true,
      items: questions
    });
  });

  router.get('/games', (req, res) => {
    let games = readCollection('games')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      games = games.filter(item => item.courseId === req.query.courseId);
    }

    res.json({
      success: true,
      items: games
    });
  });

  router.get('/quizzes', (req, res) => {
    let quizzes = readCollection('quizzes')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      quizzes = quizzes.filter(item => item.courseId === req.query.courseId);
    }

    res.json({
      success: true,
      items: quizzes
    });
  });

  router.get('/pages', (req, res) => {
    let pages = readCollection('pages')
      .filter(item => item.status !== 'inactive');

    if (req.query.courseId) {
      pages = pages.filter(item => item.courseId === req.query.courseId);
    }

    res.json({
      success: true,
      items: pages
    });
  });

  router.get('/settings', (req, res) => {
    const settings = readCollection('settings');

    res.json({
      success: true,
      items: settings
    });
  });

  router.get('/:collection', (req, res) => {
    const collection = req.params.collection;

    if (!isAllowed(collection)) {
      return res.status(404).json({
        success: false,
        message: 'Collection nicht gefunden.'
      });
    }

    const items = readCollection(collection)
      .filter(item => item.status !== 'inactive');

    res.json({
      success: true,
      items
    });
  });

  return router;
};
