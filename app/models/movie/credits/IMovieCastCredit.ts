import { IMovieCredit } from './IMovieCredit'

export interface IMovieCastCredit extends IMovieCredit {
  cast_id: number
  order: number
  character: string
}
