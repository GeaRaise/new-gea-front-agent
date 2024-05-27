"use client";

import type { FC, ReactNode } from "react";

import { useStateSWR } from "@/hooks/useSWR/useStateSWR";
import { useRouter } from "next/navigation";

type PropsType = {
  children: ReactNode;
  href: string;
};

const NavLinkButton: FC<PropsType> = (props) => {
  const { children, href } = props;
  const router = useRouter();
  const [isActiveNavLink, setIsActiveNavLink] = useStateSWR<{
    href: string;
  }>("isNavActive", {
    href: "companies",
  });

  const handleLinkClick = (href: string) => {
    setIsActiveNavLink({ href });
    router.push(`/${href}`);
  };

  return (
    <button
      type="button"
      onClick={() => handleLinkClick(href)}
      className={`${
        isActiveNavLink.href === href ? "text-primary" : "text-black"
      } transition duration-300 hover:text-primary`}
    >
      {children}
    </button>
  );
};

export default NavLinkButton;
