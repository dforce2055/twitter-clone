import { prisma } from './index'
import { User, NewUser } from '../../types'
import bcrypt from 'bcrypt'

export const createUser = async (userData: NewUser) => {
  const user = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }


  const newUser: User | any = await prisma.user.create({
    data: user
  })

  delete newUser.password
  return newUser
}

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email
    }
  })
}

export const getUserByUsername = async (username: string) => {
  return await prisma.user.findUnique({
    where: {
      username
    }
  })
}
export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id
    }
  })
}