<script lang="ts" setup>
import { ref } from "vue";
import TextSection from "@/components/TextSection.vue";

const items = ref<{ title: string; description: string }[]>([
	{
		title: "Decentralized AI Infrastructure",
		description:
			"LibertAI aims to create a decentralized network of nodes that can run AI and ML models, enabling a more secure, transparent, and community-driven approach to AI development and deployment.",
	},
	{
		title: "Accessibility and Democratization",
		description:
			"By providing a decentralized platform, LibertAI seeks to make AI and ML more accessible to a broader range of developers, researchers, and organizations, thereby democratizing access to these technologies.",
	},
	{
		title: "Privacy and Security",
		description:
			"LibertAI's decentralized architecture ensures that data privacy and security are maintained, as data is stored and processed in a decentralized manner, reducing the risk of single-point failures and increasing overall resilience.",
	},
	{
		title: "Community-Driven Development",
		description:
			"LibertAI fosters a community-driven approach to AI development, where developers, researchers, and organizations can collaborate, share knowledge, and contribute to the growth of the platform.",
	},
]);
</script>

<template>
	<TextSection :items="items" />
</template>
