import { defineStore } from 'pinia'
import { useToastStore } from '~/stores/toast'
import type { LoginUserPayloadInterface, SignUpUserPayloadInterface, User } from '~/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null as User | null,
  }),
  actions: {
    async getUser(id: number) {
      // const { alert } = useToastStore()

      const { data, pending }: any = await useBaseFetch(
        '/auth/login'
      )
      if (data.value && data?.value?.token) {
        this.currentUser = data?.value?.data
      }
    },

  },
})
