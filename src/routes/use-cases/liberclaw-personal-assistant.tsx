import { createFileRoute } from "@tanstack/react-router";
import { FooterSection } from "@/components/FooterSection.tsx";
import { LiberClawHero } from "@/components/use-cases/liberclaw/LiberClawHero.tsx";
import { HowItWorks } from "@/components/use-cases/liberclaw/HowItWorks.tsx";
import { FeatureGrid } from "@/components/use-cases/liberclaw/FeatureGrid.tsx";
import { ComparisonTable } from "@/components/use-cases/liberclaw/ComparisonTable.tsx";
import { FAQSection } from "@/components/use-cases/liberclaw/FAQSection.tsx";
import { CTASection } from "@/components/use-cases/liberclaw/CTASection.tsx";
import { RelatedPages } from "@/components/use-cases/liberclaw/RelatedPages.tsx";
import { Brain, Eye, FileText, Globe, Terminal } from "lucide-react";

interface ProblemSectionProps {
	label: string;
	title: string;
	paragraphs: string[];
}

function ProblemSection({ label, title, paragraphs }: ProblemSectionProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="max-w-3xl space-y-6">
					<div className="text-sm">[ {label} ]</div>
					<h2>{title}</h2>
					{paragraphs.map((p, i) => (
						<p key={i} className="text-lg font-satoshi mb-6 last:mb-0">
							{p}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}

export const Route = createFileRoute("/use-cases/liberclaw-personal-assistant")({
	component: LiberClawPersonalAssistant,
});

const useCases = [
	{
		icon: Globe,
		title: "Research Topics and Push Results to Telegram",
		description:
			"Tell your assistant to research a topic and it will search the web, read through sources, and compile a summary. It pushes results to Telegram so you get answers without opening a browser. Useful for industry news, competitive intelligence, or anything you would otherwise spend 30 minutes Googling.",
	},
	{
		icon: FileText,
		title: "Schedule and Manage Tasks Across Tools",
		description:
			"Your assistant tracks deadlines, reminds you about upcoming work, and coordinates across the tools you use. It reads and writes files on its own filesystem, fetches data from the web, and runs shell commands. You describe what you need in plain language and the agent figures out the execution.",
	},
	{
		icon: Eye,
		title: "Monitor Websites, Repos, or Feeds",
		description:
			"Set up your assistant to check a website, a GitHub repository, or an RSS feed on a recurring schedule. When something changes, it evaluates what happened and sends you an alert with context, not just a notification that something is different.",
	},
	{
		icon: Brain,
		title: "Answer Questions with Persistent Memory",
		description:
			"LiberClaw agents remember what you have told them. Each agent has long-term memory that persists across all conversations, daily notes for session context, and conversation history with automatic summarization. Ask about something you discussed last week and it recalls without you repeating.",
	},
	{
		icon: Terminal,
		title: "Run Background Workflows While You Sleep",
		description:
			"The heartbeat system lets your assistant check for pending tasks on a schedule and execute them in the background. Spawn subagents for parallel work, queue up results, and review everything when you are back. This is what makes it an always-on AI agent doing real work while you are offline.",
	},
];

const steps = [
	{
		number: 1,
		title: "Create Your Agent",
		description:
			"Sign in at app.liberclaw.ai and create a new agent. Give it a name and a description of what you want it to do.",
	},
	{
		number: 2,
		title: "Write a Skill File",
		description:
			"Skills are markdown files (SKILL.md) that describe your agent's purpose, capabilities, and instructions. Write it in plain language to tell the agent what it should do, what tone to use, and how to handle different situations.",
	},
	{
		number: 3,
		title: "Deploy",
		description:
			"Hit deploy and LiberClaw assigns your agent to a VM from a pool of pre-warmed machines on Aleph Cloud. Your agent gets its own filesystem, database, and HTTPS endpoint. Most deployments finish in under a minute.",
	},
	{
		number: 4,
		title: "It Runs 24/7",
		description:
			"Your agent is live. It responds to messages through its HTTPS endpoint, runs background tasks on its heartbeat schedule, and maintains persistent memory. Connect it to Telegram for notifications and conversations on the go.",
	},
];

const comparisonHeaders = ["LiberClaw", "OpenClaw", "Cloud Assistants", "Self-Hosted (Leon, SEPIA)"];
const comparisonRows = [
	{
		feature: "Open source",
		values: ["yes", "yes", "no", "yes"] as const,
	},
	{
		feature: "Runs 24/7 unattended",
		values: ["yes", "Only if you host it", "yes", "Only if you host it"] as const,
	},
	{
		feature: "No infrastructure to manage",
		values: ["yes", "no", "yes", "no"] as const,
	},
	{
		feature: "No API keys needed",
		values: ["yes", "no", "N/A", "no"] as const,
	},
	{
		feature: "Persistent memory",
		values: ["yes", "partial", "Varies", "partial"] as const,
	},
	{
		feature: "VM isolation",
		values: ["yes", "no", "no", "yes"] as const,
	},
	{
		feature: "Setup time",
		values: ["Under 5 minutes", "Hours", "Minutes", "Hours"] as const,
	},
];

const faqs = [
	{
		id: 1,
		question: "How do I run an AI assistant 24/7?",
		answer:
			"Deploy your assistant on infrastructure that does not depend on your laptop being open. With LiberClaw, each agent runs on its own virtual machine on a decentralized compute network. You create the agent, write a skill file describing what it should do, and deploy it. The agent stays running 24/7 with a heartbeat system that handles background tasks on a schedule. The free tier gives you 2 agents with no credit card required.",
	},
	{
		id: 2,
		question: "What is the best open source personal AI assistant?",
		answer:
			"It depends on what you need. If you want full control and are comfortable managing your own server, OpenClaw has a large community and ecosystem. If you want a self-hosted AI assistant that runs 24/7 without you managing infrastructure, LiberClaw deploys each agent on its own managed VM with persistent memory, background task execution, and open-source inference through LibertAI. The entire codebase is on GitHub.",
	},
	{
		id: 3,
		question: "Can I deploy an AI agent without OpenAI API keys?",
		answer:
			"Yes. LiberClaw agents use LibertAI for inference, which runs open models (Qwen3 Coder and GLM-4.7) on decentralized infrastructure. You do not need API keys from OpenAI, Anthropic, or any other centralized provider. This also means no usage tracking by third parties and no risk of account suspensions for running agents through someone else's API.",
	},
];

function LiberClawPersonalAssistant() {
	return (
		<main className="flex flex-col min-h-screen">
			<LiberClawHero
				label="Personal Assistant"
				title="An AI Personal Assistant That Never Stops Running"
				description="Your AI assistant should not die when you close your laptop. LiberClaw agents run on their own virtual machines, 24/7, on decentralized infrastructure. No API keys, no server to babysit, and no provider that can pull the plug."
			/>
			<ProblemSection
				label="The Problem"
				title="The Laptop Lid Problem"
				paragraphs={[
					"Most AI assistants have a fatal dependency: you. They run in a terminal on your machine, and when your laptop sleeps, they sleep. When your session times out, they lose their train of thought. When a provider decides to suspend your account, your agent is gone.",
					"This is fine for one-off conversations. It is not fine if you want an assistant that handles tasks while you are away from your desk, monitors things overnight, or picks up where it left off three days later without you re-explaining everything.",
					"LiberClaw gives each agent its own VM on a network of independent compute nodes. Your assistant runs whether your laptop is open or not, whether you are online or not, whether any single company decides to change its terms of service or not.",
				]}
			/>
			<FeatureGrid label="Capabilities" title="What Your Assistant Can Do" features={useCases} columns={2} />
			<HowItWorks label="Setup" title="How It Works" steps={steps} />
			<ComparisonTable
				title="Why LiberClaw vs. the Alternatives"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="OpenClaw proved that personal AI agents could work. LiberClaw handles the infrastructure so you get an always-on AI agent without managing a server. Cloud assistants handle infrastructure but are closed-source SaaS products. Self-hosted options like Leon give you control but you manage everything. For a detailed comparison, see our OpenClaw alternative guide at liberclaw.ai/openclaw-alternative."
			/>
			<FAQSection faqs={faqs} />
			{/* Cross-links */}
			<section className="w-full bg-background py-12 px-4 md:px-6 lg:px-8">
				<div className="container mx-auto max-w-3xl text-center">
					<p className="text-lg font-satoshi text-white/60">
						Read the full guide on{" "}
						<a
							href="https://liberclaw.ai/ai-personal-assistant-agent"
							target="_blank"
							className="text-[#EA7AF4] hover:underline"
						>
							liberclaw.ai
						</a>{" "}
						or explore the{" "}
						<a
							href="https://liberclaw.ai/openclaw-alternative"
							target="_blank"
							className="text-[#EA7AF4] hover:underline"
						>
							OpenClaw alternative comparison
						</a>
						.
					</p>
				</div>
			</section>
			<CTASection
				title="Deploy Your AI Personal Assistant"
				subtitle="Deploy an AI personal assistant that runs 24/7 in under 5 minutes. The free tier includes 2 agents with no credit card required."
			/>
			<RelatedPages current="personal-assistant" />
			<FooterSection />
		</main>
	);
}
