import { defineStore } from 'pinia';
import { ref } from 'vue';

const TODO_STORAGE = 'TODO_STORAGE';

export const useTodoStore = defineStore('todo', () => {
	const todos = ref(localStorage.getItem(TODO_STORAGE) || []);

	return { todos };
});