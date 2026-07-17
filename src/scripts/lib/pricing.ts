/** Live model prices from the Aleph LTAI_PRICING aggregate (same source as the console). */

export interface TextPricing {
	price_per_million_input_tokens: number;
	price_per_million_output_tokens: number;
}

interface PricingAggregate {
	data?: {
		LTAI_PRICING?: {
			models?: Array<{ id?: string; pricing?: { text?: TextPricing } }>;
		};
	};
}

const PRICING_URL =
	"https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING";

export const usd = (n: number): string => `$${n.toFixed(2)}`;

export async function fetchPricing(timeoutMs = 5000): Promise<Map<string, TextPricing>> {
	const ctl = new AbortController();
	const timer = setTimeout(() => ctl.abort(), timeoutMs);
	try {
		const res = await fetch(PRICING_URL, { signal: ctl.signal });
		const json = (await res.json()) as PricingAggregate;
		const byId = new Map<string, TextPricing>();
		for (const m of json.data?.LTAI_PRICING?.models ?? []) {
			if (m?.id && m.pricing?.text) byId.set(m.id.toLowerCase(), m.pricing.text);
		}
		return byId;
	} finally {
		clearTimeout(timer);
	}
}

/**
 * Hydrate every `[data-mid]` element with live prices. `data-k="in"`/`"out"`
 * render a single figure with a muted $ prefix; anything else renders the
 * "$in / $out" pair.
 */
export function hydratePriceElements(byId: Map<string, TextPricing>): void {
	for (const el of document.querySelectorAll<HTMLElement>("[data-mid]")) {
		const p = byId.get((el.dataset.mid ?? "").toLowerCase());
		if (!p) continue;
		if (el.dataset.k === "in") el.innerHTML = `<i>$</i>${p.price_per_million_input_tokens.toFixed(2)}`;
		else if (el.dataset.k === "out") el.innerHTML = `<i>$</i>${p.price_per_million_output_tokens.toFixed(2)}`;
		else el.textContent = `${usd(p.price_per_million_input_tokens)} / ${usd(p.price_per_million_output_tokens)}`;
	}
}
