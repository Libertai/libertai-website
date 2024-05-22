<template>
	<section class="relative flex justify-center bg-white">
		<div class="image-background relative grid overflow-hidden bg-white lg:grid-cols-[50%_50%]" style="width: 1440px">
			<div class="absolute left-0 top-0 z-10 h-full w-full bg-white max-lg:hidden"></div>
			<div
				class="z-20 m-auto flex max-w-xl flex-col items-center justify-center gap-y-6 text-center max-lg:gap-y-12 max-lg:px-4 max-lg:py-40 max-lg:text-neutral-100"
			>
				<h2 class="text-majorelle-800 block text-left max-lg:text-center max-sm:hidden">
					Decentralize everything and earn LibertAI Tokens
				</h2>
				<h3 class="hidden max-sm:block">Decentralize everything and earn LibertAI Tokens</h3>
				<p class="body-small text-left max-lg:text-center">
					Are you ready to dive into a new world of decentralized computing, where your contributions are rewarded with
					tangible benefits? Look no further than Libertai Tokens! These Tokens play an essential role within the
					exciting and innovative LibertAI ecosystem.
				</p>
			</div>
			<img alt="Earn" class="z-10 m-auto max-lg:hidden" src="../../assets/earn.png" />
		</div>
	</section>
</template>

<style scoped>
div.image-background {
	background-image: url("../../assets/earn.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>

<script setup lang="ts"></script>
