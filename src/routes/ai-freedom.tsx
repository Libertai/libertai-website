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
import { Ban, Eye, FileX, ShieldCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/ai-freedom")({
	component: AIFreedom,
});

const features = [
	{
		icon: FileX,
		title: "Models Deprecated Under You",
		description:
			"A provider retires the model your workflow was tuned around, and the replacement behaves differently. Prompts that worked yesterday return worse answers today. When the model lives only on someone else's servers, you have no say in when it disappears and no way to keep running the version you depended on.",
	},
	{
		icon: Eye,
		title: "Prompts Logged and Subpoenable",
		description:
			"What you type is stored on infrastructure you do not control. Even with good intentions, logged prompts can be retained, analyzed, breached, or compelled by a subpoena. The only prompt that cannot leak is one that was never readable by the operator in the first place.",
	},
	{
		icon: FileX,
		title: "Terms Changed Retroactively",
		description:
			"The terms you agreed to are not the terms you keep. Acceptable-use policies, data-handling clauses, and retention rules get rewritten, and the new version applies to the work you already built. You adapt to each change because the alternative is losing access entirely.",
	},
	{
		icon: Ban,
		title: "Accounts Banned Without Appeal",
		description:
			"A flagged input, an automated misjudgment, or a policy you did not know existed can suspend your account. When your work depends on a single login, an opaque ban can cut off a tool you build a business on, often with no human to appeal to.",
	},
	{
		icon: TrendingUp,
		title: "Prices Raised Once You're Locked In",
		description:
			"Onboarding is cheap; switching is expensive. Once your prompts, integrations, and habits are wired into one provider's API, a price increase is not a choice you can easily walk away from. Lock-in is what makes the increase stick.",
	},
	{
		icon: ShieldCheck,
		title: "One Company's Values Applied to Your Work",
		description:
			"A single vendor decides what the model will and will not discuss, and that judgment is baked into every answer you get. Reasonable for some users, wrong for others, but either way it is not your call. The model reflects the operator's values, not yours.",
	},
];

const steps = [
	{
		number: 1,
		title: "Open-Weight Models",
		description:
			"The freedom stack starts with models whose weights are public: Qwen3.6, Gemma 4 31B, DeepSeek V4 Flash, Hermes 3 8B, GLM-4.7, and Qwen3.5 122B. Because the weights are open, no single company can deprecate them out from under you. If a model serves you well, it can keep running anywhere, on LibertAI or on your own hardware, long after a vendor would have retired it. This is what protects you from silent model deprecation and lock-in.",
	},
	{
		number: 2,
		title: "Decentralized Infrastructure",
		description:
			"Those models run on Aleph Cloud, a decentralized network with no single operator. There is no central company that owns the servers, holds the logs, or flips one switch to cut you off. Removing the single point of control removes the single point of failure, the single account to ban, and the single entity to subpoena or breach.",
	},
	{
		number: 3,
		title: "Verifiable Privacy",
		description:
			"Inference runs inside Trusted Execution Environments, hardware enclaves with encrypted memory that the host operator cannot read. Remote attestation lets you cryptographically verify which code is running before you send a prompt. This turns 'we don't look at your data' from a promise in a policy into something you can check, which is what protects you from logging and surveillance.",
	},
	{
		number: 4,
		title: "Open Code and Community Governance",
		description:
			"The entire platform is open source at github.com/libertai, so the privacy and behavior claims are auditable against real code rather than a marketing page. Direction is set through community governance via the LTAI token rather than by one company's roadmap. This is what protects you from terms changed retroactively and from one vendor's values being applied to your work.",
	},
];

