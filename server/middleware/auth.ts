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
    '/api/users',
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

  if (!handleByThisMiddleware) {
    console.log('handleByThisMiddleware', handleByThisMiddleware)
    return
  }

  const cookie = event.node.req.headers['cookie'] || ''
  const refreshToken = getCookieRefreshToken(cookie) || ''

  const decodedToken = decodeRefreshToken(refreshToken) as TokenDecoded

  // if (decodedToken)
  //   return
  
  if (!refreshToken || !decodedToken) {
    if (browser)
      sendRedirect(event, '/')
    
    if (!browser)
      sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Unauthorized Login first',
      }))
  }

  try {
    // TODO: get refresh token from db and compare with the one in the cookie
    const user = await getUserById(decodedToken.userId) || ''
    
    // // if jwt is old, get new one
    const { access_token, refresh_token } = await $fetch('/api/auth/refresh', {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${refreshToken}`,
        // 'refresh_token': refreshToken,
        'cookie': `refresh_token=${refreshToken}`
      }
    })

    event.context.auth = {
      user,
      access_token,
      refresh_token
    }

    return true
    
  } catch (error: any) {
    if (browser)
      sendRedirect(event, '/')
    
    if (!browser)
      sendError(event, createError({
        statusCode: error.statusCode,
        statusMessage: error.statusMessage,
      }))
  }
  

  // if (event.node.req.url?.includes('login'))
  //   event.node.res.writeHead(301, { Location: '/' })
})