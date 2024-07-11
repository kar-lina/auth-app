<template>
  <slot name="action">
    <!-- <button class="btn" @click="visible=true">open modal</button> -->
  </slot>
  <dialog :open="visible" id="" class="modal" >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <slot name="content" />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
defineProps<{
  visible: boolean;
  id: string;
}>();
</script>

<style>
.modal::backdrop {
    background-color: #0006;
    animation: modal-pop .2s ease-out;
}
</style>