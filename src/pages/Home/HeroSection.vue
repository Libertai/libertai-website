<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="relative flex justify-center">
		<video
			autoplay
			muted
			loop
			class="absolute inset-0 h-full w-full object-cover"
			src="../../assets/videos/HomeHeroBanner.mp4"
		/>
		<div class="z-20 flex w-[1440px] justify-center py-60 pl-16 max-lg:px-0 max-lg:py-56">
			<div
				class="mx-20 flex w-full flex-col gap-6 rounded-3xl border-t bg-primary bg-opacity-10 px-6 py-10 text-center text-neutral-white max-lg:mx-5"
				:style="{ backdropFilter: 'blur(20px)' }"
			>
				<h1 class="max-lg:hidden">Discover the Freedom of Decentralized AI</h1>
				<h2 class="hidden sm:max-lg:block">Discover the Freedom of Decentralized AI</h2>
				<h3 class="hidden font-bold max-sm:block">Discover the Freedom of Decentralized AI</h3>
				<p class="body-small">Use decentralized AI and keep your data private and secure with blockchain.</p>
				<a href="https://chat.libertai.io">
					<LButton class="w-fit" light text="TRY FOR FREE" />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
