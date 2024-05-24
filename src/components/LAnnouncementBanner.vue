<script lang="ts" setup>
export type LAnnouncementBannerProps = {
	text: string;
	link?: {
		href: string;
		text: string;
	};
};
withDefaults(defineProps<LAnnouncementBannerProps>(), {
	link: undefined,
});
</script>

<template>
	<p class="bg-majorelle-500 pb-5 pt-8 text-center text-neutral-white">
		{{ text }}
		<RouterLink v-if="link && link.href.startsWith('/')" :to="link.href" class="font-bold">{{ link.text }}</RouterLink>
		<a v-else-if="link" :href="link.href" class="font-bold">{{ link.text }}</a>
	</p>
</template>
