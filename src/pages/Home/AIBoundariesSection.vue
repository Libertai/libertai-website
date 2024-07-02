<script lang="ts" setup>
import lockClosedIcon from "../../assets/icons/lock-closed.svg";
import botIcon from "../../assets/icons/bot.svg";
import globeIcon from "../../assets/icons/globe.svg";
import confidentialIcon from "../../assets/icons/confidential.svg";
import LTinyHeading from "../../components/LTinyHeading.vue";

const cards = [
	{
		icon: lockClosedIcon,
		title: "Security Incentives",
		description:
			"Crypto-economics security incentives for data providers, model developers, network operators and training contributors / AI alignement.",
	},
	{
		icon: botIcon,
		title: "Autonomous Workflows",
		description: "Facilitates confidential AI tasks and autonomous workflows. No need for huge GPU farms.",
	},
	{
		icon: globeIcon,
		title: "Serverless",
		description:
			"Offers open source models and custom models on top of serveless GPUs and CPUs for fast confidential inferences. Leverages open-source models (using fast CPU inference)",
	},
	{
		icon: confidentialIcon,
		title: "Confidential",
		description:
			"LibertAI supports confidential inference through its decentralized architecture, enabling users to securely run AI workloads with sensitive data.",
	},
];
</script>

<template>
	<section class="relative flex justify-center">
		<video
			autoplay
			class="absolute inset-0 h-full w-full object-cover"
			loop
			muted
			src="../../assets/videos/HomeAiBoundaries.mp4"
		/>
		<div class="z-20 flex w-full items-center justify-center bg-gradient-to-b from-majorelle-100">
			<div class="flex max-w-[1440px] flex-col justify-center py-60 pl-16 max-lg:px-0 max-lg:py-56">
				<div class="flex flex-col items-center justify-center gap-6 px-64 pb-16 text-center max-lg:px-8">
					<LTinyHeading>Decentralized from the ground up</LTinyHeading>
					<h2 class="text-primary max-lg:hidden">Redefining AI Boundaries</h2>
					<h3 class="hidden text-primary max-lg:block">Redefining AI Boundaries</h3>
					<p class="body-default text-center">
						LibertAI’s unique edge lies in its decentralized approach to AI, which offers privacy, security,
						flexibility, and accessibility while promoting openness, collaboration, and innovation in the AI space.
					</p>
				</div>
				<div class="flex items-center justify-center gap-6 max-lg:flex-col">
					<div
						v-for="card in cards"
						:key="card.title"
						:style="{ backdropFilter: 'blur(25px)' }"
						class="flex h-96 w-72 flex-col items-center rounded-2xl border-t border-neutral-white bg-neutral-white bg-opacity-10 px-6 pt-24 text-center text-majorelle-700 shadow-lg max-lg:w-104 max-sm:h-64 max-sm:w-72 max-sm:pt-12"
					>
						<img :src="card.icon" alt="Lock" class="mb-4 h-[50px] w-[50px]" />
						<p class="body-default pb-2">{{ card.title }}</p>
						<p class="body-tiny">{{ card.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
