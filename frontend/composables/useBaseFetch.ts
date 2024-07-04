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
  const accessToken = useCookie('token')

  return useFetch(url, {
    baseURL: config.public.apiBase as string,
    ...options,
    headers: accessToken.value
      ? { Authorization: `Bearer ${accessToken.value}` }
      : {}
    // $fetch: useNuxtApp().$customFetch,
  })
}
