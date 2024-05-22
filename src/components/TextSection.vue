<script lang="ts" setup>
export type TextSectionProps = {
	items: { title: string; description: string }[];
};

const { items } = defineProps<TextSectionProps>();
</script>

<template>
	<div class="my-44 grid w-full justify-evenly max-lg:my-16 md:grid-cols-2">
		<div v-for="item in items" :key="item.title" class="mx-8 p-6">
			<div class="m-auto max-w-md">
				<p class="body-large max-sm:body-default mb-6 font-bold max-lg:font-bold">{{ item.title }}</p>
				<p class="body-small max-sm:body-tiny">
					{{ item.description }}
				</p>
			</div>
		</div>
	</div>
</template>
