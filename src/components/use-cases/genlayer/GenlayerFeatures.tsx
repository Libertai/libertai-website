import sectionBg from "@/assets/use-cases/genlayer/section-bg.png";
import sectionBgMobile from "@/assets/use-cases/genlayer/section-bg-mobile.png";
import { BotIcon, Cpu, TrendingUp } from "lucide-react";

export function GenlayerFeatures() {
	return (
		<section className="relative w-full min-h-screen flex bg-background overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<img
					src={sectionBg}
					alt="GenLayer features background"
					className="absolute h-full w-full object-cover hidden md:block"
				/>
				<div className="md:hidden absolute inset-0">
					<img
						src={sectionBgMobile}
						alt="GenLayer features background mobile"
						className="absolute h-full w-full object-cover"
					/>
					{/* Dark gradient overlay for better text readability */}
					<div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
				</div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center md:items-start md:justify-start min-h-screen py-20 md:pt-32">
				<div className="w-full max-w-2xl md:max-w-xl lg:max-w-2xl">
					{/* Header */}
					<div className="mb-16">
						<div className="text-sm font-mono mb-4">[ Trustless Arbitration, Verifiable Decisions ]</div>
						<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
							Private Inference, Public Trust
						</h2>
						<p className="text-lg mt-6 max-w-3xl font-satoshi">
							LibertAI provides confidential AI inference for GenLayer, powered by Aleph Cloud’s decentralized compute.
							Aleph Cloud also validates the GenLayer protocol, creating a scalable ecosystem where privacy and
							verifiability redefine decentralized arbitration.
						</p>
					</div>

					{/* Feature blocks */}
					<div className="grid grid-cols-1 gap-8 md:gap-15">
						{/* Growth */}
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<BotIcon className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
								<h3 className="text-2xl font-bold text-white">Growth</h3>
							</div>
							<p className="text-sm">
								With Aleph Cloud and LibertAI’s token model, GenLayer accelerates adoption and growth, positioning as a
								leader in onchain arbitration, with expansion into new blockchains and industries on the horizon.
							</p>
						</div>

						{/* Scalability */}
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<TrendingUp className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
								<h3 className="text-2xl font-bold text-white">Scalability</h3>
							</div>
							<p className="text-sm">
								LibertAI’s confidential inference lets GenLayer scale its arbitration protocol into high value use cases
								such as prediction markets, DAOs, and gaming.
							</p>
						</div>

						{/* Validators */}
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<Cpu className="w-6 h-6 text-[#EA7AF4] flex-shrink-0" />
								<h3 className="text-2xl font-bold text-white">Validators</h3>
							</div>
							<p className="text-sm">
								With LibertAI’s TEE-based AI inference on Aleph Cloud, GenLayer validators gain unmatched privacy and
								verifiable compute, ideal for finance and enterprise adoption.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
