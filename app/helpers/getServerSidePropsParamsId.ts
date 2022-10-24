import { GetServerSidePropsContext } from 'next'

export const getServerSidePropsParamsId = (context: GetServerSidePropsContext): string => {
  const id = context.params?.id

  if (!id) {
    throw new Error('') //!
  }

  return Array.isArray(id) ? id[0] : id
}
