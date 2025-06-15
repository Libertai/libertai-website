import backgroundLeft from "@/assets/background-left.webp";
import backgroundLeftMobile from "@/assets/background-left-mobile.png";
import { privateFeatures } from "@/data/private-features.ts";
import { PrivateFeatureContent } from "./PrivateFeatureContent.tsx";

export function PrivateFeatureMobileSections() {
	return (
		<>
			{privateFeatures.map((feature) => (
				<section
					key={feature.title}
					className="relative w-full min-h-screen flex items-center bg-background overflow-hidden"
				>
					{/* Background images */}
					<div className="absolute inset-0 z-0">
						<img
							src={backgroundLeft}
							alt="Background"
							className="h-full w-full object-cover opacity-90 hidden md:block"
						/>
						<img
							src={backgroundLeftMobile}
							alt="Background"
							className="h-full w-full object-cover opacity-90 md:hidden"
						/>
					</div>

					{/* Content container */}
					<div className="relative flex items-center z-10 min-h-screen py-16">
						<div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
							<PrivateFeatureContent feature={feature} isMobile={true} />
						</div>
					</div>
				</section>
			))}
		</>
	);
}
