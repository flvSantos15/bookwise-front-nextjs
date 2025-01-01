// export { auth as middleware } from '@/auth'
import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/profile']

export default async function middleware(req: NextRequest) {
  const session = await auth()

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  if (!session && isProtected) {
    const absoluteURL = new URL('/', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.icon).*)']
}