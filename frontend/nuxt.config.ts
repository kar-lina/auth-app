// https://nuxt.com/docs/api/configuration/nuxt-config
import { checker } from "vite-plugin-checker";

export default defineNuxtConfig({
  imports: {
    dirs: ["composables"],
  },
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  runtimeConfig: {
    public: { apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "/" },
  },
  modules: ["@nuxt/eslint",  "@pinia/nuxt", ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      checker({
        vueTsc: true,
      }),
    ],
  },
  eslint: {
  }
  // typescript: { typeCheck: true },
});