<template>
  <div>
    <NuxtLayout>
      <div
        class="mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30"
      >
        <h1 class="title text-4xl font-bold leading-10">
          Добро пожаловать в AuthApp, {{ currentUser?.name }}
        </h1>
        <div>
          Страница находится в разработке. Спасибо за понимание!
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { currentUser } = useAuth();
</script>
