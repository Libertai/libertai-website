<script lang="ts" setup>
import { LinkHTMLAttributes, ref } from "vue";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogOverlay, AlertDialogPortal } from "radix-vue";
import LButton from "@/components/LButton.vue";
import { ClassProp } from "class-variance-authority/types";

interface IProps extends /* @vue-ignore */ LinkHTMLAttributes {}

withDefaults(defineProps<IProps & ClassProp>(), {});

const open = ref(false);
</script>

<template>
	<RouterLink
		v-if="$attrs.href && ($attrs.href as string).startsWith('/')"
		:class="$props.class ?? $props.className"
		:to="$attrs.href"
		class="w-fit"
	>
		<slot />
	</RouterLink>
	<AlertDialog v-else v-model:open="open">
		<AlertDialogTrigger as-child>
			<a :class="$props.class ?? $props.className" class="w-fit cursor-pointer">
				<slot />
			</a>
		</AlertDialogTrigger>
		<AlertDialogPortal>
			<AlertDialogOverlay class="fixed inset-0 z-30 backdrop-blur-sm" />
			<AlertDialogContent class="flex flex-col gap-y-6 bg-primary px-6 py-9 text-neutral-white">
				<h6 class="body-default text-center font-bold">Leaving our website</h6>
				<p class="body-tiny text-center">
					You will be redirected to an external website <strong class="font-bold">({{ $attrs.href }})</strong> that is
					not under our control. We cannot guarantee the accuracy, security, or reliability of the information provided
					on these external sites.
				</p>
				<div class="gap-x- flex justify-center gap-x-3">
					<a v-bind="$attrs">
						<LButton class="w-[150px]" light text="Continue" @click="open = false" />
					</a>
					<LButton class="w-[150px]" light text="Cancel" @click="open = false" />
				</div>
			</AlertDialogContent>
		</AlertDialogPortal>
	</AlertDialog>
</template>

<style scoped></style>
