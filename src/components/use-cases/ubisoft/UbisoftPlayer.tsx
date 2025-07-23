import { Target, Vote, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const features = [
	{
		icon: Vote,
		title: "Voting",
		description:
			"Votes initiated by players have greater influence than Niji-initiated votes. Voting power is determined by the Eden Score and the number of ID cards under a single wallet address.",
	},
	{
		icon: Target,
		title: "Scoring",
		description:
			"The Eden Score is permanently attached to each Niji Warrior ID, reflecting contributions, loyalty, and influence via in-game achievements and off-game social interactions.",
	},
	{
		icon: Zap,
		title: "Power",
		description:
			"Significant game decisions can be adjusted to prioritize the voices of Niji Warrior holders, especially those who have actively voted.",
	},
];

export function UbisoftPlayer() {
	return (
		<section className="w-full bg-background py-20 lg:py-32 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-16 lg:mb-24 space-y-6">
					<div className="text-sm">[ Dynamic Democracy ]</div>
					<h2 className="text-5xl">Power to the Player</h2>
					<p className="text-lg font-satoshi max-w-4xl">
						Niji Warrior holders' decision-making power is augmented by AI, creating a dynamic bond between players and
						their ID cards, strengthening the identity of Eden's citizens.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="flex flex-col">
								{/* Feature Content */}
								<div className="flex items-center gap-3 mb-4">
									<IconComponent className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
									<h3 className="text-2xl">{feature.title}</h3>
								</div>

								<p className="text-base text-sm leading-relaxed">{feature.description}</p>
							</div>
						);
					})}
				</div>

				{/* Bottom Summary */}
				<div className="text-center">
					<p className="text-lg font-satoshi max-w-4xl mx-auto">
						Autonomous Niji opinions can contribute to debates on governance proposals, enriching the decision-making
						process and guiding player choices.
					</p>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-wrap gap-4 justify-center mt-12">
					<a href="https://medium.com/@Ubisoft-Captain-Laserhawk/from-passive-collectibles-to-autonomous-citizens-how-eden-online-unlocked-ai-governed-nfts-2422934e5f97" target="_blank">
						<Button variant="outline" size="lg" className="text-white border-white">
							<span>Learn more</span>
							<ExternalLink />
						</Button>
					</a>
					<a href="https://magiceden.io/launchpad/arbitrum/niji_warrior" target="_blank">
						<Button variant="outline" size="lg" className="text-white border-white">
							<span>Get you own Niji</span>
							<ExternalLink />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
