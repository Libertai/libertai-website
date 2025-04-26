<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="relative flex bg-gradient-to-r from-neutral-black to-[#242c6e]">
		<img
			class="absolute right-0 top-0 h-full w-auto max-w-none object-cover w-[1800px]"
			src="../../assets/home/new_hero.png"
		/>
		<div class="z-20 flex py-60 max-lg:px-0 max-lg:py-56 lg:ml-16">
			<div
				class="mx-20 flex w-full flex-col gap-6 px-6 py-10 text-neutral-white max-lg:mx-5"
			>
				<div class="flex flex-col">
					<h1>Private</h1>
					<h1>Inference</h1>
					<h1>API</h1>
				</div>
				<p class="body-small">LibertAI API offers decentralized, secure access to advanced AI models, <br/>enabling developers to build scalable, privacy-preserving applications.</p>
				<a href="https://docs.libertai.io/">
					<LButton class="w-fit" light text="LibertAI API Docs" />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
