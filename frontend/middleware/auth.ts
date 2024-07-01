export default defineNuxtRouteMiddleware((to, from) => {
  console.log('From auth middleware')
  const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive
  const token = useCookie('token') // get token from cookies

  if (token.value) {
    // check if value exists
    authenticated.value = true // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    return navigateTo('/profile')
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    abortNavigation()
    return navigateTo('/login')
  }
})
