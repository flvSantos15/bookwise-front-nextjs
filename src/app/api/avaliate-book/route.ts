import { NextResponse } from 'next/server'

import { z } from 'zod'
import { prisma } from '@/libs/prisma'

const avaliateBookBodySchema = z.object({
  rate: z.number().int().gt(0),
  description: z.string(),
  bookId: z.string(),
  userId: z.string()
})

export async function POST(request: Request) {
  const requestBody = await request.json()

  const { bookId, description, rate, userId } =
    avaliateBookBodySchema.parse(requestBody)

  await prisma.rating.create({
    data: {
      rate,
      description,
      book_id: bookId,
      user_id: userId
    }
  })

  return NextResponse.json('Created successfully')
}
