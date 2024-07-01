<script lang="ts" setup>
import LModelCard from "../../components/LModelCard.vue";
import { models } from "../../texts.ts";
import LTinyHeading from "../../components/LTinyHeading.vue";
import LButton from "../../components/LButton.vue";

const paragraphs = [
	"LibertAI works on top of the aleph.im network. It uses its on-demand virtual machines (serverless). When you do a call to the API, it's going to one of the load balancers of the network that distributes your request to one of the available CRN (computing resource nodes, you can also call the API directly on one). This CRN then looks at the path (or domain) and redirects it to a specific virtual machine.",
	"Depending on the inference stack and type of API (text generation, image generation, TTS, STT...) the inference stack will be different. On-demand, the virtual machine is started, with the inference app already on the main volume, and the model is loaded as a volume (from IPFS).",
	"The request is passed to the inference stack, that will process the context, do the generation and get you the result back. For better performance, a cookie is set by the load balancer that acts as a sticky session, so you always end up on the same VM for faster inference on linked contexts (it's useful for text generation on chat use-cases).",
];
</script>

<template>
	<section class="flex flex-col items-center bg-neutral-white px-8 pb-20 pt-36">
		<div class="text-center text-primary max-lg:mb-12">
			<LTinyHeading>Transparent to the core</LTinyHeading>
			<h2 class="my-6 max-lg:hidden">Unlock the Power of Decentralized AI</h2>
			<h3 class="my-6 hidden max-lg:block">Unlock the Power of Decentralized AI</h3>
			<p class="text-majorelle-800">Build Next-Gen Applications on LibertAI's Decentralized Platform</p>
		</div>
		<div class="my-20 grid gap-x-6 gap-y-12 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
			<LModelCard
				v-for="model in models"
				:key="model.name"
				:description="model.description"
				:name="model.name"
				:subtitle="model.subtitle"
				:type="model.type"
			/>
		</div>
		<a class="mb-36" href="https://docs.libertai.io">
			<LButton text="Find Out More" />
		</a>
		<div class="pt-20 text-primary">
			<h2 class="text-center max-lg:hidden">How it works</h2>
			<h3 class="hidden text-center max-lg:block">How it works</h3>
			<div class="mt-12 grid gap-8 text-balance md:grid-cols-3">
				<p
					v-for="text in paragraphs"
					:key="text"
					class="body-small max-lg:body-tiny max-w-96 text-majorelle-800 max-md:text-justify"
				>
					{{ text }}
				</p>
			</div>
		</div>
	</section>
</template>
