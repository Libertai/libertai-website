import heroBackground from "@/assets/background-left.png";
import genlayerLogo from "@/assets/use-cases/genlayer/logo.png";
import { ScrollHuman } from "@/components/ScrollHuman.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";

export function GenlayerHero() {
	const scrollToNext = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<img src={heroBackground} alt="Captain Laserhawk background" className="absolute h-full w-full object-cover" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Left content */}
				<div className="flex flex-col justify-center space-y-6 max-w-2xl">
					<div className="text-sm">[ Fairness, Automated ]</div>

					{/* Title */}
					<h1 className="font-bold leading-tight text-white text-4xl md:text-6xl lg:text-6xl">Genlayer</h1>

					{/* Description */}
					<p className="text-lg max-w-2xl font-satoshi">
						GenLayer's innovative protocol uses AI models as fair judges for onchain disputes, powering intelligent
						contracts and ensuring neutral, fair and rapid arbitration in decentralized ecosystems like DAOs and
						prediction markets.
					</p>

					{/* GenLayer Button */}
					<div className="mt-6">
						<a href="https://www.genlayer.com/" target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								<span>GenLayer</span>
								<ExternalLink />
							</Button>
						</a>
					</div>

					{/* Logos - responsive layout */}
					<div className="mt-8 flex items-center space-x-6 md:block md:space-x-0 max-md:mx-auto">
						<img src={genlayerLogo} alt="Captain Laserhawk" className="h-36 w-auto md:hidden" />
					</div>
				</div>

				{/* Right content - GenLayer Logo (medium screens and up) */}
				<div className="hidden md:flex items-center justify-center flex-shrink-0 ml-12">
					<img src={genlayerLogo} alt="Captain Laserhawk" className="h-48 lg:h-64 xl:h-80 w-auto" />
				</div>
			</div>

			{/* Bottom scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<ScrollHuman onScroll={scrollToNext} />
			</div>
		</section>
	);
}
