import { type NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: ["/:path*"],
}

export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization")

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1]
    const [user, password] = atob(authValue).split(":")

    if (user === process.env.BASIC_ID && password === process.env.BASIC_PASS) {
      return NextResponse.next()
    }
  }

  return new NextResponse("Unauthorized.", {
    status: 401,
    headers: {
      "WWW-authenticate": 'Basic realm="Secure Area"',
    },
  })
}
// import { type NextRequest, NextResponse } from "next/server"

// export function middleware(request: NextRequest) {
//   // Cookies の取得
//   const cookies =
//     request.cookies.get("gea_demo_token") ||
//     request.cookies.get("gea_prod_token") ||
//     request.cookies.get("gea_dev_token")

//   if (cookies) {
//     return NextResponse.next()
//   }
//   return NextResponse.redirect(new URL("/signin", request.url))
// }

// // ログインが必要なページのパスを指定
// export const config = {
//   matcher: ["/clients/:path*", "/usersmanagement/:path*", "/relations/:path*"],
// }
