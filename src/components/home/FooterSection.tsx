import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";
import backgroundImage from "@/assets/footer-background.png";
import footerVideo from "@/assets/footer.mp4";

const footerLinks = [
	{ text: "Home", href: "#" },
	{ text: "About", href: "#" },
	{ text: "Features", href: "#" },
	{ text: "Roadmap", href: "#" },
	{ text: "Sign Up", href: "#" },
	{ text: "Litepaper", href: "#" },
	{ text: "Docs", href: "https://docs.libertai.io" },
	{ text: "Telegram Bot", href: "#" },
	{ text: "Blog", href: "https://blog.libertai.io" },
	{ text: "Privacy Policy", href: "#" },
];

const firstRowLinks = footerLinks.slice(0, 5);
const secondRowLinks = footerLinks.slice(5);

export function FooterSection() {
	return (
		<footer className="w-full">
			{/* Main Footer Section with Background */}
			<section
				className="w-full bg-background py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				{/* Background Video */}
				<video
					className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80"
					style={{
						mixBlendMode: "color-dodge",
						filter: "blur(1px)",
					}}
					autoPlay
					muted
					loop
					playsInline
				>
					<source src={footerVideo} type="video/mp4" />
				</video>
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
						{/* Mobile: Responsive flex wrap */}
						<div className="flex flex-wrap justify-center gap-4 md:hidden text-sm">
							{footerLinks.map((link) => (
								<a key={link.text} href={link.href} className="hover:text-white transition-colors">
									{link.text}
								</a>
							))}
						</div>

						{/* Desktop: Two rows */}
						<div className="hidden md:flex flex-col space-y-4">
							{/* First Row of Links */}
							<div className="flex flex-wrap justify-center gap-8 text-sm">
								{firstRowLinks.map((link) => (
									<a key={link.text} href={link.href} className="hover:text-white transition-colors">
										{link.text}
									</a>
								))}
							</div>

							{/* Second Row of Links */}
							<div className="flex flex-wrap justify-center gap-8 text-sm">
								{secondRowLinks.map((link) => (
									<a key={link.text} href={link.href} className="hover:text-white transition-colors">
										{link.text}
									</a>
								))}
							</div>
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
