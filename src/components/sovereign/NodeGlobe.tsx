import { useEffect, useRef } from "react";

function line(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) {
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
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
		const edges: { a: number; b: number; ph: number; sp: number; dir: boolean; accent: boolean }[] = [];
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
						dir: ei % 2 === 0, // travel a→b or b→a — mixed, for a decentralized feel
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

		// Cursor repulsion: nodes near the pointer are pushed radially outward,
		// parting the mesh into a hole. `hole` eases in/out so it feels physical.
		let mouseX = 0;
		let mouseY = 0;
		let holeTarget = 0;
		let hole = 0;
		const onMove = (ev: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouseX = ev.clientX - rect.left;
			mouseY = ev.clientY - rect.top;
			holeTarget = 1;
		};
		const onLeave = () => {
			holeTarget = 0;
		};
		if (!reduceMotion) {
			canvas.addEventListener("pointermove", onMove);
			canvas.addEventListener("pointerleave", onLeave);
			canvas.addEventListener("pointercancel", onLeave);
		}

		const frame = (t: number) => {
			ctx.clearRect(0, 0, W, H);
			const ca = Math.cos(angle);
			const sa = Math.sin(angle);
			const cx = W / 2;
			const cy = H / 2;

			hole += (holeTarget - hole) * 0.12;
			const holeR = Math.max(80, R * 0.72);
			const holeMax = holeR * 0.62;
			const holing = hole > 0.002;

			const proj = pts.map((p) => {
				const x1 = p.x * ca - p.z * sa;
				const z1 = p.x * sa + p.z * ca;
				const y1 = p.y * ct - z1 * st;
				const z2 = p.y * st + z1 * ct;
				const depth = (z2 + 1) / 2;
				let sx = cx + x1 * R;
				let sy = cy + y1 * R;
				if (holing) {
					const dxm = sx - mouseX;
					const dym = sy - mouseY;
					const dm = Math.sqrt(dxm * dxm + dym * dym);
					if (dm < holeR) {
						const f = 1 - dm / holeR;
						const push = hole * holeMax * f * f * (0.45 + depth * 0.55);
						if (dm > 0.001) {
							sx += (dxm / dm) * push;
							sy += (dym / dm) * push;
						} else {
							sx += push;
						}
					}
				}
				return { sx, sy, depth, accent: p.accent, ph: p.ph };
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

			// Pass 2 — a lit dash travels along each link from one node to the
			// other (direction per edge), then the link goes idle (disconnected).
			// Staggered phases → the mesh reads as signals hopping node to node.
			ctx.lineCap = "round";
			const SEG = 0.55; // dash length as a fraction of the link
			const ACTIVE = 0.6; // portion of the cycle the signal is travelling
			for (const e of edges) {
				const A = proj[e.a];
				const B = proj[e.b];
				const dep = (A.depth + B.depth) / 2;

				let u0: number;
				let u1: number;
				let intensity: number;
				if (reduceMotion) {
					u0 = 0;
					u1 = 1;
					intensity = 1; // static: fully connected
				} else {
					let cyc = (t * 0.00016 * e.sp + e.ph) % 1;
					if (cyc < 0) cyc += 1;
					if (cyc > ACTIVE) continue; // idle window → link disconnected
					const prog = cyc / ACTIVE; // 0 → 1 across the travel
					const head = prog * (1 + SEG);
					u1 = Math.min(1, head);
					u0 = Math.max(0, head - SEG);
					if (u1 <= u0) continue;
					intensity = Math.sin(prog * Math.PI); // fade the signal in and out
				}

				// draw from the start node toward the end node
				const S = e.dir ? A : B;
				const E = e.dir ? B : A;
				const x0 = S.sx + (E.sx - S.sx) * u0;
				const y0 = S.sy + (E.sy - S.sy) * u0;
				const x1 = S.sx + (E.sx - S.sx) * u1;
				const y1 = S.sy + (E.sy - S.sy) * u1;
				const alpha = intensity * (0.12 + dep * 0.5);

				if (e.accent) {
					ctx.globalCompositeOperation = "lighter";
					ctx.strokeStyle = `rgba(124,100,255,${(alpha * 0.5).toFixed(3)})`;
					ctx.lineWidth = 3.4;
					line(ctx, x0, y0, x1, y1);
					ctx.strokeStyle = `rgba(176,164,255,${alpha.toFixed(3)})`;
					ctx.lineWidth = 1.3;
					line(ctx, x0, y0, x1, y1);
					ctx.globalCompositeOperation = "source-over";
				} else {
					ctx.strokeStyle = `rgba(220,225,236,${(alpha * 0.8).toFixed(3)})`;
					ctx.lineWidth = 1.1;
					line(ctx, x0, y0, x1, y1);
				}
			}
			ctx.lineCap = "butt";

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
			canvas.removeEventListener("pointermove", onMove);
			canvas.removeEventListener("pointerleave", onLeave);
			canvas.removeEventListener("pointercancel", onLeave);
		};
	}, []);

	return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
