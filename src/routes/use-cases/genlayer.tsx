import { createFileRoute } from "@tanstack/react-router";
import { FooterSection } from "@/components/FooterSection.tsx";
import { GenlayerHero } from "@/components/use-cases/genlayer/GenlayerHero.tsx";
import { GenlayerFeatures } from "@/components/use-cases/genlayer/GenlayerFeatures.tsx";
import { GenlayerTestimonials } from "@/components/use-cases/genlayer/GenlayerTestimonials.tsx";

export const Route = createFileRoute("/use-cases/genlayer")({
	component: GenlayerUseCase,
});

function GenlayerUseCase() {
	return (
		<main className="flex flex-col min-h-screen">
			<GenlayerHero />
			<GenlayerFeatures />
			<GenlayerTestimonials />
			<FooterSection />
		</main>
	);
}
