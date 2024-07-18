<script setup lang="ts">
import iphone from "../../assets/home/notYourAverageAIAssistantIphone.png";
import LTinyHeading from "@/components/LTinyHeading.vue";
import LButton from "@/components/LButton.vue";
import LLink from "@/components/LLink.vue";
</script>

<template>
	<section class="relative flex justify-center">
		<div class="mt-20 flex w-[1440px] flex-col items-center justify-center overflow-hidden">
			<LTinyHeading class="mb-6 mt-20">Intelligent pocket rocket</LTinyHeading>
			<div class="flex flex-col px-64 max-lg:px-4">
				<h2 class="text-center text-primary max-lg:hidden">Not your average AI assistant</h2>
				<h3 class="text-center text-primary lg:hidden">Not your average AI assistant</h3>
				<p class="body-default p-6 text-center">
					Experience the future of AI-driven conversations on Telegram with LibertAI. Fast, clever and web connected,
					get the answers you need without leaving the Telegram app.
				</p>
			</div>
			<div class="relative mt-48 flex h-[346px] w-[837px] rounded-3xl bg-gradient-to-tr from-[#644DF9] to-[#FCCBFF]">
				<img :src="iphone" alt="iphone" class="absolute bottom-0 left-0 right-0 mx-auto" />
			</div>
			<LLink href="https://t.me/liberchat_bot" target="_blank">
				<LButton text="Add to Telegram" class="mt-12" />
			</LLink>
		</div>
	</section>
</template>

<style scoped></style>
