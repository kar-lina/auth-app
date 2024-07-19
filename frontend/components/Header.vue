<template>
  <header class="navbar fixed shadow-sm bg-base-200 w-full">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <NuxtLink to="/"> About App </NuxtLink>
          </li>
          <li v-if="!authenticated">
            <nuxt-link to="/login"> Login </nuxt-link>
          </li>
          <template v-else>
            <li>
              <button @click="logUserOut">Logout</button>
            </li>
            <li>
              <nuxt-link to="/settings"> Settings </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost text-xl"> AuthApp </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/"> About App </NuxtLink>
        </li>
        <li v-if="!authenticated">
          <nuxt-link to="/login"> Login </nuxt-link>
        </li>
        <template v-else>
          <li>
            <button @click="logUserOut">Logout</button>
          </li>
          <li>
            <nuxt-link to="/settings"> Settings </nuxt-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="navbar-end">
      <div v-if="authenticated" class="avatar">
        <nuxt-link to="/profile" class="w-10 overflow-hidden rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </nuxt-link>
      </div>
      <IconsLogo class="w-7 h-7 md:w-auto md:h-auto " v-else />
    </div>
  </header>
</template>
<script lang="ts" setup>
const { logUserOut, authenticated } = useAuth();
</script>
