import { useCurrentData, useStore } from '@/zustand-store'
import { CommentItem } from './Item'
import { useQuery } from '@tanstack/react-query'
import { getBooks } from '@/service/book-service'

interface CommentListProps {}

export function CommentList({}: CommentListProps) {
  const { data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  })

  const { currentBook } = useStore((store) => {
    const currentBook = books?.find((book) => book.id === store.currentBookId)

    return {
      currentBook
    }
  })

  return (
    <div className="flex flex-col gap-3">
      {currentBook?.ratings &&
        currentBook?.ratings.map((rating) => {
          return <CommentItem key={rating.id} rating={rating} />
        })}
    </div>
  )
}
