import { create } from 'zustand'
import { api } from '../libs/axios'
import { Account, Book, Category, Rating, Session, User } from '@/interfaces'
import { ChangeEvent } from 'react'

export interface PlayerState {
  isLoading: boolean
  users: User[]
  books: Book[]
  categories: Category[]
  ratings: Rating[]
  account: Account | null
  session: Session | null

  currentPageTitle: string
  selectedCategory: string
  currentBookId: string | null

  setCurrentPageTitle: (item: string) => void
  setSelectedCategory: (item: string) => void
  setCurrentBookId: (item: string) => void
  handleSearch: (text: string) => void

  load: () => Promise<void>
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    isLoading: true,
    account: null,
    session: null,
    users: [],
    books: [],
    categories: [],
    ratings: [],

    currentPageTitle: 'Início',
    selectedCategory: 'Tudo',
    currentBookId: null,

    setCurrentBookId: (bookId: string) => {
      set({ currentBookId: bookId })
    },

    setCurrentPageTitle: (item: string) => {
      set({ currentPageTitle: item })
    },

    setSelectedCategory: (item: string) => {
      if (item === 'Tudo') {
        get().load()
      } else {
        const filteredBooks = get().books?.filter((book) => {
          return book?.categories?.some((category) => {
            return category?.category?.name === item
          })
        })

        set({ books: filteredBooks })
      }

      set({ selectedCategory: item })
    },

    handleSearch: (text: string) => {
      if (text !== '') {
        const filteredBooks = get().books.filter((book) => {
          return book.name.toLowerCase().includes(text.toLowerCase())
        })

        set({ books: filteredBooks })
      } else {
        get().load()
      }
    },

    load: async () => {
      set({ isLoading: true })

      // Promise.all([
      //   api.get('/users'),
      //   api.get('/books'),
      //   api.get('/categories'),
      //   api.get('/ratings'),
      //   api.get('/account'),
      //   api.get('/session'),
      // ])

      // const users = await api.get('/users')
      const books = await api.get('/books')
      const categories = await api.get('/categories')
      const ratings = await api.get('/ratings')
      // const account = await api.get('/account')
      // const session = await api.get('/session')

      set({
        // users: users.data,
        books: books.data,
        categories: categories.data,
        ratings: ratings.data,
        // account: account.data,
        // session: session.data,
        isLoading: false
      })
    }
  }
})

// Colocar um novo nome
export const useCurrentData = () => {
  return useStore((state) => {
    const currentBook = state.books.find(
      (book) => book.id === state.currentBookId
    )

    const {
      account,
      books,
      categories,
      currentPageTitle,
      isLoading,
      ratings,
      session,
      users,
      selectedCategory
    } = state

    return {
      account,
      books,
      categories,
      currentPageTitle,
      isLoading,
      ratings,
      session,
      users,
      selectedCategory,
      currentBook
    }
  })
}
