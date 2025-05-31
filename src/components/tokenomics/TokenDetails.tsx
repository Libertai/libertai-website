import { Coins, Gift, Shield, TrendingUp, Users } from "lucide-react";
import backgroundImage from "@/assets/background-right.png";
import backgroundImageMobile from "@/assets/background-right-mobile.png";

interface TokenDetail {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export function TokenDetails() {
	const tokenDetails: TokenDetail[] = [
		{
			title: "Initial Token Supply",
			description:
				"The total token supply is 60 million, with 13.1 million available at the TGE. Over the next 10 years, the rest will be distributed among investors, the development team, and the community to ensure gradual and stable distribution.",
			icon: <Coins className="w-6 h-6" />,
		},
		{
			title: "Raise",
			description:
				"3% of the tokens (2M) are allocated for the pre-launch raise. These tokens are distributed at the Token Generation Event (TGE) and over 24 months to raise initial funds and ensure early supporters have a stake in the project. Any unsold tokens from the raise will be allocated to reserves. At the TGE, 50% of the tokens will be available, with the remainder being gradually vested.",
			icon: <TrendingUp className="w-6 h-6" />,
		},
		{
			title: "Reserves",
			description:
				"42% of the tokens (25M) are available as reserves, including 5M at the Token Generation Event (TGE). A portion of these reserves will be dedicated to enhancing Uniswap V3 pools for liquidity, while the remainder will be accessible for future fundraising, market making, and other critical purposes.",
			icon: <Shield className="w-6 h-6" />,
		},
		{
			title: "Team",
			description:
				"20% of the tokens (12M) are allocated to the team, including early contributors and advisors, with a release schedule over 7 years. This incentivizes the team to continue developing the project. Initially, 1 million tokens are available at TGE, with the remainder distributed over 7 years.",
			icon: <Users className="w-6 h-6" />,
		},
		{
			title: "Airdrop and Incentives",
			description:
				"35% of the tokens (21M) are reserved for community airdrops, including the Aleph airdrop and future campaigns to reward and engage community members. These tokens are released gradually over 10+ years to ensure stability and sustained community involvement.",
			icon: <Gift className="w-6 h-6" />,
		},
	];

	return (
		<section className="relative w-full bg-background py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img
					src={backgroundImage}
					alt="Token details background"
					className="absolute h-full w-full object-cover hidden md:block"
				/>
				<img
					src={backgroundImageMobile}
					alt="Token details background"
					className="absolute h-full w-full object-cover md:hidden"
				/>
			</div>

			<div className="container mx-auto max-w-6xl relative z-10">
				{/* Flexible grid layout */}
				<div className="flex flex-wrap justify-center gap-8 md:gap-12">
					{tokenDetails.map((detail) => (
						<div
							key={detail.title}
							className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(50%-3rem)] lg:w-[calc(33.333%-2rem)] space-y-4 max-w-sm"
						>
							{/* Icon and title */}
							<div className="flex items-center gap-3 mb-4">
								<div className="text-[#EA7AF4]">{detail.icon}</div>
								<h3 className="text-2xl font-satoshi font-medium text-white">{detail.title}</h3>
							</div>

							{/* Description */}
							<p className="text-sm leading-relaxed">{detail.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
