// three.js scenes: the lakehouse cover, the career stack, and Off the clock.
// Loaded lazily by ui.js after the page has painted.
import * as T from 'three';

const docEl = document.documentElement;
const mqDark = matchMedia('(prefers-color-scheme: dark)');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (id) => document.getElementById(id);
const isDark = () => {
  const t = docEl.getAttribute('data-theme');
  return t ? t === 'dark' : mqDark.matches;
};
const onTheme = (fn) => document.addEventListener('portfolio:theme', fn);
const openCase = (id, from) => document.dispatchEvent(new CustomEvent('portfolio:open-case', { detail: { id, from } }));
const go = (id) => $(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

/* ---------- shared helpers ---------- */
function rrShape(w, d, r) {
  const s = new T.Shape();
  const x = -w / 2;
  const y = -d / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
function slab(w, d, h, r, mat) {
  const bt = Math.min(0.05, h * 0.3);
  const g = new T.ExtrudeGeometry(rrShape(w, d, r), { depth: h, bevelEnabled: true, bevelThickness: bt, bevelSize: 0.05, bevelSegments: 2, curveSegments: 8 });
  g.rotateX(-Math.PI / 2);
  const m = new T.Mesh(g, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}
const std = (c, o = {}) => new T.MeshStandardMaterial({ color: c, roughness: 0.85, metalness: 0, ...o });
function makeRenderer(canvas) {
  try {
    const r = new T.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    r.shadowMap.enabled = true;
    r.shadowMap.type = T.PCFSoftShadowMap;
    return r;
  } catch {
    return null;
  }
}
function orbitCam(cam, st, target) {
  const R = 40;
  cam.position.set(target.x + R * Math.cos(st.el) * Math.sin(st.az), target.y + R * Math.sin(st.el), target.z + R * Math.cos(st.el) * Math.cos(st.az));
  cam.lookAt(target);
}
function sizeOrtho(cam, w, h, minH, minW) {
  const asp = w / h;
  const vh = Math.max(minH, minW / asp);
  cam.left = -vh * asp / 2; cam.right = vh * asp / 2; cam.top = vh / 2; cam.bottom = -vh / 2;
  cam.updateProjectionMatrix();
}
function attachOrbit(el, st, onChange, opts) {
  let drag = null;
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    drag = { x: e.clientX, y: e.clientY, az: st.taz, el: st.tel, moved: false };
    el.setPointerCapture(e.pointerId);
    el.classList.add('drag');
  });
  el.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.moved = true;
    st.taz = drag.az - dx * 0.008;
    st.tel = Math.max(opts.minEl, Math.min(opts.maxEl, drag.el + dy * 0.005));
    st.interact = performance.now();
    onChange();
  });
  const end = () => { if (!drag) return; st.lastDragMoved = drag.moved; drag = null; el.classList.remove('drag'); };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  el.setAttribute('tabindex', '0');
  el.addEventListener('keydown', (e) => {
    const k = e.key;
    if (k === 'ArrowLeft') st.taz += 0.2;
    else if (k === 'ArrowRight') st.taz -= 0.2;
    else if (k === 'ArrowUp') st.tel = Math.min(opts.maxEl, st.tel + 0.08);
    else if (k === 'ArrowDown') st.tel = Math.max(opts.minEl, st.tel - 0.08);
    else return;
    e.preventDefault();
    st.interact = performance.now();
    onChange();
  });
}
/** Runs a render loop only while the element is on screen and the tab is visible. */
function loopWhenVisible(el, { update, render, isRunning = () => true, margin = '0px' }) {
  let raf = 0;
  let last = 0;
  let visible = false;
  const loop = (t) => {
    const dt = Math.min(0.05, (t - last) / 1000);
    last = t;
    update(dt);
    render();
    raf = requestAnimationFrame(loop);
  };
  const sync = () => {
    const goNow = !reduce && isRunning() && visible && !document.hidden;
    if (goNow && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    else if (!goNow && raf) { cancelAnimationFrame(raf); raf = 0; }
  };
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; sync(); }, { rootMargin: margin }).observe(el);
  document.addEventListener('visibilitychange', sync);
  return { sync, active: () => raf !== 0 };
}

