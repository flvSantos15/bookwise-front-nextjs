import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const response = await prisma.rating.findMany({
    include: {
      book: true,
      user: true
    },
    orderBy: {
      created_at: 'desc'
    }
  })

  return NextResponse.json(response)
}
