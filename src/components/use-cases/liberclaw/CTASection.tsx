import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";

interface CTASectionProps {
	title?: string;
	subtitle?: string;
	appLink?: string;
	appText?: string;
	githubLink?: string;
	githubText?: string;
}

export function CTASection({
	title = "Deploy Your Agent",
	subtitle = "The free tier includes 2 agents. No credit card required.",
	appLink = "https://app.liberclaw.ai",
	appText = "Get Started Free",
	githubLink = "https://github.com/Libertai/liberclaw",
	githubText = "View Source on GitHub",
}: CTASectionProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto">
					<div className="text-sm mb-4">[ Get Started ]</div>
					<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
						{title}
					</h2>
					<p className="text-lg font-satoshi mb-10">{subtitle}</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a href={appLink} target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								<span>{appText}</span>
								<ExternalLink />
							</Button>
						</a>
						<a href={githubLink} target="_blank">
							<Button variant="outline" size="lg" className="text-white border-white">
								<span>{githubText}</span>
								<ExternalLink />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
