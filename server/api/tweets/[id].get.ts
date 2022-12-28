// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { Tweet } from "~~/types";
import { getTweets, getTweetById } from "../../db/tweets";
import { tweetTransformer } from "~~/server/transformers";

export default defineEventHandler(async (event) => {
  // const query = getQuery(event)
  // const { id } = query as { id: string }

  const { id } = event?.context?.params as { id: string };

  if (!id)
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: `Invalid id, please provide a valid id`,
      })
    );

  let prismaQuery = {
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
          replyTo: {
            include: {
              author: true,
            },
          },
        },
      },
    },
  };
  const tweet = await getTweetById(id, prismaQuery);

  if (!tweet)
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: `Tweet not found`,
      })
    );

  return {
    statusCode: 200,
    statusMessage: `Here is your tweet`,
    tweet: tweetTransformer(tweet as Tweet),
  };
});
