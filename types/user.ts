export interface User {
  id: string
  email: string
  name?: string 
  username: string
  password?: string
  profileImage?: string
  handle?: string
  createdAt: Date
  updatedAt: Date
}
export interface UserWithRepeatPassword extends User {
  repeatPassword: string
}
export interface NewUser {
  email: string
  name?: string
  username: string
  password: string
  profileImage?: string
}
export interface UserAndPassword {
  username: string
  password: string
}

export interface TokenDecoded {
  exp: number
  iat: number
  userId: string
  error: TokenError
}

export interface TokenError {
  expiredAt: Date
  message: string
  name: TOKEN_ERROR
}

export enum TOKEN_ERROR { 
  EXPIRED = 'TokenExpiredError',
}
export enum TOKEN_SUCCESS { 
  VALID = 'Access token valid',
}