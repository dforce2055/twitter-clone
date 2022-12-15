import { useUser } from "~/stores/user"

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
  
  // if (
  //   user &&
  //   accessToken &&
  //   refreshToken
  // )
  //   return navigateTo(to.fullPath)
})