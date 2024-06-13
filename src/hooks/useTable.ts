import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"

type PropsType<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export const useTable = <TData, TValue>({ columns, data }: PropsType<TData, TValue>) => {
  const [filtering, setFiltering] = useState("")
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

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

  return {
    table,
    filtering,
    setFiltering,
    columnFilters,
    setColumnFilters,
  }
}
