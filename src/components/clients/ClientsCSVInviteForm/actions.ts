import type { ClientInviteFormType } from "@/types/clients"

/**
 * 項目が全て入力されているかどうか
 * @returns {boolean} true: 全て入力されている, false: 入力されていない
 */
export const isRowComplete = (item: ClientInviteFormType) => {
  return (
    item.companyName !== "" && item.first_name !== "" && item.last_name !== "" && item.email !== ""
  )
}

/**
 * ボタンのdisabledを判定する
 */
export const isDisabled = (items: ClientInviteFormType[]) => {
  // 1つ以上の行が全て入力されているかどうか
  const someRowComplete = items.some(isRowComplete)

  // 全ての行が全て入力されているかどうか
  const allRowsCompleteOrEmpty = items.every(
    (item) =>
      isRowComplete(item) ||
      (item.companyName === "" &&
        item.first_name === "" &&
        item.last_name === "" &&
        item.email === ""),
  )

  // エラーがあるかどうか
  const isError = items.some((item) => item.errors.email !== "")

  return !(someRowComplete && allRowsCompleteOrEmpty && !isError)
}
