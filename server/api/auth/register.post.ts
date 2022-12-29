// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { createUser } from '../../db/users'
import { User, UserWithRepeatPassword, NewUser } from '../../../types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password, repeatPassword, name, profileImage }: UserWithRepeatPassword = body

  if (!username || !email || !password || !repeatPassword || !name)
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid Params'
    }))

  if (password !== repeatPassword)
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "The password doesn't match"
    }))
  
  const userData: NewUser = {
    username,
    email,
    password,
    name,
    profileImage: profileImage ?? 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData)
  

  return {
    message: `Hi there`,
    user
  }
})
