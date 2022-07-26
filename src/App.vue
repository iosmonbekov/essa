<template>
	<div>
		<h1>Hello, Essa</h1>
		<TodoList />
		<button @click="toggleDark"></button>
	</div>
</template>

<script setup>
import TodoList from '@/views/TodoPage/Index.vue';
</script>

<style scoped>
</style>
