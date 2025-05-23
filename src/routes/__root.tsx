import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.tsx";
import ReactLenis from "lenis/react";

export const Route = createRootRoute({
	component: () => (
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
	),
});
