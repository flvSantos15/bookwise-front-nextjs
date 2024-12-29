import { RatingCard } from '../RatingCard'
import { useStore } from '@/zustand-store'

export function RatingList() {
  const ratings = useStore((store) => {
    const today = new Date()

    return store.ratings.filter((rating) => {
      const date = new Date(rating.created_at)
      const diffTime = today.getTime() - date.getTime()
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

      return diffDays < 2
    })
  })

  // mostrar os livros com avaliacoes com o tempo menor que 2 dias
  return (
    <div className="flex flex-col gap-3 w-full">
      {ratings &&
        ratings?.map((rating) => {
          return <RatingCard key={rating.id} rating={rating} />
        })}
    </div>
  )
}
