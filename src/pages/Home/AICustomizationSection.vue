<script setup lang="ts">
import LButton from "../../components/LButton.vue";
import AilonMusk from "../../assets/AilonMusk.png";
import Therapist from "../../assets/Therapist.png";
import VirtualBoyfriend from "../../assets/VirtualBoyfriend.png";
import VirtualGirlfriend from "../../assets/VirtualGirlfriend.png";
import Tromp from "../../assets/Tromp.png";
import { ref, onMounted, watch } from "vue";

const AIs = [
	{ text: "Tromp", image: Tromp },
	{ text: "Virtual Boyfriend", image: VirtualBoyfriend },
	{ text: "Virtual Girlfriend", image: VirtualGirlfriend },
	{ text: "AI-Lon Musk", image: AilonMusk },
	{ text: "Therapist", image: Therapist },
];

const roll = ref(1);
const isTransitioning = ref(false);

const centerActiveCard = () => {
	const cardContainer = document.querySelector(".AIcard-container") as HTMLElement;
	if (!cardContainer) return;
	const cardQuery = cardContainer.querySelector(".AIcard") as HTMLElement;
	if (!cardQuery) return;
	const cardWidth = cardQuery.offsetWidth;
	const containerWidth = cardContainer.offsetWidth;
	const offset = (containerWidth - cardWidth) / 2.3 - roll.value * cardWidth * 1.083;
	cardContainer.style.transform = `translateX(${offset}px)`;
};

const updateRoll = () => {
	isTransitioning.value = true;
	roll.value = (roll.value + 1) % (AIs.length * 16);
	if (roll.value === 0) {
		roll.value = 1;
	}
};

watch(roll, () => {
	centerActiveCard();
});

onMounted(() => {
	centerActiveCard();
	setInterval(updateRoll, 3000);
	centerActiveCard();
});
</script>

<template>
	<section class="flex justify-center overflow-hidden py-24">
		<div class="relative flex h-full" style="width: 1440px">
			<div class="absolute left-0 z-10 h-full w-64 bg-gradient-to-r from-neutral-white" />
			<div class="absolute right-full z-20 h-full w-full bg-neutral-white" />
			<div class="absolute left-full z-20 h-full w-full bg-neutral-white" />
			<div class="relative flex h-full w-3/5 flex-col max-lg:w-full">
				<div class="w-full items-center space-y-6 bg-neutral-white py-8 text-center max-lg:px-96 lg:hidden">
					<h3 class="px-12 max-sm:px-32">AI Customization, Privacy-First with libertAI</h3>

					<p class="body-small px-12 max-sm:px-32">
						Customize AI assistants for smooth integration into your workflows without compromising your privacy,
						keeping your data encrypted and under your control.
					</p>
					<div>
						<a href="https://chat.libertai.io/" class="text-majorelle-500">
							<LButton text="Customize Now" small />
						</a>
					</div>
				</div>
				<div
					class="AIcard-container flex gap-6 transition-transform duration-500 ease-in-out"
					@transitionend="isTransitioning = false"
				>
					<div
						v-for="(ai, index) in [
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
							...AIs,
						]"
						:key="index"
						class="AIcard flex w-72 flex-col items-center justify-center"
					>
						<div class="flex h-140 w-72 flex-col items-center overflow-hidden rounded-2xl border bg-neutral-white">
							<div class="relative top-0 h-124 w-full">
								<img :src="ai.image" class="absolute left-0 top-0 size-full object-cover" :alt="ai.text" />
							</div>
							<p class="rich-bold-18 mt-4 text-majorelle-800">{{ ai.text }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="z-20 h-full w-2/5 bg-neutral-white max-lg:hidden">
				<div class="py w-128 space-y-8 px-6 py-24 max-xl:w-96">
					<h2 class="max-xl:hidden">AI Customization, Privacy-First with libertAI</h2>
					<h3 class="xl:hidden">AI Customization, Privacy-First with libertAI</h3>
					<p class="body-small">
						Customize AI assistants for smooth integration into your workflows without compromising your privacy,
						keeping your data encrypted and under your control.
					</p>
					<div>
						<a href="https://chat.libertai.io/" class="text-majorelle-500">
							<LButton text="Customize Now" small />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.card-container {
	display: flex;
	transition: transform 0.5s ease-in-out;
	will-change: transform;
}
</style>
