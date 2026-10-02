// Page interactions. The 3D scenes load separately, after first paint.

const docEl = document.documentElement;
const mqDark = matchMedia('(prefers-color-scheme: dark)');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const isDark = () => {
  const t = docEl.getAttribute('data-theme');
  return t ? t === 'dark' : mqDark.matches;
};

/* toast and email */
const toastEl = $('toast');
let toastTimer = 0;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('on'), 2400);
}
const EMAIL = 'posinarevanth@gmail.com';
function copyEmail() {
  const fail = () => toast(`Copy was blocked. The address is ${EMAIL}`);
  try {
    navigator.clipboard.writeText(EMAIL).then(() => toast('Email copied.'), fail);
  } catch {
    fail();
  }
}
document.querySelectorAll('.copy-email').forEach((b) => b.addEventListener('click', copyEmail));

/* theme */
const emitTheme = () => document.dispatchEvent(new CustomEvent('portfolio:theme'));
$('theme').addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  docEl.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch { /* storage blocked */ }
});
mqDark.addEventListener?.('change', emitTheme);
new MutationObserver(emitTheme).observe(docEl, { attributes: true, attributeFilter: ['data-theme'] });

/* rotating role line */
(() => {
  const el = $('flip');
  const n = el.children.length - 1;
  let i = 0;
  if (reduce) return;
  setInterval(() => {
    i++;
    el.style.transition = 'transform .5s cubic-bezier(.6,0,.2,1)';
    el.style.transform = `translateY(-${i * 24}px)`;
    if (i === n) setTimeout(() => { el.style.transition = 'none'; el.style.transform = 'translateY(0)'; i = 0; }, 560);
  }, 2600);
})();

/* Seattle clock */
(() => {
  const el = $('clock');
  const offset = (tz) => {
    try {
      const p = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts(new Date());
      const s = (p.find((x) => x.type === 'timeZoneName') || {}).value || 'GMT';
      const m = s.match(/GMT([+-]\d+)(?::(\d+))?/);
      if (!m) return 0;
      const h = parseInt(m[1], 10);
      return h + (m[2] ? (h < 0 ? -1 : 1) * parseInt(m[2], 10) / 60 : 0);
    } catch {
      return null;
    }
  };
  const tick = () => {
    const t = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' }).format(new Date());
    const la = offset('America/Los_Angeles');
    const me = -new Date().getTimezoneOffset() / 60;
    let rel = '';
    if (la !== null) {
      const d = Math.round((me - la) * 10) / 10;
      rel = d === 0 ? 'same time as you' : `${Math.abs(d)}h ${d > 0 ? 'behind' : 'ahead of'} you`;
    }
    el.innerHTML = `${t} <span class="dim">// ${rel}</span>`;
  };
  tick();
  setInterval(tick, 30000);
})();

/* ID badge */
(() => {
  const card = $('idcard');
  const swing = $('swing');
  let lock = 0;
  let bars = '';
  let x = 0;
  for (let i = 0; i < 32; i++) {
    let h = 6 + Math.round((Math.sin(i / 3.1) * 0.5 + 0.5) * 15 + ((i * 7) % 5));
    if (i === 23) h = 27;
    bars += `<rect x="${x.toFixed(1)}" y="${30 - h}" width="2.2" height="${h}" rx=".6" fill="${i === 23 ? 'var(--signal)' : 'var(--text)'}" opacity="${i === 23 ? 1 : 0.7}"/>`;
    x += 3.7;
  }
  $('id-bars').innerHTML = bars;
  let q = '';
  let r = 11;
  const finder = (fx, fy) => {
    for (let a = 0; a < 7; a++) for (let c = 0; c < 7; c++) {
      const ring = a === 0 || a === 6 || c === 0 || c === 6;
      const core = a >= 2 && a <= 4 && c >= 2 && c <= 4;
      if (ring || core) q += `<rect x="${fx + c}" y="${fy + a}" width="1" height="1" fill="var(--text)"/>`;
    }
  };
  finder(0, 0); finder(14, 0); finder(0, 14);
  for (let yy = 0; yy < 21; yy++) for (let xx = 0; xx < 21; xx++) {
    if ((xx < 8 && yy < 8) || (xx > 12 && yy < 8) || (xx < 8 && yy > 12)) continue;
    r = (r * 16807) % 2147483647;
    if (r % 2 === 0) q += `<rect x="${xx}" y="${yy}" width="1" height="1" fill="var(--text)"/>`;
  }
  $('id-qr').innerHTML = q;
  card.addEventListener('click', () => {
    lock = performance.now() + 650;
    card.classList.remove('tilting');
    card.setAttribute('aria-pressed', String(card.getAttribute('aria-pressed') !== 'true'));
  });
  if (reduce) return;
  card.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const rc = card.getBoundingClientRect();
    const px = (e.clientX - rc.left) / rc.width;
    const py = (e.clientY - rc.top) / rc.height;
    card.style.setProperty('--ry', `${((px - 0.5) * 26).toFixed(1)}deg`);
    card.style.setProperty('--rx', `${((0.5 - py) * 18).toFixed(1)}deg`);
    card.style.setProperty('--sx', `${(px * 100).toFixed(0)}%`);
    card.style.setProperty('--sy', `${(py * 100).toFixed(0)}%`);
    if (performance.now() > lock) card.classList.add('tilting');
    swing.classList.add('still');
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.classList.remove('tilting');
    swing.classList.remove('still');
  });
})();

