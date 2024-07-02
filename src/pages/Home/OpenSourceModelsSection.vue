<script lang="ts" setup>
import LModelCard from "../../components/LModelCard.vue";
import LButton from "../../components/LButton.vue";
import { models } from "../../texts.ts";
import LTinyHeading from "../../components/LTinyHeading.vue";
</script>

<template>
	<section class="flex flex-col items-center gap-16 pb-36 pt-40 max-lg:pb-20 max-lg:pt-32">
		<div class="space-y-6 px-8 text-center">
			<LTinyHeading>Transparent to the core</LTinyHeading>
			<h2 class="text-majorelle-500">Explore Free Open-Source Models</h2>
			<p>
				Explore LibertAI's ever-expanding LLM model library to match your specific needs from <br />creative writing to
				coding, data analysis to everyday tasks, offering privacy-preserving <br />
				AI solutions.
			</p>
		</div>
		<div class="grid gap-x-6 gap-y-12 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
			<LModelCard
				v-for="model in models"
				:key="model.name"
				:description="model.description"
				:name="model.name"
				:subtitle="model.subtitle"
				:type="model.type"
			/>
		</div>
		<RouterLink to="/developer">
			<LButton small text="Find Out More" />
		</RouterLink>
	</section>
</template>

<style scoped>
div.heading {
	grid-area: heading;
}
</style>
