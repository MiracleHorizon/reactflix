export const getDurationFromRuntime = (runtime: number) => {
  // runtime - длительность фильма в минутах.
  const hours = Math.floor(runtime / 60)
  const minutes = runtime - hours * 60

  return {
    hours,
    minutes,
  }
}
