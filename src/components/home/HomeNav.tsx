import { Link } from "@tanstack/react-router";

/**
 * The homepage pill nav. Rendered as real React (not part of the ported HTML
 * body) so the API/Search links use client-side routing; section links are
 * in-page anchors. Styled by the scoped `.lp nav.top` rules in home.css.
 */
export function HomeNav() {
	return (
		<nav className="top">
			<div className="pill">
				<a className="brand" href="#top">
					Libert<span className="ai">AI</span>
				</a>
				<div className="links">
					<a href="#models">Models</a>
					<a href="#pricing">Pricing</a>
					<a href="#compare">Compare</a>
					<Link to="/api">API</Link>
					<Link to="/search">Search</Link>
					<a href="https://docs.libertai.io" target="_blank" rel="noopener">
						Docs ↗
					</a>
				</div>
				<div className="cta">
					<a className="chat" href="https://chat.libertai.io" target="_blank" rel="noopener">
						Chat
					</a>
					<a className="key" href="https://console.libertai.io" target="_blank" rel="noopener">
						Get API key
					</a>
				</div>
			</div>
		</nav>
	);
}
