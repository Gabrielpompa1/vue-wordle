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
		gameStatus: null,
	}),
	getters: {
		winLoseMessage(state) {
			if (state.gameStatus === 'win') return 'You win!';
			if (state.gameStatus === 'lose') return 'You lose, try again!';
		},
		isRowOneComplete(state) {
			return (Object.values(state.rowOne).every((box) => box.value !== ''))
		}
	},
	actions: {
		setBoxValue(payload) {
			if (payload.value === null) return;
			payload.value.toUpperCase();
			this.rowOne[payload.boxNumber].value = '';
			this.rowOne[payload.boxNumber].value = payload.value;
		},
		checkAnswer() {
			const checkBoxes = this.rowOne.every((box) => box.value !== '');
			if (!checkBoxes) return;

			const joinBoxChars = this.rowOne
				.map((box) => box.value)
				.join('')
				.toUpperCase();

			if (joinBoxChars === this.word) this.gameStatus = 'win';
			else this.gameStatus = 'lose';
		},
	},
});
