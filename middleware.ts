import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });

  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = ['/home', '/settings', '/profile', '/verification'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Auth routes that should redirect if already logged in
  const authRoutes = ['/auth/login', '/auth/signup'];
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  // Fast redirect for authenticated users on auth pages
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Fast redirect for unauthenticated users on protected pages
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Redirect root to home if authenticated, else to landing page
  if (pathname === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/home/:path*',
    '/settings/:path*',
    '/profile/:path*',
    '/verification/:path*',
    '/auth/:path*',
  ],
};
