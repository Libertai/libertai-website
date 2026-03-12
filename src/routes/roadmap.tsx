import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { RoadmapHero } from "@/components/roadmap/RoadmapHero";
import { RoadmapFeatures } from "@/components/roadmap/RoadmapFeatures";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/roadmap")({
	component: RoadmapPage,
});

function RoadmapPage() {
	return (
		<div className="min-h-screen">
			<SEO
				title="Roadmap"
				description="LibertAI product roadmap — upcoming features for private AI chat, confidential inference API, decentralized AI agents, and the LTAI token ecosystem."
				path="/roadmap"
			/>
			<RoadmapHero />
			<RoadmapFeatures />
			<FooterSection />
		</div>
	);
}
