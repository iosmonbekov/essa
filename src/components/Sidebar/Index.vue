<template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { setItem, getItem } from '@/utils/localStorageHandler.js';

const categories = ref(null);
const categoryName = ref(null);

onMounted(() => {
	categories.value = getItem('categories');
});

const getCategories = () => {
	categories.value = getItem('categories');
};

const addCategory = () => {
	categories.value = getItem('categories') || [];
	categories.value.push({
		id: categories.value?.at(-1)?.id + 1 || 1,
		name: categoryName.value,
		created: new Date(Date.now()),
	});
	setItem('categories', categories.value);
};

const deleteCategory = category => {
	const index = categories.value.map(c => c.id).indexOf(category.id);
	delete categories.value[index];
	setItem(
		'categories',
		categories.value.filter(c => c !== null)
	);
	getCategories();
};

const resetData = () => {
	categoryName.value = null;
};

const onSubmit = () => {
	addCategory();
	getCategories();
	resetData();
};
</script>
