import { ApiEndpointsHandler } from './ApiEndpointsHandler'
import { MovieApiEndpoints } from 'models/endpoints/MovieApiEndpoints'

export class MovieEndpointsHandler extends ApiEndpointsHandler {
  protected static getMovieEndpoint(movieId: string): string {
    const appendedRequests = `append_to_response=${Object.values(MovieApiEndpoints).join(',')}`

    return this.setEndpoint(movieId, appendedRequests)
  }

  protected static getDetailsEndpoint(movieId: string): string {
    return this.setEndpoint(movieId)
  }

  protected static getCreditsEndpoint(movieId: string): string {
    return this.setEndpoint(`${movieId}/${MovieApiEndpoints.CREDITS}`)
  }

  protected static getVideosEndpoint(movieId: string): string {
    return this.setEndpoint(`${movieId}/${MovieApiEndpoints.VIDEOS}`)
  }

  protected static getImagesEndpoint(movieId: string): string {
    return `/${movieId}/${MovieApiEndpoints.IMAGES}?${this.apiKey}`
  }

  protected static getCollectionsEndpoint(movieId: string): string {
    return this.setEndpoint(`${movieId}/${MovieApiEndpoints.LISTS}`)
  }

  protected static getReviewsEndpoint(movieId: string): string {
    return this.setEndpoint(`${movieId}/${MovieApiEndpoints.REVIEWS}`)
  }
}
