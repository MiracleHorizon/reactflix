import { IMovieCredit } from 'models/movie/credits/IMovieCredit'
import { MovieCreditDepartment } from '../../models/movie/MovieCreditDepartment'

export class MovieCreditsHandler {
  constructor(private _crew: IMovieCredit[]) {}

  private get crew() {
    return this._crew
  }

  private get directors() {
    return this.crew.filter(({ job }) => job === 'Director')
  }

  private get writers() {
    return this.crew.filter(({ known_for_department }) => known_for_department === MovieCreditDepartment.WRITING)
  }

  private get actors() {
    return this.crew.filter(({ known_for_department }) => known_for_department === MovieCreditDepartment.ACTING)
  } // TODO Переработать концепция получения главных звёзд.

  private getCreditDisplayObject({ id, name }: IMovieCredit) {
    return {
      name,
      href: `/person/${id}`,
    }
  }

  public get credits() {
    const directors = this.directors.slice(0, 3).map(this.getCreditDisplayObject)
    const writers = this.writers.slice(0, 3).map(this.getCreditDisplayObject)
    const stars = this.actors.slice(0, 3).map(this.getCreditDisplayObject)

    const creditsCategories = [
      {
        title: directors.length > 1 ? 'Directors' : 'Director',
        content: directors,
      },
      {
        title: writers.length > 1 ? 'Writers' : 'Writer',
        content: writers,
      },
      {
        title: 'Stars',
        content: stars,
      },
    ]

    return {
      credits: creditsCategories,
      contentLength: creditsCategories.map(creditCategory => creditCategory.content).flat().length,
    }
  }
}
