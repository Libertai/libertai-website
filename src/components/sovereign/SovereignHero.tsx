import type { CSSProperties } from "react";
import { NodeGlobe } from "@/components/sovereign/NodeGlobe.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

/**
 * Hero — deliberately quiet: eyebrow, five words, one line, two actions,
 * and the network itself. Telemetry lives in the StatusStrip below.
 */
export function SovereignHero() {
	return (
		<section className="relative min-h-screen flex flex-col overflow-hidden">
			{/* faint engineering grid + purple presence */}
			<div
				aria-hidden="true"
				className="absolute inset-0 opacity-100 pointer-events-none"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent 0 63px, rgba(255,255,255,.013) 63px 64px), repeating-linear-gradient(90deg, transparent 0 63px, rgba(255,255,255,.013) 63px 64px)",
				}}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none"
				style={{ background: "radial-gradient(ellipse 85% 65% at 72% 40%, rgba(100,77,249,.09), transparent 62%)" }}
			/>

			<div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-6 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-6 items-center pt-28 pb-16">
				{/* Copy */}
				<div>
					<div className="hero-fade flex items-center gap-3 sv-mono mb-8" style={{ "--d": "80ms" } as CSSProperties}>
						<span className="inline-block w-6 h-px bg-purple-bright" aria-hidden="true" />
						Private inference // Aleph Cloud
					</div>

					<h1
						className="hero-fade font-satoshi text-ink text-[clamp(52px,7vw,96px)] leading-[0.98] tracking-[-0.025em] mb-7"
						style={{ "--d": "180ms" } as CSSProperties}
					>
						Intelligence
						<br />
						you{" "}
						<span className="relative whitespace-nowrap">
							own
							<span className="absolute left-0 right-0 bottom-[0.06em] h-[3px] bg-purple" aria-hidden="true" />
						</span>
						.
					</h1>

					<p
						className="hero-fade text-[17px] leading-relaxed text-foreground max-w-[44ch] mb-10"
						style={{ "--d": "300ms" } as CSSProperties}
					>
						GLM-5.2 and the leading open models on one private endpoint. Nothing stored. Nothing trained on you.
					</p>

					<div className="hero-fade flex flex-wrap items-center gap-4" style={{ "--d": "420ms" } as CSSProperties}>
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

				{/* The network */}
				<div
					className="hero-fade relative h-[46vh] min-h-[320px] lg:h-[62vh]"
					style={{ "--d": "260ms" } as CSSProperties}
				>
					<div
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] aspect-square rounded-full border border-line"
					/>
					<NodeGlobe className="absolute inset-0 w-full h-full" />
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono pointer-events-none">
						<div className="text-[12px] tracking-[0.2em] text-purple-bright">GLM-5.2</div>
						<div className="text-[8.5px] tracking-[0.24em] text-dim mt-1.5">ONLINE · ATTESTED</div>
					</div>
				</div>
			</div>

			{/* scroll cue */}
			<div className="relative z-10 flex flex-col items-center gap-3 pb-7">
				<span className="sv-mono text-[8.5px]">Scroll</span>
				<span className="sv-cue" aria-hidden="true" />
			</div>
		</section>
	);
}
