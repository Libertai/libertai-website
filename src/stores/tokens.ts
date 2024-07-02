import { defineStore } from "pinia";
import { AlephHttpClient } from "@aleph-sdk/client";

export type PoolType = "airdrop" | "raise" | "reserves" | "team";

type TokensStoreState = {
	pools: Record<PoolType, { type: string; total: number; distributed: number }> | null;
};

const AGGREGATE_PUBLISHER_ADDRESS = "0xCBFc3EeC41CBBfCAcc50337d712890C47a14ba99";
const AGGREGATE_KEYS = ["info"];

export const useTokensStore = defineStore("tokens", {
	state: (): TokensStoreState => ({ pools: null }),
	actions: {
		async fetchTokenPools() {
			const client = new AlephHttpClient();

			const tokensData = await client.fetchAggregates(AGGREGATE_PUBLISHER_ADDRESS, AGGREGATE_KEYS);
			this.pools = tokensData.info.pools;
		},
	},
});
