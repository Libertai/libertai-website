import type { CSSProperties } from "react";
import { NodeGlobeOrbit } from "@/components/sovereign/NodeGlobeOrbit.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

/**
 * Hero — the decentralized network runs full-bleed behind the copy (offset
 * right, dimmed under a left scrim) so the message stays quiet and roomy:
 * eyebrow, five words, one line, two actions. Telemetry lives in the
 * StatusStrip below.
 */
export function SovereignHero() {
	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* the network, behind everything */}
			<NodeGlobeOrbit className="absolute inset-0 z-0 h-full w-full" />

			{/* faint engineering grid + purple presence */}
			<div
				aria-hidden="true"
				className="absolute inset-0 z-[1] pointer-events-none opacity-50"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent 0 63px, rgba(255,255,255,.012) 63px 64px), repeating-linear-gradient(90deg, transparent 0 63px, rgba(255,255,255,.012) 63px 64px)",
				}}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 z-[1] pointer-events-none"
				style={{ background: "radial-gradient(ellipse 60% 55% at 70% 48%, rgba(100,77,249,.10), transparent 62%)" }}
			/>
			{/* scrim keeps the copy legible over the network */}
			<div
				aria-hidden="true"
				className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
				style={{
					background:
						"linear-gradient(90deg, var(--background) 0%, rgba(8,9,12,.82) 30%, rgba(8,9,12,.30) 55%, transparent 72%), radial-gradient(120% 100% at 50% 118%, transparent 58%, rgba(8,9,12,.55))",
				}}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 z-[1] pointer-events-none md:hidden"
				style={{
					background:
						"linear-gradient(180deg, rgba(8,9,12,.55) 0%, rgba(8,9,12,.78) 42%, rgba(8,9,12,.35) 70%, transparent 100%)",
				}}
			/>

			{/* GLM-5.2 readout at the globe's centre (desktop only) */}
			<div className="absolute left-[70%] top-[49%] z-[1] hidden -translate-x-1/2 -translate-y-1/2 text-center font-mono md:block pointer-events-none">
				<div className="text-[12px] tracking-[0.2em] text-purple-bright">GLM-5.2</div>
				<div className="text-[8.5px] tracking-[0.24em] text-dim mt-1.5">ONLINE · ATTESTED</div>
			</div>

			{/* copy — layer lets pointer events fall through to the network behind it */}
			<div className="relative z-[2] pointer-events-none max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center">
				<div className="max-w-[660px]">
					<div className="hero-fade flex items-center gap-3 sv-mono mb-8" style={{ "--d": "80ms" } as CSSProperties}>
						<span className="inline-block w-6 h-px bg-purple-bright" aria-hidden="true" />
						Private inference // Aleph Cloud
					</div>

					<h1
						className="hero-fade font-satoshi text-ink text-[clamp(50px,6.6vw,94px)] leading-[0.98] tracking-[-0.025em] mb-7"
						style={{ "--d": "180ms" } as CSSProperties}
					>
						Intelligence
						<br />
						<span className="whitespace-nowrap">
							you{" "}
							<span className="relative">
								own
								<span className="absolute left-0 right-0 bottom-[0.06em] h-[3px] bg-purple" aria-hidden="true" />
							</span>
							.
						</span>
					</h1>

					<p
						className="hero-fade text-[17px] leading-relaxed text-foreground max-w-[42ch] mb-10"
						style={{ "--d": "300ms" } as CSSProperties}
					>
						GLM-5.2 and the leading open models on one private endpoint. Nothing stored. Nothing trained on you.
					</p>

					<div
						className="hero-fade flex flex-wrap items-center gap-4 pointer-events-auto"
						style={{ "--d": "420ms" } as CSSProperties}
					>
						<a
							href={LINKS.console}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-ink text-[#0a0a0c] font-satoshi text-[15px] px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
						>
							Deploy GLM-5.2
						</a>
						<a
							href={LINKS.telegram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[15px] text-ink border border-line-strong px-6 py-3.5 rounded-[2px] hover:border-white/40 transition-colors"
						>
							Talk to our team
						</a>
					</div>
				</div>
			</div>

			{/* scroll cue */}
			<div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3 pointer-events-none">
				<span className="sv-mono text-[8.5px]">Scroll</span>
				<span className="sv-cue" aria-hidden="true" />
			</div>

			{/* interactivity hint (desktop) */}
			<div
				className="absolute bottom-8 right-8 z-[2] hidden md:flex items-center gap-2 sv-mono text-[8.5px] pointer-events-none"
				style={{ color: "var(--faint)" }}
			>
				<span className="inline-block w-1 h-1 rounded-full bg-purple-bright" aria-hidden="true" />
				Drag · hover · click the network
			</div>
		</section>
	);
}
