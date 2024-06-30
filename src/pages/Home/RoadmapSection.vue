<template>
	<section class="mx-auto max-w-[1440px] px-20 pb-5 pt-44">
		<div class="space-y-6 text-center">
			<h2 class="text-majorelle-500">Roadmap</h2>
			<p>
				The LibertAI roadmap focuses on expanding the decentralized LLM's capabilities, enhancing user experience, and
				integrating with more open-source models to promote transparency and collaboration within the network.
			</p>
		</div>
		<div v-for="milestone of roadmap" :key="milestone.title">
			<h3 class="my-9">{{ milestone.title }}</h3>
			<div
				v-if="milestone.features !== undefined"
				:class="`grid gap-6 lg:grid-cols-2 lg:grid-rows-${Math.ceil(milestone.features.length / 2)} 2xl:grid-cols-3 2xl:grid-rows-${Math.ceil(milestone.features.length / 3)} ${milestone.features.length > 3 ? 'lg:grid-flow-col' : ''}`"
			>
				<div v-for="feature of milestone.features" :key="feature.name">
					<RoadmapFeatureCard :status="feature.status" :title="feature.name" />
				</div>
			</div>
			<div
				v-else-if="milestone.sections !== undefined"
				:class="`gap-6 lg:grid lg:grid-cols-2 2xl:grid-flow-col 2xl:grid-cols-${milestone.sections.length}`"
			>
				<div v-for="section of milestone.sections" :key="section.title" class="my-6 space-y-6">
					<p class="body-large font-bold">{{ section.title }}</p>
					<div v-for="feature of section.features" :key="feature.name">
						<RoadmapFeatureCard :status="feature.status" :title="feature.name" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { RoadmapFeatureStatus } from "../../types/roadmap.ts";
import RoadmapFeatureCard from "../../components/RoadmapFeatureCard.vue";

type RoadmapFeature = { name: string; status: RoadmapFeatureStatus };
type RoadmapSection = {
	title: string;
	features?: RoadmapFeature[];
	sections?: { title: string; features: RoadmapFeature[] }[];
};
const roadmap: RoadmapSection[] = [
	{
		title: "Completed",
		features: [
			{ name: "Decentralized inference", status: "completed" },
			{ name: "7-14B parameters models available", status: "completed" },
			{ name: "Chat dApp", status: "completed" },
			{ name: "Telegram bot", status: "completed" },
			{ name: "MoE and 34B parameters model available", status: "completed" },
			{ name: "70B parameters model available", status: "completed" },
			{ name: "Embeddings model available", status: "completed" },
			{ name: "Brand Refresh", status: "completed" },
		],
	},
	{
		title: "2024",
		sections: [
			{
				title: "Q2",
				features: [
					{ name: "Token Launch (In Progress)", status: "in_progress" },
					{ name: "Knowledge DB beta", status: "todo" },
					{ name: "Text to speech", status: "todo" },
				],
			},
			{
				title: "Q3",
				features: [
					{ name: "Agents pre-version", status: "todo" },
					{ name: "Speech to text", status: "todo" },
					{ name: "Image input on LLMs", status: "todo" },
				],
			},
			{
				title: "Q4",
				features: [
					{ name: "Confidential inference", status: "todo" },
					{ name: "Image generation", status: "todo" },
					{ name: "Persona marketplace", status: "todo" },
				],
			},
		],
	},
	{
		title: "2025",
		features: [
			{ name: "Agents deployer beta", status: "todo" },
			{ name: "Multi-modal inference", status: "todo" },
			{ name: "Agents paying for computing beta", status: "todo" },
		],
	},
];
</script>
