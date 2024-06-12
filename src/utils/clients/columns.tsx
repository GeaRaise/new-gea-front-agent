"use client"

import { getStatusLabel } from "@/components/clients/ClientsTable/action"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { ClientType } from "@/types/clients"
import type { ColumnDef } from "@tanstack/react-table"
import { Ellipsis } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// const columnHelper = createColumnHelper<AgentUserType>()

export const columns: ColumnDef<ClientType>[] = [
  {
    accessorKey: "id",
    id: "id",
    header: () => {
      return <div>顧問先No.</div>
    },
    enableResizing: false,
    size: 12,
    maxSize: 12,
    filterFn: "equalsString",
    enableGlobalFilter: false,
  },
  {
    accessorFn: (info) => info.user.profile.company.name,
    id: "companyName",
    header: () => {
      return <div>顧問先会社名</div>
    },
    enableResizing: false,
    size: 8,
    maxSize: 8,
  },
  {
    accessorFn: (info) => `${info.user.profile.first_name} ${info.user.profile.last_name}`,
    id: "userName",
    header: () => {
      return <div>顧問先担当者名</div>
    },
    enableResizing: false,
    size: 8,
    maxSize: 8,
  },
  {
    accessorFn: (info) => info.user.email,
    id: "email",
    header: () => {
      return <div>登録メールアドレス</div>
    },
    enableResizing: false,
    size: 8,
    maxSize: 8,
  },
  {
    accessorFn: (info) => info.user.is_active,
    id: "status",
    header: () => {
      return <div>ステータス</div>
    },
    enableResizing: false,
    size: 12,
    maxSize: 12,
    enableGlobalFilter: false,
    cell: (info) => {
      return getStatusLabel(info.getValue() as string)
    },
  },
  {
    accessorKey: "menu",
    id: "menu",
    header: "",
    enableResizing: false,
    size: 5,
    maxSize: 5,
    enableGlobalFilter: false,
    cell: () => {
      return (
        <Popover>
          <PopoverTrigger>
            <Ellipsis />
          </PopoverTrigger>
          <PopoverContent className="w-40 p-5 flex flex-col items-start gap-3">
            <button className="text-geatextgray transition-all hover:text-geatext">代理登録</button>
            <button className="text-geatextgray transition-all hover:text-geatext">新規招待</button>
            <button className="text-primary transition-all hover:text-red-800">削除</button>
          </PopoverContent>
        </Popover>
      )
    },
  },
]
