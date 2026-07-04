import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { FLAGSHIP, LINKS, MODELS } from "@/components/sovereign/data.ts";

export function ModelsShowcase() {
	return (
		<section className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
			<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-14 lg:gap-20 items-start">
				{/* Copy + flagship */}
				<div>
					<Reveal>
						<div className="sv-mono mb-5">[ The models ]</div>
						<h2 className="text-[clamp(34px,4vw,52px)] mb-4">One endpoint. The leading open models.</h2>
						<p className="text-[16px] text-foreground max-w-[48ch] mb-12">
							OpenAI-compatible, pay-per-token, no KYC. GLM-5.2 leads; the rest of the catalog is one parameter away.
						</p>
					</Reveal>

					<Reveal delay={120}>
						<div className="sv-ticks relative bg-panel border border-line-strong">
							<i />
							<i />
							<i />
							<i />
							<header className="flex justify-between items-center px-6 py-4 border-b border-line">
								<span className="font-mono text-[11px] tracking-[0.18em] text-ink">SPEC // {FLAGSHIP.name}</span>
								<span className="font-mono text-[10px] tracking-[0.18em] text-purple-bright">[ FLAGSHIP ]</span>
							</header>
							<div className="px-6 py-2">
								{FLAGSHIP.rows.map((r) => (
									<div
										key={r.label}
										className="flex justify-between items-center py-3 border-b border-white/5 last:border-b-0"
									>
										<span className="sv-mono text-[9px]">{r.label}</span>
										<span className="font-mono text-[13px] text-ink tabular-nums">{r.value}</span>
									</div>
								))}
							</div>
							<footer className="flex items-center gap-6 px-6 py-4 border-t border-line">
								<a
									href={LINKS.console}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[13.5px] text-ink hover:text-purple-bright transition-colors"
								>
									Try {FLAGSHIP.name} →
								</a>
								<a
									href={LINKS.docs}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[13.5px] text-dim hover:text-ink transition-colors"
								>
									API docs
								</a>
							</footer>
						</div>
						<p className="sv-mono text-[8.5px] text-faint mt-3">
							*Illustrative —{" "}
							<Link to="/api" className="underline underline-offset-2 hover:text-dim">
								live pricing on the API page
							</Link>
						</p>
					</Reveal>
				</div>

				{/* Catalog grid */}
				<div className="grid sm:grid-cols-2 border-t border-l border-line">
					{MODELS.map((m, i) => (
						<Reveal key={m.name} delay={i * 70} className="sv-mod border-b border-r border-line p-6">
							<h3 className="font-satoshi text-[16.5px] text-ink mb-1.5">{m.name}</h3>
							<p className="text-[12.5px] leading-snug text-dim mb-5">{m.use}</p>
							<div className="flex items-baseline justify-between">
								<span className="sv-mono text-[8.5px]">In / out · 1M</span>
								<span className="font-mono text-[11.5px] text-foreground tabular-nums">{m.price}</span>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
