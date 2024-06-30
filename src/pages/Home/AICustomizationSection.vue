<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
import AilonMusk from "../../assets/home/personas/AilonMusk.png";
import Therapist from "../../assets/home/personas/Therapist.png";
import VirtualBoyfriend from "../../assets/home/personas/VirtualBoyfriend.png";
import VirtualGirlfriend from "../../assets/home/personas/VirtualGirlfriend.png";
import Tromp from "../../assets/home/personas/Tromp.png";
import { onMounted, ref, watch } from "vue";

const AIs = [
	{ text: "Donald Tromp", image: Tromp },
	{ text: "Virtual Boyfriend", image: VirtualBoyfriend },
	{ text: "Virtual Girlfriend", image: VirtualGirlfriend },
	{ text: "AI-lon Musk", image: AilonMusk },
	{ text: "Anna the Therapist", image: Therapist },
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
		<div class="relative flex h-full w-[1440px]">
			<div class="absolute left-0 z-10 h-full w-64 bg-gradient-to-r from-neutral-white" />
			<div class="absolute right-full z-20 h-full w-full bg-neutral-white" />
			<div class="absolute left-full z-20 h-full w-full bg-neutral-white" />
			<div class="relative flex h-full w-3/5 flex-col max-lg:w-full">
				<div class="w-full items-center space-y-6 bg-neutral-white py-8 text-center max-lg:px-96 lg:hidden">
					<h3 class="px-12 max-sm:px-32">AI Customization, Privacy-First with LibertAI</h3>

					<p class="body-small px-12 max-sm:px-32">
						Customize AI assistants for smooth integration into your workflows without compromising your privacy,
						keeping your data encrypted and under your control.
					</p>
					<div>
						<a class="text-majorelle-500" href="https://chat.libertai.io/">
							<LButton small text="Customize Now" />
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
								<img :alt="ai.text" :src="ai.image" class="absolute left-0 top-0 size-full object-cover" />
							</div>
							<p class="rich-bold-18 mt-4 text-majorelle-800">{{ ai.text }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="z-20 h-full w-2/5 bg-neutral-white max-lg:hidden">
				<div class="py w-128 space-y-8 px-6 py-24 max-xl:w-96">
					<h2 class="max-xl:hidden">AI Customization, Privacy-First with LibertAI</h2>
					<h3 class="xl:hidden">AI Customization, Privacy-First with LibertAI</h3>
					<p class="body-small">
						Customize AI assistants for smooth integration into your workflows without compromising your privacy,
						keeping your data encrypted and under your control.
					</p>
					<div>
						<a class="text-majorelle-500" href="https://chat.libertai.io/#/persona-management">
							<LButton small text="Customize Now" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
