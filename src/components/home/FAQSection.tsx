import { GenericAccordion } from "@/components/GenericAccordion.tsx";

const faqs = [
	{
		id: 1,
		question: "What is LibertAI?",
		answer:
			"LibertAI is a confidential AI platform fully decentralized that provides safe user-owned AI conversations. Chat or create privately, free from Big Tech tracking. Start at chat.libertai.io.",
	},
	{
		id: 2,
		question: "Are LibertAI privacy claims secure and verifiable?",
		answer:
			"Yes, your privacy is verifiable via Trusted Execution Environments (TEEs). We don’t have logs or access to your information, your account is yours only with blockchain security. All of our code is open source & auditable on GitHub.",
	},
	{
		id: 3,
		question: "How do I begin?",
		answer:
			"Start chatting for free at chat.libertai.io, no sign-up required! Developers can also use console.libertai.io to access the API.",
	},
	{
		id: 4,
		question: "What’s the price?",
		answer:
			"Basic access is free at chat.libertai.io. Premium features have dedicated pricing & require LibertAI native AI token $LTAI (20% discount); You can get credits with crypto (ETH, USDC), or pay by debit or credit card.",
	},
	{
		id: 5,
		question: "How can I get help or updates?",
		answer:
			"Contact support@libertai.io or join t.me/libertai. Follow @libertai_dai on X or subscribe at blog.libertai.io/subscribe.",
	},
];

export function FAQSection() {
	return (
		<section className="w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat ltai-bg-right">
			<div className="container mx-auto max-w-2xl">
				{/* Section Header */}
				<div className="mb-20 space-y-6 text-center">
					<div className="text-sm">[ FAQ ]</div>
					<h2>Frequently Asked Questions</h2>
				</div>

				{/* FAQ Accordion */}
				<div className="mb-20">
					<GenericAccordion faqs={faqs} />
				</div>

				{/* Footer */}
				<div className="text-center text-sm">
					Got more questions? Ask the team on{" "}
					<a href="https://t.me/libertai" className="text-[#EA7AF4] hover:underline">
						Telegram
					</a>{" "}
					or{" "}
					<a href="https://discord.gg/alephcloud" className="text-[#EA7AF4] hover:underline">
						Discord
					</a>
				</div>
			</div>
		</section>
	);
}
