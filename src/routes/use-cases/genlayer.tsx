import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
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
			<SEO
				title="GenLayer"
				description="How GenLayer uses LibertAI's confidential inference for intelligent smart contracts with decentralized, private AI processing."
				path="/use-cases/genlayer"
			/>
			<GenlayerHero />
			<GenlayerFeatures />
			<GenlayerTestimonials />
			<FooterSection />
		</main>
	);
}
