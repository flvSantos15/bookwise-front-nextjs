import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const response = await prisma.book.findMany({
    include: {
      ratings: {
        include: {
          user: true
        }
      },
      categories: {
        include: {
          category: true
        }
      }
    }
  })

  return NextResponse.json(response)
}
