// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { Tweet } from '~~/types'
import { getTweets } from '../../db/tweets'
import { tweetTransformer } from '~~/server/transformers'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { q: searchQuery } = query as { q: string }

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

  if (searchQuery) {
    prismaQuery = {
      ...prismaQuery,
      where: {
        text: {
          contains: searchQuery
        }
      }
    }
  }


  const tweets = await getTweets(prismaQuery)
  return {
    statusCode: 200,
    statusMessage: `Some tweets`,
    tweets: tweets.map(tweet => tweetTransformer(tweet as Tweet))
  }
})
