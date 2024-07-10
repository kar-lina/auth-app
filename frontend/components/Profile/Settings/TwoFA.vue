<template>
  <div class="card max-w-[360px] bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://www.axiad.com/wp-content/uploads/2022/07/2-Factor-Authentication.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Двухэтапная аутентификация!</h2>
      <p>
        Для дополнительной защиты аккаунта, включите двухфакторную
        аутентификацию
      </p>
      <div class="card-actions justify-end">
        <button @click="enable2fa" class="btn btn-info">Включить</button>
      </div>
    </div>
    <UiModal :visible="qrCodeImg">
      <template #content>
        <img :src="qrCodeImg" />
      </template>
    </UiModal>
  </div>
</template>
<script setup lang="ts">
const { currentUser } = storeToRefs(useAuthStore());
// const {data, pending } = useBaseFetch<{user: User}>('/user/settings')
// const {data, pending } = useBaseFetch('/2fa/turn-on')
// const {data, pending } = useBaseFetch('/users')
const openModal = ref(false);
const qrCodeImg = ref('');
console.log('openModal', openModal.value);
console.log('qrCodeImg', qrCodeImg.value);
const enable2fa = async () => {
  try {
    const res: { otpauthUrl: string } = await useNuxtApp().$api(
      '/2fa/turn-on',
      { method: 'post' },
    );
    if (res.otpauthUrl) {
      qrCodeImg.value = res.otpauthUrl;
      console.log('qrCodeImg', qrCodeImg.value);

      openModal.value = true;
    }

  } catch (error) {}
};
</script>
<style>
.card {
  flex: 1 1 340px;
}
</style>
