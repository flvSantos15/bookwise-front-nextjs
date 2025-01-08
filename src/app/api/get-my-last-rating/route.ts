import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { prisma } from '@/libs/prisma'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) return NextResponse.json('User id is required')

  const response = await prisma.rating.findFirst({
    where: {
      user_id: userId
    },
    include: {
      book: true
    },
    orderBy: {
      created_at: 'desc'
    }
  })

  return NextResponse.json(response)
}
