export default interface Props {
  data: IDataItem[]
}

export interface IDataItem {
  title: string
  content: TContent
}

interface ILinkItem {
  name: string
  path: string
}

type TContent = string | string[] | ILinkItem[]
