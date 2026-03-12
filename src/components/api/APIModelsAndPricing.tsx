import backgroundImage from "@/assets/background-left.png";
import backgroundImageMobile from "@/assets/background-left-mobile.png";
import { Brain, Eye, ExternalLink, Image, Lock, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { useEffect, useState } from "react";

const ALEPH_URL =
	"https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING";

interface TextCapabilities {
	context_window: number;
	function_calling: boolean;
	reasoning: boolean;
	tee?: boolean;
	vision: boolean;
}

interface Model {
	id: string;
	name: string;
	hf_id?: string;
	capabilities: {
		text?: TextCapabilities;
		image?: boolean;
		search?: boolean;
	};
	pricing: {
		text?: {
			price_per_million_input_tokens: number;
			price_per_million_output_tokens: number;
		};
		image?: number;
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

function CapabilityBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<span className="inline-flex items-center gap-1 cursor-help">{icon}</span>
			</TooltipTrigger>
			<TooltipContent>{label}</TooltipContent>
		</Tooltip>
	);
}

function TextModelCapabilities({ capabilities }: { capabilities: TextCapabilities }) {
	return (
		<div className="flex items-center justify-center gap-3">
			{capabilities.function_calling && (
				<CapabilityBadge icon={<Settings className="w-4 h-4 text-[#EA7AF4]" />} label="Function calling" />
			)}
			{capabilities.vision && <CapabilityBadge icon={<Eye className="w-4 h-4 text-[#EA7AF4]" />} label="Vision" />}
			{capabilities.reasoning && (
				<CapabilityBadge icon={<Sparkles className="w-4 h-4 text-[#EA7AF4]" />} label="Reasoning" />
			)}
			{capabilities.tee && (
				<CapabilityBadge icon={<Lock className="w-4 h-4 text-[#EA7AF4]" />} label="Trusted Execution Environment" />
			)}
		</div>
	);
}

export function APIModelsAndPricing() {
	const [textModels, setTextModels] = useState<Model[]>([]);
	const [imageModels, setImageModels] = useState<Model[]>([]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		fetch(ALEPH_URL)
			.then((res) => res.json())
			.then((data: AlephResponse) => {
				const models = data.data.LTAI_PRICING.models;
				const text = models.filter((m) => m.capabilities.text && m.pricing.text);
				const image = models.filter((m) => m.capabilities.image && m.pricing.image);
				if (text.length > 0 || image.length > 0) {
					setTextModels(text);
					setImageModels(image);
					setVisible(true);
				}
			})
			.catch(() => {});
	}, []);

	if (!visible) return null;

	return (
		<section className="relative w-full py-20 lg:py-40 md:py-32 bg-background overflow-hidden">
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

					{/* Text Models */}
					{textModels.length > 0 && (
						<>
							<h3 className="text-2xl font-bold text-white mb-6">Text Generation</h3>

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
										{textModels.map((model, index) => (
											<tr key={model.id} className={index !== textModels.length - 1 ? "border-b border-white/10" : ""}>
												<td className="py-6">
													<div className="flex items-center gap-3">
														<div>
															<div className="flex items-center gap-2">
																<Brain className="w-6 h-6 text-[#EA7AF4]" />
																<h3 className="text-white text-2xl">{model.name}</h3>
															</div>
															<p className="text-sm font-satoshi mt-1 max-w-md text-white/60">{model.id}</p>
														</div>
													</div>
												</td>
												<td className="py-6 text-center">
													{model.capabilities.text && <TextModelCapabilities capabilities={model.capabilities.text} />}
												</td>
												<td className="py-6 text-center text-2xl text-white">
													${model.pricing.text!.price_per_million_input_tokens.toFixed(2)}
												</td>
												<td className="py-6 text-center text-2xl text-white">
													${model.pricing.text!.price_per_million_output_tokens.toFixed(2)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							{/* Mobile Cards */}
							<div className="md:hidden space-y-6">
								{textModels.map((model) => (
									<div key={model.id} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
										<div className="space-y-4">
											<div className="flex items-center gap-3">
												<Brain className="w-6 h-6 text-[#EA7AF4]" />
												<div>
													<h3 className="text-white">{model.name}</h3>
													<p className="text-xs text-white/60">{model.id}</p>
												</div>
											</div>
											<div className="grid grid-cols-2 gap-4 text-sm">
												<div>
													<span>Capabilities:</span>
													<div className="text-white mt-1">
														{model.capabilities.text && (
															<TextModelCapabilities capabilities={model.capabilities.text} />
														)}
													</div>
												</div>
												<div>
													<span>Input Tokens:</span>
													<div className="text-white">
														${model.pricing.text!.price_per_million_input_tokens.toFixed(2)}
													</div>
												</div>
												<div>
													<span>Output Tokens:</span>
													<div className="text-white">
														${model.pricing.text!.price_per_million_output_tokens.toFixed(2)}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					)}

					{/* Image Models */}
					{imageModels.length > 0 && (
						<>
							<h3 className="text-2xl font-bold text-white mb-6 mt-16">Image Generation</h3>

							{/* Desktop Table */}
							<div className="hidden md:block">
								<table className="w-full">
									<thead>
										<tr className="border-b border-white/20">
											<th className="text-left py-4 text-sm font-satoshi">Model</th>
											<th className="text-center py-4 text-sm font-satoshi">Price per image</th>
										</tr>
									</thead>
									<tbody>
										{imageModels.map((model, index) => (
											<tr key={model.id} className={index !== imageModels.length - 1 ? "border-b border-white/10" : ""}>
												<td className="py-6">
													<div className="flex items-center gap-3">
														<div>
															<div className="flex items-center gap-2">
																<Image className="w-6 h-6 text-[#EA7AF4]" />
																<h3 className="text-white text-2xl">{model.name}</h3>
															</div>
															<p className="text-sm font-satoshi mt-1 max-w-md text-white/60">{model.id}</p>
														</div>
													</div>
												</td>
												<td className="py-6 text-center text-2xl text-white">${model.pricing.image!.toFixed(3)}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							{/* Mobile Cards */}
							<div className="md:hidden space-y-6">
								{imageModels.map((model) => (
									<div key={model.id} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
										<div className="space-y-4">
											<div className="flex items-center gap-3">
												<Image className="w-6 h-6 text-[#EA7AF4]" />
												<div>
													<h3 className="text-white">{model.name}</h3>
													<p className="text-xs text-white/60">{model.id}</p>
												</div>
											</div>
											<div className="text-sm">
												<span>Price per image:</span>
												<div className="text-white">${model.pricing.image!.toFixed(3)}</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					)}

					{/* Show all models button */}
					<div className="mt-8 text-center md:text-left">
						<a href="https://docs.libertai.io/apis/text/#available-models" target="_blank" rel="noopener noreferrer">
							<Button variant="glass" size="pill" className="font-satoshi text-white">
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
