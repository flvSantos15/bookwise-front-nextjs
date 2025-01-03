import { api } from '@/libs/axios'

interface AvaliateBookRequest {
  rate: number
  description: string
  bookId: string
  userId: string
}

export async function AvaliateBook({
  rate,
  description,
  bookId,
  userId
}: AvaliateBookRequest) {
  try {
    if (!rate) {
      throw new Error('Rate is required')
    }

    if (!description) {
      throw new Error('Description is required')
    }

    if (!bookId) {
      throw new Error('Book id is required')
    }

    if (!userId) {
      throw new Error('User id is required')
    }

    // api request
    await api.post('/avaliate-book', {
      rate,
      description,
      bookId,
      userId
    })

    return { message: 'Created sucessfully!' }
  } catch (error) {
    throw new Error(`Internal server error ${error}`)
  }
}
