// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  runtimeConfig: {
    public: { apiBase: process.env.NUXT_PUBLIC_API_BASE ?? '/' },
  },
  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
