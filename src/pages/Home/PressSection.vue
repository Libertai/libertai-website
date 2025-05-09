<template>
	<section class="mx-auto max-w-[1440px] bg-neutral-white px-20 py-44">
		<div class="mb-12 space-y-6 text-center">
			<LTinyHeading>In the press</LTinyHeading>
			<h2 class="text-majorelle-500">Proudly featured in</h2>
			<p>
				Experience the future of AI with Libertai, as it continues to make waves in top publications and news
				organizations.
			</p>
		</div>
		<div class="mx-auto grid items-center justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
			<div v-for="article of articles" :key="article.link" class="mx-auto space-y-6">
				<a :href="article.link" target="_blank">
					<img :src="article.image" alt="media" />
				</a>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";
import CoinTelegraphImage from "../../assets/home/press/cointelegraph.webp";
import BenzingaImage from "../../assets/home/press/benzinga.png";
import CryptonomistImage from "../../assets/home/press/cryptonomist.png";
import CryptoslateImage from "../../assets/home/press/cryptoslate.webp";
import CCNImage from "../../assets/home/press/ccn.png";
import CryptonewsImage from "../../assets/home/press/cryptonews.png";
import AlexaBlockchainImage from "../../assets/home/press/alexa_blockchain.webp";

type PressArticle = {
	link: string;
	image: string;
};

const articles: PressArticle[] = [
	{
		link: "https://cointelegraph.com/magazine/real-use-cases-crypto-based-ai-markets-ai-financial-analysis/",
		image: CoinTelegraphImage,
	},
	{
		link: "https://benzinga.com/pressreleases/24/06/39377618/libertai-launches-decentralized-ai-ecosystem-powered-by-base-prioritizing-privacy-and-open-source-d",
		image: BenzingaImage,
	},
	{
		link: "https://en.cryptonomist.ch/2024/06/18/libertai-launches-decentralized-ai-ecosystem-powered-by-base-prioritizing-privacy-and-open-source-development/",
		image: CryptonomistImage,
	},
	{
		link: "https://cryptoslate.com/press-releases/libertai-launches-decentralized-ai-ecosystem-powered-by-base-prioritizing-privacy-and-open-source-development/",
		image: CryptoslateImage,
	},
	{
		link: "https://ccn.com/news/technology/depin-decentralized-ai-blockchains/",
		image: CCNImage,
	},
	{
		link: "https://crypto.news/ai-needs-privacy-and-decentralization-more-than-you-think-opinion/",
		image: CryptonewsImage,
	},
	{
		link: "https://alexablockchain.com/libertai-integrates-ltai-token-on-coinbases-base/",
		image: AlexaBlockchainImage,
	},
];
</script>
