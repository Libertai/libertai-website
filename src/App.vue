<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useGeneralStore } from "./stores/general";
import Countdown from "./Countdown.vue";

const store = useGeneralStore();
const displaySite = () => {
	store.showCountdown = false;
	window.scrollTo(0, 0);
};
</script>

<template>
	<Navbar v-show="!store.isCountdownDisplayed" />
	<Countdown v-if="store.isCountdownDisplayed" :action="displaySite" />

	<RouterView v-else />

	<Footer />
</template>
