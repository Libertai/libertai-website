import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
	id: number;
	question: string;
	answer: string;
}

interface GenericAccordionProps {
	faqs: FAQItem[];
}

export function GenericAccordion({ faqs }: GenericAccordionProps) {
	return (
		<Accordion type="single" collapsible className="space-y-3">
			{faqs.map((faq) => (
				<AccordionItem
					key={faq.id}
					value={`item-${faq.id}`}
					className="bg-transparent border border-foreground/20 rounded-2xl px-6 py-2 data-[state=open]:bg-black/5 data-[state=open]:border-white data-[state=open]:border-[1px]"
				>
					<AccordionTrigger className="text-left text-lg text-white hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
						{faq.question}
					</AccordionTrigger>
					<AccordionContent className="text-sm leading-relaxed pb-6 text-white/80">{faq.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
