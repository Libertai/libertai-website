<script lang="ts" setup>
export type LFlashCardProps = {
	variant?: "small" | "regular" | "large";
	title: string;
	description: string;
};
const { variant, title, description } = withDefaults(defineProps<LFlashCardProps>(), {
	variant: "regular",
});
</script>

<template>
	<div :class="`card-${variant} rounded-3xl relative overflow-hidden group group-transition`">
		<slot />
		<div :class="`text-neutral-100 text-left absolute bottom-0 group-hover:translate-y-0 group-transition`">
			<h4 class="!font-bold group-transition">
				{{ title }}
			</h4>
			<p class="opacity-0 group-hover:opacity-100 group-transition">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
div.card-regular {
	@apply w-80 h-80;
	@apply bg-primary hover:bg-[#231271];
}

div.card-regular h4 {
	@apply body-default;
	@apply mb-6 group-hover:mb-4;
}

div.card-regular p {
	@apply body-tiny;
	@apply w-3/4;
}

div.card-regular div {
	@apply pb-12 px-3;
	@apply translate-y-40;
}

div.card-small {
	@apply w-[18.75rem] h-[18.75rem];
}

div.card-small div {
	@apply translate-y-48;
}

div.card-large {
	@apply w-[27.5rem] h-[27.5rem];
}

div.card-large,
div.card-small {
	@apply bg-gradient-to-b from-[rgba(0,0,0,0)_78%] to-[rgba(0,0,0,.3)] hover:bg-primary;
}

div.card-large h4,
div.card-small h4 {
	@apply mb-8;
}

div.card-large p,
div.card-small p {
	@apply body-small;
}

div.card-small div,
div.card-large div {
	@apply px-6 pb-20;
}

div.card-large div {
	@apply translate-y-40;
}

:slotted(img) {
	@apply w-full h-full object-cover group-hover:scale-105 group-transition -z-10 relative block;
}

.group-transition {
	@apply transition-all ease-in-out duration-500;
}
</style>
