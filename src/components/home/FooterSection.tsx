import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";
import backgroundImage from "@/assets/home/background-left.png";

export function FooterSection() {
	return (
		<footer className="w-full">
			{/* Main Footer Section with Background */}
			<section
				className="w-full bg-background py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="container mx-auto text-center">
					{/* Section Header */}
					<div className="mb-16 space-y-6">
						<div className="text-sm">[ Above all else ]</div>
						<h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Liberty | Community | Privacy</h2>
						<p className="text-lg font-satoshi text-gray-300 max-w-md mx-auto">Break free, join the liberation.</p>

						{/* Action Buttons */}
						<div className="flex gap-4 justify-center pt-4">
							<a href="https://console.libertai.io" target="_blank">
								<Button variant="outline" size="lg" className="text-white">
									Console
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
							<a href="#" target="_blank">
								<Button variant="outline" size="lg" className="text-white">
									Pricing
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Links Section */}
			<section className="w-full py-12 px-4 md:px-6 lg:px-8">
				<div className="container mx-auto">
					{/* Footer Links */}
					<div className="flex flex-col items-center space-y-4">
						{/* First Row of Links */}
						<div className="flex flex-wrap justify-center gap-8 text-sm">
							<a href="#" className="hover:text-white transition-colors">
								Home
							</a>
							<a href="#" className="hover:text-white transition-colors">
								About
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Features
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Roadmap
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Sign Up
							</a>
						</div>

						{/* Second Row of Links */}
						<div className="flex flex-wrap justify-center gap-8 text-sm">
							<a href="#" className="hover:text-white transition-colors">
								Litepaper
							</a>
							<a href="https://docs.libertai.io" className="hover:text-white transition-colors">
								Docs
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Telegram Bot
							</a>
							<a href="https://blog.libertai.io" className="hover:text-white transition-colors">
								Blog
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</a>
						</div>

						{/* Copyright */}
						<div className="text-center text-sm text-white mt-5 w-full">
							Powered by{" "}
							<a href="https://aleph.cloud" target="_blank">
								Aleph Cloud
							</a>{" "}
							| © 2025 LibertAI.io
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
