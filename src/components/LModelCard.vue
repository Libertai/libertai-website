<script lang="ts" setup>
export type LModelCardProps = {
	name: string;
	subtitle: string;
	description: string;
	type: string;
};
defineProps<LModelCardProps>();
</script>

<template>
	<div
		class="md flex flex-col gap-y-3 rounded-[12px] border-[0.5px] border-majorelle-300 bg-neutral-white px-6 py-9 shadow-[0_20px_20px_0_rgba(100,77,249,.1)] max-lg:h-[250px] max-lg:w-[300px] lg:h-[200px] lg:w-[400px]"
	>
		<div class="flex justify-between">
			<p>
				<span class="body-default font-bold text-primary">{{ name }}</span>
				<br />
				<span class="body-small text-lavander-400">({{ subtitle }})</span>
			</p>
			<span class="body-small h-fit rounded-full border-[1px] border-majorelle-300 px-6 uppercase text-lavander-400">
				{{ type }}
			</span>
		</div>
		<p class="body-tiny text-majorelle-800">{{ description }}</p>
	</div>
</template>

<style scoped></style>
