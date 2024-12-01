<template>
	<section>
		<div id="addresses" class="relative flex justify-center py-8">
			<div class="relative flex w-[1440px] flex-col overflow-hidden px-20 py-12 max-lg:px-4">
				<div class="justify-center space-y-6 py-6 text-center">
					<LTinyHeading>Double, triple check.</LTinyHeading>
					<a href="#addresses">
						<h2 class="text-majorelle-500 max-lg:hidden">Contract addresses</h2>
						<h3 class="hidden text-majorelle-500 max-lg:block">Contract addresses</h3>
					</a>
					<p class="body-default text-center text-majorelle-800">
						Ensure that you are interacting with the correct contract addresses for LibertAI:
					</p>
					<div class="flex justify-center space-x-2">
						<img alt="Base logo" height="30" src="../../assets/logos/base.png" width="30" />
						<p>Base</p>
						<p>
							<a
								class="max-sm:body-small text-link"
								href="https://basescan.org/token/0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a"
								target="_blank"
								>0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a</a
							>
						</p>
					</div>
					<div class="flex justify-center space-x-2">
						<img alt="Base logo" height="30" src="../../assets/logos/solana.png" width="30" />
						<p>Solana</p>
						<p>
							<a
								class="max-sm:body-small text-link"
								href="https://solscan.io/token/mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u"
								target="_blank"
								>mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u</a
							>
						</p>
					</div>
					<div class="space-x-4">
						<a
							href="https://app.uniswap.org/explore/tokens/base/0xf8b1b47aa748f5c7b5d0e80c726a843913eb573a?chain=base"
							target="_blank"
						>
							<LButton class="mt-6" text="Uniswap" />
						</a>
						<a href="https://jup.ag/swap/SOL-mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u" target="_blank">
							<LButton class="mt-6" text="Jupiter" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";
import LButton from "../../components/LButton.vue";
</script>
