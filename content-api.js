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

  function collectionFile(name) {
    return path.join(dataDir, `${name}.json`);
  }

  function isAllowedCollection(name) {
    return PUBLIC_COLLECTIONS.includes(name);
  }

  function readCollection(name) {
    const file = collectionFile(name);

    if (!fs.existsSync(file)) {
      return [];
    }

    const raw = fs.readFileSync(file, 'utf8').trim();
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  }

  function onlyPublished(items) {
    return items.filter(item => {
      // Eski kayıtlarda status yoksa geriye dönük uyumluluk için görünür bırak.
      return !item.status || item.status === 'published';
    });
  }

  function filterItems(items, query) {
    const filters = {
      id: query.id,
      courseId: query.courseId,
      tagId: query.tagId,
      topicId: query.topicId,
      type: query.type,
      difficulty: query.difficulty,
      slug: query.slug
    };

    let result = items.filter(item =>
      Object.entries(filters).every(([key, value]) => {
        if (value === undefined || value === '') return true;
        return String(item[key] ?? '') === String(value);
      })
    );

    if (query.q) {
      const needle = String(query.q).toLowerCase().trim();
      result = result.filter(item =>
        JSON.stringify(item).toLowerCase().includes(needle)
      );
    }

    return result;
  }

  function sortItems(items) {
    return [...items].sort((a, b) => {
      const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : 999999;
      const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : 999999;

      if (orderA !== orderB) return orderA - orderB;

      const titleA = String(a.title || a.code || '').toLocaleLowerCase('de');
      const titleB = String(b.title || b.code || '').toLocaleLowerCase('de');
      return titleA.localeCompare(titleB, 'de');
    });
  }

  // Basit durum kontrolü
  router.get('/health', (_req, res) => {
    res.json({
      ok: true,
      service: 'fisi-lernen-content-api'
    });
  });

  // Tüm izin verilen koleksiyonlar için read-only endpoint.
  // Örnekler:
  // GET /api/content/courses
  // GET /api/content/lessons?courseId=lf05&tagId=tag7
  // GET /api/content/questions?courseId=lf05&type=multiple-choice
  router.get('/:collection', (req, res, next) => {
    try {
      const { collection } = req.params;

      if (!isAllowedCollection(collection)) {
        return res.status(404).json({
          message: 'Unbekannte öffentliche Sammlung.'
        });
      }

      let items = readCollection(collection);
      items = onlyPublished(items);
      items = filterItems(items, req.query);
      items = sortItems(items);

      return res.json({
        collection,
        count: items.length,
        items
      });
    } catch (error) {
      next(error);
    }
  });

  // Tek kayıt getirir.
  router.get('/:collection/:id', (req, res, next) => {
    try {
      const { collection, id } = req.params;

      if (!isAllowedCollection(collection)) {
        return res.status(404).json({
          message: 'Unbekannte öffentliche Sammlung.'
        });
      }

      const item = onlyPublished(readCollection(collection))
        .find(entry => String(entry.id) === String(id));

      if (!item) {
        return res.status(404).json({
          message: 'Eintrag nicht gefunden.'
        });
      }

      return res.json(item);
    } catch (error) {
      next(error);
    }
  });

  // Content API kesinlikle salt okunurdur.
  router.use((_req, res) => {
    res.status(405).json({
      message: 'Content API ist schreibgeschützt.'
    });
  });

  router.use((error, _req, res, _next) => {
    console.error('Content API:', error);
    res.status(500).json({
      message: 'Öffentliche Inhalte konnten nicht geladen werden.'
    });
  });

  return router;
};
