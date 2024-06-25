import ActiveLink from "@/components/elements/ActiveLink"
import { Button } from "@/components/ui/button"
import type { FC } from "react"
import ClientsCSVDialog from "../ClientsCSVDialog"
import ClientsInviteDialog from "../ClientsInviteDialog"

const ClientsAction: FC = () => {
  return (
    <div className="flex justify-end gap-4 w-full mb-11 items-center">
      <ClientsCSVDialog />
      <ClientsInviteDialog />
      <Button size="sm" className="bg-secondary text-white" asChild={true}>
        <ActiveLink href="/clients/proxy">代理登録</ActiveLink>
      </Button>
    </div>
  )
}

export default ClientsAction
