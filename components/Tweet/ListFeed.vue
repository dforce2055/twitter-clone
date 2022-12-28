<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No tweets 😢</p>
    </div>
    <div
      v-else
      class="
        bg-white transition-all delay-75 pb-4 border-b cursor-pointer 
        hover:bg-gray-100 
        dark:bg-gray-800 dark:hover:bg-gray-600
        "
      :class="[twitterBorderColor, defaultTransition]"
      v-for="tweet in props.tweets"
      :key="tweet.id"
      @click.native="redirect(tweet)"
    >
      <TweetItem 
        :tweet="tweet"
        @on-comment-click="onCommentClick"
        @reply-tweet="onReplyClick"
        compact 
      />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["on-comment-click"])
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.tweets.length === 0);

function redirect(tweet) {
  navigateTo(`/status/${tweet.id}`);
}

const onCommentClick = (tweet) => {
  emits("on-comment-click", tweet)
}

</script>
