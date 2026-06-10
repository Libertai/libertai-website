import backgroundImage from "@/assets/background-sides.png";
import backgroundImageMobile from "@/assets/background-right-mobile.png";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const curlExample = `curl -X POST https://api.libertai.io/search \\
  -H "Authorization: Bearer $LIBERTAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "rust async runtime comparison",
    "search_type": "web"
  }'`;

export function SearchGetStarted() {
	return (
		<section className="relative w-full py-20 lg:py-40 md:py-32 bg-background overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover hidden md:block" />
				<img src={backgroundImageMobile} alt="Background" className="absolute h-full w-full object-cover md:hidden" />
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
					{/* Left: copy + CTAs */}
					<div className="space-y-6">
						<div className="inline-flex items-center space-x-2 text-sm">
							<span>[ One request away ]</span>
						</div>
						<h2 className="font-bold text-white text-3xl md:text-4xl">Start searching</h2>
						<div className="space-y-3 font-satoshi">
							<p className="text-white text-lg">
								Grab an API key from the console, top up credits, and send your first query. The same key works for
								inference, image generation, and search.
							</p>
							<ul className="space-y-2 text-sm list-disc list-inside text-white">
								<li>Unified results from three engines</li>
								<li>News, image, and academic search built in</li>
								<li>Readable page text via the fetch endpoint</li>
							</ul>
						</div>
						<div className="font-satoshi flex gap-3">
							<a href="https://console.libertai.io" target="_blank" rel="noopener noreferrer">
								<Button variant="glass" size="pill">
									<span>Get an API key</span>
									<ExternalLink />
								</Button>
							</a>
							<a href="https://docs.libertai.io/apis/search/" target="_blank" rel="noopener noreferrer">
								<Button variant="glass" size="pill">
									<span>Read the docs</span>
									<ExternalLink />
								</Button>
							</a>
						</div>
					</div>

					{/* Right: code example */}
					<div className="border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden">
						<div className="px-4 py-2 border-b border-white/10 text-xs text-white/60 font-satoshi">POST /search</div>
						<pre className="p-4 text-sm text-white/90 overflow-x-auto">
							<code>{curlExample}</code>
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
}
