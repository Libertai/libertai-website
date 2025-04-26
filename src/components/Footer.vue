<template>
	<div class="z-3 flex items-center justify-center bg-neutral-800">
		<div class="w-[1440px]">
			<div class="mb-32 grid grid-cols-1 pt-14 max-md:mx-10 md:mx-28 md:grid-cols-2">
				<img alt="white logo" class="m-2 mb-12 md:hidden" src="../assets/logos/libertAI_white.png" />
				<div class="grid grid-cols-2">
					<div v-for="section of sections" :key="section.title" class="space-y-2">
						<p class="body-regular text-neutral-white">{{ section.title }}</p>
						<a v-for="item of section.items" :key="item.title" :href="item.link" target="_blank">
							<p class="body-small text-neutral-white">{{ item.title }}</p>
						</a>
					</div>
				</div>
				<img alt="white logo" class="m-2 max-md:hidden" src="../assets/logos/libertAI_white.png" />
			</div>

			<div class="flex justify-center space-x-2 pb-10">
				<p class="rich-bold-18 max-lg:body-small mt-2 text-center text-tertiary">
					Copyright © LibertAI.io | Powered by
				</p>
				<a href="https://aleph.cloud/" target="_blank">
					<p class="rich-bold-18 max-lg:body-small mt-2 text-center text-majorelle-500">Aleph Cloud</p>
				</a>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
type FooterSection = {
	title: string;
	items: { title: string; link: string }[];
};

const sections: FooterSection[] = [
	{
		title: "Company",
		items: [
			{ title: "About", link: "/company" },
			{ title: "Earn", link: "/earn" },
			{
				title: "Telegram Bot",
				link: "https://t.me/liberchat_bot",
			},
			{
				title: "Chat Bot",
				link: "https://chat.libertai.io/",
			},
		],
	},
	{
		title: "Resources",
		items: [
			{ title: "Litepaper", link: "/Litepaper_0624_v2.pdf" },
			{
				title: "Docs",
				link: "https://docs.libertai.io",
			},
		],
	},
];
</script>
