import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoSvg from "@/assets/logo.svg";
import { useState } from "react";

export function Navbar() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const navItems = [
		// { href: "/a", label: "About", external: false },
		{ href: "/private-ai", label: "Private AI", external: false },
		{ href: "/api", label: "API", external: false },
		{ href: "/tokenomics", label: "Tokenomics", external: false },
		{ href: "https://blog.libertai.io", label: "Blog", external: true },
		{ href: "/roadmap", label: "Roadmap", external: false },
	];

	const ctaText = "Try LibertAI chat";
	const ctaLink = "https://chat.libertai.io";

	const handleNavClick = () => {
		setIsSheetOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm">
			<div className="mx-auto lg:mx-12 xl:mx-20 px-4 md:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Left side: Logo + Navigation */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<img src={logoSvg} alt="LibertAI" className="h-6 w-auto" />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex ml-8">
							<NavigationMenu viewport={false}>
								<NavigationMenuList className="md:gap-4 xl:gap-6">
									{navItems.map((item) => (
										<NavigationMenuItem key={item.href}>
											{item.external ? (
												<NavigationMenuLink
													className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent max-lg:text-xs lg:text-sm"
													href={item.href}
													target="_blank"
												>
													{item.label}
												</NavigationMenuLink>
											) : (
												<Link
													to={item.href}
													className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent max-lg:text-xs lg:text-sm px-3 py-2 rounded-md transition-colors"
												>
													{item.label}
												</Link>
											)}
										</NavigationMenuItem>
									))}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent! data-[state=open]:text-white max-lg:text-xs lg:text-sm px-3 py-2">
											Use cases
										</NavigationMenuTrigger>
										<NavigationMenuContent className="text-white border border-white/20 backdrop-blur-sm rounded-[2vw]!">
											<div className="min-w-80 p-4">
												<Link to="/use-cases/ubisoft" className="block p-4">
													<p className="text-md font-medium leading-none text-white">Ubisoft</p>
													<p className="text-xs leading-snug text-white/70 mt-1">
														Decentralized AI: Gaming Meets Autonomous Citizens
													</p>
												</Link>
											</div>
											<div className="min-w-80 p-4">
												<Link to="/use-cases/genlayer" className="block p-4">
													<p className="text-md font-medium leading-none text-white">GenLayer</p>
													<p className="text-xs leading-snug text-white/70 mt-1">Private AI for onchain disputes</p>
												</Link>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>

					{/* Right side: CTA Button (Desktop only) */}
					<div className="hidden md:flex">
						<a href={ctaLink} target="_blank">
							<Button variant="glass" size="pill" className="hidden lg:flex">
								<span>{ctaText}</span>
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
						<a href={ctaLink} target="_blank">
							<Button variant="glass" size="pill-sm" className="lg:hidden">
								<span>{ctaText}</span>
								<ExternalLink className="w-4 h-4" />
							</Button>
						</a>
					</div>

					{/* Mobile Actions */}
					<div className="flex items-center gap-2 md:hidden">
						{/* Try Now Button */}
						<a href={ctaLink} target="_blank">
							<Button variant="glass" size="pill" className="text-sm flex items-center gap-1">
								Try Now <ExternalLink className="h-3.5 w-3.5" />
							</Button>
						</a>

						{/* Mobile Menu Sheet */}
						<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="bg-background/95 backdrop-blur-sm border-l-0 p-6">
								<SheetHeader className="text-left">
									<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
									<SheetDescription className="sr-only">Navigate through LibertAI website sections</SheetDescription>
								</SheetHeader>
								<nav className="flex flex-col space-y-6 mt-6">
									{navItems.map((item) =>
										item.external ? (
											<a
												href={item.href}
												key={item.href}
												target="_blank"
												className="text-white hover:text-primary text-lg"
												onClick={handleNavClick}
											>
												{item.label}
											</a>
										) : (
											<Link
												to={item.href}
												key={item.href}
												className="text-white hover:text-primary text-lg"
												onClick={handleNavClick}
											>
												{item.label}
											</Link>
										),
									)}
									<div className="space-y-3">
										<div className="text-white text-lg font-medium">Use cases</div>
										<Link
											to="/use-cases/ubisoft"
											className="hover:text-primary text-base ml-4 block"
											onClick={handleNavClick}
										>
											Ubisoft
										</Link>
									</div>
									<a href={ctaLink} target="_blank" onClick={handleNavClick}>
										<Button variant="glass" size="pill" className="w-full justify-start mt-2 text-center">
											<span>{ctaText}</span>
											<ExternalLink className="w-4 h-4" />
										</Button>
									</a>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
