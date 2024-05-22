<script setup lang="ts">
defineProps({
	title: String,
	description: String,
});
</script>

<template>
	<div class="flex justify-center p-3">
		<div
			class="text-majorelle-800 flex size-72 flex-col items-center gap-4 rounded-2xl bg-neutral-100 pt-16 text-center shadow-2xl"
		>
			<p class="body-large font-bold">{{ title }}</p>
			<p class="body-tiny w-56">{{ description }}</p>
		</div>
	</div>
</template>
