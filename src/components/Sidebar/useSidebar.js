import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebar = defineStore('useSidebar', () => {
  const active = ref(false);

  function toggle() {
    active.value = !active.value;
  }

  return { active, toggle };
});
