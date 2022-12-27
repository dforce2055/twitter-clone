import UrlPattern from 'url-pattern'
import {
  getCookieRefreshToken,
  decodeAccessToken,
  decodeRefreshToken,
  detectBrowser
} from '../../utils'
import { getUserById } from '../db/users'
import { TokenDecoded } from '../../types'

export default defineEventHandler(async (event) => {
  // detect if the request comes from Browser or API call
  const browser = detectBrowser(event.node.req.headers)

  // protect auth server side
  const endpoints = [
    // '/es/api/users',
    // '/es/api/users?name=bigote',
    '/api/auth/user',
    '/api/auth/users',
    '/api/users',
    '/api/user/tweets',
    // '/api/tweets',
    '/about',
    '/bookmarks',
    '/explore',
    '/profile',
  ]

  const currenUrl = event.node.req.url || ''
  const handleByThisMiddleware = endpoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint)
    return pattern.match(currenUrl)
  })

  if (!handleByThisMiddleware)
    return

  try {
    // get refresh token from cookie
    const cookie = event.node.req.headers['cookie'] || ''
    const refreshToken = getCookieRefreshToken(cookie) || ''

    const decodedToken = decodeRefreshToken(refreshToken) as TokenDecoded
    if (!refreshToken || !decodedToken)
      throw new Error('Unauthorized Login first')

    // get refresh token from db and compare with the one in the cookie
    const user = await getUserById(decodedToken.userId) || ''
    delete user?.password

    event.context.auth = {
      user,
    }

  } catch (error: any) {
    if (browser)
      sendRedirect(event, '/')
    
    if (!browser)
      sendError(event, createError({
        statusCode: error.statusCode || 401,
        statusMessage: error.statusMessage || error.message || 'Unauthorized',
      }))
  }
})