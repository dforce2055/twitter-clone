// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { getUserById } from '../../db/users'
import { getRefreshTokenByToken, createRefreshToken } from '../../db/refreshTokens'
import { TokenDecoded, User, UserAndPassword, NewUser } from '../../../types'
import { decodeRefreshToken, generateTokens, sendRefreshTokenCookie } from '../../../utils'

export default defineEventHandler(async (event) => {
  // obtain the cookies previously set
  const refreshTokenCookie = getCookie(event, 'refresh_token')

  if (!refreshTokenCookie)
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Invalid refresh token'
    }))

  const refreshTokenDB = await getRefreshTokenByToken(refreshTokenCookie)

  if (!refreshTokenDB)
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Invalid refresh token'
    }))

  const tokenDecoded = decodeRefreshToken(refreshTokenDB.token) as TokenDecoded

  if (!tokenDecoded)
  return sendError(event, createError({
    statusCode: 401,
    statusMessage: 'Invalid refresh token'
  }))


  try {
    const user = await getUserById(tokenDecoded?.userId) as User
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
      refresh_token: refreshToken,
      access_token: accessToken
    }
  } catch (error: any) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Somethin went wrong',
    }))
  }
})
