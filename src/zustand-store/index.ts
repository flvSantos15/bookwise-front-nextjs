import { create } from 'zustand'
import { api } from '../libs/axios'
import { Account, Session, User } from '@/interfaces'

export interface PlayerState {
  isLoading: boolean
  users: User[]
  currentUserEmail: string
  account: Account | null
  session: Session | null

  currentPageTitle: string
  selectedCategory: string
  currentBookId: string | null

  setCurrentPageTitle: (item: string) => void
  setSelectedCategory: (item: string) => void
  setCurrentBookId: (item: string) => void
  handleSearch: (text: string) => void
  getUserEmail: (email: string) => void

  load: () => Promise<void>
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    isLoading: true,
    account: null,
    session: null,
    users: [],
    currentUserEmail: '',

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
        // const filteredBooks = get().books?.filter((book) => {
        //   return book?.categories?.some((category) => {
        //     return category?.category?.name === item
        //   })
        // })
        // set({ books: filteredBooks })
      }

      set({ selectedCategory: item })
    },

    handleSearch: (text: string) => {
      if (text !== '') {
        // const filteredBooks = get().books.filter((book) => {
        //   return book.name.toLowerCase().includes(text.toLowerCase())
        // })
        // set({ books: filteredBooks })
      } else {
        get().load()
      }
    },

    getUserEmail: (email: string) => {
      set({ currentUserEmail: email })
    },

    load: async () => {
      set({ isLoading: true })

      const users = await api.get('/users')
      const account = await api.get('/account')
      const session = await api.get('/session')

      set({
        users: users.data,
        account: account.data,
        session: session.data,
        isLoading: false
      })
    }
  }
})

// Colocar um novo nome
export const useCurrentData = () => {
  return useStore((state) => {
    // const currentBook = state.books.find(
    //   (book) => book.id === state.currentBookId
    // )

    const currentUser = state.users.find(
      (user) => user.email === state.currentUserEmail
    )

    const {
      currentPageTitle,
      isLoading,
      selectedCategory,
      users,
      account,
      currentUserEmail
    } = state

    return {
      currentPageTitle,
      isLoading,
      selectedCategory,
      users,
      account,
      currentUserEmail,
      currentUser
    }
  })
}
