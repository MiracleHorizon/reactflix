import { Dispatch, SetStateAction } from 'react'

export interface SeoParams {
  title?: string
  description?: string
  keywords?: string[]
}

export type SetState<T> = Dispatch<SetStateAction<T>>
