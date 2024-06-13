import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Table } from "@tanstack/react-table"
import type { ReactNode } from "react"

type PropsType<TData> = {
  table: Table<TData>
  selectFilterItems: { value: string; label: string }[]
  combobox: ReactNode
}

const ClientsTableToolBar = <TData,>({ table, selectFilterItems, combobox }: PropsType<TData>) => {
  return (
    <div className="flex items-center py-4 gap-4 justify-between flex-wrap">
      <div className="flex gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-geatextgray text-xs">検索条件</span>
          <Select
            onValueChange={(value) => {
              if (value === "0") {
                table.getColumn("status")?.setFilterValue(null)
              } else {
                table.getColumn("status")?.setFilterValue(value)
              }
            }}
          >
            <SelectTrigger className="w-[180px] data-[placeholder]:text-geatextgray text-geatextgray">
              <SelectValue placeholder={selectFilterItems[0].label} />
            </SelectTrigger>
            <SelectContent side="bottom">
              {selectFilterItems.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  className="text-geatextgray cursor-pointer"
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-geatextgray text-xs">
            {table.getState().pagination.pageSize * table.getState().pagination.pageIndex + 1}-
            {/* 最終ページの場合 */}
            {table.getPageCount() === table.getState().pagination.pageIndex + 1
              ? table.getFilteredRowModel().rows.length
              : table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1)}
            /{table.getFilteredRowModel().rows.length}件
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="w-[80px] data-[placeholder]:text-geatextgray text-geatextgray">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="bottom">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pageSize) => (
                <SelectItem
                  className="text-geatextgray cursor-pointer"
                  key={pageSize}
                  value={`${pageSize}`}
                >
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-geatextgray text-xs">件ずつ表示</p>
        </div>
      </div>
      {combobox}
    </div>
  )
}

export default ClientsTableToolBar
