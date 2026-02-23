import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import footerVideo from "@/assets/footer.webm";
import footerVideoMobile from "@/assets/footer-mobile.webm";
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
	{ text: "Home", href: "/", external: false },
	// { text: "About", href: "#", external: false },
	// { text: "Features", href: "#", external: false },
	{ text: "LiberClaw", href: "https://liberclaw.ai", external: true },
	// { text: "Sign Up", href: "#", external: false },
	{ text: "Litepaper", href: "/litepaper.pdf", external: true },
	{ text: "Docs", href: "https://docs.libertai.io", external: true },
	{ text: "Telegram Bot", href: "https://t.me/liberchat_bot", external: true },
	{ text: "Blog", href: "https://blog.libertai.io", external: true },
	// { text: "Privacy Policy", href: "#", external: false },
];

const firstRowLinks = footerLinks.slice(0, 3);
const secondRowLinks = footerLinks.slice(3);

export function FooterSection() {
	return (
		<footer className="w-full">
			{/* Main Footer Section with Background */}
			<section className="w-full lg:min-h-175 bg-background py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden flex items-center">
				{/* Background Video */}
				<video
					src={footerVideo}
					className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
					autoPlay
					muted
					loop
					playsInline
				/>
				{/* Background Video Mobile */}
				<video
					src={footerVideoMobile}
					className="md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
					autoPlay
					muted
					loop
					playsInline
				/>
				<div className="container mx-auto text-center relative z-10">
					{/* Section Header */}
					<div className="mb-16 space-y-6">
						<div className="text-sm">[ Above all else ]</div>
						<h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Liberty | Community | Privacy</h2>
						<p className="text-lg font-satoshi max-w-md mx-auto">Break free, join the liberation.</p>

						{/* Action Buttons */}
						<div className="flex gap-4 justify-center pt-4">
							<a href="https://console.libertai.io" target="_blank">
								<Button variant="outline" size="lg" className="text-white">
									Console
									<ExternalLink className="w-4 h-4" />
								</Button>
							</a>
							<a href="https://docs.libertai.io/apis/text/#pricing" target="_blank">
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
						{/* Mobile: Responsive flex wrap */}
						<div className="flex flex-wrap justify-center gap-4 md:hidden text-sm">
							{footerLinks.map((link) =>
								link.external ? (
									<a key={link.text} href={link.href} target="_blank" className="hover:text-white transition-colors">
										{link.text}
									</a>
								) : (
									<Link key={link.text} to={link.href} className="hover:text-white transition-colors">
										{link.text}
									</Link>
								),
							)}
						</div>

						{/* Desktop: Two rows */}
						<div className="hidden md:flex flex-col space-y-4">
							{/* First Row of Links */}
							<div className="flex flex-wrap justify-center gap-8 text-sm">
								{firstRowLinks.map((link) =>
									link.external ? (
										<a key={link.text} href={link.href} target="_blank" className="hover:text-white transition-colors">
											{link.text}
										</a>
									) : (
										<Link key={link.text} to={link.href} className="hover:text-white transition-colors">
											{link.text}
										</Link>
									),
								)}
							</div>

							{/* Second Row of Links */}
							<div className="flex flex-wrap justify-center gap-8 text-sm">
								{secondRowLinks.map((link) =>
									link.external ? (
										<a key={link.text} href={link.href} target="_blank" className="hover:text-white transition-colors">
											{link.text}
										</a>
									) : (
										<Link key={link.text} to={link.href} className="hover:text-white transition-colors">
											{link.text}
										</Link>
									),
								)}
							</div>
						</div>

						{/* Social Media Icons */}
						<div className="flex justify-center gap-6 pt-4">
							<a href="https://t.me/libertai" target="_blank" className="hover:text-white transition-colors">
								<FaTelegram size={24} />
							</a>
							<a href="https://x.com/Libertai_DAI" target="_blank" className="hover:text-white transition-colors">
								<FaXTwitter size={24} />
							</a>
							<a href="https://github.com/libertai" target="_blank" className="hover:text-white transition-colors">
								<FaGithub size={24} />
							</a>
							<a
								href="https://linkedin.com/company/libertai"
								target="_blank"
								className="hover:text-white transition-colors"
							>
								<FaLinkedin size={24} />
							</a>
							<a href="https://discord.gg/alephcloud" target="_blank" className="hover:text-white transition-colors">
								<FaDiscord size={24} />
							</a>
						</div>

						{/* Copyright */}
						<div className="text-center text-sm text-white mt-5 w-full hidden md:block">
							© 2025 LibertAI.io | Powered by{" "}
							<a href="https://aleph.cloud" target="_blank">
								Aleph Cloud
							</a>
						</div>
						<div className="text-center text-sm text-white mt-5 w-full md:hidden">
							<span>© 2025 LibertAI.io</span>
							<br />
							<span>
								Powered by{" "}
								<a href="https://aleph.cloud" target="_blank">
									Aleph Cloud
								</a>
							</span>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
