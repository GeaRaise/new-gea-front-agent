"use client"
import { BaseDialog } from "@/components/layouts/components"
import { Button } from "@/components/ui/button"
import { ERROR_DIALOG_TITLE } from "@/constants"
import {
  INVITE_COMPLEATE_DIALOG_DISPRICTION,
  INVITE_COMPLEATE_DIALOG_TITLE,
  INVITE_DIALOG_DISCRIPTION,
  INVITE_DIALOG_TITLE,
} from "@/constants/dialog"
import { PlusCircle } from "lucide-react"
import { type FC, useState } from "react"
import ClientsCSVInviteForm from "../ClientsCSVInviteForm"

const ClientsCSVInviteDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const [completedOpen, setCompletedOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  return (
    <>
      <BaseDialog
        open={open}
        onOpenChange={setOpen}
        dialogTitle={INVITE_DIALOG_TITLE}
        dialogTrigger={
          <Button
            variant="outline"
            size={"sm"}
            className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
          >
            <PlusCircle className="text-[#A8A8A8]" size={20} />
            <span className="text-[#A8A8A8]">新規招待(CSV一括インポート)</span>
          </Button>
        }
        isFooter={false}
      >
        <p className="text-center text-sm whitespace-pre-wrap">{INVITE_DIALOG_DISCRIPTION}</p>
        <ClientsCSVInviteForm
          setOpen={setOpen}
          setCompletedOpen={setCompletedOpen}
          setErrorOpen={setErrorOpen}
        />
      </BaseDialog>
      <BaseDialog
        dialogTitle={INVITE_COMPLEATE_DIALOG_TITLE}
        open={completedOpen}
        onOpenChange={setCompletedOpen}
        size={"sm"}
      >
        <div className="mb-10">
          <p className="text-center text-xs whitespace-pre-wrap">
            {INVITE_COMPLEATE_DIALOG_DISPRICTION}
          </p>
        </div>
      </BaseDialog>
      <BaseDialog dialogTitle={ERROR_DIALOG_TITLE} open={errorOpen} onOpenChange={setErrorOpen}>
        <div></div>
      </BaseDialog>
    </>
  )
}

export default ClientsCSVInviteDialog
