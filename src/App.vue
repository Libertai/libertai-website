<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useGeneralStore } from "./stores/general";

const store = useGeneralStore();
</script>

<template>
	<Navbar v-show="!store.isCountdownDisplayed" />
	<RouterView />
	<Footer />
</template>
