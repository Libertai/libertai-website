<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="relative flex justify-center overflow-hidden">
		<!-- Desktop Image -->
		<img
			alt="Private Inference API"
			class="hidden h-auto w-full object-cover md:block"
			src="../../assets/home/new_hero_desktop.png"
		/>
		<!-- Mobile Image -->
		<img
			alt="Private Inference API"
			class="block h-auto w-full object-cover md:hidden"
			src="../../assets/home/new_hero_mobile.png"
		/>

		<div class="absolute inset-0 flex flex-col justify-center">
			<div class="container mx-auto px-5 md:px-20">
				<div class="max-w-xs sm:max-w-md md:max-w-xl">
					<h1 class="mb-6 text-4xl font-bold text-neutral-white sm:text-5xl md:text-6xl">
						Unleash apps with Confidential AI API
					</h1>
					<p class="mb-8 text-base text-neutral-white sm:text-lg">
						LibertAI API offers decentralized, secure access to advanced AI models, enabling developers to build
						scalable, privacy-preserving applications.
					</p>
					<a href="https://console.libertai.io" target="_blank">
						<LButton light text="Build with the API" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
