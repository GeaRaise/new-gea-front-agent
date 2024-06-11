import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Cookies の取得
  const cookies =
    request.cookies.get("gea_demo_token") ||
    request.cookies.get("gea_prod_token") ||
    request.cookies.get("gea_dev_token")

  if (cookies) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL("/auth/signin", request.url))
}

// ログインが必要なページのパスを指定
export const config = {
  matcher: ["/companies/:path*", "/usersmanagement/:path*", "/relations/:path*"],
}
