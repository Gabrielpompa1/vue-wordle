<template>
	<div class="flex flex-col items-center mt-6 gap-6">
		<Row />
		<!-- <Row />
		<Row />
		<Row />
		<Row /> -->
	</div>
</template>

<script setup>
import { useWordleStore } from './stores/wordle';
import { computed } from 'vue';
import Row from './components/Row.vue';

const wordleStore = useWordleStore();

const wordleActive = computed(() => wordleStore.wordleActive);
</script>

<style scoped></style>
