<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <Head>
          <Title>Home / Twitter</Title>
      </Head>

      <!-- <div class="border-b" :class="twitterBorderColor">
          <TweetForm :user="user" @on-success="handleFormSuccess" />
      </div>

      <TweetListFeed :tweets="homeTweets" /> -->

    </MainSection>
  </div>
</template>
<script setup lang="ts">
const loading = ref(true)
const loadingUserSesion = ref(true)

// definePageMeta({
//   middleware: ['auth']
// })


// const { data } = await useFetch('/api/users?name=bigote', {
//   method: 'post',
//   body: {
//     age: 36
//   }
// })
const { data } = await useFetch('/api/auth/user')
console.log('user', data.value)
loading.value = false
// const { data } = await useFetch('/api/auth/refresh')
// console.log('refresh_toke', data.value?.refresh_token)


const { twitterBorderColor } = useTailwindConfig()
// const { getTweets } = useTweets()

// const loading = ref(false)
// const homeTweets = ref([])
// const { useAuthUser } = useAuth()

// const user = useAuthUser()

// onBeforeMount(async () => {
//     loading.value = true
//     try {
//         const { tweets } = await getTweets()

//         homeTweets.value = tweets
//     } catch (error) {
//         console.log(error)
//     } finally {
//         loading.value = false
//     }
// })

// function handleFormSuccess(tweet) {
//     navigateTo({
//         path: `/status/${tweet.id}`
//     })
// }

setTimeout(() => { loadingUserSesion.value = false }, 1500)

</script>