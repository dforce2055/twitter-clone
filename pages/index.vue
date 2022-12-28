<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <Head>
          <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
          <TweetForm
            v-if="user"
            :user="user"
            @on-success="handleFormSuccess"
          />
      </div>

      <TweetListFeed
        v-if="homeTweets"
        :tweets="homeTweets"
        @on-reply-tweet="onReplyTweet"
      />
      
    </MainSection>
  </div>
</template>
<script setup lang="ts">
import { useUser } from "~/stores/user"
import { User, Tweet } from '../types'

const userStore = useUser()
let user = userStore.$state.user as User | undefined
const loading = ref(true)
const loadingUserSesion = ref(true)
const homeTweets = ref([] as undefined | Tweet[])

// definePageMeta({
//   middleware: ['auth']
// })

const { twitterBorderColor } = useTailwindConfig()
// const { getTweets } = useTweets()
// const { useAuthUser } = useAuth()
// const user = useAuthUser()

onBeforeMount(async () => {
  setTimeout(async () => {
    loading.value = true
    try {
      const { data } = await useFetch('/api/tweets')
      homeTweets.value = data.value?.tweets
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
  }, 100)
})

const handleFormSuccess = (tweet: Tweet) => {
  const path = useCustomLocaleRoute(`/status/`)
  navigateTo(`${path}/${tweet.id}`)
}

setTimeout(() => {
  // loading.value = false
  loadingUserSesion.value = false
}, 1500)

const onReplyTweet = () => {
  console.log('onReplyTweet')
}

</script>