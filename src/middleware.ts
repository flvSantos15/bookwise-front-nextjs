// export { auth as middleware } from '@/auth'
import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'
import { setCookie } from 'nookies'

const protectedRoutes = ['/profile']
const listRoutes = ['/home', '/explorer', '/profile']
const userIdTokenExpiration = 60 * 60 * 24 * 1

export default async function middleware(req: NextRequest) {
  const session = await auth()

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  const isListRoute = listRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  if (!session && isProtected) {
    const absoluteURL = new URL('/', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }

  if (session && !isListRoute) {
    const absoluteURL = new URL('/home', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }

  if (session) {
    const userId = session.user?.id
    if (userId) {
      setCookie(undefined, '@bookwise:userId', userId, {
        maxAge: userIdTokenExpiration,
        path: '/'
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.icon).*)']
}
