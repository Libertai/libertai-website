<script lang="ts" setup>
export type TextSectionProps = {
	items: { title: string; description: string }[];
};

const { items } = defineProps<TextSectionProps>();
</script>

<template>
	<section class="relative flex justify-center bg-neutral-white">
		<div class="my-44 grid w-[1440px] justify-evenly max-lg:my-16 md:grid-cols-2">
			<div v-for="item in items" :key="item.title" class="mx-8 p-6">
				<div class="m-auto max-w-md max-lg:text-center">
					<p class="body-bold-large max-sm:body-bold-default mb-6 text-neutral-700">{{ item.title }}</p>
					<p class="body-small max-sm:body-tiny text-neutral-600">
						{{ item.description }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
