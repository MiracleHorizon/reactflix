import axios from 'axios'

import { ISignUpParams } from 'models/api/auth/ISignUpParams'

const api = axios.create({
  baseURL: process.env.SERVER_API + '/auth',
})

export class AuthService {
  public static async signUp(params: ISignUpParams) {
    try {
      const { data } = await api.post('/reg', params)

      return data
    } catch (e) {
      console.error(e)
    }
  }
}
