"use client"
import { CustomCombobox } from "@/components/layouts/components"
import { DataTablePagination } from "@/components/layouts/components/DataTablePagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { statusFilterItems } from "@/constants/clients"
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"
import ClientsTableToolBar from "../ClientsTableToolBar"

type PropsType<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const ClientsTable = <TData, TValue>({ columns, data }: PropsType<TData, TValue>) => {
  const [filtering, setFiltering] = useState("")
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: "0",
      value: "すべて",
    },
  ])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,

    state: {
      columnFilters,
      globalFilter: filtering,
    },
  })

  /**
   * サジェストリストを取得
   */
  const suggests = useMemo(() => {
    const rows = table.getFilteredRowModel().rows

    const sortedUniqueValues: { key: string; value: string }[] = []

    rows
      .filter((row) => row.getValue("status") === "7") // 7(登録済み)のみ表示
      .map((row) => {
        sortedUniqueValues.push({
          key: row.getValue("id"),
          value: `${row.getValue("companyName")} ${row.getValue("userName")} ${row.getValue(
            "email",
          )}`,
        })
      })

    return sortedUniqueValues
  }, [table])

  return (
    <>
      <ClientsTableToolBar
        table={table}
        selectFilterItems={statusFilterItems}
        combobox={
          <div className="w-1/3 min-w-[400px]">
            <CustomCombobox
              setFiltering={setFiltering}
              placeholder="顧問先の会社名・担当者名・メールアドレスを入力してください"
              table={table}
              filtering={filtering}
              suggests={suggests}
            />
          </div>
        }
      />
      <div className="">
        <Table className="min-w-[800px]">
          <TableHeader className="bg-gray-50 w-full">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`max-w-[${header.getSize()}%] w-[${header.getSize()}%] min-w-[${header.getSize()}%]`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          key={cell.id}
                          className={`max-w-[${cell.column.getSize()}%] w-[${cell.column.getSize()}%] min-w-[${cell.column.getSize()}%] truncate text-geatext`}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-red-500 py-8 font-notoSansJp text-sm"
                >
                  ※検索結果に該当する顧問先情報が見つかりませんでした
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </>
  )
}

export default ClientsTable
