<template>
	<div class="grid grid-cols-5 gap-6">
		<Box v-for="(box, index) in boxes" :key="box" :box="box" :index="index" />
	</div>
</template>

<script setup>
import Box from './Box.vue';

defineProps({ boxes: { type: Object, default: null } });
</script>
