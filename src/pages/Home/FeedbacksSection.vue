<script lang="ts" setup>
import ShanePhoto from "../../assets/icons/ShaneP.png";
import JonathanPhoto from "../../assets/icons/JonathanSchemoul.png";

const feedbacks = [
	{
		id: 1,
		name: "Shane P.",
		title: "LibertAI Co-Founder",
		feedback:
			"“The future of AI should be open, transparent, and community-driven. Decentralization is the only way that makes that possible.”",
		photo: ShanePhoto,
	},
	{
		id: 2,
		name: "Jonathan Schemoul",
		title: "aleph.im CEO and Co-Founder",
		feedback:
			"“We built aleph.im to empower a new generation of apps. LibertAI's decentralized AI vision was a perfect match. Together, we can create a robust ecosystem that puts AI power in the hands of the people.”",
		photo: JonathanPhoto,
	},
];
</script>

<template>
	<section class="relative flex justify-center">
		<video
			autoplay
			muted
			loop
			class="absolute inset-0 h-full w-full object-cover"
			src="../../assets/videos/Feedbacks.mp4"
		/>
		<div class="z-20 flex w-[1440px] items-center justify-center gap-6 py-60 max-lg:flex-col max-lg:px-0 max-lg:py-24">
			<div
				v-for="feedback in feedbacks"
				class="flex h-100 w-72 flex-col justify-center rounded-3xl border-t bg-neutral-white bg-opacity-20 px-6 py-10 text-center max-lg:hidden"
				:style="{
					backdropFilter: 'blur(20px)',
					transform: 'translateY(' + (feedback.id % 2 === 0 ? 1 : -1) * 10 + '%)',
				}"
			>
				<p class="body-small text-majorelle-800">{{ feedback.feedback }}</p>
				<img :src="feedback.photo" alt="Shane P." class="mx-auto mb-4 mt-8 h-16 w-16 rounded-full" />
				<p class="rich-bold-18">{{ feedback.name }}</p>
				<p class="body-tiny">{{ feedback.title }}</p>
			</div>
			<div
				v-for="feedback in feedbacks"
				class="flex h-100 w-72 flex-col justify-center rounded-3xl border-t bg-neutral-white bg-opacity-20 px-6 py-10 text-center lg:hidden"
				:style="{ backdropFilter: 'blur(20px)' }"
			>
				<p class="body-small">{{ feedback.feedback }}</p>
				<img :src="feedback.photo" alt="Shane P." class="mx-auto mb-4 mt-8 h-16 w-16 rounded-full" />
				<p class="rich-bold-18">{{ feedback.name }}</p>
				<p class="body-tiny">{{ feedback.title }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
