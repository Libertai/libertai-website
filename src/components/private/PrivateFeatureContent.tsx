import { ExternalLink, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { forwardRef, type ReactNode, type RefObject } from "react";

interface PrivateFeature {
	badge: string;
	title: string;
	feature: {
		icon: LucideIcon;
		title: string;
		description: string;
	};
	button: {
		text: string;
		href?: string;
		comingSoon?: boolean;
	};
	image: {
		src: string;
		alt: string;
	};
}

interface PrivateFeatureContentProps {
	feature: PrivateFeature;
	imageRef?: RefObject<HTMLImageElement | null>;
	isMobile?: boolean;
	progressIndicators?: ReactNode;
}

export const PrivateFeatureContent = forwardRef<HTMLDivElement, PrivateFeatureContentProps>(
	({ feature, imageRef, isMobile = false, progressIndicators }, ref) => {
		return (
			<div
				ref={ref}
				className={`grid grid-cols-1 gap-8 ${isMobile ? "py-12 md:py-16" : "lg:grid-cols-2 lg:gap-12 items-center h-full"}`}
			>
				{/* Text content */}
				<div className={`space-y-6 md:space-y-8 ${isMobile ? "" : "lg:order-1"}`}>
					{/* Badge */}
					<div className="inline-flex items-center space-x-2 text-sm">
						<span>{feature.badge}</span>
					</div>

					{/* Heading */}
					<h2 className="font-bold leading-tight text-white text-4xl md:text-5xl lg:text-6xl">{feature.title}</h2>

					{/* Feature item */}
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<feature.feature.icon className="w-6 h-6 text-[#EA7AF4]" />
							<h3 className="text-white text-2xl font-medium font-satoshi">{feature.feature.title}</h3>
						</div>
						<p className="text-white/70 text-sm leading-relaxed">{feature.feature.description}</p>
					</div>

					{/* CTA Button */}
					<div className="pt-4">
						{feature.button.comingSoon ? (
							<div className="text-white/60 text-sm">[Coming Soon]</div>
						) : (
							<Button
								variant="outline"
								size="lg"
								className="text-white border-white/20 hover:bg-white/10"
								asChild={!!feature.button.href}
							>
								{feature.button.href ? (
									<a href={feature.button.href} target="_blank" rel="noopener noreferrer">
										<span>{feature.button.text}</span>
										<ExternalLink className="w-4 h-4" />
									</a>
								) : (
									<>
										<span>{feature.button.text}</span>
										<ExternalLink className="w-4 h-4" />
									</>
								)}
							</Button>
						)}
					</div>

					{/* Progress indicators - only show when not mobile */}
					{!isMobile && progressIndicators && <div className="flex space-x-2 pt-4">{progressIndicators}</div>}
				</div>

				{/* Image */}
				<div className={`flex justify-center ${isMobile ? "mt-8" : "lg:justify-end lg:order-2"}`}>
					<img
						ref={imageRef}
						src={feature.image.src}
						alt={feature.image.alt}
						className="w-80 h-auto max-w-full rounded-lg object-contain"
					/>
				</div>
			</div>
		);
	},
);
