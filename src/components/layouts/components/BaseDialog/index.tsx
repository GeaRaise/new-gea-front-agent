import { CustomDialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import type { ComponentProps, FC, ReactNode } from "react"

const dialogVariants = cva("max-w-[90%] max-h-[80%] ", {
  variants: {
    size: {
      default: "lg:max-w-[850px]",
      sm: "lg:max-w-[640px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type PropsType = ComponentProps<typeof Dialog> &
  VariantProps<typeof dialogVariants> & {
    children: ReactNode
    dialogTrigger?: ReactNode
    dialogTitle: string
  }

/**
 * ダイアログのベースコンポーネント：タイトルと「前の画面に戻る」はデフォルトで表示
 * @param children ボディ部分
 * @param triggerName トリガーボタン
 * @param dialogTitle ダイアログのタイトル
 * @param size ダイアログの最大サイズ
 * @returns
 */
const BaseDialog: FC<PropsType> = (props) => {
  const { children, dialogTitle, dialogTrigger, size } = props
  return (
    <Dialog {...props}>
      {dialogTrigger ? (
        <DialogTrigger asChild={true}>{dialogTrigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild={true}></DialogTrigger>
      )}
      <CustomDialogContent dialogTitle={dialogTitle} className={cn(dialogVariants({ size }))}>
        {children}
      </CustomDialogContent>
    </Dialog>
  )
}

export default BaseDialog
