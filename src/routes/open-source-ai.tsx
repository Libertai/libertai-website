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
import { Eye, Boxes, GitFork, Unlock, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/open-source-ai")({
	component: OpenSourceAI,
});

const steps = [
	{
		number: 1,
		title: "Open-Weight Models",
		description:
			"The intelligence layer is open. LibertAI serves open-weight models with full weights you can download: Qwen3.6-35B-A3B and Qwen3.6-27B for long context, tool use, vision, and reasoning; Gemma 4 31B with a 262K context window and function calling; DeepSeek V4 Flash for fast reasoning; Hermes 3 8B; plus Qwen3 Coder, GLM-4.7, and Qwen3.5 122B. No black-box endpoints, no hidden model behind an API.",
	},
	{
		number: 2,
		title: "Open-Source Serving Platform and Chat App",
		description:
			"The code that runs the models is open too. The chat app, the API infrastructure, and the agent platform (LiberClaw) all live on github.com/libertai, with the agents at github.com/Libertai/liberclaw. You can read exactly how requests are handled, confirm the privacy claims line by line, fork the project, or run the whole stack yourself.",
	},
	{
		number: 3,
		title: "Decentralized Infrastructure",
		description:
			"Inference runs on Aleph Cloud, a decentralized network rather than a single company's data center. There is no logging, no training on user data, and privacy is verifiable through Trusted Execution Environments instead of being a promise in a policy document.",
	},
	{
		number: 4,
		title: "Your Exit Is Built In",
		description:
			"Because the weights are open, leaving costs you nothing. The same models LibertAI serves run on your own hardware with vLLM or Ollama whenever you want. You are never locked into a proprietary endpoint that can be deprecated, repriced, or silently swapped underneath you.",
	},
];

const features = [
	{
		icon: Eye,
		title: "Audit the Privacy Claims in Code",
		description:
			"Most services ask you to trust their privacy policy. LibertAI publishes the serving code on GitHub, so the no-logging and no-training claims are something you can verify by reading the source, not a sentence in a terms-of-service page.",
	},
	{
		icon: Boxes,
		title: "Open-Weight Models, Not Black Boxes",
		description:
			"Every model is open-weight: Qwen3.6, Gemma 4, DeepSeek V4 Flash, Hermes 3, GLM-4.7, and more. You know exactly what is answering you, you can download the weights, and you can run them anywhere a proprietary API never lets you go.",
	},
	{
		icon: GitFork,
		title: "Fork or Self-Host Everything",
		description:
			"The chat app, the API infrastructure, and the LiberClaw agent platform are all open source. Fork the parts you need, contribute back, or stand up the entire stack on your own infrastructure. Nothing about the platform is hidden behind a paywall.",
	},
	{
		icon: Unlock,
		title: "No Lock-In",
		description:
			"Your workflows stay portable. Because the platform is OpenAI-compatible and the models are open-weight, you can leave with your code and prompts intact and point them at vLLM, Ollama, or any other host. Your exit is a base URL change, not a migration project.",
	},
	{
		icon: Users,
		title: "Community-Driven",
		description:
			"LibertAI is governed through the LTAI token, so the direction of the platform is driven by its community rather than a single corporation's roadmap. Open code plus open governance means the people who depend on it have a say in where it goes.",
	},
	{
		icon: Sparkles,
		title: "Image, Embeddings, and TTS Too",
		description:
			"Open-source AI here is not just chat. The same API gives you image generation, embeddings, and text-to-speech, all OpenAI-compatible, so you can build a full application on open foundations without stitching together a dozen proprietary vendors.",
	},
];

