import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";

export function GenlayerTestimonials() {
	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 py-20 md:py-32">
				<div className="text-center max-w-6xl mx-auto">
					{/* Subtitle */}
					<div className="text-sm mb-8">[ Judgment Evolved ]</div>

					{/* Main Title */}
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
						Scaling Industries with Private,
						<br />
						Decentralized AI Arbitration
					</h2>

					{/* Description */}
					<p className="text-lg max-w-4xl mx-auto mb-16 font-satoshi">
						By integrating LibertAI’s confidential inference, GenLayer scales arbitration across DeFi, prediction
						markets, DAOs, and gaming. With Aleph Cloud validators securing the protocol, enterprises and financial
						institutions gain a private, verifiable foundation for decentralized AI.
					</p>

					{/* Testimonials */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-5xl mx-auto">
						{/* Testimonial 1 */}
						<div className="text-left">
							<div className="flex items-center mb-4">
								<div className="text-white text-xl">Reza Rahemtola, Lead Developer at LibertAI</div>
							</div>
							<blockquote className="text-sm leading-relaxed">
								“GenLayer’s vision for decentralized arbitration aligns with our mission to empower AI freedom. By
								bringing confidential inference to validators, we’re enabling a new era of private, unbiased dispute
								resolution onchain.”
							</blockquote>
						</div>

						{/* Testimonial 2 */}
						<div className="text-left">
							<div className="flex items-center mb-4">
								<div className="text-white text-xl">Jonathan Schemoul, CEO at Aleph Cloud</div>
							</div>
							<blockquote className="text-sm leading-relaxed">
								“Running a GenLayer validator showcases Aleph Cloud’s ability to power secure, scalable AI
								infrastructure. We’re thrilled to support GenLayer and LibertAI in building a decentralized future where
								privacy is non-negotiable.”
							</blockquote>
						</div>
					</div>

					{/* Learn more button */}
					<a href="https://genlayer.com" target="_blank">
						<Button variant="outline" size="lg" className="text-white border-white">
							<span>Learn more</span>
							<ExternalLink />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
