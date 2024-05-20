<template>
	<header
		class="relative sticky top-0 z-30 flex w-full select-none items-center justify-between bg-neutral-100 px-28 py-4 max-lg:px-4"
	>
		<div v-show="showSidebar" class="absolute top-20 w-auto rounded-xl bg-white shadow">
			<div class="flex flex-col">
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-500" to="/company">Company</RouterLink>
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-500" to="/earn">Earn</RouterLink>
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-500" to="/developer">Developer</RouterLink>
			</div>
		</div>
		<div class="flex">
			<button class="mr-8 lg:hidden" @click="showSidebar = !showSidebar">
				<img class="w-8" alt="Menu" src="../assets/icons/menu.svg" style="filter: invert(1)" />
			</button>
			<RouterLink class="mr-8" to="/">
				<img class="block max-lg:hidden" alt="Site Logo" height="21" src="../assets/logos/libertAI.svg" width="120" />
				<img class="hidden h-10 max-lg:block" alt="Site Logo" src="../assets/logos/libertAI.svg" />
			</RouterLink>

			<nav class="body-small flex hidden space-x-8 text-neutral-800">
				<RouterLink to="/company">Company</RouterLink>
				<RouterLink to="/earn">Earn</RouterLink>
				<RouterLink to="/developer">Developer</RouterLink>
				<div @mouseenter="showApps = true" @mouseleave="showApps = false">
					<div class="flex">
						<span class="mr-1.5 cursor-pointer">Apps</span>
						<img alt="Chevron down" src="../assets/chevron_down.svg" />
					</div>

					<div class="absolute pt-2">
						<div
							v-show="showApps"
							class="ring-black z-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-opacity-5"
							role="menu"
						>
							<div class="py-1">
								<div class="dropdown-item flex">
									<div class="mr-1">
										<a href="https://chat.libertai.io" target="_blank">Chat dApp</a>
									</div>
									<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
								</div>
								<div class="dropdown-item flex">
									<div class="mr-1">
										<a href="https://t.me/liberchat_bot" target="_blank">Telegram bot</a>
									</div>
									<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<a href="https://chat.libertai.io">
			<button class="body-default body-tiny w-fit rounded-full bg-primary px-6 py-3 font-bold text-neutral-100">
				<div class="flex gap-1">
					<span class="max-lg:hidden">Chat APP</span>
					<img alt="Message" src="../assets/message.svg" />
				</div>
			</button>
		</a>
	</header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LButton from "./LButton.vue";

const showApps = ref(false);
const showSidebar = ref(false);
</script>

<style lang="postcss" scoped>
.dropdown-item {
	@apply px-4 py-2 text-sm text-neutral-800 hover:bg-secondary hover:text-primary;
}
</style>
