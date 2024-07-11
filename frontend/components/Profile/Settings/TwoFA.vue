<template>
  <div class="card max-w-[360px] bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://www.axiad.com/wp-content/uploads/2022/07/2-Factor-Authentication.jpg"
        alt="2-Factor-Authentication"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Двухэтапная аутентификация!</h2>
      <template v-if="!currentUser?.isTwoFactorAuthenticationEnabled">
        <p>
          Для дополнительной защиты аккаунта, включите двухфакторную
          аутентификацию
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-info" @click="enable2fa">Включить</button>
        </div>
      </template>
      <template v-else>
        <p>
          Двухфаторная аутентификая включена
          <tempalte v-if="currentUser.twoFactorAuthenticationSecretEnabledAt">{{
            useDate(currentUser.twoFactorAuthenticationSecretEnabledAt)
          }}</tempalte>
        </p>
        <div class="card-actions justify-between mt-2">
          <button class="btn" @click="disble2fa">Выключить</button>
          <button class="btn btn-info" @click="showQR">Показать QR-code</button>
        </div>
      </template>
    </div>
    <UiModal id="2fa-modal" :visible="!!qrCodeImg">
      <template #content>
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-xl">Отсканируйте в приложении QR-code.</h1>
          <img :src="qrCodeImg" />
        </div>
      </template>
    </UiModal>
  </div>
</template>
<script setup lang="ts">
const { currentUser, getAuth } = useAuth();
const qrCodeImg = ref('');
console.log('qrCodeImg', qrCodeImg.value);

const showQR = async () => {
  try {
    const res: { otpauthUrl: string; secret: string } = await useNuxtApp().$api(
      '/2fa/qr-code',
    );
    if (res.otpauthUrl) {
      qrCodeImg.value = res.otpauthUrl;
      console.log('qrCodeImg', qrCodeImg.value);
      console.log('secret', res.secret);
    }
    getAuth();
  } catch (error) {}
};
const enable2fa = async () => {
  try {
    const res: { otpauthUrl: string } = await useNuxtApp().$api(
      '/2fa/turn-on',
      { method: 'post' },
    );
    if (res.otpauthUrl) {
      qrCodeImg.value = res.otpauthUrl;
      console.log('qrCodeImg', qrCodeImg.value);
    }
    getAuth();
  } catch (error) {}
};

const disble2fa = async () => {
  try {
    const res: { otpauthUrl: string } = await useNuxtApp().$api(
      '/2fa/turn-off',
      { method: 'post' },
    );
  } catch (error) {}
};
</script>

<style>
.card {
  flex: 1 1 340px;
}
.modal::backdrop {
  background-color: #0006;
  animation: modal-pop 0.2s ease-out;
}
</style>
