<script setup>
import { useWordleStore } from '../stores/wordle';
import { computed, onMounted, watch } from 'vue';

const wordleStore = useWordleStore();
const props = defineProps({
	boxNumber: { type: Number, default: 0 },
});
const boxValue = computed(() =>
	wordleStore.rowOne[props.boxNumber].value.toUpperCase()
);
const setBoxValue = wordleStore.setBoxValue;

const handleBoxSwitch = (event) => {
	const leftBox =
		document.querySelector('#rowOne').children[props.boxNumber - 1];
	const rightBox =
		document.querySelector('#rowOne').children[props.boxNumber + 1];

	// Move left
	if (event.key === 'ArrowLeft' && leftBox) {
		leftBox.focus();
	}
	// Move right
	if (event.key === 'ArrowRight' && rightBox) {
		rightBox.focus();
	}
};

watch(boxValue, (value) => {
	if (value === '') return;
	const nextBox =
		document.querySelector('#rowOne').children[props.boxNumber + 1];
	if (nextBox) nextBox.focus();
});
</script>

<template>
	<input
		class="border-2 border-black w-24 h-24 flex justify-center items-center text-5xl text-center focus:outline-green-400 focus:outline focus:outline-8 cursor-pointer"
		type="text"
		:value="boxValue"
		@keydown="handleBoxSwitch"
		@keydown.delete="setBoxValue({ boxNumber: props.boxNumber, value: '' })"
		@input="setBoxValue({ boxNumber: props.boxNumber, value: $event.data })"
	/>
</template>

<style scoped>
input {
	color: transparent;
	text-shadow: 0 0 0 green;
}
</style>
