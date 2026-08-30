/**
 * Build-time model catalog. Every model name and price rendered into the site
 * comes from here, so a model that is renamed, repriced or retired in the
 * aggregate changes the pages on the next build without anyone editing markup.
 *
 * The build fails rather than shipping unverified prices — see `loadCatalog`.
 */
import { fetchPricing, usd, type TextPricing } from "./pricing.ts";

/** Headline model. Every "flagship" mention on the site resolves through this. */
export const FLAGSHIP_ID = "glm-5.3";

/** Ids whose derived label would read wrong. Anything absent falls back to `deriveLabel`. */
const LABELS: Record<string, string> = {
	"hermes-3-8b-tee": "Hermes 3 8B · TEE",
	"deepseek-v4-flash": "DeepSeek V4 Flash",
	"glm-5.3": "GLM-5.3",
	"glm-5.3-flash": "GLM-5.3 Flash",
	"qwen3.5-122b-a10b": "Qwen3.5-122B-A10B",
	"qwen3.6-35b-a3b": "Qwen3.6-35B-A3B",
	"qwen3.6-27b": "Qwen3.6 27B",
	"qwen3.8-27b": "Qwen3.8 27B",
};

/** Segments that start with a digit are sizes/versions and stay uppercase: `k3-max` -> `K3 Max`. */
const deriveLabel = (id: string): string =>
	id
		.split("-")
		.map((s) => (/^\d/.test(s) ? s.toUpperCase() : s.charAt(0).toUpperCase() + s.slice(1)))
		.join(" ");

export interface CatalogModel {
	id: string;
	name: string;
	input: number;
	output: number;
	/** "$in / $out", pre-formatted for the markup. */
	pair: string;
}

export interface Catalog {
	flagship: CatalogModel;
	/** Everything but the flagship, cheapest output first. */
	others: CatalogModel[];
}

const toModel = (id: string, p: TextPricing): CatalogModel => ({
	id,
	name: LABELS[id] ?? deriveLabel(id),
	input: p.price_per_million_input_tokens,
	output: p.price_per_million_output_tokens,
	pair: `${usd(p.price_per_million_input_tokens)} / ${usd(p.price_per_million_output_tokens)}`,
});

let pending: Promise<Catalog> | undefined;

/**
 * Throws when the aggregate is unreachable or the flagship is gone, which fails
 * the build: a deploy that cannot verify its prices must not ship.
 * Memoised so a multi-page build fetches once.
 */
export function loadCatalog(): Promise<Catalog> {
	pending ??= (async () => {
		const byId = await fetchPricing(15000);
		const flagship = byId.get(FLAGSHIP_ID);
		if (!flagship) {
			throw new Error(
				`LTAI_PRICING has no "${FLAGSHIP_ID}". Point FLAGSHIP_ID at a served model (src/lib/catalog.ts).`,
			);
		}
		const others = [...byId]
			.filter(([id]) => id !== FLAGSHIP_ID)
			.map(([id, p]) => toModel(id, p))
			.sort((a, b) => a.output - b.output);
		return { flagship: toModel(FLAGSHIP_ID, flagship), others };
	})();
	return pending;
}

/** Bar width as a percentage of the priciest output rate in `models`. */
export const barWidth = (m: CatalogModel, models: CatalogModel[]): number => {
	const max = Math.max(...models.map((x) => x.output));
	return max > 0 ? Math.round((m.output / max) * 100) : 0;
};
