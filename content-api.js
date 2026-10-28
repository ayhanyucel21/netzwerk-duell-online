:root {
  --bg: #f3f6fb;
  --surface: #ffffff;
  --surface-alt: #eef3ff;
  --primary: #2d6cff;
  --primary-dark: #1d4ed8;
  --secondary: #8b5cf6;
  --text: #1d2433;
  --muted: #667085;
  --line: #e5e7eb;
  --danger: #dc2626;
  --success: #059669;
  --warning: #f59e0b;
  --shadow: 0 18px 38px rgba(18, 32, 64, 0.12);
  --radius: 18px;
}

* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; font-family: Inter, "Segoe UI", sans-serif; background: var(--bg); color: var(--text); }
body { min-height: 100vh; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }

#toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #111827;
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 999;
}
#toast.show { opacity: 1; transform: translateY(0); }

.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #111827 0%, #1f2937 100%);
  color: #fff;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 12px;
}
.brand strong { display: block; font-size: 1rem; }
.brand small { display: block; opacity: 0.7; }
.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  font-weight: 700;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.78);
  padding: 11px 12px;
  border-radius: 12px;
  text-align: left;
  transition: all 0.2s ease;
}
.nav-item:hover, .nav-item.active {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

.sidebar-bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main {
  padding: 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(17, 24, 39, 0.04);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
  padding: 18px 20px;
}
.topbar h1 { margin: 0; font-size: clamp(1.5rem, 2vw, 2.2rem); }
.topbar p { margin: 6px 0 0; color: var(--muted); }
.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
  min-width: 220px;
}
.search input {
  border: 0;
  background: transparent;
  outline: none;
  width: 100%;
}
.icon-button {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
}
.avatar {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  font-weight: 700;
}

.view { display: block; }
.hidden { display: none !important; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.stat-card {
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 20px 18px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.stat-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  margin-bottom: 12px;
}
.stat-card strong {
  display: block;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
}

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.quick-panel { padding: 20px; }
.quick-panel h3 { margin: 0 0 14px; }
.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.filters {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.filters select {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 12px;
  min-width: 160px;
}
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.button {
  border: 0;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 600;
}
.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
}
.button.secondary {
  background: var(--surface-alt);
  color: var(--text);
  border: 1px solid var(--line);
}
.button.danger {
  background: rgba(220, 38, 38, 0.08);
  color: var(--danger);
  border: 1px solid rgba(220, 38, 38, 0.15);
}

.file-button {
  position: relative;
  overflow: hidden;
}
.file-button input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.table-panel { padding: 0; overflow: hidden; }
.table-wrap {
  overflow: auto;
  max-width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}
thead th {
  text-align: left;
  background: #f8fafc;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  padding: 14px 12px;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
}
tbody td {
  padding: 14px 12px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}
tr:hover td { background: rgba(45, 108, 255, 0.02); }
.primary-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.primary-cell small {
  color: var(--muted);
  font-size: 0.75rem;
}
.row-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}
.mini-btn {
  background: #edf3ff;
  color: var(--primary);
  border: 1px solid transparent;
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 600;
}
.mini-btn.secondary {
  background: #f5f3ff;
  color: var(--secondary);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}
.status-pill.published { background: rgba(5, 150, 105, 0.1); color: var(--success); }
.status-pill.draft { background: rgba(245, 158, 11, 0.12); color: var(--warning); }
.status-pill.inactive { background: rgba(220, 38, 38, 0.08); color: var(--danger); }

.empty {
  text-align: center;
  padding: 54px 18px;
  color: var(--muted);
}
.empty h3 { margin: 0 0 8px; }
.empty div { font-size: 3rem; }

.dialog {
  width: min(760px, calc(100vw - 32px));
  border: 0;
  border-radius: 24px;
  padding: 0;
  box-shadow: var(--shadow);
}
.dialog::backdrop { background: rgba(15, 23, 42, 0.6); }
.dialog form {
  padding: 20px;
}
.dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.dialog-head h2 { margin: 0; }
.dialog-head p { margin: 4px 0 0; color: var(--muted); }
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.field span {
  font-size: 0.84rem;
  color: var(--muted);
  font-weight: 600;
}
.field-full { grid-column: 1 / -1; }
input, textarea, select {
  width: 100%;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
}
input:focus, textarea:focus, select:focus {
  border-color: rgba(45, 108, 255, 0.5);
  box-shadow: 0 0 0 4px rgba(45, 108, 255, 0.08);
}
textarea { min-height: 120px; resize: vertical; }
.color-row {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 10px;
  align-items: center;
}
.color-row input[type="color"] {
  padding: 0;
  min-height: 42px;
}
.checkbox-field {
  flex-direction: row !important;
  align-items: center;
}
.checkbox-field input {
  width: 18px;
  height: 18px;
}
.dialog-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}

