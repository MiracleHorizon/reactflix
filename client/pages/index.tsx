import Link from 'next/link'
import { DefaultLayout } from 'layouts/Default'

const HomePage = () => {
  console.log(process.env.TMDB_API_URL)

  return (
    <DefaultLayout>
      <div>
        <Link href='/movie/680'>
`        </Link>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
