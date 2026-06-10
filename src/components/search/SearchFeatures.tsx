import backgroundImage from "@/assets/background-left.png";
import backgroundImageMobile from "@/assets/background-left-mobile.png";
import { Coins, FileText, Globe, Lock, Newspaper, RefreshCw } from "lucide-react";

const features = [
	{
		icon: Globe,
		title: "Consensus-ranked results",
		description:
			"Every query fans out to Google, Bing, and DuckDuckGo in parallel. Results are deduplicated by URL and ranked by cross-engine agreement, so a link all three engines surface outranks one engine's SEO-gamed top hit.",
	},
	{
		icon: Lock,
		title: "Private by architecture",
		description:
			"Your query reaches the engines from rotating workers spread across three continents, with nothing tying it to your identity. No profiling, no ads, no search history attached to a person.",
	},
	{
		icon: FileText,
		title: "Built for agents",
		description:
			"One POST returns clean, structured JSON. A companion fetch endpoint returns the readable text of any page, ready to ground an LLM response without HTML cleanup.",
	},
	{
		icon: Coins,
		title: "Pay per query",
		description:
			"From $0.002 per query on the same credits as LibertAI inference. With x402 micropayments, an agent can pay for a single search with no account, no card, and no API key.",
	},
	{
		icon: Newspaper,
		title: "Web, news, images, academic",
		description:
			"Four search types behind one endpoint. Switch with a single request parameter and keep the same unified response shape.",
	},
	{
		icon: RefreshCw,
		title: "Infrastructure that stays fresh",
		description:
			"Search workers run as short-lived VMs on Aleph Cloud, health-checked every 30 seconds and rotated every 12 hours for IP diversity and reliability.",
	},
];

export function SearchFeatures() {
	return (
		<section className="relative w-full py-20 lg:py-40 md:py-32 bg-background overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
				{/* Header */}
				<div className="mb-16 max-w-3xl">
					<div className="text-sm mb-4">[ One query, three engines, one answer ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						Search that respects the person asking
					</h2>
					<p className="text-lg mt-6 font-satoshi">
						The same privacy guarantees as LibertAI inference, applied to web search. Geo-distributed workers do the
						searching, consensus does the ranking, and you keep your queries to yourself.
					</p>
				</div>

				{/* Feature blocks */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
					{features.map((feature) => (
						<div key={feature.title} className="space-y-4">
							<div className="flex items-center space-x-3">
								<feature.icon className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
								<h3 className="text-2xl font-bold text-white">{feature.title}</h3>
							</div>
							<p className="text-sm font-satoshi">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
