import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const response = await prisma.book.findMany({
    include: {
      ratings: true
    }
  })

  return NextResponse.json(response)
}
