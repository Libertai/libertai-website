<template>
	<div class="image-background relative grid overflow-hidden bg-white lg:grid-cols-[60%_40%]">
		<div class="absolute left-0 top-0 z-10 h-full w-full bg-white max-lg:hidden"></div>
		<div
			class="z-10 m-auto flex max-w-xl flex-col items-center justify-center gap-y-6 text-center max-lg:gap-y-12 max-lg:px-4 max-lg:py-40 max-lg:text-neutral-100"
		>
			<h2 class="block text-left max-lg:text-center max-sm:hidden">A Pioneering Force in Decentralized AI</h2>
			<h3 class="hidden max-sm:block">A Pioneering Force in Decentralized AI</h3>
			<p class="body-small text-left max-lg:text-center">
				Libertai is a revolutionary company that is transforming the AI landscape by developing decentralized AI
				solutions. Founded on the principles of transparency, security, and community-driven innovation, Libertai is
				committed to creating a new paradigm for artificial intelligence.
			</p>
		</div>
		<img alt="Company" class="z-10 m-auto max-lg:hidden" src="../../assets/company.png" />
	</div>
</template>

<style scoped>
div.image-background {
	background-image: url("../../assets/company.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>

<script lang="ts" setup></script>
