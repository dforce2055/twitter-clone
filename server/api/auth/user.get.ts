// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
export default defineEventHandler(async (event) => {

  // handle context auth
  const { auth } = await event.context
  const { user } = auth

  
  return {
    statusCode: 200,
    statusMessage: `User ${user.username} found`,
    user
  }
})
