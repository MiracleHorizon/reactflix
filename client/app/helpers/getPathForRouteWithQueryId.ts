export const getPathForRouteWithQueryId = (route: string, baseQuery: string) => {
  return route.replace(`/${baseQuery}/[id]/`, '')
}

// Todo Написать тесты
