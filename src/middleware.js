import { NextResponse } from 'next/server'
// import type { NextRequest  } from 'next/server'


export function middleware(req) {
    const isLogin = true
    // if (req.nextUrl.pathname.startsWith("/profile")) {
    //     console.log(req.nextUrl.pathname.startsWith("/profile"));
    //     // return res.json({status : 200, data: body});
    //     return  NextResponse.redirect(new URL('/', req.url))
    // }
    if (!isLogin) {
        return NextResponse.redirect(new URL('/', req.url))
    }
   
}

export const config = {
    matcher: ['/about/:path*', '/profile', '/product'], //url yg bakal di redirect kalo belom login
  }