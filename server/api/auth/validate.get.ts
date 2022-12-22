// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
import { getUserById } from '../../db/users'
import { getRefreshTokenByToken, createRefreshToken, deleteRefreshToken } from '../../db/refreshTokens'
import { TokenDecoded, User, UserAndPassword, NewUser, TOKEN_ERROR, TOKEN_SUCCESS } from '../../../types'
import { decodeAccessToken, decodeRefreshToken, generateTokens, sendRefreshTokenCookie,  } from '../../../utils'

export default defineEventHandler(async (event) => {

  // get access token from headers
  const headers = getHeaders(event)
  const { authorization } = headers
  const access_token = authorization?.split(' ')[1]
  


  if (!access_token)
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Invalid access token'
    }))
  
  const accessTokenDecoded = decodeAccessToken(access_token) as TokenDecoded

  if (!accessTokenDecoded)
  return sendError(event, createError({
    statusCode: 401,
    statusMessage: 'Invalid access token'
  }))
  
  if (accessTokenDecoded?.error?.name === TOKEN_ERROR.EXPIRED) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: accessTokenDecoded.error.name,
    }))
  } 
  
  return {
    statusCode: 200,
    statusMessage: TOKEN_SUCCESS.VALID
  }
})
