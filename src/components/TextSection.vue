<script lang="ts" setup>
type TextSectionProps = {
	items: { title: string; description: string }[];
};

const { items } = defineProps<TextSectionProps>();
</script>

<template>
	<div class="w-full my-44 grid md:grid-cols-2 justify-evenly">
		<div v-for="item in items" :key="item.title" class="p-6 mx-8">
			<div class="max-w-md m-auto">
				<p class="body-large font-bold mb-6">{{ item.title }}</p>
				<p class="body-small">
					{{ item.description }}
				</p>
			</div>
		</div>
	</div>
</template>
