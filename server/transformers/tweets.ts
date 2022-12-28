

import { mediaFileTransformer, userTransformer } from "./index"
import { Tweet, TweetTransformated } from '../../types'
import human from "human-time"

// TODO: add type Tweet
export const tweetTransformer = (tweet: any): TweetTransformated => {
  return {
    id: tweet.id,
    text: tweet.text,
    createdAt: tweet.createdAt,
    updatedAt: tweet.updatedAt,
    mediaFiles: !!tweet.mediaFiles ? tweet.mediaFiles.map(mediaFileTransformer) : [],
    author: !!tweet.author ? userTransformer(tweet.author) : null,
    replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
    replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
    repliesCount: !!tweet.replies ? tweet.replies.length : 0,
    postedAtHuman: human(tweet.createdAt),
    updatedAtHuman: human(tweet.updatedAt)
  }
}