import backgroundImage from "@/assets/background-sides.png";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const getStartedData = [
	{
		title: "Start building",
		badge: "[ Jump straight in! ]",
		description: "Launch your own generative AI solution with:",
		features: ["Privacy by default", "Simple pay-as-you-go pricing", "Developer Documentation"],
		buttons: [
			{
				text: "Build with the API",
				href: "https://console.libertai.io",
			},
		],
	},
	{
		title: "Need help?",
		badge: "[ We’re here for you ]",
		description: "Need hands-on support?\nReach out to the LibertAI team for:",
		features: ["LibertAI-Supported Onboarding", "Prompting support", "Deployment support"],
		buttons: [
			{
				text: "Telegram",
				href: "https://t.me/libertai",
			},
			{
				text: "Discord",
				href: "https://discord.gg/alephcloud",
			},
		],
	},
];

export function APIGetStarted() {
	return (
		<section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
					{getStartedData.map((section) => (
						<div key={section.title} className="space-y-6 max-md:mx-5 my-20">
							<div className="inline-flex items-center space-x-2 text-sm">
								<span>{section.badge}</span>
							</div>
							<h2 className="font-bold text-white mb-20">{section.title}</h2>
							<div className="space-y-3 font-satoshi">
								<div className="text-white text-lg mb-6">
									{section.description.split("\n").map((line) => (
										<p key={line}>{line}</p>
									))}
								</div>
								<ul className="space-y-2 text-sm mb-12 list-disc list-inside text-white">
									{section.features.map((feature) => (
										<li key={feature}>{feature}</li>
									))}
								</ul>
							</div>
							<div className="font-satoshi flex gap-3">
								{section.buttons.map((button) => (
									<a key={button.text} href={button.href} target="_blank">
										<Button variant="glass" size="pill">
											<span>{button.text}</span>
											<ExternalLink />
										</Button>
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
