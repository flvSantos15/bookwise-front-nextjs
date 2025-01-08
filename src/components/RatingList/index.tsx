import { useQuery } from '@tanstack/react-query'
import { getMyRatings } from '@/service/rating-service'

import { RatingCard } from '../RatingCard'

export function RatingList() {
  const { data: myRatings } = useQuery({
    queryKey: ['myRatings'],
    queryFn: getMyRatings
  })

  // mostrar os livros com avaliacoes com o tempo menor que 10 dias
  return (
    <div className="flex flex-col gap-3 w-full">
      {myRatings &&
        myRatings?.map((rating) => {
          return <RatingCard key={rating.id} rating={rating} />
        })}
    </div>
  )
}
