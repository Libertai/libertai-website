<script lang="ts" setup>
const stats = [
	{
		name: "Raise",
		value: "15M",
		percent: "25%",
		color: "bg-majorelle-700",
	},
	{
		name: "Airdrop and Incentives",
		value: "21M",
		percent: "35%",
		color: "bg-[#FCCBFF]",
	},
	{
		name: "Reserves",
		value: "15M",
		percent: "25%",
		color: "bg-[#D288FF]",
	},
	{
		name: "Team",
		value: "9M",
		percent: "15%",
		color: "bg-primary",
	},
];
</script>

<template>
	<section class="relative flex justify-center bg-gradient-to-b from-neutral-white py-8">
		<div class="relative w-[1440px] overflow-hidden px-20 py-12 max-lg:px-12">
			<div class="x-12 justify-center space-y-6 py-6 text-center max-lg:px-4">
				<div class="mx-auto flex w-40 justify-center bg-majorelle-500 bg-opacity-10 px-2 py-1">
					<p class="body-small">Let's break it down</p>
				</div>
				<h2 class="text-majorelle-500 max-lg:hidden">Overall total supply and distribution</h2>
				<h3 class="hidden text-majorelle-500 max-lg:block">Overall total supply and distribution</h3>
				<p class="body-default text-center text-majorelle-800">
					At launch, the LTAI token supply will be limited to 60 million (60,000,000), with initial allocations for the
					following ecosystem contributors:
				</p>
			</div>
			<div class="grid md:grid-cols-2">
				<div class="flex items-center justify-center rounded-2xl py-6 shadow-lg max-lg:px-4">
					<div>
						<img alt="Total supply" src="../../assets/total_supply_chart.png" width="368" height="368" />
					</div>
				</div>
				<div class="flex flex-col justify-center space-y-4 max-lg:px-4 max-md:pt-5">
					<div
						v-for="stat in stats"
						:key="stat.name"
						class="relative ml-5 mr-3 flex flex-col justify-center rounded-2xl py-2 shadow-lg max-md:mx-0"
					>
						<div :class="stat.color + ' absolute left-0 top-0 flex h-full w-5 items-center justify-center'" />
						<p class="body-bold-default pb-6 text-center text-majorelle-700">{{ stat.name }}</p>
						<div class="flex justify-center">
							<p class="body-default pr-1 text-center text-majorelle-700">{{ stat.value }}</p>
							<p class="body-default text-center text-majorelle-400">({{ stat.percent }})</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
