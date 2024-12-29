import { Rating } from '@/interfaces'

interface Props {
  ratings: Rating[]
}

export function getBookMediaRating({ ratings }: Props) {
  const totalRatings = ratings?.length

  const totalRating = ratings?.reduce((acc, rating) => {
    return acc + rating.rate
  }, 0)

  const media = Number(totalRating) / Number(totalRatings)

  return { media }
}
