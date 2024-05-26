<script lang="ts" setup>
import LButton from "../../components/LButton.vue";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

defineProps<{ action: () => void }>();

dayjs.extend(duration);
const countdownEnd = dayjs.unix(1718712000);
const timeLeft = dayjs.duration(countdownEnd.diff(dayjs()));
</script>

<template>
	<section class="image-background relative flex min-h-screen justify-center text-center">
		<div class="flex w-full py-20 backdrop-blur-sm max-lg:px-0">
			<div class="m-auto flex max-w-4xl flex-col gap-6 px-6 py-9 text-neutral-white max-lg:py-0 max-lg:text-center">
				<h1 class="max-lg:hidden">Discover the Freedom of Decentralized AI</h1>
				<h2 class="hidden sm:max-lg:block">Discover the Freedom of Decentralized AI</h2>
				<h3 class="hidden font-bold max-sm:block">Discover the Freedom of Decentralized AI</h3>
				<p class="body-small">
					Join the AI revolution and support LibertAI to empower a decentralized, democratic, and liberating future,
					where collective intelligence converges to unlock unprecedented possibilities.
				</p>
				<div class="grid gap-x-12 max-lg:space-y-12 max-sm:grid-cols-1 lg:grid-cols-3">
					<div class="m-auto w-52 space-y-5">
						<h6>DAYS</h6>
						<div class="grid grid-cols-2 gap-x-1.5">
							<div v-for="digit of timeLeft.format('DD').toString().split('')" :key="digit">
								<div class="countdown-digit flex">
									<p class="m-auto select-none text-7xl">{{ digit }}</p>
								</div>
							</div>
						</div>
					</div>

					<div class="m-auto w-52 space-y-5">
						<h6>HOURS</h6>
						<div class="grid grid-cols-2 gap-x-1.5">
							<div v-for="digit of timeLeft.format('HH').toString().split('')" :key="digit">
								<div class="countdown-digit flex">
									<p class="m-auto select-none text-7xl">{{ digit }}</p>
								</div>
							</div>
						</div>
					</div>

					<div class="m-auto w-52 space-y-5">
						<h6>MINUTES</h6>
						<div class="grid grid-cols-2 gap-x-1.5">
							<div v-for="digit of timeLeft.format('mm').toString().split('')" :key="digit">
								<div class="countdown-digit flex">
									<p class="m-auto select-none text-7xl">{{ digit }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<LButton class="mx-auto mt-12" text="Continue to site" @click="action()" />
				<p class="body-small mt-8">Keep up with the latest news, join the revolution, join the community.</p>
				<div class="m-auto grid w-36 grid-cols-2">
					<a class="m-auto w-fit" href="https://x.com/Libertai_DAI" target="_blank">
						<img alt="Twitter / X" src="../../assets/icons/x.svg" style="width: 36px; height: 36px" />
					</a>
					<a class="m-auto w-fit" href="https://t.me/libertai" target="_blank">
						<img alt="Telegram" src="../../assets/icons/telegram.svg" style="width: 36px; height: 36px" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
section.image-background {
	background-image: url("../../assets/hero.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.countdown-digit {
	background: rgba(247, 246, 255, 0.5);
	border-radius: 12px;
	@apply h-32 w-24;
}
</style>
