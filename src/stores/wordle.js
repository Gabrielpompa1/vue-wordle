import { defineStore } from 'pinia';

export const useWordleStore = defineStore('wordle', {
	state: () => ({
		word: 'HELLO',
		rowOne: [
			{ value: '', correct: false, incorrect: false },
			{ value: '', correct: false, incorrect: false },
			{ value: '', correct: false, incorrect: false },
			{ value: '', correct: false, incorrect: false },
			{ value: '', correct: false, incorrect: false },
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
			console.log(payload)
			payload.value.toUpperCase();
			this.rowOne[payload.boxNumber].value = '';
			this.rowOne[payload.boxNumber].value = payload.value.toUpperCase();
		},
		checkAnswer(boxes) {
			const word = this.word.split('')
			this.rowOne = boxes.map((letter, index) => {
				if (letter.value === word[index]) letter.correct = true
				else letter.incorrect = true
				return {...letter}
			})
		},
	},
});
