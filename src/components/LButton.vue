<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

export type LButtonProps = {
	text: string;
	variant?: "primary" | "secondary";
	light?: boolean;
	small?: boolean;
};
const { text, variant, light, small } = withDefaults(defineProps<LButtonProps>(), {
	variant: "primary",
	light: false,
	small: false,
});
let style = twMerge("rounded-full font-bold w-fit", small ? "body-tiny px-6 py-3" : "body-default px-8 py-4");

if (variant === "primary")
	style = twMerge(style, light ? "bg-neutral-white text-majorelle-500" : "bg-majorelle-500 text-neutral-white");
else
	style = twMerge(
		style,
		"border bg-transparent",
		light ? "text-neutral-white border-neutral-white" : "text-neutral-800 border-neutral-400",
	);
</script>

<template>
	<button :class="style">
		<div class="flex space-x-1">
			<span>{{ text }}</span>
			<slot></slot>
		</div>
	</button>
</template>
