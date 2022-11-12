import Link from 'next/link'
import { DefaultLayout } from 'layouts/Default'

const HomePage = () => {
  return (
    <DefaultLayout>
      <div>
        <Link href='/movie/680'>Test</Link>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
