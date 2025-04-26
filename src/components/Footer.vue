<template>
	<div class="flex items-center justify-center text-[#6A7089]">
		<div class="w-[1440px]">
			<div class="mb-32 pt-80 max-md:mx-10 md:mx-28 md:grid-cols-2">
				<div class="flex justify-between px-96">
					<div v-for="section of sections" :key="section.title" class="space-y-2">
						<p class="body-regular cursor-pointer">{{ section.title }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] pointer-events-none z-0 bg-gradient-radial"></div>
	</div>
</template>

<style>
.bg-gradient-radial {
	background: radial-gradient(circle, #644DF9 0%, #000000 100%);
	opacity: 0.4;
}
</style>

<script lang="ts" setup>
type FooterSection = {
	title: string;
	link: string;
};

const sections: FooterSection[] = [
	{
		title: "Company",
		link: "/company"
	},
	{
		title: "Earn",
		link: "/earn"
	},
	{
		title: "Developer",
		link: "/earn"
	},
	{
		title: "Apps",
		link: "/earn"
	},
];
</script>
