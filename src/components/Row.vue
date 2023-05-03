<script setup>
import { onMounted } from 'vue';
import Box from './Box.vue';
defineProps({ boxes: { type: Object, default: null } });

onMounted(() => {
	const rowOne = document.querySelector('#rowOne');
	// Focus first box on mount
	rowOne.children[0].focus();
});
</script>

<template>
	<div id="rowOne" class="grid grid-cols-5 gap-6">
		<Box
			v-for="(box, index) in boxes"
			:key="box"
			:index="index"
			:box-number="index"
		/>
	</div>
</template>
