import { makeAutoObservable } from 'mobx'

import { IImage } from 'models/api/IImage'
import { IMovieDetails } from 'models/movie/IMovieDetails'
import { IMovieResponse } from 'models/api/responses/movie/IMovieResponse'
import { IMovieCredits } from 'models/movie/credits/IMovieCredits'
import { IMovieReview } from 'models/movie/IMovieReview'
import { IMovieCollection } from 'models/movie/IMovieCollection'

class MovieStore {
  private _keywords: string[] = []
  private _details: IMovieDetails | null = null
  private _images: IImage[] = []
  private _credits: IMovieCredits | null = null
  private _collections: IMovieCollection[] = []
  private _reviews: IMovieReview[] = []

  // videos = []
  // recommendations = []

  constructor() {
    makeAutoObservable(this)
  }

  public get keywords() {
    return this._keywords
  }

  public get details() {
    if (this._details) return this._details

    throw new Error('') // TODO Сделать необходимый exception. Добавить ErrorBoundary в компонент.
  }

  public get credits() {
    if (this._credits) return this._credits

    throw new Error('') // TODO Сделать необходимый exception. Добавить ErrorBoundary в компонент.
  }

  public get images() {
    return this._images
  }

  public get totalReviews() {
    return this._reviews.length
  }

  public get totalCollections() {
    return this._collections.length
  }

  public set images(images: IImage[]) {
    this._images = images
  }

  public initializeData({ keywords, credits, reviews, lists, ...details }: IMovieResponse) {
    this._keywords = keywords.keywords.map(keyword => keyword.name)
    this._details = details
    this._credits = credits
    this._reviews = reviews.results
    this._collections = lists.results
  }
}

export default new MovieStore()
