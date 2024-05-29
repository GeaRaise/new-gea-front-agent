"use client"

import { NavLinkButton } from "@/components/elements"
import { HomeIcon } from "@/components/icons"

const CloseNav = () => {
  return (
    <div className="relative z-10">
      <span className="peer cursor-pointer">
        <HomeIcon />
      </span>
      <div className="absolute hidden w-80  z-10 hover:flex peer-hover:flex left-4 top-0 pl-8">
        <ul className="flex flex-col bg-white shadow-xl px-10 py-5 gap-2 rounded-md min-w-48">
          <li className="text-primary">
            <NavLinkButton href="companies">顧問先管理</NavLinkButton>
          </li>
          <li className="text-primary">
            <NavLinkButton href="usersmanagement">所内担当者管理</NavLinkButton>
          </li>
          <li className="text-primary">
            <NavLinkButton href="relations">顧問先の所内担当者設定</NavLinkButton>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CloseNav
