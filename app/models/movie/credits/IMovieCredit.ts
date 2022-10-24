import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'

export interface IMovieCredit {
  id: number
  adult: boolean
  gender: number | null
  known_for_department: MovieCreditDepartment
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}
