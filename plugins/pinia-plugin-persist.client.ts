// plugins/pinia-plugin-persist.client.ts
// https://seb-l.github.io/pinia-plugin-persist/#vue3

import { Context } from '@nuxt/types'
import piniaPersist from 'pinia-plugin-persist'
import { defineNuxtPlugin, useCookie } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia?.use(piniaPersist)
});
