import { Bot, Code2, Cpu, Eye, Flame, Lock, MessageSquare, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface LandingPageMeta {
	slug: string;
	path: string;
	/** Short title used on cross-link cards */
	cardTitle: string;
	/** Short blurb used on cross-link cards */
	cardDescription: string;
	icon: LucideIcon;
}

export const landingPages: LandingPageMeta[] = [
	{
		slug: "private-chatgpt-alternative",
		path: "/private-chatgpt-alternative",
		cardTitle: "Private ChatGPT Alternative",
		cardDescription:
			"A free, encrypted AI chat with no account, no data logging, and no training on your conversations.",
		icon: MessageSquare,
	},
	{
		slug: "openai-api-alternative",
		path: "/openai-api-alternative",
		cardTitle: "OpenAI API Alternative",
		cardDescription:
			"Switch your base URL and keep your code. OpenAI-compatible inference with open models and no data logging.",
		icon: Code2,
	},
	{
		slug: "confidential-ai",
		path: "/confidential-ai",
		cardTitle: "Confidential AI",
		cardDescription:
			"How Trusted Execution Environments make AI privacy verifiable instead of a promise in a privacy policy.",
		icon: Lock,
	},
	{
		slug: "agents",
		path: "/agents",
		cardTitle: "Autonomous AI Agents",
		cardDescription:
			"Deploy always-on AI agents on dedicated VMs with persistent memory — no API keys, open source, ready in minutes.",
		icon: Bot,
	},
	{
		slug: "uncensored-ai",
		path: "/uncensored-ai",
		cardTitle: "Uncensored AI",
		cardDescription:
			"Open-weight models without corporate filter layers, surveillance, or silent model swaps. You decide how your AI behaves.",
		icon: Flame,
	},
	{
		slug: "ai-freedom",
		path: "/ai-freedom",
		cardTitle: "AI Freedom",
		cardDescription:
			"Why user-owned, decentralized AI matters: no lock-in, no surveillance, no single company deciding what you can ask.",
		icon: Eye,
	},
	{
		slug: "decentralized-llm",
		path: "/decentralized-llm",
		cardTitle: "Decentralized LLMs",
		cardDescription:
			"Large language models running on Aleph Cloud's decentralized network instead of a single company's data centers.",
		icon: Network,
	},
	{
		slug: "open-source-ai",
		path: "/open-source-ai",
		cardTitle: "Open-Source AI",
		cardDescription:
			"Open-weight models served on open-source infrastructure — auditable end to end, with no vendor lock-in.",
		icon: Cpu,
	},
];
