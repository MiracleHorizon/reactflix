export class MovieRequestError extends Error {
  constructor(public message: string) {
    super(message)
    this.name = 'MovieRequestError'
  }
}
