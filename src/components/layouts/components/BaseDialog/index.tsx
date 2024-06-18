import { CustomDialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog"
import type { FC, ReactNode } from "react"

type PropsType = {
  children: ReactNode
  dialogTrigger: ReactNode
  dialogTItle?: string
}

/**
 * ダイアログのベースコンポーネント：タイトルと「前の画面に戻る」はデフォルトで表示
 * @param children ボディ部分
 * @param triggerName トリガーボタンの名前
 * @param dialogTItle ダイアログのタイトル
 * @returns
 */

const BaseDialog: FC<PropsType> = (props) => {
  const { children, dialogTItle = "ダイアログタイトル", dialogTrigger } = props
  return (
    <Dialog>
      <DialogTrigger asChild={true}>{dialogTrigger}</DialogTrigger>
      <CustomDialogContent dialogTitle={dialogTItle}>{children}</CustomDialogContent>
    </Dialog>
  )
}

export default BaseDialog
