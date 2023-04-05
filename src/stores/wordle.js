import { defineStore } from 'pinia';

export const useWordleStore = defineStore('wordle', {
	state: () => ({
		word: 'HELLO',
		rowOne: { boxOne: '', boxTwo: '', boxThree: '', boxFour: '', boxFive: '' },
	}),
	getters: {},
	actions: {},
});
