<script lang="ts" setup>
import LFlashCard from "../../components/LFlashCard.vue";
import LButton from "../../components/LButton.vue";
import { models } from "../../texts.ts";
</script>

<template>
	<section class="flex flex-col items-center gap-10 px-20 pb-36 pt-40">
		<div
			class="md:grid-cols-[repeat(2,20rem) grid gap-x-6 gap-y-10 max-md:grid-cols-[20rem] max-md:grid-rows-[repeat(7,20rem)] md:grid-rows-[repeat(4,20rem)] lg:grid-cols-[repeat(3,20rem)] lg:grid-rows-[repeat(3,20rem)] 2xl:grid-cols-[repeat(4,20rem)] 2xl:grid-rows-[repeat(2,20rem)]"
		>
			<div class="heading pt-6 text-neutral-800 lg:px-6">
				<h2 class="mb-6 font-light max-lg:text-center max-md:hidden">Explore Free <br />Open-Source Models</h2>
				<h3 class="mb-6 font-light max-lg:text-center md:hidden">Explore Free <br />Open-Source Models</h3>
				<p class="body-small max-lg:text-center">
					Explore LibertAI's ever-expanding LLM model library to match your specific needs from <br />creative writing
					to coding, data analysis to everyday tasks, offering privacy-preserving <br />
					AI solutions.
				</p>
			</div>
			<LFlashCard v-for="model in models" :key="model.title" :description="model.description" :title="model.title" />
		</div>
		<RouterLink to="/developer">
			<LButton small text="LEARN MORE" />
		</RouterLink>
	</section>
</template>

<style lang="postcss" scoped>
@media (min-width: 1440px) {
	/* 2xl */
	.grid {
		grid-template-areas:
			"heading heading . ."
			". . . .";
	}
}

@media (min-width: 1024px) and (max-width: 1439px) {
	/* lg & xl */
	.grid {
		grid-template-areas:
			"heading heading heading"
			". . ."
			". . .";
	}
}

@media (min-width: 768px) and (max-width: 1023px) {
	/* md */
	.grid {
		grid-template-areas:
			"heading heading"
			". ."
			". ."
			". .";
	}
}

@media (max-width: 767px) {
	/* sm */
	.grid {
		grid-template-areas:
			"heading"
			"."
			"."
			"."
			"."
			"."
			".";
	}
}

div.heading {
	grid-area: heading;
}
</style>
