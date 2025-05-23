import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.tsx";

export const Route = createRootRoute({
	component: () => (
		<>
			<Navbar />
			<Outlet />
		</>
	),
});
