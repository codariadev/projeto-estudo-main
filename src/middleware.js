import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get('token');
  console.log("Token encontrado:", token);
  
  if (!token) {
    console.log("Redirecionando para login...");
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/dashboard/:path*'
    ],
};