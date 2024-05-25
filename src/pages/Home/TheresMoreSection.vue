<script setup lang="ts">
import image_1 from "../../assets/Image.png";

const cards = [
	{
		title: "Chat Bot",
		image: image_1,
		link: "https://chat.libertai.io/",
	},
	{
		title: "Voice Transcription",
		image: image_1,
		link: "https://chat.libertai.io/",
	},
	{
		title: "Knowledge Databases",
		image: image_1,
		link: "https://chat.libertai.io/",
	},
	{
		title: "Image",
		image: image_1,
		link: "https://chat.libertai.io/",
	},
	{
		title: "Multi-Modal Inference for LLMs",
		image: image_1,
		link: "https://chat.libertai.io/",
	},
];
</script>

<template>
	<section class="relative flex justify-center">
		<div class="flex w-full items-center justify-center" style="width: 1440px">
			<div v-for="card in cards" :key="card.title">
				<card
					class="relative flex h-72 w-64 items-end rounded-2xl bg-majorelle-400 px-4 pt-72 shadow-2xl"
					:style="`background-image: url(${card.image}); background-size: cover; background-position: center; background-repeat: no-repeat;`"
				>
					<p class="rich-bold-24 text-left">{{ card.title }}</p>
				</card>
			</div>
		</div>
	</section>
</template>

<style scoped>
div.image-background {
	background-image: url("../../assets/company.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
