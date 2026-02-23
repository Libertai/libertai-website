import { ScrollHuman } from "@/components/ScrollHuman.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";

interface LiberClawHeroProps {
	label: string;
	title: string;
	description: string;
	ctaText?: string;
	ctaLink?: string;
}

export function LiberClawHero({
	label,
	title,
	description,
	ctaText = "Get Started Free",
	ctaLink = "https://app.liberclaw.ai",
}: LiberClawHeroProps) {
	const scrollToNext = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Subtle gradient background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-[#EA7AF4]/5 via-transparent to-[#EA7AF4]/3" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center min-h-screen pt-20 md:pt-16 pb-12">
				<div className="flex flex-col justify-center space-y-6 max-w-3xl">
					<div className="text-sm">[ {label} ]</div>

					<h1 className="font-bold leading-tight text-white text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>

					<p className="text-lg max-w-2xl font-satoshi">
						{description}
					</p>

					<div className="mt-6">
						<a href={ctaLink} target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								<span>{ctaText}</span>
								<ExternalLink />
							</Button>
						</a>
					</div>
				</div>
			</div>

			{/* Bottom scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<ScrollHuman onScroll={scrollToNext} />
			</div>
		</section>
	);
}
