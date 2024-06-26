<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-10">Добро пожаловать в AuthApp!</h1>
        <form class="flex flex-col gap-8">
          <label class="input input-bordered flex items-center gap-2">
            <IconsEmail />
            <input type="text" class="grow" placeholder="Email" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsUser />
            <input type="text" class="grow" placeholder="Username" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsPassword />
            <input type="password" class="grow" value="password" />
          </label>
          <input type="submit" value="Войти" class="btn" />
        </form>
        <p class="mt-5">
          Нет аккаунта?
          <NuxtLink to="/signup" 
          class="link link-primary"
            >Зарегистрироваться</NuxtLink
          >
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts"></script>
