import { Brain, Users, Zap } from "lucide-react";
import niji1Image from "@/assets/use-case/ubisoft/governance/niji-1.png";
import niji2Image from "@/assets/use-case/ubisoft/governance/niji-2.png";
import niji3Image from "@/assets/use-case/ubisoft/governance/niji-3.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const features = [
	{
		icon: Users,
		title: "Autonomous AI agents",
		description:
			"Govern the game world: Each Captain Laserhawk NFT is paired with a unique, persona-driven Al agent, capable of analyzing governance proposals, voting, and recording actions transparently on-chain.",
		image: niji1Image,
	},
	{
		icon: Brain,
		title: "Fully decentralized agents",
		description:
			"These agents run on LibertAI's verifiable AI decentralized stack, ensuring privacy protection, transparency, and independence from developer interference.",
		image: niji2Image,
	},
	{
		icon: Zap,
		title: "Synthetic Intelligence",
		description:
			"Initialized with character lore, Al agents use LibertAl's large language models to shape behavior, providing reasoning based on memory, game context, and player interactions.",
		image: niji3Image,
	},
];

export function UbisoftGovernance() {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		// Hover effects for feature cards
		const cardElements = grid.children;
		Array.from(cardElements).forEach((card) => {
			const cardElement = card as HTMLElement;
			const image = cardElement.querySelector("img");
			const icon = cardElement.querySelector("svg");

			cardElement.addEventListener("mouseenter", () => {
				gsap.to(cardElement, { y: -8, duration: 0.4, ease: "power2.out" });
				if (image) {
					gsap.to(image, { scale: 1.02, duration: 0.4, ease: "power2.out" });
				}
				if (icon) {
					gsap.to(icon, { rotate: 5, duration: 0.3, ease: "power2.out" });
				}
			});

			cardElement.addEventListener("mouseleave", () => {
				gsap.to(cardElement, { y: 0, duration: 0.4, ease: "power2.out" });
				if (image) {
					gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
				}
				if (icon) {
					gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.out" });
				}
			});
		});
	}, []);

	return (
		<section className="w-full bg-background py-20 lg:py-32 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-16 lg:mb-24 space-y-6">
					<div className="text-sm">[ Synthetic Agents ]</div>
					<h2 className="text-5xl">Web3 Governance</h2>
					<div className="space-y-4">
						<p className="text-lg font-satoshi max-w-4xl">
							Launched in partnership with LibertAI, Eden’s governance system combines decentralized infrastructure,
							confidential AI agents, and smart wallets to create autonomous digital citizens. Captain Laserhawk
							introduces private AI power to NFT characters (Niji Warriors), aligning with DedSec’s ethos of privacy and
							resistance.
							<br />
							<br />
							Each of the 10,000 NFTs has a user-owned AI agent that autonomously makes in-game decisions, analyzes
							proposals, votes, and logs actions on-chain.
						</p>
					</div>
				</div>

				{/* Features Grid */}
				<div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="group flex flex-col h-full">
								{/* Feature Image */}
								<div className="relative mb-6 overflow-hidden rounded-lg">
									<img
										src={feature.image}
										alt={feature.title}
										className="w-full h-auto rounded-lg transition-transform duration-300"
									/>
								</div>

								{/* Feature Content */}
								<div className="flex items-center gap-3 mb-4">
									<IconComponent className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
									<h3 className="text-2xl font-satoshi text-white">{feature.title}</h3>
								</div>

								<p className="text-sm mb-6 leading-relaxed flex-1">{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
