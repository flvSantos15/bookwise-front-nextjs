import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getRecentPublishedBooks } from '@/service/book-service'

import { BookCard } from '../BookCard'

export function RecentPublishedBookList() {
  const { data: books } = useQuery({
    queryKey: ['recentPublishedBooks'],
    queryFn: getRecentPublishedBooks
  })

  return (
    <div className="flex flex-col gap-3 w-full">
      {books &&
        books?.map((book) => {
          return <BookCard key={book.id} book={book} />
        })}
    </div>
  )
}
