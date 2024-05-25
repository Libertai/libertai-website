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
	const cardContainer = document.querySelector(".card-container") as HTMLElement;
	if (!cardContainer) return;
	const cardQuery = cardContainer.querySelector(".card") as HTMLElement;
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
	setInterval(updateRoll, 2000);
	centerActiveCard();
});
</script>

<template>
	<section class="flex justify-center py-24">
		<div class="relative flex h-full" style="width: 1440px">
			<div class="absolute left-0 z-10 h-full w-64 bg-gradient-to-r from-neutral-white" />
			<div class="absolute right-full z-20 h-full w-full bg-neutral-white" />
			<div class="absolute left-full z-20 h-full w-full bg-neutral-white" />
			<div class="relative h-full w-3/5">
				<div
					class="card-container flex gap-6 transition-transform duration-500 ease-in-out"
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
						class="card flex w-72 flex-col items-center justify-center"
					>
						<div class="h-140 flex w-72 flex-col items-center overflow-hidden rounded-2xl border bg-neutral-white">
							<div class="h-124 relative top-0 w-full">
								<img :src="ai.image" class="absolute left-0 top-0 size-full object-cover" :alt="ai.text" />
							</div>
							<p class="rich-bold-18 mt-4 text-majorelle-800">{{ ai.text }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="z-20 h-full w-2/5 bg-neutral-white">
				<div class="w-128 py space-y-8 px-6 py-24">
					<h2>AI Customization, Privacy-First with Libertai</h2>
					<p class="body-small">
						Customize AI assistants for smooth integration into your workflows without compromising your privacy,
						keeping your data encrypted and under your control.
					</p>
					<LButton text="Customize Now" small />
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
