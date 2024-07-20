<template>
	<section class="relative flex w-full justify-center bg-gradient-to-b from-neutral-white to-tertiary">
		<div class="grid w-[1440px] py-44 max-lg:pb-0 max-lg:pt-16 lg:grid-cols-[40%_60%] lg:pl-12">
			<div
				class="w-xl m-auto mx-4 flex flex-col items-center justify-center gap-y-6 text-left max-lg:px-4 max-lg:text-center"
			>
				<h2 class="max-lg:hidden">Be a Part of the AI Revolution</h2>
				<h3 class="hidden max-lg:block">Be a Part of the AI Revolution</h3>
				<p class="body-small">
					Are you passionate about artificial intelligence, decentralization, and community-driven innovation? Do you
					want to be a part of a pioneering team that is transforming the AI landscape? Look no further than LibertAI!
				</p>
				<LLink class="w-full max-lg:mb-6" href="mailto:hello@libertai.io" target="_blank">
					<LButton small text="Join Now" />
				</LLink>
			</div>
			<img alt="Company" class="m-auto max-lg:w-full lg:rounded-2xl" src="../../assets/team.webp" width="730px" />
		</div>
	</section>
</template>
<script lang="ts" setup>
import LButton from "@/components/LButton.vue";
import LLink from "@/components/LLink.vue";
</script>
