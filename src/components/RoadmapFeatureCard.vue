<script lang="ts" setup>
import { RoadmapFeatureStatus } from "../types/roadmap.ts";

export type RoadmapFeatureCardProps = {
	title: string;
	status: RoadmapFeatureStatus;
};

defineProps<RoadmapFeatureCardProps>();
</script>

<template>
	<div class="flex justify-between rounded-xl bg-majorelle-800 px-6 py-4 max-sm:w-64 lg:w-96">
		<p class="body-small text-neutral-white">{{ title }}</p>
		<img
			v-if="status === 'completed'"
			alt="Status"
			class="my-auto h-4 w-4"
			src="../assets/icons/roadmap/completed.png"
		/>
		<img v-else alt="Status" class="my-auto h-4 w-4" src="../assets/icons/roadmap/other.png" />
	</div>
</template>