/* ---------- scene 1: the medallion lakehouse cover ---------- */
function lakehouse() {
  const cover = $('cover');
  const canvas = $('c3d');
  const R = makeRenderer(canvas);
  if (!R) { $('nogl').style.display = 'grid'; return; }
  const scene = new T.Scene();
  const cam = new T.OrthographicCamera(-10, 10, 5, -5, 0.1, 200);
  const target = new T.Vector3(0.2, 0.7, 0.2);
  const st = { az: 0.72, el: 0.52, taz: 0.72, tel: 0.52, interact: 0 };
  const hemi = new T.HemisphereLight(0xffffff, 0x8a8f9c, 0.75);
  scene.add(hemi);
  const sun = new T.DirectionalLight(0xffffff, 0.85);
  sun.position.set(-6, 14, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 40 });
  sun.shadow.bias = -0.0006;
  scene.add(sun);

  const PAL = {
    light: { base: 0xE3E6EC, lake: 0x8EC5E8, bronze: 0xC98B5A, silver: 0xC6CBD4, gold: 0xE2B84E, src: 0x3F3F46, ring: 0x5B5BD6, plate: 0xF4F4F5, bar: 0x3F3F46, fc: 0x5B5BD6, anom: 0xE5484D, layer: 0xDDDDF7, grid: 0x5B5BD6, bot: 0xFFFFFF, eye: 0x18181B, mtn: 0x8C95A8, snow: 0xFFFFFF, tree: 0x5F9470, trunk: 0x8A6A4F, hemi: 0.8, sun: 0.85 },
    dark: { base: 0x1D1F27, lake: 0x2D6587, bronze: 0xA9703F, silver: 0x8C93A2, gold: 0xC9A03E, src: 0xB4B4BD, ring: 0x8F91F8, plate: 0x272932, bar: 0xD4D4D8, fc: 0x8F91F8, anom: 0xFF6369, layer: 0x2B2C4D, grid: 0x8F91F8, bot: 0xE4E4E7, eye: 0x09090B, mtn: 0x4C5366, snow: 0xD7DCE6, tree: 0x3F6E50, trunk: 0x6B5341, hemi: 0.55, sun: 0.75 },
  };
  const KEYS = ['base', 'lake', 'bronze', 'silver', 'gold', 'src', 'ring', 'plate', 'bar', 'anom', 'layer', 'bot', 'eye', 'mtn', 'snow', 'tree', 'trunk'];
  const M = {};
  KEYS.forEach((k) => { M[k] = std(0xffffff); });
  Object.assign(M.lake, { roughness: 0.25, metalness: 0.1 });
  Object.assign(M.gold, { roughness: 0.55, metalness: 0.25 });
  M.mtn.flatShading = true; M.snow.flatShading = true; M.tree.flatShading = true;
  M.fc = new T.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, roughness: 0.6 });
  M.band = new T.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.16, roughness: 0.6, depthWrite: false });
  M.grid = new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  M.antenna = new T.MeshStandardMaterial({ color: 0xffffff, emissive: 0x000000 });
  M.shadowBlob = new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12, depthWrite: false });

  const pickables = [];
  const pick = (obj, key, label, sub, action) => {
    obj.traverse((o) => { if (o.isMesh) o.userData.key = key; });
    obj.userData = { key, label, sub, action };
    pickables.push(obj);
    return obj;
  };

  const base = slab(13, 9, 0.5, 0.7, M.base);
  base.position.y = -0.55;
  scene.add(base);
  const lake = pick(slab(3.4, 2.6, 0.06, 0.9, M.lake), 'lake', 'The lake(house)', 'Where it all lands');
  lake.position.set(-4.3, 0, 2.4);
  scene.add(lake);

  const srcG = new T.Group();
  for (let i = 0; i < 3; i++) {
    const cy = new T.Mesh(new T.CylinderGeometry(0.42, 0.42, 0.3, 28), i === 1 ? M.ring : M.src);
    cy.position.y = 0.15 + i * 0.42;
    cy.castShadow = true;
    srcG.add(cy);
  }
  const tip = new T.Mesh(new T.SphereGeometry(0.12, 16, 12), M.antenna);
  tip.position.y = 1.42;
  srcG.add(tip);
  srcG.position.set(-5.3, 0, -1.4);
  scene.add(pick(srcG, 'src', 'Event streams', 'Near-real-time ingestion, the Bloom and Entain work', 'bloom'));

  [
    { k: 'bronze', x: -2.9, h: 0.45, l: 'Bronze, raw', s: 'Landed as-is, replayable' },
    { k: 'silver', x: -0.35, h: 0.85, l: 'Silver, cleaned', s: 'Deduped and conformed with dbt' },
    { k: 'gold', x: 2.2, h: 1.25, l: 'Gold, curated', s: 'Partitioned tables and KPIs' },
  ].forEach((t) => {
    const m = slab(2.3, 2.3, t.h, 0.25, M[t.k]);
    m.position.set(t.x, 0, -1.4);
    scene.add(pick(m, t.k, t.l, t.s, 'p990'));
  });

  const layer = slab(2.0, 1.6, 0.1, 0.2, M.layer);
  layer.position.set(-0.7, 0, 2.35);
  scene.add(pick(layer, 'layer', 'KPI semantic layer', 'What the agent queries instead of raw tables', 'msft'));
  const gp = [];
  for (let gx = 0; gx <= 4; gx++) { const x = -1.6 + gx * 0.45; gp.push(x, 0.2, 1.65, x, 0.2, 3.05); }
  for (let gz = 0; gz <= 3; gz++) { const z = 1.7 + gz * 0.45; gp.push(-1.6, 0.2, z, 0.2, 0.2, z); }
  const gg = new T.BufferGeometry();
  gg.setAttribute('position', new T.Float32BufferAttribute(gp, 3));
  scene.add(new T.LineSegments(gg, M.grid));

  const chartG = new T.Group();
  chartG.add(slab(4.0, 1.4, 0.12, 0.2, M.plate));
  let anomBar = null;
  [52, 55, 58, 54, 57, 40, 60, 62, 63, 64, 66, 65].forEach((v, i) => {
    const h = 0.35 + (v - 36) / 30 * 1.5;
    const x = -1.65 + i * 0.3;
    const b = new T.Mesh(new T.BoxGeometry(0.2, h, 0.2), i === 5 ? M.anom : i < 8 ? M.bar : M.fc);
    b.position.set(x, 0.17 + h / 2, 0);
    b.castShadow = true;
    chartG.add(b);
    if (i >= 8) {
      const k = i - 7;
      const band = new T.Mesh(new T.BoxGeometry(0.24, h + 0.18 * k + 0.2 * k, 0.24), M.band);
      band.position.set(x, 0.17 + h / 2, 0);
      chartG.add(band);
    }
    if (i === 5) anomBar = b;
  });
  chartG.position.set(3.1, 0, 2.4);
  scene.add(pick(chartG, 'chart', 'Forecast, 12 months', 'Actuals solid, forecast translucent with 80/95% bands', 'msft'));
  pick(anomBar, 'anom', 'Anomaly, 3.1σ low', 'Flagged and sent to the agent for a root-cause draft', 'msft');

  const bot = new T.Group();
  const head = new T.Mesh(new T.SphereGeometry(0.34, 28, 20), M.bot);
  head.scale.set(1.15, 0.95, 1);
  head.castShadow = true;
  bot.add(head);
  [-0.12, 0.12].forEach((x) => { const e = new T.Mesh(new T.SphereGeometry(0.055, 12, 10), M.eye); e.position.set(x, 0.04, 0.31); bot.add(e); });
  const ant = new T.Mesh(new T.CylinderGeometry(0.018, 0.018, 0.22, 8), M.eye);
  ant.position.y = 0.4;
  bot.add(ant);
  const antTip = new T.Mesh(new T.SphereGeometry(0.07, 12, 10), M.antenna);
  antTip.position.y = 0.53;
  bot.add(antTip);
  const blob = new T.Mesh(new T.CircleGeometry(0.36, 24), M.shadowBlob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(-0.7, 0.22, 2.35);
  scene.add(blob);
  bot.position.set(-0.7, 1.15, 2.35);
  scene.add(pick(bot, 'bot', 'KPI agent', 'An LLM agent that answers questions through the semantic layer', 'msft'));

  const mtn = new T.Group();
  const cone = new T.Mesh(new T.ConeGeometry(1.5, 2.4, 7), M.mtn);
  cone.position.y = 1.2; cone.castShadow = true; cone.receiveShadow = true;
  mtn.add(cone);
  const cap = new T.Mesh(new T.ConeGeometry(0.64, 1.0, 7), M.snow);
  cap.position.y = 1.92;
  mtn.add(cap);
  mtn.position.set(5.0, 0, -2.7);
  scene.add(pick(mtn, 'mtn', 'The Cascades', 'Where the weekend trail runs happen', 'off'));

  [[-5.7, 2.9], [-2.2, 3.6], [-5.8, 0.6], [0.9, 3.75], [5.8, 3.6], [5.9, -0.4], [3.6, -3.9], [-3.6, -3.6]].forEach((p, i) => {
    const t = new T.Group();
    const tr = new T.Mesh(new T.CylinderGeometry(0.06, 0.07, 0.25, 6), M.trunk);
    tr.position.y = 0.12;
    t.add(tr);
    const s = 0.8 + ((i * 37) % 5) * 0.08;
    const c = new T.Mesh(new T.ConeGeometry(0.3 * s, 0.75 * s, 6), M.tree);
    c.position.y = 0.25 + 0.375 * s;
    c.castShadow = true;
    t.add(c);
    t.position.set(p[0], 0, p[1]);
    scene.add(t);
  });

  const curve = new T.CatmullRomCurve3([
    [-5.3, 1.62, -1.4], [-4.5, 1.25, -1.4], [-3.8, 0.62, -1.4], [-2.1, 0.62, -1.4], [-1.62, 1.25, -1.4], [-1.15, 1.02, -1.4],
    [0.5, 1.02, -1.4], [0.95, 1.62, -1.4], [1.35, 1.42, -1.4], [3.1, 1.42, -1.4], [3.7, 1.35, -0.4], [3.45, 0.9, 0.95], [3.1, 0.5, 1.75],
  ].map((p) => new T.Vector3(...p)), false, 'centripetal');
  const N = 36;
  const packets = new T.InstancedMesh(new T.BoxGeometry(0.12, 0.12, 0.12), new T.MeshStandardMaterial({ roughness: 0.5 }), N);
  packets.castShadow = true;
  scene.add(packets);
  const dummy = new T.Object3D();
  let pcols = {};
  const packetColor = (u) => (u < 0.3 ? pcols.bronze : u < 0.55 ? pcols.silver : u < 0.8 ? pcols.gold : pcols.fc);

  let W = 0;
  let H = 0;
  const applyTheme = () => {
    const dk = isDark();
    const P = dk ? PAL.dark : PAL.light;
    KEYS.forEach((k) => M[k].color.setHex(P[k]));
    M.fc.color.setHex(P.fc); M.band.color.setHex(P.fc); M.grid.color.setHex(P.grid);
    M.antenna.color.setHex(P.ring); M.antenna.emissive.setHex(P.ring); M.antenna.emissiveIntensity = 0.35;
    M.shadowBlob.opacity = dk ? 0.35 : 0.12;
    hemi.intensity = P.hemi; sun.intensity = P.sun;
    hemi.groundColor.setHex(dk ? 0x22242c : 0x8a8f9c);
    pcols = { bronze: new T.Color(P.bronze), silver: new T.Color(P.silver), gold: new T.Color(P.gold), fc: new T.Color(P.fc) };
    render();
  };
  onTheme(applyTheme);

  const tip3d = $('tip3d');
  const bubble = $('bubble');
  const ray = new T.Raycaster();
  const mouse = new T.Vector2();
  const original = new Map();
  let hovered = null;
  function setHighlight(obj) {
    if (hovered === obj) return;
    if (hovered) hovered.traverse((o) => {
      if (o.isMesh && original.has(o)) { if (o.material !== original.get(o)) o.material.dispose(); o.material = original.get(o); }
    });
    hovered = obj;
    if (obj) obj.traverse((o) => {
      if (o.isMesh && o.material?.isMeshStandardMaterial) {
        if (!original.has(o)) original.set(o, o.material);
        const c = o.material.clone();
        c.emissive = new T.Color(isDark() ? 0x2a2a3a : 0x24243a);
        c.emissiveIntensity = 1;
        o.material = c;
      }
    });
    render();
  }
  const rootOf = (o) => { while (o && !o.userData?.label) o = o.parent; return o; };
  function showTip(obj, x, y) {
    if (!obj) { tip3d.classList.remove('on'); return; }
    tip3d.innerHTML = `<b>${obj.userData.label}</b><span>${obj.userData.sub}</span>`;
    tip3d.classList.add('on');
    const tw = tip3d.offsetWidth;
    const th = tip3d.offsetHeight;
    tip3d.style.transform = `translate(${Math.round(Math.min(W - tw - 8, Math.max(8, x + 14)))}px,${Math.round(Math.max(8, y - th - 12))}px)`;
  }
  const act = (o, from) => {
    if (!o?.userData.action) return;
    if (o.userData.action === 'off') go('off');
    else openCase(o.userData.action, from);
  };
  cover.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || cover.classList.contains('drag')) return;
    const r = cover.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mouse.set(x / W * 2 - 1, -(y / H) * 2 + 1);
    ray.setFromCamera(mouse, cam);
    const hits = ray.intersectObjects(pickables, true);
    const o = hits.length ? rootOf(hits[0].object) : null;
    setHighlight(o);
    showTip(o, x, y);
    cover.style.cursor = o?.userData.action ? 'pointer' : '';
  });
  cover.addEventListener('pointerleave', () => { setHighlight(null); showTip(null); });
  cover.addEventListener('click', () => {
    if (st.lastDragMoved) { st.lastDragMoved = false; return; }
    act(hovered, cover);
  });

  const find = (key) => (key === 'anom' ? anomBar : pickables.find((p) => p.userData.key === key));
  document.querySelectorAll('#legend .lg').forEach((b) => {
    const key = b.dataset.key;
    const on = () => {
      const o = find(key);
      if (!o) return;
      setHighlight(o);
      const v = new T.Vector3();
      o.getWorldPosition(v);
      v.y += 1;
      v.project(cam);
      showTip(o, (v.x + 1) / 2 * W, (1 - v.y) / 2 * H);
      b.setAttribute('aria-pressed', 'true');
    };
    const off = () => { setHighlight(null); showTip(null); b.setAttribute('aria-pressed', 'false'); };
    b.addEventListener('mouseenter', on);
    b.addEventListener('focus', on);
    b.addEventListener('mouseleave', off);
    b.addEventListener('blur', off);
    b.addEventListener('click', () => act(find(key), b));
  });

  const MSG = ['Next 12 months of forecast are in.', 'February came in 3.1σ low. Flagging it.', 'Pulling context from the KPI layer...', 'Root-cause draft is ready for review.'];
  let mi = 0;
  bubble.textContent = MSG[0];
  let running = !reduce;
  if (!reduce) setInterval(() => {
    if (!running) return;
    bubble.classList.add('fade');
    setTimeout(() => { mi = (mi + 1) % MSG.length; bubble.textContent = MSG[mi]; bubble.classList.remove('fade'); }, 260);
  }, 3600);
  const bv = new T.Vector3();
  const placeBubble = () => {
    bv.set(bot.position.x, bot.position.y + 0.62, bot.position.z).project(cam);
    bubble.style.transform = `translate(${Math.round((bv.x + 1) / 2 * W + 6)}px,${Math.round((1 - bv.y) / 2 * H - bubble.offsetHeight)}px)`;
  };

  let clock = 0;
  function update(dt) {
    clock += dt;
    if (!reduce && performance.now() - st.interact > 2600) st.taz += Math.sin(clock * 0.25) * 0.0009;
    st.az += (st.taz - st.az) * 0.12;
    st.el += (st.tel - st.el) * 0.12;
    for (let i = 0; i < N; i++) {
      const u = ((i / N) + clock * 0.045) % 1;
      const s = u < 0.03 ? u / 0.03 : u > 0.95 ? (1 - u) / 0.05 : 1;
      dummy.position.copy(curve.getPointAt(u));
      dummy.rotation.set(clock * 1.3 + i, clock + i * 0.5, 0);
      dummy.scale.setScalar(Math.max(0.001, s));
      dummy.updateMatrix();
      packets.setMatrixAt(i, dummy.matrix);
      packets.setColorAt(i, packetColor(u));
    }
    packets.instanceMatrix.needsUpdate = true;
    if (packets.instanceColor) packets.instanceColor.needsUpdate = true;
    const pulse = 0.5 + 0.5 * Math.sin(clock * 4);
    anomBar.scale.x = anomBar.scale.z = 1 + pulse * 0.25;
    const bob = Math.sin(clock * 2) * 0.08;
    bot.position.y = 1.15 + bob;
    bot.rotation.y = st.az - 0.35 + Math.sin(clock * 0.7) * 0.25;
    blob.scale.setScalar(1 - bob * 0.8);
    antTip.scale.setScalar(1 + pulse * 0.3);
    tip.scale.setScalar(1 + 0.3 * Math.sin(clock * 6));
  }
  function render() {
    if (!W) return;
    orbitCam(cam, st, target);
    R.render(scene, cam);
    placeBubble();
  }
  function resize() {
    const r = cover.getBoundingClientRect();
    if (r.width < 10) return;
    W = r.width; H = r.height;
    R.setSize(W, H, false);
    sizeOrtho(cam, W, H, 9.7, 16.2);
    render();
  }
  const loop = loopWhenVisible(cover, { update, render, isRunning: () => running });
  attachOrbit(cover, st, () => { if (!loop.active()) { st.az = st.taz; st.el = st.tel; render(); } }, { minEl: 0.22, maxEl: 1.0 });
  const pauseBtn = $('pause3d');
  const label = () => { pauseBtn.textContent = running ? 'Pause' : 'Play'; pauseBtn.setAttribute('aria-pressed', String(!running)); };
  pauseBtn.addEventListener('click', () => { running = !running; label(); loop.sync(); });
  label();
  $('reset3d').addEventListener('click', () => { st.taz = 0.72; st.tel = 0.52; if (!loop.active()) { st.az = st.taz; st.el = st.tel; render(); } });
  canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
  canvas.addEventListener('webglcontextrestored', () => { applyTheme(); loop.sync(); });
  applyTheme();
  update(0);
  resize();
  new ResizeObserver(resize).observe(cover);
  loop.sync();
}

