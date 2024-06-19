import { CustomDialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog"
import type { ComponentProps, FC, ReactNode } from "react"

type PropsType = ComponentProps<typeof Dialog> & {
  children: ReactNode
  dialogTrigger?: ReactNode
  dialogTItle?: string
  defaultOpen?: boolean
}

/**
 * ダイアログのベースコンポーネント：タイトルと「前の画面に戻る」はデフォルトで表示
 * @param children ボディ部分
 * @param triggerName トリガーボタンの名前
 * @param dialogTItle ダイアログのタイトル
 * @param defaultOpen ダイアログを開いた状態にするか
 * @returns
 */

const BaseDialog: FC<PropsType> = (props) => {
  const { children, dialogTItle = "", dialogTrigger, defaultOpen = false } = props
  return (
    <Dialog defaultOpen={defaultOpen} {...props}>
      {dialogTrigger ? (
        <DialogTrigger asChild={true}>{dialogTrigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild={true}></DialogTrigger>
      )}
      <CustomDialogContent dialogTitle={dialogTItle}>{children}</CustomDialogContent>
    </Dialog>
  )
}

export default BaseDialog
