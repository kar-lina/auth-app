export default defineNuxtPlugin((nuxtApp) => {
  const userId = useCookie("userId");
  const { alert } = useToastStore();
  const config = useRuntimeConfig();
  const api = $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ request, options, error }) {
      const token = useCookie("token");
      if (token.value) {
        const headers = (options.headers ||= {});
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${token.value}`]);
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${token.value}`);
        } else {
          headers.Authorization = `Bearer ${token.value}`;
        }
      }
    },
    async onResponseError({ response }) {
      const token = useCookie("token");
      alert(response._data.message);
      if (response.status === 401) {
        userId.value = null;
        token.value = null;
        await nuxtApp.runWithContext(() => navigateTo("/login"));
        useClearStore();
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
