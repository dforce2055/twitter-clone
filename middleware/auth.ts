import { useUser } from "~/stores/user"
import { TOKEN_ERROR, TOKEN_SUCCESS } from "~/types"

export default defineNuxtRouteMiddleware(async(to, from) => {

  const userStore = useUser()
  const user = userStore.$state.user
  const accessToken = userStore.$state.accessToken
  const refreshToken = userStore.$state.refreshToken

  if (!user) {
    const path = useCustomLocaleRoute('/login')
    return navigateTo(path)
  }

  if (
    to.path.includes('login') &&
    user &&
    accessToken &&
    refreshToken
  ) {
    const path = useCustomLocaleRoute('/')
    return navigateTo(path)
  }
  
  try {
    // verify token
    const { data, error } = await useFetch('/api/auth/validate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        }
    })

    if (!error.value && data?.value?.statusMessage === TOKEN_SUCCESS.VALID)
      return true
    
    if (error?.value?.statusMessage === TOKEN_ERROR.EXPIRED) {
      // Go to refresh token
      const { data } = await useFetch('/api/auth/refresh')
      const access_token = data.value?.access_token
      const refresh_token = data.value?.refresh_token


      if (access_token && refresh_token) {
        userStore.setAccessToken(access_token)
        userStore.setRefreshToken(refresh_token)
      } else {
        // else go to login
        userStore.$reset()
        await useFetch('/api/auth/logout')
        const path = useCustomLocaleRoute('/login')
        return navigateTo(path)
      }
    }
  } catch (error) {
    return false
  }
})