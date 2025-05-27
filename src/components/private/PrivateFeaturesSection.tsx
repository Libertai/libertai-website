import backgroundLeft from "@/assets/background-left.png";
import backgroundLeftMobile from "@/assets/background-left-mobile.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { privateFeatures } from "@/data/private-features.ts";
import { PrivateFeatureContent } from "./PrivateFeatureContent.tsx";

gsap.registerPlugin(ScrollTrigger);

export function PrivateFeaturesSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

	useEffect(() => {
		if (!sectionRef.current || !contentRef.current || !imageRef.current) return;

		const section = sectionRef.current;
		const content = contentRef.current;
		const image = imageRef.current;
		const totalFeatures = privateFeatures.length;

		// Create a scroll trigger that pins the section and animates based on scroll
		const scrollTrigger = ScrollTrigger.create({
			trigger: section,
			start: "top top",
			end: `+=${window.innerHeight * totalFeatures}`,
			pin: true,
			pinSpacing: true,
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				const segmentSize = 1 / totalFeatures;

				// Calculate current feature index, ensuring we don't go beyond the last one
				let currentIndex;
				if (progress >= 1) {
					// At the very end, show the last section
					currentIndex = totalFeatures - 1;
				} else {
					currentIndex = Math.floor(progress / segmentSize);
					currentIndex = Math.min(currentIndex, totalFeatures - 1);
				}

				const segmentProgress = progress >= 1 ? 1 : (progress % segmentSize) / segmentSize;

				// Update the active feature index for content
				setCurrentFeatureIndex(currentIndex);

				// Calculate opacity and position based on scroll progress within segment
				let opacity = 1;
				let yOffset = 0;

				// Don't fade out the last section
				if (segmentProgress > 0.7 && currentIndex < totalFeatures - 1) {
					// Start fading out current content (except for last section)
					const fadeProgress = (segmentProgress - 0.7) / 0.3;
					opacity = 1 - fadeProgress;
					yOffset = -30 * fadeProgress;
				} else if (segmentProgress < 0.3 && currentIndex > 0) {
					// Fade in from previous transition
					const fadeProgress = segmentProgress / 0.3;
					opacity = fadeProgress;
					yOffset = 30 * (1 - fadeProgress);
				} else if (currentIndex === totalFeatures - 1) {
					// Keep last section fully visible
					opacity = 1;
					yOffset = 0;
				}

				// Apply the animation directly via GSAP
				gsap.set([content, image], {
					opacity: opacity,
					y: yOffset,
					duration: 0.1,
				});
			},
		});

		return () => {
			scrollTrigger.kill();
		};
	}, []);

	const currentFeature = privateFeatures[currentFeatureIndex];

	return (
		<section ref={sectionRef} className="relative w-full min-h-screen bg-background overflow-hidden">
			{/* Background images */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundLeft} alt="Background" className="h-full w-full object-cover opacity-90 hidden md:block" />
				<img src={backgroundLeftMobile} alt="Background" className="h-full w-full object-cover opacity-90 md:hidden" />
			</div>

			{/* Content container */}
			<div className="relative h-screen flex items-center z-10">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
					<PrivateFeatureContent
						ref={contentRef}
						feature={currentFeature}
						imageRef={imageRef}
						isMobile={false}
						progressIndicators={privateFeatures.map((feature, index) => (
							<div
								key={feature.title}
								className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${
									index === currentFeatureIndex ? "bg-purple-500 scale-110" : "bg-white/20 scale-100"
								}`}
							/>
						))}
					/>
				</div>
			</div>
		</section>
	);
}
