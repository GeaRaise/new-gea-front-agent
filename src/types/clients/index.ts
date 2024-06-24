import type { UserType } from ".."

/**
 * 顧問先表示タイプ
 */
export type ClientType = {
  from_user?: number | null
  id: number
  user: UserType
}
/**
 * 顧問先招待フォームタイプ
 */
export type ClientInviteFormType = {
  id: number
  companyName: string
  first_name: string
  last_name: string
  email: string
  errors: {
    email: string
  }
}
