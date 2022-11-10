import { IDefaultApiEntity } from 'models/api/IDefaultApiEntity'

export interface IMovieCollection extends IDefaultApiEntity {
  description: string
  favorite_count: number
  item_count: number
  list_type: string
  poster_path: string | null
}
