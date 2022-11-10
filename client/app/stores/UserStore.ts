import { makeAutoObservable } from 'mobx'

import { IUser } from 'models/IUser'

class UserStore {
  // private _user: IUser | null = null
  private _user = {
    login: 'MiracleHorizon',
    avatarPath: null
  } as IUser
  private _isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  public get user() {
    return this._user
  }

  public get isAuth() {
    return this._isAuth
  }

  public async signOut() {}
}

export default new UserStore()
