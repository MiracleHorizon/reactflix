import { IMovieDetails } from 'models/movie/IMovieDetails'
import { IMovieCredits } from 'models/movie/credits/IMovieCredits'
import { TMovieReviews } from 'models/movie/TMovieReviews'
import { TMovieCollections } from 'models/movie/TMovieCollections'
import { IDefaultApiEntity } from 'models/api/IDefaultApiEntity'

export interface IMovieResponse extends IMovieDetails {
  keywords: { keywords: IDefaultApiEntity[] }
  credits: IMovieCredits
  reviews: TMovieReviews
  lists: TMovieCollections
}
