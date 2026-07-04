import { useEffect, useRef } from "react";

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
		const edges: [number, number][] = [];
		for (let a = 0; a < N; a++) {
			for (let b = a + 1; b < N; b++) {
				const dx = pts[a].x - pts[b].x;
				const dy = pts[a].y - pts[b].y;
				const dz = pts[a].z - pts[b].z;
				if (dx * dx + dy * dy + dz * dz < 0.19) edges.push([a, b]);
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

			for (const [a, b] of edges) {
				const A = proj[a];
				const B = proj[b];
				const dep = (A.depth + B.depth) / 2;
				ctx.strokeStyle = `rgba(174,180,196,${(0.03 + dep * 0.16).toFixed(3)})`;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(A.sx, A.sy);
				ctx.lineTo(B.sx, B.sy);
				ctx.stroke();
			}

			for (const q of proj) {
				const pulse = q.accent && !reduceMotion ? 0.6 + 0.4 * Math.sin(t / 700 + q.ph * 6.28) : 1;
				const rad = (q.accent ? 2.4 : 1.5) * (0.5 + q.depth) * pulse;
				if (q.accent) {
					ctx.fillStyle = `rgba(138,120,255,${(0.35 + q.depth * 0.65).toFixed(3)})`;
					ctx.shadowColor = "rgba(138,120,255,0.9)";
					ctx.shadowBlur = 8 * q.depth;
				} else {
					ctx.fillStyle = `rgba(220,224,232,${(0.15 + q.depth * 0.6).toFixed(3)})`;
					ctx.shadowBlur = 0;
				}
				ctx.beginPath();
				ctx.arc(q.sx, q.sy, Math.max(0.6, rad), 0, 6.2832);
				ctx.fill();
			}
			ctx.shadowBlur = 0;

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
