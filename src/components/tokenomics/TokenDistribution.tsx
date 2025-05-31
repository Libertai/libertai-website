import { Coins, Gift, Shield, Users } from "lucide-react";
import { type ReactNode, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

interface DistributionItem {
	label: string;
	amount: string;
	percentage: string;
	icon: ReactNode;
	numericValue: number;
}

export function TokenDistribution() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

	const distributionData: DistributionItem[] = useMemo(
		() => [
			{
				label: "Raise",
				amount: "2M",
				percentage: "(3%)",
				icon: <Coins className="w-6 h-6" />,
				numericValue: 2,
			},
			{
				label: "Airdrop",
				amount: "21M",
				percentage: "(35%)",
				icon: <Gift className="w-6 h-6" />,
				numericValue: 21,
			},
			{
				label: "Reserves",
				amount: "25M",
				percentage: "(42%)",
				icon: <Shield className="w-6 h-6" />,
				numericValue: 25,
			},
			{
				label: "Team",
				amount: "12M",
				percentage: "(20%)",
				icon: <Users className="w-6 h-6" />,
				numericValue: 12,
			},
		],
		[],
	);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate numbers
						distributionData.forEach((item, index) => {
							const counter = { value: 0 };
							const ref = numberRefs.current[index];
							if (ref) {
								gsap.to(counter, {
									value: item.numericValue,
									duration: 2,
									ease: "power2.out",
									delay: index * 0.1,
									onUpdate: () => {
										if (ref) {
											ref.textContent = `${Math.round(counter.value)}M`;
										}
									},
								});
							}
						});

						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [distributionData]);

	return (
		<section ref={sectionRef} className="w-full bg-background py-20 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ Breaking down the numbers ]</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white">Overall Total Supply and Distribution</h2>
					<p className="text-lg max-w-3xl">
						The LTAI token supply will is limited to 60 million (60,000,000) with initial allocations for the following
						ecosystem contributors:
					</p>
				</div>

				{/* Distribution Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
					{distributionData.map((item, index) => (
						<div key={item.label} className="text-center space-y-6">
							<div className="flex items-center justify-center space-x-3">
								<div className="text-[#EA7AF4]">{item.icon}</div>
								<h3 className="text-2xl font-satoshi text-white">{item.label}</h3>
							</div>

							<div
								ref={(el) => (numberRefs.current[index] = el) as never}
								className="text-6xl md:text-7xl font-bold text-white opacity-80"
							>
								0M
							</div>
							<div className="text-2xl text-satoshi">{item.percentage}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
