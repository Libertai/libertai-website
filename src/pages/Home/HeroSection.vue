<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<template>
	<div class="flex py-60 pl-16 image-background">
		<div class="flex flex-col gap-6 py-9 px-6 max-w-4xl text-neutral-100">
			<h1>Discover the Freedom of Decentralized AI</h1>
			<p class="body-small">
				Experience the privacy of LibertAI's decentralized AI platform - chat freely, without data logging. Explore
				various Chat-GPT like open-source models, like Llama 3 70b, for free. Create personalized AI assistants for
				enhanced productivity.<br>
				<br>
				Your AI journey, your privacy!
			</p>
			<a href="https://chat.libertai.io">
				<l-button class="w-fit" light text="TRY FOR FREE" />
			</a>
		</div>
	</div>
</template>

<style scoped>
div.image-background {
	background-image: url("../../assets/hero.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
