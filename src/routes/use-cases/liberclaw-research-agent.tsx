import { createFileRoute } from "@tanstack/react-router";
import { FooterSection } from "@/components/FooterSection.tsx";
import { LiberClawHero } from "@/components/use-cases/liberclaw/LiberClawHero.tsx";
import { HowItWorks } from "@/components/use-cases/liberclaw/HowItWorks.tsx";
import { FeatureGrid } from "@/components/use-cases/liberclaw/FeatureGrid.tsx";
import { ComparisonTable } from "@/components/use-cases/liberclaw/ComparisonTable.tsx";
import { FAQSection } from "@/components/use-cases/liberclaw/FAQSection.tsx";
import { CTASection } from "@/components/use-cases/liberclaw/CTASection.tsx";
import { RelatedPages } from "@/components/use-cases/liberclaw/RelatedPages.tsx";
import {
	Search,
	Eye,
	TrendingUp,
	FileText,
	GitBranch,
	Globe,
	AlertTriangle,
} from "lucide-react";

interface LimitationsSectionProps {
	limitations: { title: string; description: string }[];
}

function LimitationsSection({ limitations }: LimitationsSectionProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="mb-16">
					<div className="text-sm mb-4">[ Limitations ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						Limitations Worth Knowing
					</h2>
				</div>
				<div className="max-w-3xl space-y-6">
					{limitations.map((item, i) => (
						<div key={i} className="flex items-start gap-4">
							<AlertTriangle className="w-5 h-5 text-[#EA7AF4] flex-shrink-0 mt-0.5" />
							<div>
								<h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
								<p className="text-sm font-satoshi">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export const Route = createFileRoute("/use-cases/liberclaw-research-agent")({
	component: LiberClawResearchAgent,
});

const modes = [
	{
		icon: Search,
		title: "Deep Research",
		description:
			"Give the agent a topic, and it investigates. The agent searches the web, fetches pages, reads through them, reasons about what it finds, follows relevant links, and produces a structured report with citations. Unlike a single chat query, the agent works through a topic methodically over multiple steps and writes intermediate notes on its own filesystem.",
	},
	{
		icon: Eye,
		title: "Continuous Monitoring",
		description:
			"Define what the agent should watch, and it checks on a recurring schedule using the heartbeat system. On each cycle, the agent fetches your sources, compares against what it knew before, reasons about what changed, and alerts you if something is worth your attention. A price drop is not just \"text changed on line 47\" -- the agent tells you what changed and why it matters.",
	},
];

const steps = [
	{
		number: 1,
		title: "Create an Agent",
		description:
			"Sign up at app.liberclaw.ai and create a new agent. The free tier gives you 2 agents with no credit card required. Your agent gets its own dedicated VM with a persistent filesystem and database.",
	},
	{
		number: 2,
		title: "Define What to Research or Monitor",
		description:
			"Write a SKILL.md file that tells the agent what to do. For deep research, describe the topic and the output format. For continuous monitoring, list the sources to track and what counts as noteworthy.",
		code: `# Competitor Pricing Monitor

## What to monitor
- https://competitor-a.com/pricing
- https://competitor-b.com/pricing
- https://competitor-c.com/pricing

## Schedule
Check every heartbeat cycle.

## What to look for
- Price changes on any plan tier
- New plans added or removed
- Changes to feature lists within existing plans
- Free trial or discount offers

## Output
Write a summary of changes to /home/user/reports/pricing-weekly.md.
If any price decreased by more than 10%, send a Telegram alert immediately.`,
	},
	{
		number: 3,
		title: "Deploy",
		description:
			"Hit deploy. LiberClaw pulls a machine from its pre-warmed VM pool and has your agent running in under 5 minutes. Most deployments finish in seconds.",
	},
	{
		number: 4,
		title: "The Agent Runs",
		description:
			"Your agent works around the clock. The heartbeat system triggers it on a recurring interval. Between heartbeats, you can chat with the agent to ask questions, request one-off research, or adjust its monitoring criteria. Everything it learns is stored in persistent memory.",
	},
];

const comparisonHeaders = [
	"LiberClaw",
	"GPT Researcher",
	"Huginn",
	"Browse AI",
	"changedetection.io",
];
const comparisonRows = [
	{
		feature: "AI reasoning",
		values: ["yes", "Requires your API keys", "no", "Limited", "no"] as const,
	},
	{
		feature: "Continuous monitoring",
		values: ["yes", "no", "yes", "yes", "yes"] as const,
	},
	{
		feature: "Runs 24/7 unattended",
		values: ["yes", "no", "Yes (self-hosted)", "Yes (SaaS)", "Yes (self-hosted)"] as const,
	},
	{
		feature: "Open source",
		values: ["yes", "yes", "yes", "no", "yes"] as const,
	},
	{
		feature: "Persistent memory",
		values: ["yes", "no", "no", "no", "no"] as const,
	},
	{
		feature: "No external API keys",
		values: ["yes", "no", "N/A", "N/A", "N/A"] as const,
	},
	{
		feature: "Setup time",
		values: ["Under 5 minutes", "Minutes (local env)", "Hours (Docker)", "Minutes", "Minutes (Docker)"] as const,
	},
	{
		feature: "Infrastructure to manage",
		values: ["None", "Your own machine", "Your own server", "None (SaaS)", "Your own server"] as const,
	},
];

const useCaseExamples = [
	{
		icon: TrendingUp,
		title: "Competitor Pricing Tracker",
		description:
			"Deploy an agent that checks competitor pricing pages weekly. It stores previous pricing in its memory, compares against current state, and writes a summary of what changed and by how much. If a competitor drops prices significantly, the agent sends an immediate Telegram alert.",
	},
	{
		icon: FileText,
		title: "Academic Paper Monitor",
		description:
			"Point the agent at arXiv categories, Google Scholar alerts, or journal RSS feeds. On each heartbeat cycle, it checks for new publications, reads abstracts, and flags papers matching your research interests with a daily digest of titles, authors, and relevance summaries.",
	},
	{
		icon: Globe,
		title: "Industry News Digest",
		description:
			"The agent searches for news about your industry every morning, reads the top results, filters out noise, and pushes a structured digest to Telegram before you start your day. Over time, it learns which sources are reliable and which topics you care about.",
	},
	{
		icon: GitBranch,
		title: "GitHub Release Tracker",
		description:
			"Track 20 or more repositories your team depends on. When a new release is published, the agent reads the changelog, summarizes breaking changes and new features, and writes a report. No more discovering a breaking change in production because nobody read the release notes.",
	},
];

const faqs = [
	{
		question: "What is an AI research agent?",
		answer:
			"An AI research agent is software that can autonomously search the web, read and analyze content, and produce structured research output without step-by-step human guidance. Unlike a chatbot that answers a single question, a research agent can plan a multi-step investigation, gather information from multiple sources, and synthesize findings into a report. LiberClaw research agents run on their own VMs and can operate continuously, combining one-off deep research with ongoing web monitoring.",
	},
	{
		question: "How do I monitor websites with AI?",
		answer:
			"With LiberClaw, you deploy an agent and give it a skill file that lists the URLs or topics to monitor and what to look for. The agent uses its heartbeat system to check on a recurring schedule. When it detects changes, it reads the new content, compares against what it knew before using persistent memory, and writes a summary explaining what changed and whether it is significant. Results can be pushed to Telegram or stored on the agent's filesystem.",
	},
	{
		question: "What is the best open source alternative to OpenAI Deep Research?",
		answer:
			"OpenAI's Deep Research is a $200/month feature that performs multi-step web research. GPT Researcher is a popular open source option, but it requires your own API keys and runs locally without persistence or monitoring. LiberClaw provides a deployable open source AI research agent that runs on its own VM with persistent memory, uses open models through LibertAI with no external API keys, and adds continuous monitoring on top of one-off research.",
	},
];

const limitations = [
	{
		title: "Web search requires a Brave API key",
		description:
			"The agent uses the Brave Search API for web searches. You need to add a BRAVE_API_KEY to your agent's secrets. Without it, the agent can still fetch specific URLs but cannot perform general web searches.",
	},
	{
		title: "Monitoring frequency depends on heartbeat interval",
		description:
			"The agent checks its monitoring targets when the heartbeat fires, not in real time. If you need second-level detection, a dedicated tool like changedetection.io may be more appropriate.",
	},
	{
		title: "AI reasoning is not infallible",
		description:
			"The agent can misinterpret page content, miss relevant changes, or draw incorrect conclusions. It saves you hours of manual work but is not a replacement for your judgment on critical decisions. Review its output, especially early on.",
	},
	{
		title: "Open model capabilities",
		description:
			"LiberClaw uses open models (Qwen3 Coder, GLM-4.7) through LibertAI. These are strong models, but they may not match the largest proprietary models on every task. For most research and monitoring use cases, they work well.",
	},
];

function LiberClawResearchAgent() {
	return (
		<main className="flex flex-col min-h-screen">
			<LiberClawHero
				label="Research Agent"
				title="An AI Research Agent That Monitors the Web While You Sleep"
				description="Deploy an autonomous web monitoring agent that researches topics, tracks changes across websites, and delivers structured summaries on a schedule you define. It runs on its own virtual machine, 24/7, whether you are online or not."
			/>
			<FeatureGrid
				label="What It Does"
				title="Two Modes, One Agent"
				subtitle="A LiberClaw research agent operates in two modes, and you can combine them in a single agent."
				features={modes}
				columns={2}
			/>
			<HowItWorks
				label="Setup"
				title="How It Works"
				steps={steps}
			/>
			<ComparisonTable
				title="How LiberClaw Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="GPT Researcher is strong for one-off research but requires your own API keys and has no monitoring. Huginn is powerful but rule-based, not AI. Browse AI handles extraction well but is closed-source SaaS. changedetection.io detects diffs but does not reason about them. LiberClaw combines AI reasoning with autonomous scheduling, persistent memory, and a dedicated VM."
			/>
			<FeatureGrid
				label="Use Cases"
				title="Use Case Examples"
				features={useCaseExamples}
				columns={2}
			/>
			<FAQSection faqs={faqs} />
			<LimitationsSection limitations={limitations} />
			<CTASection
				title="Deploy Your Research Agent"
				subtitle="LiberClaw's free tier gives you 2 agents with no credit card required. Deploy your first research agent in under 5 minutes."
			/>
			<RelatedPages current="research-agent" />
			<FooterSection />
		</main>
	);
}
