import { IMovieDetails } from 'models/movie/IMovieDetails'
import { DateFns } from 'libs/DateFns'

export class MovieDetailsHandler {
  constructor(private _details: IMovieDetails) {}

  public get details() {
    return [
      { title: 'Release date', content: this.getReleaseDate() },
      { title: 'Original language', content: this.getOriginalLanguage() },
      { title: 'Languages', content: this.getLanguages() },
      { title: 'Also now as', content: this._details.original_title },
      {
        title: `Production ${this._details.production_countries.length > 1 ? 'countries' : 'country'}`,
        content: this.getProductionCountries(),
      },
      {
        title: `Production ${this._details.production_companies.length > 1 ? 'companies' : 'company'}`,
        content: this.getProductionCompanies(),
      },
    ]
  }

  private getReleaseDate() {
    return DateFns.setMonthDayYearFormat(this._details.release_date)
  }

  private getOriginalLanguage() {
    const originalLanguage = this._details.original_language

    const languageNames = new Intl.DisplayNames(['en'], {
      type: 'language',
    })

    return languageNames.of(originalLanguage) || originalLanguage
  }

  private getLanguages() {
    return this._details.spoken_languages.slice(0, 4).map(lang => lang.name)
  }

  private getProductionCountries() {
    return this._details.production_countries.slice(0, 4).map(country => country.name)
  }

  private getProductionCompanies() {
    return this._details.production_companies.slice(0, 4).map(company => ({
      name: company.name,
      href: `/company/${company.id}`,
    }))
  }
}
