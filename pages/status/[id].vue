<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title> {{ tweet?.author.username }}'s Tweet</Title>
      </Head>
      <TweetDetails 
        v-if="tweet"
        :user="user" 
        :tweet="tweet"
      />
    </MainSection>
  </div>
</template>
<script lang="ts" setup>
import { useUser } from "~/stores/user"
import { User, TweetTransformated } from "../../types"
const userStore = useUser()
let user = userStore.$state.user as User | undefined

const loading = ref(false)
const tweet = ref(undefined as TweetTransformated | undefined)
const { getTweetById } = useTweets()

watch(
  () => useRoute().fullPath,
  () => getTweet()
)

function getTweetIdFromRoute() {
  return useRoute().params.id as string
}

const getTweet = async () => {
  loading.value = true
  try {
    const response = await getTweetById(getTweetIdFromRoute())
    const tweetResponse = await response?.data?.value.tweet
    tweet.value = { ...tweetResponse }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {
  setTimeout(async () => {
    await getTweet()
  }, 100)
})
</script>
