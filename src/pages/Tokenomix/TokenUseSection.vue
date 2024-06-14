<script setup lang="ts">
const cardContents = [
	{
		type: "User",
		description: "Access to premium features (client-side encrypted knowledge database)",
	},
	{
		type: "User",
		description: "Better models and longer context and confidential inference",
	},
	{
		type: "User",
		description: "Persona and knowledge database sharing (with revenue splitting in the future for paid combos)",
	},
	{
		type: "User",
		description: "Earn tokens by sharing feedback on model answers",
	},
	{
		type: "API",
		description: "Pay for API calls to models over the free tier",
	},
	{
		type: "API",
		description: "Run private AI inference",
	},
	{
		type: "Agents",
		description: "Deploy agents",
	},
	{
		type: "Agents",
		description: "Agents can pay for their own computing (confidential/TEE or not) through the aleph.im network",
	},
	{
		type: "Agents",
		description: "Pay for interactions with the blockchain (access indexers and RPCs on base)",
	},
];
</script>

<template>
	<section class="relative flex justify-center bg-gradient-to-tr from-[#644DF9] to-[#FCCBFF] py-8">
		<div class="relative overflow-hidden px-12 py-52 text-center max-lg:px-4 max-lg:py-40" style="width: 1440px">
			<h2 class="pb-6 text-neutral-white max-sm:hidden">What will tokens be used for?</h2>
			<h3 class="pb-6 text-center font-light text-neutral-white sm:hidden">What will tokens be used for?</h3>
			<p class="body-default px-32 pb-20 text-majorelle-800 max-lg:px-12">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id eleifend nulla. Donec quis accumsan massa, vitae
				convallis risus. Duis lectus ipsum, rhoncus vitae faucibus in, feugiat id metus.
			</p>
			<div
				class="col-span-4 m-4 flex min-h-72 flex-col items-center justify-center rounded-3xl border-t border-neutral-white bg-neutral-100 bg-opacity-20 p-10 backdrop-blur max-xl:col-span-3 max-lg:col-span-2 max-sm:col-span-1"
			>
				<img alt="Twitter / X" src="../../assets/icons/lock-Open.svg" style="width: 50px; height: 50px" />
				<p class="body-bold-large py-6">Unlock advanced models and features.</p>
				<p class="body-small">
					Crypto-economics security incentives for data providers, model developers, network operators and training
					contributors / AI alignement.
				</p>
			</div>
			<div class="grid grid-cols-4 text-majorelle-700 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
				<div v-for="card in cardContents" :key="card.type" class="">
					<div
						class="m-4 h-72 w-auto rounded-3xl border-t border-neutral-white bg-neutral-100 bg-opacity-20 backdrop-blur"
					>
						<div class="mx-6 my-12 flex flex-col justify-center">
							<div class="mx-auto bg-neutral-100 bg-opacity-10 px-2 py-1">
								<p class="body-small">{{ card.type }}</p>
							</div>
							<p class="rich-bold-18 pt-6">{{ card.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
