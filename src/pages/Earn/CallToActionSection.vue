<script lang="ts" setup>
import LFlashCard from "../../components/LFlashCard.vue";
import StakeImage from "../../assets/stake.png";
import CoreNodeImage from "../../assets/core-node.png";
import ComputeNodeImage from "../../assets/compute-node.png";
import LButton from "../../components/LButton.vue";

type Action = {
	cardTitle: string;
	cardDescription: string;
	buttonText: string;
	buttonLink: string;
	imagePath: string;
};
const actions: [Action, Action, Action] = [
	{
		cardTitle: "Stake ALEPH",
		cardDescription:
			"Staking 10K or more Aleph tokens ($ALEPH) - By showing your commitment to the future of decentralized cloud technology, you earn libertAI Points that reflect your trust in the platform.",
		buttonText: "STAKE ALEPH",
		buttonLink: "https://account.aleph.im/earn/staking/",
		imagePath: StakeImage,
	},
	{
		cardTitle: "Core Channel Node Operator",
		cardDescription:
			"Running an Aleph.im Core Channel Node - Become a part of the backbone that supports cross-chain interactions and enjoy the perks of being a node operator with libertAI Points as your reward!",
		buttonText: "RUN CORE NODE",
		buttonLink: "https://docs.aleph.im/nodes/core/",
		imagePath: CoreNodeImage,
	},
	{
		cardTitle: "Resource Node Operator",
		cardDescription:
			"Operating an Aleph.im Resource Node - Contribute to data storage, compute capabilities, and decentralized applications by running a resource node and reap the benefits through libertAI Points!",
		buttonText: "RUN RESOURCE NODE",
		buttonLink: "https://docs.aleph.im/nodes/compute/",
		imagePath: ComputeNodeImage,
	},
];
</script>
<template>
	<section class="flex flex-col items-center gap-6 bg-gradient-to-b from-neutral-white to-majorelle-100 py-36">
		<p class="body-small text-center max-sm:px-16 sm:px-20 lg:px-28">
			So, are you ready to join this revolutionary journey and unlock the power of libertAI Tokens? Let's get started
			together and shape the future of decentralized cloud technology!
		</p>
		<div class="z-10 my-[4.5rem] flex justify-center gap-6 max-lg:hidden max-md:flex max-md:flex-col lg:flex-row">
			<div v-for="action in actions" :key="action.cardTitle" class="flex flex-col items-center gap-7">
				<LFlashCard
					:description="action.cardDescription"
					:title="action.cardTitle"
					class="max-2xl:hidden"
					variant="large"
				>
					<img :alt="action.cardTitle" :src="action.imagePath" />
				</LFlashCard>
				<LFlashCard :description="action.cardDescription" :title="action.cardTitle" class="2xl:hidden" variant="small">
					<img :alt="action.cardTitle" :src="action.imagePath" />
				</LFlashCard>
				<a :href="action.buttonLink">
					<LButton :text="action.buttonText" class="max-md:hidden" small />
				</a>
			</div>
		</div>
		<div class="my-[4.5rem] hidden flex-col justify-center gap-20 md:flex lg:hidden">
			<div class="flex flex-col items-center gap-7">
				<LFlashCard
					:description="actions[0].cardDescription"
					:title="actions[0].cardTitle"
					class="max-2xl:hidden"
					variant="large"
				>
					<img :alt="actions[0].cardTitle" :src="actions[0].imagePath" />
				</LFlashCard>
				<LFlashCard
					:description="actions[0].cardDescription"
					:title="actions[0].cardTitle"
					class="2xl:hidden"
					variant="small"
				>
					<img :alt="actions[0].cardTitle" :src="actions[0].imagePath" />
				</LFlashCard>
				<a :href="actions[0].buttonLink">
					<LButton :text="actions[0].buttonText" class="max-md:hidden" small />
				</a>
			</div>
			<div class="flex justify-center gap-6">
				<div v-for="i in [1, 2]" :key="actions[i].cardTitle" class="flex flex-col items-center gap-7">
					<LFlashCard
						:description="actions[i].cardDescription"
						:title="actions[i].cardTitle"
						class="max-2xl:hidden"
						variant="large"
					>
						<img :alt="actions[i].cardTitle" :src="actions[i].imagePath" />
					</LFlashCard>
					<LFlashCard
						:description="actions[i].cardDescription"
						:title="actions[i].cardTitle"
						class="2xl:hidden"
						variant="small"
					>
						<img :alt="actions[i].cardTitle" :src="actions[i].imagePath" />
					</LFlashCard>
					<a :href="actions[i].buttonLink">
						<LButton :text="actions[i].buttonText" class="max-md:hidden" small />
					</a>
				</div>
			</div>
		</div>
		<p class="body-small text-center max-sm:px-16 sm:px-20 lg:px-28">
			Staking $ALEPH or running an aleph node? Connect your associated reward wallet to start earning libertAI $LTAI
			tokens.
		</p>
		<a href="https://chat.libertai.io">
			<LButton small text="CONNECT NOW" />
		</a>
	</section>
</template>
