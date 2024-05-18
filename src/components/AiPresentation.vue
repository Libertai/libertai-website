<script setup lang="ts">
type AiPresentationProps = {
	photoUrl: string;
	name: string;
};
const { photoUrl, name } = withDefaults(defineProps<AiPresentationProps>(), {
	photoUrl: "",
	name: "John Doe",
});
console.log(photoUrl);
</script>

<template>
	<div class="w-72 rounded-xl bg-neutral-100 flex flex-col items-center justify-center border" style="height: 555px">
		<img :src="photoUrl" :alt="name" class="w-auto h-full rounded-t-xl object-cover" />
		<div class="w-full py-4 rounded-b-xl">
			<h3 class="text-purple-900 text-center body-default font-bold">{{ name }}</h3>
		</div>
	</div>
</template>

<style scoped></style>
