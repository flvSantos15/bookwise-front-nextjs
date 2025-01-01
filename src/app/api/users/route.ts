import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'
import { setCookie } from 'nookies'

// const expiresInADay = new Date(Date.now() + 1000 * 60 * 60 * 24) // 1 day
const userIdTokenExpiration = 60 * 60 * 24 * 1 // 1 day

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({})

  return NextResponse.json(users)
}
