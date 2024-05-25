<script lang="ts" setup>
import jonathanSchemoul from "../../assets/icons/JonathanSchemoul.png";
import shaneP from "../../assets/icons/ShaneP.png";

const feedbacks = [
	// {
	// 	name: "Nicolas Bacca",
	// 	title: "Ledger Co-Founder",
	// 	quote:
	// 		'"The world of technology thrives best when individuals are left alone to be different, creative, and disobedient."',
	// 	image: nicolasBacca,
	// },
	{
		name: "Shane P",
		title: "LibertAI Co-Founder",
		quote:
			"“The future of AI should be open, transparent, and community-driven. Decentralization is the only way that makes that possible.”",
		image: shaneP,
	},
	{
		name: "Jonathan Schemoul",
		title: "aleph.im CEO and Co-Founder",
		quote:
			"“We built aleph.im to empower a new generation of apps. LibertAI's decentralized AI vision was a perfect match. Together, we can create a robust ecosystem that puts AI power in the hands of the people.”",
		image: jonathanSchemoul,
	},
];
</script>

<template>
	<section class="flex items-center justify-center p-40 max-lg:px-0 max-lg:py-16">
		<div class="flex gap-8 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
			<div v-for="feedback in feedbacks" :key="feedback.name" class="flex flex-col">
				<div
					class="flex flex-col justify-end rounded-2xl border bg-majorelle-500 p-4 text-neutral-white max-lg:hidden"
					style="height: 477px; width: 300px"
				>
					<p class="body-default my-auto text-center font-bold">{{ feedback.quote }}</p>
					<img :src="feedback.image" alt="User" class="m-auto mb-2 mt-6 h-16 w-16 rounded-full" />
					<p class="body-bold-default text-center">{{ feedback.name }}</p>
					<p class="body-tiny text-center">{{ feedback.title }}</p>
				</div>
				<div
					class="flex h-96 w-72 flex-col justify-end rounded-2xl border bg-majorelle-500 p-4 text-neutral-white lg:hidden"
				>
					<p class="body-default mt-auto text-center">{{ feedback.quote }}</p>
					<img :src="feedback.image" alt="User" class="m-auto mb-2 mt-6 h-16 w-16 rounded-full" />
					<p class="body-bold-default text-center">{{ feedback.name }}</p>
					<p class="body-tiny text-center">{{ feedback.title }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
