<template>
	<div class="flex flex-col items-center mt-6 gap-6">
		<Row id="rowOne" :boxes="rowOne" />
		<!-- <Row />
		<Row />
		<Row />
		<Row /> -->
	</div>
</template>

<script setup>
import { useWordleStore } from './stores/wordle';
import { computed, onMounted } from 'vue';
import Row from './components/Row.vue';

const wordleStore = useWordleStore();
const rowOne = computed(() => wordleStore.rowOne);

onMounted(() => {
	const boxOne = document.querySelector('#boxOne');
	boxOne.focus();
	boxOne.addEventListener('keydown', (event) => {
		console.log(event.key);
	});
});
</script>

<style scoped></style>
