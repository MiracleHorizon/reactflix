export const getUniqueObjectsFromArray = (key: string, array: any[]) => {
  return Array.from(new Map(array.map(item => [item[key], item])).values())
}
