import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
const path=request.nextUrl.pathname

const isPublicPath=path=='/login' || path=='/signup'

// request.cookies.get('token')?.

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
  ]
}