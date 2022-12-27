export interface MediaFile {
  url: string
  providerPublicId: string
  userId?: string
  tweetId?: string
}
export interface NewMediaFile {
  url: string
  providerPublicId: string
  userId?: string
  tweetId?: string
}

export interface CloudinaryImage {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: RESOURCE_TYPE
  created_at: Date
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean,
  url: string
  secure_url: string
  folder: string
  original_filename: string
  api_key: string
}

export enum RESOURCE_TYPE {
  IMAGE = 'image',
  VIDEO = 'video',
}