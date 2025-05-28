import heroImage from "@/assets/roadmap/hero.png";
import heroImageMobile from "@/assets/roadmap/hero-mobile.png";
import { ScrollHuman } from "@/components/ScrollHuman.tsx";

export function RoadmapHero() {
	const scrollToNext = () => {
		// For now, just scroll to the next section if it exists
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				{/* Desktop image with gradient */}
				<div className="absolute h-full w-full hidden md:block">
					<img src={heroImage} alt="Roadmap background" className="absolute h-full w-full object-cover object-right" />
					<div className="absolute inset-0 bg-gradient-to-r from-background from-15% to-transparent to-75%"></div>
				</div>
				{/* Mobile image with gradient */}
				<div className="absolute h-full w-full md:hidden">
					<img src={heroImageMobile} alt="Roadmap background" className="absolute h-full w-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-background to-100%"></div>
				</div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Main content - centered */}
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1">
					{/* Left side with text */}
					<div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-left">
						<h1 className="font-bold leading-tight text-white text-4xl md:text-6xl lg:text-7xl">Towards the Future</h1>
						<p className="text-lg max-w-2xl font-satoshi text-white">
							LibertAI’s pushing limits. Here’s what’s live and what’s coming to fuel your freedom:
						</p>
					</div>
				</div>

				{/* Bottom scroll indicator */}
				<div className="flex">
					<ScrollHuman onScroll={scrollToNext} />
				</div>
			</div>
		</section>
	);
}
