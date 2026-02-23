import { GenericAccordion } from "@/components/GenericAccordion.tsx";

interface FAQ {
	id: number;
	question: string;
	answer: string;
}

interface FAQSectionProps {
	label?: string;
	title?: string;
	faqs: FAQ[];
}

export function FAQSection({ label = "FAQ", title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto max-w-2xl">
				{/* Header */}
				<div className="mb-20 space-y-6 text-center">
					<div className="text-sm">[ {label} ]</div>
					<h2>{title}</h2>
				</div>

				{/* Accordion */}
				<div>
					<GenericAccordion faqs={faqs} />
				</div>
			</div>
		</section>
	);
}
