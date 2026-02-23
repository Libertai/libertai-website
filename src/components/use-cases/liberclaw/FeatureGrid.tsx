import type { LucideIcon } from "lucide-react";

interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
}

interface FeatureGridProps {
	label: string;
	title: string;
	subtitle?: string;
	features: Feature[];
	columns?: 2 | 3;
}

export function FeatureGrid({
	label,
	title,
	subtitle,
	features,
	columns = 3,
}: FeatureGridProps) {
	const gridCols = columns === 2
		? "grid-cols-1 md:grid-cols-2"
		: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16">
					<div className="text-sm mb-4">[ {label} ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg mt-6 max-w-3xl font-satoshi">{subtitle}</p>
					)}
				</div>

				{/* Feature blocks */}
				<div className={`grid ${gridCols} gap-8 lg:gap-12`}>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<div key={feature.title} className="space-y-4">
								<div className="flex items-center space-x-3">
									<Icon className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
									<h3 className="text-xl font-bold text-white">{feature.title}</h3>
								</div>
								<p className="text-sm font-satoshi">{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
