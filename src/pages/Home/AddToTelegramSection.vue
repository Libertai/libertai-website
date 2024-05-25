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
				class="grid h-full w-auto grid-cols-4 flex-col items-center justify-center px-8 py-24 max-xl:grid-cols-2 max-md:pt-0 max-sm:grid-cols-1"
			>
				<div class="col-span-2 row-span-2 flex justify-center py-8 max-xl:row-span-1 max-sm:col-span-1 max-sm:py-3">
					<div
						class="mas-sm:h-72 max-sm:-72 relative size-156 overflow-hidden rounded-3xl bg-gradient-to-bl from-[#FCCBFF] to-majorelle-500 shadow-2xl max-md:size-136 max-md:h-72 max-sm:size-72 max-sm:items-center max-sm:justify-center max-sm:text-center"
					>
						<h2 class="left-0 top-0 block p-8 text-neutral-white max-md:hidden">Not your average AI assistant</h2>
						<h3 class="left-0 top-0 block p-8 text-neutral-white max-sm:hidden lg:hidden">
							Not your average AI assistant
						</h3>
						<h4 class="hidden px-8 pb-2 pt-8 text-neutral-white max-sm:block">Not your average AI assistant</h4>
						<p class="body-small y w-7/12 px-8 text-neutral-white max-md:w-8/12 max-sm:w-full">
							Experience the future of AI-driven conversations on Telegram with Libertai.
						</p>
						<a href="https://t.me/libertai" target="_blank">
							<LButton light text="ADD TO TELEGRAM" class="absolute bottom-4 left-4 p-8 max-md:hidden" />
						</a>
						<a href="https://t.me/libertai" target="_blank">
							<LButton
								small
								light
								text="ADD TO TELEGRAM"
								class="absolute bottom-8 right-8 mt-4 p-8 max-sm:static lg:hidden"
							/>
						</a>
						<img :src="iphone_1" alt="iphone" class="absolute bottom-0 right-0 max-md:hidden" />
					</div>
				</div>
				<div class="row-span-2 size-full px-4 py-8 max-sm:hidden max-sm:py-3">
					<div
						class="relative flex size-76 h-full items-end overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-white to-[#D4CDFF] shadow-xl max-xl:h-136 max-md:size-64 max-md:h-72 max-md:items-center max-md:justify-center max-md:pr-4 max-md:text-center"
					>
						<div class="flex w-full flex-col pb-6 pl-4 max-md:hidden">
							<h3 class="text-majorelle-500">Always there</h3>
							<h3 class="text-majorelle-800">to answer your requests</h3>
						</div>
						<div class="flex size-full flex-col justify-center p-6 lg:hidden">
							<h4 class="text-majorelle-500">Always there</h4>
							<h4 class="text-majorelle-800">to answer your requests</h4>
						</div>
						<img :src="iphone_2" alt="iphone" class="absolute right-0 top-0 max-md:hidden" />
					</div>
				</div>
				<div class="row-span-2 size-full px-4 py-8 max-sm:hidden max-sm:py-3">
					<div
						class="relative flex size-76 h-full items-start overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-white to-[#D4CDFF] shadow-xl max-md:size-64 max-md:h-72 max-md:items-center max-md:justify-center max-md:pr-4 max-md:text-center"
					>
						<div class="flex w-full flex-col p-6 max-md:hidden">
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
						<img :src="iphone_3" alt="iphone" class="absolute bottom-0 right-0 max-md:hidden" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
