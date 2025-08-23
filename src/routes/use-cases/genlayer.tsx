import { createFileRoute } from "@tanstack/react-router";
import { FooterSection } from "@/components/FooterSection.tsx";
import { GenlayerHero } from "@/components/use-cases/genlayer/GenlayerHero.tsx";

export const Route = createFileRoute("/use-cases/genlayer")({
	component: GenlayerUseCase,
});

function GenlayerUseCase() {
	return (
		<main className="flex flex-col min-h-screen">
			<GenlayerHero />
			<FooterSection />
		</main>
	);
}
