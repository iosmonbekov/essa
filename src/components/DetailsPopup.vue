<template>
  <div class="popup" :class="{ active }" @click="close">
    <div class="popup-body" @click.stop>
      <div class="popup-content">
        <div class="popup-content__header">Detail</div>
        <form class="popup-form">
          <input class="popup-form__input" placeholder="High Priority Item">
          <input class="popup-form__input" type="date">
          <select class="popup-form__select">
            <option value="">High Priority</option>
          </select>
          <textarea class="popup-form__textarea" rows="10"></textarea>
          <a href="#" class="popup-form__btn_save">
            <img src="@/assets/images/btn/save.svg" alt="Save">
            Save
          </a>
          <a href="#" class="popup-form__btn_done">
            <img src="@/assets/images/btn/done.svg" alt="Done">
            Mark Done
          </a>
          <a href="#" class="popup-form__btn_delete">
            <img src="@/assets/images/btn/delete.svg" alt="Delete">
            Delete
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false);

function open() {
  active.value = true;
}

function close() {
  active.value = false;
}

defineExpose({
  open,
  close
});
</script>
