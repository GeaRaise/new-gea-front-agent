"use client"
import { getActions } from "@/components/clients/actions"
import { Button } from "@/components/ui/button"
import { CustomDialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { getDialogInfo } from "@/utils/actions"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

/**
 *
 * @param statusId is_activeのステータスID
 * @param isLack 招待情報が不足しているかどうか true:不足している false:不足していない
 * @returns
 */
const ClientsPopAction = ({
  statusId,
  isLack = false,
  userId,
}: { statusId: string | undefined; isLack?: boolean; userId: number }) => {
  const [mode, setMode] = useState<"delete" | "invite">("invite")

  const handleClick = (label: string) => {
    switch (label) {
      case "削除":
        setMode("delete")
        break
      default:
        setMode("invite")
        break
    }
  }

  const getActionItem = (label: string) => {
    switch (label) {
      case "詳細":
        return (
          <Link href={`/clients/${userId}`} as={`/clients/${userId}`} className="block w-full">
            {label}
          </Link>
        )
      case "代理登録":
        return (
          <Link
            href={`/clients/proxy/${userId}`}
            as={`/clients/proxy/${userId}`}
            className="block w-full"
          >
            {label}
          </Link>
        )
      default:
        return <button className="w-full text-left">{label}</button>
    }
  }
  const dialogInfo = getDialogInfo(mode)
  return (
    <>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true}>
            <MoreHorizontal className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {getActions({ statusId, isLack }).map((action) => (
              <DialogTrigger asChild={true} key={action.id}>
                <DropdownMenuItem
                  className={cn(
                    "transition-all text-geatextgray focus:text-geatext",
                    action.label === "削除" && "text-primary focus:text-red-600",
                  )}
                  onClick={() => {
                    handleClick(action.label)
                  }}
                >
                  {getActionItem(action.label)}
                </DropdownMenuItem>
              </DialogTrigger>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CustomDialogContent
          dialogTitle={dialogInfo.title}
          className="lg:max-w-[640px]"
          isFooter={true}
        >
          <p className="text-sm text-center whitespace-pre-wrap">{dialogInfo.discription}</p>
          <div className="mt-5 lg:mt-10">
            <Button variant={"secondary"} size={"lg"} className="text-white">
              {dialogInfo.buttonText}
            </Button>
          </div>
        </CustomDialogContent>
      </Dialog>
    </>
  )
}

export default ClientsPopAction
