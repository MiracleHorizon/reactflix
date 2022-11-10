import Title from 'antd/lib/typography/Title'
import Image from 'next/image'
import classNames from 'classnames'
import { FC } from 'react'

import LayoutProps from '../Layout.types'
import cover from 'assets/register_cover.jpg'
import styles from './AuthLayout.module.scss'

export const AuthLayout: FC<Props> = ({ children, dest, ...seoData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Title level={1}>{dest === 'register' ? 'Registration' : 'Login'}</Title>
        </div>
        <div className={classNames(styles.content, { [styles.contentRevers]: dest === 'login' })}>
          {children}
          <div className={styles.image}>
            <Image src={cover} alt='Auth' />
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props extends LayoutProps {
  dest: 'register' | 'login'
}
