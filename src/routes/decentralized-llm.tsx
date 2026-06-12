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
import { Network, Plug, ShieldCheck, Slash, Unlock, Wallet } from "lucide-react";

export const Route = createFileRoute("/decentralized-llm")({
	component: DecentralizedLLM,
});

const steps = [
	{
		number: 1,
		title: "Independent Operators Run the Models",
		description:
			"LibertAI serves open-weight models like Qwen3.6-35B-A3B, Gemma 4 31B, and DeepSeek V4 Flash. The compute behind them is not one company's data center. It is provided by independent node operators on Aleph Cloud, a decentralized cloud network that coordinates them rather than owning them.",
	},
	{
		number: 2,
		title: "Requests Hit a Standard Endpoint",
		description:
			"Your application calls an ordinary OpenAI-compatible endpoint at https://api.libertai.io/v1. The network schedules each request onto an available node that can serve the requested model. There is nothing exotic to integrate: it is the same request and response shape you already use.",
	},
	{
		number: 3,
		title: "Sensitive Workloads Run in TEEs",
		description:
			"On supported nodes, inference can run inside a Trusted Execution Environment, a hardware enclave that keeps memory encrypted from the host operator. Remote attestation lets you verify the exact code that handled your request before you trust it with data. Hermes 3 8B, for example, is served in a TEE.",
	},
	{
		number: 4,
		title: "Node Economics Keep Capacity Online",
		description:
			"Aleph Cloud's resource token economics reward operators for providing compute. Capacity stays available because many independent participants are incentivized to keep nodes running, not because a single central operator decides to keep the lights on. No logging, and no training on user data.",
	},
];

const features = [
	{
		icon: Network,
		title: "No Single Point of Failure",
		description:
			"Inference is spread across independent nodes on Aleph Cloud. There is no central server whose outage takes the whole service down. If one operator drops offline, the network schedules work elsewhere.",
	},
	{
		icon: ShieldCheck,
		title: "No Operator Who Can Read Your Data",
		description:
			"On supported nodes, workloads run inside Trusted Execution Environments where memory is encrypted from the host. Remote attestation lets you verify the code first. There is no logging and no training on what you send.",
	},
	{
		icon: Slash,
		title: "No Central Kill-Switch",
		description:
			"Because no single company owns the compute or controls the coordination, there is no one entity that can quietly switch the service off or filter what it will answer. Censorship resistance is a property of the architecture, not a policy.",
	},
	{
		icon: Plug,
		title: "Standard API, Nothing Exotic",
		description:
			"The interface is the OpenAI-compatible API at https://api.libertai.io/v1. Point your existing SDK or tools at the base URL and keep your code. Decentralization happens behind the endpoint; integration does not change.",
	},
	{
		icon: Unlock,
		title: "Open Models, No Lock-In",
		description:
			"Every served model is open-weight. The serving stack is open source at github.com/libertai. If you ever want to leave, you can self-host the same models tomorrow on your own hardware. There is nothing proprietary to be trapped by.",
	},
	{
		icon: Wallet,
		title: "Transparent Pay-Per-Token",
		description:
			"Billing is pay-per-token through the console at console.libertai.io. Pay with crypto (ETH or USDC) or with a card. Holding the LTAI token gives a 20% discount. No seat licenses and no opaque enterprise contracts.",
	},
];

