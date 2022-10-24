import { ITMDbUser } from 'models/ITMDbUser'

export interface IMovieReview {
  author: string
  author_details: ITMDbUser
  content: string
  id: string
  created_at: Date
  updated_at: Date
  url: string
}
