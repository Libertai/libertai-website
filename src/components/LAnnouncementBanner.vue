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
	<p class="max-lg:body-small bg-majorelle-500 py-6 text-center text-neutral-white max-lg:px-4">
		{{ text }}
		<RouterLink v-if="link && link.href.startsWith('/')" :to="link.href" class="font-bold">{{ link.text }}</RouterLink>
		<a v-else-if="link" :href="link.href" class="font-bold">{{ link.text }}</a>
	</p>
</template>
