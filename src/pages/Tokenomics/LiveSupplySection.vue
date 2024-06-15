<script lang="ts" setup>
const totalSupply = 60000000;
// const actualSupply = 21000000;
const stats = [
	{
		name: "Raise",
		value: 7500000,
		color: "bg-[#644DF9]"
	},
	{
		name: "Raise",
		value: 6600000,
		color: "bg-[#D288FF]"
	},
	{
		name: "Raise",
		value: 6000000,
		color: "bg-[#FCCBFF]"
	},
	{
		name: "Raise",
		value: 1000000,
		color: "bg-majorelle-700"
	}
];
</script>

<template>
	<section class="relative flex justify-center">
		<div class="relative overflow-hidden px-20 py-12 max-lg:px-12" style="width: 1440px">
			<div class="justify-center rounded-xl px-12 py-6 shadow-lg max-lg:px-4">
				<p class="body-bold-large pb-4 text-center text-majorelle-700">Live Circulating Total Supply</p>
				<p class="body-bold-small pb-4 text-center text-majorelle-700">Coming soon</p>
				<!--				<div class="flex items-center justify-center max-2xl:flex-col">-->
				<!--					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-xl:hidden" style="width: 1000px">-->
				<!--						<div-->
				<!--							v-for="stat in stats"-->
				<!--							:key="stat.name"-->
				<!--							:class="stat.color"-->
				<!--							:style="{ width: (1000 * stat.value) / totalSupply + 'px' }"-->
				<!--						></div>-->
				<!--						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />-->
				<!--					</div>-->
				<!--					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-lg:hidden xl:hidden" style="width: 800px">-->
				<!--						<div-->
				<!--							v-for="stat in stats"-->
				<!--							:key="stat.name"-->
				<!--							:class="stat.color"-->
				<!--							:style="{ width: (800 * stat.value) / totalSupply + 'px' }"-->
				<!--						/>-->
				<!--						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />-->
				<!--					</div>-->
				<!--					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-md:hidden lg:hidden" style="width: 500px">-->
				<!--						<div-->
				<!--							v-for="stat in stats"-->
				<!--							:key="stat.name"-->
				<!--							:class="stat.color"-->
				<!--							:style="{ width: (500 * stat.value) / totalSupply + 'px' }"-->
				<!--						/>-->
				<!--						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />-->
				<!--					</div>-->
				<!--					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-sm:hidden md:hidden" style="width: 400px">-->
				<!--						<div-->
				<!--							v-for="stat in stats"-->
				<!--							:key="stat.name"-->
				<!--							:class="stat.color"-->
				<!--							:style="{ width: (400 * stat.value) / totalSupply + 'px' }"-->
				<!--						/>-->
				<!--						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />-->
				<!--					</div>-->
				<!--					<div class="my-2 flex h-4 justify-start bg-majorelle-300 sm:hidden" style="width: 200px">-->
				<!--						<div-->
				<!--							v-for="stat in stats"-->
				<!--							:key="stat.name"-->
				<!--							:class="stat.color"-->
				<!--							:style="{ width: (200 * stat.value) / totalSupply + 'px' }"-->
				<!--						/>-->
				<!--						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />-->
				<!--					</div>-->

				<!--					<p class="body-default w-64 pl-8">21,100,000 LTAI</p>-->
				<!--				</div>-->
			</div>
		</div>
	</section>
</template>
