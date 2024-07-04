import { defineStore } from 'pinia'
import { useToastStore } from '~/stores/toast'

interface LoginUserPayloadInterface {
  email: string
  password: string
}
interface SignUpUserPayloadInterface extends LoginUserPayloadInterface {
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
      const { alert } = useToastStore()

      const { data, pending }: any = await useBaseFetch(
        '/auth/login',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
          },
          onResponseError({ request, response, options }) {
            alert(response._data.message, 'error')
          },
        }
      )
      this.loading = pending
      if (data.value && data?.value?.token) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
       alert('С возвращением!')
      }
    },
    async signUpUser({ email, password, name }: SignUpUserPayloadInterface) {
      const { alert } = useToastStore()

      const { data, pending }: any = await useBaseFetch(
        'http://localhost:5050/auth/signup',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
            name,
          },
          onResponseError({ request, response, options }) {
            useNuxtApp().$toast.error(response._data.message)
          },
        }
      )
      this.loading = pending
      if (data.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
       alert(
         'Поздравляем! Регистрация прошла успешно. Введите данные для входа.'
       )
      }
    },
    logUserOut() {
      const { alert } = useToastStore()

      console.log('logUserOut')
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
      alert('До скорой встречи!', 'info')
    },
  },
})
