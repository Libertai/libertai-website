<template>
	<section class="flex justify-center">
		<div class="w-[1440px] justify-center px-24 py-16 text-center max-lg:px-6 max-lg:pb-72">
			<div class="flex flex-col gap-y-6">
				<LTinyHeading>No Harvesting</LTinyHeading>
				<h2 class="block text-primary">You are in Control of Your Data</h2>
				<p class="body-small">
					Enjoy the peace of mind that comes with LibertAI's robust security measures. Advanced encryption protocols,
					distributed data storage, and rigorous access controls ensure that your data remains safeguarded against
					unauthorized access, surveillance, or exploitation.
				</p>
				<div
					class="tilted-image mx-auto flex items-center justify-center rounded-3xl bg-neutral-white md:h-156 md:w-156"
				>
					<img
						alt="container"
						class="rounded-3xl"
						height="622"
						src="../../assets/home/shield_container.png"
						width="622"
					/>
					<img
						alt="shield"
						class="shield-image absolute rounded-3xl md:left-16 md:top-16"
						height="500"
						src="../../assets/home/shield.png"
						width="500"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import LTinyHeading from "../../components/LTinyHeading.vue";
import { onMounted, onUnmounted } from "vue";

const onTiltedImageMove = (event: MouseEvent) => {
	const imageX = 622;
	const imageY = 622;
	const ANGLE_COMPENSATION = 25;
	let mouseX = event.clientX;
	let mouseY = event.clientY;

	let xOffset = imageX - mouseX;
	let yOffset = imageY - mouseY;

	let xRotationAngle = yOffset / ANGLE_COMPENSATION;
	let yRotationAngle = xOffset / (ANGLE_COMPENSATION * -1);

	// @ts-ignore
	document.querySelector(".tilted-image .shield-image")!.style.transform =
		"rotateX(" + xRotationAngle + "deg) rotateY(" + yRotationAngle + "deg) ";
};

const onTiltedImageLeave = () => {
	// @ts-ignore
	document.querySelector(".tilted-image .shield-image")!.style.transform = "rotateX(0deg) rotateY(0deg)";
};

onMounted(() => {
	// @ts-ignore
	document.querySelector(".tilted-image")!.addEventListener("mousemove", onTiltedImageMove);
	document.querySelector(".tilted-image")!.addEventListener("mouseleave", onTiltedImageLeave);
});

onUnmounted(() => {
	document.removeEventListener("mousemove", onTiltedImageMove);
	document.removeEventListener("mouseleave", onTiltedImageLeave);
});
</script>

<style scoped>
.tilted-image {
	perspective: 2000px;
}
</style>
