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
import { Unlock, MessageSquare, EyeOff, GitBranch, Network, Plug } from "lucide-react";

export const Route = createFileRoute("/uncensored-ai")({
	component: UncensoredAI,
});

const steps = [
	{
		number: 1,
		title: "Open the Chat",
		description:
			"Go to chat.libertai.io. There is no sign-up, no account, and no email to enter for basic chat. The page loads and you can start typing right away.",
	},
	{
		number: 2,
		title: "Set Your Own Persona",
		description:
			"Write your own system prompt or build a custom persona with its own instructions, tone, and rules. The model follows the context you give it, not a brand-safety script layered on by someone else.",
	},
	{
		number: 3,
		title: "Chat or Wire It Into Your App",
		description:
			"Use the same open models in the chat, or point your code at the OpenAI-compatible API at https://api.libertai.io/v1 from console.libertai.io. The behavior you set carries over to your own applications.",
	},
];

const features = [
	{
		icon: Unlock,
		title: "Open Models, Served As Released",
		description:
			"LibertAI runs open-weight models such as Qwen3.6-35B-A3B, Gemma 4 31B, DeepSeek V4 Flash, and Hermes 3 8B exactly as their creators released them. There is no extra corporate moderation layer stacked on top, and nothing is stripped out either.",
	},
	{
		icon: MessageSquare,
		title: "Your System Prompt Is Law",
		description:
			"You control behavior with your own system prompts and personas. The model answers to the context you provide instead of a hidden policy wrapper, so the assistant works the way you define it.",
	},
	{
		icon: EyeOff,
		title: "No Surveillance or Logging",
		description:
			"LibertAI does not log your conversations and does not train models on what you type. Basic chat needs no account, and privacy is verifiable through Trusted Execution Environments rather than a line in a policy.",
	},
	{
		icon: GitBranch,
		title: "No Silent Model Swaps",
		description:
			"The model you pick is the model you get. There are no behind-the-scenes prompt injections and no silent swaps that quietly change how the assistant responds from one day to the next.",
	},
	{
		icon: Network,
		title: "Decentralized, No Kill-Switch",
		description:
			"Inference runs on Aleph Cloud's decentralized infrastructure. No single company can deprecate your workflow, pull a model, or rewrite the rules overnight. The platform is open source on github.com/libertai.",
	},
	{
		icon: Plug,
		title: "Works in Chat and via API",
		description:
			"Talk to the models at chat.libertai.io, or use the OpenAI-compatible API at https://api.libertai.io/v1 to bring the same behavior into your own apps. The control you set in chat is the control you keep in code.",
	},
];

const comparisonHeaders = ["LibertAI", "Big-tech chatbots", "Local LLM"];
const comparisonRows = [
	{ feature: "Extra moderation layer on top of the model", values: ["no", "yes", "no"] as const },
	{ feature: "Your system prompt fully controls behavior", values: ["yes", "no", "yes"] as const },
	{ feature: "Conversations logged", values: ["no", "yes", "no"] as const },
	{ feature: "Model can change under you silently", values: ["no", "yes", "no"] as const },
	{ feature: "Works without a GPU", values: ["yes", "yes", "no"] as const },
	{ feature: "Account required", values: ["no", "yes", "no"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is uncensored AI?",
		answer:
			"On LibertAI, uncensored AI means an assistant that answers to you rather than to a brand-safety department. There is no extra corporate filter layer stacked on top of the open-weight model, no surveillance or logging of your conversations, and no silent behavior changes. You control how the assistant responds through your own system prompt. It does not mean lawless: the models keep whatever safety training their creators built in, and terms of service still apply.",
	},
	{
		id: 2,
		question: "Is uncensored AI legal?",
		answer:
			"Yes. Using open-weight models is legal, and so is running them without an extra corporate moderation layer. What stays illegal is illegal use: anything against the law is still against the law, and it is also prohibited by the terms of service. The point of uncensored AI here is removing surveillance and an opaque policy wrapper, not enabling misuse.",
	},
	{
		id: 3,
		question: "Do the models have any built-in safety?",
		answer:
			"Yes. Every model keeps whatever safety training its creators included when they released the open weights. LibertAI does not add an extra moderation layer on top, and it does not strip anything out either. You get the model as released, so its built-in behavior is exactly what its creators shipped.",
	},
	{
		id: 4,
		question: "Can I customize how the AI behaves?",
		answer:
			"Yes. chat.libertai.io supports custom personas, and you can write your own system prompt to define the assistant's tone, role, and rules. Because there is no hidden policy wrapper rewriting your instructions, the behavior you specify is the behavior you get, both in the chat and through the OpenAI-compatible API.",
	},
	{
		id: 5,
		question: "Why does decentralization matter for censorship?",
		answer:
			"When AI runs on a single company's servers, that company can deprecate your workflow, pull a model, inject hidden instructions, or rewrite the rules overnight, and you have no say. LibertAI runs on Aleph Cloud's decentralized infrastructure with open-source code, so there is no single kill-switch and no single party that can quietly change what you are allowed to ask.",
	},
];

function UncensoredAI() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Uncensored AI — Open Models You Control"
				description="Uncensored AI that answers to you, not a brand-safety team: open-weight models with no extra filter layer, no surveillance, and your own system prompt in control."
				path="/uncensored-ai"
			/>
			<LandingHero
				label="Your AI, Your Rules"
				title="Uncensored AI: Models That Answer to You, Not a Moderation Team"
				description="Most AI assistants wrap an extra corporate filter around the model, log what you type, and can change behavior without telling you. LibertAI serves open-weight models as released, with no surveillance and no hidden policy wrapper. You set the system prompt, and the assistant answers to you."
				ctaText="Start Chatting Free"
				ctaLink="https://chat.libertai.io"
			/>
			<HowItWorks label="Getting Started" title="How It Works" steps={steps} />
			<FeatureGrid label="Why LibertAI" title="What Uncensored Actually Means Here" features={features} columns={3} />
			<ComparisonTable
				title="How LibertAI Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="To be fair: big-tech assistants apply extra policy layers and can change models without notice. Those are defensible business choices, but you have no say in them. A local LLM offers total control because nothing leaves your machine, at the cost of capable hardware and manual setup. LibertAI aims for the middle: hosted convenience with open models served as released, no extra filter layer, no logging, and no silent swaps, backed by open-source code you can verify."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Talk to AI That Answers to You"
				subtitle="Open the chat, set your own persona, and use open models as released. No account, no logging."
				appLink="https://chat.libertai.io"
				appText="Start Chatting Free"
				githubLink="https://github.com/libertai"
				githubText="View Source on GitHub"
			/>
			<LandingRelated
				current="uncensored-ai"
				related={["ai-freedom", "private-chatgpt-alternative", "open-source-ai"]}
			/>
			<FooterSection />
		</main>
	);
}
