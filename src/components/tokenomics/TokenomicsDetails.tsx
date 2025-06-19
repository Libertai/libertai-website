import { Coins, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTokenData } from "@/hooks/useTokenData";

interface TokenData {
	label: string;
	value: string;
	numericValue: number;
	prefix?: string;
	suffix?: string;
}

interface CoinGeckoResponse {
	market_data: {
		current_price: {
			usd: number;
		};
		market_cap: {
			usd: number;
		};
		total_supply: number;
	};
}

export function TokenomicsDetails() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const priceRef = useRef<HTMLDivElement>(null);
	const marketCapRef = useRef<HTMLDivElement>(null);
	const totalSupplyRef = useRef<HTMLDivElement>(null);
	const priceRefMobile = useRef<HTMLDivElement>(null);
	const marketCapRefMobile = useRef<HTMLDivElement>(null);
	const totalSupplyRefMobile = useRef<HTMLDivElement>(null);
	const barsRef = useRef<(HTMLDivElement | null)[]>([]);
	const barsMobileRef = useRef<(HTMLDivElement | null)[]>([]);
	const hasAnimatedBars = useRef(false);

	const { poolsStats } = useTokenData();

	const [tokenData, setTokenData] = useState<TokenData[]>([
		{
			label: "Price per Token",
			value: "$0.00",
			numericValue: 0,
			prefix: "$",
		},
		{
			label: "Market Cap",
			value: "$0.0M",
			numericValue: 0,
			suffix: "M",
			prefix: "$",
		},
		{
			label: "Total Supply",
			value: "22.2M",
			numericValue: 22.2,
			suffix: "M",
		},
	]);

	const fetchTokenData = async () => {
		try {
			const response = await fetch(
				"https://api.coingecko.com/api/v3/coins/libertai?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
			);
			const data: CoinGeckoResponse = await response.json();

			if (data.market_data) {
				const price = data.market_data.current_price.usd;
				const marketCap = data.market_data.market_cap.usd;
				const totalSupply = data.market_data.total_supply;
				const marketCapInMillions = marketCap / 1000000;
				const totalSupplyInMillions = totalSupply / 1000000;

				setTokenData((prev) => [
					{
						...prev[0],
						value: `$${price.toFixed(2)}`,
						numericValue: price,
					},
					{
						...prev[1],
						value: `$${marketCapInMillions.toFixed(1)}M`,
						numericValue: marketCapInMillions,
					},
					{
						...prev[2],
						value: `${totalSupplyInMillions.toFixed(1)}M`,
						numericValue: totalSupplyInMillions,
					},
				]);
			}
		} catch (error) {
			console.error("Failed to fetch token data:", error);
		}
	};

	useEffect(() => {
		fetchTokenData().then();
	}, []);

	useEffect(() => {
		// Only animate if we have complete data and haven't animated yet
		if (poolsStats.length === 0 || hasAnimatedBars.current) return;

		// Check if all poolsStats have valid data (not loading)
		const hasCompleteData = poolsStats.every((stat) => stat.totalPercentage > 0);
		if (!hasCompleteData) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimatedBars.current) {
						hasAnimatedBars.current = true;

						// Animate bars
						barsRef.current.forEach((bar, index) => {
							if (bar && poolsStats[index]) {
								gsap.fromTo(
									bar,
									{ width: "0%" },
									{
										width: `${poolsStats[index].totalPercentage}%`,
										duration: 2,
										delay: index * 0.1,
										ease: "power2.out",
									},
								);
							}
						});

						barsMobileRef.current.forEach((bar, index) => {
							if (bar && poolsStats[index]) {
								gsap.fromTo(
									bar,
									{ width: "0%" },
									{
										width: `${poolsStats[index].totalPercentage}%`,
										duration: 2,
										delay: index * 0.1,
										ease: "power2.out",
									},
								);
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
	}, [poolsStats]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate numbers
						const priceCounter = { value: 0 };
						if (priceRef.current) {
							gsap.to(priceCounter, {
								value: tokenData[0].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (priceRef.current) {
										priceRef.current.textContent = `${tokenData[0].prefix || ""}${priceCounter.value.toFixed(2)}`;
									}
								},
							});
						}

						const marketCapCounter = { value: 0 };
						if (marketCapRef.current) {
							gsap.to(marketCapCounter, {
								value: tokenData[1].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (marketCapRef.current) {
										marketCapRef.current.textContent = `${tokenData[1].prefix || ""}${marketCapCounter.value.toFixed(1)}${tokenData[1].suffix || ""}`;
									}
								},
							});
						}

						const totalSupplyCounter = { value: 0 };
						if (totalSupplyRef.current) {
							gsap.to(totalSupplyCounter, {
								value: tokenData[2].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (totalSupplyRef.current) {
										totalSupplyRef.current.textContent = `${totalSupplyCounter.value.toFixed(1)}${tokenData[2].suffix || ""}`;
									}
								},
							});
						}

						// Mobile animations
						const priceCounterMobile = { value: 0 };
						if (priceRefMobile.current) {
							gsap.to(priceCounterMobile, {
								value: tokenData[0].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (priceRefMobile.current) {
										priceRefMobile.current.textContent = `${tokenData[0].prefix || ""}${priceCounterMobile.value.toFixed(2)}`;
									}
								},
							});
						}

						const marketCapCounterMobile = { value: 0 };
						if (marketCapRefMobile.current) {
							gsap.to(marketCapCounterMobile, {
								value: tokenData[1].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (marketCapRefMobile.current) {
										marketCapRefMobile.current.textContent = `${tokenData[1].prefix || ""}${marketCapCounterMobile.value.toFixed(1)}${tokenData[1].suffix || ""}`;
									}
								},
							});
						}

						const totalSupplyCounterMobile = { value: 0 };
						if (totalSupplyRefMobile.current) {
							gsap.to(totalSupplyCounterMobile, {
								value: tokenData[2].numericValue,
								duration: 2,
								ease: "power2.out",
								onUpdate: () => {
									if (totalSupplyRefMobile.current) {
										totalSupplyRefMobile.current.textContent = `${totalSupplyCounterMobile.value.toFixed(1)}${tokenData[2].suffix || ""}`;
									}
								},
							});
						}

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
	}, [tokenData]);

	return (
		<section ref={sectionRef} className="w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ Secrets kept Private ]</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white">LTAI is Your Ticket to Freedom</h2>
					<p className="text-lg">
						The $LTAI token powers decentralized AI computations for private AI inference on LibertAI's platform.
					</p>
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
					{/* Left side - Token Stats */}
					<div className="col-span-7 grid grid-cols-2 gap-8">
						{/* Price per Token - Large */}
						<div className="col-span-2 space-y-4">
							<div className="flex items-center gap-3">
								<Coins className="w-6 h-6 text-[#EA7AF4]" />
								<h3 className="text-lg font-satoshi">{tokenData[0].label}</h3>
							</div>
							<div ref={priceRef} className="text-7xl lg:text-8xl font-bold">
								{tokenData[0].value}
							</div>
						</div>

						{/* Market Cap and Total Supply */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Coins className="w-6 h-6 text-[#EA7AF4]" />
								<h3 className="text-lg font-satoshi">{tokenData[1].label}</h3>
							</div>
							<div ref={marketCapRef} className="text-4xl font-bold">
								{tokenData[1].value}
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Coins className="w-6 h-6 text-[#EA7AF4]" />
								<h3 className="text-lg font-satoshi">{tokenData[2].label}</h3>
							</div>
							<div ref={totalSupplyRef} className="text-4xl font-bold">
								{tokenData[2].value}
							</div>
						</div>

						{/* Action buttons */}
						<div className="col-span-2 flex gap-4 mt-8 font-satoshi text-white">
							<a
								href="https://app.uniswap.org/explore/tokens/base/0xf8b1b47aa748f5c7b5d0e80c726a843913eb573a?chain=base"
								target="_blank"
							>
								<Button variant="outline" size="lg">
									<span>Buy on Uniswap</span>
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
							<a href="https://jup.ag/swap/SOL-mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u" target="_blank">
								<Button variant="outline" size="lg">
									<span>Buy on Jupiter</span>
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
							<a href="https://www.coingecko.com/en/coins/libertai" target="_blank">
								<Button variant="outline" size="lg">
									<span>Coingecko</span>
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
						</div>
					</div>

					{/* Right side - Live Circulating Supply */}
					<div className="col-span-5 space-y-6">
						<h3 className="text-2xl font-bold text-white">Live Circulating Supply</h3>
						<div className="space-y-3">
							{poolsStats.map((item, index) => (
								<div key={item.name} className="flex justify-between items-center text-sm">
									<span className="font-satoshi w-20">{item.prettyName}</span>
									<div className="flex items-center gap-3 flex-1">
										<div className="flex-1 bg-white/10 rounded-full h-1">
											<div
												ref={(el) => (barsRef.current[index] = el) as never}
												className="h-1 rounded-full"
												style={{ backgroundColor: item.color, width: "0%" }}
											/>
										</div>
										<span className="font-mono w-12 text-right">{item.prettyDistributed}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Mobile Layout */}
				<div className="md:hidden space-y-12">
					{/* Token Stats */}
					<div className="grid grid-cols-1 gap-8">
						{tokenData.map((item, index) => (
							<div key={item.label} className="space-y-4">
								<div className="flex items-center gap-3">
									<Coins className="w-6 h-6 text-[#EA7AF4]" />
									<h3 className="text-lg font-satoshi">{item.label}</h3>
								</div>
								<div
									ref={index === 0 ? priceRefMobile : index === 1 ? marketCapRefMobile : totalSupplyRefMobile}
									className="text-5xl font-bold"
								>
									{tokenData[index].value}
								</div>
							</div>
						))}
					</div>

					{/* Live Circulating Supply */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-white">Live Circulating Supply</h3>
						<div className="space-y-4">
							{poolsStats.map((item, index) => (
								<div key={item.name} className="flex justify-between items-center">
									<span className="text-white font-satoshi">{item.prettyName}</span>
									<div className="flex items-center gap-4">
										<div className="w-32 bg-white/10 rounded-full h-2">
											<div
												ref={(el) => (barsMobileRef.current[index] = el) as never}
												className="h-2 rounded-full"
												style={{ backgroundColor: item.color, width: "0%" }}
											/>
										</div>
										<span className="text-white font-mono w-20 text-right text-xs">{item.prettyDistributed}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Action buttons */}
					<div className="flex flex-col gap-4 font-satoshi text-white">
						<a
							href="https://app.uniswap.org/explore/tokens/base/0xf8b1b47aa748f5c7b5d0e80c726a843913eb573a?chain=base"
							target="_blank"
						>
							<Button variant="outline" size="lg" className="w-full">
								<span>Buy on Uniswap</span>
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
						<a href="https://jup.ag/swap/SOL-mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u" target="_blank">
							<Button variant="outline" size="lg" className="w-full">
								<span>Buy on Jupiter</span>
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
						<a href="https://www.coingecko.com/en/coins/libertai" target="_blank">
							<Button variant="outline" size="lg" className="w-full">
								<span>Coingecko</span>
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
