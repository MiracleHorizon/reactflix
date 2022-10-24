import axios from 'axios'

import { MovieEndpointsHandler } from 'modules/api/MovieEndpointsHandler'
import { RequestErrorsHandler } from 'utils/RequestErrorsHandler'
import { MovieRequestError } from 'entities/errors/MovieRequestError'
import { IMovieDetails } from 'models/movie/IMovieDetails'
import { IMovieResponse } from 'models/api/responses/movie/IMovieResponse'
import { MovieApiEndpoints } from 'models/endpoints/MovieApiEndpoints'
import { IMovieImagesResponse } from 'models/api/responses/movie/IMovieImagesResponse'

const api = axios.create({
  baseURL: process.env.TMDB_API_URL + '/movie',
})

export class MovieService extends MovieEndpointsHandler {
  private static requestErrorHandler = RequestErrorsHandler.handleMovieRequestError

  public static async fetchMovie(movieId: string): Promise<IMovieResponse> {
    try {
      const url = this.getMovieEndpoint(movieId)
      const { data } = await api.get<IMovieResponse>(url)

      return data
    } catch {
      const message = this.requestErrorHandler('data')

      throw new MovieRequestError(message)
    }
  }

  public static async fetchDetails(movieId: string): Promise<IMovieDetails> {
    try {
      const url = this.getDetailsEndpoint(movieId)
      const { data } = await api.get<IMovieDetails>(url)

      return data
    } catch {
      const message = this.requestErrorHandler('details')

      throw new MovieRequestError(message)
    }
  }

  public static async fetchImages(movieId: string): Promise<IMovieImagesResponse> {
    try {
      const url = this.getImagesEndpoint(movieId)
      const { data } = await api.get<IMovieImagesResponse>(url)

      return data
    } catch {
      const message = this.requestErrorHandler(MovieApiEndpoints.IMAGES)

      throw new MovieRequestError(message)
    }
  }

  // public static async fetchVideos(movieId: string): Promise<IMovieVideosResponse> {
  //   try {
  //     const url = this.getVideosEndpoint(movieId)
  //     const { data } = await api.get<IMovieVideosResponse>(url)
  //
  //     return data
  //   } catch {
  //     const message = this.requestErrorHandler(TMDbMovieApiEndpoints.VIDEOS)
  //
  //     throw new MovieRequestError(message)
  //   }
  // }
  //
  // public static async fetchCredits(movieId: string): Promise<IMovieCreditsResponse> {
  //   try {
  //     const url = this.getCreditsEndpoint(movieId)
  //     const { data } = await api.get<IMovieCreditsResponse>(url)
  //
  //     return data
  //   } catch {
  //     const message = this.requestErrorHandler(TMDbMovieApiEndpoints.CREDITS)
  //
  //     throw new MovieRequestError(message)
  //   }
  // }
  //
  // public static async fetchCollections(movieId: string): Promise<TMovieCollectionsResponse> {
  //   try {
  //     const url = this.getCollectionsEndpoint(movieId)
  //     const { data } = await api.get<TMovieCollectionsResponse>(url)
  //
  //     return data
  //   } catch {
  //     const message = this.requestErrorHandler(TMDbMovieApiEndpoints.LISTS)
  //
  //     throw new MovieRequestError(message)
  //   }
  // }
  //
  // public static async fetchReviews(movieId: string): Promise<TMovieReviewsResponse> {
  //   try {
  //     const url = this.getReviewsEndpoint(movieId)
  //     const { data } = await api.get<TMovieReviewsResponse>(url)
  //
  //     return data
  //   } catch {
  //     const message = this.requestErrorHandler(TMDbMovieApiEndpoints.REVIEWS)
  //
  //     throw new MovieRequestError(message)
  //   }
  // }
}
