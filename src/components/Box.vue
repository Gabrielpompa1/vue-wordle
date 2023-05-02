<template>
	<input
		class="border-2 border-black w-24 h-24 flex justify-center items-center text-5xl text-center focus:outline-red-400 focus:outline focus:outline-8"
		type="text"
		maxlength="1"
		@input="setBoxValue({ boxNumber: boxNumber, value: $event.target.value })"
		@keydown.enter="checkAnswer()"
	/>
</template>
<script setup>
import { useWordleStore } from '../stores/wordle';

const wordleStore = useWordleStore();
defineProps({
	boxNumber: { type: Number, default: 0 },
});
const setBoxValue = wordleStore.setBoxValue;
const checkAnswer = wordleStore.checkAnswer;
</script>
