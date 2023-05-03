<template>
	<div class="flex flex-col items-center mt-6 gap-6">
		<Row id="rowOne" :boxes="rowOne" />
	</div>
</template>

<script setup>
import { useWordleStore } from './stores/wordle';
import { computed, onMounted } from 'vue';
import Row from './components/Row.vue';

const wordleStore = useWordleStore();
const rowOne = computed(() => wordleStore.rowOne);

onMounted(() => {
	// Answer check
	// TODO - Add check condition for unfinished answers / only run the check if all boxes are full
	document.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') wordleStore.checkAnswer();
	});
});
</script>

<style scoped></style>