.small {
  width: min(420px, calc(100vw - 32px));
}

.error-text {
  margin: 0;
  color: var(--danger);
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }
  .sidebar {
    padding-bottom: 10px;
  }
  .main {
    padding: 16px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }
  .top-actions {
    justify-content: space-between;
  }
}

@media (max-width: 640px) {
  .search {
    min-width: 0;
    width: 100%;
  }
  .toolbar {
    align-items: stretch;
  }
}

















































































































































































































["use strict" ];

const API = '/api/admin';
const definitions = {
  courses: { label: 'Lernfelder', icon: '📚', subtitle: 'Lernfelder erstellen und organisieren', fields: [f('code', 'Lernfeld-Code', 'text', true), f('title', 'Titel', 'text', true), f('description', 'Beschreibung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('color', 'Farbe', 'color')] },
  tags: { label: 'Tags / Tage', icon: '🏷️', subtitle: 'Unterrichtstage und Reihenfolge verwalten', fields: [course(), f('number', 'Tag-Nummer', 'number', true), f('title', 'Titel', 'text', true), f('description', 'Beschreibung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('order', 'Reihenfolge', 'number')] },
  topics: { label: 'Themen', icon: '🧠', subtitle: 'Themen den Lernfeldern und Tags zuordnen', fields: [course(), f('tagId', 'Tag-ID', 'text'), f('title', 'Thema', 'text', true), f('summary', 'Kurzbeschreibung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('order', 'Reihenfolge', 'number')] },
  lessons: { label: 'Lerninhalte', icon: '📖', subtitle: 'Definitionen, Beispiele und IHK-Tipps bearbeiten', fields: [course(), f('tagId', 'Tag-ID', 'text'), f('topicId', 'Thema-ID', 'text'), f('title', 'Titel', 'text', true), f('summary', 'Kurzbeschreibung', 'textarea'), f('content', 'Inhalt', 'textarea', true), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('order', 'Reihenfolge', 'number')] },
  questions: { label: 'Fragenbank', icon: '❓', subtitle: 'Quiz-, IHK- und Spiel-Fragen zentral verwalten', fields: [course(), f('tagId', 'Tag-ID', 'text'), f('topicId', 'Thema-ID', 'text'), sel('type', 'Fragetyp', ['multiple-choice', 'true-false', 'code', 'open']), f('question', 'Frage', 'textarea', true), f('options', 'Optionen (JSON)', 'textarea'), f('answer', 'Antwort', 'textarea'), f('explanation', 'Erklärung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive'])] },
  games: { label: 'Spiele', icon: '🎮', subtitle: 'Lernspiele aktivieren und konfigurieren', fields: [course(), f('title', 'Spielname', 'text', true), f('slug', 'Slug / Ordner', 'text', true), f('description', 'Beschreibung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('difficulty', 'Schwierigkeit', 'select', false, ['easy', 'medium', 'hard'])] },
  quizzes: { label: 'Quiz-Konfiguration', icon: '🧩', subtitle: 'Fragenanzahl, Mischung und Themen festlegen', fields: [course(), f('title', 'Quizname', 'text', true), f('questionCount', 'Fragenanzahl', 'number'), f('mix', 'Mischung', 'textarea'), f('description', 'Beschreibung', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive']), f('order', 'Reihenfolge', 'number')] },
  pages: { label: 'Seiten', icon: '📄', subtitle: 'Navigation, Seitentitel und Inhaltsblöcke verwalten', fields: [course(), f('title', 'Seitentitel', 'text', true), f('slug', 'Slug', 'text', true), sel('template', 'Template', ['default', 'landing', 'content']), f('content', 'Inhalt', 'textarea'), f('status', 'Status', 'select', false, ['published', 'draft', 'inactive'])] },
};
function f(name, label, type = 'text', required = false, options = []) { return { name, label, type, required, options }; }
function course() { return f('courseId', 'Lernfeld', 'text', true); }
function sel(name, label, options) { return { name, label, type: 'select', required: false, options }; }
const state = { section: 'dashboard', items: [], courses: [], editing: null, query: '' };
const $ = (selector) => document.querySelector(selector);
const els = { nav: $('#nav'), title: $('#pageTitle'), subtitle: $('#pageSubtitle'), dash: $('#dashboardView'), manager: $('#managerView'), design: $('#designView'), body: $('#tableBody'), head: $('#tableHead'), toast: $('#toast'), form: $('#editorForm'), formFields: $('#formFields'), dialog: $('#editorDialog'), dialogTitle: $('#dialogTitle'), dialogHint: $('#dialogHint'), deleteBtn: $('#deleteBtn'), tokenDialog: $('#tokenDialog'), tokenInput: $('#tokenInput'), courseFilter: $('#courseFilter'), statusFilter: $('#statusFilter') };
function token() { return localStorage.getItem('fisiAdminToken') || ''; }
function headers(json = true) { const h = { Authorization: `Bearer ${token()}` }; if (json) h['Content-Type'] = 'application/json'; return h; }
async function api(path = '', options = {}) { const r = await fetch(`${API}${path}`, { ...options, headers: { ...headers(options.body !== undefined), ...(options.headers || {}) } }); if (r.status === 401) { $('#tokenDialog').showModal?.(); throw new Error('Admin-Token fehlt oder ist ungültig.'); } if (!r.ok) { const text = await r.text(); throw new Error(text || 'Anfrage fehlgeschlagen.'); } return r.headers.get('content-type')?.includes('application/json') ? r.json() : r.text(); }
function toast(message, error = false) { els.toast.textContent = message; els.toast.style.background = error ? '#b91c1c' : '#111827'; els.toast.classList.add('show'); clearTimeout(toast._timer); toast._timer = setTimeout(() => els.toast.classList.remove('show'), 2500); }
function nav() { const entries = [['dashboard', '⌂', 'Dashboard'], ...Object.entries(definitions).map(([k, v]) => [null, v.icon, v.label])]; const html = entries.map(([key, icon, label]) => `<button class="nav-item ${state.section === key ? 'active' : ''}" data-section="${key || label}">${icon} ${label}</button>`).join(''); els.nav.innerHTML = html; els.nav.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => switchSection(button.dataset.section || 'dashboard'))); }
async function switchSection(section) { state.section = section; state.query = ''; $('#globalSearch').value = ''; els.dash.classList.toggle('hidden', section !== 'dashboard'); els.manager.classList.toggle('hidden', section === 'dashboard'); nav(); if (section === 'dashboard') return renderDashboard(); await loadManager(); }
async function loadCourses() { try { const r = await api('/courses'); state.courses = r.items || []; } catch { state.courses = []; } }
async function loadManager() { const d = definitions[state.section]; els.title.textContent = d.label; els.subtitle.textContent = d.subtitle; await loadCourses(); const data = await api(`/${state.section}`); state.items = data.items || []; renderTable(); }
function filtered() { const q = state.query.toLowerCase(); return state.items.filter((item) => JSON.stringify(item).toLowerCase().includes(q)); }
function renderTable() { const d = definitions[state.section]; const items = filtered(); const columns = d.fields.filter((x) => !['textarea', 'color', 'checkbox'].includes(x.type)).slice(0, 4); els.head.innerHTML = `<th>Eintrag</th>${columns.map((x) => `<th>${x.label}</th>`).join('')}<th>Status</th><th>Aktion</th>`; if (!items.length) { els.body.innerHTML = ''; $('#emptyState').classList.remove('hidden'); return; } $('#emptyState').classList.add('hidden'); els.body.innerHTML = items.map((item) => { const label = item.title || item.name || item.code || item.slug || item.question || item.id || 'Ohne Titel'; const cells = columns.map((field) => `<td>${escapeHtml(display(item[field.name]))}</td>`).join(''); return `<tr><td class="primary-cell"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(item.id || item.code || '—')}</small></td>${cells}<td><span class="status-pill ${item.status || 'published'}">${labelStatus(item.status || 'published')}</span></td><td class="row-actions"><button data-edit="${item.id}" class="mini-btn">Bearbeiten</button><button data-copy="${item.id}" class="mini-btn secondary">Kopieren</button></td></tr>`; }).join(''); els.body.querySelectorAll('[data-edit]').forEach((button) => button.addEventListener('click', () => openEditor(state.items.find((item) => item.id === button.dataset.edit)))); els.body.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => { const source = state.items.find((item) => item.id === button.dataset.copy); if (!source) return; const clone = { ...source, id: undefined, createdAt: undefined, updatedAt: undefined, title: `${source.title || 'Kopie'} (Kopie)` }; await api(`/${state.section}`, { method: 'POST', body: JSON.stringify(clone) }); toast('Eintrag dupliziert.'); await loadManager(); })); }
function display(v) { if (Array.isArray(v)) return v.join(', '); if (typeof v === 'boolean') return v ? 'Ja' : 'Nein'; return v ?? '—'; }
function labelStatus(status) { return { published: 'Veröffentlicht', draft: 'Entwurf', inactive: 'Inaktiv' }[status] || 'Veröffentlicht'; }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])); }
function fieldHtml(field, value = '') { const required = field.required ? 'required' : ''; const safeValue = escapeHtml(String(value ?? '')); if (field.type === 'textarea') return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><textarea name="${field.name}" ${required}>${safeValue}</textarea></label>`; if (field.type === 'select') { const options = field.options || ['published', 'draft', 'inactive']; return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><select name="${field.name}" ${required}>${options.map((opt) => `<option value="${escapeHtml(opt)}" ${String(value || options[0]) === String(opt) ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}</select></label>`; } if (field.type === 'color') return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><div class="color-row"><input type="color" name="${field.name}" value="${safeValue || '#2563eb'}" ${required}><input type="text" name="${field.name}_text" value="${safeValue || '#2563eb'}" ${required}></div></label>`; if (field.type === 'checkbox') return `<label class="field checkbox-field field-full"><input type="checkbox" name="${field.name}" ${value ? 'checked' : ''}><span>${escapeHtml(field.label)}</span></label>`; return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><input type="${field.type}" name="${field.name}" value="${safeValue}" ${required}></label>`; }
function openEditor(item = null) { state.editing = item?.id || null; const d = definitions[state.section]; els.dialogTitle.textContent = item ? 'Eintrag bearbeiten' : 'Neuen Eintrag erstellen'; els.dialogHint.textContent = d.subtitle; els.deleteBtn.classList.toggle('hidden', !item); els.formFields.innerHTML = d.fields.map((field) => fieldHtml(field, item ? item[field.name] ?? '' : field.name === 'status' ? 'published' : '')).join(''); els.dialog.showModal(); }
async function save(e) { e.preventDefault(); const d = definitions[state.section]; const payload = {}; const formData = new FormData(e.currentTarget); d.fields.forEach((field) => { const value = formData.get(field.name); if (field.type === 'checkbox') payload[field.name] = Boolean(value); else if (field.type === 'color') payload[field.name] = String(formData.get(`${field.name}_text`) || value || '#2563eb'); else if (field.type === 'number') payload[field.name] = value === '' || value === null ? '' : Number(value); else payload[field.name] = value === '' ? undefined : String(value); }); Object.keys(payload).forEach((k) => { if (payload[k] === undefined) delete payload[k]; }); if (!payload.status) payload.status = 'published'; const isUpdate = Boolean(state.editing); const endpoint = isUpdate ? `/${state.section}/${state.editing}` : `/${state.section}`; const method = isUpdate ? 'PUT' : 'POST'; await api(endpoint, { method, body: JSON.stringify(payload) }); toast(isUpdate ? 'Eintrag aktualisiert.' : 'Eintrag erstellt.'); els.dialog.close(); await loadManager(); }
async function remove(id) { if (!confirm('Eintrag wirklich löschen?')) return; await api(`/${state.section}/${id}`, { method: 'DELETE' }); toast('Eintrag gelöscht'); els.dialog.close(); await loadManager(); }
async function renderDashboard() { els.title.textContent = 'Dashboard'; els.subtitle.textContent = 'Alle Inhalte und Bereiche im Überblick'; const summary = await api('/summary'); const counts = summary.counts || {}; const cards = [{ icon: '📚', label: 'Lernfelder', value: counts.courses || 0 }, { icon: '🏷️', label: 'Tage', value: counts.tags || 0 }, { icon: '🧠', label: 'Themen', value: counts.topics || 0 }, { icon: '📖', label: 'Lernen', value: counts.lessons || 0 }, { icon: '❓', label: 'Fragen', value: counts.questions || 0 }, { icon: '🎮', label: 'Spiele', value: counts.games || 0 }, { icon: '🧩', label: 'Kontrollen', value: counts.quizzes || 0 }, { icon: '📄', label: 'Seiten', value: counts.pages || 0 }]; els.dash.innerHTML = `<div class="stats-grid">${cards.map((card) => `<div class="stat-card"><div class="stat-top"><span>${card.label}</span><span>${card.icon}</span></div><strong>${card.value}</strong></div>`).join('')}</div>`; }
async function importJson(file) { const text = await file.text(); let data; try { data = JSON.parse(text); } catch { return toast('Ungültige JSON-Datei', true); } const items = Array.isArray(data) ? data : data.items || []; await api(`/${state.section}/import`, { method: 'POST', body: JSON.stringify({ items }) }); toast('JSON importiert'); await loadManager(); }
async function exportJson() { const blob = new Blob([JSON.stringify(state.items, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `${state.section}.json`; link.click(); URL.revokeObjectURL(link.href); toast('Exportiert'); }
function attach() { $('#globalSearch').addEventListener('input', (event) => { state.query = event.target.value; renderTable(); }); $('#courseFilter').addEventListener('change', (event) => { state.courseFilter = event.target.value; renderTable(); }); $('#statusFilter').addEventListener('change', (event) => { state.statusFilter = event.target.value; renderTable(); }); $('#addBtn').addEventListener('click', () => openEditor()); $('#refreshBtn').addEventListener('click', () => loadManager()); $('#exportBtn').addEventListener('click', exportJson); $('#tokenBtn').addEventListener('click', () => { $('#tokenInput').value = token(); $('#tokenDialog').showModal(); }); $('#tokenForm').addEventListener('submit', (event) => { event.preventDefault(); localStorage.setItem('fisiAdminToken', $('#tokenInput').value.trim()); $('#tokenDialog').close(); toast('Token gespeichert'); }); $('#clearTokenBtn').addEventListener('click', () => { localStorage.removeItem('fisiAdminToken'); $('#tokenInput').value = ''; $('#tokenDialog').close(); toast('Token entfernt'); }); $('#deleteBtn').addEventListener('click', () => { const id = state.editing; if (id) remove(id); }); $('#importInput').addEventListener('change', async (event) => { const [file] = event.target.files || []; if (file) await importJson(file); event.target.value = ''; }); $('#editorForm').addEventListener('submit', save); $('#closeDialogBtn').addEventListener('click', () => $('#editorDialog').close()); $('#cancelBtn').addEventListener('click', () => $('#editorDialog').close()); }
async function init() { nav(); attach(); const tokenValue = token(); if (tokenValue) $('#tokenInput').value = tokenValue; await renderDashboard(); }
init().catch((error) => toast(error.message || 'Initialisierung fehlgeschlagen.', true));

window.__admin = { switchSection, loadManager, renderDashboard, definitions, state };



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































n";










"use strict";

const API = '/api/admin';
const definitions = {
  courses: {
    label: 'Lernfelder',
    icon: '📚',
    subtitle: 'Lernfelder erstellen und organisieren',
    fields: [{ name: 'code', label: 'Lernfeld-Code', type: 'text', required: true }, { name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'description', label: 'Beschreibung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', required: false, options: ['published', 'draft', 'inactive'] }, { name: 'color', label: 'Farbe', type: 'color' }]
  },
  tags: {
    label: 'Tags / Tage',
    icon: '🏷️',
    subtitle: 'Unterrichtstage und Reihenfolge verwalten',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'number', label: 'Tag-Nummer', type: 'number', required: true }, { name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'description', label: 'Beschreibung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }, { name: 'order', label: 'Reihenfolge', type: 'number' }]
  },
  topics: {
    label: 'Themen',
    icon: '🧠',
    subtitle: 'Themen den Lernfeldern und Tags zuordnen',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'tagId', label: 'Tag-ID', type: 'text' }, { name: 'title', label: 'Thema', type: 'text', required: true }, { name: 'summary', label: 'Kurzbeschreibung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }, { name: 'order', label: 'Reihenfolge', type: 'number' }]
  },
  lessons: {
    label: 'Lerninhalte',
    icon: '📖',
    subtitle: 'Definitionen, Beispiele und IHK-Tipps bearbeiten',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'tagId', label: 'Tag-ID', type: 'text' }, { name: 'topicId', label: 'Thema-ID', type: 'text' }, { name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'summary', label: 'Kurzbeschreibung', type: 'textarea' }, { name: 'content', label: 'Inhalt', type: 'textarea', required: true }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }, { name: 'order', label: 'Reihenfolge', type: 'number' }]
  },
  questions: {
    label: 'Fragenbank',
    icon: '❓',
    subtitle: 'Quiz-, IHK- und Spiel-Fragen zentral verwalten',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'tagId', label: 'Tag-ID', type: 'text' }, { name: 'topicId', label: 'Thema-ID', type: 'text' }, { name: 'type', label: 'Fragetyp', type: 'select', required: false, options: ['multiple-choice', 'true-false', 'code', 'open'] }, { name: 'question', label: 'Frage', type: 'textarea', required: true }, { name: 'options', label: 'Optionen (JSON)', type: 'textarea' }, { name: 'answer', label: 'Antwort', type: 'textarea' }, { name: 'explanation', label: 'Erklärung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }]
  },
  games: {
    label: 'Spiele',
    icon: '🎮',
    subtitle: 'Lernspiele aktivieren und konfigurieren',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'title', label: 'Spielname', type: 'text', required: true }, { name: 'slug', label: 'Slug / Ordner', type: 'text', required: true }, { name: 'description', label: 'Beschreibung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }, { name: 'difficulty', label: 'Schwierigkeit', type: 'select', options: ['easy', 'medium', 'hard'] }]
  },
  quizzes: {
    label: 'Quiz-Konfiguration',
    icon: '🧩',
    subtitle: 'Fragenanzahl, Mischung und Themen festlegen',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'title', label: 'Quizname', type: 'text', required: true }, { name: 'questionCount', label: 'Fragenanzahl', type: 'number' }, { name: 'mix', label: 'Mischung', type: 'textarea' }, { name: 'description', label: 'Beschreibung', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }, { name: 'order', label: 'Reihenfolge', type: 'number' }]
  },
  pages: {
    label: 'Seiten',
    icon: '📄',
    subtitle: 'Navigation, Seitentitel und Inhaltsblöcke verwalten',
    fields: [{ name: 'courseId', label: 'Lernfeld', type: 'text', required: true }, { name: 'title', label: 'Seitentitel', type: 'text', required: true }, { name: 'slug', label: 'Slug', type: 'text', required: true }, { name: 'template', label: 'Template', type: 'select', options: ['default', 'landing', 'content'] }, { name: 'content', label: 'Inhalt', type: 'textarea' }, { name: 'status', label: 'Status', type: 'select', options: ['published', 'draft', 'inactive'] }]
  }
};

const state = { section: 'dashboard', items: [], courses: [], editing: null, query: '' };

const $ = (selector) => document.querySelector(selector);
const els = { nav: $('#nav'), title: $('#pageTitle'), subtitle: $('#pageSubtitle'), dash: $('#dashboardView'), manager: $('#managerView'), design: $('#designView'), body: $('#tableBody'), head: $('#tableHead'), empty: $('#emptyState'), toast: $('#toast'), form: $('#editorForm'), formFields: $('#formFields'), dialog: $('#editorDialog'), dialogTitle: $('#dialogTitle'), dialogHint: $('#dialogHint'), deleteBtn: $('#deleteBtn'), tokenDialog: $('#tokenDialog'), tokenInput: $('#tokenInput'), courseFilter: $('#courseFilter'), statusFilter: $('#statusFilter') };

function token() { return localStorage.getItem('fisiAdminToken') || ''; }
function headers(json = true) { const h = { Authorization: `Bearer ${token()}` }; if (json) h['Content-Type'] = 'application/json'; return h; }
async function api(path = '', options = {}) { const r = await fetch(`${API}${path}`, { ...options, headers: { ...headers(options.body !== undefined), ...(options.headers || {}) } }); if (r.status === 401) { $('#tokenDialog').showModal?.(); throw new Error('Admin-Token fehlt oder ist ungültig.'); } if (!r.ok) { const text = await r.text(); throw new Error(text || 'Anfrage fehlgeschlagen.'); } return r.headers.get('content-type')?.includes('application/json') ? r.json() : r.text(); }
function toast(message, error = false) { els.toast.textContent = message; els.toast.style.background = error ? '#b91c1c' : '#111827'; els.toast.classList.add('show'); clearTimeout(toast._timer); toast._timer = setTimeout(() => els.toast.classList.remove('show'), 2500); }
function nav() { const items = [['dashboard', '⌂', 'Dashboard'], ...Object.entries(definitions).map(([key, value]) => [key, value.icon, value.label])]; els.nav.innerHTML = items.map(([key, icon, label]) => `<button class="nav-item ${state.section === key ? 'active' : ''}" data-section="${key || 'dashboard'}"><span>${icon}</span><span>${label}</span></button>`).join(''); els.nav.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => switchSection(button.dataset.section))); }
async function switchSection(section) { state.section = section; state.query = ''; $('#globalSearch').value = ''; els.dash.classList.toggle('hidden', section !== 'dashboard'); els.manager.classList.toggle('hidden', section === 'dashboard'); nav(); if (section === 'dashboard') return renderDashboard(); await loadManager(); }
async function loadCourses() { try { const r = await api('/courses'); state.courses = r.items || []; } catch { state.courses = []; } }
async function loadManager() { const d = definitions[state.section]; els.title.textContent = d.label; els.subtitle.textContent = d.subtitle; await loadCourses(); const result = await api(`/${state.section}`); state.items = result.items || []; renderTable(); }
function filtered() { const q = state.query.toLowerCase(); return state.items.filter((item) => JSON.stringify(item).toLowerCase().includes(q)); }
function renderTable() { const d = definitions[state.section]; const items = filtered(); const columns = d.fields.filter((field) => !['textarea', 'color', 'checkbox'].includes(field.type)).slice(0, 4); els.head.innerHTML = `<th>Eintrag</th>${columns.map((field) => `<th>${field.label}</th>`).join('')}<th>Status</th><th>Aktion</th>`; if (!items.length) { els.body.innerHTML = ''; els.empty.classList.remove('hidden'); return; } els.empty.classList.add('hidden'); els.body.innerHTML = items.map((item) => { const label = item.title || item.name || item.code || item.slug || item.question || item.id || 'Ohne Titel'; const cells = columns.map((field) => `<td>${escapeHtml(display(item[field.name]))}</td>`).join(''); return `<tr><td class="primary-cell"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(item.id || item.code || '—')}</small></td>${cells}<td><span class="status-pill ${item.status || 'published'}">${labelStatus(item.status || 'published')}</span></td><td class="row-actions"><button data-edit="${item.id}" class="mini-btn">Bearbeiten</button><button data-copy="${item.id}" class="mini-btn secondary">Kopieren</button></td></tr>`; }).join(''); els.body.querySelectorAll('[data-edit]').forEach((button) => button.addEventListener('click', () => openEditor(state.items.find((item) => item.id === button.dataset.edit)))); els.body.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => { const source = state.items.find((item) => item.id === button.dataset.copy); if (!source) return; const clone = { ...source, id: undefined, createdAt: undefined, updatedAt: undefined, title: `${source.title || 'Kopie'} (Kopie)` }; await api(`/${state.section}`, { method: 'POST', body: JSON.stringify(clone) }); toast('Eintrag dupliziert.'); await loadManager(); })); }
function display(value) { if (Array.isArray(value)) return value.join(', '); if (typeof value === 'boolean') return value ? 'Ja' : 'Nein'; return value ?? '—'; }
function labelStatus(status) { return { published: 'Veröffentlicht', draft: 'Entwurf', inactive: 'Inaktiv' }[status] || 'Veröffentlicht'; }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])); }
function fieldHtml(field, value = '') { const required = field.required ? 'required' : ''; const safe = escapeHtml(String(value ?? '')); if (field.type === 'textarea') return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><textarea name="${field.name}" ${required}>${safe}</textarea></label>`; if (field.type === 'select') { const options = field.options || ['published', 'draft', 'inactive']; return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><select name="${field.name}" ${required}>${options.map((option) => `<option value="${escapeHtml(option)}" ${String(value || options[0]) === String(option) ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select></label>`; } if (field.type === 'color') return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><div class="color-row"><input type="color" name="${field.name}" value="${safe || '#2563eb'}" ${required}><input type="text" name="${field.name}_text" value="${safe || '#2563eb'}" ${required}></div></label>`; if (field.type === 'checkbox') return `<label class="field checkbox-field field-full"><input type="checkbox" name="${field.name}" ${value ? 'checked' : ''}><span>${escapeHtml(field.label)}</span></label>`; return `<label class="field field-full"><span>${escapeHtml(field.label)}</span><input type="${field.type}" name="${field.name}" value="${safe}" ${required}></label>`; }
function openEditor(item = null) { state.editing = item?.id || null; const d = definitions[state.section]; els.dialogTitle.textContent = item ? 'Eintrag bearbeiten' : 'Neuen Eintrag erstellen'; els.dialogHint.textContent = d.subtitle; els.deleteBtn.classList.toggle('hidden', !item); els.formFields.innerHTML = d.fields.map((field) => fieldHtml(field, item ? item[field.name] ?? '' : field.name === 'status' ? 'published' : '')).join(''); els.dialog.showModal(); }
async function save(event) { event.preventDefault(); const d = definitions[state.section]; const payload = {}; const formData = new FormData(event.currentTarget); d.fields.forEach((field) => { const value = formData.get(field.name); if (field.type === 'checkbox') payload[field.name] = Boolean(value); else if (field.type === 'color') payload[field.name] = String(formData.get(`${field.name}_text`) || value || '#2563eb'); else if (field.type === 'number') payload[field.name] = value === '' || value === null ? '' : Number(value); else payload[field.name] = value === '' || value === null ? undefined : String(value); }); Object.keys(payload).forEach((key) => { if (payload[key] === undefined) delete payload[key]; }); if (!payload.status) payload.status = 'published'; const method = state.editing ? 'PUT' : 'POST'; const endpoint = state.editing ? `/${state.section}/${state.editing}` : `/${state.section}`; await api(endpoint, { method, body: JSON.stringify(payload) }); toast(state.editing ? 'Eintrag aktualisiert.' : 'Eintrag erstellt.'); els.dialog.close(); await loadManager(); }
async function remove(id) { if (!confirm('Eintrag wirklich löschen?')) return; await api(`/${state.section}/${id}`, { method: 'DELETE' }); toast('Eintrag gelöscht.'); els.dialog.close(); await loadManager(); }
async function renderDashboard() { els.title.textContent = 'Dashboard'; els.subtitle.textContent = 'Alle Inhalte und Bereiche im Überblick'; try { const summary = await api('/summary'); const counts = summary.counts || {}; const cards = [{ icon: '📚', label: 'Lernfelder', value: counts.courses || 0 }, { icon: '🏷️', label: 'Tage', value: counts.tags || 0 }, { icon: '🧠', label: 'Themen', value: counts.topics || 0 }, { icon: '📖', label: 'Lernen', value: counts.lessons || 0 }, { icon: '❓', label: 'Fragen', value: counts.questions || 0 }, { icon: '🎮', label: 'Spiele', value: counts.games || 0 }, { icon: '🧩', label: 'Kontrollen', value: counts.quizzes || 0 }, { icon: '📄', label: 'Seiten', value: counts.pages || 0 }]; els.dash.innerHTML = `<div class="stats-grid">${cards.map((card) => `<div class="stat-card"><div class="stat-top"><span>${card.label}</span><span>${card.icon}</span></div><strong>${card.value}</strong></div>`).join('')}</div><div class="panel quick-panel"><h3>Praktische Schnellaktionen</h3><div class="quick-actions"><button class="button primary" data-quick="courses">Lernfelder verwalten</button><button class="button secondary" data-quick="topics">Themen pflegen</button><button class="button secondary" data-quick="lessons">Lernen bearbeiten</button><button class="button secondary" data-quick="questions">Fragenbank prüfen</button></div></div>`; els.dash.querySelectorAll('[data-quick]').forEach((button) => button.addEventListener('click', () => switchSection(button.dataset.quick))); } catch (error) { els.dash.innerHTML = '<div class="panel"><p class="error-text">Dashboard konnte nicht geladen werden.</p></div>'; toast(error.message || 'Dashboard Fehler', true); } }
async function importJson(file) { const text = await file.text(); let data; try { data = JSON.parse(text); } catch { return toast('Ungültige JSON-Datei', true); } const items = Array.isArray(data) ? data : data.items || []; await api(`/${state.section}/import`, { method: 'POST', body: JSON.stringify({ items }) }); toast('JSON wurde importiert.'); await loadManager(); }
async function exportCurrent() { const blob = new Blob([JSON.stringify(state.items, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `${state.section}.json`; link.click(); URL.revokeObjectURL(link.href); toast('Export erstellt.'); }
function attachEvents() { $('#globalSearch').addEventListener('input', (event) => { state.query = event.target.value; renderTable(); }); $('#courseFilter').addEventListener('change', (event) => { state.courseFilter = event.target.value; renderTable(); }); $('#statusFilter').addEventListener('change', (event) => { state.statusFilter = event.target.value; renderTable(); }); $('#addBtn').addEventListener('click', () => openEditor()); $('#refreshBtn').addEventListener('click', async () => { if (state.section === 'dashboard') { await renderDashboard(); return; } await loadManager(); }); $('#exportBtn').addEventListener('click', exportCurrent); $('#exportAllBtn').addEventListener('click', async () => { try { const backup = await api('/backup'); const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'fisi-backup.json'; link.click(); URL.revokeObjectURL(link.href); toast('Gesamtes Backup erstellt.'); } catch (error) { toast(error.message || 'Backup fehlgeschlagen.', true); } }); $('#tokenBtn').addEventListener('click', () => { $('#tokenInput').value = token(); $('#tokenDialog').showModal(); }); $('#tokenForm').addEventListener('submit', (event) => { event.preventDefault(); const value = $('#tokenInput').value.trim(); localStorage.setItem('fisiAdminToken', value); $('#tokenDialog').close(); toast('Token gespeichert.'); }); $('#clearTokenBtn').addEventListener('click', () => { localStorage.removeItem('fisiAdminToken'); $('#tokenInput').value = ''; $('#tokenDialog').close(); toast('Token entfernt.'); }); $('#closeDialogBtn').addEventListener('click', () => $('#editorDialog').close()); $('#cancelBtn').addEventListener('click', () => $('#editorDialog').close()); $('#closeTokenBtn').addEventListener('click', () => $('#tokenDialog').close()); $('#deleteBtn').addEventListener('click', () => { if (state.editing) remove(state.editing); }); $('#importInput').addEventListener('change', async (event) => { const [file] = event.target.files || []; if (file) await importJson(file); event.target.value = ''; }); $('#editorForm').addEventListener('submit', save); }
async function init() { nav(); attachEvents(); const tokenValue = token(); if (tokenValue) $('#tokenInput').value = tokenValue; await renderDashboard(); }
init().catch((error) => toast(error.message || 'Initialisierung fehlgeschlagen.', true));
window.__admin = { switchSection, loadManager, renderDashboard, definitions, state };





































{