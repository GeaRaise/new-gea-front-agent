"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps, FC } from "react"

type PropsType = ComponentProps<typeof Link> & {
  activeClassName?: string
}

const ActiveLink: FC<PropsType> = (props) => {
  const { children, href, activeClassName = "text-primary font-bold" } = props
  const pathName = usePathname()
  const isActive = pathName === `/${href}`

  return (
    <Link
      className={cn(isActive && activeClassName, "transition duration-300 hover:text-primary")}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
