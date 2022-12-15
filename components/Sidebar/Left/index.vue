<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <section v-if="user">
      <div class="mt-2 space-y-3">
  
        <SidebarLeftTab active to="/">
          <template v-slot:icon>
            <HomeIcon />
          </template>
          <template v-slot:name>
            Home
          </template>
        </SidebarLeftTab>
  
        <SidebarLeftTab to="/explore">
          <template v-slot:icon>
            <HashtagIcon />
          </template>
          <template v-slot:name>
            Explore
          </template>
        </SidebarLeftTab>
  
  
        <SidebarLeftTab to="/notifications">
          <template v-slot:icon>
            <BellIcon />
          </template>
          <template v-slot:name>
            Notifications
          </template>
        </SidebarLeftTab>
  
  
        <SidebarLeftTab to="/messages">
          <template v-slot:icon>
            <InboxIcon />
          </template>
          <template v-slot:name>
            Messages
          </template>
        </SidebarLeftTab>
  
        <SidebarLeftTab to="/bookmarks">
          <template v-slot:icon>
            <BookmarkIcon />
          </template>
          <template v-slot:name>
            Bookmarks
          </template>
        </SidebarLeftTab>
  
  
        <SidebarLeftTab to="/lists">
          <template v-slot:icon>
            <DocumentTextIcon />
          </template>
          <template v-slot:name>
            Lists
          </template>
        </SidebarLeftTab>
  
  
        <SidebarLeftTab to="/profile">
          <template v-slot:icon>
            <UserIcon />
          </template>
          <template v-slot:name>
            Profile
          </template>
        </SidebarLeftTab>
  
        <SidebarLeftTab>
          <template v-slot:icon>
            <EllipsisHorizontalCircleIcon />
          </template>
          <template v-slot:name>
            More
          </template>
        </SidebarLeftTab>
  
        <div class="hidden xl:block">
          <UIButton
            text="Tweet"
            liquid 
            size="block"
            @click="emits('on-tweet')"
          />
        </div>
  
        <div class="block xl:hidden">
          <UIButton
            @click="emits('on-tweet')"
            >
            <div class="w-6 h-6 font-bold">
              <PencilIcon />
            </div>
          </UIButton>
        </div>
  
      </div>
  
      
      <div
        class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
        :class="defaultTransition" 
        @click="emits('on-logout')"
      >
      
        <UITooltip 
          text="Logout (?)"
        >
          <div class="flex flex-row">
            <img 
              :src="props.user?.profileImage || 'https://img2.freepng.es/20181126/hhu/kisspng-nasa-insignia-logo-image-outer-space-download-nasa-vector-logo-eps-ai-free-seek-5bfcc9e1beb8a8.8315770215432934097812.jpg' " 
              class="w-10 h-10 rounded-full"
            >
            <div class="flex-col hidden ml-2 xl:block">
              <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                {{ user.name }}
              </h1>
            
              <p class="text-sm text-gray-400">
                {{ user?.handle ?? 'https://github.com/dforce2055' }}
              </p>
            </div>
  
          </div>
      </UITooltip>
  
        <!-- ICON -->
        <div class="hidden ml-auto xl:block">
          <div class="w-4 h-4">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <div class="mt-2 space-y-3 mb-3">
        <SidebarLeftTab active to="/explorer">
          <template v-slot:icon>
            <HashtagIcon />
          </template>
          <template v-slot:name>
            Explorer
          </template>
        </SidebarLeftTab>
        <SidebarLeftTab active to="/settings">
          <template v-slot:icon>
            <Cog8ToothIcon />
          </template>
          <template v-slot:name>
            Settings
          </template>
        </SidebarLeftTab>
      </div>
      <div>
        <NuxtLink to="/login">
          <UIButton
            text="Login"
            liquid 
            size="block"
          />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/solid"
import {
  Cog8ToothIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  ChevronDownIcon
} from "@heroicons/vue/24/outline"
import { User } from '../../../types'
import { PropType } from 'vue'

const { defaultTransition } = useTailwindConfig()
const emits = defineEmits(['on-tweet', 'on-logout'])

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: false
  }
})

</script>