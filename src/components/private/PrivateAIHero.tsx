import heroImage from "@/assets/private/hero.png";
import { ScrollHuman } from "@/components/ScrollHuman.tsx";

export function PrivateAIHero() {
	const scrollToNext = () => {
		// For now, just scroll to the next section if it exists
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src={heroImage}
					alt="Private AI background"
					className="absolute h-full w-full object-cover md:object-right"
				/>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Main content - left aligned */}
				<div className="flex flex-col justify-center flex-1">
					<div className="space-y-6 md:space-y-8">
						<h1 className="font-bold leading-tight text-white text-4xl md:text-6xl lg:text-7xl">Evolve Today</h1>
						<p className="text-lg max-w-2xl font-satoshi text-white">
							Experience the Freedom of LibertAI's Decentralized AI Platform.
						</p>
					</div>
				</div>

				{/* Bottom scroll button - left aligned */}
				<div className="flex justify-start">
					<ScrollHuman onScroll={scrollToNext} />
				</div>
			</div>
		</section>
	);
}
