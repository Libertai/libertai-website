<template>
	<section>
		<div class="relative flex justify-center py-8">
			<div class="relative flex w-[1440px] flex-col overflow-hidden px-20 py-12 max-lg:px-4">
				<div class="flex flex-col items-center justify-center space-y-6 py-6 text-center">
					<LTinyHeading>Double, triple check.</LTinyHeading>
					<h2 class="text-majorelle-500 max-lg:hidden">Contract address</h2>
					<h3 class="hidden text-majorelle-500 max-lg:block">Contract address</h3>
					<p class="body-default text-center text-majorelle-800">
						Ensure that you are interacting with the correct contract address for LibertAI:
						<br />
						<LLink
							href="https://basescan.org/token/0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a"
							target="_blank"
							class="max-sm:body-small text-link"
						>
							0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a
						</LLink>
					</p>
					<LLink href="/design">
						<LButton class="mt-6" text="Uniswap" />
					</LLink>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import LTinyHeading from "@/components/LTinyHeading.vue";
import LButton from "@/components/LButton.vue";
import LLink from "@/components/LLink.vue";
</script>
