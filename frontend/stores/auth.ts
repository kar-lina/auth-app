import { defineStore } from "pinia";
import { useToastStore } from "~/stores/toast";
import type { LoginUserPayloadInterface, SignUpUserPayloadInterface, User } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    currentUser: null as User | null,
    userId: null as string | null | undefined,
  }),
  actions: {
    async getAuth() {
      const { alert } = useToastStore();

      const userId = useCookie("userId");
      if (!userId?.value) {
        this.logUserOut();
        return;
      }
      const { data }: any = await useBaseFetch(`/users/${userId.value}`);
      if (data?.value) {
        this.currentUser = data?.value;
        userId.value = data.value.id;
      }
    },
    async authenticateUser({ email, password, twoFactorAuthenticationCode }: LoginUserPayloadInterface) {
      const { alert } = useToastStore();
      const { data, error } = await useBaseFetch<{
        token: string;
        data: User;
      }>("/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: twoFactorAuthenticationCode
          ? {
              email,
              password,
              twoFactorAuthenticationCode,
            }
          : { email, password },
      });
      if (data.value && data?.value?.token) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const userId = useCookie("userId");
        token.value = data?.value?.token; // set token to cookie
        userId.value = `${data.value.data.id}`;
        this.authenticated = true; // set authenticated  state value to true
        alert("С возвращением!");
      }
      return {data, error}
    },
    async signUpUser({ email, password, name }: SignUpUserPayloadInterface) {
      const { alert } = useToastStore();

      const { data,error } = await useBaseFetch<{
        token: string;
        data: User;
      }>("/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
          name,
        }
      });
      if (data.value) {
        alert("Поздравляем! Регистрация прошла успешно.");
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const userId = useCookie("userId");
      useClearStore();
      userId.value = null;
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
