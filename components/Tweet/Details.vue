<template>
  <div>
    <TweetItem
      :tweet="props.tweet"
      @on-comment-click="onCommentClick"
    />

    <TweetForm
      placeholder="Tweet your reply"
      :reply-to="props.tweet"
      :user="props.user"
      @on-success="handleFormSuccess"
    />

    <TweetListFeed :tweets="replies" />
  </div>
</template>
<script setup>
const emits = defineEmits(["on-comment-click"])
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: false,
  },
});

const replies = computed(() => props.tweet?.replies || []);

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
const onCommentClick = (tweet) => {
  emits("on-comment-click", tweet)
}
</script>
