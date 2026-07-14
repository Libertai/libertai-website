// @ts-nocheck
/* eslint-disable */
/* Two-worlds globe + live pricing + scroll reveals — ported verbatim from the
 * locked static preview (wembi-body.html). Runs only in the browser (called from
 * a useEffect). Regenerate via scratchpad/gen-engine.cjs; do not hand-edit. */
export function initHome(): () => void {
  var _stopped = false, _raf = 0, _off: Array<() => void> = [];
  var canvas = document.getElementById("net");
  if (!canvas) return function () {};

// scroll reveal
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  _off.push(function () { io.disconnect(); });

  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;


  // live flagship price, shared across the billboard, two-worlds strip and the
  // comparison bar so every GLM figure on the page comes from one source
  var flagIn = "$1.40", flagOut = "$4.40";

  // live price hydration from the Aleph LTAI_PRICING aggregate (same source as production)
  try {
    var pctl = new AbortController(); _off.push(function () { try { pctl.abort(); } catch (e) {} });
    setTimeout(function () { pctl.abort(); }, 5000);
    fetch("https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING", { signal: pctl.signal })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var models = ((j.data || {}).LTAI_PRICING || {}).models || [];
        var byId = {};
        models.forEach(function (m) { if (m && m.id && m.pricing && m.pricing.text) byId[m.id.toLowerCase()] = m.pricing.text; });
        var hit = 0;
        document.querySelectorAll("[data-mid]").forEach(function (el) {
          var p = byId[el.dataset.mid.toLowerCase()];
          if (!p) return;
          hit++;
          var pin = "$" + p.price_per_million_input_tokens.toFixed(2);
          var pout = "$" + p.price_per_million_output_tokens.toFixed(2);
          if (el.dataset.k === "in") el.innerHTML = "<i>$</i>" + p.price_per_million_input_tokens.toFixed(2);
          else if (el.dataset.k === "out") el.innerHTML = "<i>$</i>" + p.price_per_million_output_tokens.toFixed(2);
          else el.textContent = pin + " / " + pout;
        });
        // flagship figure feeds the parts of the page that are not data-mid driven
        var glm = byId["glm-5.2"];
        if (glm) {
          flagIn = "$" + glm.price_per_million_input_tokens.toFixed(2);
          flagOut = "$" + glm.price_per_million_output_tokens.toFixed(2);
          var cmpUs = document.getElementById("cmpUsVal");
          if (cmpUs) cmpUs.textContent = flagOut;
          var cmpUsM = document.getElementById("cmpUsValM");
          if (cmpUsM) cmpUsM.textContent = flagOut;
          var f = document.getElementById("worlds");
          var s3 = document.getElementById("stV3");
          if (f && s3 && f.classList.contains("b")) s3.innerHTML = "<b>" + flagIn + "</b> in / <b>" + flagOut + "</b> out";
        }
      }).catch(function () {});
  } catch (ep) {}

  // ---- the two worlds: centralized/red (A) vs decentralized/purple (B) ----
  var frameEl = document.getElementById("worlds");
  var canvas = document.getElementById("net");
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(devicePixelRatio || 1, 2);
  var isMob = matchMedia("(max-width: 860px)");
  var wsw = document.getElementById("wsw");
  var ntip = document.getElementById("ntip"), ntipT1 = document.getElementById("ntipT1"), ntipT2 = document.getElementById("ntipT2");
  var hoverhint = document.getElementById("hoverhint");
  var stV1 = document.getElementById("stV1"), stV2 = document.getElementById("stV2"), stK3 = document.getElementById("stK3"), stV3 = document.getElementById("stV3");

  var COL_A = { main: [235, 87, 87], bright: [255, 130, 130], node: [255, 158, 158] };
  var COL_B = { main: [124, 100, 255], bright: [176, 164, 255], node: [190, 178, 255] };
  function mixc(a, b, t) {
    return Math.round(a[0] + (b[0] - a[0]) * t) + "," + Math.round(a[1] + (b[1] - a[1]) * t) + "," + Math.round(a[2] + (b[2] - a[2]) * t);
  }
  function norm3(v) { var m = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / m, v[1] / m, v[2] / m]; }
  function gauss() { return (Math.random() + Math.random() + Math.random() - 1.5) * 0.42; }

  var N = 104, posA = [], posB = [], meta = [];
  for (var i = 0; i < N; i++) {
    var yy = 1 - (i / (N - 1)) * 2, rr0 = Math.sqrt(1 - yy * yy), th = i * 2.399963229728653;
    posB.push([Math.cos(th) * rr0, yy, Math.sin(th) * rr0]);
    meta.push({ accent: i % 7 === 0, ph: (i % 11) / 11, cluster: 0 });
  }
  var CTRS = [norm3([0.8, 0.45, 0.2]), norm3([-0.55, 0.6, -0.35]), norm3([-0.2, -0.75, 0.55]), norm3([0.45, -0.3, -0.8])];
  var CSIZE = [40, 28, 20, 16], filled = 0;
  for (var c = 0; c < 4; c++) for (var k = 0; k < CSIZE[c] && filled < N; k++, filled++) {
    posA.push(norm3([CTRS[c][0] + gauss() * 0.3, CTRS[c][1] + gauss() * 0.3, CTRS[c][2] + gauss() * 0.3]));
    meta[filled].cluster = c;
  }
  while (posA.length < N) posA.push(norm3([gauss(), gauss(), gauss()]));

  function buildEdges(P, th2) {
    var out = [], ei = 0;
    for (var a = 0; a < N; a++) for (var b2 = a + 1; b2 < N; b2++) {
      var dx = P[a][0] - P[b2][0], dy = P[a][1] - P[b2][1], dz = P[a][2] - P[b2][2];
      if (dx * dx + dy * dy + dz * dz < th2) {
        out.push({ a: a, b: b2, ph: (ei * 0.618) % 1, sp: 0.45 + ((ei * 7) % 5) * 0.16, dir: ei % 2 === 0, accent: meta[a].accent || meta[b2].accent });
        ei++;
      }
    }
    return out;
  }
  var edgesA = buildEdges(posA, 0.075);
  if (edgesA.length > 460) edgesA = edgesA.filter(function (_, idx) { return idx % 2 === 0; });
  var edgesB = buildEdges(posB, 0.2);

  // orbital rings (shared)
  function crs(u, w) { return [u[1]*w[2]-u[2]*w[1], u[2]*w[0]-u[0]*w[2], u[0]*w[1]-u[1]*w[0]]; }
  function ringBasis(n) {
    var nn = norm3(n), helper = Math.abs(nn[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    var u = norm3(crs(nn, helper)), v = crs(nn, u);
    return { u: u, v: v };
  }
  var ringDefs = [
    { n: [0.15, 1, 0.12], rr: 1.44, count: 12, sp: 0.0034, accent: 0.35 },
    { n: [0.82, 0.5, 0.2], rr: 1.5, count: 10, sp: -0.0028, accent: 0.5 },
    { n: [0.45, 0.55, -0.7], rr: 1.28, count: 9, sp: 0.0044, accent: 0.3 }
  ];
  var rings = ringDefs.map(function (d) {
    var bas = ringBasis(d.n), parts = [];
    for (var k2 = 0; k2 < d.count; k2++) parts.push({ a: (k2 / d.count) * 6.2832 + Math.random() * 0.4, sp: d.sp * (0.85 + Math.random() * 0.4), accent: Math.random() < d.accent, trail: 0.05 + Math.random() * 0.045 });
    return { u: bas.u, v: bas.v, rr: d.rr, parts: parts };
  });
  function ringPt(rg, an) {
    var cc = Math.cos(an), ss = Math.sin(an);
    return [(rg.u[0]*cc + rg.v[0]*ss)*rg.rr, (rg.u[1]*cc + rg.v[1]*ss)*rg.rr, (rg.u[2]*cc + rg.v[2]*ss)*rg.rr];
  }
  function line(x0, y0, x1, y1) { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); }

  // node identities
  var namesB = ["aleph-crn-par-01","hetzner-fsn-crn","ovh-gra-worker-07","contabo-nue-04","scaleway-ams-crn","crn.libertai.eu","node.twentysix.cloud","crn-lon-stakeplus","aleph-crn-nyc-02","gcs-frankfurt-crn","crn.okeso.fr","aleph-node-mtl-01","crn-sgp-atlas","baremetal-hel-09","crn.decentrahost.io","aleph-crn-mad-03","rackline-waw-crn","crn-syd-southern"];
  var realData = false;
  var CLNAMES = ["US-WEST MEGACLUSTER", "GOV-PARTNER REGION", "HYPERSCALER AZ-1", "CLOSED LAB DC-4"];
  try {
    var ctl = new AbortController(); _off.push(function () { try { ctl.abort(); } catch (e) {} });
    setTimeout(function () { ctl.abort(); }, 4500);
    fetch("https://api2.aleph.im/api/v0/aggregates/0xa1B3bb7d2332383D96b7796B908fB7f7F3c2Be10.json?keys=corechannel", { signal: ctl.signal })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var rn = ((j.data.corechannel || {}).resource_nodes || []).map(function (n) { return n && n.name; }).filter(function (x) { return x && x.length > 1; });
        if (rn.length > 6) {
          namesB = rn.slice(0, 90);
          realData = true;
          if (frameEl.classList.contains("b")) hoverhint.textContent = "Hover the nodes · live Aleph Cloud CRNs";
        }
      }).catch(function () {});
  } catch (e0) {}

  // state machine
  var sT = 0, target = 0, autoDone = false;
  var bytes = 4271882090113;
  function setStrip(b) {
    if (b) {
      stV1.textContent = "0 bytes";
      stV2.textContent = "TEE-attested";
      stK3.textContent = "GLM-5.2 · 1M tokens";
      stV3.innerHTML = "<b>" + flagIn + "</b> in / <b>" + flagOut + "</b> out";
      hoverhint.textContent = realData ? "Hover the nodes · live Aleph Cloud CRNs" : "Hover the nodes";
    } else {
      stV2.textContent = "None · logged & profiled";
      stK3.textContent = "Flagship model · price";
      stV3.textContent = "$27.40 / 1M · unstable";
      hoverhint.textContent = "Hover the nodes";
    }
  }
  function setWorld(b, fromUser) {
    target = b ? 1 : 0;
    if (fromUser) autoDone = true;
    frameEl.classList.toggle("b", b);
    wsw.setAttribute("aria-pressed", String(b));
    setStrip(b);
  }
  wsw.addEventListener("click", function () {
    setWorld(target === 0, true);
  });

  // auto-flip: hold off until the whole closed panel is framed near the top of
  // the screen - its doom stats visible at the bottom - and the reader settles
  // there, then switch. Arms only in that framing and cancels if they scroll on
  // past, so the flip lands once the full picture has been taken in, not the
  // moment the panel edges into view. Scrolling is never captured.
  if (!reduce) {
    var dwell = null;
    function maybeFlip() {
      if (autoDone || target !== 0) { removeEventListener("scroll", maybeFlip); return; }
      var r = frameEl.getBoundingClientRect();
      var vh = window.innerHeight;
      if (r.top <= vh * 0.15 && r.top > -vh * 0.06) {
        if (!dwell) dwell = setTimeout(function () {
          if (!autoDone && target === 0) { autoDone = true; setWorld(true, false); }
          removeEventListener("scroll", maybeFlip);
        }, 500);
      } else if (dwell) { clearTimeout(dwell); dwell = null; }
    }
    addEventListener("scroll", maybeFlip, { passive: true });
    _off.push(function () { removeEventListener("scroll", maybeFlip); });
    maybeFlip();
  }

  // pointer for hover
  var lx = -1e4, ly = -1e4;
  canvas.addEventListener("pointermove", function (e) {
    var r = canvas.getBoundingClientRect();
    lx = e.clientX - r.left; ly = e.clientY - r.top;
  }, { passive: true });
  canvas.addEventListener("pointerleave", function () { lx = ly = -1e4; });

  var W = 0, H = 0, R = 0, cx = 0, cy = 0;
  var ct = Math.cos(0.42), st = Math.sin(0.42), ang = reduce ? 0.6 : -0.5, ca = 1, sa = 0;
  function resize() {
    var r = canvas.getBoundingClientRect(); W = r.width; H = r.height;
    canvas.width = W * dpr | 0; canvas.height = H * dpr | 0; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  var _ro = new ResizeObserver(resize); _ro.observe(canvas.parentNode); resize();
  _off.push(function () { _ro.disconnect(); });

  function proj(x, y, z) {
    var x1 = x*ca - z*sa, z1 = x*sa + z*ca, y1 = y*ct - z1*st, z2 = y*st + z1*ct;
    return { sx: cx + x1*R, sy: cy + y1*R, depth: (z2 + 1) / 2, z: z2 };
  }

  var SEG = 0.55, ACTIVE = 0.6;
  function drawDashSet(edges, pr, weight, mainC, brightC, t) {
    if (weight < 0.03) return;
    ctx.lineCap = "round";
    for (var e2 = 0; e2 < edges.length; e2++) {
      var eg = edges[e2], EA = pr[eg.a], EB = pr[eg.b], ed = (EA.depth + EB.depth) / 2, u0, u1, inten;
      if (reduce) { u0 = 0; u1 = 1; inten = 1; }
      else {
        var cyc = (t * 0.00016 * eg.sp + eg.ph) % 1; if (cyc < 0) cyc += 1;
        if (cyc > ACTIVE) continue;
        var prog = cyc / ACTIVE, head = prog * (1 + SEG);
        u1 = Math.min(1, head); u0 = Math.max(0, head - SEG); if (u1 <= u0) continue;
        inten = Math.sin(prog * Math.PI);
      }
      var S = eg.dir ? EA : EB, E = eg.dir ? EB : EA;
      var lx0 = S.sx + (E.sx - S.sx) * u0, ly0 = S.sy + (E.sy - S.sy) * u0;
      var lx1 = S.sx + (E.sx - S.sx) * u1, ly1 = S.sy + (E.sy - S.sy) * u1;
      var al = inten * (0.08 + ed * 0.34) * weight;
      if (eg.accent) {
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(" + mainC + "," + (al * 0.5).toFixed(3) + ")"; ctx.lineWidth = 3; line(lx0, ly0, lx1, ly1);
        ctx.strokeStyle = "rgba(" + brightC + "," + al.toFixed(3) + ")"; ctx.lineWidth = 1.2; line(lx0, ly0, lx1, ly1);
        ctx.globalCompositeOperation = "source-over";
      } else {
        ctx.strokeStyle = "rgba(220,225,236," + (al * 0.75).toFixed(3) + ")"; ctx.lineWidth = 1; line(lx0, ly0, lx1, ly1);
      }
    }
    ctx.lineCap = "butt";
  }

  var fcount = 0;
  function frame(t) {
    if (_stopped) return;
    fcount++;
    ctx.clearRect(0, 0, W, H);
    // ease state
    sT += (target - sT) * 0.045;
    if (Math.abs(target - sT) < 0.002) sT = target;
    var e = sT * sT * (3 - 2 * sT);
    var mob = isMob.matches;
    R = Math.min(W, H) * (mob ? 0.30 : 0.32);
    cx = mob ? 0.5 * W : (0.63 + (0.35 - 0.63) * e) * W;
    cy = mob ? (0.50 + (0.27 - 0.50) * e) * H : 0.5 * H;
    ca = Math.cos(ang); sa = Math.sin(ang);

    var MAIN = mixc(COL_A.main, COL_B.main, e);
    var BRIGHT = mixc(COL_A.bright, COL_B.bright, e);
    var NODEC = mixc(COL_A.node, COL_B.node, e);

    // morph positions along the sphere
    var pr = [];
    for (var i2 = 0; i2 < N; i2++) {
      var A = posA[i2], B = posB[i2];
      var v = norm3([A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e, A[2] + (B[2] - A[2]) * e]);
      pr.push(proj(v[0], v[1], v[2]));
    }

    // faint ring paths
    ctx.lineWidth = 1;
    for (var ri = 0; ri < rings.length; ri++) {
      ctx.strokeStyle = "rgba(150,156,174,0.085)";
      ctx.beginPath();
      for (var s2 = 0; s2 <= 72; s2++) {
        var pp = ringPt(rings[ri], (s2 / 72) * 6.2832), pj = proj(pp[0], pp[1], pp[2]);
        if (s2 === 0) ctx.moveTo(pj.sx, pj.sy); else ctx.lineTo(pj.sx, pj.sy);
      }
      ctx.stroke();
    }

    // base structure, both sets crossfaded
    var wA = 1 - e, wB = e;
    if (wA > 0.02) for (var e3 = 0; e3 < edgesA.length; e3++) {
      var A3 = pr[edgesA[e3].a], B3 = pr[edgesA[e3].b], d3 = (A3.depth + B3.depth) / 2;
      ctx.strokeStyle = "rgba(212,118,118," + ((0.022 + d3 * 0.075) * wA).toFixed(3) + ")";
      ctx.lineWidth = 1; line(A3.sx, A3.sy, B3.sx, B3.sy);
    }
    if (wB > 0.02) for (var e4 = 0; e4 < edgesB.length; e4++) {
      var A4 = pr[edgesB[e4].a], B4 = pr[edgesB[e4].b], d4 = (A4.depth + B4.depth) / 2;
      ctx.strokeStyle = "rgba(150,156,174," + ((0.012 + d4 * 0.045) * wB).toFixed(3) + ")";
      ctx.lineWidth = 1; line(A4.sx, A4.sy, B4.sx, B4.sy);
    }

    drawDashSet(edgesA, pr, wA, MAIN, BRIGHT, t);
    drawDashSet(edgesB, pr, wB, MAIN, BRIGHT, t);

    // hover pick
    var hover = -1, hd = 26 * 26;
    if (lx > -1e3) for (var h2 = 0; h2 < N; h2++) {
      if (pr[h2].z < 0.05) continue;
      var hdx = pr[h2].sx - lx, hdy = pr[h2].sy - ly, dd2 = hdx * hdx + hdy * hdy;
      if (dd2 < hd) { hd = dd2; hover = h2; }
    }
    canvas.style.cursor = hover >= 0 ? "pointer" : "default";

    // nodes + bloom
    for (var n = 0; n < N; n++) {
      var q = pr[n], mt = meta[n];
      var isH = n === hover;
      if (mt.accent || isH) {
        var pulse = reduce ? 0.85 : 0.5 + 0.5 * Math.sin(t / 620 + mt.ph * 6.283);
        var peak = Math.max(pulse * pulse * pulse * (mt.accent ? 1 : 0), isH ? 0.9 : 0);
        if (peak > 0.05) {
          var gr = (6 + 16 * peak) * (0.5 + q.depth);
          var g = ctx.createRadialGradient(q.sx, q.sy, 0, q.sx, q.sy, gr);
          g.addColorStop(0, "rgba(" + MAIN + "," + (0.5 * peak).toFixed(3) + ")");
          g.addColorStop(1, "rgba(" + MAIN + ",0)");
          ctx.globalCompositeOperation = "lighter"; ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(q.sx, q.sy, gr, 0, 6.2832); ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        }
        ctx.fillStyle = "rgba(" + NODEC + "," + Math.min(1, 0.42 + q.depth * 0.55 + (isH ? 0.3 : 0)).toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(q.sx, q.sy, Math.max(0.7, (2.2 + (isH ? 1.4 : 0)) * (0.5 + q.depth)), 0, 6.2832); ctx.fill();
      } else {
        ctx.fillStyle = "rgba(220,224,232," + (0.13 + q.depth * 0.55).toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(q.sx, q.sy, Math.max(0.6, 1.4 * (0.5 + q.depth)), 0, 6.2832); ctx.fill();
      }
    }

    // hover ring + tooltip
    if (hover >= 0) {
      var hq = pr[hover];
      ctx.strokeStyle = "rgba(" + BRIGHT + ",0.9)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(hq.sx, hq.sy, 10 + Math.sin(t / 260) * 1.5, 0, 6.2832); ctx.stroke();
      var isB = sT > 0.5;
      if (isB) {
        ntipT1.textContent = namesB[hover % namesB.length];
        ntipT2.textContent = realData ? "Aleph Cloud · active CRN · live" : "Aleph Cloud · active CRN";
      } else {
        ntipT1.textContent = CLNAMES[meta[hover].cluster] + " · N" + String(hover).padStart(3, "0");
        ntipT2.textContent = "Closed source · logged · gov access";
      }
      ntip.style.left = hq.sx + "px";
      ntip.style.top = hq.sy + "px";
      ntip.style.opacity = 1;
    } else {
      ntip.style.opacity = 0;
    }

    // orbiting comets
    ctx.globalCompositeOperation = "lighter";
    for (var ri2 = 0; ri2 < rings.length; ri2++) {
      var rg2 = rings[ri2];
      for (var k3 = 0; k3 < rg2.parts.length; k3++) {
        var pa = rg2.parts[k3];
        if (!reduce) pa.a += pa.sp;
        var dd3 = ringPt(rg2, pa.a), pj2 = proj(dd3[0], dd3[1], dd3[2]);
        var back = pj2.z < 0, dfac = back ? 0.32 : 1;
        var d3b = ringPt(rg2, pa.a - pa.trail), pjb = proj(d3b[0], d3b[1], d3b[2]);
        var col = pa.accent ? BRIGHT : "205,210,235";
        ctx.strokeStyle = "rgba(" + col + "," + (0.45 * dfac).toFixed(3) + ")";
        ctx.lineWidth = pa.accent ? 2 : 1.4; ctx.lineCap = "round";
        line(pjb.sx, pjb.sy, pj2.sx, pj2.sy);
        var hr = (pa.accent ? 7 : 5) * dfac;
        var hg = ctx.createRadialGradient(pj2.sx, pj2.sy, 0, pj2.sx, pj2.sy, hr);
        hg.addColorStop(0, pa.accent ? "rgba(" + BRIGHT + "," + (0.95 * dfac) + ")" : "rgba(220,224,240," + (0.8 * dfac) + ")");
        hg.addColorStop(1, "rgba(" + MAIN + ",0)");
        ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(pj2.sx, pj2.sy, hr, 0, 6.2832); ctx.fill();
        ctx.fillStyle = "rgba(245,244,255," + (0.95 * dfac) + ")";
        ctx.beginPath(); ctx.arc(pj2.sx, pj2.sy, pa.accent ? 1.6 : 1.2, 0, 6.2832); ctx.fill();
        if (!back && pa.accent && k3 % 3 === 0) {
          var surf = proj(dd3[0] / rg2.rr, dd3[1] / rg2.rr, dd3[2] / rg2.rr);
          ctx.strokeStyle = "rgba(" + MAIN + ",0.16)"; ctx.lineWidth = 1; ctx.lineCap = "butt";
          line(pj2.sx, pj2.sy, surf.sx, surf.sy);
        }
      }
    }
    ctx.globalCompositeOperation = "source-over"; ctx.lineCap = "butt";

    // dystopia counters
    if (target === 0 && !reduce) {
      bytes += 41 + Math.random() * 520;
      if (fcount % 4 === 0) stV1.textContent = Math.floor(bytes).toLocaleString("en-US") + " bytes";
      if (fcount % 44 === 0) stV3.textContent = "$" + (18 + Math.random() * 22).toFixed(2) + " / 1M · unstable";
    }

    if (!reduce && !_stopped) { ang += 0.0016; _raf = _raf = requestAnimationFrame(frame); }
  }

  if (reduce) {
    sT = 1; target = 1; frameEl.classList.add("b");
    wsw.setAttribute("aria-pressed", "true");
    setStrip(true);
    _raf = requestAnimationFrame(frame);
  } else {
    setStrip(false);
    _raf = requestAnimationFrame(frame);
  }

  return function cleanup() {
    _stopped = true;
    cancelAnimationFrame(_raf);
    _off.forEach(function (f) { try { f(); } catch (e) {} });
  };
}
