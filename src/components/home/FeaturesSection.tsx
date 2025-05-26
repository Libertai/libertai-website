import { Button } from "@/components/ui/button.tsx";
import { Brain, ExternalLink, Image, MessageSquare, Users } from "lucide-react";
import chatImage from "@/assets/home/features/chat.png";
import personasImage from "@/assets/home/features/personas.png";
import imgGenImage from "@/assets/home/features/image.png";
import knowledgeImage from "@/assets/home/features/knowledge.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const features = [
	{
		icon: MessageSquare,
		title: "Chat",
		description: "Chat freely with privacy by default for your protection.",
		image: chatImage,
		buttonText: "Chat Now",
		buttonHref: "https://chat.libertai.io",
		live: true,
	},
	{
		icon: Users,
		title: "Custom Personas",
		description:
			"Integrate AI companions effortlessly into your tasks, ensuring privacy, data security, and user sovereignty.",
		image: personasImage,
		buttonText: "Customize",
		buttonHref: "#",
		live: true,
	},
	{
		icon: Image,
		title: "Image Generation",
		description:
			"Unleash your creativity with stunning, uncensored AI-generated images. Experience the future of artistic expression!",
		image: imgGenImage,
		buttonText: "[Coming Soon]",
		buttonHref: "#",
		live: false,
	},
	{
		icon: Brain,
		title: "Knowledge Bases 2.0",
		description:
			"Think of Knowledge bases as a drive where you can create folders and upload documents, and your AI assistant can access it.",
		image: knowledgeImage,
		buttonText: "[Coming Soon]",
		buttonHref: "#",
		live: false,
	},
];

export function FeaturesSection() {
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
				gsap.to(cardElement, { y: -12, duration: 0.4, ease: "power2.out" });
				if (image) {
					gsap.to(image, { scale: 1.03, duration: 0.4, ease: "power2.out" });
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
		<section className="w-full bg-background py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat ltai-bg-left">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-24 space-y-6">
					<div className="text-sm">[ Privacy by default ]</div>
					<h2>Evolve today, remain human</h2>
					<p className="text-lg max-w-2xl font-satoshi">
						LibertAI offers decentralized, secure access to advanced AI models, enabling developers to build scalable,
						privacy-preserving applications.
					</p>
				</div>

				{/* Features Grid */}
				<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28 md:gap-8 lg:gap-16 mb-16">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="group flex flex-col h-full">
								<img src={feature.image} alt={feature.title} className="mb-8 w-full rounded-lg" />
								<div className="flex items-center gap-3 mb-4">
									<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
									<h3 className="text-2xl font-satoshi">{feature.title}</h3>
								</div>
								<p className="text-sm mb-8 leading-relaxed flex-1">{feature.description}</p>

								<div className="flex">
									{feature.live ? (
										<a href={feature.buttonHref} target="_blank">
											<Button variant="outline" size="lg" className="text-white">
												{feature.buttonText}
												<ExternalLink className="w-4 h-4" />
											</Button>
										</a>
									) : (
										<Button variant="ghost" size="lg" className="text-white p-[0]!" disabled>
											{feature.buttonText}
										</Button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
