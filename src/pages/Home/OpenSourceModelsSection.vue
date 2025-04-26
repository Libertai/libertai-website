<script lang="ts" setup>
import LModelCard from "../../components/LModelCard.vue";
type OpenSourceModelSection = {
	id: number;
	name: string;
	imageRotation: number;
	description: string;
}

const sections: OpenSourceModelSection[] = [
	{
		id: 1,
		name: "Hermes 3",
		imageRotation: 0,
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data."
	},
	{
		id: 2,
		name: "Hermes 3",
		imageRotation: 90,
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data."
	},
	{
		id: 3,
		name: "Hermes 3",
		imageRotation: 180,
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data."
	},
	{
		id: 4,
		name: "Hermes 3",
		imageRotation: -90,
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data."
	}
]
</script>

<template>
	<section class="bg-neutral-black pb-36 pt-40 max-lg:pb-20 max-lg:pt-32">
		<div class="flex justify-between px-32">
			<div>
				<p class="text-[#6A7089] text-[14px]">[ By the people, for the people ]</p>
				<h3 class="mt-2 text-neutral-white">Latest Open-Source Models</h3>
			</div>
			<a href="https://docs.libertai.io" class="flex items-center justify-center mt-5 border rounded-[20px] border-[#6A7089] w-28 h-10">
				<p class="text-neutral-white 11px lg:text-[13px]">Learn More</p>
			</a>
		</div>
		<div class="grid gap-x-2 gap-y-12 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 mt-24 px-24 ml-2">
			<LModelCard
				v-for="model in sections"
				:key="model.id"
				:description="model.description"
				:name="model.name"
				:imageRotation="model.imageRotation"
			/>
		</div>
	</section>
</template>

<style scoped>
div.heading {
	grid-area: heading;
}
</style>