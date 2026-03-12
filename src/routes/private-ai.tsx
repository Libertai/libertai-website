import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { PrivateAIHero } from "@/components/private/PrivateAIHero.tsx";
import { PrivateFeaturesSection } from "@/components/private/PrivateFeaturesSection.tsx";
import { PrivateFeatureMobileSections } from "@/components/private/PrivateFeatureMobileSections.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/private-ai")({
	component: PrivateAI,
});

function PrivateAI() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Private AI"
				description="AI that respects your privacy. Chat, create characters, and build agents with open-source models on decentralized infrastructure. No data collection, no tracking."
				path="/private-ai"
			/>
			<PrivateAIHero />
			{/* Desktop: Pinned scroll section */}
			<div className="hidden md:block">
				<PrivateFeaturesSection />
			</div>
			{/* Mobile: Regular sections */}
			<div className="md:hidden">
				<PrivateFeatureMobileSections />
			</div>
			<FooterSection />
		</main>
	);
}
