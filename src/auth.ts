import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from '@/libs/prisma'

const userIdTokenExpiration = 60 * 60 * 24 * 1 // 1 day

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name!,
          email: profile.email!,
          image: profile.avatar_url,
          avatar_url: profile.avatar_url
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  // debug: process.env.NODE_ENV === 'development',
  events: {
    linkAccount: async ({ user }) => {
      const currentSession = await prisma.session.findFirst({
        where: {
          userId: user.id!
        }
      })

      if (!currentSession) {
        await prisma.session.create({
          data: {
            userId: user.id!,
            expires: new Date(Date.now() + userIdTokenExpiration),
            sessionToken: crypto.randomUUID()
          }
        })
      }
    }
  }

  // callbacks: {
  //   async session({ session, token }) {

  //     return {
  //       ...session,
  //       token
  //     }
  //   }
  // }
})
