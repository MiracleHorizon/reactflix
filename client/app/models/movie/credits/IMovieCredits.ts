import { IMovieCastCredit } from './IMovieCastCredit'
import { IMovieCredit } from './IMovieCredit'

export interface IMovieCredits {
  cast: IMovieCastCredit[]
  crew: IMovieCredit[]
}

//Todo Проверить поля в IMovieCredit и концепцию наследования от него IMovieCastCredit
