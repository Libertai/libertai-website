<script lang="ts" setup>
const cardContents = [
	{
		type: "User",
		description: "Access to exclusive client-side encrypted knowledge database.",
	},
	{
		type: "User",
		description: "Upgrade to advanced models, extended context, and confidential inference.",
	},
	{
		type: "User",
		description: "Unlock personas and knowledge database sharing with revenue split.",
	},
	{
		type: "User",
		description: "Earn $LTAI tokens by sharing feedback on model answers",
	},
	{
		type: "API",
		description: "$LTAI allows API calls to premium models or those exceeding the free daily limit",
	},
	{
		type: "API",
		description: "Run private AI inference",
	},
	{
		type: "Agents",
		description: "Deploy private AI agents onchain",
	},
	{
		type: "Agents",
		description:
			"AI Agents can purchase their own computing power, TEE confidential or not, through  Aleph.im DePIN network.",
	},
	{
		type: "Agents",
		description: "AI access to blockchain data using indexers and RPCs in the Base network.",
	},
];
</script>

<template>
	<section class="relative flex justify-center bg-gradient-to-tr from-[#644DF9] to-[#FCCBFF] py-8">
		<div class="relative w-[1440px] overflow-hidden px-12 py-52 text-center max-lg:px-4 max-lg:py-40">
			<h2 class="pb-6 text-neutral-white max-sm:hidden">What are tokens useful for?</h2>
			<h3 class="pb-6 text-center font-light text-neutral-white sm:hidden">What are tokens useful for?</h3>
			<p class="body-default px-32 pb-20 text-majorelle-800 max-lg:px-12">
				Access premium features, elevate computing power, and drive the evolution of decentralized AI with $LTAI token.
				Reward yourself with $LTAI - the token that fuels AI agents onchain.
			</p>
			<div
				class="col-span-4 m-4 flex min-h-72 flex-col items-center justify-center rounded-3xl border-t border-neutral-white bg-neutral-100 bg-opacity-20 p-10 backdrop-blur max-xl:col-span-3 max-lg:col-span-2 max-sm:col-span-1"
			>
				<img alt="Twitter / X" src="../../assets/icons/lock-Open.svg" style="width: 50px; height: 50px" />
				<p class="body-bold-large py-6 text-majorelle-700">Unlock advanced models and features.</p>
				<p class="body-small text-majorelle-700">
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
