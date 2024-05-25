import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
	state: () => ({ showCountdown: true }),
	getters: {
		isCountdownDisplayed: (state) => state.showCountdown,
	},
});
