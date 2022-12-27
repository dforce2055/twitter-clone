import { v2 as cloudinary } from 'cloudinary'


export const cloudinaryInstance = () => {
  const config = useRuntimeConfig()

  cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  })

  return cloudinary
}

export const uploadToCloudinary = (image: string) => {
  return new Promise((resolve, reject) => {
    cloudinaryInstance().uploader.upload(image, (error, data) => {
      if (error)
        reject(error)
      
      resolve(data)
    })
  })
}