import { type ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coins, ExternalLink, Network, Server } from "lucide-react";
import backgroundImage from "@/assets/tokenomics/decentralized.webp";
import { Button } from "@/components/ui/button.tsx";

gsap.registerPlugin(ScrollTrigger);

interface DecentralizedFeature {
	title: string;
	description: string;
	icon: ReactNode;
	buttonText: string;
	buttonLink: string;
}

export function DecentralizedSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	const features: DecentralizedFeature[] = [
		{
			title: "Staking",
			description:
				"Become a cornerstone of the decentralized cloud future by staking 10,000+ $ALEPH. Your commitment earns you $LTAI tokens, reflecting your stake in the platform's growth and success",
			icon: <Coins className="w-6 h-6" />,
			buttonText: "Stake ALEPH",
			buttonLink: "https://app.aleph.cloud/account/earn/staking",
		},
		{
			title: "Core Channel Node Operator",
			description:
				"Be a vital link in the decentralized cloud backbone by operating an Aleph Cloud Core Channel Node. Enjoy the benefits of node operation and claim your share of LibertAI tokens ($LTAI) as you help drive cross-chain interactions!",
			icon: <Network className="w-6 h-6" />,
			buttonText: "Run Core Node",
			buttonLink: "https://docs.aleph.cloud/nodes/core/introduction",
		},
		{
			title: "Compute Node Operator",
			description:
				"Step up and become a key player in the decentralized cloud landscape by running an Aleph Cloud Compute Node. Your contributions to data storage, compute capabilities, and decentralized applications are essential and will be rewarded with LibertAI tokens ($LTAI)!",
			icon: <Server className="w-6 h-6" />,
			buttonText: "Run Compute Node",
			buttonLink: "https://docs.aleph.cloud/nodes/compute/introduction",
		},
	];

	useEffect(() => {
		if (!sectionRef.current) return;

		// Animate cards on scroll with smoother animation
		cardsRef.current.forEach((card, index) => {
			if (card) {
				gsap.fromTo(
					card,
					{
						opacity: 0,
						y: 30,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power1.out",
						scrollTrigger: {
							trigger: card,
							start: "top 85%",
							toggleActions: "play none none none",
						},
						delay: index * 0.15,
					},
				);
			}
		});

		return () => {
			ScrollTrigger.killAll();
		};
	}, []);

	return (
		<section ref={sectionRef} className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				{/* Desktop image with gradient */}
				<div className="absolute h-full w-full hidden md:block">
					<img
						src={backgroundImage}
						alt="Decentralized background"
						className="absolute h-full w-full object-cover object-right"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-background from-15% to-transparent to-75%"></div>
				</div>
				{/* Mobile image without gradient */}
				<div className="absolute h-full w-full md:hidden">
					<img src={backgroundImage} alt="Decentralized background" className="absolute h-full w-full object-cover" />
				</div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left side - Text content */}
					<div className="space-y-6">
						{/* Section identifier */}
						<div className="text-sm">[ Earn with LibertAI ]</div>

						{/* Main heading */}
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
							Decentralized by Design
						</h2>

						{/* Description */}
						<p className="text-lg font-satoshi leading-relaxed max-w-lg">
							Are you ready to dive into a new world of decentralized computing, where your contributions are rewarded
							with tangible benefits? Look no further than $LTAI token! This token plays an essential role within the
							exciting and innovative Aleph Cloud ecosystem.
						</p>
					</div>

					{/* Right side - Feature cards */}
					<div className="space-y-6">
						{features.map((feature, index) => (
							<div
								key={feature.title}
								ref={(el) => (cardsRef.current[index] = el) as never}
								className="bg-background/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-background/30 transition-all duration-300"
							>
								{/* Icon and title */}
								<div className="flex items-center gap-4 mb-4">
									<div className="text-[#EA7AF4]">{feature.icon}</div>
									<h3 className="text-2xl font-satoshi text-white">{feature.title}</h3>
								</div>

								{/* Description */}
								<p className="text-sm leading-relaxed mb-6">{feature.description}</p>

								{/* CTA Button */}
								<a href={feature.buttonLink} target="_blank">
									<Button variant="outline" size="lg" className="text-white">
										{feature.buttonText}
										<ExternalLink className="w-4 h-4" />
									</Button>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
