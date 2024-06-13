import { STATUS_ACTIONS } from "@/constants/clients"

/**
 *
 * @param statusId is_activeのステータスID
 * @param isLack 招待情報が不足しているかどうか true:不足している false:不足していない
 * @returns ステータスアクションリスト
 */
export const getActions = ({
  statusId,
  isLack,
}: { statusId: string | undefined; isLack: boolean }) => {
  let id = statusId
  if (isLack) {
    id = "11"
  }
  const status = STATUS_ACTIONS.find((status) => status.id === id)
  return status ? status.action : []
}
