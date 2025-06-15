import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import backgroundImage from "@/assets/background-right.webp";
import backgroundImageMobile from "@/assets/background-right-mobile.png";
import baseLogo from "@/assets/tokenomics/base.png";
import solanaLogo from "@/assets/tokenomics/solana.png";
import contractAddressesImage from "@/assets/tokenomics/contract_addresses.png";

const contracts = [
	{
		network: "Base",
		logo: baseLogo,
		address: "0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a",
		link: "https://basescan.org/token/0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a",
	},
	{
		network: "Solana",
		logo: solanaLogo,
		address: "mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u",
		link: "https://solscan.io/token/mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u",
	},
];

export function ContractAddresses() {
	const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedAddress(text);
			setTimeout(() => {
				setCopiedAddress(null);
			}, 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};
	return (
		<section className="relative w-full bg-background py-20 lg:py-40 px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			<div className="container mx-auto max-w-6xl relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left side - Contract addresses */}
					<div className="space-y-8">
						<div className="space-y-6 mb-20">
							<div className="text-sm">[ Double, Triple check ]</div>
							<h2 className="text-4xl md:text-5xl font-bold text-white">Contract Addresses</h2>
						</div>

						<div className="space-y-6">
							{contracts.map((contract) => (
								<div key={contract.network} className="space-y-3">
									<div className="flex items-center gap-3">
										<img src={contract.logo} alt={`${contract.network} logo`} className="w-8 h-8 rounded-full" />
										<span className="text-white font-satoshi text-lg">{contract.network}</span>
										<a href={contract.link} target="_blank">
											<Button variant="glass" size="sm">
												<ExternalLink className="w-4 h-4" />
											</Button>
										</a>
									</div>
									<div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
										<code className="font-mono md:text-sm flex-1 break-all">{contract.address}</code>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => copyToClipboard(contract.address)}
											className={`transition-colors duration-200 ${
												copiedAddress === contract.address ? "text-green-400" : ""
											}`}
										>
											{copiedAddress === contract.address ? (
												<Check className="w-4 h-4" />
											) : (
												<Copy className="w-4 h-4" />
											)}
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right side - Contract addresses image */}
					<div className="hidden lg:block">
						<img
							src={contractAddressesImage}
							alt="Contract addresses illustration"
							className="w-full h-auto rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
