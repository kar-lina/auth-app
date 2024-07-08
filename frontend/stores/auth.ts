import { defineStore } from "pinia";
import { useToastStore } from "~/stores/toast";
import type {
  LoginUserPayloadInterface,
  SignUpUserPayloadInterface,
  User,
} from "~/types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    currentUser: null as User | null,
    userId: null as string | null | undefined,
  }),
  actions: {
    async getAuth() {
      const userId = useCookie("userId");
      if (!userId) {
        this.logUserOut();
        return;
      }
      const { data, pending }: any = await useBaseFetch(
        `/users/${userId.value}`
      );
      this.currentUser = data.value;
    },
    async authenticateUser({ email, password }: LoginUserPayloadInterface) {
      const { alert } = useToastStore();

      const { data, pending }: any = await useBaseFetch("/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        onResponseError({ request, response, options }) {
          alert(response._data.message, "error");
        },
      });
      this.loading = pending;
      if (data.value && data?.value?.token) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const userId = useCookie("userId");
        token.value = data?.value?.token; // set token to cookie
        userId.value = data.value.data.id;
        this.authenticated = true; // set authenticated  state value to true
        this.userId = userId.value;
        alert("С возвращением!");
      }
    },
    async signUpUser({ email, password, name }: SignUpUserPayloadInterface) {
      const { alert } = useToastStore();

      const { data, pending }: any = await useBaseFetch("/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
          name,
        },
        onResponseError({ request, response, options }) {
          useNuxtApp().$toast.error(response._data.message);
        },
      });
      this.loading = pending;
      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
        alert(
          "Поздравляем! Регистрация прошла успешно. Введите данные для входа."
        );
      }
    },
    logUserOut() {
      const { alert } = useToastStore();

      console.log("logUserOut");
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      alert("До скорой встречи!", "info");
    },
  },
});
