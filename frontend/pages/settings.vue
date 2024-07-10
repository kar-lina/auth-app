<template>
  <div>
    <NuxtLayout>
      <div class="flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20">
        <h1 class="title text-4xl leading-10">Настройки аккаунта</h1>
        <div class="max-w-[60%] text-center">
          Настройте параметры конфиденциальности и безопасности, чтобы вам было
          ещё удобнее пользоваться сервисами AuthApp.
        </div>
        <div class="flex flex-wrap">
          <ProfileSettingsTwoFA />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
