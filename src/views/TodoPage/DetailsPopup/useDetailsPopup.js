import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDetailsPopup = defineStore('useDetailsPopup', () => {
  const active = ref(false);

  function open() {
    active.value = true;
  }

  function close() {
    active.value = false;
  }

  return { active, open, close };
});
