import { ImportIcon } from "@/components/icons"
import { BaseDialog } from "@/components/layouts/components"
import { Button } from "@/components/ui/button"
import ClientsCSVReader from "../ClientsCSVReader"

const ClientsCSVDialog = () => {
  return (
    <>
      <BaseDialog
        dialogTitle="顧問先一括招待CSVデータアップロード"
        dialogTrigger={
          <Button
            variant="outline"
            size={"sm"}
            className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
          >
            <ImportIcon />
            <span className="text-[#A8A8A8]">一括インポート</span>
          </Button>
        }
      >
        <ClientsCSVReader />
      </BaseDialog>
    </>
  )
}

export default ClientsCSVDialog
