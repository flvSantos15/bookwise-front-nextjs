import { create } from 'zustand'
import { api } from '../libs/axios'
import { Account, Book, Category, Rating, Session, User } from '@/interfaces'

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

  getCurrentPageTitle: (item: string) => void
  getSelectedCategory: (item: string) => void

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

    getCurrentPageTitle: (item: string) => {
      set({ currentPageTitle: item })
    },
    getSelectedCategory: (item: string) => {
      set({ selectedCategory: item })
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
      // const ratings = await api.get('/ratings')
      // const account = await api.get('/account')
      // const session = await api.get('/session')

      set({
        // users: users.data,
        books: books.data,
        categories: categories.data,
        // ratings: ratings.data,
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
      selectedCategory
    }
  })
}
