import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";
import { SearchHero } from "@/components/search/SearchHero.tsx";
import { SearchFeatures } from "@/components/search/SearchFeatures.tsx";
import { SearchPricing } from "@/components/search/SearchPricing.tsx";
import { SearchGetStarted } from "@/components/search/SearchGetStarted.tsx";

export const Route = createFileRoute("/search")({
	component: SearchPage,
});

function SearchPage() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Private Web Search API"
				description="Privacy-preserving web search API for AI agents. Multi-engine consensus results from Google, Bing, and DuckDuckGo, priced from $2 per 1,000 queries. No profiling, no stored history."
				path="/search"
			/>
			<SearchHero />
			<SearchFeatures />
			<SearchPricing />
			<SearchGetStarted />
			<FooterSection />
		</main>
	);
}
