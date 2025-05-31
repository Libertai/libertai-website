import { useEffect, useState } from "react";
import { AlephHttpClient } from "@aleph-sdk/client";

export type PoolType = "airdrop" | "raise" | "reserves" | "team" | "total";

export const poolTypeToPrettyName: Record<PoolType, string> = {
	airdrop: "Airdrop",
	raise: "Raise",
	reserves: "Reserves",
	team: "Team",
	total: "Total",
};

type PoolStat = {
	name: PoolType;
	prettyName: string;
	distributed: number;
	prettyDistributed: string;
	total: number;
	totalPercentage: number;
	prettyTotal: string;
	color: string;
};

type TokenPoolData = {
	pools: Record<PoolType, { type: string; total: number; distributed: number }> | null;
	totalSupply: number;
	circulatingSupply: number;
	poolsStats: PoolStat[];
	isLoading: boolean;
	error: string | null;
};

const AGGREGATE_PUBLISHER_ADDRESS = "0xCBFc3EeC41CBBfCAcc50337d712890C47a14ba99";
const AGGREGATE_KEYS = ["info"];

export function useTokenData(): TokenPoolData {
	const [pools, setPools] = useState<Record<
		PoolType,
		{
			type: string;
			total: number;
			distributed: number;
		}
	> | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchTokenPools = async () => {
		try {
			setIsLoading(true);
			setError(null);

			const client = new AlephHttpClient();
			const tokensData = await client.fetchAggregates(AGGREGATE_PUBLISHER_ADDRESS, AGGREGATE_KEYS);
			setPools(tokensData.info.pools);
		} catch (err) {
			console.error("Failed to fetch token pools:", err);
			setError("Failed to fetch token data");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchTokenPools();
	}, []);

	const getTotalSupply = (): number => {
		if (pools === null) {
			return 0;
		}
		return pools.raise.total + pools.airdrop.total + pools.reserves.total + pools.team.total;
	};

	const getCirculatingSupply = (): number => {
		if (pools === null) {
			return 0;
		}
		return pools.raise.distributed + pools.airdrop.distributed + pools.reserves.distributed + pools.team.distributed;
	};

	const getPoolsStats = (): PoolStat[] => {
		if (pools === null || isLoading) {
			return [
				{
					name: "raise",
					prettyName: poolTypeToPrettyName.raise,
					distributed: 0,
					prettyDistributed: "0",
					total: 0,
					totalPercentage: 0,
					prettyTotal: "0",
					color: "#6A7089",
				},
				{
					name: "airdrop",
					prettyName: poolTypeToPrettyName.airdrop,
					distributed: 0,
					prettyDistributed: "0",
					total: 0,
					totalPercentage: 0,
					prettyTotal: "0",
					color: "#FCCBFF",
				},
				{
					name: "reserves",
					prettyName: poolTypeToPrettyName.reserves,
					distributed: 0,
					prettyDistributed: "0",
					total: 0,
					totalPercentage: 0,
					prettyTotal: "0",
					color: "#D288FF",
				},
				{
					name: "team",
					prettyName: poolTypeToPrettyName.team,
					distributed: 0,
					prettyDistributed: "0",
					total: 0,
					totalPercentage: 0,
					prettyTotal: "0",
					color: "#644DF9",
				},
				{
					name: "total" as PoolType,
					prettyName: "Total",
					distributed: 0,
					prettyDistributed: "0",
					total: 0,
					totalPercentage: 100,
					prettyTotal: "0",
					color: "#FFF",
				},
			];
		}

		const totalCirculating = getCirculatingSupply();

		const poolsData = [
			{
				name: "raise" as PoolType,
				prettyName: poolTypeToPrettyName.raise,
				distributed: pools.raise.distributed,
				prettyDistributed: Intl.NumberFormat("en", { notation: "compact" }).format(pools.raise.distributed),
				total: pools.raise.distributed,
				totalPercentage: totalCirculating > 0 ? (pools.raise.distributed / totalCirculating) * 100 : 0,
				prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(pools.raise.distributed),
				color: "#6A7089",
			},
			{
				name: "airdrop" as PoolType,
				prettyName: poolTypeToPrettyName.airdrop,
				distributed: pools.airdrop.distributed,
				prettyDistributed: Intl.NumberFormat("en", { notation: "compact" }).format(pools.airdrop.distributed),
				total: pools.airdrop.distributed,
				totalPercentage: totalCirculating > 0 ? (pools.airdrop.distributed / totalCirculating) * 100 : 0,
				prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(pools.airdrop.distributed),
				color: "#FCCBFF",
			},
			{
				name: "reserves" as PoolType,
				prettyName: poolTypeToPrettyName.reserves,
				distributed: pools.reserves.distributed,
				prettyDistributed: Intl.NumberFormat("en", { notation: "compact" }).format(pools.reserves.distributed),
				total: pools.reserves.distributed,
				totalPercentage: totalCirculating > 0 ? (pools.reserves.distributed / totalCirculating) * 100 : 0,
				prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(pools.reserves.distributed),
				color: "#D288FF",
			},
			{
				name: "team" as PoolType,
				prettyName: poolTypeToPrettyName.team,
				distributed: pools.team.distributed,
				prettyDistributed: Intl.NumberFormat("en", { notation: "compact" }).format(pools.team.distributed),
				total: pools.team.distributed,
				totalPercentage: totalCirculating > 0 ? (pools.team.distributed / totalCirculating) * 100 : 0,
				prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(pools.team.distributed),
				color: "#644DF9",
			},
		];

		// Add total row with full width bar (100%)
		poolsData.push({
			name: "total" as PoolType,
			prettyName: "Total",
			distributed: totalCirculating,
			prettyDistributed: Intl.NumberFormat("en", { notation: "compact" }).format(totalCirculating),
			total: totalCirculating,
			totalPercentage: 100,
			prettyTotal: Intl.NumberFormat("en", { notation: "compact" }).format(totalCirculating),
			color: "#FFF",
		});

		return poolsData;
	};

	return {
		pools,
		totalSupply: getTotalSupply(),
		circulatingSupply: getCirculatingSupply(),
		poolsStats: getPoolsStats(),
		isLoading,
		error,
	};
}
