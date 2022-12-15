export const getCookieRefreshToken = (cookie: string) => {
  try {
    return cookie?.
      split(';')?.
      find(item => item?.includes('refresh_token'))?.
      split('=')[1]
  } catch (error) {
    return null
  }
}