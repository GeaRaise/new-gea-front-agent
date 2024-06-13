"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { ClientType } from "@/types/clients"
import type { ColumnDef, RowData } from "@tanstack/react-table"
import { Ellipsis } from "lucide-react"
import { getIsActiveStatusLabel } from "../actions"

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    width?: string
    minWidth?: string
  }
}
export const columns: ColumnDef<ClientType>[] = [
  {
    accessorKey: "id",
    id: "id",
    header: () => {
      return <div>顧問先No.</div>
    },
    filterFn: "equalsString",
    enableGlobalFilter: false,
    meta: {
      width: "5%",
      minWidth: "100px",
    },
  },
  {
    accessorFn: (info) => info.user.profile.company.name,
    id: "companyName",
    header: () => {
      return <div>顧問先会社名</div>
    },
    meta: {
      width: "15%",
      minWidth: "145px",
    },
  },
  {
    accessorFn: (info) => `${info.user.profile.first_name} ${info.user.profile.last_name}`,
    id: "userName",
    header: () => {
      return <div>顧問先担当者名</div>
    },
    meta: {
      width: "15%",
      minWidth: "145px",
    },
  },
  {
    accessorFn: (info) => info.user.email,
    id: "email",
    header: () => {
      return <div>登録メールアドレス</div>
    },
    meta: {
      width: "15%",
      minWidth: "215px",
    },
  },
  {
    accessorFn: (info) => info.user.is_active,
    id: "status",
    header: () => {
      return <div>ステータス</div>
    },
    enableResizing: false,
    enableGlobalFilter: false,
    cell: (info) => {
      return getIsActiveStatusLabel(info.getValue() as string)
    },
    meta: {
      width: "5%",
      minWidth: "100px",
    },
  },
  {
    accessorKey: "menu",
    id: "menu",
    header: "",
    enableResizing: false,
    enableGlobalFilter: false,
    meta: {
      width: "5%",
      minWidth: "60px",
    },
    cell: () => {
      return (
        <Popover>
          <PopoverTrigger>
            <Ellipsis />
          </PopoverTrigger>
          <PopoverContent className="w-40 p-5 flex flex-col items-start gap-3" align="start">
            <button className="text-geatextgray transition-all hover:text-geatext">代理登録</button>
            <button className="text-geatextgray transition-all hover:text-geatext">新規招待</button>
            <button className="text-primary transition-all hover:text-red-800">削除</button>
          </PopoverContent>
        </Popover>
      )
    },
  },
]
