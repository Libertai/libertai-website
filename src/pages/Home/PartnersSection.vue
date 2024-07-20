<template>
	<section class="relative flex justify-center">
		<div class="h-96 w-[1440px]">
			<div class="flex h-full flex-col items-center justify-center">
				<p class="body-bold-large text-center text-majorelle-800">Proudly supported by</p>
				<div class="mt-6 flex max-sm:flex-col max-sm:space-y-4 sm:space-x-9">
					<LLink href="https://aleph.im" target="_blank">
						<img alt="Aleph.im logo" src="../../assets/logos/aleph.svg" />
					</LLink>
					<LLink href="https://twentysix.cloud" target="_blank">
						<img alt="TwentySixCloud logo" src="../../assets/logos/twentysix.svg" />
					</LLink>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import LLink from "@/components/LLink.vue";
</script>
