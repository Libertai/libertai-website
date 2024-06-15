<script setup lang="ts">
const textSections = [
	{
		title: "Raise",
		text: "LibertAI tokens offer various opportunities for users to participate in the ecosystem and earn rewards. A pool of 21 Million tokens has been allocated to network growth with distribution of these tokens detailed below.",
	},
	{
		title: "Reserves + Community",
		text: "LibertAI tokens offer various opportunities for users to participate in the ecosystem and earn rewards. A pool of 21 Million tokens has been allocated to network growth with distribution of these tokens detailed below.",
	},
	{
		title: "Team",
		text: "The LibertAI team has an initial token allocation of 1 million tokens, with a maximum of 9 million tokens to be reached after 7 years. This structured token distribution ensures a balanced and fair allocation for the team and other stakeholders, promoting long-term growth and stability within the LibertAI ecosystem. The team consists of dedicated professionals hailing from diverse backgrounds and spread across multiple continents. This incentivization encourages core team members to actively contribute to the development of LibertAI for an extended duration.",
	},
	{
		title: "Airdrop/Network",
		text: "LibertAI tokens offer various opportunities for users to participate in the ecosystem and earn rewards. A pool of 21 Million tokens has been allocated to network growth with distribution of these tokens detailed below.",
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
