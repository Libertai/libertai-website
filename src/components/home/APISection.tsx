import { Button } from "@/components/ui/button.tsx";
import { Cpu, ExternalLink, GitPullRequestArrow, Rocket } from "lucide-react";

const features = [
	{
		icon: Cpu,
		title: "Core Capabilities",
		description:
			"Power your apps and AI agents with LibertAI’s secure and fast inference with TEE security for unbreakable privacy via our OpenAI compatible API.",
	},
	{
		icon: GitPullRequestArrow,
		title: "Developer Freedom",
		description:
			"Dare to build with no KYC verification needed. Your private AI playground comes with developer support and a console for tracking token based usage and spending.",
	},
	{
		icon: Rocket,
		title: "Advanced Features",
		description:
			"More models and features such as web search, function calling and deep reasoning are coming soon to expand your toolkit.",
	},
];

export function APISection() {
	return (
		<section className="w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat flex items-center ltai-bg-right">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-20 space-y-9 max-w-2xl">
					<div className="text-sm">[ For your eyes only ]</div>
					<h2>Confidential API</h2>
					<p className="text-lg font-satoshi">
						LibertAI API powers LLMs on Aleph Cloud TEEs for private, verifiable AI, redefining AI freedom.
					</p>

					{/* Action Buttons */}
					<div className="flex gap-4 pt-4">
						<a href="https://console.libertai.io" target="_blank">
							<Button variant="outline" size="lg" className="text-white">
								Console
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
						<a href="https://docs.libertai.io/apis/text/#pricing" target="_blank">
							<Button variant="outline" size="lg" className="text-white">
								Pricing
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
					</div>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="space-y-4">
								<div className="flex items-center gap-3">
									<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
									<h3 className="text-2xl font-regular font-satoshi">{feature.title}</h3>
								</div>
								<p className="text-sm leading-relaxed">{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
