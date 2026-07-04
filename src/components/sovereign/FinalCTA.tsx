import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

export function FinalCTA() {
	return (
		<section className="relative border-t border-line overflow-hidden">
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none"
				style={{ background: "radial-gradient(ellipse 60% 90% at 50% 110%, rgba(100,77,249,.14), transparent 65%)" }}
			/>
			<div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-44 text-center">
				<Reveal>
					<h2 className="text-[clamp(40px,5.5vw,76px)] leading-[1.02] mb-10">
						Own your
						<br />
						intelligence.
					</h2>
					<div className="flex flex-wrap justify-center items-center gap-4 mb-12">
						<a
							href={LINKS.console}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-ink text-[#0a0a0c] font-satoshi text-[15px] px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
						>
							Deploy GLM-5.2
						</a>
						<a
							href={LINKS.docs}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[15px] text-ink border border-line-strong px-6 py-3.5 rounded-[2px] hover:border-white/40 transition-colors"
						>
							Read the docs
						</a>
					</div>
					<div className="sv-mono text-[9px] text-faint">Break free — join the liberation</div>
				</Reveal>
			</div>
		</section>
	);
}
