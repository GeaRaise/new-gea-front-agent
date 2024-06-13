import { STATUS_IS_ACTIVE } from "@/constants"
import type { Table } from "@tanstack/react-table"

/**
 * ステータスラベルを取得する
 * @param status ステータスID
 * @returns ステータスラベル
 */

export const getIsActiveStatusLabel = (id: string | undefined) => {
  const status = STATUS_IS_ACTIVE.find((status) => status.id === id)
  return status ? status.label : ""
}

/**
 * ページネーションを表示するか判定する
 * @param table テーブル情報
 * @returns ページネーション表示フラグ true:表示する false:表示しない
 */
export const isPagination = <TData>(table: Table<TData>) => {
  return table.getFilteredRowModel().rows.length > table.getState().pagination.pageSize
}
