import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col min-h-screen">
				<HeroSection />
			</main>
		</>
	);
}
