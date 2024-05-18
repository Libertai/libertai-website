<template>
	<header class="w-full px-28 py-4 flex justify-between items-center">
		<div class="flex items-center">
			<RouterLink class="mr-8" to="/">
				<img alt="Site Logo" height="21" src="/logo.svg" width="120" />
			</RouterLink>
			<nav class="flex space-x-8 body-small text-neutral-800">
				<RouterLink to="/company">
					Company
				</RouterLink>
				<a href="#">
					Earn
				</a>
				<a href="#">
					APIs
				</a>
				<div @mouseenter="showApps = true" @mouseleave="showApps = false">
					<div class="flex">
						<span class="mr-1.5 cursor-pointer">Apps</span>
						<img alt="Chevron down" src="../assets/chevron-down.svg" />
					</div>

					<div class="absolute pt-2">
						<div
							v-show="showApps"
							class="z-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
							role="menu"
						>
							<div class="py-1">
								<a class="dropdown-item" href="https://chat.libertai.io" target="_blank">
									Chat dApp
								</a>
								<a class="dropdown-item" href="https://t.me/liberchat_bot" target="_blank">
									Telegram bot
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<button class="bg-primary text-white body-default font-bold py-2 px-4 rounded-full">
			<a href="https://chat.libertai.io">Chat APP</a>
		</button>
	</header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showApps = ref(false);
</script>

<style lang="postcss" scoped>
.dropdown-item {
	@apply text-neutral-800 block px-4 py-2 text-sm hover:text-primary hover:bg-secondary
}
</style>
