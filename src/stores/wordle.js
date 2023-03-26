import { defineStore } from 'pinia';

export const useWordleStore = defineStore('wordle', {
	state: () => ({ wordleActive: true }),
	getters: {},
	actions: {},
});
