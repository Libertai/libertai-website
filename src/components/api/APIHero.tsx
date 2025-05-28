import heroImage from "@/assets/api/hero.png";
import heroImageMobile from "@/assets/api/hero-mobile.png";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { ScrollHuman } from "@/components/ScrollHuman.tsx";

export function APIHero() {
	const scrollToNext = () => {
		// For now, just scroll to the next section if it exists
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				{/* Desktop image */}
				<img
					src={heroImage}
					alt="API background"
					className="absolute h-full w-full object-cover object-right hidden md:block"
				/>
				{/* Mobile image */}
				<img
					src={heroImageMobile}
					alt="Private AI background"
					className="absolute h-full w-full object-cover md:hidden"
				/>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Main content - centered */}
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1">
					{/* Left side with text */}
					<div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-left">
						<h1 className="font-bold leading-tight text-white text-4xl md:text-6xl lg:text-7xl">
							Private and Confidential
							<br />
							Inference API
						</h1>
						<p className="text-lg max-w-2xl font-satoshi text-white">
							LibertAI offers decentralized neural access to advanced AI models, with easy integration to build creative
							enterprise solutions.
						</p>
					</div>
				</div>

				{/* Bottom buttons - desktop */}
				<div className="hidden md:flex flex-wrap gap-3 justify-center justify-start font-satoshi">
					<ScrollHuman onScroll={scrollToNext} />
					<a href="https://console.libertai.io" target="_blank">
						<Button variant="glass" size="pill">
							<span>Console</span>
							<ExternalLink />
						</Button>
					</a>
					<a href="https://docs.libertai.io/apis/" target="_blank">
						<Button variant="glass" size="pill">
							<span>Documentation</span>
							<ExternalLink />
						</Button>
					</a>
				</div>

				{/* Bottom buttons - mobile */}
				<div className="md:hidden space-y-4 text-white">
					<div className="font-satoshi flex justify-center gap-3">
						<a href="https://console.libertai.io" target="_blank">
							<Button variant="outline" size="lg">
								<span>Console</span>
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
						<ScrollHuman onScroll={scrollToNext} variant="ghost" size="lg" />
					</div>
				</div>
			</div>
		</section>
	);
}
