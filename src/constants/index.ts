/**
 * 共通Constants
 */

/**
 * Backend URL
 */
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_ORIGIN
  ? "/backend"
  : process.env.NEXT_PUBLIC_BACKEND_URL

/**
 * 承認状態ステータス is_active
 * 1: 申請中, 2: 申請済み(使用されているかわからない), 3: 却下, 4: 利用停止, 5: 利用再開,
 * 6: 退会, 7: 登録済み, 8: 承認待ち, 9: 招待中(使用されているかわからない), 10: 代理登録
 */
export const STATUS_IS_ACTIVE = [
  { id: "1", label: "申請中" },
  {
    id: "2",
    label: "申請済み",
  },
  {
    id: "3",
    label: "却下",
  },
  {
    id: "4",
    label: "利用停止",
  },
  {
    id: "5",
    label: "利用再開",
  },
  {
    id: "6",
    label: "退会",
  },
  {
    id: "7",
    label: "登録済み",
  },
  {
    id: "8",
    label: "承認待ち",
  },
  {
    id: "9",
    label: "招待中",
  },
  {
    id: "10",
    label: "代理登録",
  },
]
