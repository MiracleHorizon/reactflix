import { IMovieCredit } from 'models/movie/credits/IMovieCredit'
import { MovieCreditDepartment } from '../../models/movie/MovieCreditDepartment'

export class MovieCreditsHandler {
  constructor(private _crew: IMovieCredit[]) {}

  private get crew() {
    return this._crew
  }

  public get directors() {
    return this.crew.filter(({ job }) => job === 'Director')
  }

  public get writers() {
    return this.crew.filter(({ known_for_department }) => known_for_department === MovieCreditDepartment.WRITING)
  }

  public get actors() {
    return this.crew.filter(({ known_for_department }) => known_for_department === MovieCreditDepartment.ACTING)
  } // TODO Переработать концепция получения главных звёзд.

  public getCreditDisplayObject({ id, name }: IMovieCredit) {
    return {
      name,
      href: `/person/${id}`,
    }
  }

  public get directorsCategory() {
    const directors = this.directors.slice(0, 3).map(this.getCreditDisplayObject)

    return {
      title: directors.length > 1 ? 'Directors' : 'Director',
      content: directors,
    }
  }

  public get writersCategory() {
    const writers = this.writers.slice(0, 3).map(this.getCreditDisplayObject)

    return {
      title: writers.length > 1 ? 'Writers' : 'Writer',
      content: writers,
    }
  }

  public get starsCategory() {
    const stars = this.actors.slice(0, 3).map(this.getCreditDisplayObject)

    return {
      title: 'Stars',
      content: stars,
    }
  }

  public get topCredits() {
    const creditsCategories = [this.directorsCategory, this.writersCategory, this.starsCategory]

    return {
      credits: creditsCategories,
      contentLength: creditsCategories.map(creditCategory => creditCategory.content).flat().length,
    }
  }
}
