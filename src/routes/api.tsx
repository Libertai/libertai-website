import { createFileRoute } from "@tanstack/react-router";
import { APIHero } from "@/components/api/APIHero.tsx";
import { APIGetStarted } from "@/components/api/APIGetStarted.tsx";
import { APIModelsAndPricing } from "@/components/api/APIModelsAndPricing.tsx";
import { APISchema } from "@/components/api/APISchema.tsx";
import { APIUseCases } from "@/components/api/APIUseCases.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/api")({
	component: API,
});

function API() {
	return (
		<main className="flex flex-col min-h-screen">
			<APIHero />
			<APIGetStarted />
			<APIModelsAndPricing />
			<APISchema />
			<APIUseCases />
			<FooterSection />
		</main>
	);
}
