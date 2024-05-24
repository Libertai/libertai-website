<script setup lang="ts">
import iphone_1 from "../../assets/Iphone_1.png";
import iphone_2 from "../../assets/Iphone_2.png";
import iphone_3 from "../../assets/Iphone_3.png";
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="relative flex justify-center">
		<div class="" style="width: 1440px">
			<div class="grid h-full grid-cols-4 flex-col items-center justify-center px-8 py-24 max-xl:grid-cols-2">
				<div class="col-span-2 row-span-2 flex justify-center py-8 max-xl:hidden">
					<div
						class="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#FCCBFF] to-majorelle-500 shadow-2xl"
						style="width: 622px; height: 622px"
					>
						<h2 class="left-0 top-0 p-8 text-neutral-white">Not your average AI assistant</h2>
						<p class="body-small w-3/5 px-8 text-neutral-white">
							Experience the future of AI-driven conversations on Telegram with Libertai.
						</p>
						<a href="https://t.me/libertai" target="_blank">
							<LButton light text="ADD TO TELEGRAM" class="absolute bottom-4 left-4 p-8" />
						</a>
						<img :src="iphone_1" alt="iphone" class="absolute bottom-0 right-0" />
					</div>
				</div>
				<div class="col-span-2 row-span-2 flex justify-center py-8 max-xl:row-span-1 xl:hidden">
					<div
						class="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#FCCBFF] to-majorelle-500 shadow-2xl"
						style="width: 622px; height: 311px"
					>
						<h2 class="left-0 top-0 p-8 text-neutral-white">Not your average AI assistant</h2>
						<p class="body-small w-3/5 px-8 text-neutral-white">
							Experience the future of AI-driven conversations on Telegram with Libertai.
						</p>
						<a href="https://t.me/libertai" target="_blank">
							<LButton light text="ADD TO TELEGRAM" class="absolute bottom-4 right-4 p-8" />
						</a>
					</div>
				</div>
				<div class="row-span-2 size-full p-8">
					<div
						class="relative flex h-full w-72 items-end overflow-hidden rounded-3xl bg-gradient-to-b from-[#DED9FF] to-neutral-white shadow-xl"
					>
						<div class="flex w-full flex-col pb-6 pl-4">
							<h3 class="text-majorelle-500">Always there</h3>
							<h3 class="text-majorelle-800">to answer your requests</h3>
						</div>
						<img :src="iphone_2" alt="iphone" class="absolute right-0 top-0" />
					</div>
				</div>
				<div class="row-span-2 size-full p-8">
					<div
						class="relative h-full w-72 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-white to-[#D4CDFF] shadow-xl"
					>
						<div class="flex w-full flex-col p-6">
							<h3 class="text-majorelle-500">Fast</h3>
							<h3 class="text-majorelle-800">Clever, Private</h3>
						</div>
						<img :src="iphone_3" alt="iphone" class="absolute bottom-0 right-0" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
