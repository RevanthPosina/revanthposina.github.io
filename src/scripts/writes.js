// Writes: a looping rack of hand scrolls. A float position p eases toward target; the scroll at the
// center unrolls. The scrolls and the first essay's detail are rendered in the HTML, this adds the motion.

const stage = document.getElementById('wr-stage');
const dataEl = document.getElementById('writes-data');

if (stage && dataEl) {
  const DATA = JSON.parse(dataEl.textContent);
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const paged = matchMedia('(min-width:821px) and (min-height:560px)');
  const GAP = 6;
  const FIXED = 500; // page chrome, section header, note and detail strip: what the rack cannot use on a full-page desktop layout
  const base = [...stage.querySelectorAll('.wr-scr')];
  const n = base.length;
  let S, C, H, W, RW, N = n, sig = '';
  let books = [];
  let p = 0, target = 0, raf = 0, last = 0, shown = -1;
  let dragging = false, moved = 0, snapT = 0;

  const mod = (a, m) => ((a % m) + m) % m;
  const wrap = (d) => mod(d + N / 2, N) - N / 2;
  const pad = (v) => String(v).padStart(2, '0');

  // Scroll size follows the width, and on the full-page desktop layout also the height, so the whole section fits one screen.
  function calcH(w) {
    const h = w < 560 ? 234 : w < 980 ? 284 : 328;
    return paged.matches ? Math.max(190, Math.min(h, innerHeight - FIXED)) : h;
  }
  function sizes() {
    const w = stage.clientWidth || innerWidth;
    H = calcH(w);
    C = Math.round(H * 0.72);
    S = Math.round(H * 0.14);
    W = Math.round(C * 1.55);
    RW = Math.round(S * 0.6);
    stage.style.setProperty('--PW', `${W - 2 * RW}px`);
    stage.style.setProperty('--RW', `${RW}px`);
    stage.style.setProperty('--C', `${C}px`);
    stage.style.setProperty('--H', `${H}px`);
    stage.style.setProperty('--S', `${S}px`);
    return `${w}x${H}`;
  }

  function build(keep) {
    sig = sizes();
    const keepIdx = keep ? mod(Math.round(target), n) : 0;
    // Enough copies that the rack always fills the stage, so the loop never shows a gap.
    const need = Math.ceil((stage.clientWidth + C * 2) / (S + GAP)) + 2;
    const copies = Math.max(1, Math.ceil(need / n));
    N = n * copies;
    books.forEach((b) => { if (b.k >= n) b.el.remove(); });
    books = [];
    for (let k = 0; k < N; k++) {
      let el = base[k % n];
      if (k >= n) {
        el = base[k % n].cloneNode(true);
        el.setAttribute('aria-hidden', 'true');
        el.removeAttribute('role');
        stage.appendChild(el);
      }
      el.dataset.k = String(k);
      books.push({ el, k });
    }
    p = target = keepIdx;
    shown = -1;
    render();
    detail();
    stage.classList.add('wr-on');
  }

  function geo(d) {
    const a = Math.abs(d);
    let o = Math.max(0, 1 - a);
    o = o * o * (3 - 2 * o);
    return { o, w: S + (W - S) * o };
  }

  function render() {
    const half = stage.clientWidth / 2 + W;
    const k0 = mod(Math.round(p), N);
    const f = p - Math.round(p);
    const g = new Map();
    const get = (k) => { k = mod(k, N); if (!g.has(k)) g.set(k, geo(wrap(k - p))); return g.get(k); };
    const step = (a, b) => get(a).w / 2 + GAP + get(b).w / 2;
    const xs = new Map();
    xs.set(k0, f >= 0 ? -f * step(k0, k0 + 1) : -f * step(k0 - 1, k0));
    let x = xs.get(k0);
    for (let i = 1; i <= Math.floor(N / 2); i++) { x += step(k0 + i - 1, k0 + i); xs.set(mod(k0 + i, N), x); }
    x = xs.get(k0);
    for (let i = 1; i < Math.ceil(N / 2); i++) { x -= step(k0 - i, k0 - i + 1); xs.set(mod(k0 - i, N), x); }
    const sel = mod(Math.round(target), N);
    for (const b of books) {
      const X = xs.get(b.k);
      const gg = get(b.k);
      if (X === undefined || Math.abs(X) > half) { b.el.style.visibility = 'hidden'; continue; }
      b.el.style.visibility = '';
      b.el.style.zIndex = String(Math.round(400 - Math.abs(wrap(b.k - p)) * 10));
      b.el.style.width = `${gg.w.toFixed(2)}px`;
      b.el.style.setProperty('--o', gg.o.toFixed(3));
      b.el.style.transform = `translate3d(${(X - gg.w / 2).toFixed(2)}px,${(-gg.o * 6).toFixed(2)}px,0)`;
      b.el.setAttribute('aria-selected', sel === b.k ? 'true' : 'false');
    }
  }

  function tick(t) {
    const dt = Math.min(48, t - (last || t));
    last = t;
    p += (target - p) * (1 - Math.pow(1 - 0.14, dt / 16.7));
    if (Math.abs(target - p) < 0.0008 && !dragging) { p = target; render(); raf = 0; last = 0; return; }
    render();
    raf = requestAnimationFrame(tick);
  }
  function kick() {
    if (reduce) { p = target; render(); return; }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function go(t) { target = t; kick(); detail(); }

  // Detail strip: only touches the DOM when the centered essay changes.
  function detail() {
    const i = mod(Math.round(target), n);
    if (i === shown) return;
    shown = i;
    const d = DATA[i];
    const eye = $('wr-eye');
    eye.replaceChildren(...[d.n, d.pub, d.date].map((t) => Object.assign(document.createElement('span'), { textContent: t })));
    $('wr-title').textContent = d.title;
    $('wr-sum').textContent = d.sum;
    $('wr-tags').replaceChildren(...d.tags.map((t) => Object.assign(document.createElement('span'), { className: 'chip', textContent: t })));
    $('wr-link').href = d.url;
    $('wr-count').textContent = `${pad(i + 1)} / ${pad(n)}`;
  }

  // Wheel: only a sideways gesture moves the rack (trackpad swipe, or Shift + wheel). A plain vertical wheel is left alone so the page scrolls.
  stage.addEventListener('wheel', (e) => {
    if (e.ctrlKey) return;
    let dx = 0;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) dx = e.deltaX;
    else if (e.shiftKey) dx = e.deltaY;
    if (!dx) return;
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1;
    target += (dx * unit) / (S * 2.2);
    kick();
    clearTimeout(snapT);
    snapT = setTimeout(() => { target = Math.round(target); kick(); detail(); }, 140);
    detail();
  }, { passive: false });

  // Drag. Capture only once the pointer has really moved, so a plain tap still reaches the scroll's link.
  let sx = 0, st = 0, vx = 0, lx = 0, lt = 0, pid = -1;
  stage.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    dragging = true; moved = 0; sx = lx = e.clientX; st = target; lt = performance.now(); vx = 0; pid = e.pointerId;
  });
  stage.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const now = performance.now();
    vx = (e.clientX - lx) / Math.max(1, now - lt);
    lx = e.clientX; lt = now;
    moved = Math.max(moved, Math.abs(e.clientX - sx));
    if (moved > 6 && !stage.classList.contains('wr-drag')) {
      stage.classList.add('wr-drag');
      try { stage.setPointerCapture(pid); } catch { /* pointer already gone */ }
    }
    target = st - (e.clientX - sx) / (S + GAP + 8);
    kick(); detail();
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('wr-drag');
    if (moved > 6) go(Math.round(target - vx * 6));
    setTimeout(() => { moved = 0; }, 0);
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);

  // Click a side scroll to bring it to the center; click the open one to follow its link.
  stage.addEventListener('click', (e) => {
    const el = e.target.closest('.wr-scr');
    if (!el) return;
    if (moved > 6) { e.preventDefault(); return; }
    const d = wrap(Number(el.dataset.k) - target);
    if (Math.abs(d) > 0.3) { e.preventDefault(); go(target + Math.round(d)); }
  });

  stage.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(Math.round(target) + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(Math.round(target) - 1); }
    else if (e.key === 'Enter') { $('wr-link').click(); }
  });
  $('wr-prev').addEventListener('click', () => go(Math.round(target) - 1));
  $('wr-next').addEventListener('click', () => go(Math.round(target) + 1));

  // Rebuild only when the rack's size really changed, so a phone's address bar sliding does not reset it.
  let rt = 0;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      const w = stage.clientWidth || innerWidth;
      if (`${w}x${calcH(w)}` !== sig) build(true);
    }, 120);
  });
  build(false);
}
