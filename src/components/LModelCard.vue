<script lang="ts" setup>
import LSimpleCard from "./LSimpleCard.vue";

export type LModelCardProps = {
	name: string;
	description: string;
	imageRotation: number
};
defineProps<LModelCardProps>();
</script>

<template>
	<div class="flex flex-col gap-y-4 px-6 py-9 max-lg:h-auto max-lg:w-[200px] lg:h-auto lg:w-[300px]">
		<div class="relative flex items-center justify-center h-[250px] overflow-hidden">
			<img
				src="../assets/home/open-source-model-background.png"
				class="absolute inset-0 object-cover w-full h-full"
				:style="{ transform: `rotate(${imageRotation}deg)` }"
			/>
			<div class="relative flex items-center justify-center bg-[#0E0F18] w-[150px] h-[40px]">
				<h4 class="text-[#F7F6FF]">{{ name }}</h4>
			</div>
		</div>

		<LSimpleCard
			:title="name"
			:description="description"
			:link-name="'Docs'"
			:link-path="'https://docs.libertai.io/agents/'"
			:icon-path="'/icon-chat.svg'"
		/>
	</div>
</template>



<style scoped>
.model-card {
	box-shadow: 0 20px 20px 0 rgba(100, 77, 249, 0.1);
}
</style>
