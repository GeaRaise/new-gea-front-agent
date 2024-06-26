import { HeaderAvatar, HeaderNotification, Logo, SubmitButton } from "@/components/elements"
import { handleLogout } from "@/utils/serveractions"
import Link from "next/link"

import type { FC } from "react"

export const Header: FC = () => {
  return (
    <div className="fixed left-0 top-0 flex h-16 w-screen items-center justify-between px-8 bg-white">
      <Link href="/clients">
        <Logo />
      </Link>
      <div className="flex items-center justify-center gap-5">
        <HeaderNotification />
        <HeaderAvatar />
        <form action={handleLogout} className="flex w-full justify-center">
          <SubmitButton className="bg-secondary shadow-md min-w-32">ログアウト</SubmitButton>
        </form>
      </div>
    </div>
  )
}
