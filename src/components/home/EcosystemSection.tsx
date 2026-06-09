import { ArrowRight, BookOpen, Bot, Boxes, ExternalLink, Gamepad2, SearchCheck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const ecosystem = [
	{
		name: "LiberClaw",
		href: "https://app.liberclaw.ai",
		description: "Deploy autonomous agents on dedicated VMs with persistent memory, tools, and always-on execution.",
		icon: Bot,
		cta: "Deploy agents",
	},
	{
		name: "StoryNova.app",
		href: "https://storynova.app",
		description: "Interactive AI storytelling where readers choose the path and shape adventures across genres.",
		icon: BookOpen,
		cta: "Shape a story",
	},
	{
		name: "Ubisoft Use Case",
		href: "/use-cases/ubisoft",
		description: "See how Captain Laserhawk uses LibertAI agents for on-chain governance and player-driven narratives.",
		icon: Gamepad2,
		cta: "View use case",
		external: false,
	},
	{
		name: "Askbuy.ai",
		href: "https://askbuy.ai",
		description: "An AI shopping assistant that helps people compare options and make faster buying decisions.",
		icon: ShoppingBag,
		cta: "Shop smarter",
	},
	{
		name: "Recomate.ai",
		href: "https://recomate.ai",
		description: "Product recommendations, review analysis, and comparisons for shoppers and builders.",
		icon: SearchCheck,
		cta: "Explore reviews",
	},
	{
		name: "Motari.io",
		href: "https://motari.io",
		description: "Open robotics infrastructure for sharing models, datasets, tools, and embodied AI systems.",
		icon: Boxes,
		cta: "Open robotics",
	},
];

export function EcosystemSection() {
	return (
		<section
			id="ecosystem"
			className="w-full bg-background py-20 lg:py-32 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat ltai-bg-left"
		>
			<div className="container mx-auto">
				<div className="mb-12 md:mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl space-y-6">
						<div className="text-sm">[ Ecosystem ]</div>
						<h2>Products Built Around Private AI</h2>
						<p className="text-lg font-satoshi">
							LibertAI is the private AI layer. The ecosystem turns it into agents, shopping assistants, product
							intelligence, interactive stories, open robotics, and game use cases.
						</p>
					</div>
					<a href="https://console.libertai.io" target="_blank" rel="noopener noreferrer" className="w-fit">
						<Button variant="outline" size="lg" className="text-white">
							Build with LibertAI
							<ExternalLink className="w-4 h-4" />
						</Button>
					</a>
				</div>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
					{ecosystem.map((product) => {
						const Icon = product.icon;
						const LinkIcon = product.external === false ? ArrowRight : ExternalLink;

						return (
							<a
								key={product.name}
								href={product.href}
								target={product.external === false ? undefined : "_blank"}
								rel={product.external === false ? undefined : "noopener noreferrer"}
								className="group flex min-h-56 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.09] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none md:min-h-64 md:p-5"
							>
								<div className="space-y-5">
									<div className="flex items-start justify-between gap-3">
										<span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-[#EA7AF4]">
											<Icon className="size-5" />
										</span>
										<LinkIcon className="size-4 shrink-0 text-white/45 transition-colors group-hover:text-white" />
									</div>
									<div className="space-y-3">
										<h3 className="text-lg leading-tight md:text-2xl">{product.name}</h3>
										<p className="text-xs leading-relaxed text-white/65 md:text-sm">{product.description}</p>
									</div>
								</div>
								<div className="pt-6 text-xs font-satoshi text-white/55 transition-colors group-hover:text-white md:text-sm">
									{product.cta}
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
