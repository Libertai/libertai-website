<script setup lang="ts">
import nicolasBacca from "../../assets/icons/NicolasBacca.png";
import jonathanSchemoul from "../../assets/icons/JonathanSchemoul.png";
import shaneP from "../../assets/icons/ShaneP.png";

const feedbacks = [
	{
		name: "Nicolas Bacca",
		title: "Ledger Co-Founder",
		quote:
			'"The world of technology thrives best when individuals are left alone to be different, creative, and disobedient."',
		image: nicolasBacca,
	},
	{
		name: "Jonathan Schemoul",
		title: "aleph.im CEO and Co-Founder",
		quote:
			'"The world of technology thrives best when individuals are left alone to be different, creative, and disobedient."',
		image: jonathanSchemoul,
	},
	{
		name: "Shane P",
		title: "LibertAI Co-Founder",
		quote:
			'"The world of technology thrives best when individuals are left alone to be different, creative, and disobedient."',
		image: shaneP,
	},
];
</script>

<template>
	<section class="flex items-center justify-center bg-white p-40 max-lg:px-0 max-lg:py-16">
		<div class="flex gap-8 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
			<div v-for="feedback in feedbacks" :key="feedback.name" class="flex flex-col">
				<div
					class="flex flex-col justify-end rounded-2xl border bg-primary p-4 text-neutral-100 max-lg:hidden"
					style="height: 477px; width: 300px"
				>
					<p class="body-default mt-auto text-center">{{ feedback.quote }}</p>
					<img :src="feedback.image" alt="User" class="m-auto mb-2 mt-6 h-16 w-16 rounded-full" />
					<p class="body-default text-center font-bold">{{ feedback.name }}</p>
					<p class="body-tiny text-center">{{ feedback.title }}</p>
				</div>
				<div class="flex h-96 w-72 flex-col justify-end rounded-2xl border bg-primary p-4 text-neutral-100 lg:hidden">
					<p class="body-default mt-auto text-center">{{ feedback.quote }}</p>
					<img :src="feedback.image" alt="User" class="m-auto mb-2 mt-6 h-16 w-16 rounded-full" />
					<p class="body-default text-center font-bold">{{ feedback.name }}</p>
					<p class="body-tiny text-center">{{ feedback.title }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
