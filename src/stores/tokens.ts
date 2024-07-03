import { defineStore } from "pinia";
import { AlephHttpClient } from "@aleph-sdk/client";

export type PoolType = "airdrop" | "raise" | "reserves" | "team";
export const poolTypeToPrettyName: Record<PoolType, string> = {
	airdrop: "Airdrop and Incentives",
	raise: "Raise",
	reserves: "Reserves",
	team: "Team",
};
type PoolStat = {
	name: PoolType;
	prettyName: string;
	distributed: number;
	total: number;
	totalPercentage: number;
	prettyTotal: string;
	color: string;
};

type TokensStoreState = {
	pools: Record<PoolType, { type: string; total: number; distributed: number }> | null;
};

const AGGREGATE_PUBLISHER_ADDRESS = "0xCBFc3EeC41CBBfCAcc50337d712890C47a14ba99";
const AGGREGATE_KEYS = ["info"];

export const useTokensStore = defineStore("tokens", {
	state: (): TokensStoreState => ({ pools: null }),
	getters: {
		getTotalSupply(): number {
			if (this.pools === null) {
				return 0;
			}
			return this.pools.raise.total + this.pools.airdrop.total + this.pools.reserves.total + this.pools.team.total;
		},
		getCirculatingSupply(): number {
			if (this.pools === null) {
				return 0;
			}
			return (
				this.pools.raise.distributed +
				this.pools.airdrop.distributed +
				this.pools.reserves.distributed +
				this.pools.team.distributed
			);
		},
		getPoolsStats(): PoolStat[] {
			if (this.pools === null) {
				return [];
			}
			const totalSupply = this.getTotalSupply;

			return [
				{
					name: "raise",
					prettyName: poolTypeToPrettyName.raise,
					distributed: this.pools.raise.distributed,
					total: this.pools.raise.total,
					totalPercentage: (this.pools.raise.total / totalSupply) * 100,
					prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(this.pools.raise.total),
					color: "bg-majorelle-700",
				},
				{
					name: "airdrop",
					prettyName: poolTypeToPrettyName.airdrop,
					distributed: this.pools.airdrop.distributed,
					total: this.pools.airdrop.total,
					totalPercentage: (this.pools.airdrop.total / totalSupply) * 100,
					prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(this.pools.airdrop.total),
					color: "bg-[#FCCBFF]",
				},
				{
					name: "reserves",
					prettyName: poolTypeToPrettyName.reserves,
					distributed: this.pools.reserves.distributed,
					total: this.pools.reserves.total,
					totalPercentage: (this.pools.reserves.total / totalSupply) * 100,
					prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(this.pools.reserves.total),
					color: "bg-[#D288FF]",
				},
				{
					name: "team",
					prettyName: poolTypeToPrettyName.team,
					distributed: this.pools.team.distributed,
					total: this.pools.team.total,
					totalPercentage: (this.pools.team.total / totalSupply) * 100,
					prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(this.pools.team.total),
					color: "bg-[#644DF9]",
				},
			];
		},
	},
	actions: {
		async fetchTokenPools() {
			const client = new AlephHttpClient();

			const tokensData = await client.fetchAggregates(AGGREGATE_PUBLISHER_ADDRESS, AGGREGATE_KEYS);
			this.pools = tokensData.info.pools;
		},
	},
});
