import { getTweetById } from '../server/db/tweets'
import { Tweet, TweetTransformated } from '../types'

export default () => {
  const getTweets = async () => {
    try {
      const result = await useFetch('/api/tweets')
      const tweets = result.data.value?.tweets as TweetTransformated[]
      return { tweets }
    } catch (error) {
      return { tweets: [] }
    }
  }

  const postTweet = (formData: any) => {
    try {
      const form = new FormData()
      form.append('text', formData.text)
      form.append('replyTo', formData.replyTo)
      
      formData.mediaFiles.forEach((mediaFile: string | Blob, index: string) => {
        form.append('media_file_' + index, mediaFile)
      })
      
      return useFetch('/api/user/tweets', {
        method: 'POST',
        body: form,
      })
    } catch (error) {
      return '/'
    }
  }

  const getTweetById = async (tweetId: string) => {
    try {
      return useFetch('/api/tweets/' + tweetId)
    } catch (error) {
      return null
    }
  }
  const getTweetsComposable = async ({ query }: { query: string }) => {
    try {
      const result = await useFetch(`/api/tweets?q=${query}`)
      const tweets = result.data.value?.tweets as TweetTransformated[]
      return { tweets }
    } catch (error) {
      return { tweets: [] }
    }
  }

  return {
    getTweets,
    postTweet,
    getTweetById,
    getTweetsComposable
  }
}