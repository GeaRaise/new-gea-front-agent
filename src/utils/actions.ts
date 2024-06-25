import { STATUS_IS_ACTIVE } from "@/constants"
import {
  DELETE_BUTTON_TEXT,
  DELETE_DISCRIPTION,
  DELETE_TITLE,
  INVITE_BUTTON_TEXT,
  INVITE_DISCRIPTION,
  INVITE_TITLE,
} from "@/constants/dialog"
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

/**
 * ダイアログに表示する情報を取得
 * @param mode ダイアログのモード "invite : 招待" or "delete : 削除"
 * @returns
 */
export const getDialogInfo = (
  mode: "invite" | "delete",
): {
  title: string
  discription: string
  buttonText: string
} => {
  switch (mode) {
    case "invite":
      return {
        title: INVITE_TITLE,
        discription: INVITE_DISCRIPTION,
        buttonText: INVITE_BUTTON_TEXT,
      }
    case "delete":
      return {
        title: DELETE_TITLE,
        discription: DELETE_DISCRIPTION,
        buttonText: DELETE_BUTTON_TEXT,
      }
    default:
      return {
        title: "",
        discription: "",
        buttonText: "",
      }
  }
}
