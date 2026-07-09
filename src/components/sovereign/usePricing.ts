import { useEffect, useState } from "react";

/**
 * Live pricing for the homepage, read from the same Aleph LTAI_PRICING
 * aggregate the /api pricing table uses. Displayed figures come from this
 * source so the homepage can never disagree with /api; the constants in
 * data.ts are the fallback shown until the fetch resolves (or if it fails).
 */
const ALEPH_URL =
	"https://api2.aleph.im/api/v0/aggregates/0xe1F7220D201C64871Cefb25320a8a588393eE508.json?keys=LTAI_PRICING";

interface TextPricing {
	price_per_million_input_tokens: number;
	price_per_million_output_tokens: number;
}
interface LtaiModel {
	id: string;
	name: string;
	pricing: { text?: TextPricing };
}

export interface LivePricing {
	/** true once live figures have loaded */
	loaded: boolean;
	/** flagship (GLM) input/output, formatted "$0.60" — null until loaded */
	flagship: { input: string; output: string } | null;
	/** in/out for a catalog row by display name, "$0.18 / $0.70" — null if unmatched */
	priceFor: (displayName: string) => string | null;
}

const fmt = (n: number) => `$${n.toFixed(2)}`;
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

export function usePricing(): LivePricing {
	const [models, setModels] = useState<LtaiModel[] | null>(null);

	useEffect(() => {
		let alive = true;
		const ctl = new AbortController();
		const timer = setTimeout(() => ctl.abort(), 5000);
		fetch(ALEPH_URL, { signal: ctl.signal })
			.then((r) => r.json())
			.then((d: { data?: { LTAI_PRICING?: { models?: LtaiModel[] } } }) => {
				const list = d?.data?.LTAI_PRICING?.models ?? [];
				const text = list.filter((m) => m?.pricing?.text);
				if (alive && text.length) setModels(text);
			})
			.catch(() => {})
			.finally(() => clearTimeout(timer));
		return () => {
			alive = false;
			ctl.abort();
		};
	}, []);

	const flagshipModel = models?.find((m) => /glm/i.test(m.id) || /glm/i.test(m.name)) ?? null;

	return {
		loaded: !!models,
		flagship: flagshipModel?.pricing.text
			? {
					input: fmt(flagshipModel.pricing.text.price_per_million_input_tokens),
					output: fmt(flagshipModel.pricing.text.price_per_million_output_tokens),
				}
			: null,
		priceFor: (displayName: string) => {
			if (!models) return null;
			const key = norm(displayName);
			const m = models.find((x) => {
				const n = norm(x.name);
				const id = norm(x.id);
				return n.length > 2 && (key.includes(n) || n.includes(key) || key.includes(id) || id.includes(key));
			});
			if (!m?.pricing.text) return null;
			return `${fmt(m.pricing.text.price_per_million_input_tokens)} / ${fmt(m.pricing.text.price_per_million_output_tokens)}`;
		},
	};
}
