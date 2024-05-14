import { handleLogout } from "@/features/auth/signin/utils/actions";
import { HeaderAvatar, HeaderNotification, Logo, SubmitButton } from "@/features/elements";
import Link from "next/link";

import type { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="fixed left-0 top-0 flex h-16 w-screen items-center justify-between px-8">
      <Link href="/companies">
        <Logo />
      </Link>
      <div className="flex items-center justify-center gap-5">
        <HeaderNotification />
        <HeaderAvatar />
        <form action={handleLogout} className="flex w-full justify-center">
          <SubmitButton label="ログアウト" className="bg-secondary shadow-md min-w-32" />
        </form>
      </div>
    </div>
  );
};