/* overlays */
let lastFocus = null;
function showOv(ov) { ov.classList.add('on'); ov.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
function hideOv(ov) { ov.classList.remove('on'); ov.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; lastFocus?.focus?.(); }
function trap(ov, e) {
  const f = ov.querySelectorAll('a[href],button,input');
  if (!f.length) return;
  const a = f[0];
  const z = f[f.length - 1];
  if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
  else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
}

/* project cards, filters and the case sheet */
const cards = [...document.querySelectorAll('.card[data-case]')];
const caseOv = $('case-ov');
function pill(status) {
  if (status === 'pend') return '<span class="pill pend">evals pending</span>';
  return '';
}
function openCase(id, from) {
  const card = cards.find((c) => c.dataset.case === id);
  const tpl = $(`case-${id}`);
  if (!card || !tpl) return;
  lastFocus = from || document.activeElement;
  $('case-org').innerHTML = `${esc(`${card.dataset.org}, ${card.dataset.yrs}`)} ${pill(card.dataset.status)}`;
  $('case-title').textContent = card.dataset.title;
  const body = $('case-body');
  body.replaceChildren(tpl.content.cloneNode(true));
  showOv(caseOv);
  caseOv.scrollTop = 0;
  $('case-x').focus();
}
cards.forEach((el) => {
  el.addEventListener('click', () => openCase(el.dataset.case, el));
  if (reduce) return;
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    el.style.transform = `perspective(800px) rotateX(${((0.5 - py) * 7).toFixed(2)}deg) rotateY(${((px - 0.5) * 9).toFixed(2)}deg) translateY(-2px)`;
  });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
});
$('filters').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-f]');
  if (!b) return;
  const f = b.dataset.f;
  $('filters').querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  document.querySelectorAll('#cards .card').forEach((c) => { c.hidden = f !== 'all' && c.dataset.cat !== f; });
});
$('case-x').addEventListener('click', () => hideOv(caseOv));
caseOv.addEventListener('click', (e) => { if (e.target === caseOv) hideOv(caseOv); });
document.addEventListener('portfolio:open-case', (e) => openCase(e.detail.id, e.detail.from));

/* experience: nav, scroll spy, 3D layer sync */
(() => {
  const roles = $('roles');
  const nav = $('xp-nav');
  let cur = 'msft';
  let hold = 0;
  const setActive = (k) => {
    if (k === cur) return;
    cur = k;
    roles.querySelectorAll('.role').forEach((r) => r.classList.toggle('active', r.dataset.k === k));
    nav.querySelectorAll('button').forEach((b) => b.setAttribute('aria-current', String(b.dataset.k === k)));
    document.dispatchEvent(new CustomEvent('portfolio:xp', { detail: k }));
  };
  const showRole = (k) => {
    if (!$(`role-${k}`)) return;
    setActive(k);
    hold = performance.now() + 900;
    $(`role-${k}`).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };
  nav.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-k]');
    if (b) showRole(b.dataset.k);
  });
  document.addEventListener('portfolio:show-role', (e) => showRole(e.detail));
  roles.addEventListener('pointerover', (e) => {
    const r = e.target.closest('.role');
    if (r) setActive(r.dataset.k);
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (performance.now() < hold) return;
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.dataset.k); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    roles.querySelectorAll('.role').forEach((r) => io.observe(r));
  }
})();

