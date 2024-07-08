<template>
  <div>
    <NuxtLayout>
      <div class="flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20">
        <h1 class="title text-4xl leading-10">Настройки аккаунта</h1>
        <div class="max-w-[60%] text-center">Настройте параметры конфиденциальности и безопасности, чтобы вам было ещё удобнее пользоваться сервисами AuthApp.</div>
        <div class="flex flex-wrap">
          <div class="card max-w-[360px] bg-base-100 shadow-xl">
            <figure>
              <img src="https://www.axiad.com/wp-content/uploads/2022/07/2-Factor-Authentication.jpg" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Двухэтапная аутентификация!</h2>
              <p>Для дополнительной защиты аккаунта, включите двухфакторную аутентификацию</p>
              <div class="card-actions justify-end">
                <button class="btn btn-info">Включить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { currentUser } = storeToRefs(useAuthStore());





// const {data, pending } = useBaseFetch<{user: User}>('/user/settings')
</script>
<style>
.card {
  flex: 1 1 340px;
}
</style>
