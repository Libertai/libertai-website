<script lang="ts" setup>
import LFlashCard from "../../components/LFlashCard.vue";
import EarnImage from "../../assets/earn.png";
import LButton from "../../components/LButton.vue";

type Action = {
	cardTitle: string;
	cardDescription: string;
	buttonText: string;
	buttonLink: string;
	imagePath: string;
}
const actions: [Action, Action, Action] = [
	{
		cardTitle: "Stake ALEPH",
		cardDescription: "Staking 10K or more Aleph tokens ($ALEPH) - By showing your commitment to the future of decentralized cloud technology, you earn Libertai Points that reflect your trust in the platform.",
		buttonText: "STAKE ALEPH",
		buttonLink: "https://account.aleph.im/earn/staking/",
		imagePath: EarnImage
	},
	{
		cardTitle: "Core Channel Node Operator",
		cardDescription: "Running an Aleph.im Core Channel Node - Become a part of the backbone that supports cross-chain interactions and enjoy the perks of being a node operator with Libertai Points as your reward!",
		buttonText: "RUN CORE NODE",
		buttonLink: "https://docs.aleph.im/nodes/core/",
		imagePath: EarnImage
	},
	{
		cardTitle: "Resource Node Operator",
		cardDescription: "Operating an Aleph.im Resource Node - Contribute to data storage, compute capabilities, and decentralized applications by running a resource node and reap the benefits through Libertai Points!",
		buttonText: "RUN RESOURCE NODE",
		buttonLink: "https://docs.aleph.im/nodes/compute/",
		imagePath: EarnImage
	}
];
</script>
<template>
	<section class="flex flex-col py-36 gap-6 items-center">
		<p class="body-small max-sm:px-16 sm:px-20 lg:px-28 text-center">
			So, are you ready to join this revolutionary journey and unlock the power of LibertAI Tokens?
			Let's get started together and shape the future of decentralized cloud technology!
		</p>
		<div class="flex max-md:flex-col max-md:flex max-lg:hidden lg:flex-row gap-6 my-[4.5rem] justify-center">
			<div v-for="action in actions" :key="action.cardTitle" class="flex flex-col gap-7 items-center">
				<LFlashCard
					:description="action.cardDescription" :title="action.cardTitle" class="max-2xl:hidden"
					variant="large">
					<img :alt="`${action.cardTitle} image`" :src="action.imagePath">
				</LFlashCard>
				<LFlashCard
					:description="action.cardDescription" :title="action.cardTitle" class="2xl:hidden "
					variant="small">
					<img :alt="`${action.cardTitle} image`" :src="action.imagePath">
				</LFlashCard>
				<a :href="action.buttonLink">
					<LButton :text="action.buttonText" class="max-md:hidden" small />
				</a>
			</div>
		</div>
		<div class="hidden flex-col md:flex lg:hidden gap-20 my-[4.5rem] justify-center">
			<div class="flex flex-col gap-7 items-center">
				<LFlashCard
					:description="actions[0].cardDescription" :title="actions[0].cardTitle" class="max-2xl:hidden"
					variant="large">
					<img :alt="`${actions[0].cardTitle} image`" :src="actions[0].imagePath">
				</LFlashCard>
				<LFlashCard
					:description="actions[0].cardDescription" :title="actions[0].cardTitle" class="2xl:hidden "
					variant="small">
					<img :alt="`${actions[0].cardTitle} image`" :src="actions[0].imagePath">
				</LFlashCard>
				<a :href="actions[0].buttonLink">
					<LButton :text="actions[0].buttonText" class="max-md:hidden" small />
				</a>
			</div>
			<div class="flex gap-6 justify-center">
				<div v-for="i in [1, 2]" :key="actions[i].cardTitle" class="flex flex-col gap-7 items-center">
					<LFlashCard
						:description="actions[i].cardDescription" :title="actions[i].cardTitle" class="max-2xl:hidden"
						variant="large">
						<img :alt="`${actions[i].cardTitle} image`" :src="actions[i].imagePath">
					</LFlashCard>
					<LFlashCard
						:description="actions[i].cardDescription" :title="actions[i].cardTitle" class="2xl:hidden "
						variant="small">
						<img :alt="`${actions[i].cardTitle} image`" :src="actions[i].imagePath">
					</LFlashCard>
					<a :href="actions[i].buttonLink">
						<LButton :text="actions[i].buttonText" class="max-md:hidden" small />
					</a>
				</div>
			</div>
		</div>
		<p class="body-small max-sm:px-16 sm:px-20 lg:px-28 text-center">
			Staking $ALEPH or running an aleph node? Connect your associated reward wallet to start earning LibertAI $LTAI
			tokens.
		</p>
		<LButton small text="CONNECT NOW" />
	</section>
</template>