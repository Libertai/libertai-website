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
import { UserX, EyeOff, ShieldCheck, Code, Sparkles, Gift } from "lucide-react";

export const Route = createFileRoute("/private-chatgpt-alternative")({
	component: PrivateChatGPTAlternative,
});

const steps = [
	{
		number: 1,
		title: "Open the Chat",
		description:
			"Go to chat.libertai.io. There is no sign-up, no account, and no email to enter. The chat loads and you can start typing right away.",
	},
	{
		number: 2,
		title: "Pick an Open Model",
		description:
			"Choose from open models like Qwen3.6-35B-A3B, Gemma 4 31B with a 262K context window, DeepSeek V4 Flash for fast reasoning, or Hermes 3 8B running inside a TEE. Each handles long-context chat; several add vision and tool use.",
	},
	{
		number: 3,
		title: "Chat Privately",
		description:
			"Your conversations are encrypted. Nothing is logged, and nothing you say is used to train a model. Add custom personas, attach knowledge bases, or generate images in the same window.",
	},
	{
		number: 4,
		title: "Go Premium If You Want",
		description:
			"The basic tier is free. Premium features are priced separately and you pay with crypto (ETH, USDC) or a credit/debit card. Holding the LTAI token gives you a 20% discount.",
	},
];

const features = [
	{
		icon: UserX,
		title: "No Account Required",
		description:
			"Open chat.libertai.io and start talking. There is no sign-up form, no email verification, and no profile to create. You are not identified, so there is nothing to link your conversations back to you.",
	},
	{
		icon: EyeOff,
		title: "No Logging, No Training on Your Chats",
		description:
			"LibertAI does not log your conversations and does not train models on what you type. Your messages are not collected, profiled, or fed into a future model. They are used to answer you and nothing else.",
	},
	{
		icon: ShieldCheck,
		title: "Verifiable Privacy via TEE",
		description:
			"Some models run inside a Trusted Execution Environment, a hardware-isolated enclave that processes your data without exposing it to the operator. This means privacy you can verify with cryptographic attestation, not just a promise in a policy.",
	},
	{
		icon: Code,
		title: "Open Source and Auditable",
		description:
			"The entire platform is open source on github.com/libertai. You can read the code that handles your messages, check how privacy is enforced, and confirm the claims yourself instead of taking them on trust.",
	},
	{
		icon: Sparkles,
		title: "Personas, Knowledge Bases, and Images",
		description:
			"Build custom personas with their own instructions, attach knowledge bases so the model can answer from your documents, and generate images in the same chat. It is a full assistant, not a stripped-down demo.",
	},
	{
		icon: Gift,
		title: "Free Basic Tier",
		description:
			"Core chat is free to use with no account. Premium features are available separately when you need them, payable with crypto or a card, but you never have to pay to start a private conversation.",
	},
];

const comparisonHeaders = ["LibertAI Chat", "ChatGPT Free", "ChatGPT Plus", "Local LLM (Ollama)"];
const comparisonRows = [
	{ feature: "Account required", values: ["no", "yes", "yes", "no"] as const },
	{
		feature: "Trains on your chats by default",
		values: ["no", "partial", "partial", "no"] as const,
	},
	{ feature: "Conversation logging", values: ["no", "yes", "yes", "no"] as const },
	{ feature: "Verifiable privacy (TEE)", values: ["yes", "no", "no", "partial"] as const },
	{ feature: "Open-source platform", values: ["yes", "no", "no", "yes"] as const },
	{ feature: "Needs your own GPU", values: ["no", "no", "no", "yes"] as const },
	{
		feature: "Price",
		values: ["Free, premium optional", "Free", "$20/month", "Hardware cost"] as const,
	},
];

const faqs = [
	{
		id: 1,
		question: "What is the best private ChatGPT alternative?",
		answer:
			"It depends on your priorities. A local LLM with Ollama is genuinely private because everything runs on your own machine, but you need a capable GPU and have to set it up yourself. LibertAI is a strong private ChatGPT alternative if you want cloud convenience with local-grade privacy: open models, no account, no logging, and privacy you can verify through Trusted Execution Environments. ChatGPT is more polished but you have to trust OpenAI to honor its settings.",
	},
	{
		id: 2,
		question: "Can I use AI chat without creating an account?",
		answer:
			"Yes. LibertAI chat at chat.libertai.io requires no account, no email, and no sign-up. You open the page and start chatting. ChatGPT, by contrast, requires an account to use, even on its free tier.",
	},
	{
		id: 3,
		question: "Does LibertAI train on my conversations?",
		answer:
			"No. LibertAI does not log your conversations and does not train models on what you type. The platform is open source, so you can inspect the code on github.com/libertai to confirm how your messages are handled. OpenAI offers opt-outs and temporary chats, but you have to trust the operator to apply them; with LibertAI the behavior is auditable.",
	},
	{
		id: 4,
		question: "How is LibertAI's privacy verifiable?",
		answer:
			"Some models run inside a Trusted Execution Environment (TEE), a hardware-isolated enclave that processes your data without revealing it to the machine operator. A TEE can produce a cryptographic attestation proving which code ran and that the environment was sealed. That turns privacy from a policy promise into something you can verify, instead of trusting a company's word.",
	},
	{
		id: 5,
		question: "Which models replace GPT?",
		answer:
			"LibertAI runs current open models that cover the same everyday tasks as GPT: Qwen3.6-35B-A3B and Qwen3.6-27B for long-context chat, tool use, vision, and reasoning; Gemma 4 31B with a 262K context window and function calling; DeepSeek V4 Flash for fast reasoning; and Hermes 3 8B running inside a TEE for verifiable privacy. You can switch between them depending on whether you want speed, long context, or maximum privacy.",
	},
];

function PrivateChatGPTAlternative() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Private ChatGPT Alternative"
				description="LibertAI is a private ChatGPT alternative with no account, no login, and no data logging. Chat with open models for free, with privacy verifiable via TEE."
				path="/private-chatgpt-alternative"
			/>
			<LandingHero
				label="Private Chat"
				title="A Private ChatGPT Alternative That Doesn't Log You In or Track You"
				description="Most AI chat tools want an account, keep your history, and may train on what you type. LibertAI is a private ChatGPT alternative you can use with no login, no email, and no data logging. Open the chat, pick an open model, and talk freely, with privacy you can actually verify."
				ctaText="Start Chatting Free"
				ctaLink="https://chat.libertai.io"
			/>
			<HowItWorks label="Getting Started" title="How It Works" steps={steps} />
			<FeatureGrid label="Why LibertAI" title="Why Chat on LibertAI" features={features} columns={3} />
			<ComparisonTable
				title="How LibertAI Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="To be fair: ChatGPT does offer opt-outs and temporary chats that exclude conversations from training, but you have to trust OpenAI to apply them, and an account is still required. A local LLM with Ollama is genuinely private because nothing leaves your machine, but it needs capable hardware and manual setup. LibertAI aims for the middle ground: the convenience of a hosted cloud chat with privacy that approaches running locally, backed by open-source code and TEE attestation you can verify."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Start a Private Conversation Now"
				subtitle="No account, no email, no logging. Open the chat and start talking, free."
				appLink="https://chat.libertai.io"
				appText="Start Chatting Free"
				githubLink="https://github.com/libertai"
				githubText="View Source on GitHub"
			/>
			<LandingRelated
				current="private-chatgpt-alternative"
				related={["uncensored-ai", "confidential-ai", "open-source-ai"]}
			/>
			<FooterSection />
		</main>
	);
}
