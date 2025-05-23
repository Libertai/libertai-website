import heroImage from "@/assets/hero.png";
import heroImageMobile from "@/assets/hero-mobile.png";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center bg-background text-white overflow-hidden">
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
				<div className="absolute inset-0 md:bg-gradient-to-r md:from-background md:via-background/50 md:to-transparent xl:bg-[linear-gradient(90deg,_var(--background)_50%,_rgba(14,_15,_24,_0.00)_75.07%)]"></div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Left side with text */}
				<div className="w-full md:w-1/2 space-y-6 md:space-y-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-satoshi">
						Private AI, Unleashed
					</h1>

					{/* Email input form */}
					<div className="relative max-w-full md:max-w-md">
						<input
							type="text"
							placeholder="Help me with my new growth-focused marketing..."
							className="w-full h-10 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary pr-28 md:pr-32 text-sm md:text-base"
						/>
						<div className="absolute right-1 top-[3px]">
							<Button variant="default" size="pill-sm" className="text-white">
								Generate
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