/* command palette */
const palOv = $('pal-ov');
const palQ = $('pal-q');
const palList = $('pal-list');
let sel = 0;
let shown = [];
const go = (id) => $(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
const openUrl = (u) => window.open(u, '_blank', 'noopener');
const CMDS = [
  ...[['about', 'About'], ['work', 'Work and projects'], ['experience', 'Experience'], ['stack', 'Stack'], ['off', 'Off the clock'], ['contact', 'Contact']]
    .map(([id, l]) => ({ g: 'Sections', l, i: 'i-hash', run: () => go(id) })),
  ...cards.map((c) => ({ g: c.dataset.group, l: c.dataset.title, h: c.dataset.org, i: 'i-box', run: () => openCase(c.dataset.case, palQ) })),
  { g: 'Links', l: 'GitHub', i: 'i-gh', h: 'RevanthPosina', run: () => openUrl('https://github.com/RevanthPosina') },
  { g: 'Links', l: 'LinkedIn', i: 'i-in', h: 'revanth-p', run: () => openUrl('https://www.linkedin.com/in/revanth-p/') },
  { g: 'Actions', l: 'Copy email', i: 'i-copy', h: EMAIL, run: copyEmail },
  { g: 'Actions', l: 'Toggle theme', i: 'i-moon', run: () => $('theme').click() },
  { g: 'Actions', l: 'Flip the ID card', i: 'i-reset', run: () => { go('name'); setTimeout(() => $('idcard').click(), 400); } },
  { g: 'Actions', l: 'Reset the 3D view', i: 'i-reset', run: () => { $('reset3d').click(); go('top'); } },
];
function renderPal() {
  const q = palQ.value.trim().toLowerCase();
  shown = CMDS.filter((c) => !q || `${c.l} ${c.h || ''} ${c.g}`.toLowerCase().includes(q));
  if (sel >= shown.length) sel = Math.max(0, shown.length - 1);
  if (!shown.length) { palList.innerHTML = `<div class="pal-empty">Nothing matches "${esc(q)}".</div>`; return; }
  let h = '';
  let g = '';
  shown.forEach((c, i) => {
    if (c.g !== g) { g = c.g; h += `<div class="pal-g">${esc(g)}</div>`; }
    h += `<button type="button" class="pal-it${i === sel ? ' sel' : ''}" role="option" aria-selected="${i === sel}" data-i="${i}"><svg class="i"><use href="#${c.i}"/></svg>${esc(c.l)}${c.h ? `<span class="hint">${esc(c.h)}</span>` : ''}</button>`;
  });
  palList.innerHTML = h;
  palList.querySelector('.sel')?.scrollIntoView?.({ block: 'nearest' });
}
function openPal() { lastFocus = document.activeElement; palQ.value = ''; sel = 0; renderPal(); showOv(palOv); palQ.focus(); }
function runSel(i) { const c = shown[i]; if (!c) return; hideOv(palOv); c.run(); }
$('open-pal').addEventListener('click', openPal);
palQ.addEventListener('input', () => { sel = 0; renderPal(); });
palList.addEventListener('click', (e) => { const b = e.target.closest('.pal-it'); if (b) runSel(Number(b.dataset.i)); });
palOv.addEventListener('click', (e) => { if (e.target === palOv) hideOv(palOv); });
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palOv.classList.contains('on') ? hideOv(palOv) : openPal(); return; }
  if (e.key === '/' && !palOv.classList.contains('on') && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openPal(); return; }
  if (palOv.classList.contains('on')) {
    if (e.key === 'Escape') hideOv(palOv);
    else if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); renderPal(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); renderPal(); }
    else if (e.key === 'Enter') { e.preventDefault(); runSel(sel); }
    else if (e.key === 'Tab') { e.preventDefault(); palQ.focus(); }
  } else if (caseOv.classList.contains('on')) {
    if (e.key === 'Escape') hideOv(caseOv);
    else if (e.key === 'Tab') trap(caseOv, e);
  }
});

/* 3D scenes: load after first paint so they never block the page */
const load3d = () => import('./three/scenes.js').then((m) => m.init()).catch(() => { $('nogl').style.display = 'grid'; });
if ('requestIdleCallback' in window) requestIdleCallback(load3d, { timeout: 1500 });
else setTimeout(load3d, 300);
