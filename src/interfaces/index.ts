// Quando o user logar a primeira vez, ele cria um account e um session e um user
// Quando o user logar a segunda vez, ele cria um session

export interface Account {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

export interface Session {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: string

  book: Book
  user: User
}

interface CategoriesOnBooks {
  book_id: string
  categoryId: string

  book: Book
  category: Category
}

export interface Category {
  id: string
  name: string
}

export interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: Rating[]
  categories: CategoriesOnBooks[]

  total_pages: number
  created_at: Date
}

export interface User {
  id: string
  name: string
  email: string
  image: string
  avatar_url: string
  created_at: Date
  emailVerified: Date

  accounts: Account[]
  sessions: Session[]
  ratings: Rating[]
}
