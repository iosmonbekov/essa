<template>
  <header class="header">
    <div class="header__button" @click="Sidebar.toggle">
      <img src="@/assets/images/header/btn.svg" alt="sidebar">
    </div>
    <div class="header__title">
      <img src="@/assets/images/header/logo.svg" alt="logo">
      <h2>Your Todo</h2>
    </div>
  </header>
</template>

<script setup>
import { useSidebar } from '@/components/Sidebar/useSidebar';

const Sidebar = useSidebar();
</script>
