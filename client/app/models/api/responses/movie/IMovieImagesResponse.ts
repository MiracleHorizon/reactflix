import { IImage } from 'models/api/IImage'

export interface IMovieImagesResponse {
  backdrops: IImage[]
  logos: IImage[]
  posters: IImage[]
  id?: number
}
