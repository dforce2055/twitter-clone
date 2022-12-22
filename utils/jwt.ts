import jwt from 'jsonwebtoken'

export const generateAccessToken = (userId: string) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId }, config.jwtAccessTokenSecret, {
    expiresIn: '60m'
  })
}
export const decodeAccessToken = (token: string) => {
  const config = useRuntimeConfig()
  try { 
    return jwt.verify(token, config.jwtAccessTokenSecret)
  }
  catch (error: any) {
    if (error.name === 'TokenExpiredError') 
      return { error }
    else
      return null
  }
}
export const generateRefreshToken = (userId: string) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId }, config.jwtRefreshTokenSecret, {
    expiresIn: '24h'
  })
}
export const decodeRefreshToken = (token: string) => {
  const config = useRuntimeConfig()
  try { 
    return jwt.verify(token, config.jwtRefreshTokenSecret)
  }
  catch (error: any) {
    if (error.name === 'TokenExpiredError') 
      return { error }
    else
      return null
  }
}
export const generateTokens = (userId: string) => {
  const accessToken = generateAccessToken(userId)
  const refreshToken = generateRefreshToken(userId)

  return {
    accessToken,
    refreshToken
  }
}
export const sendRefreshTokenCookie = (event: any, token: string) => {
  // https://nuxt.com/docs/api/composables/use-cookie#handling-cookies-in-api-routes
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true
  })
}
export const removeRefreshToken = (event: any) => {
  // https://nuxt.com/docs/api/composables/use-cookie#handling-cookies-in-api-routes
  setCookie(event, "refresh_token", '', {
    path: '/',
    maxAge: -1
  })
}
