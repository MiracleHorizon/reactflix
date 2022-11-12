import { getUniqueObjectsFromArray } from 'helpers/getUniqueObjectsFromArray'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import { IMovieCredit } from 'models/movie/credits/IMovieCredit'

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

  public getCreditsByDepartment(department: MovieCreditDepartment): IMovieCredit[] {
    const credits = this.crew.filter(credit => credit.department === department)

    return getUniqueObjectsFromArray('id', credits)
  }

  public getCreditDisplayObject({ id, name }: IMovieCredit) {
    return {
      name,
      href: `/person/${id}`,
    }
  }
}
