<template>
	<div class="grid bg-white py-44 max-lg:pb-0 max-lg:pt-16 lg:grid-cols-[40%_60%]">
		<div class="m-auto flex max-w-xl flex-col items-center justify-center gap-y-6 text-center">
			<h2>Be a Part of the AI Revolution</h2>
			<p class="body-small">
				Are you passionate about artificial intelligence, decentralization, and community-driven innovation? Do you want
				to be a part of a pioneering team that is transforming the AI landscape? Look no further than Libertai!
			</p>
			<a class="max-lg:mb-6" href="mailto:hello@libertai.io" target="_blank">
				<l-button small text="Join Now" />
			</a>
		</div>
		<img alt="Company" class="m-auto max-lg:w-full lg:rounded-2xl" src="../../assets/team.jpg" width="730px" />
	</div>
</template>
<script lang="ts" setup>
import LButton from "../../components/LButton.vue";
</script>
