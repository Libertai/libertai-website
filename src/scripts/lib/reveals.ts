/**
 * One-shot scroll reveals: a `.reveal` element fades in the first time it
 * crosses the viewport (threshold differs per page design).
 *
 * Also handles restored scroll positions (reload mid-page, back navigation):
 * content at/above a restored viewport never intersects, so it is revealed
 * directly once a non-zero scroll position is detected shortly after load.
 */
export function initReveals(threshold: number): void {
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add("in");
					io.unobserve(entry.target);
				}
			}
		},
		{ threshold, rootMargin: "0px 0px -8% 0px" },
	);
	for (const el of document.querySelectorAll(".reveal")) io.observe(el);

	const revealRestored = () => {
		if (window.scrollY === 0) return;
		for (const el of document.querySelectorAll(".reveal:not(.in)")) {
			if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
		}
	};
	revealRestored();
	// restoration can land after load — re-check shortly after and on the first
	// scroll events (the restoration itself fires one), then get out of the way
	setTimeout(revealRestored, 200);
	window.addEventListener("scroll", revealRestored, { passive: true });
	setTimeout(() => window.removeEventListener("scroll", revealRestored), 1200);
}
