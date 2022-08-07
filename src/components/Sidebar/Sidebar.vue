<template>
  <nav class="sidebar" :class="{ 'active': Sidebar.active }">
    <div class="create-group">
      <h2 class="sidebar__title">
        Projects
      </h2>
      <button class="sidebar__button">
        New project
      </button>
    </div>
    <div class="sidebar__item">
      <p>Monday</p>
      <img src="@/assets/images/nav/nav-item.svg" alt="">
    </div>
    <div class="sidebar__item">
      <p>Tuesday</p>
      <img src="@/assets/images/nav/nav-item.svg" alt="">
    </div>
  </nav>
</template>


<script setup>
import { useSidebar } from '@/components/Sidebar/useSidebar';

const Sidebar = useSidebar();
</script>
