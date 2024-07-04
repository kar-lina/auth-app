<template>
  <div>
    <NuxtLayout name="animated">
      <NuxtLayout>
        <div
          class="mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30 "
        >
          <h1 class="title text-4xl font-bold leading-10" >Добро пожаловать в AuthApp</h1>
          <div class="description text-xl">
            Fullstack приложение с авторизацией c использованием Nest.js +
            Postgres, Vue.js + Nuxt.js.
          </div>
          <NuxtLink to="/login" class="try btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary text-white mt-5">
            Попробовать
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </NuxtLink>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>
