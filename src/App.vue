<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LAnnouncementBanner from "./components/LAnnouncementBanner.vue";
</script>

<template>
	<LAnnouncementBanner text="Mark your calendars, June 18th 12:00 GMT is the official launch date of $LTAI on Base" />
	<Navbar />

	<RouterView />
	<Footer />
</template>
