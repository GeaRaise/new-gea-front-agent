import { type NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Cookies の取得
  const cookies =
    request.cookies.get("gea_demo_token") ||
    request.cookies.get("gea_prod_token") ||
    request.cookies.get("gea_dev_token");

  if (cookies) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/companies/:path*", "/usersmanagement/:path*", "/relations/:path*"],
};
