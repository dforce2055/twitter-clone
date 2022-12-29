<template>
  <div
    class="flex items-center justify-around w-full"
  >

    <TweetItemActionsIcon
      color="blue"
      @on-click="onCommentClick(props.tweet)"
      :size="size"
      :class="`${!actionsActive ? 'cursor-not-allowed': ''}`"
    >
      <template v-slot:icon="{ classes }">
        <ChatBubbleOvalLeftIcon :class="classes" class="hover:text-sky-400 hover:font-bold"/>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon 
      color="green" 
      :size="size"
      :class="`${!actionsActive ? 'cursor-not-allowed': ''}`"
      >
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" class="hover:text-green-600 hover:font-bold"/>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon 
      color="red" 
      :size="size"
      :class="`${!actionsActive ? 'cursor-not-allowed': ''}`"
    >
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" class="hover:text-red-700 hover:font-bold"/>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon 
      color="blue" 
      :size="size"
      :class="`${!actionsActive ? 'cursor-not-allowed': ''}`"
    >
      <template v-slot:icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" class="hover:text-sky-500 hover:font-bold"/>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>
    <UINotificationError
      :message="loginMessage"
      :show="showLoginNotification"
      @close="showLoginNotification = false"
    />
  </div>
</template>
<script language="ts" setup>
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from "@heroicons/vue/24/outline"
import { useApp } from "~/stores/app"
import { useUser } from "~/stores/user"
const appStore = useApp()
const userStore = useUser()
const user = userStore.getUser

const loginMessage = ref("You must be logged in to perform this action")
const showLoginNotification = ref(false)

const actionsActive = computed(() => {
  if (!user)
    return false

  return true
})


const emits = defineEmits(["on-comment-click", "on-click"])

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const onCommentClick = (tweet) => {
  if (!actionsActive.value) {
    showLoginNotification.value = true
    return
  }

  emits("on-comment-click", tweet)
  appStore.setReplyTweet(tweet)
}
</script>
