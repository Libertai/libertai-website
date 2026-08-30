/** Model data from the Aleph LTAI_PRICING aggregate — the same source the console bills from. */

export interface TextPricing {
	price_per_million_input_tokens: number;
	price_per_million_output_tokens: number;
}

export interface TextCapabilities {
	tee?: boolean;
	vision?: boolean;
	reasoning?: boolean;
	function_calling?: boolean;
	context_window?: number;
}

export interface AggregateModel {
	id: string;
	name: string;
	pricing: TextPricing;
	capabilities: TextCapabilities;
}

interface PricingAggregate {
	data?: {
		LTAI_PRICING?: {
			models?: Array<{
				id?: string;
				name?: string;
				pricing?: { text?: TextPricing };
				capabilities?: { text?: TextCapabilities };
			}>;
		};
	};
}

export const PRICING_URL =
	"https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING";

export const usd = (n: number): string => `$${n.toFixed(2)}`;

/** Ids are lowercased on the way in; every lookup must lowercase too. */
export async function fetchTextModels(timeoutMs = 5000): Promise<Map<string, AggregateModel>> {
	const ctl = new AbortController();
	const timer = setTimeout(() => ctl.abort(), timeoutMs);
	try {
		const res = await fetch(PRICING_URL, { signal: ctl.signal });
		const json = (await res.json()) as PricingAggregate;
		const byId = new Map<string, AggregateModel>();
		// entries without `pricing.text` are image/embedding/speech models
		for (const m of json.data?.LTAI_PRICING?.models ?? []) {
			if (!m?.id || !m.pricing?.text) continue;
			const id = m.id.toLowerCase();
			byId.set(id, { id, name: m.name ?? m.id, pricing: m.pricing.text, capabilities: m.capabilities?.text ?? {} });
		}
		return byId;
	} finally {
		clearTimeout(timer);
	}
}
