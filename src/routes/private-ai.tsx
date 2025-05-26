import { createFileRoute } from "@tanstack/react-router";
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
