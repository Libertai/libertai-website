<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";

import ChatBotImage from "../../assets/home/more_features/chat_bot.png";
import VoiceTranscriptionImage from "../../assets/home/more_features/voice_transcription.png";
import ImageGenerationImage from "../../assets/home/more_features/image_generation.png";
import KnowledgeBasesImage from "../../assets/home/more_features/knowledge_bases.png";
import MultiModalInference from "../../assets/home/more_features/multi_modal_inference.png";
import AgentsImage from "../../assets/home/more_features/agents.png";

type FeatureCard = {
	title: string;
	image: string;
	live: boolean;
};

const cards: FeatureCard[] = [
	{
		title: "Chat Bot",
		image: ChatBotImage,
		live: true,
	},
	{
		title: "Voice Transcription",
		image: VoiceTranscriptionImage,
		live: false,
	},
	{
		title: "Image Generation",
		image: ImageGenerationImage,
		live: false,
	},
	{
		title: "Knowledge Bases",
		image: KnowledgeBasesImage,
		live: false,
	},
	{
		title: "Multi-modal Inference",
		image: MultiModalInference,
		live: false,
	},
	{
		title: "Agents",
		image: AgentsImage,
		live: false,
	},
];
</script>

<template>
	<section class="mx-auto max-w-[1440px] px-20 pb-24 pt-60 max-lg:px-8 max-lg:pb-0 max-lg:pt-32">
		<div class="mb-12 space-y-6 text-center">
			<LTinyHeading>Intelligent pocket rocket</LTinyHeading>
			<h2 class="text-majorelle-500">But wait, there’s more</h2>
			<p>
				Stay tuned for more details on these exciting new additions, set to revolutionize the way you harness the power
				of artificial intelligence.
			</p>
		</div>
		<div class="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
			<div v-for="card of cards" :key="card.title" class="mx-auto space-y-6">
				<div class="flex h-48 w-48 flex-col items-center justify-center space-y-6 rounded-3xl bg-majorelle-800">
					<div
						v-if="card.live"
						class="rounded-[64px] border-[1px] border-solid border-majorelle-300 bg-gradient-to-r from-primary to-lavander-300 text-majorelle-100"
					>
						<p class="body-small px-6">LIVE</p>
					</div>
					<div v-else class="rounded-[64px] bg-gradient-to-r from-majorelle-300 to-majorelle-100 text-majorelle-400">
						<p class="body-small px-6">COMING SOON</p>
					</div>

					<img :src="card.image" alt="feature" class="h-24 w-24" />
				</div>
				<p class="body-bold-small text-center">{{ card.title }}</p>
			</div>
		</div>
	</section>
</template>
