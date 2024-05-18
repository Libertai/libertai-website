<template>
	<div class="container mx-auto px-5">
		<header class="w-full py-4 flex justify-between items-center px-8">
			<div class="flex items-center">
				<RouterLink to="/">
					<img alt="Site Logo" src="/logo.svg" />
				</RouterLink>
				<nav class="flex space-x-4 font-medium">
					<RouterLink class="hover:text-theme-secondary" to="/company">
						Company
					</RouterLink>
					<a class="hover:text-theme-secondary" href="#">
						Earn
					</a>
					<a class="hover:text-theme-secondary" href="#">
						APIs
					</a>
					<a class="hover:text-theme-secondary" href="#">
						Apps
					</a>
				</nav>
			</div>
			<button class="bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
				<a href="https://chat.libertai.io">Chat APP</a>
			</button>
		</header>
	</div>
</template>;
