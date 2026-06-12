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
import { Cpu, FileSearch, Lock, Network, Plug, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/confidential-ai")({
	component: ConfidentialAI,
});

const steps = [
	{
		number: 1,
		title: "The Model Loads Inside a Hardware Enclave",
		description:
			"The inference server starts up inside a Trusted Execution Environment, a region of the machine that the CPU isolates from everything else. The enclave's memory is encrypted in hardware, so even the host operator running the physical node cannot read what is loaded into it.",
	},
	{
		number: 2,
		title: "Remote Attestation Proves What Is Running",
		description:
			"Before any data is sent, the enclave produces a signed attestation: a hardware-backed measurement of the exact code running inside it. You can check this measurement against the open-source build to confirm you are talking to the real, unmodified server and not something that has been swapped out.",
	},
	{
		number: 3,
		title: "Your Prompt Enters Over an Encrypted Channel",
		description:
			"The connection is established directly into the enclave, so your prompt is encrypted in transit and only decrypted inside the protected memory. The data is never exposed in plaintext to the operating system, the hypervisor, or the node operator along the way.",
	},
	{
		number: 4,
		title: "Inference Runs Where No One Can Read It",
		description:
			"The model processes your prompt entirely within the encrypted enclave and returns the response over the same protected channel. Neither the node operator hosting the hardware nor LibertAI itself can inspect the prompt, the response, or the activations in between.",
	},
];

const features = [
	{
		icon: Lock,
		title: "Hardware-Enforced Isolation",
		description:
			"Privacy is enforced by the CPU, not by a setting you have to trust someone to honor. The enclave's memory is encrypted in hardware, so the host operator cannot inspect the data, the model weights, or anything in between while inference is running.",
	},
	{
		icon: ShieldCheck,
		title: "Remote Attestation",
		description:
			"The enclave can cryptographically prove which code it is running before you send anything to it. You verify a hardware-signed measurement instead of taking a claim on faith, which turns 'we don't look at your data' into something you can actually check.",
	},
	{
		icon: FileSearch,
		title: "No Logging, No Training on Your Data",
		description:
			"Prompts and responses are not logged and are never used to train models. There is no analytics pipeline quietly recording your inputs and no dataset being built from your conversations on the side.",
	},
	{
		icon: Cpu,
		title: "Open-Source, Auditable Stack",
		description:
			"The entire serving stack is open source at github.com/libertai. The attestation you receive references a build you can read, so the privacy claims are verifiable against actual code rather than against a marketing page.",
	},
	{
		icon: Network,
		title: "Decentralized Nodes",
		description:
			"Inference runs across Aleph Cloud's decentralized network rather than a single company's data center. There is no central operator holding all the data, and no single entity to subpoena or breach to get at your prompts.",
	},
	{
		icon: Plug,
		title: "Standard OpenAI-Compatible API",
		description:
			"You get confidential inference through a normal OpenAI-compatible API. Point your existing client at https://api.libertai.io/v1, keep your code, and your requests run inside a TEE with no new SDK to learn.",
	},
];

const comparisonHeaders = ["TEE inference (LibertAI)", "Standard cloud AI", "On-prem GPU"];
const comparisonRows = [
	{ feature: "Operator can read your prompts", values: ["no", "yes", "no"] as const },
	{ feature: "Privacy is verifiable (attestation)", values: ["yes", "no", "partial"] as const },
	{ feature: "Works without buying hardware", values: ["yes", "yes", "no"] as const },
	{ feature: "No data retention", values: ["yes", "partial", "yes"] as const },
	{ feature: "Open-source serving stack", values: ["yes", "no", "partial"] as const },
	{ feature: "Cost model", values: ["Pay per token", "Pay per token", "Hardware + ops"] as const },
];

