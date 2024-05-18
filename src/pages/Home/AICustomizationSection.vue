<script setup lang="ts">
import AiPresentation from "../../components/AiPresentation.vue";
import LButton from "../../components/LButton.vue";

const personas = [
	{
		photoUrl: "https://via.placeholder.com/150",
		name: "John Doe",
	},
	{
		photoUrl: "https://via.placeholder.com/150",
		name: "Jane Doe",
	},
	{
		photoUrl: "https://via.placeholder.com/150",
		name: "John Smith",
	},
];
</script>

<template>
	<div class="flex flex-row py-40 bg-white space-x-4">
		<div class="flex flex-row items-center justify-center space-x-8 w-3/5">
			<AiPresentation v-for="persona in personas" :key="persona.name" v-bind="persona" />
		</div>
		<div class="text-center justify-center space-y-10 w-full bg-neutral-100 shadow px-24 py-36">
			<h2 class="font-light">AI Customization, Privacy-First with Libertai</h2>
			<p class="body-small">
				Customize AI assistants for smooth integration into your workflows without compromising your privacy, keeping
				your data encrypted and under your control.
			</p>
			<div class="w-full">
				<LButton text="Customize New" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
