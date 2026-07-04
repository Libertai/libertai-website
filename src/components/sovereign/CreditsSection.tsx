import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

const TERMS = [
	{ label: "Amount", value: "Up to $10,000" },
	{ label: "Eligibility", value: "Early-stage teams" },
	{ label: "Use", value: "Inference credits" },
	{ label: "Review", value: "Case-by-case" },
];

export function CreditsSection() {
	return (
		<section className="border-y border-line bg-panel/40">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-32 grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-24 items-center">
				<Reveal>
					<div className="sv-mono mb-5">[ Sovereign program ]</div>
					<h2 className="text-[clamp(34px,4vw,52px)] mb-4">$10,000 to build private.</h2>
					<p className="text-[16px] text-foreground max-w-[52ch] mb-8">
						Startup credits for selected companies building on private inference — GLM-5.2 and the full catalog, plus
						migration support from our team. Applications are reviewed; tell us what you're building.
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<a
							href={LINKS.telegram}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-ink text-[#0a0a0c] font-satoshi text-[15px] px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
						>
							Apply for credits
						</a>
						<span className="sv-mono text-[8.5px] text-faint">Reply within days</span>
					</div>
				</Reveal>

				<Reveal delay={140}>
					<div className="sv-ticks relative bg-panel border border-line-strong">
						<i />
						<i />
						<i />
						<i />
						<header className="px-6 py-4 border-b border-line">
							<span className="font-mono text-[11px] tracking-[0.18em] text-ink">TERMS // AT A GLANCE</span>
						</header>
						<div className="px-6 py-2">
							{TERMS.map((t) => (
								<div
									key={t.label}
									className="flex justify-between items-center py-3.5 border-b border-white/5 last:border-b-0"
								>
									<span className="sv-mono text-[9px]">{t.label}</span>
									<span className="font-mono text-[12.5px] text-ink">{t.value}</span>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
