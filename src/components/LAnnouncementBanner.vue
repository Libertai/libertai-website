<script lang="ts" setup>
import LLink from "@/components/LLink.vue";

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
		<LLink v-if="link && link.href.startsWith('/')" :href="link.href" class="font-bold">{{ link.text }}</LLink>
		<LLink v-else-if="link" :href="link.href" class="font-bold">{{ link.text }}</LLink>
	</p>
</template>
