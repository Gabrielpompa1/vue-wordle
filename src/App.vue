<template>
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
