<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetItem
        v-if="props.user && props.replyTo && props.showReply"
        hideActions
        :tweet="props.replyTo"
      />
      <TweetFormInput
        :placeholder="props.placeholder"
        :user="props.user"
        @onSubmit="handleFormSubmit"
      />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["on-success"])
const loading = ref(false);
const { postTweet } = useTweets();

const props = defineProps({
  user: {
    type: Object,
    required: false,
  },
  placeholder: {
    type: String,
    default: "What's happening ?",
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false,
  },
});

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    })
    const tweet = response?.data?.value?.tweet
    emits("on-success", tweet)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
