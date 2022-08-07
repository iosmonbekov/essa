<template>
  <Header />

  <div class="layout">
    <Sidebar />
    <TodoList />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import TodoList from '@/views/TodoPage/TodoList.vue';
</script>

<style lang="scss">
</style>
