import { useEffect, useRef } from "react";

type P = { sx: number; sy: number };

/** Draw two segments growing from A and B toward the midpoint by fraction `rev`. */
function strokeReach(ctx: CanvasRenderingContext2D, A: P, B: P, mx: number, my: number, rev: number) {
	ctx.beginPath();
	ctx.moveTo(A.sx, A.sy);
	ctx.lineTo(A.sx + (mx - A.sx) * rev, A.sy + (my - A.sy) * rev);
	ctx.moveTo(B.sx, B.sy);
	ctx.lineTo(B.sx + (mx - B.sx) * rev, B.sy + (my - B.sy) * rev);
	ctx.stroke();
}

/**
 * The decentralized network, drawn live: a Fibonacci sphere of nodes with
 * proximity-edge wireframing, slow rotation and pulsing "active inference"
 * nodes in Liberty Purple. Static frame under prefers-reduced-motion.
 */
export function NodeGlobe({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// Fibonacci sphere
		const N = 118;
		const pts: { x: number; y: number; z: number; accent: boolean; ph: number }[] = [];
		for (let i = 0; i < N; i++) {
			const y = 1 - (i / (N - 1)) * 2;
			const r = Math.sqrt(1 - y * y);
			const theta = i * 2.399963229728653; // golden angle
			pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r, accent: i % 7 === 0, ph: (i % 11) / 11 });
		}
		// edges + per-edge pulse metadata (deterministic, no RNG):
		//  phase/speed stagger the "reach toward each other" reveal so the mesh
		//  reads as many independent links forming and releasing — decentralized.
		const edges: { a: number; b: number; ph: number; sp: number; accent: boolean }[] = [];
		let ei = 0;
		for (let a = 0; a < N; a++) {
			for (let b = a + 1; b < N; b++) {
				const dx = pts[a].x - pts[b].x;
				const dy = pts[a].y - pts[b].y;
				const dz = pts[a].z - pts[b].z;
				if (dx * dx + dy * dy + dz * dz < 0.19) {
					edges.push({
						a,
						b,
						ph: (ei * 0.61803398875) % 1, // golden-ratio phase spread
						sp: 0.45 + ((ei * 7) % 5) * 0.16, // varied travel speed
						accent: pts[a].accent || pts[b].accent, // links touching an active node glow purple
					});
					ei++;
				}
			}
		}

		let W = 0;
		let H = 0;
		let R = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvas.width = Math.round(W * dpr);
			canvas.height = Math.round(H * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			R = Math.min(W, H) * 0.38;
		};

		const ro = new ResizeObserver(resize);
		ro.observe(canvas.parentElement ?? canvas);
		resize();

		let angle = reduceMotion ? 0.6 : -0.5;
		const tilt = 0.42;
		const ct = Math.cos(tilt);
		const st = Math.sin(tilt);
		let raf = 0;
		let running = true;

		const frame = (t: number) => {
			ctx.clearRect(0, 0, W, H);
			const ca = Math.cos(angle);
			const sa = Math.sin(angle);
			const cx = W / 2;
			const cy = H / 2;

			const proj = pts.map((p) => {
				const x1 = p.x * ca - p.z * sa;
				const z1 = p.x * sa + p.z * ca;
				const y1 = p.y * ct - z1 * st;
				const z2 = p.y * st + z1 * ct;
				return { sx: cx + x1 * R, sy: cy + y1 * R, depth: (z2 + 1) / 2, accent: p.accent, ph: p.ph };
			});

			// Pass 1 — faint static structure (the "disconnected" base state)
			ctx.lineWidth = 1;
			for (const e of edges) {
				const A = proj[e.a];
				const B = proj[e.b];
				const dep = (A.depth + B.depth) / 2;
				ctx.strokeStyle = `rgba(150,156,174,${(0.015 + dep * 0.05).toFixed(3)})`;
				ctx.beginPath();
				ctx.moveTo(A.sx, A.sy);
				ctx.lineTo(B.sx, B.sy);
				ctx.stroke();
			}

			// Pass 2 — reveal strokes growing from each node toward the midpoint,
			// then releasing: a link reaching to connect. Accent links bloom purple.
			for (const e of edges) {
				const A = proj[e.a];
				const B = proj[e.b];
				const dep = (A.depth + B.depth) / 2;

				let rev: number;
				if (reduceMotion) {
					rev = 1; // static: fully connected
				} else {
					let cyc = (t * 0.00016 * e.sp + e.ph) % 1;
					if (cyc < 0) cyc += 1;
					// sine hump with a floor so links spend time apart (disconnected)
					const hump = Math.sin(cyc * Math.PI);
					rev = (hump - 0.32) / 0.68;
					if (rev <= 0) continue;
					rev = rev * rev * (3 - 2 * rev); // smoothstep ease
				}

				const mx = (A.sx + B.sx) / 2;
				const my = (A.sy + B.sy) / 2;
				const alpha = rev * (0.12 + dep * 0.5);

				if (e.accent) {
					// additive bloom pass (soft, wide) then bright core
					ctx.globalCompositeOperation = "lighter";
					ctx.strokeStyle = `rgba(124,100,255,${(alpha * 0.5).toFixed(3)})`;
					ctx.lineWidth = 3.4;
					strokeReach(ctx, A, B, mx, my, rev);
					ctx.strokeStyle = `rgba(176,164,255,${alpha.toFixed(3)})`;
					ctx.lineWidth = 1.3;
					strokeReach(ctx, A, B, mx, my, rev);
					ctx.globalCompositeOperation = "source-over";
				} else {
					ctx.strokeStyle = `rgba(220,225,236,${(alpha * 0.8).toFixed(3)})`;
					ctx.lineWidth = 1.1;
					strokeReach(ctx, A, B, mx, my, rev);
				}
			}

			// Pass 3 — nodes; accent nodes pulse and bloom at their peak
			for (const q of proj) {
				if (q.accent) {
					const pulse = reduceMotion ? 0.85 : 0.5 + 0.5 * Math.sin(t / 620 + q.ph * 6.283);
					const peak = pulse * pulse * pulse; // sharpen the bloom to the peak
					const rad = 2.5 * (0.5 + q.depth) * (0.7 + 0.55 * pulse);
					// additive glow halo, strongest at peak
					if (peak > 0.06) {
						const gr = (7 + 20 * peak) * (0.5 + q.depth);
						const g = ctx.createRadialGradient(q.sx, q.sy, 0, q.sx, q.sy, gr);
						g.addColorStop(0, `rgba(140,120,255,${(0.5 * peak).toFixed(3)})`);
						g.addColorStop(1, "rgba(124,100,255,0)");
						ctx.globalCompositeOperation = "lighter";
						ctx.fillStyle = g;
						ctx.beginPath();
						ctx.arc(q.sx, q.sy, gr, 0, 6.2832);
						ctx.fill();
						ctx.globalCompositeOperation = "source-over";
					}
					ctx.fillStyle = `rgba(190,178,255,${(0.45 + q.depth * 0.55).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.7, rad), 0, 6.2832);
					ctx.fill();
				} else {
					ctx.fillStyle = `rgba(220,224,232,${(0.15 + q.depth * 0.6).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, Math.max(0.6, 1.5 * (0.5 + q.depth)), 0, 6.2832);
					ctx.fill();
				}
			}

			if (!reduceMotion && running) {
				angle += 0.0016;
				raf = requestAnimationFrame(frame);
			}
		};

		const onVisibility = () => {
			running = document.visibilityState === "visible";
			if (running && !reduceMotion) {
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
