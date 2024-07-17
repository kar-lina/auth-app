import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies
  const { alert } = useToastStore();

  if (from.name && from.name !== "index" && from?.name !== "sign-up" && to?.name === "login") {
    alert("До скорой встречи!", "info");
    // useNuxtApp().$toast.info("До скорой встречи!");
  }
  if (to?.name === "index" || to?.name === "sign-up") {
    return;
  }

  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === "login") {
    // console.log('here', token.value, to?.name)
    return navigateTo("/profile");
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== "login") {
    abortNavigation();
    useClearStore();
    return navigateTo("/login");
  }
});
