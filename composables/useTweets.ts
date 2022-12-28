import { getTweetById } from '../server/db/tweets'
import { Tweet } from '../types'

export default () => {
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

  return {
    postTweet,
    getTweetById
  }
}