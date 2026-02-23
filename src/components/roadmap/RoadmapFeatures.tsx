import {
	Bot,
	Code,
	Database,
	Image,
	Lock,
	MessageSquare,
	Mic,
	Package,
	Palette,
	Smartphone,
	Store,
	Users,
} from "lucide-react";
import backgroundImage from "@/assets/background-right.png";
import backgroundImageMobile from "@/assets/background-right-mobile.png";

const liveFeatures = [
	{
		icon: MessageSquare,
		title: "Chat dApp",
		description: "Uncensored, private conversations",
	},
	{
		icon: Code,
		title: "API",
		description: "Private AI API for developers",
	},
	{
		icon: Users,
		title: "AI Characters",
		description: "AI character persona storytelling and role-play",
	},
	{
		icon: Bot,
		title: "Agents",
		description: "Autonomous task runners in beta",
	},
	{
		icon: Image,
		title: "Image generation",
		description: "Multimodal inference & image inputs for LLMs",
	},
	{
		icon: Palette,
		title: "Chat UI Revamp",
		description: "Enhanced user experience with modern design and improved functionality",
	},
];

const comingSoonFeatures = [
	{
		icon: Database,
		title: "Knowledge Bases",
		description: "Beta queries for structured data",
	},
	{
		icon: Lock,
		title: "TEE verifiability",
		description: "Don't trust, verify! TEE-based verifiable inference",
	},
	{
		icon: Mic,
		title: "Text-to-speech",
		description: "Private, decentralized AI-driven speech synthesis for secure audio content creation",
	},
	{
		icon: Store,
		title: "Agent Marketplace",
		description: "Discover, deploy, and monetize AI agents in a decentralized marketplace",
	},
	{
		icon: Package,
		title: "SDKs & Libraries",
		description: "Pre-built integrations and development kits for popular frameworks",
	},
	{
		icon: Smartphone,
		title: "Mobile Apps",
		description: "Native iOS and Android applications for private AI on the go",
	},
];

export function RoadmapFeatures() {
	return (
		<section className="relative w-full bg-background py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			<div className="container mx-auto max-w-6xl relative z-10">
				{/* Live Now Section */}
				<div className="mb-20">
					<div className="mb-12 space-y-6">
						<div className="text-sm">[ Try today ]</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white">Live Now</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{liveFeatures.map((feature) => {
							const IconComponent = feature.icon;
							return (
								<div key={feature.title} className="group flex flex-col">
									<div className="flex items-center gap-3 mb-4">
										<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
										<h3 className="text-2xl font-satoshi text-white">{feature.title}</h3>
									</div>
									<p className="text-sm leading-relaxed">{feature.description}</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Coming Soon Section */}
				<div>
					<div className="mb-12 space-y-6">
						<div className="text-sm">[ Watch this space ]</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white">Coming soon</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{comingSoonFeatures.map((feature) => {
							const IconComponent = feature.icon;
							return (
								<div key={feature.title} className="group flex flex-col">
									<div className="flex items-center gap-3 mb-4">
										<IconComponent className="w-6 h-6 text-[#EA7AF4]" />
										<h3 className="text-2xl font-satoshi text-white">{feature.title}</h3>
									</div>
									<p className="text-sm leading-relaxed">{feature.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
