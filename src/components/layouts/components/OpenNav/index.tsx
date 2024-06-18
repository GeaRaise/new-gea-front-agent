import { NavLinkButton } from "@/components/elements"
import { DashbordIcon, HomeIcon } from "@/components/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FC } from "react"

const OpenNav: FC = () => {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-5">
            <HomeIcon />
            基本情報管理
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <NavLinkButton href="/clients">顧問先管理</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="/usersmanagement">所内担当者管理</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="/relations">顧問先の所内担当者設定</NavLinkButton>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center gap-5">
            <DashbordIcon />
            運用設定・データ管理
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <NavLinkButton href="#">カテゴリー・タグ設定</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="#">提案管理</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="#">イベントアラート</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="#">アクティビティデータ</NavLinkButton>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OpenNav
