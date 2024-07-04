import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
// import toast from 'vue3-toastify'
export const useAuth = () => {
  const router = useRouter()
  const { logUserOut , authenticateUser, signUpUser} = useAuthStore() // use authenticateUser action from  auth store
  const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs
  const token = useCookie('token')
  if(token.value) authenticated.value = true
  watch(authenticated, ()=> {
    if(!authenticated.value) router.push('/login')
  })

  return { logUserOut, authenticateUser, signUpUser, authenticated, token }
}
