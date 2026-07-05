import { useEffect, useRef } from "react";

/**
 * The decentralized network as a globe wrapped in orbiting data streams.
 * A rotating Fibonacci-sphere wireframe (links animate as signals travelling
 * node→node, accent nodes bloom purple) encircled by three tilted orbital
 * rings whose light particles stream around it and occasionally drop a
 * connection line to the surface. Full-bleed: sized/offset to sit behind the
 * hero copy. Static frame under prefers-reduced-motion.
 */

type Ring = {
	u: [number, number, number];
	v: [number, number, number];
	rr: number;
	parts: { a: number; sp: number; accent: boolean; trail: number }[];
};

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
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		// --- globe nodes ---
		const N = 104;
		const pts: { x: number; y: number; z: number; accent: boolean; ph: number }[] = [];
		for (let i = 0; i < N; i++) {
			const y = 1 - (i / (N - 1)) * 2;
			const rr = Math.sqrt(1 - y * y);
			const th = i * 2.399963229728653;
			pts.push({ x: Math.cos(th) * rr, y, z: Math.sin(th) * rr, accent: i % 7 === 0, ph: (i % 11) / 11 });
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
					a: (k / d.count) * 6.2832 + Math.random() * 0.4,
					sp: d.sp * (0.85 + Math.random() * 0.4),
					accent: Math.random() < d.accent,
					trail: 0.05 + Math.random() * 0.045,
				});
			}
			return { u: bas.u, v: bas.v, rr: d.rr, parts };
		});

		let W = 0;
		let H = 0;
		let R = 0;
		let cx = 0;
		let cy = 0;
		let ca = 1;
		let sa = 0;
		const ct = Math.cos(0.42);
		const st = Math.sin(0.42);
		let angle = reduce ? 0.6 : -0.5;

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

		const proj = (x: number, y: number, z: number) => {
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

		let raf = 0;
		let running = true;
		const SEG = 0.55;
		const ACTIVE = 0.6;

		const frame = (t: number) => {
			ctx.clearRect(0, 0, W, H);
			ca = Math.cos(angle);
			sa = Math.sin(angle);

			const pr = pts.map((p) => {
				const pj = proj(p.x, p.y, p.z);
				return { ...pj, accent: p.accent, ph: p.ph };
			});

			// faint ring paths
			ctx.lineWidth = 1;
			for (const rg of rings) {
				ctx.strokeStyle = "rgba(150,156,174,0.085)";
				ctx.beginPath();
				for (let s = 0; s <= 72; s++) {
					const pp = ringPt(rg, (s / 72) * 6.2832);
					const pj = proj(pp[0], pp[1], pp[2]);
					if (s === 0) ctx.moveTo(pj.sx, pj.sy);
					else ctx.lineTo(pj.sx, pj.sy);
				}
				ctx.stroke();
			}

			// globe base structure
			for (const e of edges) {
				const A = pr[e.a];
				const B = pr[e.b];
				const d = (A.depth + B.depth) / 2;
				ctx.strokeStyle = `rgba(150,156,174,${(0.012 + d * 0.045).toFixed(3)})`;
				line(ctx, A.sx, A.sy, B.sx, B.sy);
			}

			// globe travelling dashes
			ctx.lineCap = "round";
			for (const e of edges) {
				const A = pr[e.a];
				const B = pr[e.b];
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

			// globe nodes + bloom
			for (const q of pr) {
				if (q.accent) {
					const pulse = reduce ? 0.85 : 0.5 + 0.5 * Math.sin(t / 620 + q.ph * 6.283);
					const peak = pulse * pulse * pulse;
					if (peak > 0.06) {
						const gr = (6 + 16 * peak) * (0.5 + q.depth);
						const g = ctx.createRadialGradient(q.sx, q.sy, 0, q.sx, q.sy, gr);
						g.addColorStop(0, `rgba(140,120,255,${(0.45 * peak).toFixed(3)})`);
						g.addColorStop(1, "rgba(124,100,255,0)");
						ctx.globalCompositeOperation = "lighter";
						ctx.fillStyle = g;
						ctx.beginPath();
						ctx.arc(q.sx, q.sy, gr, 0, 6.2832);
						ctx.fill();
						ctx.globalCompositeOperation = "source-over";
					}
					ctx.fillStyle = `rgba(190,178,255,${(0.42 + q.depth * 0.55).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.7, 2.2 * (0.5 + q.depth)), 0, 6.2832);
					ctx.fill();
				} else {
					ctx.fillStyle = `rgba(220,224,232,${(0.13 + q.depth * 0.55).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.6, 1.4 * (0.5 + q.depth)), 0, 6.2832);
					ctx.fill();
				}
			}

			// orbiting data streams
			ctx.globalCompositeOperation = "lighter";
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
					ctx.arc(pj.sx, pj.sy, hr, 0, 6.2832);
					ctx.fill();
					ctx.fillStyle = `rgba(235,233,255,${0.95 * dfac})`;
					ctx.beginPath();
					ctx.arc(pj.sx, pj.sy, pa.accent ? 1.6 : 1.2, 0, 6.2832);
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
				angle += 0.0016;
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
		};
	}, []);

	return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
