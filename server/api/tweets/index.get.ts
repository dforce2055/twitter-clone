// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { Tweet } from '~~/types'
import { getTweets } from '../../db/tweets'
import { tweetTransformer } from '~~/server/transformers'

export default defineEventHandler(async (event) => {

  // handle context auth
  // const { user } = await event?.context?.auth
  let prismaQuery = {
    skip: 0,
    take: 10,
    include: {
      author: true,
      mediaFiles: true,
      replies: {
          include: {
              author: true
          }
      },
      replyTo: {
          include: {
              author: true
          }
      }
    },
    orderBy: [
      {
          createdAt: 'desc'
      }
    ],
  }
  const tweets = await getTweets(prismaQuery)
  return {
    statusCode: 200,
    statusMessage: `Some tweets`,
    tweets: tweets.map(tweet => tweetTransformer(tweet as Tweet))
  }
})
