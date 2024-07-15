
export const useLogout = () => {
 const router = useRouter()
 router.push('login')
 useClearStore()
}