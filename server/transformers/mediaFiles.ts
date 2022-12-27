import { MediaFile } from "@prisma/client"

export const mediaFileTransformer = (mediFile: MediaFile) => {
  return {
      id: mediFile.id,
      url: mediFile.url
  }
}