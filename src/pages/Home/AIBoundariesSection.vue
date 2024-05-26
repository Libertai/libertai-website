<script setup lang="ts">
import LSimpleCard from "../../components/LSimpleCard.vue";
</script>

<template>
	<section class="flex flex-col items-center justify-center overflow-hidden max-xl:px-24">
		<div class="flex flex-col items-center justify-center px-24 py-32 max-xl:pt-12 max-lg:pt-0" style="width: 1440px">
			<div class="h-auto justify-center p-8 max-lg:max-w-md max-md:max-w-sm md:hidden">
				<h3 class="text-left text-majorelle-800 max-lg:text-center">Redefining AI Boundaries</h3>
				<p class="body-tiny items-center text-majorelle-800 max-lg:text-center">
					LibertAI’s unique edge lies in its decentralized approach to AI, which offers privacy, security, flexibility,
					and accessibility while promoting openness, collaboration, and innovation in the AI space.
				</p>
			</div>
			<div
				class="grid grid-cols-4 gap-4 max-xl:w-5/6 max-xl:grid-cols-3 max-lg:w-2/3 max-lg:grid-cols-2 max-md:grid-cols-1"
			>
				<div class="col-span-2 h-auto w-full justify-center p-8 max-md:hidden">
					<h2 class="text-left text-majorelle-800 max-lg:text-center">Redefining AI Boundaries</h2>
					<p class="body-small items-center text-majorelle-800 max-lg:text-center max-sm:w-1/2">
						LibertAI’s unique edge lies in its decentralized approach to AI, which offers privacy, security,
						flexibility, and accessibility while promoting openness, collaboration, and innovation in the AI space.
					</p>
				</div>
				<LSimpleCard
					title="Serverless"
					description="Offers open source models and custom models on top of serveless GPUs and CPUs for fast confidential inferences. Leverages open-source models (using fast CPU inference)"
				/>
				<div class="row-span-2 flex size-full items-center justify-center p-3 max-xl:hidden">
					<div class="image-background h-full w-72 rounded-2xl" />
				</div>
				<LSimpleCard
					title="Confidential"
					description="LibertAI supports confidential inference through its decentralized architecture, enabling users to securely run AI workloads with sensitive data."
				/>
				<LSimpleCard
					title="Security Incentives"
					description="Crypto-economics security incentives for data providers, model developers, network operators and training contributors / AI alignement."
				/>
				<LSimpleCard
					title="Autonomous Workflows"
					description="Facilitates confidential AI tasks and autonomous workflows. No need for huge GPU farms."
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
div.image-background {
	background-image: url("../../assets/element.webp");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
