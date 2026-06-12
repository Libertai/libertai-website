import { createFileRoute, Link } from "@tanstack/react-router";
import { SEO } from "@/components/SEO.tsx";
import { FooterSection } from "@/components/FooterSection.tsx";
import { LandingHero } from "@/components/landing/LandingHero.tsx";
import { HowItWorks } from "@/components/landing/HowItWorks.tsx";
import { FeatureGrid } from "@/components/landing/FeatureGrid.tsx";
import { ComparisonTable } from "@/components/landing/ComparisonTable.tsx";
import { FAQSection } from "@/components/landing/FAQSection.tsx";
import { CTASection } from "@/components/landing/CTASection.tsx";
import { LandingRelated } from "@/components/landing/LandingRelated.tsx";
import { Server, Brain, KeyRound, Code, Zap, Gift, Code2, Bot, Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/agents")({
	component: Agents,
});

const steps = [
	{
		number: 1,
		title: "Create an Agent",
		description:
			"Sign in at app.liberclaw.ai and create a new agent. Give it a name and a purpose. The free tier includes 2 agents and needs no credit card.",
	},
	{
		number: 2,
		title: "Write a SKILL.md",
		description:
			"An agent's behavior lives in a plain markdown file. Describe what it should do, when it should do it, and what to send you. No framework, no boilerplate.",
		code: `# Inbox Triage

You triage my email inbox three times a day.

On each heartbeat:

1. Read new messages since the last run
2. Sort them into: urgent, needs reply, FYI, and noise
3. Draft a one-line reply suggestion for anything in "needs reply"
4. Send me a single digest with the buckets and counts
5. Remember which senders I usually ignore, and stop surfacing them

Keep the digest short. Do not send a message if there is nothing new.`,
	},
	{
		number: 3,
		title: "Deploy to a Dedicated VM",
		description:
			"Click deploy. LiberClaw pulls a virtual machine from a pre-warmed pool and brings your agent online with its own filesystem, database, and HTTPS endpoint. Most deployments finish in under a minute.",
	},
	{
		number: 4,
		title: "It Runs on a Heartbeat",
		description:
			"The agent wakes on a schedule, reads its persistent memory, does its work, and goes back to sleep. It keeps running 24/7 without you watching it, building context over time.",
	},
];

const features = [
	{
		icon: Server,
		title: "Its Own VM Per Agent",
		description:
			"Every agent runs on a dedicated virtual machine with its own filesystem, database, and HTTPS endpoint. Nothing is shared between agents, so one agent's data never leaks into another's.",
	},
	{
		icon: Brain,
		title: "Persistent Memory",
		description:
			"Agents remember across runs. They keep notes, track what changed, and build context about your work over time instead of starting from zero on every heartbeat.",
	},
	{
		icon: KeyRound,
		title: "No API Keys Needed",
		description:
			"Inference is included through LibertAI using open models such as Qwen3.6, Qwen3.5 122B, Gemma 4, DeepSeek V4 Flash, Qwen3 Coder, and GLM-4.7. No OpenAI or Anthropic key to configure, no third-party usage tracking.",
	},
	{
		icon: Code,
		title: "Fully Open Source",
		description:
			"The agent code, the deployment logic, and the platform itself are all on GitHub. Read every line, fork it, or run the whole stack yourself.",
	},
	{
		icon: Zap,
		title: "Under-5-Minute Deploys",
		description:
			"The pre-warmed VM pool means no cold start. Create an agent, write a skill, deploy. Most agents are live in under five minutes, often in under one.",
	},
	{
		icon: Gift,
		title: "Free Tier of 2 Agents",
		description:
			"Run two agents for free, with no credit card required. Try a real always-on agent on its own VM before you decide to scale up.",
	},
];

interface BuildCard {
	title: string;
	description: string;
	icon: typeof Code2;
	path: string;
}

const buildCards: BuildCard[] = [
	{
		title: "AI Code Review Agent",
		description:
			"An agent that watches your GitHub repos, reviews pull requests automatically, and posts line-level feedback with persistent codebase knowledge.",
		icon: Code2,
		path: "/use-cases/liberclaw-code-review",
	},
	{
		title: "Always-On Personal Assistant",
		description:
			"A 24/7 assistant with Telegram integration. Schedule tasks, get summaries, and let it work in the background while you sleep.",
		icon: Bot,
		path: "/use-cases/liberclaw-personal-assistant",
	},
	{
		title: "Autonomous Research Agent",
		description:
			"An agent that monitors the web, researches topics, and delivers digests. Useful for competitor tracking, news monitoring, and regulatory watch.",
		icon: Search,
		path: "/use-cases/liberclaw-research-agent",
	},
];

