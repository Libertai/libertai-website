<script lang="ts" setup>
import StakeImage from "../../assets/earn/staking.svg";
import CoreNodeImage from "../../assets/earn/core-channel-node-operator.svg";
import ResourceNodeImage from "../../assets/earn/resource-node-operator.svg";
import ConnectAccountsImage from "../../assets/earn/connect-accounts.svg";
import LButton from "@/components/LButton.vue";

type Action = {
	cardTitle: string;
	cardDescription: string;
	buttonText: string;
	buttonLink: string;
	imagePath: string;
};
const actions: Action[] = [
	{
		cardTitle: "Staking",
		cardDescription:
			"Staking 10K or more Aleph tokens ($ALEPH) - By showing your commitment to the future of decentralized cloud technology, you earn LibertAI tokens that reflect your trust in the platform.",
		buttonText: "Stake ALEPH",
		buttonLink: "https://account.aleph.im/earn/staking/",
		imagePath: StakeImage,
	},
	{
		cardTitle: "Core Channel Node Operator",
		cardDescription:
			"Running an Aleph.im Core Channel Node - Become a part of the backbone that supports cross-chain interactions and enjoy the perks of being a node operator with LibertAI tokens as your reward!",
		buttonText: "Run Core Node",
		buttonLink: "https://docs.aleph.im/nodes/core/",
		imagePath: CoreNodeImage,
	},
	{
		cardTitle: "Resource Node Operator",
		cardDescription:
			"Operating an Aleph.im Resource Node - Contribute to data storage, compute capabilities, and decentralized applications by running a resource node and reap the benefits through LibertAI tokens!",
		buttonText: "Run Resource Node",
		buttonLink: "https://docs.aleph.im/nodes/compute/",
		imagePath: ResourceNodeImage,
	},
	{
		cardTitle: "Connect Accounts",
		cardDescription:
			"Staking $ALEPH or running an aleph node? Connect your associated reward wallet to start earning LibertAI $LTAI tokens.",
		buttonText: "Connect now",
		buttonLink: "https://chat.libertai.io",
		imagePath: ConnectAccountsImage,
	},
];
</script>
<template>
	<section class="flex flex-col items-center gap-6 bg-gradient-to-b from-neutral-white to-majorelle-100 py-36">
		<p class="body-small text-center max-sm:px-16 sm:px-20 lg:px-28">
			So, are you ready to join this revolutionary journey and unlock the power of LibertAI Tokens? Let's get started
			together and shape the future of decentralized cloud technology!
		</p>
		<div class="grid gap-6 md:grid-cols-2 xl:mx-3 xl:grid-cols-4 2xl:mx-20">
			<div
				v-for="action in actions"
				:key="action.cardTitle"
				class="earn-card flex h-96 w-72 flex-col items-center justify-center gap-4 rounded-2xl border-[0.5px] border-majorelle-300 bg-neutral-white px-6 py-9 text-center text-majorelle-800"
			>
				<img :src="action.imagePath" alt="card" />
				<p class="body-bold-default text-primary">{{ action.cardTitle }}</p>
				<p class="body-tiny w-56">{{ action.cardDescription }}</p>
				<a :href="action.buttonLink" target="_blank">
					<LButton :text="action.buttonText" small />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
.earn-card {
	box-shadow: 0 20px 20px 0 rgba(100, 77, 249, 0.1);
}
</style>
