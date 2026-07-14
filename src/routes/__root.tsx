import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.tsx";
import { NotFound } from "@/components/NotFound.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import ReactLenis from "lenis/react";

function RootLayout() {
	// The light homepage ("/") ships its own pill nav, so suppress the global one there.
	const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });
	return (
		<TooltipProvider>
			<ReactLenis
				root
				options={{
					lerp: 0.1,
					duration: 1.4,
				}}
			>
				{!isHome && <Navbar />}
				<Outlet />
			</ReactLenis>
		</TooltipProvider>
	);
}

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound,
});
