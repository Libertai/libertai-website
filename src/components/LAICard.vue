<script setup lang="ts">
export type LAiCardProps = {
	text: string;
	image: string;
};
const { text, image } = withDefaults(defineProps<LAiCardProps>(), {});
</script>

<template>
	<card class="size-72 items-center justify-center bg-primary">
		<div class="flex flex-col items-center justify-center space-y-4">
			<h2 class="text-2xl font-bold text-neutral-white">{{ text }}</h2>
			>
		</div>
	</card>
</template>

<style scoped></style>
