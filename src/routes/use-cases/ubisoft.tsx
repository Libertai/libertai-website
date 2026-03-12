import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { UbisoftHero } from "@/components/use-cases/ubisoft/UbisoftHero.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";
import { UbisoftGovernance } from "@/components/use-cases/ubisoft/UbisoftGovernance.tsx";
import { UbisoftPlayer } from "@/components/use-cases/ubisoft/UbisoftPlayer.tsx";
import { UbisoftDedSec } from "@/components/use-cases/ubisoft/UbisoftDedSec.tsx";

export const Route = createFileRoute("/use-cases/ubisoft")({
	component: UbisoftUseCase,
});

function UbisoftUseCase() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Ubisoft — Captain Laserhawk"
				description="How Ubisoft uses LibertAI for decentralized AI governance and player-driven narratives in Captain Laserhawk: The G.A.M.E."
				path="/use-cases/ubisoft"
			/>
			<UbisoftHero />
			<UbisoftGovernance />
			<UbisoftPlayer />
			<UbisoftDedSec />
			<FooterSection />
		</main>
	);
}
