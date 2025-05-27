import { GenericAccordion } from "@/components/GenericAccordion.tsx";

const faqs = [
	{
		id: 1,
		question: "Why choose LibertAI over other AI platforms?",
		answer:
			"LibertAI is decentralized, open-source, and privacy-first. Aleph Cloud’s distributed encrypted computing ensures no data logging or training, unlike walled gardens like ChatGPT or Claude.",
	},
	{
		id: 2,
		question: "How do I create AI characters?",
		answer:
			"Shape personalities, backstories, and dialogues in our interface. Use models like Nous Hermes 3 for creative role-play, all secured on Aleph Cloud’s network.",
	},
	{
		id: 3,
		question: "What's the deal with context length?",
		answer: "Up to 32,768 tokens, handling epic conversations, complex code, and detailed character interactions.",
	},
	{
		id: 4,
		question: "Where is my data processed?",
		answer:
			"On Aleph Cloud’s decentralized network with distributed encrypted computing—safe, private, and untouchable.",
	},
	{
		id: 5,
		question: "When is image generation dropping?",
		answer: "Image generation and multi-modal inference will be live in Q4 2025.",
	},
];

export function FAQSection() {
	return (
		<section className="w-full bg-background py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat ltai-bg-right">
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
