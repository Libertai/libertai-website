/**
 * Build-time model catalog. Every model name, capability and price rendered
 * into the site comes from the LTAI_PRICING aggregate, so a model that is
 * renamed, repriced or retired changes the pages on the next build without
 * anyone editing markup.
 *
 * The build fails rather than shipping unverified data — see `loadCatalog`.
 */
import { fetchTextModels, usd, type AggregateModel } from "./pricing.ts";

/** Headline model. Every "flagship" mention on the site resolves through this. */
export const FLAGSHIP_ID = "glm-5.3";

export interface CatalogModel {
	id: string;
	name: string;
	input: number;
	output: number;
	/** "$in / $out", pre-formatted for the markup. */
	pair: string;
	/** Empty when the aggregate reports no context window. */
	context: string;
	/** Capability chips, in display order. */
	caps: string[];
}

export interface Catalog {
	flagship: CatalogModel;
	/** Everything but the flagship, cheapest output first. */
	others: CatalogModel[];
}

/** Powers of two read as 256K, everything else rounds decimally: 200000 -> 200K. */
const formatContext = (tokens?: number): string => {
	if (!tokens) return "";
	const binary = tokens / 1024;
	return Number.isInteger(binary) ? `${binary}K` : `${Math.round(tokens / 1000)}K`;
};

const toModel = (m: AggregateModel): CatalogModel => {
	const c = m.capabilities;
	return {
		id: m.id,
		name: m.name,
		input: m.pricing.price_per_million_input_tokens,
		output: m.pricing.price_per_million_output_tokens,
		pair: `${usd(m.pricing.price_per_million_input_tokens)} / ${usd(m.pricing.price_per_million_output_tokens)}`,
		context: formatContext(c.context_window),
		caps: [
			c.function_calling ? "Tools" : "",
			c.vision ? "Vision" : "",
			c.reasoning ? "Reasoning" : "",
			c.tee ? "TEE" : "",
		].filter(Boolean),
	};
};

let pending: Promise<Catalog> | undefined;

/**
 * Throws when the aggregate is unreachable or the flagship is gone, which fails
 * the build: a deploy that cannot verify its prices must not ship.
 * Memoised so a multi-page build fetches once.
 */
export function loadCatalog(): Promise<Catalog> {
	pending ??= (async () => {
		const byId = await fetchTextModels(15000);
		const flagship = byId.get(FLAGSHIP_ID);
		if (!flagship) {
			throw new Error(
				`LTAI_PRICING has no "${FLAGSHIP_ID}". Point FLAGSHIP_ID at a served model (src/lib/catalog.ts).`,
			);
		}
		const others = [...byId.values()]
			.filter((m) => m.id !== FLAGSHIP_ID)
			.map(toModel)
			.sort((a, b) => a.output - b.output);
		return { flagship: toModel(flagship), others };
	})();
	return pending;
}

/** Bar width as a percentage of the priciest output rate in `models`. */
export const barWidth = (m: CatalogModel, models: CatalogModel[]): number => {
	const max = Math.max(...models.map((x) => x.output));
	return max > 0 ? Math.round((m.output / max) * 100) : 0;
};
