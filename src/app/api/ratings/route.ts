import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const response = await prisma.rating.findMany({
    include: {
      book: true,
      user: true
    }
  })

  return NextResponse.json(response)
}
