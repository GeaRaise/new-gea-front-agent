import { CustomDialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog"
import type { ComponentProps, FC, ReactNode } from "react"

type PropsType = ComponentProps<typeof Dialog> & {
  children: ReactNode
  dialogTrigger?: ReactNode
  dialogTitle?: string
  defaultOpen?: boolean
}

/**
 * ダイアログのベースコンポーネント：タイトルと「前の画面に戻る」はデフォルトで表示
 * @param children ボディ部分
 * @param triggerName トリガーボタンの名前
 * @param dialogTitle ダイアログのタイトル
 * @param defaultOpen ダイアログを開いた状態にするか
 * @returns
 */

const BaseDialog: FC<PropsType> = (props) => {
  const { children, dialogTitle = "", dialogTrigger, defaultOpen = false } = props
  return (
    <Dialog defaultOpen={defaultOpen} {...props}>
      {dialogTrigger ? (
        <DialogTrigger asChild={true}>{dialogTrigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild={true}></DialogTrigger>
      )}
      <CustomDialogContent dialogTitle={dialogTitle}>{children}</CustomDialogContent>
    </Dialog>
  )
}

export default BaseDialog
