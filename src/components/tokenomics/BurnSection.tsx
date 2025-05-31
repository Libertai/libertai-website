import burnImage from "@/assets/tokenomics/burn.png";

export function BurnSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src={burnImage}
					alt="Liberty's Flame background"
					className="absolute h-full w-full object-cover object-right"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-background from-15% to-transparent to-75%"></div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center min-h-screen">
				{/* Content - left aligned */}
				<div className="w-full md:w-1/2 space-y-6 md:space-y-8">
					{/* Section identifier */}
					<div className="text-sm">[ Deflationary ]</div>

					{/* Main heading */}
					<h2 className="font-bold leading-tight text-white text-4xl md:text-5xl">Liberty's Flame</h2>

					{/* Description */}
					<p className="text-lg max-w-2xl font-satoshi">
						We’ve introduced a burn mechanism where every API credit purchase burns 40% of $LTAI used, reducing token
						supply over time. Airdrop allocation has been reduced by 50%, with the remaining tokens being redirected to
						the Reserves pool that will fuel future incentives for ecosystem growth.
					</p>
				</div>
			</div>
		</section>
	);
}
