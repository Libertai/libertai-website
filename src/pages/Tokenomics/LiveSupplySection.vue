<script lang="ts" setup>
import { useTokensStore } from "../../stores/tokens.ts";
import { onMounted } from "vue";

const tokensStore = useTokensStore();

onMounted(() => {
	if (tokensStore.pools === null) {
		tokensStore.fetchTokenPools();
	}
});
</script>

<template>
	<section class="relative flex justify-center bg-neutral-white">
		<div class="relative w-[1440px] overflow-hidden px-20 py-12 max-lg:px-12">
			<div class="justify-center rounded-xl px-12 py-6 shadow-lg max-lg:px-4">
				<p class="body-bold-large pb-4 text-center text-majorelle-700">Live Circulating Total Supply</p>
				<div class="flex items-center justify-center max-2xl:flex-col">
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-xl:hidden" style="width: 1000px">
						<div
							v-for="stat in tokensStore.getPoolsStats"
							:key="stat.name"
							:class="`tooltip ${stat.color}`"
							:style="{ width: (1000 * stat.distributed) / tokensStore.getTotalSupply + 'px' }"
						>
							<span class="tooltip-text">{{ stat.prettyName }}: {{ stat.prettyDistributed }}</span>
						</div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-lg:hidden xl:hidden" style="width: 800px">
						<div
							v-for="stat in tokensStore.getPoolsStats"
							:key="stat.name"
							:class="`tooltip ${stat.color}`"
							:style="{ width: (800 * stat.distributed) / tokensStore.getTotalSupply + 'px' }"
						>
							<span class="tooltip-text">{{ stat.prettyName }}: {{ stat.prettyDistributed }}</span>
						</div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-md:hidden lg:hidden" style="width: 500px">
						<div
							v-for="stat in tokensStore.getPoolsStats"
							:key="stat.name"
							:class="`tooltip ${stat.color}`"
							:style="{ width: (500 * stat.distributed) / tokensStore.getTotalSupply + 'px' }"
						>
							<span class="tooltip-text">{{ stat.prettyName }}: {{ stat.prettyDistributed }}</span>
						</div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-sm:hidden md:hidden" style="width: 400px">
						<div
							v-for="stat in tokensStore.getPoolsStats"
							:key="stat.name"
							:class="`tooltip ${stat.color}`"
							:style="{ width: (400 * stat.distributed) / tokensStore.getTotalSupply + 'px' }"
						>
							<span class="tooltip-text">{{ stat.prettyName }}: {{ stat.prettyDistributed }}</span>
						</div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 sm:hidden" style="width: 200px">
						<div
							v-for="stat in tokensStore.getPoolsStats"
							:key="stat.name"
							:class="`tooltip ${stat.color}`"
							:style="{ width: (200 * stat.distributed) / tokensStore.getTotalSupply + 'px' }"
						>
							<span class="tooltip-text">{{ stat.prettyName }}: {{ stat.prettyDistributed }}</span>
						</div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>

					<p class="body-default w-64 text-center">
						{{ new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(tokensStore.getCirculatingSupply) }}
						LTAI
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.tooltip {
	position: relative;
	display: inline-block;
}

.tooltip .tooltip-text {
	visibility: hidden;
	width: 120px;
	background-color: #555;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;

	/* Position the tooltip text */
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;

	/* Fade in tooltip */
	opacity: 0;
	transition: opacity 0.3s;
}

.tooltip .tooltip-text::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltip-text {
	visibility: visible;
	opacity: 1;
}
</style>
