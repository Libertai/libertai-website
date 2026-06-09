import heroVideoDesktop from "@/assets/home/hero/desktop.webm";
import heroVideoMobile from "@/assets/home/hero/mobile.webm";
import { Bot, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { TypewriterEffect } from "@/components/TypewriterEffect.tsx";
import { ScrollHuman } from "@/components/ScrollHuman.tsx";

const primaryCtas = [
	{
		href: "https://app.liberclaw.ai",
		label: "Launch Personal Agent",
		icon: Bot,
	},
	{
		href: "https://chat.libertai.io",
		label: "Chat with AI Assistant",
		icon: MessageCircle,
	},
];

export function HeroSection() {
	const scrollToServices = () => {
		const servicesSection = document.getElementById("services");
		if (servicesSection) {
			servicesSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background videos */}
			<div className="absolute inset-0 z-0">
				{/* Hero video desktop */}
				<video
					src={heroVideoDesktop}
					autoPlay
					muted
					loop
					playsInline
					aria-hidden="true"
					className="absolute h-full w-full object-cover md:object-right opacity-90 hidden md:block"
				/>
				{/* Hero video mobile */}
				<video
					src={heroVideoMobile}
					autoPlay
					muted
					loop
					playsInline
					aria-hidden="true"
					className="absolute h-full w-full object-cover md:object-right opacity-90 md:hidden max-sm:block"
				/>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Main content - centered */}
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1">
					{/* Left side with text */}
					<div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
						<h1 className="font-bold leading-tight">Private AI, Unleashed</h1>

						{/* Typewriter Effect */}
						<div className="hidden xl:block relative max-w-full xl:max-w-2xl">
							<div className="w-full h-12 px-4 py-3 rounded-full border border-white/20 text-white flex items-center text-sm md:text-base">
								<TypewriterEffect
									phrases={[
										"Analyze my confidential R&D notes",
										"Summarize my patient data for a report",
										"Draft action items for my private meeting follow-up email",
										"Summarize my customer support chat logs",
										"Create an NPC dialogue for my game",
										"Simulate a private investor pitch",
										"Organize my medical bills for insurance claims",
										"Simulate a therapy session using role-play techniques",
										"Analyze my investment returns for tax filing",
									]}
									className="text-white text-sm"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom buttons - desktop */}
				<div className="hidden md:flex flex-wrap gap-3 justify-center justify-start font-satoshi">
					<ScrollHuman onScroll={scrollToServices} />
					{primaryCtas.map((cta) => {
						const Icon = cta.icon;

						return (
							<a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer">
								<Button variant="glass" size="pill">
									<Icon />
									<span>{cta.label}</span>
									<ExternalLink />
								</Button>
							</a>
						);
					})}
					<a href="https://console.libertai.io" target="_blank" rel="noopener noreferrer">
						<Button variant="glass" size="pill">
							<span>Build with the API</span>
							<ExternalLink />
						</Button>
					</a>
					<a href="https://docs.libertai.io" target="_blank" rel="noopener noreferrer">
						<Button variant="glass" size="pill">
							<span>Developer Docs</span>
							<ExternalLink />
						</Button>
					</a>
				</div>

				{/* Bottom buttons - mobile */}
				<div className="w-full space-y-4 text-white md:hidden">
					<div className="font-satoshi flex flex-col items-center gap-3">
						{primaryCtas.map((cta) => {
							const Icon = cta.icon;

							return (
								<a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer">
									<Button variant="outline" size="lg" className="gap-2 px-5 text-sm [&_svg]:size-4">
										<Icon />
										<span>{cta.label}</span>
										<ExternalLink />
									</Button>
								</a>
							);
						})}
					</div>

					<div className="font-satoshi flex justify-center gap-3">
						<a href="https://console.libertai.io" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="lg" className="gap-1.5 px-5 text-xs sm:text-sm [&_svg]:size-3.5">
								<span>API</span>
								<ExternalLink />
							</Button>
						</a>
						<a href="https://docs.libertai.io" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="lg" className="gap-1.5 px-5 text-xs sm:text-sm [&_svg]:size-3.5">
								<span>Dev Docs</span>
								<ExternalLink />
							</Button>
						</a>
					</div>

					<div className="flex justify-center">
						<ScrollHuman onScroll={scrollToServices} variant="ghost" size="lg" />
					</div>
				</div>
			</div>
		</section>
	);
}
