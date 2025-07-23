import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";
import dedSecBackground from "@/assets/use-cases/ubisoft/dedsec/dedsec-background.png";
import dedSecLogo from "@/assets/use-cases/ubisoft/dedsec/dedsec.gif";

export function UbisoftDedSec() {
	return (
		<section className="relative w-full min-h-[80vh] flex items-center bg-background overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<img src={dedSecBackground} alt="DedSec Console background" className="absolute h-full w-full object-cover" />
				<div className="absolute inset-0 bg-black/20" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center justify-between min-h-[80vh]">
				{/* Left content */}
				<div className="flex flex-col justify-center space-y-6 max-w-2xl">
					<div className="text-sm">[ Synthetic mind. Rogue intent. ]</div>

					{/* Title */}
					<h2 className="text-5xl">The DedSec Console</h2>

					{/* Description */}
					<p className="text-lg font-satoshi max-w-lg leading-relaxed">
						The DedSec Console is a text-based hacking challenge tied to Captain Laserhawk: The GAME — Inside this
						techno-dystopian world ruled by Eden, DedSec hackers are back. Reimagined from the Watch Dogs universe, this
						faction of rebels now recruits the sharpest digital minds through one trial: The Console.
					</p>

					{/* Action buttons */}
					<div className="flex flex-wrap gap-4 pt-4">
						<a href="https://dedsec.edenonline.xyz/" target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								DedSec Console
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
						<a href="https://edenonline.ubisoft.com/" target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								Eden Online
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
					</div>
				</div>

				{/* Right content - DedSec Logo */}
				<div className="hidden xl:flex items-center justify-center flex-shrink-0 ml-12">
					<img src={dedSecLogo} alt="DedSec" className="h-80 w-auto" />
				</div>
			</div>
		</section>
	);
}
