<template>
  <slot name="action">
    <!-- <button class="btn" @click="visible=true">open modal</button> -->
  </slot>

  <dialog :open="visible" id="my_modal_2" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <slot name="content" />
      <!-- <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p> -->
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
defineProps<{
  visible: boolean;
}>();
const openModal = () => {
  // my_modal_2.showModal();
};
</script>
