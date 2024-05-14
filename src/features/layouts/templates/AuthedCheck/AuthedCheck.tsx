"use client";

import { usePathname, useRouter } from "next/navigation";
import { type FC, type ReactNode, useEffect } from "react";

const NOT_AUTHED_PAGE_LIST = [
  "/",
  "/auth/signin",
  "/geareach_inquiry",
  "/geareach_policy",
  "/geareach_termsofservice",
  "/policy",
  "/termsofservice",
];

type PropsType = {
  children: ReactNode;
  isLogined: boolean;
};

export const AuthedCheck: FC<PropsType> = (props) => {
  const { children, isLogined } = props;
  const router = useRouter();
  //   クエリパラメータ
  const pathName = usePathname();
  // pathnameがNOT_AUTHED_PAGE_LISTに含まれているかどうか
  const isNotAuthedPage = NOT_AUTHED_PAGE_LIST.includes(pathName);
  // isNotAuthedPageがfalseの場合は/auth/signinに遷移する
  useEffect(() => {
    if (!(isLogined || isNotAuthedPage)) {
      router.push("/auth/signin");
    }
  }, [isLogined, isNotAuthedPage, router]);

  return <div>{children}</div>;
};
