export interface Account {
  id: string
  user_id: string
  type: string
  provider: string
  provider_account_id: string
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
  session_token: string
  user_id: string
  expires: Date
}

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: Date

  book_id: string
  user_id: string
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

  total_pages: number
  created_at: Date
}

export interface User {
  id: string
  name: string
  avatar_url: string
  created_at: Date

  accounts: Account[]
  sessions: Session[]
  ratings: Rating[]
}
