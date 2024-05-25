<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import image_1 from "../../assets/image_1.jpg";
import image_2 from "../../assets/image_2.jpg";
import image_3 from "../../assets/image_3.jpg";
import image_4 from "../../assets/image_4.jpg";
import image_5 from "../../assets/image_5.jpg";

const cards = ref([
	{
		active: true,
		title: "Chat Bot",
		image: image_1,
		enabled: true,
	},
	{
		active: false,
		title: "Voice Transcription",
		image: image_2,
		enabled: false,
	},
	{
		active: false,
		title: "Knowledge Databases",
		image: image_3,
		enabled: false,
	},
	{
		active: false,
		title: "Image",
		image: image_4,
		enabled: false,
	},
	{
		active: false,
		title: "Multi-Modal Inference for LLMs",
		image: image_5,
		enabled: false,
	},
]);

const activeIndex = ref(0);

const updateCards = () => {
	cards.value.forEach((card, index) => {
		card.active = index === activeIndex.value;
	});
};

const centerActiveCard = () => {
	const cardContainer = document.querySelector(".card-container");
	const cardWidth = cardContainer.querySelector(".card").offsetWidth;
	const containerWidth = cardContainer.offsetWidth;
	const offset = (containerWidth - cardWidth) / 10 - (activeIndex.value * cardWidth) / 5;

	cardContainer.style.transform = `translateX(${offset}px)`;
};

watch(activeIndex, () => {
	updateCards();
	centerActiveCard();
});

onMounted(() => {
	setInterval(() => {
		activeIndex.value = (activeIndex.value + 1) % cards.value.length;
	}, 3000);
	centerActiveCard();
});
</script>

<template>
	<section class="relative flex justify-center bg-neutral-white">
		<div class="flex w-full flex-col items-center justify-center gap-6 pb-56 pt-24" style="width: 1440px">
			<div class="flex w-full flex-col justify-start gap-4 px-12 py-8">
				<div class="flex text-majorelle-800">
					<h2>But wait, there’s</h2>
					&nbsp;
					<h2 class="text-majorelle-500">more</h2>
				</div>
				<p class="body-small">
					We are constantly working on new features and improvements to make your experience better.
				</p>
			</div>
			<div class="card-container flex transform flex-row gap-6 overflow-hidden">
				<div v-for="card in cards" :key="card.title" :class="{ 'card-active': card.active, card: true }">
					<card
						class="h-104 relative flex w-72 rounded-2xl bg-majorelle-400 px-6 pt-80 shadow-2xl"
						:style="`background-image: url(${card.image}); background-size: cover; background-position: center; background-repeat: no-repeat;`"
					>
						<div
							:class="
								'bg-' +
								(card.enabled ? 'gradient-to-tr from-majorelle-500 to-[#FCCBFF]' : 'neutral-500') +
								' absolute right-4 top-4 flex h-12 w-24 select-none items-center justify-center rounded-full py-3 text-center text-tertiary'
							"
						>
							<p v-if="!card.enabled" class="rich-bold-12 px-4">COMING SOON</p>
							<p v-if="card.enabled" class="rich-bold-12 px-4">LIVE</p>
						</div>
						<p class="rich-bold-24 text-left text-neutral-white">{{ card.title }}</p>
					</card>
				</div>
			</div>
			<div class="flex flex-row gap-2">
				<div v-for="card in cards" :key="card.title">
					<div
						:class="`h-2 ${card.active ? 'w-20 bg-majorelle-500' : 'w-2 bg-majorelle-300'} rounded-full transition-all duration-300 ease-out`"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.card-container {
	display: flex;
	transition: transform 0.5s ease;
}

.card-active {
	/* Add any additional styles for the active card */
}
</style>
