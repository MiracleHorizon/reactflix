import { IMovie } from './IMovie'
import { IMovieProdCompany } from './IMovieProdCompany'
import { IDefaultApiEntity } from 'models/api/IDefaultApiEntity'

export interface IMovieDetails extends IMovie {
  budget: number
  revenue: number
  runtime: number
  tagline: string | null
  genres: IDefaultApiEntity[]
  production_companies: IMovieProdCompany[]
}
