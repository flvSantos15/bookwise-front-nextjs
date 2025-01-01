import { useCurrentData } from '@/zustand-store'
import { CommentItem } from './Item'

interface CommentListProps {}

export function CommentList({}: CommentListProps) {
  const { currentBook } = useCurrentData()

  return (
    <div className="flex flex-col gap-3">
      {currentBook?.ratings &&
        currentBook?.ratings.map((rating) => {
          return <CommentItem key={rating.id} rating={rating} />
        })}
    </div>
  )
}
