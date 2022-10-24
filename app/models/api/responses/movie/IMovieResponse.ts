import { IMovieDetails } from 'models/movie/IMovieDetails'
import { IMovieCredits } from 'models/movie/credits/IMovieCredits'
import { TMovieReviews } from 'models/movie/TMovieReviews'
import { TMovieCollections } from 'models/movie/TMovieCollections'

export interface IMovieResponse extends IMovieDetails {
  keywords: { keywords: string[] }
  credits: IMovieCredits
  reviews: TMovieReviews
  lists: TMovieCollections
}
