import { Button } from "@/components/ui/button.tsx";
import { Bot, Code, ExternalLink, MessageSquare } from "lucide-react";

export function ServicesSection() {
	return (
		<section className="w-full bg-background text-white py-20 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="text-sm text-gray-400 mb-4 font-mono">[ Services ]</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">Privacy is Freedom</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Break free with LibertAI, the decentralized AI platform that puts you in control.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{/* Private Chat */}
					<div className="group">
						<div className="flex items-center gap-3 mb-4">
							<MessageSquare className="w-6 h-6 text-purple-400" />
							<h3 className="text-xl font-bold font-satoshi">Private Chat</h3>
						</div>
						<p className="text-gray-400 mb-8 leading-relaxed">
							Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models
							with your data.
						</p>

						{/* Chat Interface Mockup */}
						<div className="relative bg-gradient-to-b from-gray-900/50 to-purple-900/20 rounded-2xl border border-gray-700/50 p-6 mb-6 h-64 overflow-hidden">
							<div className="flex items-center gap-2 mb-4">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div className="space-y-3">
								<div className="bg-gray-700/50 rounded-lg h-4 w-3/4"></div>
								<div className="bg-gray-700/50 rounded-lg h-4 w-1/2"></div>
								<div className="bg-purple-600/50 rounded-lg h-4 w-2/3 ml-auto"></div>
								<div className="bg-gray-700/50 rounded-lg h-4 w-5/6"></div>
							</div>
						</div>

						<Button variant="outline" className="w-full group-hover:bg-white/5 transition-colors">
							Chat Now
							<ExternalLink className="w-4 h-4" />
						</Button>
					</div>

					{/* API */}
					<div className="group">
						<div className="flex items-center gap-3 mb-4">
							<Code className="w-6 h-6 text-purple-400" />
							<h3 className="text-xl font-bold font-satoshi">API</h3>
						</div>
						<p className="text-gray-400 mb-8 leading-relaxed">
							Integrate powerful AI into your apps via privacy-preserving APIs for chatbots, automation, and innovation.
						</p>

						{/* API Interface Mockup */}
						<div className="relative bg-gradient-to-b from-gray-900/50 to-purple-900/20 rounded-2xl border border-gray-700/50 p-6 mb-6 h-64 overflow-hidden">
							<div className="text-xs text-purple-400 mb-2">LibertAI</div>
							<div className="space-y-2">
								<div className="bg-purple-600/30 rounded h-3 w-full"></div>
								<div className="bg-gray-700/50 rounded h-2 w-2/3"></div>
								<div className="bg-gray-700/50 rounded h-2 w-1/2"></div>
								<div className="bg-gray-700/50 rounded h-2 w-3/4"></div>
								<div className="bg-gray-700/50 rounded h-2 w-1/3"></div>
							</div>
						</div>

						<Button variant="outline" className="w-full group-hover:bg-white/5 transition-colors">
							Build with the API
							<ExternalLink className="w-4 h-4" />
						</Button>
					</div>

					{/* Agents */}
					<div className="group">
						<div className="flex items-center gap-3 mb-4">
							<Bot className="w-6 h-6 text-purple-400" />
							<h3 className="text-xl font-bold font-satoshi">Agents</h3>
						</div>
						<p className="text-gray-400 mb-8 leading-relaxed">
							LibertAI Agents are highly customizable assistants that operates in a decentralized and confidential
							environment.
						</p>

						{/* Agents Interface Mockup */}
						<div className="relative bg-gradient-to-b from-gray-900/50 to-purple-900/20 rounded-2xl border border-gray-700/50 p-6 mb-6 h-64 overflow-hidden">
							<div className="flex items-center justify-center h-full">
								<div className="relative">
									{/* Central node */}
									<div className="w-12 h-12 bg-purple-600/50 rounded-full flex items-center justify-center">
										<Bot className="w-6 h-6 text-purple-400" />
									</div>

									{/* Surrounding nodes */}
									<div className="absolute -top-8 -left-8 w-8 h-8 bg-blue-600/30 rounded-full"></div>
									<div className="absolute -top-8 -right-8 w-6 h-6 bg-purple-600/30 rounded-full"></div>
									<div className="absolute -bottom-8 -left-8 w-6 h-6 bg-blue-600/30 rounded-full"></div>
									<div className="absolute -bottom-8 -right-8 w-8 h-8 bg-purple-600/30 rounded-full"></div>
									<div className="absolute top-0 -right-16 w-4 h-4 bg-gray-600/30 rounded-full"></div>
									<div className="absolute -left-16 top-0 w-4 h-4 bg-gray-600/30 rounded-full"></div>
								</div>
							</div>
						</div>

						<Button variant="outline" className="w-full group-hover:bg-white/5 transition-colors">
							Awaken your Agent
							<ExternalLink className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
