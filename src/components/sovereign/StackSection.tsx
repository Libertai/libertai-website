import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/sovereign/Reveal.tsx";
import { LINKS } from "@/components/sovereign/data.ts";

const MODULES = [
	{
		idx: "01 / Chat",
		title: "Private Assistant",
		body: "Free, encrypted chat. No account, no logs, no training on your conversations.",
		href: LINKS.chat,
		external: true,
	},
	{
		idx: "02 / API",
		title: "Confidential Inference",
		body: "GLM-5.2 and open models over one OpenAI-compatible endpoint.",
		href: "/api",
		external: false,
	},
	{
		idx: "03 / Agents",
		title: "Autonomous Agents",
		body: "Always-on agents with persistent memory on dedicated private machines.",
		href: "/agents",
		external: false,
	},
	{
		idx: "04 / Search",
		title: "Private Web Search",
		body: "Multi-engine consensus with no profiling and no stored history.",
		href: "/search",
		external: false,
	},
];

export function StackSection() {
	return (
		<section className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
			<Reveal>
				<div className="flex flex-wrap justify-between items-baseline gap-4 pb-5 border-b border-line mb-0">
					<div className="sv-mono">[ The sovereign stack ]</div>
					<div className="sv-mono text-faint">04 modules</div>
				</div>
			</Reveal>

			<Reveal delay={100}>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4">
					{MODULES.map((m) => {
						const inner = (
							<>
								<div className="sv-mono text-faint mb-10">{m.idx}</div>
								<h3 className="font-satoshi text-[18px] text-ink mb-2 group-hover:text-purple-bright transition-colors">
									{m.title}
								</h3>
								<p className="text-[13px] leading-relaxed text-dim mb-6">{m.body}</p>
								<span className="sv-mono text-[8.5px] text-faint group-hover:text-dim transition-colors">Open →</span>
							</>
						);
						const cls =
							"sv-mod group block border-b lg:border-b-0 lg:border-r border-line last:border-r-0 py-8 lg:pr-7 lg:[&:not(:first-child)]:pl-7";
						return m.external ? (
							<a key={m.idx} href={m.href} target="_blank" rel="noopener noreferrer" className={cls}>
								{inner}
							</a>
						) : (
							<Link key={m.idx} to={m.href} className={cls}>
								{inner}
							</Link>
						);
					})}
				</div>
			</Reveal>
		</section>
	);
}
