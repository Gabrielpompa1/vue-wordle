<template>
	<input
		:id="index"
		class="border-2 border-black w-24 h-24 flex justify-center items-center text-5xl text-center focus:outline-red-100 focus:outline focus:outline-2"
		capitalize
	/>
</template>
<script setup>
defineProps({
	box: { type: String, default: '' },
	index: { type: String, default: '' },
});
</script>
