export class RequestErrorsHandler {
  public static handleMovieRequestError(requestName: string): string {
    return `An error occurred while getting movie ${requestName}.`
  }

  public static handleMoviesRequestError(requestName: string): string {
    return `An error occurred while getting ${requestName} movies.`
  }

  public static handleSearchRequestError(requestName: string): string {
    return `An error occurred while searching ${requestName}`
  }

  public static handleAuthRequestError(requestName: string): string {
    return `An error occurred while requesting authorization data (${requestName})`
  }

  public static handleWatchlistRequestError(requestName: string): string {
    return `An error occurred while requesting watchlist (${requestName})`
  }

  public static handlePersonRequestError(requestName: string): string {
    return `An error occurred while getting person ${requestName}`
  }
}
