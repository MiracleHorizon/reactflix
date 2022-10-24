import { makeAutoObservable } from 'mobx'

import { SearchLanguages } from 'models/api/search/SearchLanguages'

class AppStore {
  private _navDrawerOpen = false
  private _searchLanguage = SearchLanguages.EN

  constructor() {
    makeAutoObservable(this)
  }

  public get navDrawerOpen() {
    return this._navDrawerOpen
  }

  public get searchLanguage() {
    return this._searchLanguage
  }

  public openNavDrawer() {
    this._navDrawerOpen = true
  }

  public closeNavDrawer() {
    this._navDrawerOpen = false
  }
}

export default new AppStore()
