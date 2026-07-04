import { Reveal } from "@/components/sovereign/Reveal.tsx";

const POINTS = [
	{
		idx: "01",
		title: "No data collection",
		body: "Requests are processed and forgotten. There is no account requirement, no profile, and nothing to subpoena.",
	},
	{
		idx: "02",
		title: "No training on your data",
		body: "Your prompts never become weights. What you send is never used to train, tune or evaluate any model.",
	},
	{
		idx: "03",
		title: "Attested in hardware",
		body: "Inference runs in Trusted Execution Environments with remote attestation. Verify the enclave — don't trust a policy.",
	},
];

export function PrivacySection() {
	return (
		<section className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
			<Reveal>
				<div className="sv-mono mb-5">[ Privacy is the architecture ]</div>
				<h2 className="text-[clamp(34px,4vw,52px)] mb-4">Private by proof.</h2>
				<p className="text-[16px] text-foreground max-w-[52ch] mb-14">
					Most providers ask you to trust a policy. LibertAI is built so there is nothing to trust — the infrastructure
					can't remember you.
				</p>
			</Reveal>

			<div className="grid md:grid-cols-3 border-t border-line">
				{POINTS.map((p, i) => (
					<Reveal
						key={p.idx}
						delay={i * 110}
						className="sv-mod border-b md:border-b-0 md:border-r border-line last:border-r-0 py-8 md:pr-8 md:[&:not(:first-child)]:pl-8"
					>
						<div className="sv-mono text-faint mb-5">{p.idx}</div>
						<h3 className="font-satoshi text-[19px] text-ink mb-2.5">{p.title}</h3>
						<p className="text-[13.5px] leading-relaxed text-dim">{p.body}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
}
