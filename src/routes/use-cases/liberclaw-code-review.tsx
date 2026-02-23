import { createFileRoute } from "@tanstack/react-router";
import { FooterSection } from "@/components/FooterSection.tsx";
import { LiberClawHero } from "@/components/use-cases/liberclaw/LiberClawHero.tsx";
import { HowItWorks } from "@/components/use-cases/liberclaw/HowItWorks.tsx";
import { FeatureGrid } from "@/components/use-cases/liberclaw/FeatureGrid.tsx";
import { ComparisonTable } from "@/components/use-cases/liberclaw/ComparisonTable.tsx";
import { FAQSection } from "@/components/use-cases/liberclaw/FAQSection.tsx";
import { CTASection } from "@/components/use-cases/liberclaw/CTASection.tsx";
import { RelatedPages } from "@/components/use-cases/liberclaw/RelatedPages.tsx";
import { Code, Server, Clock, Zap, Shield } from "lucide-react";

export const Route = createFileRoute("/use-cases/liberclaw-code-review")({
	component: LiberClawCodeReview,
});

const steps = [
	{
		number: 1,
		title: "Create an Agent",
		description:
			"Sign in at app.liberclaw.ai and create a new agent. Give it a name like \"PR Reviewer\" and connect it to your GitHub repository.",
	},
	{
		number: 2,
		title: "Define the Review Skill",
		description:
			"Write a SKILL.md file that tells the agent what to do. This is a plain markdown file that describes the review behavior: read the PR diff, check for bugs and logic errors, flag missing tests, and post a review comment.",
		code: `# Code Review

You are a code review agent for the \`acme/backend\` repository.

When a new pull request is opened:

1. Fetch the PR diff from GitHub
2. Read every changed file
3. Check for:
   - Logic errors and potential bugs
   - Missing error handling
   - Untested code paths
   - Style issues that diverge from the existing codebase
4. Post a review comment on the PR with specific, line-level feedback
5. If the PR looks good, approve it with a short summary

Be direct. Cite specific line numbers. Do not leave generic praise.`,
	},
	{
		number: 3,
		title: "Deploy",
		description:
			"Click deploy. LiberClaw assigns a dedicated virtual machine from a pre-warmed pool, installs your agent, and brings it online with its own HTTPS endpoint. Most deployments finish in under a minute.",
	},
	{
		number: 4,
		title: "It Reviews PRs",
		description:
			"The agent runs on a heartbeat. It checks for new pull requests on a schedule, reads the diff, reasons about the changes, and posts review comments directly on GitHub. It works at 3am, on weekends, and on holidays.",
	},
];

const features = [
	{
		icon: Code,
		title: "Open Source, Fully Inspectable",
		description:
			"The entire platform is on GitHub. The agent code, the deployment logic, and the platform itself are all open. You can read every line, fork it, or run the whole stack yourself.",
	},
	{
		icon: Server,
		title: "Runs on Its Own VM",
		description:
			"Each agent gets a dedicated virtual machine with its own filesystem, database, and HTTPS endpoint. Nothing is shared between agents. Your code review agent processing sensitive diffs is completely isolated.",
	},
	{
		icon: Shield,
		title: "No API Keys from OpenAI or Anthropic",
		description:
			"Inference runs through LibertAI using open models: Qwen3 Coder for code analysis and GLM-4.7 for general reasoning. No usage tracking by third parties. No surprise bills.",
	},
	{
		icon: Clock,
		title: "Always On",
		description:
			"Once deployed, your agent runs around the clock with persistent memory, building context about your codebase over time. The PR that lands at 3am gets the same review quality as one submitted at 2pm.",
	},
	{
		icon: Zap,
		title: "Set Up in Under 5 Minutes",
		description:
			"LiberClaw maintains a pool of pre-warmed virtual machines, so there is no cold start. Create an agent, paste your skill, deploy. The agent is live and reviewing PRs in minutes.",
	},
];

const comparisonHeaders = ["LiberClaw", "CodeRabbit", "Qodo / PR-Agent", "Manual Review"];
const comparisonRows = [
	{ feature: "Open source", values: ["Yes, fully", "Partially", "yes", "N/A"] as const },
	{ feature: "Self-hosted", values: ["Yes (own VM per agent)", "No (SaaS only)", "Yes (self-managed)", "N/A"] as const },
	{ feature: "No API keys needed", values: ["yes", "no", "no", "N/A"] as const },
	{ feature: "Runs 24/7", values: ["Yes (managed VM)", "Yes (SaaS)", "Requires your own infra", "no"] as const },
	{ feature: "Setup time", values: ["Under 5 minutes", "Minutes", "Hours (self-hosted)", "N/A"] as const },
	{ feature: "VM isolation", values: ["yes", "no", "no", "N/A"] as const },
	{ feature: "Persistent memory", values: ["yes", "no", "no", "Yes (human memory)"] as const },
];

const faqs = [
	{
		question: "How do I automate code review with AI?",
		answer:
			"Deploy an AI pull request reviewer that watches your repository for new PRs. With LiberClaw, you create an agent, define a review skill in a markdown file, and deploy it to a dedicated VM. The agent checks for new PRs on a schedule, reads the diff, and posts review comments on GitHub. The entire setup takes under 5 minutes, and you do not need an API key from any provider.",
	},
	{
		question: "What is the best open source AI code review tool?",
		answer:
			"It depends on what you need. Qodo's PR-Agent is a solid open source option if you want to bring your own API keys and manage your own infrastructure. LiberClaw is a good fit if you want an open source AI code review agent that runs on a managed VM with open-model inference and no API keys. CodeRabbit is strong but not fully open source.",
	},
	{
		question: "Can I run AI code review without an API key?",
		answer:
			"Yes. LiberClaw agents use LibertAI for inference, which runs open models (Qwen3 Coder, GLM-4.7) on decentralized infrastructure. You can deploy a self-hosted AI code review agent without configuring API keys from OpenAI, Anthropic, or any other provider. The inference is included.",
	},
];

function LiberClawCodeReview() {
	return (
		<main className="flex flex-col min-h-screen">
			<LiberClawHero
				label="Code Review"
				title="Ship an AI Code Review Agent That Runs on Your Infrastructure"
				description="AI-generated code is flooding pull requests faster than your team can read them. LiberClaw lets you deploy an AI code review agent that runs on its own VM, uses open models, and reviews every PR around the clock. Fully open source, self-hosted, and ready in minutes."
			/>
			<HowItWorks
				label="Setup"
				title="How It Works"
				steps={steps}
			/>
			<FeatureGrid
				label="Why LiberClaw"
				title="Why LiberClaw"
				features={features}
				columns={3}
			/>
			<ComparisonTable
				title="How LiberClaw Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="CodeRabbit is polished and works well if you are comfortable with a SaaS model and proprietary inference. Qodo's PR-Agent is genuinely self-hostable, but you need to bring your own API keys and manage the infrastructure yourself. LiberClaw sits in the middle: open source with managed deployment, open-model inference, and no API keys to configure."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Deploy Your Code Review Agent"
				subtitle="The free tier includes 2 agents. No credit card required."
			/>
			<RelatedPages current="code-review" />
			<FooterSection />
		</main>
	);
}
