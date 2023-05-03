import { defineStore } from 'pinia';

export const useWordleStore = defineStore('wordle', {
	state: () => ({
		word: 'HELLO',
		rowOne: [
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
		],
	}),
	getters: {},
	actions: {
		setBoxValue(payload) {
			if (payload.value === null) return;
			payload.value.toUpperCase();
			this.rowOne[payload.boxNumber].value = '';
			this.rowOne[payload.boxNumber].value = payload.value;
		},
		checkAnswer() {
			const joinBoxChars = this.rowOne
				.map((box) => box.value)
				.join('')
				.toUpperCase();

			if (joinBoxChars === this.word) console.log('You win!');
			else console.log('Try again');
		},
	},
});
