<template>
	<section class="flex justify-center">
		<div class="flex w-[1440px] flex-col justify-center gap-x-6 px-24 py-16 max-lg:px-6 max-lg:pb-24 max-lg:pt-48">
			<LTinyHeading class="mb-12 mt-12">No Harvesting</LTinyHeading>
			<div class="flex">
				<div class="z-10 w-1/2 max-lg:w-full max-lg:space-y-8">
					<h2 class="mb-6 block text-left text-primary max-xl:hidden">
						No Harvesting: You are in Control of Your Data
					</h2>
					<h3 class="mb-6 hidden text-center text-primary max-xl:block">
						No Harvesting: You are in Control of Your Data
					</h3>
					<p class="body-small text-left max-lg:text-center">
						Enjoy the peace of mind that comes with LibertAI's robust security measures. Advanced encryption protocols,
						distributed data storage, and rigorous access controls ensure that your data remains safeguarded against
						unauthorized access, surveillance, or exploitation.
					</p>
				</div>
				<div
					class="space z-0 flex w-1/2 justify-evenly gap-x-6 overflow-hidden max-lg:absolute max-lg:w-auto max-lg:opacity-30 max-lg:blur-sm"
				>
					<img
						class="max-xl:hidden max-lg:block max-sm:hidden"
						alt="No harvesting 1"
						height="408"
						src="../../assets/data1.png"
						width="180"
					/>
					<img alt="No harvesting 2" height="408" src="../../assets/data2.png" width="180" />
					<img alt="No harvesting 3" height="408" src="../../assets/data3.png" width="180" />
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import LTinyHeading from "../../components/LTinyHeading.vue";
</script>