const comparisonHeaders = ["LiberClaw", "Cloud automation (Zapier AI)", "DIY (cron + scripts)"] as const;
const comparisonRows = [
	{ feature: "Dedicated VM per agent", values: ["yes", "no", "Yes (you build it)"] as const },
	{ feature: "Persistent memory", values: ["yes", "partial", "Yes (you build it)"] as const },
	{ feature: "Needs your own API keys", values: ["No (inference included)", "yes", "yes"] as const },
	{ feature: "Open source", values: ["Yes, fully", "no", "Your code only"] as const },
	{ feature: "Setup time", values: ["Under 5 minutes", "Minutes", "Hours to days"] as const },
	{ feature: "Runs 24/7 unattended", values: ["yes", "yes", "Yes (you operate it)"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is an autonomous AI agent?",
		answer:
			"An autonomous AI agent is a program that runs on its own, on a schedule, to carry out a goal without you prompting it each time. It reads its instructions, takes actions, remembers what it did, and reports back. With LiberClaw, each agent runs 24/7 on a dedicated VM, wakes on a heartbeat, and behaves according to a plain-markdown SKILL.md file you write.",
	},
	{
		id: 2,
		question: "How do I deploy an AI agent that runs 24/7?",
		answer:
			"Create an agent at app.liberclaw.ai, write a SKILL.md describing its behavior, and click deploy. LiberClaw assigns a virtual machine from a pre-warmed pool and brings the agent online with its own HTTPS endpoint, usually in under a minute. From then on it runs on a heartbeat around the clock, with no infrastructure for you to manage.",
	},
	{
		id: 3,
		question: "Do I need an OpenAI API key to run an AI agent?",
		answer:
			"No. LiberClaw agents use LibertAI for inference, which runs open models such as Qwen3.6, Qwen3.5 122B, Gemma 4, DeepSeek V4 Flash, Qwen3 Coder, and GLM-4.7. The inference is included, so you do not need an API key from OpenAI, Anthropic, or any other provider.",
	},
	{
		id: 4,
		question: "Can AI agents remember things between runs?",
		answer:
			"Yes. Each LiberClaw agent has persistent memory backed by its own database on its own VM. It keeps state across heartbeats, so it can track what changed, avoid repeating work, and build context about your projects over time instead of starting fresh on every run.",
	},
	{
		id: 5,
		question: "Is LiberClaw open source?",
		answer:
			"Yes. LiberClaw is fully open source at github.com/Libertai/liberclaw. The agent runtime, the deployment logic, and the platform itself are all public. You can read every line, fork it, or self-host the whole stack.",
	},
];

function Agents() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Autonomous AI Agents on Their Own VMs"
				description="Deploy autonomous AI agents that run 24/7 on dedicated VMs with persistent memory. Open source, no API keys, free tier of 2 agents. Ready in under 5 minutes."
				path="/agents"
			/>
			<LandingHero
				label="AI Agents"
				title="Deploy Autonomous AI Agents That Run 24/7 on Their Own VMs"
				description="LiberClaw is an open source platform for always-on AI agents. Each agent runs on a dedicated virtual machine with persistent memory and a heartbeat, defined by a plain-markdown SKILL.md file. No API keys, no servers to manage, live in under five minutes."
				ctaText="Deploy an Agent Free"
				ctaLink="https://app.liberclaw.ai"
			/>
			<HowItWorks label="Setup" title="How It Works" steps={steps} />
			<FeatureGrid label="Why LiberClaw" title="Why LiberClaw" features={features} columns={3} />

			{/* What People Build */}
			<section className="w-full bg-background py-20 lg:py-32">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					{/* Header */}
					<div className="mb-16 space-y-6">
						<div className="text-sm">[ Use Cases ]</div>
						<h2>What People Build with LiberClaw</h2>
					</div>

					{/* Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
						{buildCards.map((card) => {
							const Icon = card.icon;
							return (
								<Link
									key={card.path}
									to={card.path}
									className="group block space-y-4 p-6 rounded-2xl border border-foreground/20 hover:border-white transition-colors"
								>
									<div className="flex items-center gap-3">
										<Icon className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
										<h3 className="text-2xl font-satoshi">{card.title}</h3>
									</div>
									<p className="text-sm leading-relaxed">{card.description}</p>
									<span className="inline-flex items-center gap-2 text-sm text-[#EA7AF4] group-hover:gap-3 transition-all">
										Learn more <ArrowRight className="w-4 h-4" />
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<ComparisonTable
				title="How LiberClaw Compares"
				headers={[...comparisonHeaders]}
				rows={comparisonRows}
				footnote="Cloud automation tools like Zapier AI are quick to wire up and great for chaining apps, but they run as a managed SaaS without a dedicated VM per agent and lean on your own model API keys. A DIY setup with cron and scripts gives you full control, but you build and operate the isolation, memory, and uptime yourself. LiberClaw sits in between: open source, with a managed dedicated VM per agent, persistent memory, and included open-model inference."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Deploy Your First Agent"
				subtitle="The free tier includes 2 agents on their own VMs. No credit card required."
			/>
			<LandingRelated current="agents" related={["openai-api-alternative", "decentralized-llm", "ai-freedom"]} />
			<FooterSection />
		</main>
	);
}
