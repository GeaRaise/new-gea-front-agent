import type { UserType } from ".."

/**
 * 顧問先表示タイプ
 */
export type ClientType = {
  from_user?: number | null
  id: number
  user: UserType
}
