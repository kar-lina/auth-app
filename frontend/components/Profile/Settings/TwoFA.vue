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
          <tempalte v-if="currentUser.twoFactorAuthenticationSecretEnabledAt">
            {{ useDate(currentUser.twoFactorAuthenticationSecretEnabledAt) }}
          </tempalte>
        </p>
        <div class="card-actions justify-between mt-2">
          <button class="btn" @click="disable2FAModalOpen = true">
            Выключить
          </button>
          <button class="btn btn-info" @click="showQR">Показать QR-code</button>
        </div>
      </template>
    </div>
    <UiModal id="2fa-modal" :visible="!!qrCodeImg">
      <template #content>
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-xl">Настройка приложения аутентификации.</h1>
          <ul class="list list-disc mb-5">
            <li>В приложении Google Authenticator нажмите на значок "+".</li>
            <li>Отсканируйте QR-код</li>
          </ul>
          <img :src="qrCodeImg" />
          <div
            tabindex="0"
            class="collapse collapse-arrow border-base-300 bg-base-200 border"
          >
            <div class="collapse-title text-base">
              Не получается отсканировать QR-код?
            </div>
            <div class="collapse-content text-sm">
              <ol class="list-decimal flex flex-col gap-2 p-4">
                <li>
                  В приложении Google Authenticator нажмите на значок
                  <strong>+</strong>, а затем выберите
                  <strong>Ввести ключ настройки</strong>.
                </li>
                <li>
                  Укажите адрес электронной почты и этот ключ (пробелы не
                  учитываются):
                  <div>
                    <strong>{{ twoFASecrete }}</strong>
                  </div>
                </li>
                <li>
                  Убедитесь, что выбран параметр <strong>По времени</strong>.
                </li>
                <li>
                  Чтобы завершить настройку, нажмите <strong>Добавить</strong>.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </template>
    </UiModal>
    <UiModal id="2fa-enable" :visible="disable2FAModalOpen">
      <template #content>
        <div class="flex flex-col gap-6 items-center">
          <p>
            Для отключения двухфаторной аутентификации введите код из приложения
          </p>
          <UiOTP
            :digitCount="6"
            @update:otp="twoFactorAuthenticationCode = $event"
          />
          <button
            :disabled="!twoFactorAuthenticationCode"
            @click="disble2fa"
            class="btn btn-info"
          >
            Отключить
          </button>
        </div>
      </template>
    </UiModal>
  </div>
</template>
<script setup lang="ts">
const { currentUser, getAuth } = useAuth();
const { alert } = useToastStore();

const qrCodeImg = ref('');
const twoFASecrete = ref('');
const disable2FAModalOpen = ref(false);

const showQR = async () => {
  try {
    const res: { otpauthUrl: string; secret: string } = await useNuxtApp().$api(
      '/2fa/qr-code',
    );
    if (res.otpauthUrl) {
      qrCodeImg.value = res.otpauthUrl;
      twoFASecrete.value = res.secret;
    }
    getAuth();
  } catch (error: any) {
    alert(error, 'error');
  }
};
const enable2fa = async () => {
  try {
    const res: { otpauthUrl: string; secret: string } = await useNuxtApp().$api(
      '/2fa/turn-on',
      {
        method: 'post',
        onResponseError({ request, response, options }) {
          alert(response._data.message, 'error');
        },
      },
    );
    if (res.otpauthUrl) {
      qrCodeImg.value = res.otpauthUrl;
      twoFASecrete.value = res.secret;
    }
    getAuth();
  } catch (error: any) {
    alert(error, 'error');
  }
};
const twoFactorAuthenticationCode = ref('');

const disble2fa = async () => {
  if (!twoFactorAuthenticationCode) return;
  try {
    const res: { otpauthUrl: string } = await useNuxtApp().$api(
      '/2fa/turn-off',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          twoFactorAuthenticationCode: twoFactorAuthenticationCode.value,
        },
        onResponseError({ request, response, options }) {
          alert(response._data.message, 'error');
        },
      },
    );
    getAuth();
    alert('Двухфакторная аутентификация отключена', 'info');
    disable2FAModalOpen.value = false
  } catch (error: any) {
    console.log(error);
  }
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
