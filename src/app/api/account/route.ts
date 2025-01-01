import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const response = await prisma.account.findMany({})

  return NextResponse.json(response)
}
