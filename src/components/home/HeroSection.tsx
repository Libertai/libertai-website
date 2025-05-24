import heroImage from "@/assets/home/hero/hero.png";
import heroImageMobile from "@/assets/home/hero/hero-mobile.png";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
	const desktopButtonRef = useRef<HTMLButtonElement>(null);
	const mobileButtonRef = useRef<HTMLButtonElement>(null);

	const scrollToServices = () => {
		const servicesSection = document.getElementById("services");
		if (servicesSection) {
			servicesSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		// Create floating animation for both buttons
		if (desktopButtonRef.current) {
			gsap.fromTo(
				desktopButtonRef.current,
				{ y: -8 },
				{
					y: 18,
					duration: 1.5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					repeatDelay: 0,
				},
			);
		}

		if (mobileButtonRef.current) {
			gsap.fromTo(
				mobileButtonRef.current,
				{ y: -8 },
				{
					y: 18,
					duration: 1.5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					repeatDelay: 0,
				},
			);
		}
	}, []);

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				{/* Hero image with overlay */}
				<img
					src={heroImage}
					alt="Hero background"
					className="absolute h-full w-full object-cover md:object-right opacity-90 hidden md:block"
				/>
				<img
					src={heroImageMobile}
					alt="Hero background"
					className="absolute h-full w-full object-cover md:object-right opacity-90 md:hidden max-sm:block"
				/>
				{/* Custom gradient background */}
				<div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(14,_15,_24,_0.00)_0%,_#0E0F18_85%)] md:bg-gradient-to-r md:from-background md:via-background/50 md:to-transparent xl:bg-[linear-gradient(90deg,_var(--background)_50%,_rgba(14,_15,_24,_0.00)_75.07%)]"></div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Main content - centered */}
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1">
					{/* Left side with text */}
					<div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
						<h1 className="font-bold leading-tight">Private AI, Unleashed</h1>

						{/* Fake input */}
						<div className="hidden md:block relative max-w-full md:max-w-md">
							<input
								type="text"
								placeholder="Help me with my new growth-focused marketing..."
								className="w-full h-10 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary pr-28 md:pr-32 text-sm md:text-base"
							/>
						</div>
					</div>
				</div>

				{/* Bottom buttons - desktop */}
				<div className="hidden md:flex flex-wrap gap-3 justify-center justify-start font-satoshi">
					<Button
						ref={desktopButtonRef}
						variant="ghost"
						size="pill"
						className="hover:bg-transparent text-white"
						onClick={scrollToServices}
					>
						<ArrowDown />
						<span>Scroll if you are human</span>
					</Button>
					<a href="https://console.libertai.io" target="_blank">
						<Button variant="glass" size="pill">
							<span>Build with the API</span>
							<ExternalLink />
						</Button>
					</a>
					<a href="https://docs.libertai.io" target="_blank">
						<Button variant="glass" size="pill">
							<span>Developer Docs</span>
							<ExternalLink />
						</Button>
					</a>
				</div>

				{/* Bottom buttons - mobile */}
				<div className="md:hidden space-y-4 text-white">
					<div className="font-satoshi flex justify-center gap-3">
						<a href="https://console.libertai.io" target="_blank">
							<Button variant="outline" size="lg">
								<span>API</span>
								<ExternalLink />
							</Button>
						</a>
						<a href="https://docs.libertai.io" target="_blank">
							<Button variant="outline" size="lg">
								<span>Dev Docs</span>
								<ExternalLink />
							</Button>
						</a>
					</div>

					<div className="flex justify-center">
						<Button ref={mobileButtonRef} variant="ghost" size="lg" onClick={scrollToServices}>
							<ArrowDown />
							<span>Scroll if you are human</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
