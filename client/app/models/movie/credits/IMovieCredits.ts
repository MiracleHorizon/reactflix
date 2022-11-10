import { IMovieCastCredit } from './IMovieCastCredit'
import { IMovieCredit } from './IMovieCredit'

export interface IMovieCredits {
  cast: IMovieCastCredit[]
  crew: IMovieCredit[]
}
