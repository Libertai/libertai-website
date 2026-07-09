import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { usePricing } from "@/components/sovereign/usePricing.ts";

/** Hero telemetry, relocated below the fold — one quiet line of proof. */
export function StatusStrip() {
	const { flagship } = usePricing();
	const live = flagship !== null;
	const glmPrice = flagship ? `${flagship.input} / ${flagship.output}` : "$0.60 / $2.20";

	const stats = [
		{ label: "Network", value: "Distributed" },
		{ label: "Prompts logged", value: "0 bytes" },
		{ label: "Confidentiality", value: "TEE-attested" },
		{ label: "GLM-5.2 · 1M tokens", value: glmPrice },
	];

	return (
		<Reveal>
			<section className="border-y border-line">
				<div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center gap-x-10 gap-y-3">
					<span className="sv-led" aria-hidden="true" />
					{stats.map((s) => (
						<div key={s.label} className="flex items-baseline gap-3">
							<span className="sv-mono text-[9px]">{s.label}</span>
							<span className="font-mono text-[12px] text-ink tracking-[0.08em]">{s.value}</span>
						</div>
					))}
					<span className="sv-mono text-[8.5px] ml-auto text-faint">{live ? "Live · Aleph" : "*Illustrative"}</span>
				</div>
			</section>
		</Reveal>
	);
}
