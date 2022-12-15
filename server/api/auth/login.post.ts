// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { getUserByUsername } from '../../db/users'
import { createRefreshToken } from '../../db/refreshTokens'
import { User, UserAndPassword, NewUser } from '../../../types'
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshTokenCookie } from '../../../utils'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, password}: UserAndPassword = body

  if (!username || !password)
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid Params'
    }))

  
  const user = await getUserByUsername(username)

  // get the user
  if (!user)
  return sendError(event, createError({
    statusCode: 400,
    statusMessage: 'User or password is invalid'
  }))

  // compare passwords
  const doesThePasswordMatch = await bcrypt.compare(password, user.password)

  if (!doesThePasswordMatch)
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'User or password is invalid'
    }))
    
  // generate jwt
  const { accessToken, refreshToken } = generateTokens(user.id)

  // save token in db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })
  
  // add http only cookie
  sendRefreshTokenCookie(event, refreshToken)

  delete user.password

  return {
    status: true,
    user: user,
    accessToken
  }
})
