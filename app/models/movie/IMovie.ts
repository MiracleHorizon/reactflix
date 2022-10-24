export interface IMovie {
  id: number
  adult: boolean
  title: string
  original_title: string
  original_language: string
  overview: string | null
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  popularity: number
  vote_average: number
  vote_count: number
}
