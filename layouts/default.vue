<template>
  <section id="layout" :class="{ 'dark': appStore.$state.darkMode  }">
    <div class="bg-white dark:bg-gray-800">
      <main class="container mx-auto lg:px-4 content-center min-h-screen">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="md:block col-span-2 xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft 
                :user="user"
                @on-logout="showNotificationLogout=true"
                @on-tweet="showTweetModal=true"
                @on-reply-tweet="showTweetModal=true"
              />
            </div>
          </div>

          <!-- Main Content -->
          <div class="col-span-10 xs-col-span-1 xl:col-span-6 min-h-screen">
            <slot
              @on-reply-tweet="showTweetModal=true"
            />
          </div>

          <!-- Right sidebar -->
          <div class="col-span-12 xs-col-span-12 xl:col-span-4">
            <SidebarRight />
          </div>
        </div>
        
      </main>
    </div>
    <UIModal
      :is-open="showNotificationLogout"
      @close="showNotificationLogout=false"
    >
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon 
            class="h-6 w-6 text-red-600" 
            aria-hidden="true" 
          />
        </div>
        <div class="mt-3 mb-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Logout</DialogTitle>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Are you sure you want to logout your account?</p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button 
          type="button" 
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" 
          @click="onLogout"
        >
          Logout
        </button>
        <button 
          type="button" 
          class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-dim-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
          @click="showNotificationLogout = false" 
          ref="cancelButtonRef"
        >
          Cancel
        </button>
      </div>
    </UIModal>
    <UIModal 
      :is-open="showTweetModal"
      @on-close="onCloseTweetModal"
    >
      <h1>{{ replyTweet ? 'Reply' : 'Tweet something!' }}</h1>
      <TweetForm
        :user="user"
        :reply-to="replyTweet"
        :show-reply="showReplyTweetModal"
        @on-success="onSuccessTweet"
        />
    </UIModal>
  </section>
</template>
<script setup lang="ts">
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import {  DialogTitle } from '@headlessui/vue'
import { useUser } from "~/stores/user"
import { useApp } from "~/stores/app"
import { User, Tweet } from '../types'
const userStore = useUser()
const appStore = useApp()

const replyTweet = computed(() => {
  return appStore.getReplyTweet
})

watch(replyTweet, (val) => {
  if (val) {
    showTweetModal.value = true
    showReplyTweetModal.value = true
  } else
    onCloseTweetModal()
})

let user = userStore.$state.user as User | undefined
let showNotificationLogout = ref(false)
let showTweetModal = ref(false)
let showReplyTweetModal = ref(false)

const router = useRouter()

onBeforeMount(() =>  {
  const layout = document.querySelector('#layout')
  if (appStore.$state.darkMode)
    layout?.classList.add('dark')
  else
    layout?.classList.remove('dark')
})

const onLogout = async () => {
  userStore.$reset()
  showNotificationLogout.value = false

  await useFetch('/api/auth/logout')
  user = undefined
  const path = useCustomLocaleRoute('/')
  router.push({
    path,
    query: { user: 'null'}
  })
}
const onCloseTweetModal = async () => {
  showTweetModal.value = false
  showReplyTweetModal.value = false
  appStore.setReplyTweet(null)
}
const onSuccessTweet = async (tweet: Tweet) => {
  onCloseTweetModal()
  const path = useCustomLocaleRoute(`/status/`)
  navigateTo(`${path}/${tweet.id}`)
}

</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})

</script>
