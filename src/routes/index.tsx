import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection.tsx";
import { ServicesSection } from "@/components/home/ServicesSection.tsx";
import { AlephSection } from "@/components/home/AlephSection.tsx";
import { FeaturesSection } from "@/components/home/FeaturesSection.tsx";
import { APISection } from "@/components/home/APISection.tsx";
import { ModelsSection } from "@/components/home/ModelsSection.tsx";
import { FAQSection } from "@/components/home/FAQSection.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main className="flex flex-col min-h-screen">
			<HeroSection />
			<ServicesSection />
			<AlephSection />
			<FeaturesSection />
			<APISection />
			<ModelsSection />
			<FAQSection />
		</main>
	);
}
