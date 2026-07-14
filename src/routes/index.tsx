import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { LightHome } from "@/components/home/LightHome.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<SEO
				title="Intelligence You Own"
				description="GLM-5.2 and the leading open models on one private, OpenAI-compatible endpoint. Nothing stored, nothing trained on your data — attested in hardware, powered by Aleph Cloud."
				path="/"
			/>
			<LightHome />
		</>
	);
}
