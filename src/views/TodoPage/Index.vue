<template>
  <Header />

  <div class="layout">
    <Sidebar />
    <TodoList />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { setItem, getItem } from '@/utils/localStorageHandler';
import Sidebar from '@/components/Sidebar/Index.vue';

const todos = ref(null);
const todo = reactive({
	name: null,
	categoryId: null,
});

const getTodos = () => {
	todos.value = getItem('todos');
};

onMounted(() => {
	getTodos();
});

const addTodo = () => {
	todos.value = getItem('todos') || [];
	todos.value.push({
		id: todos.value?.at(-1)?.id + 1 || 1,
		name: todo.name,
		done: false,
		categoryId: todo.categoryId,
		created: new Date(Date.now()),
	});
	setItem('todos', todos.value);
};

const deleteTodo = todo => {
	const index = todos.value.map(t => t.id).indexOf(todo.id);
	delete todos.value[index];
	setItem(
		'todos',
		todos.value.filter(t => t !== null)
	);
	getTodos();
};

const resetData = () => {
	Object.keys(todo).map(key => {
		todo[key] = null;
	});
};

const onSubmit = () => {
	addTodo();
	getTodos();
	resetData();
};
</script>
