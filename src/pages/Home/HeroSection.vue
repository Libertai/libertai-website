<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="image-background relative flex justify-center">
		<div class="flex py-60 pl-16 max-lg:px-0 max-lg:py-56" style="width: 1440px">
			<div class="flex max-w-4xl flex-col gap-6 px-6 py-9 text-neutral-white max-lg:py-0 max-lg:text-center">
				<h1 class="max-lg:hidden">Discover the Freedom of Decentralized AI</h1>
				<h2 class="hidden sm:max-lg:block">Discover the Freedom of Decentralized AI</h2>
				<h3 class="hidden font-bold max-sm:block">Discover the Freedom of Decentralized AI</h3>
				<p class="body-small">
					Experience the privacy of LibertAI's decentralized AI platform - chat freely, without data logging. Explore
					various Chat-GPT like open-source models, like Llama 3 70b, for free. Create personalized AI assistants for
					enhanced productivity.<br />
					<br />
					Your AI journey, your privacy!
				</p>
				<a class="max-lg:mt-8" href="https://chat.libertai.io">
					<LButton class="w-fit" light text="TRY FOR FREE" />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
section.image-background {
	background-image: url("../../assets/hero.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
