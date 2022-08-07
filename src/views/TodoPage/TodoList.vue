<template>
  <div class="todos">
    <h1 class="todos__title">
      Monday
    </h1>
    <button class="todos__button" @click="DetailsPopupStore.open">
      <span>Add Todo</span>
    </button>
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
  <DetailsPopup />
</template>

<script setup>
import TodoItem from '@/views/TodoPage/TodoItem.vue';
import DetailsPopup from '@/views/TodoPage/DetailsPopup/DetailsPopup.vue';
import { useDetailsPopup } from '@/views/TodoPage/DetailsPopup/useDetailsPopup.js';

const DetailsPopupStore = useDetailsPopup();
</script>
