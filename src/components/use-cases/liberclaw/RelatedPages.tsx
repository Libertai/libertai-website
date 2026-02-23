import { Link } from "@tanstack/react-router";
import { Code, Bot, Search, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface RelatedPage {
	slug: string;
	title: string;
	description: string;
	icon: LucideIcon;
	path: string;
}

const allPages: RelatedPage[] = [
	{
		slug: "code-review",
		title: "AI Code Review Agent",
		description:
			"An agent that watches your GitHub repos, reviews pull requests automatically, and posts feedback with persistent codebase knowledge.",
		icon: Code,
		path: "/use-cases/liberclaw-code-review",
	},
	{
		slug: "personal-assistant",
		title: "AI Personal Assistant",
		description:
			"An always-on assistant that runs 24/7 on its own VM. Schedule tasks, get research summaries, and let it work while you sleep.",
		icon: Bot,
		path: "/use-cases/liberclaw-personal-assistant",
	},
	{
		slug: "research-agent",
		title: "AI Research Agent",
		description:
			"An autonomous agent that monitors the web, researches topics, and delivers summaries. Useful for competitor tracking, news digests, and regulatory monitoring.",
		icon: Search,
		path: "/use-cases/liberclaw-research-agent",
	},
];

interface RelatedPagesProps {
	current: "code-review" | "personal-assistant" | "research-agent";
}

export function RelatedPages({ current }: RelatedPagesProps) {
	const pages = allPages.filter((page) => page.slug !== current);

	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ More Use Cases ]</div>
					<h2>Other Agents You Can Deploy</h2>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
									<h3 className="text-2xl font-satoshi">{page.title}</h3>
								</div>
								<p className="text-sm leading-relaxed">{page.description}</p>
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
