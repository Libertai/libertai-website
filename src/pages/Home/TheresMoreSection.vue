<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

import image_1 from "../../assets/image_1.jpg";
import image_2 from "../../assets/image_2.jpg";
import image_3 from "../../assets/image_3.jpg";
import image_4 from "../../assets/image_4.jpg";
import image_5 from "../../assets/image_5.jpg";
import image_6 from "../../assets/image_6.jpg";

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
	{
		active: false,
		title: "Agent",
		image: image_6,
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
	const windowWidth = window.innerWidth;
	const cardContainer = document.querySelector(".Tcard-container") as HTMLElement;
	if (!cardContainer) return;
	const cardQuery = cardContainer.querySelector(".Tcard") as HTMLElement;
	if (!cardQuery) return;
	const cardWidth = cardQuery.offsetWidth;
	const containerWidth = cardContainer.offsetWidth;
	const offset_mobile = (containerWidth - cardWidth) / 2 - activeIndex.value * cardWidth * 1.07;
	const offset = -activeIndex.value * cardWidth * 1.07;

	cardContainer.style.transform = `translateX(${windowWidth < 1024 ? offset_mobile : offset}px)`;
};

watch(activeIndex, () => {
	updateCards();
	centerActiveCard();
});

onMounted(() => {
	const windowWidth = window.innerWidth;
	setInterval(() => {
		if (windowWidth < 1024) {
			activeIndex.value = (activeIndex.value + 1) % cards.value.length;
		}
	}, 2000);
	centerActiveCard();
});
</script>

<template>
	<section class="relative flex justify-center bg-neutral-white">
		<div
			class="flex w-full flex-col items-center justify-center gap-6 overflow-x-hidden pb-56 pt-24"
			style="width: 1440px"
		>
			<div class="flex w-full flex-col justify-start gap-4 px-24 py-8 max-lg:px-12">
				<div class="flex text-majorelle-800 max-lg:hidden">
					<h2>But wait, there’s</h2>
					&nbsp;
					<h2 class="text-majorelle-500">more</h2>
				</div>
				<div class="flex w-full justify-center text-majorelle-800 lg:hidden">
					<p class="body-bold-large">But wait, there’s</p>
					&nbsp;
					<p class="body-bold-large text-majorelle-500">more</p>
				</div>
				<p class="body-small max-lg:text-center">
					We are constantly working on new features and improvements to make your experience better.
				</p>
			</div>
			<div class="flex-row items-center gap-6 lg:flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#000000"
					class="cursor-pointer"
					:onclick="
						() => {
							activeIndex = (activeIndex - 1 + cards.length) % cards.length;
							centerActiveCard();
						}
					"
				>
					<path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
				</svg>

				<div class="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
					<div
						class="Tcard-container flex w-310 transform flex-row gap-6 transition-transform duration-500 ease-in-out max-xl:w-260"
					>
						<div v-for="card in cards" :key="card.title" :class="{ 'card-active': card.active, card: true }">
							<div
								class="Tcard relative flex h-104 w-72 select-none rounded-2xl bg-majorelle-400 px-6 pt-80"
								:style="`background-image: url(${card.image}); background-size: cover; background-position: center; background-repeat: no-repeat;`"
							>
								<div
									:class="
										(card.enabled ? 'bg-gradient-to-tr from-majorelle-500 to-[#FCCBFF]' : 'bg-neutral-500') +
										' absolute right-4 top-4 flex h-12 w-24 select-none items-center justify-center rounded-full py-3 text-center text-tertiary'
									"
								>
									<p v-if="!card.enabled" class="rich-bold-12 px-4">COMING SOON</p>
									<p v-if="card.enabled" class="rich-bold-12 px-4">LIVE</p>
								</div>
								<p class="rich-bold-24 text-left text-neutral-white">{{ card.title }}</p>
							</div>
						</div>
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#000000"
					class="cursor-pointer"
					:onclick="
						() => {
							activeIndex = (activeIndex + 1) % cards.length;
							centerActiveCard();
						}
					"
				>
					<path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
				</svg>
			</div>
			<div class="flex flex-row gap-2 lg:hidden">
				<div v-for="card in cards" :key="card.title">
					<div
						:class="`h-2 ${card.active ? 'w-20 bg-majorelle-500' : 'w-2 bg-majorelle-300'} rounded-full transition-all duration-300 ease-out`"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
