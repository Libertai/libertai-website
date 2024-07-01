export const models: Array<{ name: string; description: string; subtitle: string; type: string }> = [
	{
		name: "Nous Hermes 2 Pro",
		subtitle: "Llama 3 8B",
		type: "fast",
		description:
			"Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.",
	},
	{
		name: "NeuralBeagle",
		subtitle: "7B",
		type: "fast",
		description:
			"NeuralBeagle14-7B is a DPO fine-tune of mlabonne/Beagle14-7B using the argilla/distilabel-intel-orca-dpo-pairs preference dataset.",
	},
	{
		name: "Mixtral",
		subtitle: "8x7B MOE",
		type: "smart",
		description: "Mixtral 8x7B, a high-quality sparse mixture of experts model (SMoE) with open weights.",
	},
	{
		name: "Nous Hermes 2 ",
		subtitle: "34B",
		type: "smart",
		description:
			"Nous Hermes 2 Yi 34B was trained on 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape.",
	},
	{
		name: "Llama 3 Instruct",
		subtitle: "70B",
		type: "genius, slow",
		description:
			"Llama 3 instruction-tuned models are fine-tuned and optimized for dialogue/chat use cases and outperform many of the available open-source chat models on common benchmarks.",
	},
	{
		name: "DeepSeek Coder",
		subtitle: "6.7B",
		type: "developer",
		description:
			"Deepseek Coder is composed of a series of code language models, each trained from scratch on 2T tokens, with a composition of 87% code and 13% natural language in both English and Chinese.",
	},
];
