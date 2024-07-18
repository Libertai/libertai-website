<template>
	<section>
		<div class="relative flex justify-center py-8">
			<div class="relative flex w-[1440px] flex-col overflow-hidden px-20 py-12 max-lg:px-4">
				<div class="justify-center space-y-6 py-6 text-center">
					<LTinyHeading>Double, triple check.</LTinyHeading>
					<h2 class="text-majorelle-500 max-lg:hidden">Contract address</h2>
					<h3 class="hidden text-majorelle-500 max-lg:block">Contract address</h3>
					<p class="body-default text-center text-majorelle-800">
						Ensure that you are interacting with the correct contract address for LibertAI:
						<br />
						<a
							class="max-sm:body-small text-link"
							href="https://basescan.org/token/0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a"
							target="_blank"
						>
							0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a
						</a>
					</p>
					<a href="https://app.uniswap.org/explore/tokens/base/0xf8b1b47aa748f5c7b5d0e80c726a843913eb573a?chain=base">
						<LButton class="mt-6" text="Uniswap" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import LTinyHeading from "@/components/LTinyHeading.vue";
import LButton from "@/components/LButton.vue";
</script>
