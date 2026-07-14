import { useEffect, useRef } from "react";
import "./home.css";
import { HOME_BODY_HTML } from "./homeMarkup.ts";
import { initHome } from "./homeEngine.ts";
import { HomeNav } from "./HomeNav.tsx";

/**
 * The light "Sovereign" homepage, ported from the locked static preview.
 *
 * The nav is real React (client-side routing); the page body is the validated
 * preview markup (identical structure/ids so the ported interaction engine —
 * two-worlds globe, live pricing, scroll reveals — attaches unchanged). All of
 * it is scoped under `.lp` so the light theme can't leak into the dark app or
 * other routes. `.lp-root` on <html> paints the light ground over the app's
 * dark --background while this page is mounted.
 */
export function LightHome() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.documentElement.classList.add("lp-root");
		const cleanup = initHome();
		return () => {
			document.documentElement.classList.remove("lp-root");
			cleanup();
		};
	}, []);

	return (
		<div className="lp">
			<HomeNav />
			<div ref={ref} dangerouslySetInnerHTML={{ __html: HOME_BODY_HTML }} />
		</div>
	);
}
