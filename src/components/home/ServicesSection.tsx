import { Button } from "@/components/ui/button.tsx";
import { Bot, Code, ExternalLink, MessageSquare } from "lucide-react";
import chatImage from "@/assets/home/services/chat.png";
import apiImage from "@/assets/home/services/api.png";
import agentsImage from "@/assets/home/services/agents.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
	{
		icon: MessageSquare,
		title: "Private Chat",
		description:
			"Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data.",
		image: chatImage,
		buttonText: "Chat Now",
		buttonHref: "https://chat.libertai.io",
	},
	{
		icon: Code,
		title: "API",
		description:
			"Integrate powerful AI into your apps via privacy-preserving APIs for chatbots, automation, and innovation.",
		image: apiImage,
		buttonText: "Build with the API",
		buttonHref: "https://console.libertai.io",
	},
	{
		icon: Bot,
		title: "Agents",
		description:
			"LibertAI Agents are highly customizable assistants that operates in a decentralized and confidential environment.",
		image: agentsImage,
		buttonText: "Awaken your Agent",
		buttonHref: "https://console.libertai.io",
	},
];

export function ServicesSection() {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		// Hover effects for service cards
		const cardElements = grid.children;
		Array.from(cardElements).forEach((card) => {
			const cardElement = card as HTMLElement;
			const image = cardElement.querySelector("img");
			const icon = cardElement.querySelector("svg");

			cardElement.addEventListener("mouseenter", () => {
				gsap.to(cardElement, { y: -10, duration: 0.4, ease: "power2.out" });
				if (image) {
					gsap.to(image, { scale: 1.03, duration: 0.4, ease: "power2.out" });
				}
				if (icon) {
					gsap.to(icon, { rotate: 3, duration: 0.3, ease: "power2.out" });
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
		<section id="services" className="w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-24 space-y-6">
					<div className="text-sm">[ Services ]</div>
					<h2>Privacy is Freedom</h2>
					<p className="text-lg max-w-2xl font-satoshi">
						Break free with LibertAI, the decentralized AI platform that puts you in control.
					</p>
				</div>

				{/* Services Grid */}
				<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-28 md:gap-8 lg:gap-16 mb-16">
					{services.map((service) => {
						const IconComponent = service.icon;
						return (
							<div key={service.title} className="group flex flex-col h-full">
								<div className="flex items-center gap-3 mb-4">
									<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
									<h3 className="text-2xl font-satoshi">{service.title}</h3>
								</div>
								<p className="text-sm mb-8 leading-relaxed flex-1">{service.description}</p>

								<div className="flex flex-col items-start">
									<img src={service.image} alt={service.title} className="mb-8 w-full" />

									<a href={service.buttonHref} target="_blank">
										<Button variant="outline" size="lg" className="text-white">
											{service.buttonText}
											<ExternalLink className="w-4 h-4" />
										</Button>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
