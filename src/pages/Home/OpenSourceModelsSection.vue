<script lang="ts" setup>
import LModelCard from "../../components/LModelCard.vue";
import LButton from "../../components/LButton.vue";
import { models } from "../../texts.ts";
</script>

<template>
	<section class="flex flex-col items-center gap-10 pb-36 pt-40">
		<div class="pt-6 text-majorelle-800 lg:px-6">
			<h2 class="mb-6 font-light max-lg:text-center max-md:hidden">Explore Free <br />Open-Source Models</h2>
			<h3 class="mb-6 font-light max-lg:text-center md:hidden">Explore Free <br />Open-Source Models</h3>
			<p class="body-small max-lg:text-center">
				Explore LibertAI's ever-expanding LLM model library to match your specific needs from <br />creative writing to
				coding, data analysis to everyday tasks, offering privacy-preserving <br />
				AI solutions.
			</p>
		</div>
		<div class="my-20 grid gap-x-6 gap-y-12 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
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
			<LButton small text="LEARN MORE" />
		</RouterLink>
	</section>
</template>

<style scoped>
div.heading {
	grid-area: heading;
}
</style>
