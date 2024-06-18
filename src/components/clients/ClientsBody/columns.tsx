"use client"
import ClientsPopAction from "@/components/clients/ClientsPopAction"
import type { ClientType } from "@/types/clients"
import { getIsActiveStatusLabel } from "@/utils/actions"
import type { ColumnDef, RowData } from "@tanstack/react-table"

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    width?: string
    minWidth?: string
  }
}
export const columns: ColumnDef<ClientType>[] = [
  {
    accessorFn: (info) => info.user.id,
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
      width: "20%",
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
      width: "20%",
      minWidth: "145px",
    },
  },
  {
    accessorFn: (info) => info.user.email,
    id: "email",
    header: () => {
      return <div>登録メールアドレス</div>
    },
    cell: (info) => {
      return info.getValue() === undefined ? "-" : info.getValue()
    },
    meta: {
      width: "28%",
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
      minWidth: "65px",
    },
    cell: (info) => {
      const { user } = info.row.original
      // 招待情報が不足しているかどうか
      const isLack =
        user.profile.company.name === undefined ||
        user.profile.first_name === undefined ||
        user.profile.last_name === undefined ||
        user.email === undefined

      return <ClientsPopAction statusId={user.is_active} isLack={isLack} userId={user.id} />
    },
  },
]
