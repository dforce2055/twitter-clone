import UrlPattern from 'url-pattern'
import {
  getCookieRefreshToken,
  decodeAccessToken,
} from '../../utils'
import { getUserById } from '../db/users'
import { TokenDecoded } from '../../types'

export default defineEventHandler(async (event) => {
  const endpoints = [
    // '/es/api/users',
    // '/es/api/users?name=bigote',
    '/about'
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
  const token = getCookieRefreshToken(cookie)
  if(!token)
    return
  
  const decodedToken = decodeAccessToken(token) as TokenDecoded
  
  // if (!token || !decodedToken)
  //   sendError(event, createError({
  //     statusCode: 401,
  //     statusMessage: 'Unauthorized'
  //     }))

  
  // const user = getUserById(decodedToken.userId) || ''
  
  // // if jwt is old, get new one
  // const { data } = await useFetch('/api/auth/refresh')
  // const access_token = data.value?.access_token
  // const refresh_token = data.value?.refresh_token
  // console.log('refresh_token', refresh_token)
  

  // event.context.auth = {
  //   user: '',
  //   access_token: '',
  //   refresh_token: ''
  // }

  // if (event.node.req.url?.includes('login'))
  //   event.node.res.writeHead(301, { Location: '/' })
})