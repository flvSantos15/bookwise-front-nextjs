import React from 'react'
import { BookCard } from '../BookCard'
import { useStore } from '@/zustand-store'

export function RecentPublishedBookList() {
  const books = useStore((store) => {
    const days = 5
    const hours = 24
    const minutes = 60
    const seconds = 60
    const milliseconds = 1000

    const today = new Date()
    const fiveDaysAgo = new Date(
      today.getTime() - days * hours * minutes * seconds * milliseconds
    )

    return store.books.filter((book) => {
      const bookDate = new Date(book.created_at)
      return bookDate >= fiveDaysAgo
    })
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