const comparisonHeaders = ["Decentralized (LibertAI)", "Centralized cloud AI", "Self-hosted"];
const comparisonRows = [
	{ feature: "Single point of failure", values: ["no", "yes", "Yes (your box)"] as const },
	{ feature: "Operator can access prompts", values: ["No (TEE option)", "yes", "no"] as const },
	{ feature: "Censorship resistance", values: ["yes", "no", "yes"] as const },
	{ feature: "Requires your own GPUs", values: ["no", "no", "yes"] as const },
	{ feature: "OpenAI-compatible API", values: ["yes", "yes", "Depends on stack"] as const },
	{ feature: "Who controls uptime", values: ["Node network", "One company", "You"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is a decentralized LLM?",
		answer:
			"A decentralized LLM is a large language model whose inference runs across a network of independent compute providers rather than inside a single company's data center. With LibertAI, open-weight models such as Qwen3.6-35B-A3B, Gemma 4 31B, and DeepSeek V4 Flash are served on Aleph Cloud, a decentralized cloud network. No single operator owns the compute or can unilaterally read data or shut the service off.",
	},
	{
		id: 2,
		question: "How does decentralized AI inference work?",
		answer:
			"You send a request to a standard OpenAI-compatible endpoint at https://api.libertai.io/v1. The Aleph Cloud network schedules that request onto an available node operated by an independent participant, the model runs the inference there, and the response comes back. Sensitive workloads can be routed to nodes that run inference inside a Trusted Execution Environment, which you can verify with remote attestation. Node operators are paid through Aleph Cloud's resource token economics, which keeps capacity online without a central operator.",
	},
	{
		id: 3,
		question: "Is decentralized inference slower?",
		answer:
			"For most workloads, latency is comparable to centralized providers. Inference still runs on real GPUs and CPUs; the difference is who operates them, not the underlying hardware speed. A request is scheduled onto a capable node and runs there. The decentralization affects governance and trust, not the per-token compute time in any fundamental way.",
	},
	{
		id: 4,
		question: "What is Aleph Cloud?",
		answer:
			"Aleph Cloud (aleph.cloud) is a decentralized cloud network. Independent node operators provide compute and storage, coordinated by the network rather than by one company. Its resource token economics incentivize operators to keep nodes online. LibertAI runs its model inference on this network, which is what makes the inference decentralized rather than hosted by a single provider.",
	},
	{
		id: 5,
		question: "Can decentralized AI be censored or shut down?",
		answer:
			"There is no single operator who can read the data, filter answers, or flip a central kill-switch, because no one company owns the compute or controls the coordination. That is what censorship resistance means here: it is a property of the architecture. The models are also open-weight and the serving stack is open source, so even in the worst case you can self-host the same models yourself on your own hardware.",
	},
];

function DecentralizedLLM() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Decentralized LLM Inference"
				description="Run decentralized LLM inference on Aleph Cloud: open models served across independent nodes, with no single point of failure and censorship-resistant by design."
				path="/decentralized-llm"
			/>
			<LandingHero
				label="Infrastructure"
				title="Decentralized LLMs: AI Inference Without a Single Point of Control"
				description="Most AI inference runs inside one company's data center, with one operator who can read your prompts and one switch that can turn it off. LibertAI serves open models on Aleph Cloud, a decentralized network of independent node operators. The result is AI inference with no single point of failure, no operator who can quietly read your data, and no central kill-switch."
				ctaText="Try the API"
				ctaLink="https://console.libertai.io"
			/>
			<HowItWorks label="Architecture" title="How Decentralized Inference Works" steps={steps} />
			<FeatureGrid label="Why It Matters" title="What Decentralization Buys You" features={features} columns={3} />
			<ComparisonTable
				title="How Decentralized Inference Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="One honest caveat: centralized clouds still offer frontier proprietary models and enterprise SLAs that a decentralized network does not try to match. Decentralization trades that for resilience, privacy, and exit rights. It removes the single operator who can fail, snoop, or shut you off, and it leaves you with open models you could always run elsewhere. Self-hosting is decentralization taken to its limit: if you have the hardware, you control everything, but you also operate everything. LibertAI sits in between, giving you most of the resilience and exit rights without making you run the GPUs."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Run Inference on a Network, Not a Server"
				subtitle="OpenAI-compatible, pay per token, and decentralized by design. Pay with crypto or card; the LTAI token gives a 20% discount."
				appLink="https://console.libertai.io"
				appText="Get an API Key"
				githubLink="https://docs.libertai.io"
				githubText="Read the Docs"
			/>
			<LandingRelated
				current="decentralized-llm"
				related={["confidential-ai", "open-source-ai", "openai-api-alternative"]}
			/>
			<FooterSection />
		</main>
	);
}
