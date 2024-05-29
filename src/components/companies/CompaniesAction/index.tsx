import { ImportIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import type { FC } from "react"

const CompaniesAction: FC = () => {
  return (
    <div className="flex justify-end gap-4 w-full mb-11 items-center">
      <Button
        variant="outline"
        size={"sm"}
        className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
      >
        <ImportIcon />
        <span className="text-[#A8A8A8]">一括インポート</span>
      </Button>
      <Button
        variant="outline"
        size={"sm"}
        className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
      >
        <PlusCircle className="text-[#A8A8A8]" size={20} />
        <span className="text-[#A8A8A8]">新規招待</span>
      </Button>
      <Button size="sm" className="bg-secondary text-white">
        代理登録
      </Button>
    </div>
  )
}

export default CompaniesAction