const faqs = [
	{
		id: 1,
		question: "What is confidential AI?",
		answer:
			"Confidential AI is inference that protects your data while it is being processed, not just while it is stored or in transit. With LibertAI, the model runs inside a Trusted Execution Environment, a hardware-isolated enclave with encrypted memory, so the data stays private even from the operator running the machine. The key difference from ordinary 'private' AI is that the privacy is verifiable through remote attestation rather than promised in a policy.",
	},
	{
		id: 2,
		question: "What is a TEE in AI inference?",
		answer:
			"A TEE, or Trusted Execution Environment, is a hardware-isolated region of a CPU where code runs with its memory encrypted and shielded from the rest of the system. In AI inference, the model and your prompt are loaded into this enclave, so the host operating system, the hypervisor, and the node operator cannot read them while the model is computing. The enclave can also produce a remote attestation, a signed proof of exactly which code is running inside it.",
	},
	{
		id: 3,
		question: "How is this different from a privacy policy promise?",
		answer:
			"A privacy policy is a statement of intent: you trust that the provider will not look at or retain your data. Confidential AI replaces that trust with verification. Because the inference runs in a TEE, the operator is technically unable to read your prompt, and remote attestation lets you confirm which code is running before you send anything. Instead of trusting a document, you verify the enclave.",
	},
	{
		id: 4,
		question: "Can I verify what code is running?",
		answer:
			"Yes. The enclave produces a hardware-signed attestation, a measurement of the exact code loaded inside it. Because the entire LibertAI serving stack is open source at github.com/libertai, you can check that measurement against the published build and confirm you are talking to the real, unmodified server rather than something that has been altered.",
	},
	{
		id: 5,
		question: "Which models run in a TEE?",
		answer:
			"Hermes 3 8B is served inside a TEE today. The platform also serves a range of larger open models, including Qwen3.6-35B-A3B, Qwen3.6-27B, Gemma 4 31B with 262K context, DeepSeek V4 Flash, Qwen3 Coder, GLM-4.7, and Qwen3.5 122B, all with no logging and no training on user data.",
	},
];

function ConfidentialAI() {
	return (
		<main className="flex flex-col min-h-screen">
			<SEO
				title="Confidential AI — Verifiable Private Inference"
				description="Confidential AI runs inside Trusted Execution Environments so your prompts stay private even from the operator. Verify the enclave with remote attestation, don't just trust a policy."
				path="/confidential-ai"
			/>
			<LandingHero
				label="Confidential Computing"
				title="Confidential AI: Privacy You Can Verify, Not Just Trust"
				description="Most 'private' AI asks you to trust a privacy policy. LibertAI runs inference inside Trusted Execution Environments, hardware enclaves where memory is encrypted and the host operator cannot read what runs inside. Remote attestation lets you cryptographically verify the code before you send a single prompt."
				ctaText="Try the API"
				ctaLink="https://console.libertai.io"
			/>
			<HowItWorks label="Under the Hood" title="How TEE Inference Works" steps={steps} />
			<FeatureGrid label="Why It's Different" title="What Makes It Confidential" features={features} columns={3} />
			<ComparisonTable
				title="How Confidential Inference Compares"
				headers={comparisonHeaders}
				rows={comparisonRows}
				footnote="One honest caveat: a TEE protects your data in use, but it does not eliminate trust entirely. You still rely on the hardware vendor's enclave design and attestation roots being sound. That is precisely why the other properties matter as complements: an open-source serving stack means the code inside the enclave is auditable, and decentralization means there is no single operator who has to be trusted with everything. The goal is to shrink what you have to trust to something you can actually inspect, not to claim it disappears."
			/>
			<FAQSection faqs={faqs} />
			<CTASection
				title="Run Your First Confidential Inference"
				subtitle="OpenAI-compatible, pay per token, and private by hardware. Pay with crypto or card; the LTAI token gives a 20% discount."
				appLink="https://console.libertai.io"
				appText="Get Started"
				githubLink="https://docs.libertai.io"
				githubText="Read the Docs"
			/>
			<LandingRelated
				current="confidential-ai"
				related={["decentralized-llm", "private-chatgpt-alternative", "openai-api-alternative"]}
			/>
			<FooterSection />
		</main>
	);
}
