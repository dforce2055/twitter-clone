// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
export default defineEventHandler(async (event) => {

  // handle context auth
  const { user } = await event?.context?.auth
  
  return {
    statusCode: 200,
    statusMessage: `User ${user.username} found`,
    user
  }
})