/* ---------- scene 2: experience stack, one layer per role ---------- */
function career() {
  const stage = $('xp-stage');
  const R = makeRenderer($('c3d-xp'));
  if (!R) return;
  const scene = new T.Scene();
  const cam = new T.OrthographicCamera(-3, 3, 3, -3, 0.1, 100);
  const target = new T.Vector3(0, 1.15, 0);
  const st = { az: 0.78, el: 0.5, taz: 0.78, tel: 0.5, interact: 0 };
  const hemi = new T.HemisphereLight(0xffffff, 0x8a8f9c, 0.85);
  scene.add(hemi);
  const sun = new T.DirectionalLight(0xffffff, 0.8);
  sun.position.set(-4, 10, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(512, 512);
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 30 });
  scene.add(sun);
  const order = ['entain', 'bloom', 'p990', 'msft'];
  const mats = [];
  const slabs = order.map((k, i) => {
    const m = std(0xffffff);
    mats.push(m);
    const s = slab(2.5, 2.5, 0.24, 0.34, m);
    s.userData = { k, base: i * 0.7, lift: 0 };
    s.position.y = i * 0.7;
    scene.add(s);
    return s;
  });
  const pipeMat = std(0xffffff);
  const pipe = new T.Mesh(new T.CylinderGeometry(0.03, 0.03, 2.6, 10), pipeMat);
  pipe.position.y = 1.25;
  scene.add(pipe);
  const dotMat = new T.MeshStandardMaterial({ color: 0xffffff, emissive: 0x000000 });
  const dots = Array.from({ length: 9 }, (_, i) => {
    const d = new T.Mesh(new T.SphereGeometry(0.05, 10, 8), dotMat);
    scene.add(d);
    return { m: d, o: i / 9 };
  });
  const floorMat = new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.08, depthWrite: false });
  const floor = new T.Mesh(new T.CircleGeometry(2.3, 40), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.03;
  scene.add(floor);
  let active = 'msft';
  let W = 0;
  let H = 0;
  const applyTheme = () => {
    const dk = isDark();
    const neutral = dk ? [0x2a2b33, 0x30313b, 0x373845, 0x3e3f4e] : [0xE4E4E7, 0xDCDCE2, 0xD2D2DB, 0xC8C8D3];
    const acc = dk ? 0x8F91F8 : 0x5B5BD6;
    slabs.forEach((s, j) => {
      const on = s.userData.k === active;
      mats[j].color.setHex(on ? acc : neutral[j]);
      mats[j].emissive.setHex(on ? (dk ? 0x1b1c40 : 0x1a1a50) : 0x000000);
    });
    pipeMat.color.setHex(dk ? 0x52525b : 0xA1A1AA);
    dotMat.color.setHex(acc); dotMat.emissive.setHex(acc); dotMat.emissiveIntensity = 0.45;
    floorMat.opacity = dk ? 0.3 : 0.08;
    hemi.intensity = dk ? 0.6 : 0.85;
    render();
  };
  onTheme(applyTheme);
  let clock = 0;
  function update(dt) {
    clock += dt;
    if (!reduce && performance.now() - st.interact > 2600) st.taz += dt * 0.18;
    st.az += (st.taz - st.az) * 0.12;
    st.el += (st.tel - st.el) * 0.12;
    slabs.forEach((s) => { const t = s.userData.base + s.userData.lift; s.position.y += (t - s.position.y) * 0.14; });
    dots.forEach((o) => { o.m.position.y = ((clock * 0.22 + o.o) % 1) * 2.5; });
  }
  function render() { if (!W) return; orbitCam(cam, st, target); R.render(scene, cam); }
  function resize() {
    const r = stage.getBoundingClientRect();
    if (r.width < 10) return;
    W = r.width; H = r.height;
    R.setSize(W, H, false);
    sizeOrtho(cam, W, H, 4.3, 4.7);
    render();
  }
  const loop = loopWhenVisible(stage, { update, render, margin: '80px' });
  const setActive = (k) => {
    active = k;
    slabs.forEach((s) => { s.userData.lift = s.userData.k === k ? 0.3 : 0; });
    applyTheme();
    if (!loop.active()) { slabs.forEach((s) => { s.position.y = s.userData.base + s.userData.lift; }); render(); }
  };
  document.addEventListener('portfolio:xp', (e) => setActive(e.detail));
  attachOrbit(stage, st, () => { if (!loop.active()) { st.az = st.taz; st.el = st.tel; render(); } }, { minEl: 0.2, maxEl: 1.1 });
  setActive('msft');
  update(0);
  resize();
  new ResizeObserver(resize).observe(stage);
  loop.sync();
}

