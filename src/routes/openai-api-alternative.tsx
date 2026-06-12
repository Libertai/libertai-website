import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";
import { LandingHero } from "@/components/landing/LandingHero.tsx";
import { HowItWorks } from "@/components/landing/HowItWorks.tsx";
import { FeatureGrid } from "@/components/landing/FeatureGrid.tsx";
import { ComparisonTable } from "@/components/landing/ComparisonTable.tsx";
import { FAQSection } from "@/components/landing/FAQSection.tsx";
import { CTASection } from "@/components/landing/CTASection.tsx";
import { LandingRelated } from "@/components/landing/LandingRelated.tsx";
import { Plug, EyeOff, Cpu, ShieldCheck, Network, CreditCard } from "lucide-react";

export const Route = createFileRoute("/openai-api-alternative")({
	component: OpenAIApiAlternative,
});

const steps = [
	{
		number: 1,
		title: "Create an API Key",
		description:
			"Sign in at console.libertai.io and generate an API key. Top up with crypto (ETH, USDC) or a credit card. Holding the LTAI token gets you a 20% discount on usage.",
	},
	{
		number: 2,
		title: "Change the Base URL",
		description:
			"Point your existing OpenAI SDK at LibertAI. Set base_url to https://api.libertai.io/v1 and swap in your new key. Nothing else in your code changes — the same works for the JavaScript SDK and frameworks like LangChain.",
		code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.libertai.io/v1",
    api_key="YOUR_LIBERTAI_KEY",
)

response = client.chat.completions.create(
    model="qwen3.6-35b-a3b",
    messages=[{"role": "user", "content": "Hello"}],
)`,
	},
	{
		number: 3,
		title: "Pick a Model and Ship",
		description:
			"Choose an open-weight model that fits your workload — long-context reasoning, vision, tool use, or fast inference. The API reference at docs.libertai.io/apis/text/ lists every model and parameter. Deploy with the same request shape you already use.",
	},
];

const features = [
	{
		icon: Plug,
		title: "Drop-In OpenAI Compatibility",
		description:
			"The API speaks the OpenAI protocol. Change two lines — base_url and api_key — in any OpenAI SDK or framework, and your existing chat, completion, and embedding calls keep working unchanged.",
	},
	{
		icon: EyeOff,
		title: "No Logging, No Training",
		description:
			"Your prompts are not logged and are never used to train models. There is no retention by default and no hidden dataset built from your API traffic. What you send stays yours.",
	},
	{
		icon: Cpu,
		title: "Open-Weight Models",
		description:
			"Run current open models such as Qwen3.6-35B-A3B, Gemma 4 31B with a 262K context window, DeepSeek V4 Flash, GLM-4.7, and Qwen3 Coder. Plus image generation, embeddings, text-to-speech, and a private web search API.",
	},
	{
		icon: ShieldCheck,
		title: "Verifiable Confidentiality",
		description:
			"TEE-served models, such as Hermes 3 8B, run inside Trusted Execution Environments. That makes confidentiality something you can verify cryptographically, not just a line in a privacy policy.",
	},
	{
		icon: Network,
		title: "Decentralized Infrastructure",
		description:
			"Inference runs on Aleph Cloud's decentralized network instead of a single provider's data centers. No single company controls the pipeline, and there is no vendor lock-in. All platform code is open source on GitHub.",
	},
	{
		icon: CreditCard,
		title: "Transparent Pay-Per-Token Pricing",
		description:
			"Pay-as-you-go by the token, with no seats, minimums, or contracts. Settle in crypto (ETH, USDC) or with a credit or debit card. The LTAI token gives a 20% discount on what you spend.",
	},
];

const comparisonHeaders = ["LibertAI", "OpenAI", "Anthropic", "Self-hosted (vLLM)"];
const comparisonRows = [
	{
		feature: "Prompt logging",
		values: ["No", "30-day retention by default", "Retention policies apply", "No"] as const,
	},
	{
		feature: "Trains on API data by default",
		values: ["no", "no", "no", "no"] as const,
	},
	{
		feature: "Open-weight models",
		values: ["yes", "no", "no", "yes"] as const,
	},
	{
		feature: "Verifiable privacy (TEE)",
		values: ["yes", "no", "no", "no"] as const,
	},
	{
		feature: "Decentralized infrastructure",
		values: ["yes", "no", "no", "no"] as const,
	},
	{
		feature: "Crypto payments",
		values: ["yes", "no", "no", "N/A"] as const,
	},
	{
		feature: "Run-it-yourself option",
		values: ["yes", "no", "no", "Yes (you operate it)"] as const,
	},
];

const faqs = [
	{
		id: 1,
		question: "Is there an OpenAI-compatible API with no logging?",
		answer:
			"Yes. LibertAI exposes an OpenAI-compatible inference API at https://api.libertai.io/v1 that does not log your prompts and never trains on your data. It runs open-source models on Aleph Cloud's decentralized infrastructure, so you get the same request shape your code already uses without the data retention.",
	},
	{
		id: 2,
		question: "How do I switch from the OpenAI API?",
		answer:
			"Because the API is OpenAI-compatible, switching is two lines of code. In any OpenAI SDK (Python or JavaScript) or framework like LangChain, set base_url to https://api.libertai.io/v1 and swap in a key from console.libertai.io. Your existing chat, completion, and embedding calls keep working with no other changes.",
	},
	{
		id: 3,
		question: "Which open-source models can replace GPT-4 class models?",
		answer:
			"LibertAI serves open-weight models including Qwen3.6-35B-A3B and Qwen3.6-27B for long-context, tool use, vision, and reasoning, Gemma 4 31B with a 262K context window and multimodal support, DeepSeek V4 Flash for fast reasoning, GLM-4.7, Qwen3 Coder, and Qwen3.5 122B. There are also image generation, embeddings, text-to-speech, and a private web search API.",
	},
	{
		id: 4,
		question: "Can I pay for an AI API with crypto?",
		answer:
			"Yes. You can fund your LibertAI account with crypto such as ETH and USDC, or with a credit or debit card. Pricing is pay-per-token, pay-as-you-go, and holding the LTAI token gives you a 20% discount on usage.",
	},
	{
		id: 5,
		question: "What makes inference confidential?",
		answer:
			"TEE-served models, like Hermes 3 8B, run inside Trusted Execution Environments. A TEE isolates the computation so the host cannot read what is being processed, which makes the confidentiality verifiable rather than a promise. Combined with no logging and no training on your prompts, your inference stays private.",
	},
];

function OpenAIApiAlternative() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="OpenAI API Alternative"
				description="An OpenAI API alternative with an OpenAI-compatible endpoint, open-weight models, and no logging. Switch your base URL, keep your code, and pay per token."
				path="/openai-api-alternative"
			/>
			<LandingHero
				label="Inference API"
				title="An OpenAI API Alternative That Never Logs Your Prompts"
				description="LibertAI is an OpenAI-compatible inference API: change your base URL and key, and your existing code keeps working. It runs open-weight models on Aleph Cloud's decentralized infrastructure, with no data logging and no training on your prompts. Pay per token, with crypto or card."
				ctaText="Get an API Key"
				ctaLink="https://console.libertai.io"
			/>
			<HowItWorks label="Migration" title="Switch in Two Lines of Code" steps={steps} />
			<FeatureGrid label="Why LibertAI" title="A Private, Open Inference API" features={features} columns={3} />
			<ComparisonTable
				title="How LibertAI Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="To be fair: OpenAI and Anthropic ship excellent frontier models and mature compliance programs, and neither trains on your API data by default. The trade-off here is trust-based privacy versus verifiable privacy — LibertAI backs confidentiality with Trusted Execution Environments rather than a policy you have to take on faith — plus open-weight models and no vendor lock-in. If you have the GPUs, self-hosting vLLM is the maximum-control option; LibertAI gives you most of that openness without operating the infrastructure yourself."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Start with an OpenAI-Compatible Key"
				subtitle="Pay-as-you-go by the token. No seats, no contracts, no data logging."
				appLink="https://console.libertai.io"
				appText="Get an API Key"
				githubLink="https://docs.libertai.io"
				githubText="Read the Docs"
			/>
			<LandingRelated
				current="openai-api-alternative"
				related={["confidential-ai", "decentralized-llm", "open-source-ai"]}
			/>
			<FooterSection />
		</main>
	);
}
