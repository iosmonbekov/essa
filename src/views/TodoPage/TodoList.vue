<template>
  <div class="todos">
    <h1 class="todos__title">
      Monday
    </h1>
    <button class="todos__button" @click="detailsPopup.open">
      <span>Add Todo</span>
    </button>
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
  <DetailsPopup ref="detailsPopup" />
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/store/useTodoStore';

import TodoItem from '@/views/TodoPage/TodoItem.vue';
import DetailsPopup from '@/components/DetailsPopup.vue';

const todoStore = useTodoStore();

const detailsPopup = ref(null);
</script>
