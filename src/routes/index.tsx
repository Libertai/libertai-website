import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { SovereignHero } from "@/components/sovereign/SovereignHero.tsx";
import { StatusStrip } from "@/components/sovereign/StatusStrip.tsx";
import { PrivacySection } from "@/components/sovereign/PrivacySection.tsx";
import { CreditsSection } from "@/components/sovereign/CreditsSection.tsx";
import { ModelsShowcase } from "@/components/sovereign/ModelsShowcase.tsx";
import { ComparisonSection } from "@/components/sovereign/ComparisonSection.tsx";
import { MigrationSection } from "@/components/sovereign/MigrationSection.tsx";
import { StackSection } from "@/components/sovereign/StackSection.tsx";
import { FinalCTA } from "@/components/sovereign/FinalCTA.tsx";
import { SovereignFooter } from "@/components/sovereign/SovereignFooter.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Intelligence You Own"
				description="GLM-5.2 and the leading open models on one private, OpenAI-compatible endpoint. Nothing stored, nothing trained on your data — attested in hardware, powered by Aleph Cloud."
				path="/"
			/>
			<SovereignHero />
			<StatusStrip />
			<PrivacySection />
			<CreditsSection />
			<ModelsShowcase />
			<ComparisonSection />
			<MigrationSection />
			<StackSection />
			<FinalCTA />
			<SovereignFooter />
		</main>
	);
}
