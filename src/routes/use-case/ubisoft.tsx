import { createFileRoute } from "@tanstack/react-router";
import { UbisoftHero } from "@/components/use-case/ubisoft/UbisoftHero.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/use-case/ubisoft")({
	component: UbisoftUseCase,
});

function UbisoftUseCase() {
	return (
		<main className="flex flex-col min-h-screen">
			<UbisoftHero />
			<FooterSection />
		</main>
	);
}
