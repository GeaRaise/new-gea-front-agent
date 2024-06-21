import ActiveLink from "@/components/elements/ActiveLink"
import { ImportIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import type { FC } from "react"
import ClientsInviteDialog from "../ClientsInviteDialog"

const ClientsAction: FC = () => {
  return (
    <div className="flex justify-end gap-4 w-full mb-11 items-center">
      <Button
        variant="outline"
        size={"sm"}
        className="border-[#A8A8A8] flex gap-2 hover:bg-[#A8A8A8]/10"
      >
        <ImportIcon />
        <span className="text-[#A8A8A8]">一括インポート</span>
      </Button>
      <ClientsInviteDialog />
      <Button size="sm" className="bg-secondary text-white" asChild={true}>
        <ActiveLink href="/clients/proxy">代理登録</ActiveLink>
      </Button>
    </div>
  )
}

export default ClientsAction
