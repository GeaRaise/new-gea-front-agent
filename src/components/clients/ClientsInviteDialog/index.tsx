"use client"
import { BaseDialog } from "@/components/layouts/components"
import { Button } from "@/components/ui/button"
import { ERROR_DIAROG_TITLE } from "@/constants"
import {
  INVITE_COMPLEATE_DIAROG_DISPRICTION,
  INVITE_COMPLEATE_DIAROG_TITLE,
  INVITE_DIAROG_DISCRIPTION,
  INVITE_DIAROG_TITLE,
} from "@/constants/dialog"
import { PlusCircle } from "lucide-react"
import { type FC, useState } from "react"
import ClientsInviteForm from "../ClientsInviteForm"

const ClientsInviteDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const [completedOpen, setCompletedOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  return (
    <>
      <BaseDialog
        open={open}
        onOpenChange={setOpen}
        dialogTitle={INVITE_DIAROG_TITLE}
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
        <p className="text-center text-sm whitespace-pre-wrap">{INVITE_DIAROG_DISCRIPTION}</p>
        <ClientsInviteForm
          setOpen={setOpen}
          setCompletedOpen={setCompletedOpen}
          setErrorOpen={setErrorOpen}
        />
      </BaseDialog>
      <BaseDialog
        dialogTitle={INVITE_COMPLEATE_DIAROG_TITLE}
        open={completedOpen}
        onOpenChange={setCompletedOpen}
        size={"sm"}
      >
        <div className="mb-10">
          <p className="text-center text-xs whitespace-pre-wrap">
            {INVITE_COMPLEATE_DIAROG_DISPRICTION}
          </p>
        </div>
      </BaseDialog>
      <BaseDialog dialogTitle={ERROR_DIAROG_TITLE} open={errorOpen} onOpenChange={setErrorOpen}>
        <div></div>
      </BaseDialog>
    </>
  )
}

export default ClientsInviteDialog
