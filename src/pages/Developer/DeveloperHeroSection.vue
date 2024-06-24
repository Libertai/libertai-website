<template>
	<section class="relative flex justify-center">
		<div class="image-background relative grid w-[1440px] overflow-hidden lg:grid-cols-[40%_60%]">
			<div class="absolute left-0 top-0 z-10 h-full w-full bg-tertiary max-lg:hidden" />
			<div
				class="z-10 m-auto flex max-w-xl flex-col items-center justify-center gap-y-6 pl-8 text-center text-majorelle-800 max-lg:gap-y-12 max-lg:px-4 max-lg:py-40 max-lg:text-neutral-white"
			>
				<h2 class="block max-sm:hidden lg:text-left">Where AI Meets Freedom</h2>
				<h3 class="hidden max-sm:block">Where AI Meets Freedom</h3>
				<p class="body-small lg:text-left">
					LibertAI fosters a community-driven approach to AI development, encouraging collaboration, knowledge sharing,
					and collective innovation. Be part of a vibrant ecosystem that shapes the future of AI.
				</p>
				<a href="https://docs.libertai.io">
					<LButton class="w-fit max-sm:hidden" text="Documentation" />
					<LButton class="hidden w-fit max-sm:block" light text="Documentation" />
				</a>
			</div>
			<img alt="Developer" class="z-10 m-auto max-lg:hidden" src="../../assets/developer.png" />
		</div>
	</section>
</template>

<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<style scoped>
div.image-background {
	background-image: url("../../assets/developer.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
