import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
export const useAuth = () => {
  const router = useRouter()
  const { logUserOut, authenticateUser, signUpUser, getAuth } = useAuthStore()
  const { authenticated, currentUser } = storeToRefs(useAuthStore())
  const token = useCookie('token')
  if(token.value) authenticated.value = true
  watch(authenticated, ()=> {
    if(!authenticated.value) router.push('/login')
  })

  if (!currentUser.value) getAuth()

  return {
    logUserOut,
    authenticateUser,
    signUpUser,
    authenticated,
    token,
    currentUser,
  }
}
