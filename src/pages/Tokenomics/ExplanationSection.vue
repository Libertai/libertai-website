<script lang="ts" setup>
import { computed } from "vue";
import { useTokensStore } from "@/stores/tokens.ts";
import { storeToRefs } from "pinia";

const tokensStore = useTokensStore();

const { getPoolsStats } = storeToRefs(tokensStore);

const textSections = computed(() => [
	{
		title: "Initial Token Supply",
		text: "The total token supply is 60 million, with 13.1 million available at the TGE. Over the next 10 years, the rest will be distributed among investors, the development team, and the community to ensure gradual and stable distribution.",
	},
	{
		title: "Raise",
		text: `${getPoolsStats.value.find((s) => s.name === "raise")?.totalPercentage.toFixed(0)}% of the tokens (${getPoolsStats.value.find((s) => s.name === "raise")?.prettyTotal}) are allocated for the pre-launch raise. These tokens are distributed at the Token Generation Event (TGE) and over 24 months to raise initial funds and ensure early supporters have a stake in the project. Any unsold tokens from the raise will be allocated to reserves. At the TGE, 50% of the tokens will be available, with the remainder being gradually vested. `,
	},
	{
		title: "Reserves",
		text: `${getPoolsStats.value.find((s) => s.name === "reserves")?.totalPercentage.toFixed(0)}% of the tokens (${getPoolsStats.value.find((s) => s.name === "reserves")?.prettyTotal}) are available as reserves, including 5M at the Token Generation Event (TGE). A portion of these reserves will be dedicated to enhancing Uniswap V3 pools for liquidity, while the remainder will be accessible for future fundraising, market making, and other critical purposes.`,
	},
	{
		title: "Team",
		text: `${getPoolsStats.value.find((s) => s.name === "team")?.totalPercentage.toFixed(0)}% of the tokens (${getPoolsStats.value.find((s) => s.name === "team")?.prettyTotal}) are allocated to the team, including early contributors and advisors, with a release schedule over 7 years. This incentivizes the team to continue developing the project. Initially, 1 million tokens are available at TGE, with the remainder distributed over 7 years.`,
	},
	{
		title: "Airdrop and Incentives",
		text: `${getPoolsStats.value.find((s) => s.name === "airdrop")?.totalPercentage.toFixed(0)}% of the tokens (${getPoolsStats.value.find((s) => s.name === "airdrop")?.prettyTotal}) are reserved for community airdrops, including the Aleph airdrop and future campaigns to reward and engage community members. These tokens are released gradually over 10+ years to ensure stability and sustained community involvement.`,
	},
]);
</script>

<template>
	<section class="relative flex justify-center py-8">
		<div class="relative w-[1440px] overflow-hidden px-20 pt-16 max-lg:px-12">
			<div v-for="section in textSections.values()" :key="section.title">
				<h3 class="pb-4 text-left font-light text-majorelle-500 max-lg:hidden">{{ section.title }}</h3>
				<h4 class="pb-4 text-center font-light text-majorelle-500 lg:hidden">{{ section.title }}</h4>
				<p class="body-default pb-16 text-left text-majorelle-800 max-lg:hidden">{{ section.text }}</p>
				<p class="body-small pb-16 text-center text-majorelle-800 lg:hidden">{{ section.text }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
