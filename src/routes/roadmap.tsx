import { createFileRoute } from "@tanstack/react-router";
import { RoadmapHero } from "@/components/roadmap/RoadmapHero";
import { RoadmapFeatures } from "@/components/roadmap/RoadmapFeatures";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/roadmap")({
	component: RoadmapPage,
});

function RoadmapPage() {
	return (
		<div className="min-h-screen">
			<RoadmapHero />
			<RoadmapFeatures />
			<FooterSection />
		</div>
	);
}
