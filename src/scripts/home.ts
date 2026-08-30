/**
 * Homepage engine: scroll reveals, live pricing, and the "two worlds" globe —
 * the centralized/red cluster network (A) morphing into the decentralized/
 * purple sphere (B), with orbital comets, hover tooltips and the status strip.
 * Math and tuning are ported unchanged from the locked static preview.
 */
import { initReveals } from "./lib/reveals.ts";
import { fetchTextModels, hydratePriceElements, usd } from "./lib/pricing.ts";

type Vec3 = [number, number, number];
type Rgb = [number, number, number];

initReveals(0.14);

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const frameEl = document.getElementById("worlds");
const canvas = document.getElementById("net") as HTMLCanvasElement | null;
const ctx = canvas?.getContext("2d");
const wsw = document.getElementById("wsw");
const ntip = document.getElementById("ntip");
const ntipT1 = document.getElementById("ntipT1");
const ntipT2 = document.getElementById("ntipT2");
const hoverhint = document.getElementById("hoverhint");
const stV1 = document.getElementById("stV1");
const stV2 = document.getElementById("stV2");
const stK3 = document.getElementById("stK3");
const stV3 = document.getElementById("stV3");

if (frameEl && canvas && ctx && wsw && ntip && ntipT1 && ntipT2 && hoverhint && stV1 && stV2 && stK3 && stV3) {
	// the flagship price is shared across the billboard, the two-worlds strip and
	// the comparison bar, so every figure on the page comes from one source
	const bill = document.querySelector<HTMLElement>("[data-flagship]");
	const flagshipId = bill?.dataset.flagship ?? "";
	const flagshipName = bill?.querySelector(".name")?.textContent?.trim() ?? "Flagship";
	let flagIn = document.querySelector<HTMLElement>(`[data-mid="${flagshipId}"][data-k="in"]`)?.textContent?.trim() ?? "";
	let flagOut =
		document.querySelector<HTMLElement>(`[data-mid="${flagshipId}"][data-k="out"]`)?.textContent?.trim() ?? "";

	fetchTextModels()
		.then((byId) => {
			hydratePriceElements(byId);
			// flagship figure feeds the parts of the page that are not data-mid driven
			const glm = byId.get(flagshipId);
			if (!glm) return;
			flagIn = usd(glm.pricing.price_per_million_input_tokens);
			flagOut = usd(glm.pricing.price_per_million_output_tokens);
			const cmpUs = document.getElementById("cmpUsVal");
			if (cmpUs) cmpUs.textContent = flagOut;
			const cmpUsM = document.getElementById("cmpUsValM");
			if (cmpUsM) cmpUsM.textContent = flagOut;
			if (frameEl.classList.contains("b")) stV3.innerHTML = `<b>${flagIn}</b> in / <b>${flagOut}</b> out`;
		})
		.catch(() => {});

	// ---- the two worlds: centralized/red (A) vs decentralized/purple (B) ----
	const dpr = Math.min(devicePixelRatio || 1, 2);
	const isMob = matchMedia("(max-width: 860px)");

	const COL_A = { main: [235, 87, 87] as Rgb, bright: [255, 130, 130] as Rgb, node: [255, 158, 158] as Rgb };
	const COL_B = { main: [124, 100, 255] as Rgb, bright: [176, 164, 255] as Rgb, node: [190, 178, 255] as Rgb };
	const mixc = (a: Rgb, b: Rgb, t: number): string =>
		`${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)}`;
	const norm3 = (v: Vec3): Vec3 => {
		const m = Math.hypot(v[0], v[1], v[2]) || 1;
		return [v[0] / m, v[1] / m, v[2] / m];
	};
	const gauss = (): number => (Math.random() + Math.random() + Math.random() - 1.5) * 0.42;

	// node layouts: B is an even Fibonacci sphere, A is four tight clusters
	const N = 104;
	const posA: Vec3[] = [];
	const posB: Vec3[] = [];
	const meta: Array<{ accent: boolean; ph: number; cluster: number }> = [];
	for (let i = 0; i < N; i++) {
		const y = 1 - (i / (N - 1)) * 2;
		const r = Math.sqrt(1 - y * y);
		const th = i * 2.399963229728653;
		posB.push([Math.cos(th) * r, y, Math.sin(th) * r]);
		meta.push({ accent: i % 7 === 0, ph: (i % 11) / 11, cluster: 0 });
	}
	const CTRS: Vec3[] = [
		norm3([0.8, 0.45, 0.2]),
		norm3([-0.55, 0.6, -0.35]),
		norm3([-0.2, -0.75, 0.55]),
		norm3([0.45, -0.3, -0.8]),
	];
	const CSIZE = [40, 28, 20, 16];
	let filled = 0;
	for (let c = 0; c < 4; c++) {
		for (let k = 0; k < CSIZE[c] && filled < N; k++, filled++) {
			posA.push(norm3([CTRS[c][0] + gauss() * 0.3, CTRS[c][1] + gauss() * 0.3, CTRS[c][2] + gauss() * 0.3]));
			meta[filled].cluster = c;
		}
	}
	while (posA.length < N) posA.push(norm3([gauss(), gauss(), gauss()]));

	interface Edge {
		a: number;
		b: number;
		ph: number;
		sp: number;
		dir: boolean;
		accent: boolean;
	}
	const buildEdges = (P: Vec3[], maxDistSq: number): Edge[] => {
		const out: Edge[] = [];
		let ei = 0;
		for (let a = 0; a < N; a++) {
			for (let b = a + 1; b < N; b++) {
				const dx = P[a][0] - P[b][0];
				const dy = P[a][1] - P[b][1];
				const dz = P[a][2] - P[b][2];
				if (dx * dx + dy * dy + dz * dz < maxDistSq) {
					out.push({
						a,
						b,
						ph: (ei * 0.618) % 1,
						sp: 0.45 + ((ei * 7) % 5) * 0.16,
						dir: ei % 2 === 0,
						accent: meta[a].accent || meta[b].accent,
					});
					ei++;
				}
			}
		}
		return out;
	};
	let edgesA = buildEdges(posA, 0.075);
	if (edgesA.length > 460) edgesA = edgesA.filter((_, idx) => idx % 2 === 0);
	const edgesB = buildEdges(posB, 0.2);

	// orbital rings (shared between both worlds)
	const crs = (u: Vec3, w: Vec3): Vec3 => [
		u[1] * w[2] - u[2] * w[1],
		u[2] * w[0] - u[0] * w[2],
		u[0] * w[1] - u[1] * w[0],
	];
	const ringBasis = (n: Vec3): { u: Vec3; v: Vec3 } => {
		const nn = norm3(n);
		const helper: Vec3 = Math.abs(nn[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
		const u = norm3(crs(nn, helper));
		return { u, v: crs(nn, u) };
	};
	interface RingPart {
		a: number;
		sp: number;
		accent: boolean;
		trail: number;
	}
	interface Ring {
		u: Vec3;
		v: Vec3;
		rr: number;
		parts: RingPart[];
	}
	const ringDefs = [
		{ n: [0.15, 1, 0.12] as Vec3, rr: 1.44, count: 12, sp: 0.0034, accent: 0.35 },
		{ n: [0.82, 0.5, 0.2] as Vec3, rr: 1.5, count: 10, sp: -0.0028, accent: 0.5 },
		{ n: [0.45, 0.55, -0.7] as Vec3, rr: 1.28, count: 9, sp: 0.0044, accent: 0.3 },
	];
	const rings: Ring[] = ringDefs.map((d) => {
		const bas = ringBasis(d.n);
		const parts: RingPart[] = [];
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
	const ringPt = (rg: Ring, an: number): Vec3 => {
		const c = Math.cos(an);
		const s = Math.sin(an);
		return [(rg.u[0] * c + rg.v[0] * s) * rg.rr, (rg.u[1] * c + rg.v[1] * s) * rg.rr, (rg.u[2] * c + rg.v[2] * s) * rg.rr];
	};
	const line = (x0: number, y0: number, x1: number, y1: number): void => {
		ctx.beginPath();
		ctx.moveTo(x0, y0);
		ctx.lineTo(x1, y1);
		ctx.stroke();
	};

	// node identities: fallback names, replaced by live Aleph CRNs when reachable
	let namesB = [
		"aleph-crn-par-01", "hetzner-fsn-crn", "ovh-gra-worker-07", "contabo-nue-04", "scaleway-ams-crn",
		"crn.libertai.eu", "node.twentysix.cloud", "crn-lon-stakeplus", "aleph-crn-nyc-02", "gcs-frankfurt-crn",
		"crn.okeso.fr", "aleph-node-mtl-01", "crn-sgp-atlas", "baremetal-hel-09", "crn.decentrahost.io",
		"aleph-crn-mad-03", "rackline-waw-crn", "crn-syd-southern",
	];
	let realData = false;
	const CLNAMES = ["US-WEST MEGACLUSTER", "GOV-PARTNER REGION", "HYPERSCALER AZ-1", "CLOSED LAB DC-4"];
	{
		const ctl = new AbortController();
		setTimeout(() => ctl.abort(), 4500);
		fetch("https://api2.aleph.im/api/v0/aggregates/0xa1B3bb7d2332383D96b7796B908fB7f7F3c2Be10.json?keys=corechannel", {
			signal: ctl.signal,
		})
			.then((r) => r.json())
			.then((j: { data?: { corechannel?: { resource_nodes?: Array<{ name?: string }> } } }) => {
				const rn = (j.data?.corechannel?.resource_nodes ?? [])
					.map((n) => n?.name)
					.filter((x): x is string => !!x && x.length > 1);
				if (rn.length > 6) {
					namesB = rn.slice(0, 90);
					realData = true;
					if (frameEl.classList.contains("b")) hoverhint.textContent = "Hover the nodes · live Aleph Cloud CRNs";
				}
			})
			.catch(() => {});
	}

	// world state machine: sT eases toward target (0 = closed world, 1 = LibertAI)
	let sT = 0;
	let target = 0;
	let autoDone = false;
	let bytes = 4271882090113;
	const setStrip = (b: boolean): void => {
		if (b) {
			stV1.textContent = "0 bytes";
			stV2.textContent = "TEE-attested";
			stK3.textContent = `${flagshipName} · 1M tokens`;
			stV3.innerHTML = `<b>${flagIn}</b> in / <b>${flagOut}</b> out`;
			hoverhint.textContent = realData ? "Hover the nodes · live Aleph Cloud CRNs" : "Hover the nodes";
		} else {
			stV2.textContent = "None · logged & profiled";
			stK3.textContent = "Flagship model · price";
			stV3.textContent = "$27.40 / 1M · unstable";
			hoverhint.textContent = "Hover the nodes";
		}
	};
	const setWorld = (b: boolean, fromUser: boolean): void => {
		target = b ? 1 : 0;
		if (fromUser) autoDone = true;
		frameEl.classList.toggle("b", b);
		wsw.setAttribute("aria-pressed", String(b));
		setStrip(b);
	};
	wsw.addEventListener("click", () => setWorld(target === 0, true));

	// auto-flip: hold off until the whole closed panel is framed near the top of
	// the screen - its doom stats visible at the bottom - and the reader settles
	// there, then switch. Arms only in that framing and cancels if they scroll on
	// past, so the flip lands once the full picture has been taken in, not the
	// moment the panel edges into view. Scrolling is never captured.
	if (!reduce) {
		let dwell: ReturnType<typeof setTimeout> | null = null;
		const maybeFlip = (): void => {
			if (autoDone || target !== 0) {
				removeEventListener("scroll", maybeFlip);
				return;
			}
			const r = frameEl.getBoundingClientRect();
			const vh = window.innerHeight;
			if (r.top <= vh * 0.15 && r.top > -vh * 0.06) {
				dwell ??= setTimeout(() => {
					if (!autoDone && target === 0) {
						autoDone = true;
						setWorld(true, false);
					}
					removeEventListener("scroll", maybeFlip);
				}, 500);
			} else if (dwell) {
				clearTimeout(dwell);
				dwell = null;
			}
		};
		addEventListener("scroll", maybeFlip, { passive: true });
		maybeFlip();
	}

	// pointer for hover
	let lx = -1e4;
	let ly = -1e4;
	canvas.addEventListener(
		"pointermove",
		(e) => {
			const r = canvas.getBoundingClientRect();
			lx = e.clientX - r.left;
			ly = e.clientY - r.top;
		},
		{ passive: true },
	);
	canvas.addEventListener("pointerleave", () => {
		lx = ly = -1e4;
	});

	let W = 0;
	let H = 0;
	let R = 0;
	let cx = 0;
	let cy = 0;
	const ct = Math.cos(0.42);
	const st = Math.sin(0.42);
	let ang = reduce ? 0.6 : -0.5;
	let ca = 1;
	let sa = 0;
	const resize = (): void => {
		const r = canvas.getBoundingClientRect();
		W = r.width;
		H = r.height;
		canvas.width = (W * dpr) | 0;
		canvas.height = (H * dpr) | 0;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	};
	new ResizeObserver(resize).observe(canvas.parentElement!);
	resize();

	interface Projected {
		sx: number;
		sy: number;
		depth: number;
		z: number;
	}
	const proj = (x: number, y: number, z: number): Projected => {
		const x1 = x * ca - z * sa;
		const z1 = x * sa + z * ca;
		const y1 = y * ct - z1 * st;
		const z2 = y * st + z1 * ct;
		return { sx: cx + x1 * R, sy: cy + y1 * R, depth: (z2 + 1) / 2, z: z2 };
	};

	// traveling dashes along edges
	const SEG = 0.55;
	const ACTIVE = 0.6;
	const drawDashSet = (edges: Edge[], pr: Projected[], weight: number, mainC: string, brightC: string, t: number) => {
		if (weight < 0.03) return;
		ctx.lineCap = "round";
		for (const eg of edges) {
			const EA = pr[eg.a];
			const EB = pr[eg.b];
			const ed = (EA.depth + EB.depth) / 2;
			let u0: number, u1: number, inten: number;
			if (reduce) {
				u0 = 0;
				u1 = 1;
				inten = 1;
			} else {
				let cyc = (t * 0.00016 * eg.sp + eg.ph) % 1;
				if (cyc < 0) cyc += 1;
				if (cyc > ACTIVE) continue;
				const prog = cyc / ACTIVE;
				const head = prog * (1 + SEG);
				u1 = Math.min(1, head);
				u0 = Math.max(0, head - SEG);
				if (u1 <= u0) continue;
				inten = Math.sin(prog * Math.PI);
			}
			const S = eg.dir ? EA : EB;
			const E = eg.dir ? EB : EA;
			const x0 = S.sx + (E.sx - S.sx) * u0;
			const y0 = S.sy + (E.sy - S.sy) * u0;
			const x1 = S.sx + (E.sx - S.sx) * u1;
			const y1 = S.sy + (E.sy - S.sy) * u1;
			const al = inten * (0.08 + ed * 0.34) * weight;
			if (eg.accent) {
				ctx.globalCompositeOperation = "lighter";
				ctx.strokeStyle = `rgba(${mainC},${(al * 0.5).toFixed(3)})`;
				ctx.lineWidth = 3;
				line(x0, y0, x1, y1);
				ctx.strokeStyle = `rgba(${brightC},${al.toFixed(3)})`;
				ctx.lineWidth = 1.2;
				line(x0, y0, x1, y1);
				ctx.globalCompositeOperation = "source-over";
			} else {
				ctx.strokeStyle = `rgba(220,225,236,${(al * 0.75).toFixed(3)})`;
				ctx.lineWidth = 1;
				line(x0, y0, x1, y1);
			}
		}
		ctx.lineCap = "butt";
	};

	let fcount = 0;
	const frame = (t: number): void => {
		fcount++;
		ctx.clearRect(0, 0, W, H);
		// ease state
		sT += (target - sT) * 0.045;
		if (Math.abs(target - sT) < 0.002) sT = target;
		const e = sT * sT * (3 - 2 * sT);
		const mob = isMob.matches;
		R = Math.min(W, H) * (mob ? 0.3 : 0.32);
		cx = mob ? 0.5 * W : (0.63 + (0.35 - 0.63) * e) * W;
		cy = mob ? (0.5 + (0.27 - 0.5) * e) * H : 0.5 * H;
		ca = Math.cos(ang);
		sa = Math.sin(ang);

		const MAIN = mixc(COL_A.main, COL_B.main, e);
		const BRIGHT = mixc(COL_A.bright, COL_B.bright, e);
		const NODEC = mixc(COL_A.node, COL_B.node, e);

		// morph positions along the sphere
		const pr: Projected[] = [];
		for (let i = 0; i < N; i++) {
			const A = posA[i];
			const B = posB[i];
			const v = norm3([A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e, A[2] + (B[2] - A[2]) * e]);
			pr.push(proj(v[0], v[1], v[2]));
		}

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

		// base structure, both sets crossfaded
		const wA = 1 - e;
		const wB = e;
		if (wA > 0.02) {
			for (const eg of edgesA) {
				const A = pr[eg.a];
				const B = pr[eg.b];
				const d = (A.depth + B.depth) / 2;
				ctx.strokeStyle = `rgba(212,118,118,${((0.022 + d * 0.075) * wA).toFixed(3)})`;
				ctx.lineWidth = 1;
				line(A.sx, A.sy, B.sx, B.sy);
			}
		}
		if (wB > 0.02) {
			for (const eg of edgesB) {
				const A = pr[eg.a];
				const B = pr[eg.b];
				const d = (A.depth + B.depth) / 2;
				ctx.strokeStyle = `rgba(150,156,174,${((0.012 + d * 0.045) * wB).toFixed(3)})`;
				ctx.lineWidth = 1;
				line(A.sx, A.sy, B.sx, B.sy);
			}
		}

		drawDashSet(edgesA, pr, wA, MAIN, BRIGHT, t);
		drawDashSet(edgesB, pr, wB, MAIN, BRIGHT, t);

		// hover pick
		let hover = -1;
		let hd = 26 * 26;
		if (lx > -1e3) {
			for (let h = 0; h < N; h++) {
				if (pr[h].z < 0.05) continue;
				const dx = pr[h].sx - lx;
				const dy = pr[h].sy - ly;
				const dd = dx * dx + dy * dy;
				if (dd < hd) {
					hd = dd;
					hover = h;
				}
			}
		}
		canvas.style.cursor = hover >= 0 ? "pointer" : "default";

		// nodes + bloom
		for (let n = 0; n < N; n++) {
			const q = pr[n];
			const mt = meta[n];
			const isH = n === hover;
			if (mt.accent || isH) {
				const pulse = reduce ? 0.85 : 0.5 + 0.5 * Math.sin(t / 620 + mt.ph * 6.283);
				const peak = Math.max(pulse * pulse * pulse * (mt.accent ? 1 : 0), isH ? 0.9 : 0);
				if (peak > 0.05) {
					const gr = (6 + 16 * peak) * (0.5 + q.depth);
					const g = ctx.createRadialGradient(q.sx, q.sy, 0, q.sx, q.sy, gr);
					g.addColorStop(0, `rgba(${MAIN},${(0.5 * peak).toFixed(3)})`);
					g.addColorStop(1, `rgba(${MAIN},0)`);
					ctx.globalCompositeOperation = "lighter";
					ctx.fillStyle = g;
					ctx.beginPath();
					ctx.arc(q.sx, q.sy, gr, 0, 6.2832);
					ctx.fill();
					ctx.globalCompositeOperation = "source-over";
				}
				ctx.fillStyle = `rgba(${NODEC},${Math.min(1, 0.42 + q.depth * 0.55 + (isH ? 0.3 : 0)).toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(q.sx, q.sy, Math.max(0.7, (2.2 + (isH ? 1.4 : 0)) * (0.5 + q.depth)), 0, 6.2832);
				ctx.fill();
			} else {
				ctx.fillStyle = `rgba(220,224,232,${(0.13 + q.depth * 0.55).toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(q.sx, q.sy, Math.max(0.6, 1.4 * (0.5 + q.depth)), 0, 6.2832);
				ctx.fill();
			}
		}

		// hover ring + tooltip
		if (hover >= 0) {
			const hq = pr[hover];
			ctx.strokeStyle = `rgba(${BRIGHT},0.9)`;
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.arc(hq.sx, hq.sy, 10 + Math.sin(t / 260) * 1.5, 0, 6.2832);
			ctx.stroke();
			if (sT > 0.5) {
				ntipT1.textContent = namesB[hover % namesB.length];
				ntipT2.textContent = realData ? "Aleph Cloud · active CRN · live" : "Aleph Cloud · active CRN";
			} else {
				ntipT1.textContent = `${CLNAMES[meta[hover].cluster]} · N${String(hover).padStart(3, "0")}`;
				ntipT2.textContent = "Closed source · logged · gov access";
			}
			ntip.style.left = `${hq.sx}px`;
			ntip.style.top = `${hq.sy}px`;
			ntip.style.opacity = "1";
		} else {
			ntip.style.opacity = "0";
		}

		// orbiting comets
		ctx.globalCompositeOperation = "lighter";
		for (const rg of rings) {
			for (let k = 0; k < rg.parts.length; k++) {
				const pa = rg.parts[k];
				if (!reduce) pa.a += pa.sp;
				const d = ringPt(rg, pa.a);
				const pj = proj(d[0], d[1], d[2]);
				const back = pj.z < 0;
				const dfac = back ? 0.32 : 1;
				const db = ringPt(rg, pa.a - pa.trail);
				const pjb = proj(db[0], db[1], db[2]);
				const col = pa.accent ? BRIGHT : "205,210,235";
				ctx.strokeStyle = `rgba(${col},${(0.45 * dfac).toFixed(3)})`;
				ctx.lineWidth = pa.accent ? 2 : 1.4;
				ctx.lineCap = "round";
				line(pjb.sx, pjb.sy, pj.sx, pj.sy);
				const hr = (pa.accent ? 7 : 5) * dfac;
				const hg = ctx.createRadialGradient(pj.sx, pj.sy, 0, pj.sx, pj.sy, hr);
				hg.addColorStop(0, pa.accent ? `rgba(${BRIGHT},${0.95 * dfac})` : `rgba(220,224,240,${0.8 * dfac})`);
				hg.addColorStop(1, `rgba(${MAIN},0)`);
				ctx.fillStyle = hg;
				ctx.beginPath();
				ctx.arc(pj.sx, pj.sy, hr, 0, 6.2832);
				ctx.fill();
				ctx.fillStyle = `rgba(245,244,255,${0.95 * dfac})`;
				ctx.beginPath();
				ctx.arc(pj.sx, pj.sy, pa.accent ? 1.6 : 1.2, 0, 6.2832);
				ctx.fill();
				if (!back && pa.accent && k % 3 === 0) {
					const surf = proj(d[0] / rg.rr, d[1] / rg.rr, d[2] / rg.rr);
					ctx.strokeStyle = `rgba(${MAIN},0.16)`;
					ctx.lineWidth = 1;
					ctx.lineCap = "butt";
					line(pj.sx, pj.sy, surf.sx, surf.sy);
				}
			}
		}
		ctx.globalCompositeOperation = "source-over";
		ctx.lineCap = "butt";

		// dystopia counters
		if (target === 0 && !reduce) {
			bytes += 41 + Math.random() * 520;
			if (fcount % 4 === 0) stV1.textContent = `${Math.floor(bytes).toLocaleString("en-US")} bytes`;
			if (fcount % 44 === 0) stV3.textContent = `$${(18 + Math.random() * 22).toFixed(2)} / 1M · unstable`;
		}

		if (!reduce) {
			ang += 0.0016;
			requestAnimationFrame(frame);
		}
	};

	if (reduce) {
		sT = 1;
		target = 1;
		frameEl.classList.add("b");
		wsw.setAttribute("aria-pressed", "true");
		setStrip(true);
	} else {
		setStrip(false);
	}
	requestAnimationFrame(frame);
}
