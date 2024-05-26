<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useGeneralStore } from "./stores/general";
import CountdownSection from "./pages/Home/CountdownSection.vue";
import LAnnouncementBanner from "./components/LAnnouncementBanner.vue";

const store = useGeneralStore();

const displaySite = () => {
	store.showCountdown = false;
	window.scrollTo(0, 0);
};
</script>

<template>
	<LAnnouncementBanner text="Mark your calendars, June 18th 12:00 CET is the official launch date of $LTAI on Base" />
	<Navbar v-show="!store.isCountdownDisplayed" />
	<CountdownSection v-if="store.isCountdownDisplayed" :action="displaySite" />

	<RouterView v-else />
	<Footer />
</template>
