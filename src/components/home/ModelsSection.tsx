import { Button } from "@/components/ui/button.tsx";
import { Brain, Code, ExternalLink, MessageSquare, Sparkles } from "lucide-react";
import backgroundImage from "@/assets/home/background-left.png";
import textModelImage from "@/assets/home/models/text.png";
import creativityModelImage from "@/assets/home/models/creativity.png";
import brainModelImage from "@/assets/home/models/brain.png";
import codeModelImage from "@/assets/home/models/code.png";

const features = [
	{
		image: textModelImage,
		icon: MessageSquare,
		title: "Text That Talks Back",
		description:
			"Write epic stories, dig into research, or debate big ideas with a model that outshines most open-source chat benchmarks.",
	},
	{
		image: creativityModelImage,
		icon: Sparkles,
		title: "Creativity That Sparks",
		description:
			"Fast, flexible, and perfect for crafting stories, calling functions, or crushing everyday tasks with a tuned dataset.",
	},
	{
		image: brainModelImage,
		icon: Brain,
		title: "Brains for Big Tasks",
		description:
			"Multitask like a pro with a sparse mixture of experts model built for reasoning, creativity, and complex workflows.",
	},
	{
		image: codeModelImage,
		icon: Code,
		title: "Code That Clicks",
		description:
			"Crank out clean code in 80+ languages, fueled by a model trained on 87% code data, ready for English and Chinese projects.",
	},
];

export function ModelsSection() {
	return (
		<section
			className="w-full bg-background py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-16 flex justify-between items-start">
					<div className="space-y-6 max-w-2xl">
						<div className="text-sm">[ By the people, for the people ]</div>
						<h2>Unleash Open-Source Power</h2>
					</div>
					<Button variant="outline" size="lg" className="text-white">
						Explore More
						<ExternalLink className="w-4 h-4" />
					</Button>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="space-y-4">
								<div className="relative overflow-hidden rounded-lg mb-8">
									<img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
								</div>
								<div className="flex items-center gap-3">
									<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
									<h3 className="text-2xl font-satoshi">{feature.title}</h3>
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
