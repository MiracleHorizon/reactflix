export const handleFeedbacksCount = (count: number): string => {
  return count >= 1000 ? `${(count / 1000).toFixed(2)}k` : Math.floor(count).toString()
}
