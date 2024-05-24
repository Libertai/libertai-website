<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>

<template>
	<div class="flex justify-center p-3">
		<div
			class="flex size-72 flex-col items-center gap-4 rounded-2xl bg-neutral-white pt-16 text-center text-majorelle-800 shadow-2xl"
		>
			<p class="body-bold-large">{{ title }}</p>
			<p class="body-tiny w-56">{{ description }}</p>
		</div>
	</div>
</template>
