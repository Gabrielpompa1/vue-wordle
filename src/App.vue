<template>
	<div class="bg-green-400 h-16 flex items-center">
		<h1 class="text-3xl text-white font-bold ml-6 py-2">Vurdle</h1>
	</div>
	<div class="flex flex-col items-center mt-6 gap-6">
		<Row id="rowOne" :boxes="rowOne" />
		<p v-if="gameStatus !== null" class="absolute bottom-20 text-5xl">
			{{ winLoseMessage }}
		</p>
	</div>
</template>

<script setup>
import { useWordleStore } from './stores/wordle';
import { computed, onMounted } from 'vue';
import Row from './components/Row.vue';

const wordleStore = useWordleStore();
const rowOne = computed(() => wordleStore.rowOne);

const winLoseMessage = computed(() => wordleStore.winLoseMessage);
const gameStatus = computed(() => wordleStore.gameStatus);

onMounted(() => {
	// Answer check
	document.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') wordleStore.checkAnswer();
	});
});
</script>

<style scoped></style>
