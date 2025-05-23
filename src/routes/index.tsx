import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection.tsx";
import { ServicesSection } from "@/components/home/ServicesSection.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main className="flex flex-col min-h-screen">
			<HeroSection />
			<ServicesSection />
		</main>
	);
}
