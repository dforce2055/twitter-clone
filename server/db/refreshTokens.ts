import { prisma } from "./index"

export const createRefreshToken = async ({ token, userId }: { token: string, userId: string }) => {
  return prisma.refreshToken.create({
    data: { token, userId }
  })
}
export const getRefreshTokenByToken = async ( token: string) => {
  return prisma.refreshToken.findUnique({
    where: { token }
  })
}

export const deleteRefreshToken = async ({ token }: { token: string }) => {
  // TODO: revisar porque no encuentra y no borra
  const result = await prisma.refreshToken.delete({
    where: { token }
  })
  return result
}