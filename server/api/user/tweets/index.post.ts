// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import formidable from 'formidable'
import { NewTweet, Tweet, CloudinaryImage } from '../../../../types'
import { tweetTransformer } from '../../../transformers'
import { createTweet } from '../../../db/tweets'
import { createMediaFile } from '../../../db/mediaFile'
import { uploadToCloudinary } from '../../../../utils/cloudinary';

export default defineEventHandler(async (event) => {

  // handle context auth
  const { user } = await event.context.auth
  
  const form = formidable({})
  const response = await new Promise((resolve, reject) => {
    form.parse(event?.node?.req, (err, fields, files) => {
      if (err) {
        reject(err)
        return
      }
      resolve({ fields, files })
    })
  })

  const { fields, files } = response

  const tweetData: NewTweet = {
    text: fields.text,
    authorId: user.id,
  }

  const replyTo = fields.replyTo

  if (replyTo && replyTo !== 'null' && replyTo !== 'undefined')
    tweetData.replyToId = replyTo

  const tweet: Tweet = await createTweet(tweetData)
  
  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key]
    const imageUploaded = await uploadToCloudinary(file.filepath) as CloudinaryImage
    
    return createMediaFile({
      url: imageUploaded?.secure_url,
      providerPublicId: imageUploaded.public_id,
      userId: user.id,
      tweetId: tweet.id,
    })
  })

  await Promise.all(filePromises)

  return {
    statusCode: 200,
    statusMessage: `The tweet was created`,
    tweet: tweetTransformer(tweet),
  }
})
