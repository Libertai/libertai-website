<script setup lang="ts">
import iphone_1 from "../../assets/Iphone_1.png";
import iphone_2 from "../../assets/Iphone_2.png";
import iphone_3 from "../../assets/Iphone_3.png";
import LButton from "../../components/LButton.vue";
</script>

<template>
	<section class="relative flex justify-center">
		<div class="flex justify-center" style="width: 1440px">
			<div
				class="grid h-full w-auto grid-cols-4 flex-col items-center justify-center px-8 py-24 max-xl:grid-cols-2 max-sm:grid-cols-1"
			>
				<div class="col-span-2 row-span-2 flex justify-center py-8 max-xl:row-span-1 max-sm:col-span-1 max-sm:py-3">
					<div
						class="size-156 max-lg:size-136 relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#FCCBFF] to-majorelle-500 shadow-2xl max-xl:h-72 max-lg:h-64 max-sm:w-64 max-sm:items-center max-sm:justify-center max-sm:text-center"
					>
						<h2 class="left-0 top-0 block p-8 text-neutral-white max-lg:hidden">Not your average AI assistant</h2>
						<h3 class="left-0 top-0 block p-8 text-neutral-white max-sm:hidden lg:hidden">
							Not your average AI assistant
						</h3>
						<h4 class="hidden px-8 pb-2 pt-8 text-neutral-white max-sm:block">Not your average AI assistant</h4>
						<p class="body-small y w-3/5 px-8 text-neutral-white max-lg:w-8/12 max-sm:w-full">
							Experience the future of AI-driven conversations on Telegram with Libertai.
						</p>
						<a href="https://t.me/libertai" target="_blank">
							<LButton light text="ADD TO TELEGRAM" class="absolute bottom-4 left-4 p-8 max-xl:hidden" />
						</a>
						<a href="https://t.me/libertai" target="_blank">
							<LButton
								small
								light
								text="ADD TO TELEGRAM"
								class="absolute bottom-8 right-8 mt-4 p-8 max-sm:static xl:hidden"
							/>
						</a>
						<img :src="iphone_1" alt="iphone" class="absolute bottom-0 right-0 max-xl:hidden" />
					</div>
				</div>
				<div class="row-span-2 size-full px-4 py-8 max-sm:py-3">
					<div
						class="size-76 relative flex h-full items-end overflow-hidden rounded-3xl bg-gradient-to-b from-[#DED9FF] to-neutral-white shadow-xl max-xl:h-72 max-xl:items-center max-xl:justify-center max-xl:text-center max-lg:size-64 lg:max-xl:pr-4"
					>
						<div class="flex w-full flex-col pb-6 pl-4 max-lg:hidden">
							<h3 class="text-majorelle-500">Always there</h3>
							<h3 class="text-majorelle-800">to answer your requests</h3>
						</div>
						<div class="flex size-full flex-col justify-center p-6 lg:hidden">
							<h4 class="text-majorelle-500">Always there</h4>
							<h4 class="text-majorelle-800">to answer your requests</h4>
						</div>
						<img :src="iphone_2" alt="iphone" class="absolute right-0 top-0 max-xl:hidden" />
					</div>
				</div>
				<div class="row-span-2 size-full px-4 py-8 max-sm:py-3">
					<div
						class="size-76 relative flex h-full items-start overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-white to-[#D4CDFF] shadow-xl max-xl:h-72 max-xl:items-center max-xl:justify-center max-xl:pr-4 max-xl:text-center max-lg:size-64"
					>
						<div class="flex w-full flex-col p-6 max-lg:hidden">
							<h3 class="text-majorelle-500">Fast</h3>
							<h3 class="text-majorelle-800">
								Clever,<br />
								Private
							</h3>
						</div>
						<div class="flex size-full flex-col justify-center p-6 lg:hidden">
							<h4 class="text-majorelle-500">Fast</h4>
							<h4 class="text-majorelle-800">
								Clever,<br />
								Private
							</h4>
						</div>
						<img :src="iphone_3" alt="iphone" class="absolute bottom-0 right-0 max-xl:hidden" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
