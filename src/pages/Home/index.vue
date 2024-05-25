<script lang="ts" setup>
import Hero from "./HeroSection.vue";
import PartnersSection from "./PartnersSection.vue";
import FooterSection from "./FooterSection.vue";
import ChatPreviewSection from "./ChatPreviewSection.vue";
import DataSecuritySection from "./DataSecuritySection.vue";
import OpenSourceModelsSection from "./OpenSourceModelsSection.vue";
import FeedbacksSection from "./FeedbacksSection.vue";
import AIBoundariesSection from "./AIBoundariesSection.vue";
import AddToTelegramSection from "./AddToTelegramSection.vue";
import TheresMoreSection from "./TheresMoreSection.vue";
import CountdownSection from "./CountdownSection.vue";

import { useGeneralStore } from "../../stores/general.ts";

const store = useGeneralStore();

const displaySite = () => {
	store.showCountdown = false;
	window.scrollTo(0, 0);
};
</script>

<template>
	<CountdownSection v-if="store.isCountdownDisplayed" :action="displaySite" />
	<div v-else>
		<Hero />
		<PartnersSection />
		<ChatPreviewSection />
		<OpenSourceModelsSection />
		<FeedbacksSection />

		<DataSecuritySection />
		<AIBoundariesSection />
		<AddToTelegramSection />
		<TheresMoreSection />
		<FooterSection />
	</div>
</template>
