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

export const detectBrowser = (headers: IncomingHttpHeaders): boolean => {
  try {
    const userAgent = headers['user-agent'] || ''
    const browser = userAgent?.includes('Mozilla')
      || userAgent?.includes('Chrome')
      || userAgent?.includes('Safari')
    
    return browser
  } catch (e) {
    return false
  }
}