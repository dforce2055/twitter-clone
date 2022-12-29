import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';
import { useNuxtApp } from '#app';

export const useVueRecaptcha = async () => {
  const { vueApp } = useNuxtApp();
  const config = useRuntimeConfig()
  const { recaptchaSiteKey } = config.public
  
  vueApp.use(VueReCaptcha, {
    siteKey: recaptchaSiteKey,
    loaderOptions: {
      autoHideBadge: false,
    },
  });
  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
  await recaptchaLoaded()
  return await executeRecaptcha('login')
};