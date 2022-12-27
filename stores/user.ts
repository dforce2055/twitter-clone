import { acceptHMRUpdate, defineStore } from 'pinia'
import { User } from '../types'

export const useUser = defineStore('user', {
  state: () => ({
    user: undefined as User | undefined,
    accessToken: undefined as String | undefined,
    refreshToken: undefined as String | undefined,
    darkMode: undefined as Boolean | undefined,
  }),
  getters: {
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getDarkMode: (state) => state.darkMode,
  },
  actions: {
    async setUser(user: User) {
      this.user = user
    },
    setAccessToken(jwt: string) {
      this.accessToken = jwt
    },
    setRefreshToken(jwt: string) {
      this.refreshToken = jwt
    },
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['accessToken', 'refreshToken', 'user', 'darkMode']
      }
    ],
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
// }