import AppStore from 'stores/AppStore'
import { handleSearchLanguage } from 'helpers/handleSearchLanguage'

export class ApiEndpointsHandler {
  private static readonly _apiKey = `api_key=${process.env.API_KEY}`
  private static readonly _searchLanguage = `language=${handleSearchLanguage(AppStore.searchLanguage)}`

  protected static get apiKey() {
    return this._apiKey
  }

  protected static get searchLanguage() {
    return this._searchLanguage
  }

  protected static get defaultParams() {
    return `${this.apiKey}&${this.searchLanguage}`
  }

  protected static setEndpoint(path: string, additionalRequests?: string): string {
    const query = `/${path}?${this.defaultParams}`
    const additionalQuery = `${additionalRequests ? '&' + additionalRequests : ''}`

    return `${query}${additionalQuery}`
  }
}
