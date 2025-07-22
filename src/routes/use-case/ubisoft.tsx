import { createFileRoute } from "@tanstack/react-router";
import { UbisoftHero } from "@/components/use-case/ubisoft/UbisoftHero.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";
import { UbisoftGovernance } from "@/components/use-case/ubisoft/UbisoftGovernance.tsx";
import { UbisoftPlayer } from "@/components/use-case/ubisoft/UbisoftPlayer.tsx";
import { UbisoftDedSec } from "@/components/use-case/ubisoft/UbisoftDedSec.tsx";

export const Route = createFileRoute("/use-case/ubisoft")({
	component: UbisoftUseCase,
});

function UbisoftUseCase() {
	return (
		<main className="flex flex-col min-h-screen">
			<UbisoftHero />
			<UbisoftGovernance />
			<UbisoftPlayer />
			<UbisoftDedSec />
			<FooterSection />
		</main>
	);
}
