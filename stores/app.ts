import { acceptHMRUpdate, defineStore } from 'pinia'
import { User, Tweet } from '../types'

export const useApp = defineStore('app', {
  state: () => ({
    darkMode: undefined as Boolean | undefined,
    replyTweet: undefined as Tweet | undefined,
  }),
  getters: {
    getDarkMode: (state) => state.darkMode,
    getReplyTweet: (state) => state.replyTweet,
  },
  actions: {
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
    setReplyTweet(tweet: Tweet | null) {
      this.replyTweet = tweet
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['darkMode']
      }
    ],
  }
})
