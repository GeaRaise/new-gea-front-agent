import { AuthedCheck } from "@/components/layouts"
import { DESCRIPTION, TITLE } from "@/constants/meta"
import { notoSansJp } from "@/utils/fonts"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import type { ReactNode } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}

export const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  const cookie =
    cookies().get("gea_demo_token") ||
    cookies().get("gea_prod_token") ||
    cookies().get("gea_dev_token")

  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${inter.className} font-notoSansJp text-geatext`}>
        <AuthedCheck isLogined={cookie !== undefined}>
          <main>{children}</main>
        </AuthedCheck>
      </body>
    </html>
  )
}
export default RootLayout
