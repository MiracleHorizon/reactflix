import Menu from 'antd/lib/menu'
import { FC } from 'react'
import { useRouter } from 'next/router'

import AppStore from 'stores/AppStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { HEADER_NAVIGATION_CATEGORIES } from 'utils/constants/navigation'

export const NavigationMenu: FC<{ placement: 'header' | 'drawer' }> = ({ placement }) => {
  const router = useRouter()

  const handleSelectCategory = (path: string) => {
    if (router.asPath !== path) {
      router.replace(path).then(() => AppStore.closeNavDrawer())
    }
  }

  return (
    <Menu
      mode={placement === 'header' ? 'horizontal' : 'vertical'}
      defaultSelectedKeys={[useRouter().pathname]}
      onClick={({ key }) => handleSelectCategory(key)}
      items={HEADER_NAVIGATION_CATEGORIES.map(({ title, href }) => ({
        key: href,
        label: <LinkWrapper href={href}>{title}</LinkWrapper>,
      }))}
    />
  )
}
