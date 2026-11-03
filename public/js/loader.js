'use strict';

window.FisiLoader = (() => {
  const API = '/api/content';
  const PROGRESS_KEY = 'lf05_lernen_tag1_6_v3';

  async function get(endpoint, params = {}) {
    const url = new URL(`${API}/${endpoint}`, window.location.origin);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, value);
      }
    });

    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`API Fehler: ${response.status} ${response.statusText}`);

    const data = await response.json();
    if (!data.success) throw new Error(data.message || 'API-Anfrage fehlgeschlagen.');
    return data;
  }

  function escapeHtml(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function lessonStyle(lesson = {}) {
    const sizes = { small: '.9rem', normal: '1rem', large: '1.12rem', 'x-large': '1.25rem' };
    const weights = { normal: '400', semibold: '600', bold: '700' };
    const align = ['left', 'center', 'right'].includes(lesson.textAlign) ? lesson.textAlign : 'left';
    const css = [
      `font-size:${sizes[lesson.fontSize] || sizes.normal}`,
      `font-weight:${weights[lesson.fontWeight] || weights.normal}`,
      `text-align:${align}`
    ];
    if (lesson.textColor) css.push(`color:${lesson.textColor}`);
    if (lesson.accentColor) css.push(`--accent:${lesson.accentColor}`);
    return css.join(';');
  }

  const icons = ['🧩', '🧠', '🔢', '🔤', '🚦', '📊', '📘', '💻'];

  function renderTerms(terms) {
    if (!Array.isArray(terms) || !terms.length) return '';
    return `
      <section class="section">
        <h3>Kurze Begriffsdefinitionen</h3>
        <div class="terms">
          ${terms.map(item => `
            <div class="term">
              <b>${escapeHtml(item?.term || '')}</b>
              <p>${escapeHtml(item?.definition || '')}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function renderLesson(lesson, index) {
    const day = Number(lesson.order || index + 1);
    return `
      <article
        class="day ${index === 0 ? 'open' : ''}"
        id="tag${day}"
        data-day="${day}"
        style="${lessonStyle(lesson)}"
      >
        <button class="head" type="button">
          <span class="icon">${icons[index] || '📘'}</span>
          <span class="title">
            <small>TAG ${day}</small>
            <h2>${escapeHtml(lesson.title || `Tag ${day}`)}</h2>
          </span>
          <span class="arrow">⌄</span>
        </button>

        <div class="content">
          ${lesson.summary ? `
            <div class="summary" style="white-space:pre-line">
              <b>Zusammenfassung:</b>
              ${escapeHtml(lesson.summary)}
            </div>
          ` : ''}

          ${renderTerms(lesson.content)}

          ${lesson.example ? `
            <section class="section">
              <h3>Beispiel / Code</h3>
              <div class="examples">
                <div class="example">
                  <pre><code>${escapeHtml(lesson.example)}</code></pre>
                </div>
              </div>
            </section>
          ` : ''}

          ${(lesson.tip || lesson.examTip) ? `
            <div class="notes">
              ${lesson.tip ? `
                <div class="note tip">
                  <b>💡 Merksatz</b>
                  ${escapeHtml(lesson.tip)}
                </div>
              ` : ''}
              ${lesson.examTip ? `
                <div class="note exam">
                  <b>🎯 LZK-/IHK-Tipp</b>
                  ${escapeHtml(lesson.examTip)}
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="foot">
            <span>Tag ${day} · ${escapeHtml(lesson.title || '')}</span>
            <button class="done" type="button">Als gelernt markieren</button>
          </div>
        </div>
      </article>
    `;
  }

  function getCompletedDays() {
    try {
      const stored = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]');
      return new Set(Array.isArray(stored) ? stored.map(String) : []);
    } catch (error) {
      console.warn('Lernfortschritt konnte nicht gelesen werden:', error);
      return new Set();
    }
  }

  function saveCompletedDays(days) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...days]));
  }

  function updateProgress(completedDays, totalDays) {
    const progressText = document.getElementById('progressText');
    const percent = document.getElementById('percent');
    const bar = document.getElementById('bar');
    const value = totalDays > 0 ? Math.round(completedDays.size / totalDays * 100) : 0;
    if (progressText) progressText.textContent = `${completedDays.size} von ${totalDays} Tagen abgeschlossen`;
    if (percent) percent.textContent = `${value} %`;
    if (bar) bar.style.width = `${value}%`;
  }

  function initializeLearningInteractions(container) {
    const days = [...container.querySelectorAll('.day')];
    const completedDays = getCompletedDays();

    days.forEach((day, index) => {
      const dayId = String(day.dataset.day || index + 1);
      const header = day.querySelector('.head');
      const done = day.querySelector('.done');

      if (header) header.addEventListener('click', () => day.classList.toggle('open'));
      if (!done) return;

      if (completedDays.has(dayId)) {
        done.classList.add('active');
        done.textContent = '✓ Gelernt';
      }

      done.addEventListener('click', event => {
        event.stopPropagation();
        if (completedDays.has(dayId)) {
          completedDays.delete(dayId);
          done.classList.remove('active');
          done.textContent = 'Als gelernt markieren';
        } else {
          completedDays.add(dayId);
          done.classList.add('active');
          done.textContent = '✓ Gelernt';
        }
        saveCompletedDays(completedDays);
        updateProgress(completedDays, days.length);
      });
    });

    updateProgress(completedDays, days.length);
  }

  async function loadLessons({ courseId = 'lf05', target = '.days' } = {}) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) {
      console.error(`FisiLoader: Zielcontainer "${target}" nicht gefunden.`);
      return [];
    }

    container.innerHTML = '<div class="fisi-loading">Lerninhalte werden geladen...</div>';

    try {
      const response = await get('lessons', { courseId });
      const lessons = Array.isArray(response.items) ? response.items : [];
      lessons.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

      if (!lessons.length) {
        container.innerHTML = '<div class="fisi-empty">Noch keine Lerninhalte vorhanden.</div>';
        return [];
      }

      // WICHTIG: contentHtml/contentText sind nur Legacy-Daten.
      // Die Seite wird ausschließlich aus den strukturierten Admin-Feldern erzeugt.
      container.innerHTML = lessons.map(renderLesson).join('');
      initializeLearningInteractions(container);
      console.log(`${lessons.length} LF05-Lerninhalte wurden aus strukturierten API-Daten geladen.`);
      return lessons;
    } catch (error) {
      console.error('Lerninhalte konnten nicht geladen werden:', error);
      container.innerHTML = `
        <div class="fisi-error">
          <strong>Lerninhalte konnten nicht geladen werden.</strong>
          <p>Prüfe, ob Server und Content-API laufen.</p>
        </div>
      `;
      return [];
    }
  }

  return { get, loadLessons };
})();
