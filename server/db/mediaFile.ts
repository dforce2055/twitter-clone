import { prisma } from '.'
import { NewMediaFile } from '../../types'

export const createMediaFile = async (mediaFileData: NewMediaFile) => {
  const mediaFile = await prisma.mediaFile.create({
    data: mediaFileData,
  })
  return mediaFile
}