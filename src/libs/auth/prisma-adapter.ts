import { type Adapter } from '@auth/core/adapters'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/libs/prisma'
import { setCookie } from 'nookies'

const userIdTokenExpiration = 60 * 60 * 24 * 7 // 7 days

export function MyPrismaAdapter(config: any): Adapter {
  return {
    ...PrismaAdapter(config),
    async createUser(user) {
      const userExists = await prisma.user.findFirst({
        where: {
          email: user.email!
        }
      })

      if (userExists) {
        throw new Error('User already exists')
      }

      const createdUser = await prisma.user.create({
        data: {
          name: user?.name!,
          email: user?.email!,
          avatar_url: user?.image!
        }
      })

      setCookie(undefined, '@bookwise:userId', createdUser.id, {
        maxAge: userIdTokenExpiration,
        path: '/'
      })

      return {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email!,
        avatar_url: createdUser.avatar_url!,
        emailVerified: null
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId: providerAccountId
          }
        },
        include: {
          user: true
        }
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          name: user?.name!,
          email: user?.email!,
          avatar_url: user?.image!
        }
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!,
        avatar_url: prismaUser.avatar_url!,
        emailVerified: null
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state?.toString()
        }
      })
    },

    // async createSession({ sessionToken, userId, expires }) {
    //   await prisma.session.create({
    //     data: {
    //       user_id: userId,
    //       expires,
    //       session_token: sessionToken
    //     }
    //   })

    //   return {
    //     userId,
    //     expires,
    //     sessionToken
    //   }
    // },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken: sessionToken
        },
        include: {
          user: true
        }
      })

      if (!prismaSession) {
        throw new Error('Session not found')
        // const session = await prisma.session.create({
        //   data: {
        //     user_id: userId,
        //     expires,
        //     session_token: sessionToken
        //   }
        // })

        // setCookie(undefined, '@bookwise:userId', session.id, {
        //   maxAge: userIdTokenExpiration,
        //   path: '/'
        // })
      }

      const { ...session } = prismaSession

      const user = prismaSession?.user

      return {
        session: {
          userId: session.userId,
          expires: session.expires,
          sessionToken: session.sessionToken
        },
        user: {
          id: user?.id!,
          name: user?.name!,
          email: user?.email!,
          avatar_url: user?.avatar_url!,
          emailVerified: null
        }
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          sessionToken: sessionToken
        },
        data: {
          expires,
          userId: userId
        }
      })

      return {
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
        expires: prismaSession.expires
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken: sessionToken
        }
      })
    }
  }
}
