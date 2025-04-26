<script lang="ts" setup>
import LModelCard from "../../components/LModelCard.vue";
import LSimpleCard from "../../components/LSimpleCard.vue";
type ServicesSection = {
	id: number;
	title: string;
	description: string;
	imgPath: string;
	linkName: string;
}

const sections: ServicesSection[] = [
	{
		id: 1,
		title: "Chat",
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data.",
		imgPath: "",
		linkName: "Chat Now"
	},
	{
		id: 2,
		title: "API",
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data.",
		imgPath: "",
		linkName: "Build Now"
	},
	{
		id: 3,
		title: "Developer Docs",
		description: "Chat freely with default privacy protection. Your AI journey, your privacy! We don't log or train models with your data.",
		imgPath: "",
		linkName: "Learn More"
	}
]
</script>

<template>
	<section class="bg-neutral-black pb-36 pt-40 max-lg:pb-20 max-lg:pt-32">
		<div class="flex justify-between px-32">
			<div>
				<p class="text-[#6A7089] text-[14px]">[ Services ]</p>
				<h3 class="mt-2 text-neutral-white">Evolve today, remain humain</h3>
			</div>
		</div>
		<div class="flex justify-between mt-10 px-32">
			<LSimpleCard
				v-for="service in sections"
				:key="service.id"
				:title="service.title"
				:description="service.description"
				:link-name="'Docs'"
				:link-path="'https://docs.libertai.io/agents/'"
				:icon-path="'/icon-chat.svg'"
				:hasLargeLinkButton="true"
			/>
		</div>
	</section>
</template>

<style scoped>
div.heading {
	grid-area: heading;
}
</style>