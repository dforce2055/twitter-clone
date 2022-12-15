import { removeRefreshToken } from '../../../utils'
import { deleteRefreshToken } from '../../db/refreshTokens'

export default defineEventHandler(async (event) => {
  // remove cookie
  removeRefreshToken(event)
  
  // obtain the cookies previously set
  const refreshTokenCookie = getCookie(event, 'refresh_token')

  // delete from ddbb
  if (refreshTokenCookie)
    deleteRefreshToken({ token: refreshTokenCookie })
  return {
    status: true
  }
})
