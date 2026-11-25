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
const sw = $('theme');
const syncSwitch = () => {
  const dark = isDark();
  sw.setAttribute('aria-checked', String(dark));
  sw.dataset.face = dark ? 'moon' : 'sun';
};
const setTheme = (next) => {
  docEl.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch { /* storage blocked */ }
  syncSwitch();
};
/* Switch flip, in four beats (ms): 0-80 anticipation, 80-170 smear, 170-260 impact, 260-360 settle, with a sparkle from 170. The face swaps mid-smear and the theme flips on impact. State always lives in data-theme, so a click mid-flip commits the pending change first and restarts from where the knob is. */
(() => {
  const knob = sw.querySelector('.tsw-knob');
  const body = sw.querySelector('.tsw-body');
  const lines = [...sw.querySelectorAll('.tsw-lines i')];
  const star = sw.querySelector('.tsw-star');
  const burst = sw.querySelector('.tsw-burst');
  const D = 360;
  let anims = [];
  let timers = [];
  let pending = null;
  const knobX = () => new DOMMatrixReadOnly(getComputedStyle(knob).transform).m41;
  const play = (el, frames, opts) => anims.push(el.animate(frames, opts));

  /* Cel smoke: a canvas larger than the pill so puffs spill past its edge. Each puff is 2-3 overlapping circles drawn as one flat shape (outline stroked wide underneath the fill, so only the outer half shows), with one shadow crescent clipped inside. Position and size are closed-form in age, so the loop only paints. */
  const cv = sw.parentElement.querySelector('.tsw-smoke');
  const cx = cv && cv.getContext('2d');
  const CW = 140, CH = 84, OX = (CW - sw.offsetWidth) / 2, OY = (CH - sw.offsetHeight) / 2;
  let puffs = [];
  let raf = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const hex = (v) => {
    let h = v.trim().replace('#', '');
    if (h.length === 3) h = [...h].map((c) => c + c).join('');
    const n = parseInt(h, 16) || 0x888888;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const palette = () => {
    const cs = getComputedStyle(docEl);
    const g = (n) => hex(cs.getPropertyValue(n));
    if (isDark()) {
      const soft = g('--soft'), lift = [58, 58, 68];
      return { fill: rgb(soft.map((v, i) => v + (lift[i] - v) * 0.85)), line: rgb(g('--muted')), shade: rgb(g('--bg')) };
    }
    return { fill: rgb(g('--panel')), line: rgb(g('--text'), 0.7), shade: rgb(g('--line')) };
  };
  const spawn = (o) => {
    if (puffs.length >= 30) puffs.shift();
    const blobs = [[0, 0, 1], [rnd(0.5, 0.85), rnd(-0.4, 0.1), rnd(0.55, 0.8)]];
    if (Math.random() < 0.7) blobs.push([rnd(-0.85, -0.45), rnd(-0.1, 0.4), rnd(0.5, 0.75)]);
    puffs.push({ ...o, blobs, t0: performance.now() + (o.delay || 0), dash: rnd(0, 20) });
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const frame = (now) => {
    raf = 0;
    const dpr = window.devicePixelRatio || 1;
    if (cv.width !== Math.round(CW * dpr)) { cv.width = Math.round(CW * dpr); cv.height = Math.round(CH * dpr); }
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx.clearRect(0, 0, CW, CH);
    puffs = puffs.filter((p) => now - p.t0 < p.life);
    for (const p of puffs) {
      const age = now - p.t0;
      if (age < 0) continue;
      const k = (1 - Math.exp(-p.k * age / 1000)) / p.k * 1000;
      const x = OX + p.x + p.vx * k / 1000, y = OY + p.y + p.vy * k / 1000;
      const t = age / p.life;
      cx.globalAlpha = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
      if (p.dot) {
        cx.fillStyle = p.line;
        cx.beginPath();
        cx.arc(x, y, 0.75 * (1 - t * 0.5), 0, 6.2832);
        cx.fill();
        continue;
      }
      const e = Math.max(0, Math.min(1, (t - 0.35) / 0.65));
      const g = 1 - Math.pow(1 - Math.min(1, age / 120), 3);
      const r = (p.r0 + (p.r1 - p.r0) * g) * (1 - 0.6 * e * e * (3 - 2 * e));
      const shape = (dx, dy) => {
        cx.beginPath();
        for (const [bx, by, bf] of p.blobs) {
          const rr = r * bf;
          cx.moveTo(x + bx * r + dx + rr, y + by * r + dy);
          cx.arc(x + bx * r + dx, y + by * r + dy, rr, 0, 6.2832);
        }
      };
      shape(0, 0);
      cx.lineWidth = 3;
      cx.lineJoin = 'round';
      cx.setLineDash(e > 0.04 ? [Math.max(0.6, 8 * (1 - e)), 1.2 + 11 * e] : []);
      cx.lineDashOffset = p.dash + age * 0.04;
      cx.strokeStyle = p.line;
      cx.stroke();
      cx.setLineDash([]);
      cx.fillStyle = p.fill;
      cx.fill();
      cx.save();
      cx.clip();
      cx.fillStyle = p.shade;
      cx.fillRect(0, 0, CW, CH);
      shape(-0.12 * r, -0.3 * r);
      cx.fillStyle = p.fill;
      cx.fill();
      cx.restore();
    }
    cx.globalAlpha = 1;
    if (puffs.length) raf = requestAnimationFrame(frame);
    else cx.clearRect(0, 0, CW, CH);
  };
  /* Knob centre inside the pill: border 1 + inset 4 + half the 26px knob. */
  const KC = 18;
  const takeoff = (x, d) => {
    const c = palette(), n = 6;
    for (let i = 0; i < n; i++) {
      spawn({ ...c, x: x + KC + d * rnd(-3, 3), y: KC + rnd(-7, 7), vx: -d * rnd(90, 190), vy: rnd(-50, 30), k: rnd(3.5, 5), r0: 3, r1: rnd(7, 10), life: rnd(350, 450), delay: i * rnd(10, 20) });
    }
  };
  const landing = (x, d) => {
    const c = palette();
    for (let i = 0; i < 4; i++) {
      const up = i % 2 ? 1 : -1;
      spawn({ ...c, x: x + KC + d * rnd(2, 6), y: KC + up * rnd(2, 6), vx: d * rnd(10, 45), vy: up * rnd(70, 110), k: rnd(4, 5.5), r0: 2, r1: rnd(4.5, 6), life: rnd(260, 300), delay: i * 8 });
    }
    for (let i = 0; i < 3; i++) {
      spawn({ dot: true, line: c.line, x: x + KC + d * 6, y: KC, vx: d * rnd(40, 90), vy: rnd(-70, 70), k: 5, life: rnd(180, 240), delay: 10 });
    }
  };
  sw.addEventListener('click', () => {
    const x0 = knobX();
    timers.forEach(clearTimeout);
    timers = [];
    anims.forEach((a) => a.cancel());
    anims = [];
    const nowMs = performance.now();
    puffs = puffs.filter((p) => p.t0 <= nowMs);
    if (pending) { setTheme(pending); pending = null; }
    const next = isDark() ? 'light' : 'dark';
    if (reduce) { setTheme(next); return; }
    const d = next === 'dark' ? 1 : -1;
    const x1 = d > 0 ? sw.clientWidth - 8 - knob.offsetWidth : 0;
    const t = (v) => `translateX(${v}px)`;
    const o = (ms) => ms / D;
    play(knob, [
      { transform: t(x0), offset: 0, easing: 'ease-out' },
      { transform: t(x0 - d * 3), offset: o(80), easing: 'linear' },
      { transform: t(x1), offset: o(170), easing: 'ease-out' },
      { transform: t(x1 + d * 1.5), offset: o(260), easing: 'ease-in-out' },
      { transform: t(x1), offset: 1 },
    ], { duration: D });
    play(body, [
      { transform: `${t(0)} scale(1,1)`, filter: 'blur(0px)', offset: 0, easing: 'ease-out' },
      { transform: `${t(-d * 1.8)} scale(.86,1.08)`, filter: 'blur(0px)', offset: o(80), easing: 'ease-out' },
      { transform: `${t(0)} scale(1.8,.7)`, filter: 'blur(.6px)', offset: o(125), easing: 'ease-out' },
      { transform: `${t(d * 2.9)} scale(.78,1.14)`, filter: 'blur(0px)', offset: o(170), easing: 'ease-out' },
      { transform: `${t(0)} scale(1.06,.96)`, filter: 'blur(0px)', offset: o(260), easing: 'ease-in-out' },
      { transform: `${t(0)} scale(1,1)`, filter: 'blur(0px)', offset: 1 },
    ], { duration: D });
    sw.style.setProperty('--ld', d);
    lines.forEach((l, i) => play(l, [
      { transform: 'scaleX(0)', opacity: 0, offset: 0 },
      { transform: 'scaleX(1)', opacity: 0.85, offset: 0.45 },
      { transform: 'scaleX(.3)', opacity: 0, offset: 1 },
    ], { duration: 150, delay: 80 + i * 8, easing: 'ease-out' }));
    play(d > 0 ? star : burst, d > 0
      ? [
          { transform: 'scale(0) rotate(-30deg)', opacity: 1, offset: 0 },
          { transform: 'scale(1.25) rotate(0deg)', opacity: 1, offset: 0.35 },
          { transform: 'scale(.9) rotate(20deg)', opacity: 0, offset: 1 },
        ]
      : [
          { transform: 'scale(.4)', opacity: 1, offset: 0 },
          { transform: 'scale(1.15)', opacity: 0, offset: 1 },
        ], { duration: 270, delay: 170, easing: 'ease-out' });
    pending = next;
    timers.push(setTimeout(() => { sw.dataset.face = d > 0 ? 'moon' : 'sun'; }, 115));
    if (cx) timers.push(setTimeout(() => takeoff(x0, d), 80));
    timers.push(setTimeout(() => { setTheme(next); pending = null; if (cx) landing(x1, d); }, 170));
  });
})();
document.addEventListener('portfolio:theme', syncSwitch);
syncSwitch();
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
let WRITES = [];
try { WRITES = JSON.parse($('writes-data')?.textContent || '[]'); } catch { /* no essays in the palette */ }
const CMDS = [
  ...[['about', 'About'], ['experience', 'Experience'], ['work', 'Work and projects'], ['writes', 'Writes'], ['stack', 'Stack'], ['off', 'Off the clock'], ['contact', 'Contact']]
    .map(([id, l]) => ({ g: 'Sections', l, i: 'i-hash', run: () => go(id) })),
  ...cards.map((c) => ({ g: c.dataset.group, l: c.dataset.title, h: c.dataset.org, i: 'i-box', run: () => openCase(c.dataset.case, palQ) })),
  ...WRITES.map((w) => ({ g: 'Writes', l: w.title, h: w.pub, i: 'i-book', run: () => openUrl(w.url) })),
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
