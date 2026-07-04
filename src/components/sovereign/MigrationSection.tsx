import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

const STEPS = [
	{ idx: "01", title: "Create an account", body: "Email or wallet — no KYC." },
	{ idx: "02", title: "Generate an API key", body: "One click in the console." },
	{ idx: "03", title: "Pick GLM-5.2", body: "Or any model in the catalog." },
	{ idx: "04", title: "Point your client here", body: "Keep your SDK, prompts and stack." },
];

export function MigrationSection() {
	return (
		<section className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
				<div>
					<Reveal>
						<div className="sv-mono mb-5">[ Migration ]</div>
						<h2 className="text-[clamp(34px,4vw,52px)] mb-4">Move in a minute.</h2>
						<p className="text-[16px] text-foreground max-w-[46ch] mb-12">
							The API is OpenAI-compatible. Your code already works — it just talks to a different address.
						</p>
					</Reveal>
					<div className="flex flex-col">
						{STEPS.map((s, i) => (
							<Reveal
								key={s.idx}
								delay={i * 90}
								className="flex items-baseline gap-6 py-4 border-t border-line last:border-b"
							>
								<span className="font-mono text-[10px] tracking-[0.16em] text-faint">{s.idx}</span>
								<div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
									<h3 className="font-satoshi text-[16.5px] text-ink">{s.title}</h3>
									<p className="text-[13px] text-dim">{s.body}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>

				<Reveal delay={160}>
					<div className="sv-ticks relative bg-panel border border-line-strong">
						<i />
						<i />
						<i />
						<i />
						<header className="flex justify-between items-center px-6 py-4 border-b border-line">
							<span className="font-mono text-[11px] tracking-[0.18em] text-ink">THE ENTIRE MIGRATION</span>
							<span className="sv-mono text-[8.5px]">diff</span>
						</header>
						<pre className="px-6 py-6 font-mono text-[11.5px] md:text-[13px] leading-[2] overflow-x-auto">
							<code>
								<span className="block text-faint">
									<span className="select-none">- </span>base_url=&quot;https://api.openai.com/v1&quot;
								</span>
								<span className="block text-ink">
									<span className="select-none text-purple-bright">+ </span>
									base_url=&quot;https://api.libertai.io/v1&quot;
								</span>
							</code>
						</pre>
						<footer className="px-6 py-4 border-t border-line">
							<a
								href={LINKS.docs}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[13.5px] text-ink hover:text-purple-bright transition-colors"
							>
								Migration guide →
							</a>
						</footer>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
