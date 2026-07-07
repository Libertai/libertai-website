import { useEffect, useRef } from "react";

/**
 * The decentralized network as a globe wrapped in orbiting data streams —
 * and alive to the cursor. A rotating Fibonacci-sphere wireframe (links
 * animate as signals travelling node→node, accent nodes bloom purple)
 * encircled by three tilted orbital rings, over a parallax starfield and a
 * breathing purple nebula. Full-bleed and offset to sit behind the hero copy.
 *
 * Interactive on fine pointers (desktop): drag to rotate with inertia and an
 * idle auto-resume, hover a node for a live readout, click a node to send a
 * geodesic pulse rippling across the sphere. Touch devices keep the ambient
 * animation only, so vertical scrolling is never hijacked. Static frame under
 * prefers-reduced-motion.
 */

type Ring = {
	u: [number, number, number];
	v: [number, number, number];
	rr: number;
	parts: { a: number; sp: number; accent: boolean; trail: number }[];
};

type Node = {
	x: number;
	y: number;
	z: number;
	accent: boolean;
	ph: number;
	label: string;
	reg: string;
	ms: number;
	rp: number;
};

type Projected = { sx: number; sy: number; depth: number; z: number };

function line(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) {
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.stroke();
}

export function NodeGlobeOrbit({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const interactive = fine && !reduce;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const TAU = 6.28318530718;

		// --- globe nodes ---
		const N = 104;
		const REG = ["US-E", "US-W", "EU-W", "EU-N", "APAC", "LATAM", "AF-N", "ME"];
		const pts: Node[] = [];
		for (let i = 0; i < N; i++) {
			const y = 1 - (i / (N - 1)) * 2;
			const rr = Math.sqrt(1 - y * y);
			const th = i * 2.399963229728653;
			pts.push({
				x: Math.cos(th) * rr,
				y,
				z: Math.sin(th) * rr,
				accent: i % 7 === 0,
				ph: (i % 11) / 11,
				label: "NODE-" + String(i).padStart(3, "0"),
				reg: REG[i % REG.length],
				ms: 8 + ((i * 13) % 33),
				rp: 0,
			});
		}
		const edges: { a: number; b: number; ph: number; sp: number; dir: boolean; accent: boolean }[] = [];
		let ei = 0;
		for (let a = 0; a < N; a++) {
			for (let b = a + 1; b < N; b++) {
				const dx = pts[a].x - pts[b].x;
				const dy = pts[a].y - pts[b].y;
				const dz = pts[a].z - pts[b].z;
				if (dx * dx + dy * dy + dz * dz < 0.2) {
					edges.push({
						a,
						b,
						ph: (ei * 0.618) % 1,
						sp: 0.45 + ((ei * 7) % 5) * 0.16,
						dir: ei % 2 === 0,
						accent: pts[a].accent || pts[b].accent,
					});
					ei++;
				}
			}
		}

		// --- orbital rings ---
		const norm = (v: number[]): [number, number, number] => {
			const m = Math.hypot(v[0], v[1], v[2]) || 1;
			return [v[0] / m, v[1] / m, v[2] / m];
		};
		const crs = (a: number[], b: number[]): [number, number, number] => [
			a[1] * b[2] - a[2] * b[1],
			a[2] * b[0] - a[0] * b[2],
			a[0] * b[1] - a[1] * b[0],
		];
		const ringBasis = (n: number[]) => {
			const nn = norm(n);
			const helper = Math.abs(nn[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
			const u = norm(crs(nn, helper));
			const v = crs(nn, u);
			return { u, v };
		};
		const ringDefs = [
			{ n: [0.15, 1, 0.12], rr: 1.44, count: 12, sp: 0.0034, accent: 0.35 },
			{ n: [0.82, 0.5, 0.2], rr: 1.5, count: 10, sp: -0.0028, accent: 0.5 },
			{ n: [0.45, 0.55, -0.7], rr: 1.28, count: 9, sp: 0.0044, accent: 0.3 },
		];
		const rings: Ring[] = ringDefs.map((d) => {
			const bas = ringBasis(d.n);
			const parts = [];
			for (let k = 0; k < d.count; k++) {
				parts.push({
					a: (k / d.count) * TAU + Math.random() * 0.4,
					sp: d.sp * (0.85 + Math.random() * 0.4),
					accent: Math.random() < d.accent,
					trail: 0.05 + Math.random() * 0.045,
				});
			}
			return { u: bas.u, v: bas.v, rr: d.rr, parts };
		});

		// --- starfield ---
		const stars: { x: number; y: number; r: number; tw: number; d: number }[] = [];
		for (let s = 0; s < 150; s++) {
			stars.push({
				x: Math.random(),
				y: Math.random(),
				r: 0.4 + Math.random() * 1.1,
				tw: Math.random() * TAU,
				d: 0.25 + Math.random() * 0.75,
			});
		}

		let W = 0;
		let H = 0;
		let R = 0;
		let cx = 0;
		let cy = 0;
		let ca = 1;
		let sa = 0;
		let ct = Math.cos(0.42);
		let st = Math.sin(0.42);
		let yaw = reduce ? 0.6 : -0.5;
		let pitch = 0.42;
		let vyaw = 0;

		// --- interaction state ---
		let mx = -1e4;
		let my = -1e4;
		let dragging = false;
		let lx = 0;
		let ly = 0;
		let lastInter = -1e4;
		let hover = -1;
		const ripples: { o: [number, number, number]; t0: number }[] = [];
		const sparks: { x: number; y: number; vx: number; vy: number; t0: number; life: number }[] = [];
		let PR: Projected[] = [];

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvas.width = Math.round(W * dpr);
			canvas.height = Math.round(H * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			R = Math.min(W, H) * 0.31;
			cx = (W > 900 ? 0.7 : 0.5) * W;
			cy = H * 0.5;
		};
		const ro = new ResizeObserver(resize);
		ro.observe(canvas.parentElement ?? canvas);
		resize();

		const proj = (x: number, y: number, z: number): Projected => {
			const x1 = x * ca - z * sa;
			const z1 = x * sa + z * ca;
			const y1 = y * ct - z1 * st;
			const z2 = y * st + z1 * ct;
			return { sx: cx + x1 * R, sy: cy + y1 * R, depth: (z2 + 1) / 2, z: z2 };
		};
		const ringPt = (rg: Ring, ang2: number): [number, number, number] => {
			const c = Math.cos(ang2);
			const s = Math.sin(ang2);
			return [
				(rg.u[0] * c + rg.v[0] * s) * rg.rr,
				(rg.u[1] * c + rg.v[1] * s) * rg.rr,
				(rg.u[2] * c + rg.v[2] * s) * rg.rr,
			];
		};

		// --- pointer handlers (fine pointers only) ---
		const localXY = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			return { x: e.clientX - rect.left, y: e.clientY - rect.top };
		};
		const onDown = (e: PointerEvent) => {
			if (e.button !== 0) return;
			dragging = true;
			const p = localXY(e);
			lx = p.x;
			ly = p.y;
			vyaw = 0;
			lastInter = performance.now();
			canvas.setPointerCapture(e.pointerId);
			canvas.style.cursor = "grabbing";
		};
		const onMove = (e: PointerEvent) => {
			const p = localXY(e);
			mx = p.x;
			my = p.y;
			lastInter = performance.now();
			if (dragging) {
				yaw += (p.x - lx) * 0.0042;
				vyaw = (p.x - lx) * 0.0042;
				pitch = Math.max(0.1, Math.min(0.8, pitch + (p.y - ly) * 0.0028));
				lx = p.x;
				ly = p.y;
			}
		};
		const endDrag = () => {
			dragging = false;
			canvas.style.cursor = hover >= 0 ? "pointer" : "grab";
		};
		const onLeave = () => {
			if (!dragging) {
				mx = -1e4;
				my = -1e4;
				hover = -1;
			}
		};
		const onClick = () => {
			if (hover < 0) return;
			ripples.push({ o: [pts[hover].x, pts[hover].y, pts[hover].z], t0: performance.now() });
			const q = PR[hover];
			for (let k = 0; k < 12; k++) {
				const an = Math.random() * TAU;
				const sp = 0.6 + Math.random() * 2.2;
				sparks.push({
					x: q.sx,
					y: q.sy,
					vx: Math.cos(an) * sp,
					vy: Math.sin(an) * sp,
					t0: performance.now(),
					life: 500 + Math.random() * 350,
				});
			}
			if (ripples.length > 3) ripples.shift();
		};
		if (interactive) {
			canvas.style.cursor = "grab";
			canvas.addEventListener("pointerdown", onDown);
			canvas.addEventListener("pointermove", onMove);
			canvas.addEventListener("pointerup", endDrag);
			canvas.addEventListener("pointercancel", endDrag);
			canvas.addEventListener("pointerleave", onLeave);
			canvas.addEventListener("click", onClick);
		}

		let raf = 0;
		let running = true;
		const SEG = 0.55;
		const ACTIVE = 0.6;

		const frame = (t: number) => {
			ctx.clearRect(0, 0, W, H);
			const idle = Math.min(1, Math.max(0, (t - lastInter - 2500) / 1800));
			if (!reduce) {
				yaw += 0.0016 * idle + vyaw * (1 - idle);
				vyaw *= 0.94;
			}
			ca = Math.cos(yaw);
			sa = Math.sin(yaw);
			ct = Math.cos(pitch);
			st = Math.sin(pitch);

			// starfield with cursor parallax
			const pxs = mx > -1e3 ? (mx - cx) / W : 0;
			const pys = my > -1e3 ? (my - cy) / H : 0;
			for (const stx of stars) {
				const al = 0.14 + 0.26 * (0.5 + 0.5 * Math.sin(t / 900 + stx.tw));
				ctx.fillStyle = `rgba(210,214,235,${(al * stx.d).toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(stx.x * W - pxs * 26 * stx.d, stx.y * H - pys * 26 * stx.d, stx.r * stx.d, 0, TAU);
				ctx.fill();
			}
			// nebula breath
			const ng = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 2.4);
			ng.addColorStop(0, "rgba(100,77,249,0.055)");
			ng.addColorStop(1, "rgba(100,77,249,0)");
			ctx.fillStyle = ng;
			ctx.fillRect(0, 0, W, H);

			PR = pts.map((p) => proj(p.x, p.y, p.z));

			// hover pick (front hemisphere)
			hover = -1;
			if (interactive && !dragging && mx > -1e3) {
				let bd = 26 * 26;
				for (let hi = 0; hi < N; hi++) {
					if (PR[hi].z < 0.05) continue;
					const hdx = PR[hi].sx - mx;
					const hdy = PR[hi].sy - my;
					const d2 = hdx * hdx + hdy * hdy;
					if (d2 < bd) {
						bd = d2;
						hover = hi;
					}
				}
				canvas.style.cursor = dragging ? "grabbing" : hover >= 0 ? "pointer" : "grab";
			}

			// ripple field per node
			for (let n2 = 0; n2 < N; n2++) pts[n2].rp = 0;
			for (let ri = ripples.length - 1; ri >= 0; ri--) {
				const rip = ripples[ri];
				const age = (t - rip.t0) / 1500;
				if (age > 1.25) {
					ripples.splice(ri, 1);
					continue;
				}
				const front = age * Math.PI * 1.1;
				for (let n3 = 0; n3 < N; n3++) {
					const p3 = pts[n3];
					const dot = Math.max(-1, Math.min(1, p3.x * rip.o[0] + p3.y * rip.o[1] + p3.z * rip.o[2]));
					const gd = Math.acos(dot);
					const w = Math.exp(-Math.pow((gd - front) / 0.3, 2)) * (1 - age * 0.55);
					if (w > p3.rp) p3.rp = w;
				}
			}

			// faint ring paths
			ctx.lineWidth = 1;
			for (const rg of rings) {
				ctx.strokeStyle = "rgba(150,156,174,0.085)";
				ctx.beginPath();
				for (let s = 0; s <= 72; s++) {
					const pp = ringPt(rg, (s / 72) * TAU);
					const pj = proj(pp[0], pp[1], pp[2]);
					if (s === 0) ctx.moveTo(pj.sx, pj.sy);
					else ctx.lineTo(pj.sx, pj.sy);
				}
				ctx.stroke();
			}

			// globe base structure
			for (const e of edges) {
				const A = PR[e.a];
				const B = PR[e.b];
				const d = (A.depth + B.depth) / 2;
				const hl = hover === e.a || hover === e.b;
				const rw = Math.max(pts[e.a].rp, pts[e.b].rp);
				ctx.strokeStyle = hl
					? `rgba(176,164,255,${(0.16 + d * 0.4).toFixed(3)})`
					: `rgba(150,156,174,${(0.012 + d * 0.045 + rw * 0.22).toFixed(3)})`;
				ctx.lineWidth = hl ? 1.3 : 1;
				line(ctx, A.sx, A.sy, B.sx, B.sy);
			}

			// globe travelling dashes
			ctx.lineCap = "round";
			for (const e of edges) {
				const A = PR[e.a];
				const B = PR[e.b];
				const ed = (A.depth + B.depth) / 2;
				let u0: number;
				let u1: number;
				let inten: number;
				if (reduce) {
					u0 = 0;
					u1 = 1;
					inten = 1;
				} else {
					let cyc = (t * 0.00016 * e.sp + e.ph) % 1;
					if (cyc < 0) cyc += 1;
					if (cyc > ACTIVE) continue;
					const prog = cyc / ACTIVE;
					const head = prog * (1 + SEG);
					u1 = Math.min(1, head);
					u0 = Math.max(0, head - SEG);
					if (u1 <= u0) continue;
					inten = Math.sin(prog * Math.PI);
				}
				const S = e.dir ? A : B;
				const E = e.dir ? B : A;
				const x0 = S.sx + (E.sx - S.sx) * u0;
				const y0 = S.sy + (E.sy - S.sy) * u0;
				const x1 = S.sx + (E.sx - S.sx) * u1;
				const y1 = S.sy + (E.sy - S.sy) * u1;
				const al = inten * (0.08 + ed * 0.34);
				if (e.accent) {
					ctx.globalCompositeOperation = "lighter";
					ctx.strokeStyle = `rgba(124,100,255,${(al * 0.5).toFixed(3)})`;
					ctx.lineWidth = 3;
					line(ctx, x0, y0, x1, y1);
					ctx.strokeStyle = `rgba(176,164,255,${al.toFixed(3)})`;
					ctx.lineWidth = 1.2;
					line(ctx, x0, y0, x1, y1);
					ctx.globalCompositeOperation = "source-over";
				} else {
					ctx.strokeStyle = `rgba(220,225,236,${(al * 0.75).toFixed(3)})`;
					ctx.lineWidth = 1;
					line(ctx, x0, y0, x1, y1);
				}
			}
			ctx.lineCap = "butt";

			// globe nodes + bloom (hover / ripple boosted)
			for (let n = 0; n < N; n++) {
				const q = PR[n];
				const p = pts[n];
				const boost = (hover === n ? 0.9 : 0) + p.rp;
				if (p.accent || boost > 0.04) {
					const pulse = reduce ? 0.85 : 0.5 + 0.5 * Math.sin(t / 620 + p.ph * TAU);
					const peak = Math.max(pulse * pulse * pulse * (p.accent ? 1 : 0), boost);
					if (peak > 0.05) {
						const gr = (6 + 18 * peak) * (0.5 + q.depth);
						const g = ctx.createRadialGradient(q.sx, q.sy, 0, q.sx, q.sy, gr);
						g.addColorStop(0, `rgba(140,120,255,${(0.5 * peak).toFixed(3)})`);
						g.addColorStop(1, "rgba(124,100,255,0)");
						ctx.globalCompositeOperation = "lighter";
						ctx.fillStyle = g;
						ctx.beginPath();
						ctx.arc(q.sx, q.sy, gr, 0, TAU);
						ctx.fill();
						ctx.globalCompositeOperation = "source-over";
					}
					ctx.fillStyle = `rgba(190,178,255,${Math.min(1, 0.42 + q.depth * 0.55 + boost * 0.4).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.7, (2.2 + boost * 1.6) * (0.5 + q.depth)), 0, TAU);
					ctx.fill();
				} else {
					ctx.fillStyle = `rgba(220,224,232,${(0.13 + q.depth * 0.55).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.6, 1.4 * (0.5 + q.depth)), 0, TAU);
					ctx.fill();
				}
			}

			// hover ring + label
			if (hover >= 0) {
				const hq = PR[hover];
				const hp = pts[hover];
				ctx.strokeStyle = "rgba(190,178,255,0.85)";
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.arc(hq.sx, hq.sy, 9 + Math.sin(t / 260) * 1.5, 0, TAU);
				ctx.stroke();
				const txt = `${hp.label} · ${hp.reg} · ${hp.ms}ms${hp.accent ? " · ATTESTED" : ""}`;
				ctx.font = "10px 'IBM Plex Mono', monospace";
				const tw2 = ctx.measureText(txt).width;
				const bx = Math.min(W - tw2 - 34, hq.sx + 16);
				const by = Math.max(18, hq.sy - 34);
				ctx.strokeStyle = "rgba(157,143,255,0.5)";
				line(ctx, hq.sx + 6, hq.sy - 6, bx + 4, by + 22);
				ctx.fillStyle = "rgba(9,10,14,0.88)";
				ctx.strokeStyle = "rgba(157,143,255,0.35)";
				ctx.beginPath();
				ctx.roundRect(bx, by, tw2 + 20, 22, 3);
				ctx.fill();
				ctx.stroke();
				ctx.fillStyle = "rgba(230,228,255,0.92)";
				ctx.fillText(txt, bx + 10, by + 14.5);
			}

			// spark burst
			ctx.globalCompositeOperation = "lighter";
			for (let sk = sparks.length - 1; sk >= 0; sk--) {
				const spk = sparks[sk];
				const sag = t - spk.t0;
				if (sag > spk.life) {
					sparks.splice(sk, 1);
					continue;
				}
				const sal = 1 - sag / spk.life;
				spk.x += spk.vx;
				spk.y += spk.vy;
				spk.vx *= 0.985;
				spk.vy *= 0.985;
				ctx.fillStyle = `rgba(176,164,255,${(0.8 * sal).toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(spk.x, spk.y, 1.3 * sal + 0.3, 0, TAU);
				ctx.fill();
			}

			// orbiting data streams
			for (const rg of rings) {
				for (let k = 0; k < rg.parts.length; k++) {
					const pa = rg.parts[k];
					if (!reduce) pa.a += pa.sp;
					const d3 = ringPt(rg, pa.a);
					const pj = proj(d3[0], d3[1], d3[2]);
					const back = pj.z < 0;
					const dfac = back ? 0.32 : 1;
					const d3b = ringPt(rg, pa.a - pa.trail);
					const pjb = proj(d3b[0], d3b[1], d3b[2]);
					const col = pa.accent ? "176,164,255" : "205,210,235";
					ctx.strokeStyle = `rgba(${col},${(0.45 * dfac).toFixed(3)})`;
					ctx.lineWidth = pa.accent ? 2 : 1.4;
					ctx.lineCap = "round";
					line(ctx, pjb.sx, pjb.sy, pj.sx, pj.sy);
					const hr = (pa.accent ? 7 : 5) * dfac;
					const hg = ctx.createRadialGradient(pj.sx, pj.sy, 0, pj.sx, pj.sy, hr);
					hg.addColorStop(0, pa.accent ? `rgba(180,168,255,${0.95 * dfac})` : `rgba(220,224,240,${0.8 * dfac})`);
					hg.addColorStop(1, "rgba(124,100,255,0)");
					ctx.fillStyle = hg;
					ctx.beginPath();
					ctx.arc(pj.sx, pj.sy, hr, 0, TAU);
					ctx.fill();
					ctx.fillStyle = `rgba(235,233,255,${0.95 * dfac})`;
					ctx.beginPath();
					ctx.arc(pj.sx, pj.sy, pa.accent ? 1.6 : 1.2, 0, TAU);
					ctx.fill();
					if (!back && pa.accent && k % 3 === 0) {
						const surf = proj(norm(d3)[0], norm(d3)[1], norm(d3)[2]);
						ctx.strokeStyle = "rgba(140,124,255,0.16)";
						ctx.lineWidth = 1;
						ctx.lineCap = "butt";
						line(ctx, pj.sx, pj.sy, surf.sx, surf.sy);
					}
				}
			}
			ctx.globalCompositeOperation = "source-over";
			ctx.lineCap = "butt";

			if (!reduce && running) {
				raf = requestAnimationFrame(frame);
			}
		};

		const onVisibility = () => {
			running = document.visibilityState === "visible";
			if (running && !reduce) {
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(frame);
			}
		};
		document.addEventListener("visibilitychange", onVisibility);
		raf = requestAnimationFrame(frame);

		return () => {
			running = false;
			cancelAnimationFrame(raf);
			ro.disconnect();
			document.removeEventListener("visibilitychange", onVisibility);
			if (interactive) {
				canvas.removeEventListener("pointerdown", onDown);
				canvas.removeEventListener("pointermove", onMove);
				canvas.removeEventListener("pointerup", endDrag);
				canvas.removeEventListener("pointercancel", endDrag);
				canvas.removeEventListener("pointerleave", onLeave);
				canvas.removeEventListener("click", onClick);
			}
		};
	}, []);

	return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
