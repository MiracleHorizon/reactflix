import Link from 'next/link'
import { FC } from 'react'

export const LinkWrapper: FC<Props> = ({ children, href, className }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)

interface Props {
  href: string
  children: JSX.Element | string
  className?: string
}
