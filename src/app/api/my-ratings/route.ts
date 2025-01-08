import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) return NextResponse.json('User id is required')

  const response = await prisma.rating.findMany({
    where: {
      user_id: userId
    },
    orderBy: {
      created_at: 'desc'
    }
  })

  const today = new Date()

  const filteredRatings = response.filter((rating) => {
    const date = new Date(rating.created_at)
    const diffTime = today.getTime() - date.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    const publishDaysPassed = 10

    return diffDays < publishDaysPassed
  })

  return NextResponse.json(filteredRatings)
}
