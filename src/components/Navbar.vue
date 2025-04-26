<template>
	<header
		class="sticky top-0 z-30 flex w-full select-none items-center justify-between border-b bg-neutral-white px-28 py-4 max-lg:px-4"
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
				<img alt="Menu" class="w-6" src="../assets/icons/menu.svg" style="filter: invert(1)" />
			</button>

			<!-- Site logo -->
			<RouterLink class="mr-8" to="/">
				<img alt="Site Logo" class="block max-lg:hidden" height="21" src="../assets/logos/libertAI.svg" width="120" />
				<img alt="Site Logo" class="hidden h-8 max-lg:block" src="../assets/logos/libertAI.svg" />
			</RouterLink>

			<!-- Navbar buttons for large screens -->
			<nav class="body-small flex space-x-8 text-neutral-800 max-lg:hidden">
				<RouterLink to="/company">Company</RouterLink>
				<RouterLink to="/earn">Earn</RouterLink>
				<RouterLink to="/developer">Developer</RouterLink>
				<RouterLink to="/tokenomics">Tokenomics</RouterLink>
				<a href="/Litepaper_0624_v2.pdf" target="_blank">Litepaper</a>
				<div @mouseenter="showApps = true" @mouseleave="showApps = false">
					<div class="flex">
						<span class="mr-1.5 cursor-pointer">Apps</span>
						<img alt="Chevron down" src="../assets/icons/chevron_down.svg" />
					</div>

					<div class="absolute pt-2">
						<div
							v-show="showApps"
							class="ring-black z-10 w-36 origin-top-right rounded-md border border-majorelle-500 bg-tertiary shadow-lg"
							role="menu"
						>
							<div class="py-1">
								<a href="https://chat.libertai.io" target="_blank">
									<div class="dropdown-item flex justify-between">
										<span class="mr-1">Chat dApp</span>
										<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
									</div>
								</a>
								<a href="https://console.libertai.io" target="_blank">
									<div class="dropdown-item flex justify-between">
										<span class="mr-1">Developer console</span>
										<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
									</div>
								</a>
								<a href="https://t.me/liberchat_bot" target="_blank">
									<div class="dropdown-item flex justify-between">
										<span class="mr-1">Telegram bot</span>
										<img alt="Open" src="../assets/icons/open_in_new.svg" width="16" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<!-- Button for the chat app -->
		<a href="https://chat.libertai.io">
			<button
				class="body-bold-default body-tiny w-fit rounded-full bg-majorelle-500 px-6 py-3 text-neutral-white max-lg:px-4 max-lg:py-2"
			>
				<div class="flex gap-2">
					<p class="body-small max-lg:body-tiny">Chat APP</p>
					<img alt="Message" src="../assets/icons/message.svg" />
				</div>
			</button>
		</a>
		<!-- Navbar buttons for small screens -->
		<div v-show="showSidebar" class="absolute left-0 top-16 w-full translate-y-1 border-y bg-neutral-white shadow">
			<div class="flex flex-col">
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/company">Company</RouterLink>
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/earn">Earn</RouterLink>
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/developer">Developer</RouterLink>
				<RouterLink class="body-default px-8 py-4 focus:bg-neutral-300" to="/tokenomics">Tokenomics</RouterLink>
				<div class="body-default focus:bg-neutral-200">
					<button class="flex items-center px-8 py-4" @click="showApps = !showApps">
						<span class="mr-1.5 cursor-pointer">Apps</span>
						<img alt="Chevron up" src="../assets/icons/chevron_down.svg" />
					</button>
					<div v-show="showApps" class="flex flex-col border-y">
						<a href="https://chat.libertai.io" target="_blank">
							<div class="body-default flex justify-between bg-neutral-200 px-16 py-4 focus:bg-neutral-300">
								<span>Chat dApp</span>
								<img alt="Open" src="../assets/icons/open_in_new.svg" width="20" />
							</div>
						</a>
						<a href="https://t.me/liberchat_bot" target="_blank">
							<div class="body-default flex justify-between bg-neutral-200 px-16 py-4 focus:bg-neutral-300">
								<span>Telegram bot</span>
								<img alt="Open" src="../assets/icons/open_in_new.svg" width="20" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const showApps = ref(false);
const showSidebar = ref(false);

const handleScroll = () => {
	showApps.value = false;
	showSidebar.value = false;
};

const router = useRouter();

const closeNavbar = () => {
	showApps.value = false;
	showSidebar.value = false;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	router.beforeEach((_a, _b, next) => {
		closeNavbar();
		next();
	});
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="postcss" scoped>
.dropdown-item {
	@apply px-4 py-2 text-sm text-neutral-800 hover:bg-secondary hover:text-majorelle-500;
}
</style>
