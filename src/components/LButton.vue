<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

type LButtonProps = {
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
let style = twMerge("rounded-full font-bold", small ? "body-tiny px-6 py-3" : "body-default px-8 py-4");

if (variant === "primary")
	style = twMerge(style, light ? "bg-neutral-100 text-primary" : "bg-primary text-neutral-100");
else
	style = twMerge(
		style,
		"border bg-transparent",
		light ? "text-neutral-100 border-neutral-100" : "text-neutral-800 border-neutral-400",
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
