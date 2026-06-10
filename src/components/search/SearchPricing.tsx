import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const ALEPH_URL =
	"https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING";

interface Model {
	id: string;
	name: string;
	capabilities: {
		search?: boolean;
	};
	pricing: {
		search?: number;
	};
}

interface AlephResponse {
	data: {
		LTAI_PRICING: {
			models: Model[];
		};
	};
}

export function SearchPricing() {
	const [searchModels, setSearchModels] = useState<Model[]>([]);

	useEffect(() => {
		fetch(ALEPH_URL)
			.then((res) => res.json())
			.then((data: AlephResponse) => {
				const search = data.data.LTAI_PRICING.models.filter((m) => m.capabilities.search && m.pricing.search);
				setSearchModels(search);
			})
			.catch(() => {});
	}, []);

	if (searchModels.length === 0) return null;

	return (
		<section className="relative w-full py-20 lg:py-32 bg-background overflow-hidden">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
				{/* Header */}
				<div className="mb-12 max-w-3xl">
					<div className="text-sm mb-4">[ Simple per-query pricing ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">Pricing</h2>
					<p className="text-lg mt-6 font-satoshi">
						Billed per query and per engine, on the same credits as the inference API. You choose which engines to
						query, and only engines that return results are charged.
					</p>
				</div>

				{/* Engine cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
					{searchModels.map((model) => (
						<div key={model.id} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Search className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
									<div>
										<h3 className="text-white text-xl">{model.name}</h3>
										<p className="text-xs text-white/60">{model.id}</p>
									</div>
								</div>
								<div className="font-satoshi">
									<div className="text-3xl text-white">${model.pricing.search!.toFixed(3)}</div>
									<div className="text-sm text-white/60 mt-1">
										per query (${(model.pricing.search! * 1000).toFixed(0)} per 1,000)
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<p className="text-sm font-satoshi text-white/60 mt-8 max-w-3xl">
					A full consensus query across all three engines combines their per-engine prices. Page fetches and x402
					per-request payments are documented in the developer docs.
				</p>
			</div>
		</section>
	);
}
