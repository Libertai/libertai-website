<script setup lang="ts">
const stats = [
	{
		name: "Raise",
		percent: 36,
		color: "bg-[#644DF9]",
	},
	{
		name: "Raise",
		percent: 31,
		color: "bg-[#D288FF]",
	},
	{
		name: "Raise",
		percent: 28,
		color: "bg-[#FCCBFF]",
	},
	{
		name: "Raise",
		percent: 5,
		color: "bg-majorelle-700",
	},
];
</script>

<template>
	<section class="relative flex justify-center">
		<div class="relative overflow-hidden px-20 py-12" style="width: 1440px">
			<div class="justify-center rounded-xl px-12 py-6 shadow-lg">
				<p class="body-bold-large pb-4 text-center text-majorelle-700">Live Circulating Total Supply</p>
				<div class="flex">
					<div class="w-288 my-2 flex h-4 justify-start bg-majorelle-300" style="width: 1000px">
						<div
							v-for="stat in stats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (1000 / 3) * (stat.percent / 100) + 'px' }"
						/>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>

					<p class="body-default w-64 pl-8">21,100,000 LTAI</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
