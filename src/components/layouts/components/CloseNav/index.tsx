import { NavLinkButton } from "@/components/elements"
import { DashbordIcon, HomeIcon } from "@/components/icons"
import type { FC } from "react"

const CloseNav: FC = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 z-10">
      <div>
        <span className="peer cursor-pointer">
          <HomeIcon />
        </span>
        <div className="absolute hidden w-80  z-10 hover:flex peer-hover:flex left-4 top-0 pl-8">
          <ul className="flex flex-col bg-white shadow-xl px-10 py-5 gap-2 rounded-md min-w-48">
            <li>
              <NavLinkButton href="/clients">顧問先管理</NavLinkButton>
            </li>
            <li>
              <NavLinkButton href="/usersmanagement">所内担当者管理</NavLinkButton>
            </li>
            <li>
              <NavLinkButton href="/relations">顧問先の所内担当者設定</NavLinkButton>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="peer cursor-pointer">
          <DashbordIcon />
        </span>
        <div className="absolute hidden w-80  z-10 hover:flex peer-hover:flex left-4 top-0 pl-8">
          <ul className="flex flex-col bg-white shadow-xl px-10 py-5 gap-2 rounded-md min-w-48">
            <li>
              <NavLinkButton href="#">カテゴリー・タグ設定</NavLinkButton>
            </li>
            <li>
              <NavLinkButton href="#">提案管理</NavLinkButton>
            </li>
            <li>
              <NavLinkButton href="#">イベントアラート</NavLinkButton>
            </li>
            <li>
              <NavLinkButton href="#">アクティビティデータ</NavLinkButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CloseNav