const comparisonHeaders = ["LibertAI", "ChatGPT / Claude", "'Open' API-only services"] as const;
const comparisonRows = [
	{ feature: "Model weights available", values: ["yes", "no", "yes"] as const },
	{ feature: "Serving code open source", values: ["yes", "no", "no"] as const },
	{ feature: "Can self-host the full stack", values: ["yes", "no", "partial"] as const },
	{ feature: "Can audit privacy claims", values: ["yes", "no", "no"] as const },
	{
		feature: "No data logging by design",
		values: ["Yes — verifiable (TEE)", "Trust-based", "Trust-based"] as const,
	},
	{ feature: "Exit cost", values: ["None (run weights yourself)", "High (proprietary API)", "Medium"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is open-source AI?",
		answer:
			"Open-source AI is artificial intelligence where the components are published openly rather than locked behind a proprietary service. In its fullest form that means open-weight models you can download and run, plus open-source code for the software that serves them. Most services that call themselves open are open at one layer only. LibertAI is open at every layer: open-weight models, an open-source chat app and API infrastructure on github.com/libertai, and decentralized hosting on Aleph Cloud.",
	},
	{
		id: 2,
		question: "Are open-source models as good as GPT-4-class models?",
		answer:
			"For most real workloads, yes. Top open models such as Qwen3.6, Gemma 4, DeepSeek V4 Flash, and GLM-4.7 are competitive with proprietary models on everyday chat, coding, reasoning, and tool use. To be honest about it: frontier proprietary models still lead on some of the hardest tasks. The trade-off is what openness buys you — auditability, no lock-in, and verifiable privacy — which matters more than a few benchmark points for many use cases.",
	},
	{
		id: 3,
		question: "What's the difference between open-weight and open-source AI?",
		answer:
			"Open-weight refers to the model itself: the trained weights are published, so you can download the model and run it on your own hardware. Open-source usually refers to the software around the model — the serving infrastructure, chat app, and agent platform — whose source code is public. A model can be open-weight while the service running it stays closed. LibertAI is both: the models are open-weight and the platform that serves them is open-source.",
	},
	{
		id: 4,
		question: "Can I self-host the same models?",
		answer:
			"Yes. Every model LibertAI serves is open-weight, so the same models run on your own hardware with tools like vLLM or Ollama. You can use LibertAI's hosted, OpenAI-compatible API at https://api.libertai.io/v1 today and move to self-hosting later with no rewrite, because the weights and the interface are both open. That portability is the whole point — your exit is built in.",
	},
	{
		id: 5,
		question: "Is the LibertAI platform itself open source?",
		answer:
			"Yes. Beyond serving open-weight models, the platform code is open: the chat app, the API infrastructure, and the LiberClaw agent platform are all on github.com/libertai, with the agents at github.com/Libertai/liberclaw. Anyone can read the code to audit the privacy claims, fork it, or self-host the entire stack.",
	},
];

function OpenSourceAI() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Open-Source AI, End to End"
				description="LibertAI is open-source AI at every layer: open-weight models served on open-source infrastructure you can audit, fork, or self-host — with no vendor lock-in."
				path="/open-source-ai"
			/>
			<LandingHero
				label="Open Source"
				title="Open-Source AI From the Models to the Code That Serves Them"
				description="Most 'open' AI services are open at one layer only — open weights behind a closed service, or open code calling a proprietary model. LibertAI is open at every layer: open-weight models, an open-source chat app and API, and decentralized hosting you can verify. You can audit the privacy claims in code, fork the platform, or take the same models and run them yourself."
				ctaText="Start Free"
				ctaLink="https://chat.libertai.io"
			/>
			<HowItWorks label="The Stack" title="Open at Every Layer" steps={steps} />
			<FeatureGrid label="Why Open Source" title="What Openness Buys You" features={features} columns={3} />
			<ComparisonTable
				title="How LibertAI Compares"
				headers={[...comparisonHeaders]}
				rows={comparisonRows}
				footnote="To be fair: proprietary frontier models from companies like OpenAI and Anthropic are excellent and are sometimes the right tool for the job. This page is not an argument that open always wins on raw capability. It is about what openness buys you when privacy, auditability, or longevity matter — when you need to verify a claim, avoid lock-in, or guarantee the model you build on today still runs years from now."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Try Open-Source AI"
				subtitle="Free chat at chat.libertai.io with no sign-up, or browse every line of the platform on GitHub."
				appLink="https://chat.libertai.io"
				appText="Start Free"
				githubLink="https://github.com/libertai"
				githubText="Browse the Code"
			/>
			<LandingRelated
				current="open-source-ai"
				related={["decentralized-llm", "uncensored-ai", "private-chatgpt-alternative"]}
			/>
			<FooterSection />
		</main>
	);
}
