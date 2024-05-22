<template>
	<header
		class="sticky top-0 z-30 flex w-full select-none items-center justify-between border-b bg-neutral-100 px-28 py-4 max-lg:px-4"
	>
		<div class="flex items-center">
			<!-- Burger menu button for small screens -->
			<button
				class="mr-4 lg:hidden"
				@click="
					showSidebar = !showSidebar;
					showApps = false;
				"
			>
				<img class="w-6" alt="Menu" src="../assets/icons/menu.svg" style="filter: invert(1)" />
			</button>

			<!-- Site logo -->
			<RouterLink class="mr-8" to="/">
				<img class="block max-lg:hidden" alt="Site Logo" height="21" src="../assets/logos/libertAI.svg" width="120" />
				<img class="hidden h-8 max-lg:block" alt="Site Logo" src="../assets/logos/libertAI.svg" />
			</RouterLink>

			<!-- Navbar buttons for large screens -->
			<nav class="body-small flex space-x-8 text-neutral-800 max-lg:hidden">
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
							class="ring-black z-10 w-36 origin-top-right rounded-md border border-primary bg-white shadow-lg"
							role="menu"
						>
							<div class="py-1">
								<div class="dropdown-item flex justify-between">
									<div class="mr-1">
										<a href="https://chat.libertai.io" target="_blank">Chat dApp</a>
									</div>
									<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
								</div>
								<div class="dropdown-item flex justify-between">
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

		<!-- Button for the chat app -->
		<a href="https://chat.libertai.io">
			<button
				class="body-default body-tiny w-fit rounded-full bg-primary px-6 py-3 font-bold text-neutral-100 max-lg:px-4 max-lg:py-2"
			>
				<div class="flex gap-2">
					<p class="body-small max-lg:body-tiny">Chat APP</p>
					<img alt="Message" src="../assets/message.svg" />
				</div>
			</button>
		</a>
		<!-- Navbar buttons for small screens -->
	</header>
	<div v-show="showSidebar" class="sticky top-16 w-full border-y bg-neutral-100 shadow">
		<div class="flex flex-col">
			<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/company">Company</RouterLink>
			<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/earn">Earn</RouterLink>
			<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/developer">Developer</RouterLink>
			<div class="body-default focus:bg-neutral-200">
				<button @click="showApps = !showApps" class="flex items-center px-8 py-4">
					<span class="mr-1.5 cursor-pointer">Apps</span>
					<img alt="Chevron up" src="../assets/chevron_down.svg" />
				</button>
				<div v-show="showApps" class="flex flex-col border-y">
					<div class="body-default flex justify-between bg-neutral-200 px-16 py-4 focus:bg-neutral-300">
						<a href="https://chat.libertai.io"> Chat dApp </a>
						<img alt="Open" src="../assets/icons/open_in_new.svg" width="20" />
					</div>
					<div class="body-default flex justify-between bg-neutral-200 px-16 py-4 focus:bg-neutral-300">
						<a href="https://t.me/liberchat_bot"> Telegram bot </a>
						<img alt="Open" src="../assets/icons/open_in_new.svg" width="20" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showApps = ref(false);
const showSidebar = ref(false);
</script>

<style lang="postcss" scoped>
.dropdown-item {
	@apply px-4 py-2 text-sm text-neutral-800 hover:bg-secondary hover:text-primary;
}
</style>
