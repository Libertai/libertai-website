import { Link } from "@tanstack/react-router";
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FooterLink = { text: string; href: string; external: boolean };

const PLATFORM: FooterLink[] = [
	{ text: "Home", href: "/", external: false },
	{ text: "API", href: "/api", external: false },
	{ text: "Search", href: "/search", external: false },
	{ text: "Tokenomics", href: "/tokenomics", external: false },
	{ text: "Roadmap", href: "/roadmap", external: false },
];

const RESOURCES: FooterLink[] = [
	{ text: "Documentation", href: "https://docs.libertai.io", external: true },
	{ text: "LiberClaw", href: "https://liberclaw.ai", external: true },
	{ text: "Blog", href: "https://blog.libertai.io", external: true },
	{ text: "Telegram Bot", href: "https://t.me/liberchat_bot", external: true },
	{ text: "Litepaper", href: "/litepaper.pdf", external: true },
];

const EXPLORE: FooterLink[] = [
	{ text: "Private ChatGPT Alternative", href: "/private-chatgpt-alternative", external: false },
	{ text: "OpenAI API Alternative", href: "/openai-api-alternative", external: false },
	{ text: "Confidential AI", href: "/confidential-ai", external: false },
	{ text: "AI Agents", href: "/agents", external: false },
	{ text: "Uncensored AI", href: "/uncensored-ai", external: false },
	{ text: "AI Freedom", href: "/ai-freedom", external: false },
	{ text: "Decentralized LLMs", href: "/decentralized-llm", external: false },
	{ text: "Open-Source AI", href: "/open-source-ai", external: false },
];

const SOCIALS = [
	{ Icon: FaTelegram, href: "https://t.me/libertai", label: "LibertAI on Telegram" },
	{ Icon: FaXTwitter, href: "https://x.com/Libertai_DAI", label: "LibertAI on X" },
	{ Icon: FaGithub, href: "https://github.com/libertai", label: "LibertAI on GitHub" },
	{ Icon: FaLinkedin, href: "https://linkedin.com/company/libertai", label: "LibertAI on LinkedIn" },
	{ Icon: FaDiscord, href: "https://discord.gg/alephcloud", label: "LibertAI on Discord" },
];

function FooterCol({ heading, links }: { heading: string; links: FooterLink[] }) {
	return (
		<div>
			<div className="sv-mono mb-5">{heading}</div>
			<ul className="flex flex-col gap-3">
				{links.map((l) => (
					<li key={l.text}>
						{l.external ? (
							<a
								href={l.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[13.5px] text-dim hover:text-ink transition-colors"
							>
								{l.text}
							</a>
						) : (
							<Link to={l.href} className="text-[13.5px] text-dim hover:text-ink transition-colors">
								{l.text}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export function SovereignFooter() {
	return (
		<footer className="border-t border-line">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
				<div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
					{/* Brand */}
					<div>
						<Link to="/" className="inline-flex items-center gap-2.5 mb-5">
							<svg className="w-5 h-5" viewBox="0 0 156 155" fill="none" aria-hidden="true">
								<path d="M111.245 0H59.3768V44.2796H111.245V96.1105H155.553V44.2796V0H111.245Z" fill="url(#ftlg1)" />
								<path d="M103.687 110.722L59.3768 155H111.245L155.553 110.722H103.687Z" fill="url(#ftlg2)" />
								<path d="M85.311 110.722H44.757V0L0.447266 44.2796V155H41.0012L85.311 110.722Z" fill="url(#ftlg3)" />
								<defs>
									<linearGradient
										id="ftlg1"
										x1="59.56"
										y1="95.96"
										x2="155.52"
										y2="-0.31"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#644DF9" />
										<stop offset="1" stopColor="#FCCBFF" />
									</linearGradient>
									<linearGradient
										id="ftlg2"
										x1="59.56"
										y1="154.93"
										x2="93.09"
										y2="81.91"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#644DF9" />
										<stop offset="1" stopColor="#FCCBFF" />
									</linearGradient>
									<linearGradient
										id="ftlg3"
										x1="0.61"
										y1="154.75"
										x2="131.17"
										y2="83.09"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#644DF9" />
										<stop offset="1" stopColor="#FCCBFF" />
									</linearGradient>
								</defs>
							</svg>
							<span className="font-satoshi text-[17px] text-ink">LibertAI</span>
						</Link>
						<p className="text-[13.5px] leading-relaxed text-dim max-w-[30ch] mb-7">
							Private AI you own — leading open models on infrastructure no single company controls.
						</p>
						<div className="flex items-center gap-5">
							{SOCIALS.map(({ Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="text-dim hover:text-ink transition-colors"
								>
									<Icon size={18} />
								</a>
							))}
						</div>
					</div>

					<FooterCol heading="Platform" links={PLATFORM} />
					<FooterCol heading="Resources" links={RESOURCES} />
					<FooterCol heading="Explore" links={EXPLORE} />
				</div>

				{/* Baseline */}
				<div className="mt-16 pt-7 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div className="sv-mono">Liberty · Community · Privacy</div>
					<div className="font-mono text-[10px] tracking-[0.12em] uppercase text-faint">
						© 2026 LibertAI ·{" "}
						<a href="https://aleph.cloud" target="_blank" rel="noopener" className="hover:text-dim">
							Powered by Aleph Cloud
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
