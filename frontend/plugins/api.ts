export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token');
  const userId = useCookie('userId');

  const config = useRuntimeConfig();
  const api = $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ request, options, error }) {
      if (token.value) {
        const headers = (options.headers ||= {});
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${token.value}`]);
        } else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${token.value}`);
        } else {
          headers.Authorization = `Bearer ${token.value}`;
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        userId.value = null;
        token.value = null;
        await nuxtApp.runWithContext(() => navigateTo('/login'));
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
