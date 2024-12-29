export function formatDate(dateString: string): string {
  const currentDate = new Date()
  const inputDate = new Date(dateString)
  const diffTime = currentDate.getTime() - inputDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    return 'Hoje'
  } else if (diffDays === 1) {
    return 'Ontem'
  } else {
    return `Há ${diffDays} dias`
  }
}
