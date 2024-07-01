import { defineStore } from 'pinia'

interface LoginUserPayloadInterface {
  email: string
  password: string
}
interface SignUpUserPayloadInterface extends LoginUserPayloadInterface{
  name: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    setToken(accessToken: string) {
      const token = useCookie('token') // useCookie new hook in nuxt 3
         token.value = accessToken // set token to cookie
         this.authenticated = true // set authenticated  state value to true
    },
    async authenticateUser({ email, password }: LoginUserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        'http://localhost:5050/auth/login',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
          },
          onResponseError({ request, response, options }) {
            // Handle the response errors
            console.log(response._data)
          },
        }
      )
      this.loading = pending
      if (data.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
      }
    },
    async signUpUser({ email, password, name }: SignUpUserPayloadInterface) {
      const { data, pending }: any = await useFetch(
        'http://localhost:5050/auth/signup',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
            name,
          },
        },
      )
      this.loading = pending
      if (data.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
    },
  },
})
