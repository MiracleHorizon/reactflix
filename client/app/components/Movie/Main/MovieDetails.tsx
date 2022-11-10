import { useMemo } from 'react'

import MovieStore from 'stores/MovieStore'
import { QuoteTitle } from 'components/ui/QuoteTitle'
import { DataList } from 'components/ui/DataList'
import { MovieDetailsHandler } from 'modules/movie/MovieDetailsHandler'

export const MovieDetails = () => {
  const { details } = useMemo(() => {
    return new MovieDetailsHandler(MovieStore.details)
  }, [])

  return (
    <section>
      <QuoteTitle title='Details' />
      <DataList data={details} />
    </section>
  )
}
