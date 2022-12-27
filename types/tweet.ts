export interface Tweet {
  id: string
  text: string
  createdAt: Date
  updatedAt: Date
  authorId: string
  // retweet
  replyTo?: string
  replyToId?: string
  // replayTo Tweet? @relation("replies", fields: [replayToId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  // replies Tweet[] @relation("replies")

  // mediafiles
  mediaFiles?: string
}
export interface NewTweet {
  text: string
  authorId: string
  // retweet
  replyTo?: string
  replyToId?: string
  // replayTo Tweet? @relation("replies", fields: [replayToId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  // replies Tweet[] @relation("replies")

  // mediafiles
  mediaFiles?: string
}