const comparisonHeaders = ["User-owned AI (LibertAI)", "Centralized AI"];
const comparisonRows = [
	{
		feature: "Who controls model availability",
		values: ["You — open weights run anywhere", "The provider"] as const,
	},
	{ feature: "Who can read your data", values: ["No one — TEE-isolated", "The operator"] as const },
	{ feature: "Can you audit the code", values: ["yes", "no"] as const },
	{
		feature: "Can you exit with your workflows intact",
		values: ["Yes — open models run anywhere", "no"] as const,
	},
	{ feature: "Payment without identity", values: ["Yes — crypto or card, no account", "no"] as const },
	{ feature: "Governance", values: ["Community via LTAI token", "One company"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is AI freedom?",
		answer:
			"AI freedom is the ability to use AI without depending on a single company that can take it away, read it, or change the rules on you. Concretely, it means open-weight models you can run anywhere, infrastructure with no single operator, privacy you can verify instead of trust, open-source code you can audit, payment that does not require handing over your identity, and governance that is not set by one vendor's roadmap. LibertAI assembles these into one stack so that no single party holds the off switch.",
	},
	{
		id: 2,
		question: "Why does it matter who runs the AI model?",
		answer:
			"Whoever runs the model controls what it will discuss, what happens to your prompts, when the model is retired, and what it costs once you depend on it. When one company holds all of that, your access exists at their discretion, and their values, policies, and business decisions are applied to your work. Running on open models and decentralized infrastructure spreads that control out, so no single operator can read your data, ban your account, or deprecate the model you rely on.",
	},
	{
		id: 3,
		question: "What happens when a provider deprecates a model you depend on?",
		answer:
			"On a closed platform, a deprecation is final: the weights live only on the provider's servers, so when they retire a model, the prompts and behavior you tuned around it stop working and you are pushed onto a replacement that responds differently. With open-weight models, deprecation is not the same threat. The weights are public, so a model that works for you can keep running on LibertAI or on your own hardware regardless of any one company's roadmap. You decide when to move on, not the vendor.",
	},
	{
		id: 4,
		question: "How does decentralization protect AI access?",
		answer:
			"Centralized AI has a single point of control: one company owns the servers, holds the logs, and can suspend an account or change terms unilaterally. LibertAI runs inference across Aleph Cloud's decentralized network, where there is no single operator to ban you, no central log store to breach or subpoena, and no one switch to flip. Removing the single point of control removes the single point of failure, which is what keeps your access from depending on one company's permission.",
	},
	{
		id: 5,
		question: "What is user-owned AI?",
		answer:
			"User-owned AI means the parts that matter belong to you rather than to a vendor: the models are open-weight and run anywhere, the privacy is enforced by hardware and verifiable through attestation, the code is open source and auditable, and the direction is set by community governance through the LTAI token. The practical test is whether you have an exit. With user-owned AI you can leave with your workflows intact because the models are not trapped on one company's servers.",
	},
];

function AIFreedom() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="AI Freedom — User-Owned, Decentralized AI"
				description="AI freedom means user-owned, decentralized AI that nobody can take away: open-weight models, verifiable privacy, no lock-in, no surveillance, and an exit that is always yours."
				path="/ai-freedom"
			/>
			<LandingHero
				label="Manifesto"
				title="AI Freedom Means Nobody Can Take Your AI Away"
				description="Centralized AI puts your tools at one company's discretion: lock-in once your workflows depend on their API, prompts logged on servers you do not control, models deprecated under you without warning, and policies that change whenever the business decides. AI freedom is the opposite arrangement, where no single party holds the off switch. LibertAI builds the stack that makes it real."
				ctaText="Start Free"
				ctaLink="https://chat.libertai.io"
			/>
			<FeatureGrid label="The Problem" title="What Centralized AI Costs You" features={features} columns={3} />
			<HowItWorks label="The Answer" title="The Freedom Stack" steps={steps} />
			<ComparisonTable
				title="User-Owned AI vs. Centralized AI"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="An honest caveat: centralized providers offer real convenience and, often, the latest frontier models, and for some work that trade is worth making. The point of this page is not that those tools are useless. It is to be clear about what you give up for the convenience: control over when your model disappears, visibility into what happens to your prompts, and the ability to leave. The question worth asking is not which model scores highest today, but whether you have an exit when the terms change."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Own Your AI"
				subtitle="Free private chat with no sign-up. Pay with crypto or card, no account required; the LTAI token gives a 20% discount on premium features."
				appLink="https://chat.libertai.io"
				appText="Start Free"
				githubLink="https://github.com/libertai"
				githubText="Read the Code"
			/>
			<LandingRelated current="ai-freedom" related={["uncensored-ai", "decentralized-llm", "open-source-ai"]} />
			<FooterSection />
		</main>
	);
}
