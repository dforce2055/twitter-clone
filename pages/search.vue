<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <Head>
        <Title>Searching by {{ searchQuery }} </Title>
      </Head>

      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>
<script setup>
const { getTweetsComposable } = useTweets()

const loading = ref(false)
const searchTweets = ref([])
const searchQuery = computed(() => {
  return useRoute().query.q
})

watch(searchQuery, (val) => {
  getTweets()
})

onBeforeMount(async () => {
  setTimeout(() => {
    getTweets()
  }, 100)
})

async function getTweets() {
  loading.value = true
  try {
    const { tweets } = await getTweetsComposable({
      query: searchQuery.value,
    })

    searchTweets.value = tweets
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
