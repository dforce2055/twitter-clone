export default () => {
  const postTweet = (formData: any) => {
    try {
      const form = new FormData()
      form.append('text', formData.text)
      
      formData.mediaFiles.forEach((mediaFile: string | Blob, index: string) => {
        form.append('media_file_' + index, mediaFile)
      })
      
      return useFetch('/api/user/tweets', {
        method: 'POST',
        body: form,
      })
    } catch (e) {
      return '/'
    }
  }

  return {
    postTweet
  }
}