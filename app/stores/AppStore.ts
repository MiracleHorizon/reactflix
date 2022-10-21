import { makeAutoObservable } from 'mobx'

class AppStore {
  private _navDrawerOpen = false

  constructor() {
    makeAutoObservable(this)
  }

  public get navDrawerOpen() {
    return this._navDrawerOpen
  }

  public openNavDrawer() {
    this._navDrawerOpen = true
  }

  public closeNavDrawer() {
    this._navDrawerOpen = false
  }
}

export default new AppStore()
