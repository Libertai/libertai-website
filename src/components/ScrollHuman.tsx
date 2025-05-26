import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ScrollHumanProps {
	onScroll?: () => void;
	variant?: "ghost" | "outline";
	size?: "pill" | "lg";
	className?: string;
}

export function ScrollHuman({ onScroll, variant = "ghost", size = "pill", className = "" }: ScrollHumanProps) {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (buttonRef.current) {
			gsap.fromTo(
				buttonRef.current,
				{ y: -8 },
				{
					y: 18,
					duration: 1.5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					repeatDelay: 0,
				},
			);
		}
	}, []);

	return (
		<Button
			ref={buttonRef}
			variant={variant}
			size={size}
			className={`hover:bg-transparent text-white ${className}`}
			onClick={onScroll}
		>
			<ArrowDown />
			<span>Scroll if you are human</span>
		</Button>
	);
}
