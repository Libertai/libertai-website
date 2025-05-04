<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";
</script>

<template>
	<section class="flex justify-center">
		<div class="w-[1440px] select-none justify-center px-24 pb-8 pt-52 text-center max-lg:px-6 max-lg:pb-72">
			<div class="flex flex-col gap-y-6 px-40">
				<LTinyHeading>No Harvesting</LTinyHeading>
				<h2 class="block text-primary">You are in Control of Your Data</h2>
				<p class="body-small px-6">
					Enjoy the peace of mind that comes with LibertAI's robust security measures. Advanced encryption protocols,
					distributed data storage, and rigorous access controls ensure that your data remains safeguarded against
					unauthorized access, surveillance, or exploitation.
				</p>
				<div class="relative mx-auto mt-8 flex items-center justify-center rounded-3xl md:h-[400px] md:w-[400px]">
					<img alt="container" class="rounded-3xl" src="../../assets/home/shield_container.png" />
					<img ref="shieldRef" alt="shield" class="shield-image absolute inset-0" src="../../assets/home/shield.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.shield-image {
	transition: transform 0.1s;
	transform-style: preserve-3d;
}
</style>
