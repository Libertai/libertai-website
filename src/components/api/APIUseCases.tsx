import backgroundImage from "@/assets/background-right.png";
import backgroundImageMobile from "@/assets/background-right-mobile.png";
import { GenericAccordion } from "@/components/GenericAccordion.tsx";

const useCases = [
	{
		id: 1,
		question: "Financial Services",
		answer:
			"The platform can be used to develop AI-powered tools for fraud detection, credit risk assessment, and personalized financial planning. These applications require handling sensitive financial data, making the decentralized and privacy-focused infrastructure ideal and confidential environment.",
	},
	{
		id: 2,
		question: "Healthcare",
		answer:
			"Build AI solutions for medical diagnosis, treatment recommendations, and patient data analysis while maintaining strict privacy and compliance with healthcare regulations.",
	},
	{
		id: 3,
		question: "Legal Services",
		answer:
			"Develop AI tools for contract analysis, legal research, and document review with complete confidentiality and privacy protection for sensitive legal information.",
	},
	{
		id: 4,
		question: "Government and Public Sector",
		answer:
			"Create AI applications for public service optimization, policy analysis, and citizen services while ensuring data sovereignty and privacy compliance.",
	},
	{
		id: 5,
		question: "Enterprise Applications",
		answer:
			"Build custom AI solutions for internal business processes, customer service automation, and decision support systems with full control over data and infrastructure.",
	},
	{
		id: 6,
		question: "Cybersecurity",
		answer:
			"Develop AI-powered security tools for threat detection, vulnerability assessment, and incident response with enhanced privacy and security measures.",
	},
];

export function APIUseCases() {
	return (
		<section className="relative w-full bg-background py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			<div className="container mx-auto max-w-2xl relative z-10">
				{/* Section Header */}
				<div className="mb-20 space-y-6 text-center">
					<div className="text-sm text-white/60">[ Private and Confidential AI ]</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white">Use cases</h2>
				</div>

				{/* Use Cases Accordion */}
				<div className="mb-20">
					<GenericAccordion faqs={useCases} />
				</div>
			</div>
		</section>
	);
}
