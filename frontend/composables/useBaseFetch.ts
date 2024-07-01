// export const useBaseFetch: typeof useFetch = (request, opts?) => {
//   const config = useRuntimeConfig()
//   return useFetch(request, {
//     baseURL: config.public.apiBase as string,
//     ...opts,
//   })
// }

import type { UseFetchOptions } from 'nuxt/app'

export function useBaseFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()

  return useFetch(url, {
    baseURL: config.public.apiBase as string,
    ...options,
    $fetch: useNuxtApp().$customFetch,
  })
}
