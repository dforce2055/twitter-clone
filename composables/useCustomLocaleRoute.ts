export const useCustomLocaleRoute = (to: string) => {
  try {
    const app = useNuxtApp()
    const config = useRuntimeConfig()

    const toFormated = to.split('/')[1] ||  to.split('/')[0]

    const defaultLocale = config.public.defaultLocale
    const locale = app.$i18n.locale.value as string
    const path = locale !== defaultLocale ?
      `/${locale}/${toFormated}` :
      `/${toFormated}`
    
    // return path.replace(/\/$/, "")
    return path
  } catch (e) {
    return '/'
  }
  
}