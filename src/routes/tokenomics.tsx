import { createFileRoute } from "@tanstack/react-router";
import { TokenomicsHero } from "@/components/tokenomics/TokenomicsHero";
import { TokenomicsDetails } from "@/components/tokenomics/TokenomicsDetails";
import { ContractAddresses } from "@/components/tokenomics/ContractAddresses";
import { FooterSection } from "@/components/FooterSection.tsx";

export const Route = createFileRoute("/tokenomics")({
	component: TokenomicsPage,
});

function TokenomicsPage() {
	return (
		<div className="min-h-screen">
			<TokenomicsHero />
			<TokenomicsDetails />
			<ContractAddresses />
			<FooterSection />
		</div>
	);
}