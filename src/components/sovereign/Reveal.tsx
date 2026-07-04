import { type ReactNode, useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper: fades/slides children in once when they enter the
 * viewport. Respects prefers-reduced-motion (content shows immediately).
 */
export function Reveal({
	children,
	className = "",
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("in");
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					el.classList.add("in");
					io.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
			{children}
		</div>
	);
}
