import { prisma } from '.'
import { NewTweet, Tweet } from '../../types'

export const createTweet = async (TweetData: NewTweet) => {
  const tweet = await prisma.tweet.create({
    data: TweetData,
  })
  return tweet as Tweet
}
export const getTweets = (params?: {}) => {
  return prisma.tweet.findMany({
      ...params
  })
}

export const getTweetById = (tweetId: string, params: object = {}) => {
  const tweet = prisma.tweet.findUnique({
      ...params,
      where: {
          ...params?.where,
          id: tweetId
      },
  })
  return tweet
}