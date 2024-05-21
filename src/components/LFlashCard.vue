<script lang="ts" setup>
export type LFlashCardProps = {
	variant?: "small" | "regular" | "large";
	title: string;
	description: string;
	hoverAnimation?: "default" | "none" | "blocked";
	light?: boolean;
};
withDefaults(defineProps<LFlashCardProps>(), {
	variant: "regular",
	hoverAnimation: "default",
	light: false,
});
</script>

<template>
	<div
		:class="`card-${variant} ha-${hoverAnimation} ${light ? 'light' : 'dark'} rounded-3xl relative overflow-hidden group group-transition`"
	>
		<slot />
		<div :class="`text-left absolute bottom-0 group group-transition`">
			<h4 class="!font-bold group-transition">
				{{ title }}
			</h4>
			<p class="group-transition">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
div.card {
	&-regular {
		@apply w-80 h-80;

		div {
			@apply pb-12 px-3;
		}

		h4 {
			@apply body-default;
			@apply w-3/5;
		}

		p {
			@apply body-tiny;
			@apply w-3/4;
		}

		&.light {
			@apply bg-purple-100 text-purple-400;
		}

		&.ha-default {
			&.dark {
				@apply bg-primary text-neutral-100;
			}

			div {
				@apply translate-y-40;
			}

			h4 {
				@apply mb-6;
			}

			p {
				@apply opacity-0;
			}

			&:hover {
				&.dark {
					@apply bg-[#231271];
				}

				div {
					@apply translate-y-0;
				}

				h4 {
					@apply mb-5;
				}

				p {
					@apply opacity-100;
				}
			}
		}

		&.ha-none {
			&.dark {
				@apply bg-primary text-neutral-100;
			}

			div {
				@apply translate-y-40;
			}

			h4 {
				@apply mb-6;
			}
		}

		&.ha-blocked {
			&.dark {
				@apply bg-[#231271] text-neutral-100;
			}

			h4 {
				@apply mb-5;
			}
		}
	}

	&-small {
		@apply w-[18.75rem] h-[18.75rem];

		&.ha-default,
		&.ha-none {
			div {
				@apply translate-y-48;
			}
		}
	}

	&-large {
		@apply w-[27.5rem] h-[27.5rem];

		&.ha-default,
		&.ha-none {
			div {
				@apply translate-y-40;
			}
		}
	}

	&-small,
	&-large {
		div {
			@apply px-6 pb-20;
		}

		h4 {
			@apply mb-8;
		}

		p {
			@apply body-small;
		}

		&.dark,
		&.light {
			@apply text-neutral-100;
		}

		&.ha-default {
			@apply bg-gradient-to-b from-[rgba(0,0,0,0)_78%] to-[rgba(0,0,0,.3)];

			&:hover {
				&.dark {
					@apply bg-primary;
				}

				&.light {
					@apply bg-purple-100;

					h4,
					p {
						@apply text-purple-400;
					}
				}

				div {
					@apply translate-y-0;
				}
			}
		}

		&.ha-none {
			@apply bg-gradient-to-b from-[rgba(0,0,0,0)_78%] to-[rgba(0,0,0,.3)];
			@apply cursor-pointer;
		}

		&.ha-blocked {
			@apply bg-primary;
			@apply cursor-pointer;
		}
	}
}

:slotted(img) {
	@apply w-full h-full object-cover group-hover:scale-105 group-transition -z-10 relative block;
}

.group-transition {
	@apply transition-all ease-in-out duration-500;
}
</style>
