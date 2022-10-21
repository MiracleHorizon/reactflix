export interface IUser {
  _id: string
  login: string
  email: string
  avatarPath: string | null
  birthday: string | null
  private: boolean
  totalReviews: number
  watchlist: number[]
  // folders: any[]
  // favorite: any[]
}
