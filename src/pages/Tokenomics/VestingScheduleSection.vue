<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";

const stats = [
	{
		name: "Initial Raise",
		value: "1M",
		percent: "8%",
		color: "bg-majorelle-700",
	},
	{
		name: "Initial Airdrop and Incentives",
		value: "6.1M",
		percent: "46%",
		color: "bg-[#FCCBFF]",
	},
	{
		name: "Initial Reserves",
		value: "5M",
		percent: "38%",
		color: "bg-[#D288FF]",
	},
	{
		name: "Initial Team",
		value: "1M",
		percent: "8%",
		color: "bg-primary",
	},
];
</script>

<template>
	<section>
		<div class="relative flex justify-center py-8">
			<div class="relative flex w-[1440px] flex-col overflow-hidden px-20 py-12 max-lg:px-12">
				<div class="justify-center space-y-6 py-6 text-center max-lg:px-4">
					<LTinyHeading>Gradual release</LTinyHeading>
					<h2 class="text-majorelle-500 max-lg:hidden">Vesting Schedule</h2>
					<h3 class="hidden text-majorelle-500 max-lg:block">Vesting Schedule</h3>
					<p class="body-default text-center text-majorelle-800">
						The token $LTAI will be minted linearly with an initial supply of 60 million, and 21 million will be
						distributed gradually over a decade through an airdrop. There will be an 8% raise at the Token Generation
						Event (TGE), with the remaining tokens released gradually over 24 months. Community reserves will be vested
						for 7 years, and the team tokens will have 1 million tokens released upfront, with the rest vested over 7
						years.
					</p>
					<p class="body-default px-36 text-center text-majorelle-800 max-lg:px-4">
						LibertAI's implementation of a linear vesting schedule ensures stability, long-term viability, and community
						trust. Tokens are released gradually over specified periods, as described below:
					</p>
				</div>

				<div class="grid md:grid-cols-[60%,40%]">
					<div class="flex items-center justify-center rounded-xl px-12 py-8 shadow-lg max-lg:px-4">
						<img alt="Vesting" class="max-sm:hidden" src="../../assets/tokenomics/vesting.png" />
						<img alt="Vesting" class="mx-auto sm:hidden" src="../../assets/tokenomics/vesting_mobile.png" />
					</div>
					<div class="flex flex-col justify-center space-y-4 max-md:pt-5">
						<div
							v-for="stat in stats"
							:key="stat.name"
							class="relative ml-5 mr-3 flex h-24 items-center justify-center rounded-3xl shadow-lg max-md:mx-0"
						>
							<div class="flex justify-center max-lg:flex-col max-lg:px-4">
								<div :class="stat.color + ' absolute left-0 top-0 flex h-full w-5 items-center justify-center'" />
								<p class="body-bold-default w-48 text-left text-majorelle-700 max-lg:w-auto max-lg:text-center">
									{{ stat.name }}
								</p>
								<div class="flex items-center max-lg:justify-center">
									<p class="body-bold-default pr-1 text-center text-majorelle-700">{{ stat.value }}</p>
									<p class="body-default text-center text-majorelle-400">({{ stat.percent }})</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
