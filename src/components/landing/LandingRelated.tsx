import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { landingPages } from "@/data/landing-pages.ts";

interface LandingRelatedProps {
	/** Slug of the current page (excluded from the list) */
	current: string;
	/** Slugs to display; defaults to the first three other landing pages */
	related?: string[];
	label?: string;
	title?: string;
}

export function LandingRelated({
	current,
	related,
	label = "Keep Reading",
	title = "Related Pages",
}: LandingRelatedProps) {
	const pages = related
		? landingPages.filter((page) => related.includes(page.slug))
		: landingPages.filter((page) => page.slug !== current).slice(0, 3);

	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ {label} ]</div>
					<h2>{title}</h2>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
					{pages.map((page) => {
						const Icon = page.icon;
						return (
							<Link
								key={page.slug}
								to={page.path}
								className="group block space-y-4 p-6 rounded-2xl border border-foreground/20 hover:border-white transition-colors"
							>
								<div className="flex items-center gap-3">
									<Icon className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
									<h3 className="text-2xl font-satoshi">{page.cardTitle}</h3>
								</div>
								<p className="text-sm leading-relaxed">{page.cardDescription}</p>
								<span className="inline-flex items-center gap-2 text-sm text-[#EA7AF4] group-hover:gap-3 transition-all">
									Learn more <ArrowRight className="w-4 h-4" />
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
