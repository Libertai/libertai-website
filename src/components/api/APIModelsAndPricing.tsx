import backgroundImage from "@/assets/background-left.png";
import backgroundImageMobile from "@/assets/background-left-mobile.png";
import { Brain, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const modelsData = [
	{
		name: "Hermes 3",
		description:
			"General-purpose models that handle most workloads. Your AI assistant, code assistant, or creative tools can all thrive with this data.",
		capabilities: "💬 ➔ 💬",
		inputTokens: "$0.15",
		outputTokens: "$0.60",
		badge: null,
	},
];

export function APIModelsAndPricing() {
	return (
		<section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="mb-12 text-center md:text-left">
						<div className="inline-flex items-center space-x-2 text-sm mb-4">
							<span className="text-white/60">[ Open for business ]</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Models and Pricing</h2>
					</div>

					{/* Desktop Table */}
					<div className="hidden md:block">
						<table className="w-full">
							<thead>
								<tr className="border-b border-white/20">
									<th className="text-left py-4 text-sm font-satoshi">Model</th>
									<th className="text-center py-4 text-sm font-satoshi">Capabilities</th>
									<th className="text-center py-4 text-sm font-satoshi">Input (per 1M tokens)</th>
									<th className="text-center py-4 text-sm font-satoshi">Output (per 1M tokens)</th>
								</tr>
							</thead>
							<tbody>
								{modelsData.map((model, index) => (
									<tr key={model.name} className={index !== modelsData.length - 1 ? "border-b border-white/10" : ""}>
										<td className="py-6">
											<div className="flex items-center gap-3">
												<div>
													<div className="flex items-center gap-2">
														<Brain className="w-6 h-6 text-[#EA7AF4]" />
														<h3 className="text-white text-2xl">{model.name}</h3>
													</div>
													<p className="text-sm font-satoshi mt-1 max-w-md">{model.description}</p>
												</div>
											</div>
										</td>
										<td className="py-6 text-center text-2xl text-white">{model.capabilities}</td>
										<td className="py-6 text-center text-2xl text-white">{model.inputTokens}</td>
										<td className="py-6 text-center text-2xl text-white">{model.outputTokens}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Mobile Cards */}
					<div className="md:hidden space-y-6">
						{modelsData.map((model) => (
							<div key={model.name} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
								<div className="space-y-4">
									<div className="flex items-start justify-between">
										<div className="flex items-center gap-3">
											<Brain className="w-6 h-6 text-[#EA7AF4]" />
											<div>
												<h3 className="text-white">{model.name}</h3>
											</div>
										</div>
									</div>
									<p className="text-sm font-satoshi">{model.description}</p>
									<div className="grid grid-cols-2 gap-4 text-sm">
										<div>
											<span>Capabilities:</span>
											<div className="text-white">{model.capabilities}</div>
										</div>
										<div>
											<span>Input Tokens:</span>
											<div className="text-white">{model.inputTokens}</div>
										</div>
										<div>
											<span>Output Tokens:</span>
											<div className="text-white">{model.outputTokens}</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Show all models button */}
					<div className="mt-8 text-center md:text-left">
						<a href="https://docs.libertai.io/apis/text/#available-models" target="_blank">
							<Button variant="outline" size="pill" className="font-satoshi text-white">
								<span>Show all models</span>
								<ExternalLink className="ml-2 h-4 w-4" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
