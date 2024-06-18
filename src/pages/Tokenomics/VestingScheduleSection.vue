<script lang="ts" setup>
const stats = [
	{
		name: "Initial Raise",
		value: "7.5M",
		percent: "36%",
		color: "bg-majorelle-700",
	},
	{
		name: "Initial Airdrop and Incentives",
		value: "7.1M",
		percent: "35%",
		color: "bg-[#FCCBFF]",
	},
	{
		name: "Initial Reserves",
		value: "5M",
		percent: "24%",
		color: "bg-[#D288FF]",
	},
	{
		name: "Initial Team",
		value: "1M",
		percent: "5%",
		color: "bg-primary",
	},
];
</script>

<template>
	<section>
		<div class="relative flex justify-center py-8">
			<div class="relative flex flex-col overflow-hidden px-20 py-12 max-lg:px-12" style="width: 1440px">
				<div class="x-12 justify-center space-y-6 py-6 text-center max-lg:px-4">
					<div class="mx-auto flex w-32 justify-center bg-majorelle-500 bg-opacity-10 px-2 py-1">
						<p class="body-small">Gradual release</p>
					</div>
					<h2 class="text-majorelle-500 max-lg:hidden">Vesting Schedule</h2>
					<h3 class="hidden text-majorelle-500 max-lg:block">Vesting Schedule</h3>
					<p class="body-default text-center text-majorelle-800">
						The token $LTAI will be minted linearly with an initial supply of 60 million, and 21 million will be
						distributed gradually over a decade through an airdrop. There will be a 25% raise at the Token Generation
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
						<img alt="Vesting" class="max-sm:hidden" src="../../assets/vesting.png" />
						<img alt="Vesting" class="mx-auto sm:hidden" src="../../assets/vesting_mobile.png" />
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
