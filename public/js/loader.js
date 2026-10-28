'use strict';

window.FisiLoader = (() => {

  const API = '/api/content';

  async function get(endpoint, params = {}) {

    const url = new URL(
      `${API}/${endpoint}`,
      window.location.origin
    );

    Object.entries(params).forEach(([key, value]) => {

      if (
        value !== undefined &&
        value !== null &&
        value !== ''
      ) {
        url.searchParams.set(key, value);
      }

    });

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `API Fehler: ${response.status}`
      );
    }

    return response.json();
  }


  // =====================================================
  // HTML ESCAPE
  // =====================================================

  function escapeHtml(value = '') {

    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  }


  // =====================================================
  // LERNINHALTE LADEN
  // =====================================================

  async function loadLessons({
    courseId,
    target
  }) {

    const container =
      typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
      console.error(
        'FisiLoader: Zielcontainer nicht gefunden.'
      );

      return;
    }


    // Loading

    container.innerHTML = `
      <div class="fisi-loading">
        Lerninhalte werden geladen...
      </div>
    `;


    try {

      const [
        tagResponse,
        lessonResponse
      ] = await Promise.all([

        get('tags', {
          courseId
        }),

        get('lessons', {
          courseId
        })

      ]);


      const tags = tagResponse.items || [];
      const lessons = lessonResponse.items || [];


      if (!tags.length) {

        container.innerHTML = `
          <div class="fisi-empty">
            Noch keine Lerninhalte vorhanden.
          </div>
        `;

        return;
      }


      container.innerHTML = tags
        .map(tag => {

          const tagLessons =
            lessons.filter(
              lesson =>
                lesson.tagId === tag.id
            );


          return `
            <section
              class="fisi-learning-day"
              data-tag="${escapeHtml(tag.id)}"
            >

              <div class="fisi-tag-header">

                <span class="fisi-tag-number">
                  Tag ${escapeHtml(
                    tag.number || ''
                  )}
                </span>

                <h2>
                  ${escapeHtml(
                    tag.title || ''
                  )}
                </h2>

                ${
                  tag.description

                    ? `
                      <p>
                        ${escapeHtml(
                          tag.description
                        )}
                      </p>
                    `

                    : ''
                }

              </div>


              <div class="fisi-lessons-grid">

                ${
                  tagLessons.length

                    ? tagLessons
                        .map(
                          lesson =>
                            renderLesson(lesson)
                        )
                        .join('')

                    : `
                      <div class="fisi-empty">
                        Für diesen Tag sind
                        noch keine Inhalte vorhanden.
                      </div>
                    `
                }

              </div>

            </section>
          `;

        })
        .join('');


    } catch (error) {

      console.error(
        'Lerninhalte konnten nicht geladen werden:',
        error
      );

      container.innerHTML = `
        <div class="fisi-error">

          <strong>
            Lerninhalte konnten nicht geladen werden.
          </strong>

          <br>

          Bitte versuche es später erneut.

        </div>
      `;

    }

  }


  // =====================================================
  // EINZELNE LEKTION
  // =====================================================

  function renderLesson(lesson) {

    return `
      <article class="fisi-lesson-card">

        <h3>
          ${escapeHtml(
            lesson.title || ''
          )}
        </h3>


        ${
          lesson.content

            ? `
              <div class="fisi-lesson-content">
                ${formatText(
                  lesson.content
                )}
              </div>
            `

            : ''
        }


        ${
          lesson.example

            ? `
              <div class="fisi-example">

                <strong>
                  Beispiel
                </strong>

                <pre><code>${escapeHtml(
                  lesson.example
                )}</code></pre>

              </div>
            `

            : ''
        }


        ${
          lesson.ihkTip

            ? `
              <div class="fisi-ihk-tip">

                <strong>
                  💡 IHK-Tipp
                </strong>

                <p>
                  ${escapeHtml(
                    lesson.ihkTip
                  )}
                </p>

              </div>
            `

            : ''
        }

      </article>
    `;

  }


  // =====================================================
  // TEXT FORMAT
  // =====================================================

  function formatText(text) {

    return escapeHtml(text)
      .split('\n')
      .map(line => {

        if (!line.trim()) {
          return '';
        }

        return `<p>${line}</p>`;

      })
      .join('');

  }


  // =====================================================
  // PUBLIC API
  // =====================================================

  return {

    get,

    loadLessons

  };

})();