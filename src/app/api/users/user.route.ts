import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'
import { setCookie } from 'nookies'

// const expiresInADay = new Date(Date.now() + 1000 * 60 * 60 * 24) // 1 day
const userIdTokenExpiration = 60 * 60 * 24 * 1 // 1 day

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email') as string

  const user = await prisma.user.findFirst({
    where: { email }
  })

  const account = await prisma.account.findMany({
    where: { user_id: user?.id }
  })

  const currentSession = await prisma.session.findFirst({
    where: { user_id: user?.id }
  })

  const sessionToken = crypto.randomUUID()

  if (!currentSession) {
    await prisma.session.create({
      data: {
        user_id: user?.id!,
        expires: new Date(Date.now() + userIdTokenExpiration),
        session_token: sessionToken!
      }
    })

    setCookie(undefined, '@bookwise:userId', user?.id!, {
      path: '/',
      maxAge: userIdTokenExpiration
    })
  }

  const response = {
    user,
    account
  }

  return NextResponse.json(response)
}
