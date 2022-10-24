import Link from 'next/link'
import { DefaultLayout } from 'layouts/Default'

const HomePage = () => (
  <DefaultLayout>
    <div>
      <Link href='/movie/680'>
        <a>Test</a>
      </Link>
    </div>
  </DefaultLayout>
)

export default HomePage
