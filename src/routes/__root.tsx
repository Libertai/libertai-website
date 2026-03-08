import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.tsx";
import { NotFound } from "@/components/NotFound.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import ReactLenis from "lenis/react";

export const Route = createRootRoute({
	component: () => (
		<TooltipProvider>
			<ReactLenis
				root
				options={{
					lerp: 0.1,
					duration: 1.4,
				}}
			>
				<Navbar />
				<Outlet />
			</ReactLenis>
		</TooltipProvider>
	),
	notFoundComponent: NotFound,
});
