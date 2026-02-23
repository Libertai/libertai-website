interface Step {
	number: number;
	title: string;
	description: string;
	code?: string;
}

interface HowItWorksProps {
	label?: string;
	title?: string;
	subtitle?: string;
	steps: Step[];
}

export function HowItWorks({
	label = "How It Works",
	title = "How It Works",
	subtitle,
	steps,
}: HowItWorksProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16">
					<div className="text-sm mb-4">[ {label} ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg mt-6 max-w-3xl font-satoshi">{subtitle}</p>
					)}
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{steps.map((step) => (
						<div key={step.number} className="space-y-4">
							<div className="flex items-start gap-4">
								<span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EA7AF4]/10 border border-[#EA7AF4]/30 flex items-center justify-center text-[#EA7AF4] font-bold text-sm">
									{step.number}
								</span>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-white">{step.title}</h3>
									<p className="text-sm font-satoshi">{step.description}</p>
								</div>
							</div>
							{step.code && (
								<div className="ml-14 bg-white/5 rounded-lg p-4 overflow-x-auto">
									<pre className="text-xs text-white/80 font-mono whitespace-pre-wrap">{step.code}</pre>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
