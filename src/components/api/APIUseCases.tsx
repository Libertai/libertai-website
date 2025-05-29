import backgroundImage from "@/assets/background-right.png";
import backgroundImageMobile from "@/assets/background-right-mobile.png";
import { GenericAccordion } from "@/components/GenericAccordion.tsx";

const useCases = [
	{
		id: 1,
		question: "Financial Services",
		answer:
			"The platform can be used to develop AI-powered tools for fraud detection, credit risk assessment, and personalized financial planning. These applications require handling sensitive financial data, and LibertAI ensures that the AI models operate in a secure and confidential environment.",
	},
	{
		id: 2,
		question: "Healthcare",
		answer:
			"In the healthcare sector, LibertAI can be utilized to create AI-driven tools for medical diagnosis, drug discovery, and personalized treatment plans. These applications often involve handling highly sensitive patient data, and LibertAI provides the necessary security measures to protect this information.",
	},
	{
		id: 3,
		question: "Legal Services",
		answer:
			"LibertAI can be employed to build AI-powered tools for legal research, contract analysis, and case prediction. These applications require access to confidential legal documents and case data, and LibertAI ensures that the AI models operate in a secure and compliant manner.",
	},
	{
		id: 4,
		question: "Government and Public Sector",
		answer:
			"LibertAI can be used to develop AI-based tools for public safety, national security, and policy analysis. These applications often involve handling sensitive government data, and LibertAI provides the necessary security and privacy guarantees to protect this information.",
	},
	{
		id: 5,
		question: "Enterprise Applications",
		answer:
			"Within enterprises, LibertAI can be utilized to create AI-driven tools for HR analytics, customer sentiment analysis, and supply chain optimization. These applications involve handling proprietary company data, and LibertAI ensures that the AI models operate in a secure and confidential environment.",
	},
	{
		id: 6,
		question: "Cybersecurity",
		answer:
			"LibertAI can be employed to develop AI-powered tools for threat detection, intrusion prevention, and vulnerability assessment. These applications require access to sensitive network and system data, and LibertAI provides the necessary security measures to protect this information.",
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
