<script lang="ts" setup>
import { PoolType, useTokensStore } from "../../stores/tokens.ts";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const tokensStore = useTokensStore();

onMounted(() => {
	if (tokensStore.pools === null) {
		tokensStore.fetchTokenPools();
	}
});

tokensStore.fetchTokenPools();

const { pools } = storeToRefs(tokensStore);

const totalSupply = computed(() =>
	pools.value
		? pools.value.airdrop.total + pools.value.raise.total + pools.value.reserves.total + pools.value.team.total
		: 0,
);
const circulatingSupply = computed(() =>
	pools.value
		? pools.value.airdrop.distributed +
			pools.value.raise.distributed +
			pools.value.reserves.distributed +
			pools.value.team.distributed
		: 0,
);

type PoolStat = {
	name: PoolType;
	amount: number;
	color: string;
};

const poolStats = computed<PoolStat[]>(() =>
	pools.value
		? [
				{ name: "team", amount: pools.value.team.distributed, color: "bg-[#644DF9]" },
				{ name: "reserves", amount: pools.value.reserves.distributed, color: "bg-[#D288FF]" },
				{ name: "airdrop", amount: pools.value.airdrop.distributed, color: "bg-[#FCCBFF]" },
				{ name: "raise", amount: pools.value.raise.distributed, color: "bg-majorelle-700" },
			]
		: [],
);
</script>

<template>
	<section class="relative flex justify-center bg-neutral-white">
		<div class="relative w-[1440px] overflow-hidden px-20 py-12 max-lg:px-12">
			<div class="justify-center rounded-xl px-12 py-6 shadow-lg max-lg:px-4">
				<p class="body-bold-large pb-4 text-center text-majorelle-700">Live Circulating Total Supply</p>
				<div class="flex items-center justify-center max-2xl:flex-col">
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-xl:hidden" style="width: 1000px">
						<div
							v-for="stat in poolStats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (1000 * stat.amount) / totalSupply + 'px' }"
						></div>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-lg:hidden xl:hidden" style="width: 800px">
						<div
							v-for="stat in poolStats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (800 * stat.amount) / totalSupply + 'px' }"
						/>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-md:hidden lg:hidden" style="width: 500px">
						<div
							v-for="stat in poolStats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (500 * stat.amount) / totalSupply + 'px' }"
						/>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 max-sm:hidden md:hidden" style="width: 400px">
						<div
							v-for="stat in poolStats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (400 * stat.amount) / totalSupply + 'px' }"
						/>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>
					<div class="my-2 flex h-4 justify-start bg-majorelle-300 sm:hidden" style="width: 200px">
						<div
							v-for="stat in poolStats"
							:key="stat.name"
							:class="stat.color"
							:style="{ width: (200 * stat.amount) / totalSupply + 'px' }"
						/>
						<div class="h-8 -translate-y-2 bg-neutral-black" style="width: 1px" />
					</div>

					<p class="body-default w-64 text-center">
						{{ new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(circulatingSupply) }} LTAI
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
