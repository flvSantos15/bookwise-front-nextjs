import { api } from '@/libs/axios'

import { Book } from '@/interfaces'

export async function getBooks() {
  const response = await api.get<Book[]>('/books')

  return response.data
}

interface GetBookRatingsRequest {
  id: string
}

export async function getBookRatings({ id }: GetBookRatingsRequest) {
  const response = await api.get<Book[]>(`/books/${id}/ratings`)

  return response.data
}

export async function getRecentPublishedBooks() {
  const days = 5
  const hours = 24
  const minutes = 60
  const seconds = 60
  const milliseconds = 1000

  const today = new Date()
  const fiveDaysAgo = new Date(
    today.getTime() - days * hours * minutes * seconds * milliseconds
  )

  const response = await api.get<Book[]>('/books')

  return response.data.filter((book) => {
    const bookDate = new Date(book.created_at)
    return bookDate >= fiveDaysAgo
  })
}
