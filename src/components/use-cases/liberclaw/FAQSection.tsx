import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion.tsx";

interface FAQ {
	question: string;
	answer: string;
}

interface FAQSectionProps {
	label?: string;
	title?: string;
	faqs: FAQ[];
}

export function FAQSection({
	label = "FAQ",
	title = "Frequently Asked Questions",
	faqs,
}: FAQSectionProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16">
					<div className="text-sm mb-4">[ {label} ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						{title}
					</h2>
				</div>

				{/* Accordion */}
				<div className="max-w-3xl">
					<Accordion type="single" collapsible>
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`faq-${index}`}>
								<AccordionTrigger className="text-white text-base font-medium text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="font-satoshi">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
