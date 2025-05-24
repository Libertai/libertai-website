import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TypewriterEffectProps {
	phrases: string[];
	className?: string;
	prefix?: string;
}

export function TypewriterEffect({ phrases, className = "", prefix = "" }: TypewriterEffectProps) {
	const textRef = useRef<HTMLSpanElement>(null);
	const cursorRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!textRef.current || !cursorRef.current) return;

		const textElement = textRef.current;
		const cursorElement = cursorRef.current;
		let currentPhraseIndex = 0;

		// Cursor blinking animation
		gsap.to(cursorElement, {
			opacity: 0,
			duration: 0.8,
			repeat: -1,
			yoyo: true,
			ease: "power2.inOut",
		});

		const typePhrase = (phrase: string) => {
			return new Promise<void>((resolve) => {
				textElement.textContent = prefix;

				const chars = phrase.split("");
				let charIndex = 0;

				const typeChar = () => {
					if (charIndex < chars.length) {
						textElement.textContent = prefix + phrase.substring(0, charIndex + 1);
						charIndex++;
						gsap.delayedCall(0.1, typeChar);
					} else {
						gsap.delayedCall(2, resolve); // Pause before erasing
					}
				};

				typeChar();
			});
		};

		const erasePhrase = () => {
			return new Promise<void>((resolve) => {
				const currentText = textElement.textContent || "";
				const textToErase = currentText.replace(prefix, "");

				let charIndex = textToErase.length;

				const eraseChar = () => {
					if (charIndex > 0) {
						textElement.textContent = prefix + textToErase.substring(0, charIndex - 1);
						charIndex--;
						gsap.delayedCall(0.01, eraseChar);
					} else {
						gsap.delayedCall(0.5, resolve); // Pause before typing next phrase
					}
				};

				eraseChar();
			});
		};

		const cycle = async () => {
			while (true) {
				await typePhrase(phrases[currentPhraseIndex]);
				await erasePhrase();
				currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
			}
		};

		// Start the cycle
		cycle();

		// Cleanup on unmount
		return () => {
			gsap.killTweensOf([textElement, cursorElement]);
		};
	}, [phrases, prefix]);

	return (
		<div className={`flex items-center min-w-0 ${className}`}>
			<span ref={textRef} className="min-w-0 flex-shrink-0"></span>
			<span ref={cursorRef} className="text-white/70 ml-1">
				|
			</span>
		</div>
	);
}
