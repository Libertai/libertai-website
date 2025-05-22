import heroImage from "@/assets/hero.png";
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
					className="absolute h-full w-full object-cover md:object-right opacity-90"
				/>
				{/* Lighter gradient that doesn't obscure the image as much */}
				<div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent md:via-transparent"></div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 md:pt-16 pb-12">
				{/* Left side with text */}
				<div className="w-full md:w-1/2 space-y-6 md:space-y-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Private AI, Unleashed</h1>

					{/* Email input form */}
					<div className="relative max-w-full md:max-w-md">
						<input
							type="text"
							placeholder="Help me with my new growth-focused marketing..."
							className="w-full h-10 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary pr-28 md:pr-32 text-sm md:text-base"
						/>
						<div className="absolute right-1 top-[3px]">
							<Button 
								variant="default" 
								size="pill-sm"
								className="text-white"
							>
								Generate
							</Button>
						</div>
					</div>

					{/* Bottom links */}
					<div className="flex flex-wrap gap-4 md:gap-8 items-center text-xs md:text-sm text-white/70 pt-4 md:pt-8">
						<a href="#" className="flex items-center gap-1.5 hover:text-white group">
							<span className="w-5 h-5 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary/80 transition-colors">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</span>
							<span>Build a new bot</span>
						</a>
						<a href="#" className="flex items-center gap-1.5 hover:text-white group">
							<span className="w-5 h-5 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary/80 transition-colors">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</span>
							<span>Get your API key</span>
						</a>
						<a href="#" className="flex items-center gap-1.5 hover:text-white group">
							<span className="w-5 h-5 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary/80 transition-colors">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</span>
							<span>Developer Docs</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
