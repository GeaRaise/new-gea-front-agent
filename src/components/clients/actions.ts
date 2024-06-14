/**
 * 承認ステータスによるアクション
 */
export const STATUS_ACTIONS = [
  {
    id: "7",
    name: "登録済み",
    action: [
      {
        id: "1",
        label: "詳細",
      },
      {
        id: "2",
        label: "削除",
      },
    ],
  },
  {
    id: "8",
    name: "招待済み",
    action: [
      {
        id: "1",
        label: "代理登録",
      },
      {
        id: "2",
        label: "再招待",
      },
      {
        id: "3",
        label: "削除",
      },
    ],
  },
  {
    id: "10",
    name: "代理登録",
    action: [
      {
        id: "1",
        label: "代理登録",
      },
      {
        id: "2",
        label: "新規招待",
      },
      {
        id: "3",
        label: "削除",
      },
    ],
  },
  {
    id: "11",
    name: "代理登録",
    action: [
      {
        id: "1",
        label: "代理登録",
      },
      {
        id: "2",
        label: "削除",
      },
    ],
  },
]
/**
 * ステータスによるアクションを取得
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
