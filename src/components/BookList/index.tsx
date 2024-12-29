import { BookCard } from '@/components/BookCard'
import { useCurrentData } from '@/zustand-store'

export function BookList() {
  const { books } = useCurrentData()

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {books &&
        books?.map((book) => {
          return <BookCard key={book.id} book={book} />
        })}
    </div>
  )
}
