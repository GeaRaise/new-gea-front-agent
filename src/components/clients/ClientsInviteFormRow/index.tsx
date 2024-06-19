import { Input } from "@/components/ui/input"
import type { FC } from "react"

const ClientsInviteFormRow: FC = () => {
  return (
    <div className="flex px-1">
      <div className="w-36 px-2 py-3">
        <Input
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="株式会社GeaRaise"
        />
      </div>
      <div className="w-36 px-2 py-3">
        <Input
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="性"
        />
      </div>
      <div className="w-36 px-2 py-3">
        <Input
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="名"
        />
      </div>
      <div className="px-2 py-3 flex-1">
        <Input
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
          placeholder="example@gearaise.co.jp"
        />
      </div>
    </div>
  )
}

export default ClientsInviteFormRow