/* ---------- scene 3: Off the clock (trail, F1 lap, orbit) ---------- */
function offTheClock() {
  const stage = $('stage');
  const R = makeRenderer($('c3d2'));
  if (!R) return;
  const hud = $('hud');
  const ctl = $('hud-ctl');
  const cam = new T.OrthographicCamera(-6, 6, 3, -3, 0.1, 200);
  const target = new T.Vector3(0, 0.4, 0);
  const st = { az: 0.6, el: 0.62, taz: 0.6, tel: 0.62, interact: 0 };
  const tmp = new T.Color();
  const baseMat = std(0xE3E6EC);
  const lights = (sc) => {
    const h = new T.HemisphereLight(0xffffff, 0x8a8f9c, 0.8);
    sc.add(h);
    const d = new T.DirectionalLight(0xffffff, 0.8);
    d.position.set(-5, 12, 6);
    d.castShadow = true;
    d.shadow.mapSize.set(1024, 1024);
    Object.assign(d.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 });
    sc.add(d);
    return { h, d };
  };

  // Trail: synthetic terrain with a route ribbon
  const trail = new T.Scene();
  const LT = lights(trail);
  const hgt = (x, z) => 1.5 * Math.exp(-((x - 0.6) ** 2 + (z + 0.5) ** 2) / 4.2) + 0.32 * Math.sin(1.3 * x + 0.7) * Math.cos(1.1 * z) + 0.14 * Math.sin(3.1 * x) * Math.sin(2.7 * z + 1) + 0.05 * Math.sin(7 * x + 2 * z);
  const tg = new T.PlaneGeometry(8, 8, 72, 72);
  tg.rotateX(-Math.PI / 2);
  const pa = tg.attributes.position;
  const cols = [];
  const cLow = new T.Color(0x5F9470);
  const cMid = new T.Color(0x8C8F7A);
  const cHigh = new T.Color(0xF2F2F2);
  for (let i = 0; i < pa.count; i++) {
    const y = hgt(pa.getX(i), pa.getZ(i));
    pa.setY(i, y);
    const k = Math.max(0, Math.min(1, (y + 0.3) / 1.9));
    if (k < 0.55) tmp.copy(cLow).lerp(cMid, k / 0.55); else tmp.copy(cMid).lerp(cHigh, (k - 0.55) / 0.45);
    cols.push(tmp.r, tmp.g, tmp.b);
  }
  tg.setAttribute('color', new T.Float32BufferAttribute(cols, 3));
  tg.computeVertexNormals();
  const terr = new T.Mesh(tg, new T.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
  terr.receiveShadow = true; terr.castShadow = true;
  trail.add(terr);
  const tb = slab(8.1, 8.1, 0.35, 0.3, baseMat);
  tb.position.y = -0.75;
  trail.add(tb);
  const routePts = [];
  for (let s = 0; s <= 60; s++) {
    const u = s / 60;
    const rx = -3.2 + 3.9 * u + 0.55 * Math.sin(u * 7);
    const rz = 3.1 - 3.7 * u + 0.45 * Math.cos(u * 6);
    routePts.push(new T.Vector3(rx, hgt(rx, rz) + 0.07, rz));
  }
  const route = new T.CatmullRomCurve3(routePts);
  const tube = new T.Mesh(new T.TubeGeometry(route, 240, 0.045, 8, false), new T.MeshStandardMaterial({ color: 0xFF6B3D, roughness: 0.4, emissive: 0x5a1a00, emissiveIntensity: 0.4 }));
  tube.castShadow = true;
  trail.add(tube);
  const runner = new T.Mesh(new T.SphereGeometry(0.11, 16, 12), new T.MeshStandardMaterial({ color: 0xffffff }));
  runner.castShadow = true;
  trail.add(runner);
  const ROUTE_KM = 8.4;
  const elevAt = (y) => Math.round(180 + (y + 0.3) / 1.9 * 1100);
  const prof = Array.from({ length: 81 }, (_, i) => elevAt(route.getPointAt(i / 80).y - 0.07));
  const pMin = Math.min(...prof);
  const pMax = Math.max(...prof);
  const gainTo = [0];
  for (let i = 1; i < prof.length; i++) gainTo.push(gainTo[i - 1] + Math.max(0, prof[i] - prof[i - 1]));
  const px = (i) => (i / 80) * 176 + 2;
  const py = (e) => 32 - (e - pMin) / (pMax - pMin || 1) * 28;
  const profLine = prof.map((e, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)},${py(e).toFixed(1)}`).join(' ');

  // F1 lap: speed-colored ribbon over a board
  const lap = new T.Scene();
  const LL = lights(lap);
  const lb = slab(9.2, 6.2, 0.25, 0.5, baseMat);
  lb.position.y = -0.3;
  lb.receiveShadow = true;
  lap.add(lb);
  const track = new T.CatmullRomCurve3([[-3.6, 1.6], [-1.2, 2.2], [0.6, 1.4], [1.6, 2.3], [3.4, 2.1], [3.9, 0.4], [2.6, -0.6], [3.3, -2.0], [1.4, -2.4], [-0.4, -1.2], [-2.2, -2.3], [-3.8, -1.4], [-4.0, 0.2]]
    .map((p) => new T.Vector3(p[0], 0.02, p[1])), true, 'centripetal');
  const NS = 420;
  const TW = 0.13;
  const tangents = Array.from({ length: NS }, (_, j) => track.getTangentAt(j / NS));
  const curv = tangents.map((_, j) => tangents[(j - 6 + NS) % NS].angleTo(tangents[(j + 6) % NS]));
  const raw = curv.map((_, j) => { let acc = 0; for (let q = -10; q <= 10; q++) acc += curv[(j + q + NS) % NS]; return acc / 21; });
  const rmin = Math.min(...raw);
  const rmax = Math.max(...raw);
  const sm = raw.map((v) => Math.pow(1 - (v - rmin) / (rmax - rmin || 1), 1.6));
  const slow = new T.Color(0xE5484D);
  const midc = new T.Color(0xF5A524);
  const fast = new T.Color(0x5B5BD6);
  const pos = [];
  const cl = [];
  const idx = [];
  for (let j = 0; j < NS; j++) {
    const p = track.getPointAt(j / NS);
    const t = tangents[j];
    const nx = -t.z;
    const nz = t.x;
    pos.push(p.x + nx * TW, 0.06, p.z + nz * TW, p.x - nx * TW, 0.06, p.z - nz * TW);
    const v = sm[j];
    if (v < 0.5) tmp.copy(slow).lerp(midc, v / 0.5); else tmp.copy(midc).lerp(fast, (v - 0.5) / 0.5);
    cl.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
    const a0 = j * 2;
    const b0 = ((j + 1) % NS) * 2;
    idx.push(a0, b0, a0 + 1, a0 + 1, b0, b0 + 1);
  }
  const rg = new T.BufferGeometry();
  rg.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  rg.setAttribute('color', new T.Float32BufferAttribute(cl, 3));
  rg.setIndex(idx);
  rg.computeVertexNormals();
  lap.add(new T.Mesh(rg, new T.MeshBasicMaterial({ vertexColors: true, side: T.DoubleSide })));
  const under = new T.Mesh(new T.TubeGeometry(track, 420, 0.2, 4, true), new T.MeshStandardMaterial({ color: 0x2A2B31, roughness: 0.9 }));
  under.scale.y = 0.08; under.position.y = 0.03; under.receiveShadow = true;
  lap.add(under);
  const sfp = track.getPointAt(0);
  const sf = new T.Mesh(new T.BoxGeometry(0.06, 0.02, 0.46), new T.MeshStandardMaterial({ color: 0xffffff }));
  sf.position.set(sfp.x, 0.08, sfp.z);
  sf.rotation.y = Math.atan2(tangents[0].x, tangents[0].z) + Math.PI / 2;
  lap.add(sf);
  const car = new T.Group();
  const body = new T.Mesh(new T.BoxGeometry(0.42, 0.09, 0.16), new T.MeshStandardMaterial({ color: 0xF4F4F5, roughness: 0.4 }));
  body.position.y = 0.12; body.castShadow = true;
  car.add(body);
  const wing = new T.Mesh(new T.BoxGeometry(0.06, 0.05, 0.24), new T.MeshStandardMaterial({ color: 0x18181B }));
  wing.position.set(-0.2, 0.18, 0);
  car.add(wing);
  lap.add(car);

  // Orbit: a small Earth with an ISS-like satellite at 51.6° inclination
  const orbit = new T.Scene();
  const LO = { h: new T.HemisphereLight(0x8899ff, 0x0a0a12, 0.35) };
  orbit.add(LO.h);
  LO.d = new T.DirectionalLight(0xffffff, 1.15);
  LO.d.position.set(-8, 3, 6);
  orbit.add(LO.d);
  const eg = new T.SphereGeometry(1.5, 64, 40);
  const ep = eg.attributes.position;
  const ecol = [];
  const ocean = new T.Color(0x2D5F9A);
  const land = new T.Color(0x4F8A5B);
  const sand = new T.Color(0xB89B6A);
  const ice = new T.Color(0xEDEFF5);
  for (let i = 0; i < ep.count; i++) {
    const x = ep.getX(i) / 1.5;
    const y = ep.getY(i) / 1.5;
    const z = ep.getZ(i) / 1.5;
    const n = Math.sin(3.1 * x + 1.7 * y) * Math.cos(2.3 * z - 0.6) + 0.55 * Math.sin(5.7 * y + 2.2 * z) + 0.3 * Math.sin(9.1 * x - 4.3 * z);
    if (Math.abs(y) > 0.86) tmp.copy(ice);
    else if (n > 0.45) tmp.copy(land).lerp(sand, Math.max(0, Math.min(1, (n - 0.9) * 1.5)));
    else tmp.copy(ocean).lerp(new T.Color(0x3B78B8), Math.max(0, n + 0.3) * 0.5);
    ecol.push(tmp.r, tmp.g, tmp.b);
  }
  eg.setAttribute('color', new T.Float32BufferAttribute(ecol, 3));
  const earth = new T.Mesh(eg, new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }));
  earth.rotation.z = 0.41;
  orbit.add(earth);
  const atmo = new T.Mesh(new T.SphereGeometry(1.6, 48, 32), new T.MeshBasicMaterial({ color: 0x8F91F8, transparent: true, opacity: 0.12, side: T.BackSide }));
  orbit.add(atmo);
  const moon = new T.Mesh(new T.SphereGeometry(0.3, 24, 16), new T.MeshStandardMaterial({ color: 0xC9C9CF, roughness: 1, flatShading: true }));
  orbit.add(moon);
  const sat = new T.Group();
  sat.add(new T.Mesh(new T.BoxGeometry(0.2, 0.12, 0.12), new T.MeshStandardMaterial({ color: 0xF4F4F5, metalness: 0.3, roughness: 0.4 })));
  [-1, 1].forEach((s) => {
    const panel = new T.Mesh(new T.BoxGeometry(0.03, 0.015, 0.46), new T.MeshStandardMaterial({ color: 0x5B5BD6, metalness: 0.2, roughness: 0.3, emissive: 0x15154a }));
    panel.position.z = s * 0.3;
    sat.add(panel);
  });
  orbit.add(sat);
  const INC = 51.6 * Math.PI / 180;
  const ORAD = 2.15;
  const satPos = (a, out) => {
    const x = Math.cos(a) * ORAD;
    const z = Math.sin(a) * ORAD;
    return out.set(x, z * Math.sin(INC), z * Math.cos(INC));
  };
  const ringPts = Array.from({ length: 129 }, (_, i) => satPos(i / 128 * Math.PI * 2, new T.Vector3()));
  orbit.add(new T.Line(new T.BufferGeometry().setFromPoints(ringPts), new T.LineBasicMaterial({ color: 0x8F91F8, transparent: true, opacity: 0.35 })));
  const TRAIL = 60;
  const trailArr = new Float32Array(TRAIL * 3);
  const trailGeo = new T.BufferGeometry();
  trailGeo.setAttribute('position', new T.BufferAttribute(trailArr, 3));
  orbit.add(new T.Line(trailGeo, new T.LineBasicMaterial({ color: 0xFF6B4F })));
  const starPos = [];
  for (let i = 0; i < 500; i++) {
    const u = Math.random() * 2 - 1;
    const th = Math.random() * Math.PI * 2;
    const r = 16 + Math.random() * 6;
    const s = Math.sqrt(1 - u * u);
    starPos.push(r * s * Math.cos(th), r * u, r * s * Math.sin(th));
  }
  const starGeo = new T.BufferGeometry();
  starGeo.setAttribute('position', new T.Float32BufferAttribute(starPos, 3));
  orbit.add(new T.Points(starGeo, new T.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.8 })));

  const SCENES = {
    trail: { sc: trail, target: new T.Vector3(0, 0.4, 0), minH: 8.4, minW: 12.4, fig: 'Fig. 2, placeholder terrain', how: 'USGS 3DEP elevation + my GPX route, meshed and drawn with three.js. Placeholder terrain and numbers until I add a real run.' },
    lap: { sc: lap, target: new T.Vector3(0, 0.4, 0), minH: 6.8, minW: 11.8, fig: 'Fig. 3, placeholder circuit', how: 'One lap of FastF1 telemetry, resampled and colored by speed: red is braking, iris is flat out. Try DRS. Placeholder circuit until I pick a real lap.' },
    orbit: { sc: orbit, target: new T.Vector3(0, 0, 0), minH: 6.6, minW: 8.6, fig: 'Fig. 4, illustrative orbit', how: 'An ISS-like orbit: about 92 minutes per lap at 51.6° inclination, with time warp. Positions are illustrative, not live tracking.' },
  };
  let cur = 'trail';
  let W = 0;
  let H = 0;
  let clock = 0;
  const S = { golden: false, drs: false, lapU: 0, lapT: 0, best: null, last: null, warp: 1, satA: 0, orbits: 0, simMin: 0, trailFill: 0 };

  // HUDs
  const hk = (k, v, id) => `<span class="hud-k">${k}<b id="${id}">${v}</b></span>`;
  const btn = (id, label, pressed) => `<button type="button" id="${id}" aria-pressed="${pressed}">${label}</button>`;
  const fmtLap = (s) => (s == null ? '--' : `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, '0')}`);
  function buildHud() {
    stage.classList.toggle('space', cur === 'orbit');
    if (cur === 'trail') {
      hud.innerHTML = `<div class="hud-row">${hk('dist', '0.0 km', 'h-dist')}${hk('elev', '-- m', 'h-elev')}${hk('gain', '+0 m', 'h-gain')}</div>
        <div class="hud-prof"><svg viewBox="0 0 180 34" aria-hidden="true"><path class="pa" d="${profLine} L178,34 L2,34 Z"/><path class="pl" d="${profLine}"/><circle class="pd" id="h-dot" r="3" cx="2" cy="${py(prof[0]).toFixed(1)}"/></svg></div>`;
      ctl.innerHTML = btn('c-golden', 'Golden hour', S.golden);
      $('c-golden').addEventListener('click', (e) => { S.golden = !S.golden; e.currentTarget.setAttribute('aria-pressed', String(S.golden)); applyLight(); render(); });
    } else if (cur === 'lap') {
      hud.innerHTML = `<div class="hud-row">${hk('speed', '-- km/h', 'h-spd')}${hk('lap', '0:00.0', 'h-lap')}${hk('last', fmtLap(S.last), 'h-last')}${hk('best', fmtLap(S.best), 'h-best')}</div>`;
      ctl.innerHTML = btn('c-drs', 'DRS', S.drs) + btn('c-reset', 'Reset lap', false);
      $('c-drs').addEventListener('click', (e) => { S.drs = !S.drs; e.currentTarget.setAttribute('aria-pressed', String(S.drs)); });
      $('c-reset').addEventListener('click', () => { S.lapU = 0; S.lapT = 0; render(); });
    } else {
      hud.innerHTML = `<div class="hud-row">${hk('period', '~92 min', 'h-per')}${hk('orbits', '0', 'h-orb')}${hk('T+', '0 min', 'h-t')}${hk('incl.', '51.6°', 'h-inc')}</div>`;
      ctl.innerHTML = [1, 10, 60].map((w) => btn(`c-w${w}`, `${w}×`, S.warp === w)).join('');
      [1, 10, 60].forEach((w) => $(`c-w${w}`).addEventListener('click', () => {
        S.warp = w;
        [1, 10, 60].forEach((x) => $(`c-w${x}`).setAttribute('aria-pressed', String(x === w)));
      }));
    }
  }
  function applyLight() {
    const dk = isDark();
    [LT, LL].forEach((L) => { L.h.intensity = dk ? 0.55 : 0.8; L.h.groundColor.setHex(dk ? 0x22242c : 0x8a8f9c); });
    if (S.golden) {
      LT.d.color.setHex(0xFFB36B); LT.d.intensity = 1.05; LT.d.position.set(-9, 3.5, 4);
      LT.h.color.setHex(0xFFD9B0); LT.h.intensity = dk ? 0.45 : 0.6;
    } else {
      LT.d.color.setHex(0xffffff); LT.d.intensity = 0.8; LT.d.position.set(-5, 12, 6);
      LT.h.color.setHex(0xffffff);
    }
    baseMat.color.setHex(dk ? 0x1D1F27 : 0xE3E6EC);
  }
  onTheme(() => { applyLight(); render(); });

  const setText = (id, v) => { const el = $(id); if (el && el.textContent !== v) el.textContent = v; };
  function update(dt) {
    clock += dt;
    if (!reduce && performance.now() - st.interact > 2600) st.taz += dt * (cur === 'orbit' ? 0.06 : 0.12);
    st.az += (st.taz - st.az) * 0.12;
    st.el += (st.tel - st.el) * 0.12;
    // trail runner
    const u = (clock * 0.06) % 1;
    const p = route.getPointAt(u);
    runner.position.set(p.x, p.y + 0.08, p.z);
    // lap car
    const si = Math.floor(S.lapU * NS) % NS;
    const straight = sm[si] > 0.7;
    const kmh = (85 + 245 * sm[si]) * (S.drs && straight ? 1.12 : 1);
    const prevU = S.lapU;
    S.lapU = (S.lapU + dt * (kmh / 330) * 0.105) % 1;
    S.lapT += dt * 6.5;
    if (S.lapU < prevU) {
      S.last = S.lapT;
      S.best = S.best == null ? S.lapT : Math.min(S.best, S.lapT);
      S.lapT = 0;
      if (cur === 'lap') { setText('h-last', fmtLap(S.last)); setText('h-best', fmtLap(S.best)); $('hud').classList.add('flash'); setTimeout(() => $('hud')?.classList.remove('flash'), 600); }
    }
    const cp = track.getPointAt(S.lapU);
    const ct = track.getTangentAt(S.lapU);
    car.position.set(cp.x, 0, cp.z);
    car.rotation.y = Math.atan2(-ct.z, ct.x);
    // orbit
    if (cur === 'orbit') {
      const da = dt * (Math.PI * 2 / 24) * S.warp;
      S.satA += da;
      S.simMin += (da / (Math.PI * 2)) * 92;
      if (S.satA >= Math.PI * 2) { S.satA -= Math.PI * 2; S.orbits++; }
      satPos(S.satA, sat.position);
      sat.lookAt(0, 0, 0);
      earth.rotation.y += dt * 0.02 * S.warp;
      const mA = clock * 0.05;
      moon.position.set(Math.cos(mA) * 4.6, 0.6, Math.sin(mA) * 4.6);
      for (let i = TRAIL - 1; i > 0; i--) { trailArr[i * 3] = trailArr[(i - 1) * 3]; trailArr[i * 3 + 1] = trailArr[(i - 1) * 3 + 1]; trailArr[i * 3 + 2] = trailArr[(i - 1) * 3 + 2]; }
      trailArr[0] = sat.position.x; trailArr[1] = sat.position.y; trailArr[2] = sat.position.z;
      S.trailFill = Math.min(TRAIL, S.trailFill + 1);
      trailGeo.setDrawRange(0, S.trailFill);
      trailGeo.attributes.position.needsUpdate = true;
    }
    // HUD
    if (cur === 'trail') {
      const i = Math.min(80, Math.round(u * 80));
      setText('h-dist', `${(u * ROUTE_KM).toFixed(1)} km`);
      setText('h-elev', `${prof[i]} m`);
      setText('h-gain', `+${Math.round(gainTo[i])} m`);
      const dot = $('h-dot');
      if (dot) { dot.setAttribute('cx', px(i).toFixed(1)); dot.setAttribute('cy', py(prof[i]).toFixed(1)); }
    } else if (cur === 'lap') {
      setText('h-spd', `${Math.round(kmh)} km/h`);
      setText('h-lap', fmtLap(S.lapT));
    } else {
      setText('h-orb', String(S.orbits));
      const m = Math.floor(S.simMin);
      setText('h-t', m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} m` : `${m} min`);
    }
  }
  function render() {
    if (!W) return;
    orbitCam(cam, st, SCENES[cur].target);
    R.render(SCENES[cur].sc, cam);
  }
  function resize() {
    const r = stage.getBoundingClientRect();
    if (r.width < 10) return;
    W = r.width; H = r.height;
    R.setSize(W, H, false);
    sizeOrtho(cam, W, H, SCENES[cur].minH, SCENES[cur].minW);
    render();
  }
  const loop = loopWhenVisible(stage, { update, render, margin: '100px' });
  attachOrbit(stage, st, () => { if (!loop.active()) { st.az = st.taz; st.el = st.tel; render(); } }, { minEl: 0.15, maxEl: 1.1 });
  document.querySelectorAll('#off .seg button').forEach((b) => b.addEventListener('click', () => {
    cur = b.dataset.scene;
    document.querySelectorAll('#off .seg button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    $('stage-fig').textContent = SCENES[cur].fig;
    $('stage-how').textContent = SCENES[cur].how;
    if (cur === 'orbit') { st.tel = 0.35; S.trailFill = 0; }
    else if (st.tel < 0.4) st.tel = 0.62;
    buildHud();
    update(0);
    resize();
  }));
  applyLight();
  buildHud();
  update(0);
  resize();
  new ResizeObserver(resize).observe(stage);
  loop.sync();
}

export function init() {
  lakehouse();
  career();
  offTheClock();
}
