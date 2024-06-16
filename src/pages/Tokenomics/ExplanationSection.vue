<script lang="ts" setup>
const textSections = [
	{
		title: "Initial Token Supply",
		text: "The total token supply is 60 million, with 20.6 million available at the TGE. Over the next 24 months, 45.5 million tokens will be distributed among investors, the development team, and the community to ensure gradual and stable distribution.",
	},
	{
		title: "Raise",
		text: "25% of the tokens (15M) are allocated for the pre-launch raise. These tokens are distributed at the Token Generation Event (TGE) and over 24 months to raise initial funds and ensure early supporters have a stake in the project. 50% are available at TGE, with the rest vested gradually.",
	},
	{
		title: "Reserves + Community",
		text: "25% of the tokens (15M) are set aside as reserves for future incentives, marketing, and community rewards. Initially, 5 million tokens are available as reserves, with the total reserves reaching 15 million over 7 years. Part of these reserves will be added to Uniswap V3 pools liquidity.",
	},
	{
		title: "Team",
		text: "15% of the tokens (9M) are allocated to the team, including early contributors and advisors, with a release schedule over 7 years. This incentivizes the team to continue developing the project. Initially, 1 million tokens are available at TGE, with the remainder distributed over 7 years.",
	},
	{
		title: "Airdrop/Network",
		text: "35% of the tokens (21M) are reserved for community airdrops, including the Aleph airdrop and future campaigns to reward and engage community members. These tokens are released gradually over 10+ years to ensure stability and sustained community involvement.",
	},
];
</script>

<template>
	<section class="relative flex justify-center py-8">
		<div class="relative overflow-hidden px-20 pt-16 max-lg:px-12" style="width: 1440px">
			<div v-for="section in textSections" :key="section.title">
				<h3 class="pb-4 text-left font-light text-majorelle-500 max-lg:hidden">{{ section.title }}</h3>
				<h4 class="pb-4 text-center font-light text-majorelle-500 lg:hidden">{{ section.title }}</h4>
				<p class="body-default pb-16 text-left text-majorelle-800 max-lg:hidden">{{ section.text }}</p>
				<p class="body-small pb-16 text-center text-majorelle-800 lg:hidden">{{ section.text }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
