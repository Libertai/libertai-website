import type { CSSProperties } from "react";
import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { COMPARISON } from "@/components/sovereign/data.ts";

export function ComparisonSection() {
	return (
		<section className="border-y border-line bg-panel/40">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-32 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-12 lg:gap-24 items-center">
				<Reveal>
					<div className="sv-mono mb-5">[ Cost ]</div>
					<h2 className="text-[clamp(34px,4vw,52px)] mb-4">A fraction of the price.</h2>
					<p className="text-[16px] text-foreground max-w-[44ch]">
						Open models on distributed infrastructure — without a hyperscaler margin. Same class of output, an order of
						magnitude less per token.
					</p>
				</Reveal>

				<Reveal delay={140}>
					<div className="flex justify-between sv-mono text-[9px] pb-4">
						<span>Output price / 1M tokens</span>
						<span className="text-faint">Illustrative</span>
					</div>
					<div className="flex flex-col gap-5">
						{COMPARISON.map((row) => (
							<div
								key={row.who}
								className="grid grid-cols-[150px_1fr_64px] md:grid-cols-[200px_1fr_72px] items-center gap-4"
							>
								<span
									className={`font-mono text-[10.5px] tracking-[0.08em] truncate ${row.us ? "text-ink" : "text-dim"}`}
								>
									{row.who.toUpperCase()}
								</span>
								<span className="sv-bar h-[10px] bg-white/6">
									<i
										style={{ "--w": `${row.width}%`, background: row.us ? "var(--ink)" : "#33343c" } as CSSProperties}
									/>
								</span>
								<span className={`font-mono text-[12px] tabular-nums text-right ${row.us ? "text-ink" : "text-dim"}`}>
									{row.price}
								</span>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
