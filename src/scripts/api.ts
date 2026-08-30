/**
 * API page engine: scroll reveals, hero editor language tabs, live pricing,
 * and the streaming-response typing demo.
 */
import { initReveals } from "./lib/reveals.ts";
import { fetchTextModels, hydratePriceElements } from "./lib/pricing.ts";

initReveals(0.12);

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

// hero editor language tabs
const tabs = [...document.querySelectorAll<HTMLButtonElement>(".hero .editor .tabs button")];
const blocks = [...document.querySelectorAll<HTMLPreElement>(".hero .editor pre.code")];
for (const tab of tabs) {
	tab.addEventListener("click", () => {
		for (const t of tabs) t.classList.toggle("on", t === tab);
		for (const block of blocks) block.classList.toggle("on", block.dataset.l === tab.dataset.l);
	});
}

fetchTextModels()
	.then(hydratePriceElements)
	.catch(() => {});

// streaming-response typing demo, started when the editor scrolls into view
const resp = document.getElementById("resp");
if (resp) {
	const text =
		"Confidential inference runs your prompt inside an attested enclave. The operator can't read it, nothing is logged, and no data is kept once the response streams back.";
	if (reduce) {
		resp.textContent = text;
	} else {
		let started = false;
		const run = (): void => {
			if (started) return;
			started = true;
			let i = 0;
			resp.textContent = "";
			const caret = document.createElement("span");
			caret.className = "caret";
			resp.appendChild(caret);
			const step = (): void => {
				if (i < text.length) {
					caret.insertAdjacentText("beforebegin", text[i++]);
					setTimeout(step, 14);
				}
			};
			step();
		};
		const io = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					run();
					io.disconnect();
				}
			},
			{ threshold: 0.4 },
		);
		io.observe(resp);
	}
}
