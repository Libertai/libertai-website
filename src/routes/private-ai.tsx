import { createFileRoute } from "@tanstack/react-router";
import { PrivateAIHero } from "@/components/private/PrivateAIHero.tsx";

export const Route = createFileRoute("/private-ai")({
	component: PrivateAI,
});

function PrivateAI() {
	return (
		<main className="flex flex-col min-h-screen">
			<PrivateAIHero />
		</main>
	);
}
