<script setup>
import { onMounted, computed } from 'vue';
import Box from './Box.vue';
import { ArrowRightCircleIcon } from '@heroicons/vue/24/solid';
import { useWordleStore } from '../stores/wordle';

defineProps({ boxes: { type: Object, default: null } });
const wordle = useWordleStore();

const { checkAnswer } = wordle;
const isRowOneComplete = computed(() => wordle.isRowOneComplete);

onMounted(() => {
	const rowOne = document.querySelector('#rowOne');
	// Focus first box on mount
	rowOne.children[0].focus();
});
</script>

<template>
	<div id="rowOne" class="grid grid-cols-5 gap-6 relative place-items-center">
		<Box
			v-for="(box, index) in boxes"
			:key="box"
			:index="index"
			:box-number="index"
		/>
		<button
			v-if="isRowOneComplete"
			aria-label="Submit row answer"
			class="absolute -right-24 h-20 w-20 text-green-400"
			@click="checkAnswer"
		>
			<ArrowRightCircleIcon />
		</button>
	</div>
</template>
