import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ href: "/", label: "About" },
		{ href: "/", label: "Private AI" },
		{ href: "/", label: "API" },
		{ href: "/", label: "Tokenomics" },
		{ href: "/", label: "Blog" },
		{ href: "/", label: "Apps" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background">
			<div className="mx-auto lg:mx-12 xl:mx-20 px-4 md:px-6 lg:px-8">
				<div className="flex items-center h-16">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center justify-between w-full">
						<NavigationMenu>
							<NavigationMenuList className="md:gap-4 lg:gap-10">
								{/* Logo */}
								<Link to="/" className="text-white font-bold text-xl z-10">
									LibertAI
								</Link>

								{navItems.map((item) => (
									<NavigationMenuItem key={item.href}>
										<Link to={item.href}>
											<NavigationMenuLink className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent">
												{item.label}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>

						{/* Right side: Button */}
						<Button variant="glass" size="pill">
							Join the Revolution →
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm md:hidden">
					<div className="container mx-auto px-4 py-8">
						<NavigationMenu orientation="vertical" className="w-full">
							<NavigationMenuList className="flex-col items-start w-full gap-5">
								{navItems.map((item) => (
									<NavigationMenuItem key={item.href} className="w-full">
										<Link to={item.href} onClick={() => setIsMenuOpen(false)}>
											<NavigationMenuLink className="bg-transparent text-white hover:text-primary text-lg w-full hover:bg-transparent focus:bg-transparent">
												{item.label}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
								<NavigationMenuItem className="w-full mt-4">
									<Button variant="glass" size="pill" className="w-full justify-start">
										Join the Revolution →
									</Button>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			)}
		</header>
	);
}
