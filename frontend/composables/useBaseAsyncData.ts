import type { UseFetchOptions } from "nuxt/app";

export function useBaseAsyncData<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, "default"> & { default?: () => T | Ref<T> },
) {
  return useBaseAsyncData(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  });
}
