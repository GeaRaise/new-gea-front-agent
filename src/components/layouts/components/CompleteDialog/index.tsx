import { CustomDialogContent, Dialog } from "@/components/ui/dialog"
import type { ComponentProps, ReactNode } from "react"

type PropsType = ComponentProps<typeof Dialog> & {
  dialogTitle: string
  children: ReactNode
}

const CompleteDialog = (props: PropsType) => {
  const { children, dialogTitle = "ダイアログタイトル" } = props
  return (
    <Dialog {...props}>
      <CustomDialogContent dialogTitle={dialogTitle} className="lg:max-w-[640px]">
        <div className="mb-10">
          <p className="text-center text-xs whitespace-pre-wrap">{children}</p>
        </div>
      </CustomDialogContent>
    </Dialog>
  )
}

export default CompleteDialog
