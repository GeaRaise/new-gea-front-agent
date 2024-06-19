"use client"
import { BaseDialog } from "@/components/layouts/components"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { type FC, useState } from "react"
import ClientsInviteForm from "../ClientsInviteForm"

const ClientsInviteDialog: FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <BaseDialog
      open={open}
      onOpenChange={setOpen}
      dialogTItle="招待する顧問先情報を入力してください"
      dialogTrigger={
        <Button
          variant="outline"
          size={"sm"}
          className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
        >
          <PlusCircle className="text-[#A8A8A8]" size={20} />
          <span className="text-[#A8A8A8]">新規招待</span>
        </Button>
      }
    >
      <p className="text-center text-sm">
        招待完了後、該当顧問先へ会員登録の招待メールが届きます。
        <br />
        ※一括登録の場合、新規入力先全ての顧問先へ招待メールが送付されます
      </p>
      <ClientsInviteForm setOpen={setOpen} />
    </BaseDialog>
  )
}

export default ClientsInviteDialog
