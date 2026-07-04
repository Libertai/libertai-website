/**
 * Homepage display data.
 *
 * Pricing/throughput figures are ILLUSTRATIVE placeholders pending internal
 * confirmation (see docs/redesign/REDESIGN_PLAN.md §10). Live per-model
 * pricing is served on /api from the Aleph aggregate.
 */

export const LINKS = {
	console: "https://console.libertai.io",
	chat: "https://chat.libertai.io",
	docs: "https://docs.libertai.io",
	telegram: "https://t.me/libertai",
};

export const FLAGSHIP = {
	name: "GLM-5.2",
	tagline: "Frontier-class reasoning, coding and agent workflows",
	rows: [
		{ label: "Input · 1M tokens", value: "$0.60" },
		{ label: "Output · 1M tokens", value: "$2.20" },
		{ label: "Context window", value: "200K" },
		{ label: "Throughput", value: "~120 tok/s" },
	],
};

export const MODELS = [
	{ name: "Qwen3.5 122B", use: "Large-scale reasoning and long context", price: "$0.90 / $3.10" },
	{ name: "Qwen3.6-35B-A3B", use: "Daily work: chat, tools, vision", price: "$0.20 / $0.80" },
	{ name: "Gemma 4 31B", use: "Multimodal, 262K context, function calling", price: "$0.18 / $0.70" },
	{ name: "DeepSeek V4 Flash", use: "Fast reasoning and agent loops", price: "$0.14 / $0.55" },
	{ name: "Qwen3 Coder", use: "Code generation and review", price: "$0.25 / $1.00" },
	{ name: "Hermes 3 8B · TEE", use: "Maximum privacy, attested enclave", price: "$0.08 / $0.30" },
];

export const COMPARISON = [
	{ who: "LibertAI · GLM-5.2", price: "$2.20", width: 15, us: true },
	{ who: "OpenAI · flagship", price: "$10.00", width: 67, us: false },
	{ who: "Anthropic · flagship", price: "$15.00", width: 100, us: false },
];
