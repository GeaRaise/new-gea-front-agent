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
          <Link href={`/clients/${userId}`} as="/clients/1" className="block w-full">
            {label}
          </Link>
        )
      default:
        return <button className="w-full text-left">{label}</button>
    }
  }

  return (
    <>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true}>
            <MoreHorizontal className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {getActions({ statusId, isLack }).map((action) => (
              <DialogTrigger asChild={true}>
                <DropdownMenuItem
                  className={`transition-all ${
                    action.label === "削除"
                      ? "text-primary focus:text-red-600"
                      : "text-geatextgray focus:text-geatext"
                  }`}
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
          dialogTitle={
            mode === "invite"
              ? "顧問先を招待してもよろしいでしょうか？"
              : "顧問先データを削除してもよろしいでしょうか？"
          }
        >
          {mode === "invite" ? (
            <p className="text-center">招待完了後、該当顧問先へ会員登録の招待メールが届きます。</p>
          ) : (
            <p className="text-center">
              顧問先データを削除すると各データ閲覧ができなくなり、インセンティブ対象から外れます。
              <br />
              また、会員登録前の顧問先ユーザーの場合は招待リンクが無効となります。
            </p>
          )}
          <div className="mt-5 lg:mt-10">
            <Button variant={"secondary"} size={"lg"} className="text-white">
              {mode === "invite" ? "顧問先を招待する" : "顧問先データを削除する"}
            </Button>
          </div>
        </CustomDialogContent>
      </Dialog>
    </>
  )
}

export default ClientsPopAction
