'use server'

import { authOptions } from '@/app/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export const loginWithGoogle = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    return { user: session.user }
  } else {
    throw new Error('Authentication failed')
  }
}
