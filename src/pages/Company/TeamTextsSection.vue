<script lang="ts" setup>
import { ref } from "vue";
import TextSection from "../../components/TextSection.vue";

const items = ref<{ title: string; description: string }[]>([
	{
		title: "Collaborative and Dynamic Environment",
		description:
			"Libertai fosters a collaborative and dynamic environment, where you'll work with a talented team of individuals from diverse backgrounds, united by a shared vision of creating a more transparent and secure AI ecosystem.",
	},
	{
		title: "Make a Real Impact",
		description:
			"By joining Libertai, you'll have the opportunity to make a real impact on the development and deployment of decentralized AI solutions, contributing to a more equitable and responsible AI landscape.",
	},
	{
		title: "Grow with a Fast-Paced and Ambitious Team󠁧󠁢󠁳",
		description:
			"Libertai is a fast-paced and ambitious team, and by joining, you'll have the opportunity to grow professionally and personally, tackling challenging projects and developing new skills.",
	},
	{
		title: "Be Part of a Global Community",
		description:
			"As a member of the Libertai team, you' ll be part of a global community of decentralized AI enthusiasts, researchers, and developers, contributing to a shared vision of creating a more transparent and secure AI ecosystem.",
	},
]);
</script>

<template>
	<TextSection :items="items" />
</template>
