import { u as useRouter, h as useAuthStore, s as storeToRefs, j as useCookie } from './server.mjs';
import { watch } from 'vue';

const useAuth = () => {
  const router = useRouter();
  const { logUserOut, authenticateUser, signUpUser, getAuth } = useAuthStore();
  const { authenticated, currentUser } = storeToRefs(useAuthStore());
  const token = useCookie("token");
  if (token.value)
    authenticated.value = true;
  watch(authenticated, () => {
    if (!authenticated.value)
      router.push("/login");
  });
  if (!currentUser.value)
    getAuth();
  return {
    logUserOut,
    authenticateUser,
    signUpUser,
    authenticated,
    token,
    currentUser,
    getAuth
  };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-BAyGP-af.mjs.map
