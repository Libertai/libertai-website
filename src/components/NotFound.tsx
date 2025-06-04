import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import heroImage from "@/assets/404/hero.webp";
import heroImageMobile from "@/assets/404/hero-mobile.png";

export function NotFound() {
	return (
		<section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 z-0">
				{/* Desktop image with gradient */}
				<div className="absolute h-full w-full hidden md:block">
					<img src={heroImage} alt="404 background" className="absolute h-full w-full object-cover object-center" />
					<div className="absolute inset-0 bg-gradient-to-r from-background from-15% to-transparent to-75%"></div>
				</div>
				{/* Mobile image with gradient */}
				<div className="absolute h-full w-full md:hidden">
					<img
						src={heroImageMobile}
						alt="404 background"
						className="absolute h-full w-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-background to-100%"></div>
				</div>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 flex items-center min-h-screen">
				{/* Content - left aligned */}
				<div className="w-full md:w-1/2 space-y-6 md:space-y-8">
					{/* 404 heading */}
					<h1 className="font-bold leading-tight text-white text-6xl md:text-8xl lg:text-9xl">404</h1>

					{/* Description */}
					<p className="text-lg max-w-lg font-satoshi text-white">
						Lost in life's vast landscape, find freedom in the journey, where courage and self-discovery intertwine.
					</p>

					{/* Back to home button */}
					<div className="pt-4">
						<Link to="/">
							<Button variant="outline" size="lg" className="text-white">
								<Home className="w-5 h-5 mr-2" />
								Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
