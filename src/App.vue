<template>
	<div class="flex flex-col items-center mt-6 gap-6">
		<Row id="rowOne" :boxes="rowOne" />
	</div>
</template>

<script setup>
import { useWordleStore } from './stores/wordle';
import { computed } from 'vue';
import Row from './components/Row.vue';

const wordleStore = useWordleStore();
const rowOne = computed(() => wordleStore.rowOne);

</script>

<style scoped></style>
