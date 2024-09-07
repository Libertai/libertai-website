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
let style = twMerge(
	"rounded-full font-bold w-fit flex justify-center space-x-1",
	small ? "body-tiny px-6 py-3" : "body-default px-8 py-4",
);

if (variant === "primary")
	style = twMerge(
		style,
		light
			? "bg-neutral-white text-majorelle-500"
			: "bg-majorelle-500 hover:bg-majorelle-700 duration-300 ease-out text-neutral-white",
	);
else
	style = twMerge(
		style,
		"border bg-transparent",
		light ? "text-neutral-white border-neutral-white" : "text-neutral-800 border-neutral-400",
	);
</script>

<template>
	<button :class="style">
		<span class="text-center">{{ text }}</span>
		<slot></slot>
	</button>
</template>
