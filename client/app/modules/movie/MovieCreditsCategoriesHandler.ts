import { MovieCreditsHandler } from './MovieCreditsHandler'
import { IMovieCredit } from 'models/movie/credits/IMovieCredit'

export class MovieCreditsCategoriesHandler extends MovieCreditsHandler {
  constructor(_crew: IMovieCredit[]) {
    super(_crew)
  }

  public get starsCategory() {
    const stars = this.getCategoryCredits(this.actors)
    const title = this.getCategoryEndingByCreditsLength('Star', stars.length)

    return { title, content: stars }
  }

  public get directorsCategory() {
    const directors = this.getCategoryCredits(this.directors)
    const title = this.getCategoryEndingByCreditsLength('Director', directors.length)

    return { title, content: directors }
  }

  public get writersCategory() {
    const writers = this.getCategoryCredits(this.writers)
    const title = this.getCategoryEndingByCreditsLength('Writer', writers.length)

    return { title, content: writers }
  }

  public get topCredits() {
    const creditsCategories = [this.directorsCategory, this.writersCategory, this.starsCategory]

    return {
      credits: creditsCategories,
      contentLength: creditsCategories.map(creditCategory => creditCategory.content).flat().length,
    }
  }

  protected getCategoryCredits(credits: IMovieCredit[]) {
    return credits.slice(0, 3).map(this.getCreditDisplayObject)
  }

  protected getCategoryEndingByCreditsLength(singularCategoryName: string, arrayLength: number) {
    return arrayLength > 1 ? singularCategoryName + 's' : singularCategoryName
  }
}
