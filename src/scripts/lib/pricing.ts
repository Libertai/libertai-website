/**
 * Client-side price refresh. The markup already carries build-time prices, so
 * this only corrects drift since the last deploy.
 */
import { fetchTextModels, usd, type AggregateModel } from "../../lib/pricing.ts";

export { fetchTextModels, usd };

/** Rows for models the aggregate no longer serves, so a retired model disappears. */
const dropRow = (el: HTMLElement): void => {
	const row = el.closest<HTMLElement>("[data-price-row]");
	if (row) row.remove();
	else console.warn(`[pricing] "${el.dataset.mid}" is gone from LTAI_PRICING; showing its build-time price`);
};

/** Bars are scaled against the priciest row still on the page. */
const refreshBars = (byId: Map<string, AggregateModel>): void => {
	const rows = [...document.querySelectorAll<HTMLElement>("[data-price-row] .bar i")];
	const priceOf = (el: HTMLElement): number =>
		byId.get(el.closest<HTMLElement>("[data-price-row]")?.dataset.priceRow ?? "")?.pricing
			.price_per_million_output_tokens ?? 0;
	const max = Math.max(...rows.map(priceOf), 0);
	if (max <= 0) return;
	for (const el of rows) el.style.setProperty("--w", `${Math.round((priceOf(el) / max) * 100)}%`);
};

const refreshCount = (): void => {
	const count = document.querySelector<HTMLElement>("[data-model-count]");
	if (count) count.textContent = String(document.querySelectorAll("[data-price-row]").length);
};

/**
 * Fill every `[data-mid]` from `byId`. `data-k="in"`/`"out"` render a single
 * figure with a muted $ prefix; anything else renders the "$in / $out" pair.
 * An empty map means the fetch came back with nothing — left alone so a bad
 * response cannot blank the page.
 */
export function hydratePriceElements(byId: Map<string, AggregateModel>): void {
	if (byId.size === 0) return;
	for (const el of document.querySelectorAll<HTMLElement>("[data-mid]")) {
		const p = byId.get((el.dataset.mid ?? "").toLowerCase());
		if (!p) {
			dropRow(el);
			continue;
		}
		if (el.dataset.k === "in") el.innerHTML = `<i>$</i>${p.pricing.price_per_million_input_tokens.toFixed(2)}`;
		else if (el.dataset.k === "out") el.innerHTML = `<i>$</i>${p.pricing.price_per_million_output_tokens.toFixed(2)}`;
		else
			el.textContent = `${usd(p.pricing.price_per_million_input_tokens)} / ${usd(p.pricing.price_per_million_output_tokens)}`;
	}
	refreshBars(byId);
	refreshCount();
}
