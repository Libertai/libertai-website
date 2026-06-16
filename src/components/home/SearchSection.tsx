import { Button } from "@/components/ui/button.tsx";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SearchSection() {
	return (
		<section className="w-full bg-background py-20 lg:py-32 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat flex items-center ltai-bg-left">
			<div className="container mx-auto">
				<div className="space-y-9 max-w-2xl">
					<div className="text-sm">[ Search without surveillance ]</div>
					<h2>Web search for AI agents</h2>
					<p className="text-lg font-satoshi">
						One API call queries multiple engines in parallel and returns a single consensus-ranked result list, private
						by architecture and priced from $2 per 1,000 queries. Agents can pay per query with x402, no account needed.
					</p>

					<div className="flex gap-4 pt-4">
						<Link to="/search">
							<Button variant="outline" size="lg" className="text-white">
								Explore the Search API
								<ArrowRight className="w-4 h-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
