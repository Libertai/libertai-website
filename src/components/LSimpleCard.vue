<script setup lang="ts">
defineProps<{ title: string; description: string, linkName: string, linkPath: string, iconPath: string, hasLargeLinkButton?: boolean}>();
</script>

<template>
	<div class="flex flex-col w-[300px]">
		<div class="flex justify-between">
			<div class="flex items-center">
				<img :src="iconPath" class="w-[17px]" />
				<p>
					<span class="body-default text-neutral-white ml-2">{{ title }}</span>
				</p>
			</div>
		</div>

		<p class="body-tiny text-[#6A7089] mt-2">{{ description }}</p>
		<a :href="linkPath" class="flex items-center justify-between mt-5 px-4 border rounded-[20px] border-[#6A7089] w-24 h-10">
			<p class="text-neutral-white text-[13px]">{{ linkName }}</p>
			<img src="../assets/home/redirect.svg"/>
		</a>
	</div>
</template>
