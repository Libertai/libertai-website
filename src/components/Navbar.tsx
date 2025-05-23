import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
	const navItems = [
		{ href: "/a", label: "About" },
		{ href: "/b", label: "Private AI" },
		{ href: "/c", label: "API" },
		{ href: "/d", label: "Tokenomics" },
		{ href: "/e", label: "Blog" },
		{ href: "/f", label: "Apps" },
	];

	const ctaText = "Join the Revolution →";

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm">
			<div className="mx-auto lg:mx-12 xl:mx-20 px-4 md:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo - visible on both mobile and desktop */}
					<Link to="/" className="text-white font-bold text-xl z-10">
						LibertAI
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center justify-between flex-1 ml-8">
						<NavigationMenu>
							<NavigationMenuList className="md:gap-4 xl:gap-6">
								{navItems.map((item) => (
									<NavigationMenuItem key={item.href}>
										<NavigationMenuLink
											className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent max-lg:text-xs lg:text-sm"
											href={item.href}
										>
											{item.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>

						{/* Right side: Button */}
						<Button variant="glass" size="pill" className="hidden lg:block">
							{ctaText}
						</Button>
						<Button variant="glass" size="pill-sm" className="lg:hidden">
							{ctaText}
						</Button>
					</div>

					{/* Mobile Actions */}
					<div className="flex items-center gap-2 md:hidden">
						{/* Try Now Button */}
						<Button variant="glass" size="pill" className="text-sm flex items-center gap-1">
							Try Now <ExternalLink className="h-3.5 w-3.5" />
						</Button>

						{/* Mobile Menu Sheet */}
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="bg-background/95 backdrop-blur-sm border-l-0 p-6">
								<SheetHeader className="text-left">
									<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col space-y-6 mt-6">
									{navItems.map((item) => (
										<Link to={item.href} key={item.href} className="text-white hover:text-primary text-lg">
											{item.label}
										</Link>
									))}
									<Button variant="glass" size="pill" className="w-full justify-start mt-2 text-center">
										{ctaText}
									</Button>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
