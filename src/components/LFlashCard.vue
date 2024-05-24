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
		:class="`card-${variant} ha-${hoverAnimation} ${light ? 'light' : 'dark'} group-transition group relative overflow-hidden rounded-3xl`"
	>
		<slot />
		<div class="group-transition group absolute top-0 flex-col text-left">
			<h4 class="group-transition table-cell table-fixed align-bottom !font-bold">
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
		@apply h-80 w-80;

		div {
			@apply w-4/5 pl-3;
		}

		h4 {
			@apply body-default;
			@apply h-[18.5rem] w-[13rem];
		}

		p {
			@apply body-tiny text-balance;
		}

		&.light {
			@apply bg-majorelle-300 text-[#837AFF];
		}

		&.ha-default {
			&.dark {
				@apply bg-majorelle-500 text-neutral-white;
			}

			p {
				@apply mt-6 opacity-0;
			}

			&:hover {
				&.dark {
					@apply bg-[#231271];
				}

				h4 {
					@apply h-[10.125rem];
				}

				p {
					@apply mt-5 opacity-100;
				}
			}
		}

		&.ha-none {
			&.dark {
				@apply bg-majorelle-500 text-neutral-white;
			}

			p {
				@apply mt-6;
			}
		}

		&.ha-blocked {
			&.dark {
				@apply bg-[#231271] text-neutral-white;
			}

			h4 {
				@apply h-[10.125rem];
			}

			p {
				@apply mt-5;
			}
		}
	}

	&-small {
		@apply h-[18.75rem] w-[18.75rem];

		&.ha-default,
		&.ha-none {
			h4 {
				@apply h-[17rem];
			}
		}

		&.ha-default:hover h4 {
			@apply h-[6rem];
		}

		&.ha-blocked {
			h4 {
				@apply h-[6rem];
			}
		}
	}

	&-large {
		@apply h-[27.5rem] w-[27.5rem];

		&.ha-default,
		&.ha-none {
			h4 {
				@apply h-[24.75rem];
			}
		}

		&.ha-default {
			&:hover {
				h4 {
					@apply h-[14.875rem];
				}
			}
		}

		&.ha-blocked {
			h4 {
				@apply h-[14.875rem];
			}
		}
	}

	&-small,
	&-large {
		div {
			@apply px-6;
		}

		p {
			@apply body-small;
			@apply mt-10;
		}

		&.dark,
		&.light {
			@apply text-neutral-white;
		}

		&.ha-default {
			@apply bg-gradient-to-b from-[rgba(0,0,0,0)_78%] to-[rgba(0,0,0,.3)];

			&:hover {
				&.dark {
					@apply bg-majorelle-500;
				}

				&.light {
					@apply bg-majorelle-300;

					h4,
					p {
						@apply text-[#837AFF];
					}
				}
			}
		}

		&.ha-none {
			@apply bg-gradient-to-b from-[rgba(0,0,0,0)_78%] to-[rgba(0,0,0,.3)];
			@apply cursor-pointer;
		}

		&.ha-blocked {
			&.light {
				@apply bg-majorelle-300;

				h4,
				p {
					@apply text-[#837AFF];
				}
			}

			&.dark {
				@apply bg-majorelle-500;
			}

			@apply cursor-pointer;
		}
	}
}

:slotted(img) {
	@apply group-transition relative -z-10 block h-full w-full object-cover group-hover:scale-105;
}

.group-transition {
	@apply transition-all duration-500 ease-in-out;
}
</style>
