import Divider from 'antd/lib/divider'
import List from 'antd/lib/list'
import { FC } from 'react'

import { DataListItem } from './Item'
import Props from './DataList.types'

export const DataList: FC<Props> = ({ data }) => (
  <>
    <Divider className='divider y0' />
    <List
      itemLayout='vertical'
      dataSource={data}
      renderItem={item => item.content.length > 0 && <DataListItem key={item.title} {...item} />}
    />
    <Divider className='divider y0' />
  </>
)
