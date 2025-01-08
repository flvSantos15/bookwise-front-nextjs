import { useQuery } from '@tanstack/react-query'

import { getBooks } from '@/service/book-service'

import { BookCard } from '@/components/BookCard'

export function BookList() {
  const { data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  })

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {books &&
        books?.map((book) => {
          return <BookCard key={book.id} book={book} />
        })}
    </div>
  )
}
